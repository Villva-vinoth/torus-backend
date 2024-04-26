const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createShowCase, getAllShowCase, updateShowCaseById } = require("./showCase.controller");

router.post("/createShowCase",checkToken, createShowCase);
router.get('/getAllShowCase',getAllShowCase);
router.patch('/updateShowCaseById',checkToken,updateShowCaseById);
// router.patch('/deleteAdminProductDetailById/:product_id',deleteProjectDataDetailById);


module.exports = router;
