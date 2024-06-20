const { createBlog, getAllBlogDetails, updateBlogDataDetailById, deleteBlogDataDetailById, getRecentBlogDetails } = require("./blog.service");

module.exports = {
  createBlog: (req, res) => {
    const body = req.body;
      createBlog(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        else {
          return res.status(200).json({
            success: 1,
            message: "Data added Successfully",
            data: results
          });
        }
      });
    
    
  },
  getAllBlogDetails: (req, res) => {
    getAllBlogDetails((err, result) => {
      if (err)
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },
 
  updateBlogDataDetailById: (req, res) => {
    const body = req.body;
    updateBlogDataDetailById(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      }
      return res.status(200).json({
        success: 1,
        message:"Updated Successfully!"
      })
    })
  },
  deleteBlogDataDetailById: (req, res) => {
    const body = req.params;
    // console.log(req)
    deleteBlogDataDetailById(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      }
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },
  getRecentBlogDetails: (req, res) => {
    getRecentBlogDetails((err, result) => {
      if (err)
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },


};
