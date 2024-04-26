const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createProduct, getProjectDetails, updateProjectDataDetailById, deleteProjectDataDetailById, getRecentProjectDetails } = require("./product.controller");

// router.post("/createProjectData",checkToken, createProduct);
router.get('/getAllProductDataDetails',getProjectDetails);
router.patch('/updateAdminProductDetailById',checkToken,updateProjectDataDetailById);
router.patch('/deleteAdminProductDetailById/:product_id',checkToken,deleteProjectDataDetailById);
router.get('/getRecentProjectDataDetails',checkToken,getRecentProjectDetails);


module.exports = router;
