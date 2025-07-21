# 🏕️ CampIndia

**Discover Amazing Campgrounds Across Incredible India**

CampIndia is a full-stack web application that helps camping enthusiasts discover, review, and share campgrounds across India. From the majestic Himalayas to serene beaches, find your perfect camping adventure!

![CampIndia Homepage](https://img.shields.io/badge/Status-Active-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-v14+-green) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)

## ✨ Features

### 🌟 Core Functionality
- **Browse Campgrounds**: Explore a diverse collection of campgrounds across India
- **Add New Campgrounds**: Share your favorite camping spots with the community
- **Detailed Information**: View comprehensive details including location, pricing, and descriptions
- **Edit & Update**: Modify campground information with real-time updates
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 User Experience
- **Beautiful UI**: Modern, intuitive interface with gradient designs and smooth animations
- **Interactive Navigation**: Easy-to-use navigation with clear call-to-action buttons
- **Form Validation**: Client and server-side validation for data integrity
- **Error Handling**: Comprehensive error handling with user-friendly messages

### 🛡️ Technical Features
- **RESTful Routes**: Clean, semantic URL structure
- **Data Validation**: Input validation using Joi schema validation
- **Error Middleware**: Custom error handling and async error catching
- **Template Engine**: EJS with layouts for maintainable code
- **Database Integration**: MongoDB with Mongoose ODM

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RockingAyush04/CampIndia.git
   cd CampIndia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your database**
   - For local MongoDB: Make sure MongoDB is running on `mongodb://127.0.0.1:27017`
   - For MongoDB Atlas: Update the connection string in `app.js`

4. **Seed the database (optional)**
   ```bash
   node seeds/index.js
   ```

5. **Start the application**
   ```bash
   npm start
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
CampIndia/
├── models/
│   └── campground.js          # Mongoose schema for campgrounds
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs    # Base template layout
│   ├── partials/
│   │   ├── navbar.ejs         # Navigation component
│   │   └── footer.ejs         # Footer component
│   ├── campgrounds/
│   │   ├── index.ejs          # All campgrounds listing
│   │   ├── show.ejs           # Individual campground details
│   │   ├── new.ejs            # Add new campground form
│   │   └── edit.ejs           # Edit campground form
│   ├── home.ejs               # Landing page
│   └── error.ejs              # Error page template
├── utils/
│   ├── catchAsync.js          # Async error handling wrapper
│   └── ExpressError.js        # Custom error class
├── seeds/
│   ├── index.js               # Database seeding script
│   ├── cities.js              # City data for seeding
│   ├── indianCities.js        # Indian cities data
│   └── seedHelpers.js         # Helper functions for seeding
├── app.js                     # Main application file
├── schemas.js                 # Joi validation schemas
└── package.json               # Project dependencies and scripts
```

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS** - Template engine
- **Bootstrap 5** - CSS framework
- **JavaScript** - Client-side interactivity

### Validation & Error Handling
- **Joi** - Schema validation
- **Custom middleware** - Error handling and async operations

### Development Tools
- **Method-Override** - HTTP verb support
- **EJS-Mate** - Layout support for EJS

## 📡 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Homepage |
| GET | `/campgrounds` | View all campgrounds |
| GET | `/campgrounds/new` | Show form to create new campground |
| POST | `/campgrounds` | Create a new campground |
| GET | `/campgrounds/:id` | Show specific campground |
| GET | `/campgrounds/:id/edit` | Show form to edit campground |
| PUT | `/campgrounds/:id` | Update a specific campground |
| DELETE | `/campgrounds/:id` | Delete a specific campground |

## 🎯 Key Features Breakdown

### Data Validation
- **Server-side validation** using Joi schemas
- **Client-side validation** with Bootstrap validation classes
- **Sanitization** of user inputs

### Error Handling
- **Custom error classes** for different error types
- **Async wrapper functions** to catch async errors
- **User-friendly error pages** with helpful messages

### Responsive Design
- **Mobile-first approach** using Bootstrap
- **Flexible grid system** for different screen sizes
- **Interactive elements** with hover effects and animations

## 🔧 Configuration

### Database Configuration
```javascript
// For local development
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

// For production (MongoDB Atlas)
mongoose.connect(process.env.MONGODB_URI)
```

### Environment Variables (for production)
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3000
```

## 🚀 Deployment

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Set up MongoDB Atlas for production database
3. Configure environment variables in Vercel dashboard
4. Deploy: `vercel --prod`

### Environment Setup for Production
- Set up MongoDB Atlas cluster
- Configure environment variables
- Update database connection for production

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush** - [RockingAyush04](https://github.com/RockingAyush04)

## 🙏 Acknowledgments

- Inspired by camping enthusiasts across India
- Built as part of web development learning journey
- Thanks to the open-source community for amazing tools and libraries

## 📊 Project Stats

- **Languages**: JavaScript, HTML, CSS
- **Framework**: Express.js
- **Database**: MongoDB
- **Styling**: Bootstrap 5
- **Template Engine**: EJS

---

**Happy Camping! 🏕️** Explore the beauty of India, one campground at a time.

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/FF6B35/FFFFFF?text=CampIndia+Homepage)

### Campgrounds Listing
![Campgrounds](https://via.placeholder.com/800x400/667EEA/FFFFFF?text=Campgrounds+Listing)

### Add New Campground
![Add Campground](https://via.placeholder.com/800x400/764BA2/FFFFFF?text=Add+New+Campground)

---

**Made with ❤️ for camping enthusiasts across India**
