const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getRecentBlogDetails, deleteBlogDataDetailById, updateBlogDataDetailById, createBlog, getAllBlogDetails } = require("./blog.controller");
router.post("/createBlog",checkToken, createBlog);
router.get('/getAllBlog',getAllBlogDetails);
router.patch('/updateBlogDetailById',checkToken,updateBlogDataDetailById);
router.patch('/deleteBlogDetailById/:blog_id',checkToken,deleteBlogDataDetailById);
router.get('/getRecentProjectDataDetails',getRecentBlogDetails);


module.exports = router;
