const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUsersDetails,
  getUserDetailById,
  deleteUserDetailById,

} = require("./user.controller");

router.post("/register", createUser);
router.post("/login", login);
router.get('/getUserDetails',checkToken,getUsersDetails);
router.get('/getUserDetailById/:user_id',checkToken,getUserDetailById);
router.patch('/deleteUserDetailById/:user_id',checkToken,deleteUserDetailById);
router.post('/checkToken',checkToken);


module.exports = router;
