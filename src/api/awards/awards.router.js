const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {createAwards,getAllAwardsDetails, updateaAwardsDataDetailById, deleteAwardsDataDetailById   } = require("./awards.controller");
router.post("/createAwards",checkToken, createAwards);
router.get('/getAllAwards',getAllAwardsDetails);
router.patch('/updateAwardsDetailById',checkToken,updateaAwardsDataDetailById);
router.patch('/deleteAwardsDetailById/:awards_id',checkToken,deleteAwardsDataDetailById);


module.exports = router;
