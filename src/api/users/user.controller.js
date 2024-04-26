const {
  create,
  getUserByUserEmail,
  getUsersDetails,
  getUserDetailById,
  deleteUserDetailById,

} = require("./user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateUserData = (data) => {
  if (data.password.length < 8) {
    return { valid: false, message: "Password must be at least 8 characters long." };
  }

  const emailRegex = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm;
  if (!emailRegex.test(data.email)) {
    return { valid: false, message: "Please enter a valid email address." };
  }
  return { valid: true };
};

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const validationResult = validateUserData(body);
    if (!validationResult.valid) {
      return res.status(422).json({
        success: 0,
        message: validationResult.message
      });
    }
      const salt = bcrypt.genSaltSync(10);
      body.password = bcrypt.hashSync(body.password, salt);
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        if (results === 'already Exits!') {
          return res.status(409).json({
            success: 0,
            data: "User Already Exists",
            message: "User Already Exists"
          });
        }
        else {
          return res.status(200).json({
            success: 1,
            message: "user registered Successfully",
            data: results
          });
        }
      });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      if (!results) {
        return res.status(422).json({
          success: 0,
          message: "Invalid email"
        });
      }

      const result = bcrypt.compareSync(body.password, results.password)
      const Sessiontime=3 * 24 * 60 * 60*1000
      if (result) {
        const jsontoken = jwt.sign({ email: body.email }, "vk@123", {
          expiresIn: Sessiontime
        });
        res.cookie('jwtToken', jsontoken, {
          withCredentials: true,
          httpOnly: false,
          maxAge: Sessiontime,
          
      });
         return res.status(200).json({
          success: 1,
          userID: results.t_id,
          token: jsontoken,
        });
      } else {
        return res.status(422).json({
          success: 0,
          message: "Invalid password"
        });
      }
    });
  },
  getUsersDetails: (req, res) => {
    getUsersDetails((err, result) => {
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
  getUserDetailById: (req, res) => {
    const body = req.params;
    getUserDetailById(body, (err, result) => {
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
  // updateUserDetailById: (req, res) => {
  //   const body = req.body;
  //   updateUserDetailById(body, (err, result) => {
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
  deleteUserDetailById: (req, res) => {
    const body = req.params;
    deleteUserDetailById(body, (err, result) => {
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
