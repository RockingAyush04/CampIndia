
const mongoose=require('mongoose');
const indianCities=require('./indianCities');
const {places,descriptors}=require('./seedHelpers');
const Campground=require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
.then(()=>{
    console.log("connected to database");
})
.catch(err => {
    console.log("Error connecting to database", err);
})

const sample= (array) =>array[Math.floor(Math.random()*array.length)];

const seedDB= async()=>{
    await Campground.deleteMany({});
    // const c=new Campground({title:'purple field'});
    // await c.save();
    for (let i=0;i<50;i++){
        const random100=Math.floor(Math.random()*100);
        const price=(Math.floor(Math.random()*5000))+1500;
        const camp=new Campground({
            location:`${indianCities[random100].city},${indianCities[random100].admin_name}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            image: `https://picsum.photos/400?random=${Math.random()}`,
            description: "TO BE ADDED",
            price:price,
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
