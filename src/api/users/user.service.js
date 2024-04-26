const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    try {
  
        pool.query(`select email from usermaster where email=? and deleteflag=0`, [data.email], (err, result) => {
          if (err) callBack(err)
          if (result.length === 0) {
            pool.query(
              `insert into usermaster(email, password) values(?,?)`,
              [
                data.email,
                data.password,
              ],
              (error, results, fields) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results);
              }
            );
          }
          else {
            return callBack(null, "already Exits!");
          }
        })
    }
    catch (err) {
      return callBack(err);
    }

  },
  getUserByUserEmail: (email, callBack) => {
    try {
      pool.query(
        `select * from usermaster where email = ? and deleteflag=0`,
        [email],
        (error, results) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    }
    catch (err) {
      return callBack(err);
    }

  },
  getUsersDetails: (callBack) => {

    try {
      pool.query(`select  t_id,createAt,email,password from usermaster where deleteflag=0`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  getUserDetailById: (data, callBack) => {

    try {
      pool.query(`select t_id,createAt,email from usermaster where t_id=? and deleteflag=0`, [data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result[0]);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  // updateUserDetailById: (data, callBack) => {
  //   try {
  //     pool.query(`update usermaster set email=?,password=? where t_id=?`, [
  //     data.email,
  //     data.password, data.user_id], (err, result) => {
  //       if (err) return callBack(err);
  //       return callBack(null, result);
  //     })
  //   } catch (error) {
  //     return callBack(error)
  //   }
  // },
  deleteUserDetailById: (data, callBack) => {
    try {
      pool.query(`update usermaster set deleteflag = 1 where user_id=?`, [data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
 
};
