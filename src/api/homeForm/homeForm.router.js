const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createHomeForm, getAllFormDatas } = require("./homeForm.controller");

router.post("/createHomeForm", createHomeForm);
router.get('/getAllHomeFormData',checkToken,getAllFormDatas);
// router.patch('/updateShowCaseById/:showcase_Id',checkToken,updateShowCaseById);
// router.patch('/deleteAdminProductDetailById/:product_id',deleteProjectDataDetailById);


module.exports = router;
