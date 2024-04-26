const { createTestimonials, getTestimonialsDetails, updateTestimonialsDataDetailById, deleteTestimonialsDataDetailById } = require("./testimonials.service");


module.exports = {
  createTestimonials: (req, res) => {
    const body = req.body;
    // console.log(req)
    createTestimonials(body, (err, results) => {
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
  getTestimonialsDetails: (req, res) => {
    getTestimonialsDetails((err, result) => {
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
 
  updateTestimonialsDataDetailById: (req, res) => {
    const body = req.body;
    updateTestimonialsDataDetailById(body, (err, result) => {
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
  deleteTestimonialsDataDetailById: (req, res) => {
    const body = req.params;
    // console.log
    deleteTestimonialsDataDetailById(body, (err, result) => {
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

};
