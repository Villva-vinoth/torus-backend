require("dotenv").config();
const express = require("express");
const app = express();
// const  cookieParser = require('cookie-parser')
const userRouter = require("./src/api/users/user.router");
const productRouter =require("./src/api/productMaster/product.router");
const showCaseRouter =require("./src/api/showCase/showCase.router");
const homeFormRouter =require("./src/api/homeForm/homeForm.router");
const contactFormRouter =require("./src/api/contactForm/contactForm.router");
const productFormRouter =require("./src/api/productForm/productForm.router");
const blogRouter =require("./src/api/blog/blog.router");
const testimonialsRouter =require("./src/api/testimonials/testimonials.router");
const awardsRouter =require("./src/api/awards/awards.router");

const emailRouter =require("./src/api/email/email.route");



const bodyParser = require("body-parser");
const cors = require('cors');
const sql = require('./src/config/database');
const { createUser } =require('./src/model/users.model');
const { createProduct}=require('./src/model/product.model');
const { createShowCase }=require('./src/model/showCase.model');
const { createHomeForm }=require('./src/model/HomeForm.model');
const { createContactForm }=require('./src/model/contactForm.model');
const { createProductForm }=require('./src/model/productForm.model');
const { createBlog }=require('./src/model/blog.model');
const { createTestimonials }=require('./src/model/testimonials.model');
const { createAwards }=require('./src/model/awards.model');


const  imageRoute  =require('./src/api/ImageRoute/ImageRoute');
const token_validation = require("./src/auth/token_validation");



const corsOptions = {
  origin: ['https://torusrobotics.com','http://localhost:3000'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE', 'OPTIONS'],
  optionSuccessStatus:200,
  credentials: true, // Required if the frontend needs to send cookies or use authentication
};

app.use(cors());

app.use(bodyParser.json());

sql.getConnection((err, connection) => {
  if (err) {
    console.log("error",err)
    // process.exit(1); 

  }
  
  if (connection) {
    console.log("connected to mysql")
    // createUser()
    // createProduct()
    // createShowCase()
    // createHomeForm()
    // createContactForm()
    // createProductForm()
    // createBlog()
    // createTestimonials()
    // createAwards()
    // connection.end();

  }
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/product', imageRoute);
app.use('/api/upload', imageRoute);
app.use('/api/showCase', showCaseRouter);
app.use('/api/homeForm', homeFormRouter);
app.use('/api/contactForm', contactFormRouter);
app.use('/api/productForm',productFormRouter);
app.use('/api/blog',blogRouter);
app.use('/api/testimonials',testimonialsRouter);
app.use('/api/awards',awardsRouter);
app.use('/api/mail',emailRouter);

// app.use(cookieParser())

app.get('/',(req,res)=>{
  res.status(200).json({
    message:"Torus Status Active !"
  })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
