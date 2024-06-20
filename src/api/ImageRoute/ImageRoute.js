const router = require("express").Router();
const multer = require('multer');
const  cloudinary   = require('../../config/ImageConfig');
const { createProduct } = require("../productMaster/product.controller");
const { checkToken } = require("../../auth/token_validation");
const upload = multer({ dest: 'images/' });

router.post('/createProduct',checkToken, upload.single('product_image'), async (req, res) => {
    try {

      const result = await cloudinary.uploader.upload(req.file.path);
      const productData ={
        ...req.body,
        product_image:result.secure_url
      }

      createProduct(req,res,productData);
    } 
    catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      res.status(500).json({ message: 'Error uploading image' });
    }
  })

router.post('/uploadImage',checkToken, upload.single('image'), async (req, res) => {
    try {
      // console.log(req)
      const result = await cloudinary.uploader.upload(req.file.path);
      res.send({image:result.secure_url})
    } 
    catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      res.status(500).json({ message: 'Error uploading image' }); 
    }
})


module.exports = router