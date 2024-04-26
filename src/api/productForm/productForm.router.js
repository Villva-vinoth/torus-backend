const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createProductForm, getAllProductFormData } = require("./productForm.Controller");

router.post("/createProductForm", createProductForm);
router.get('/getAllProductFormData',checkToken,getAllProductFormData);
// router.patch('/updateShowCaseById/:showcase_Id',checkToken,updateShowCaseById);
// router.patch('/deleteAdminProductDetailById/:product_id',deleteProjectDataDetailById);


module.exports = router;
