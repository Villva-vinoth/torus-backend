const { createProductForm,  getAllProductFormData } = require("./productForm.services");


module.exports = {
  createProductForm: (req, res) => {
    const body = req.body;
    createProductForm(body, (err, results) => {
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
  getAllProductFormData: (req, res) => {
    getAllProductFormData((err, result) => {
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
 
  // updateShowCaseById: (req, res) => {
  //   const body = req.params;
  //   updateShowCaseById(body, (err, result) => {
  //     if (err) {
  //       return res.status(500).json({
  //         success: 0,
  //         message: "Database Connection Error"
  //       })
  //     }
  //     return res.status(200).json({
  //       success: 1,
  //       message:"Updated Successfully!"
  //     })
  //   })
  // },
  // deleteProjectDataDetailById: (req, res) => {
  //   const body = req.params;
  //   deleteProjectDataDetailById(body, (err, result) => {
  //     if (err) {
  //       return res.status(500).json({
  //         success: 0,
  //         message: "Database Connection Error"
  //       })
  //     }
  //     return res.status(200).json({
  //       success: 1,
  //       data: result
  //     })
  //   })
  // },

};