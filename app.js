const express=require('express');
const mongoose=require('mongoose');
const path =require('path');
const ejsMate= require('ejs-mate');
const Joi=require('joi');
const catchAsync=require('./utils/catchAsync');
const ExpressError=require('./utils/ExpressError');
const methodOverride=require('method-override');
const Campground=require('./models/campground');
// const campground = require('./models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
.then(()=>{
    console.log("connected to database");
})
.catch(err => {
    console.log("Error connecting to database", err);
})

const app=express();

app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//JOI VALIDATION MIDDLEWARE
const validateCampground = (req,res,next)=>{
    const campgroundSchema= Joi.object({
        campground:Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required().min(0),
            image:Joi.string().required(),
            location:Joi.string().required(),
            image:Joi.string().required(),
        }).required()
    })
    // const result=campgroundSchema.validate(req.body);
    // if (result.error){
    //     throw new ExpressError(result.error.details[0].message,400);
    // }
    const {error}=campgroundSchema.validate(req.body);
    if (error){
        const msg=error.details.map(el=>el.message).join(',');
        throw new ExpressError(msg,400);
    }else{
        next();
    }
}

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/campgrounds', async (req,res)=>{
    const campgrounds=await Campground.find({});
    res.render('campgrounds/index',{campgrounds});
})
app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/new');
})

// app.post('/campgrounds',async(req,res,next)=>{  /*To add the new camground through POST request */
//     try{
//         const campground=new Campground(req.body.campground);
//     await campground.save();
//     res.redirect(`/campgrounds/${campground._id}`);
//     }catch(e){
//         next(e);
//     }
// })


app.post('/campgrounds',validateCampground,catchAsync(async(req,res,next)=>{  /*To add the new camground through POST request */
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data',400)
    
    const campground=new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
    
}));
app.get('/campgrounds/:id', catchAsync(async (req,res)=>{
    const campground=await Campground.findById(req.params.id);
    res.render('campgrounds/show',{campground});
}))

// npm i method-override
app.get('/campgrounds/:id/edit', catchAsync(async(req,res)=>{
    const campground=await Campground.findById(req.params.id);
    res.render('campgrounds/edit',{campground});
}))

app.put('/campgrounds/:id',catchAsync(async (req,res)=>{
    const {id}=req.params;
   const campground=await Campground.findByIdAndUpdate(id,{...req.body.campground});
   res.redirect(`/campgrounds/${campground._id}`)
}))

app.delete('/campgrounds/:id',catchAsync(async(req,res)=>{
    const {id}=req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))



// app.get('/makecampground',async (req,res)=>{
//     const camp=new Campground({title:'My Backyard',description:'Cheap camping'});
//     await camp.save();
//     res.send(camp);
// })

app.all('*',(req,res,next)=>{
    // res.send("404!!!");
    next(new ExpressError('Page not found',404));
})

app.use((err,req,res,next)=>{
    // const {statusCode=500,message='Something went wrong'}= err;
    const {statusCode=500}= err;
    if (!err.message) err.message='Oh no, Something went wrong'
    // res.status(statusCode).send(message);
    res.status(statusCode).render('error',{err});
    // res.send("BRUH U WRONG");
    
})


app.listen(3000,()=>{
    console.log("SERVING PORT 3000");
})