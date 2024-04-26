require("dotenv").config();
const express = require("express");
const app = express();
const  cookieParser = require('cookie-parser')
const userRouter = require("./src/api/users/user.router");
const productRouter =require("./src/api/productMaster/product.router");
const showCaseRouter =require("./src/api/showCase/showCase.router");
const homeFormRouter =require("./src/api/homeForm/homeForm.router");
const contactFormRouter =require("./src/api/contactForm/contactForm.router");
const productFormRouter =require("./src/api/productForm/productForm.router");
const blogRouter =require("./src/api/blog/blog.router");
const testimonialsRouter =require("./src/api/testimonials/testimonials.router");
const awardsRouter =require("./src/api/awards/awards.router");




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
app.use(cors({
  origin: 'http://localhost:3000',
  methods:['GET','POST','PATCH ','DELETE'],
  allowedHeaders:['Content-Type','Authorization'],
  credentials:true,
  exposedHeaders:['set-cookie']
}))
app.use(bodyParser.json());

sql.getConnection((err, connection) => {
  if (err) {
    console.log(err)
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

app.use(cookieParser())



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
