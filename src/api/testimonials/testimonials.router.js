const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {  createTestimonials, getTestimonialsDetails, updateTestimonialsDataDetailById, deleteTestimonialsDataDetailById } = require("./testimonials.controller");

router.post("/createTestimonialData",checkToken, createTestimonials);
router.get('/getAllTestimonialsDataDetails',getTestimonialsDetails);
router.patch('/updateTestimonialsDetailById',checkToken,updateTestimonialsDataDetailById);
router.patch('/deleteTestimonialsDetailById/:testimonialId',checkToken,deleteTestimonialsDataDetailById);


module.exports = router;
