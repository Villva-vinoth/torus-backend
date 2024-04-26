const { deleteAwardsDataDetailById, updateaAwardsDataDetailById, getAllAwardsDetails, createAwards } = require("./awards.service");

module.exports = {
  createAwards: (req, res) => {
    const body = req.body;
    createAwards(body, (err, results) => {
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
  getAllAwardsDetails: (req, res) => {
    getAllAwardsDetails((err, result) => {
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
 
  updateaAwardsDataDetailById: (req, res) => {
    const body = req.body;
    updateaAwardsDataDetailById(body, (err, result) => {
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
  deleteAwardsDataDetailById: (req, res) => {
    const body = req.params;
    deleteAwardsDataDetailById(body, (err, result) => {
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
