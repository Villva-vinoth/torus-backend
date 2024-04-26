const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createContactForm, getAllContactFormDatas } = require("./contactForm.controller");

router.post("/createContactForm", createContactForm);
router.get('/getAllContactFormData',checkToken,getAllContactFormDatas);
// router.patch('/updateShowCaseById/:showcase_Id',checkToken,updateShowCaseById);
// router.patch('/deleteAdminProductDetailById/:product_id',deleteProjectDataDetailById);


module.exports = router;
