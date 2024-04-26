const pool = require("../../config/database");

module.exports = {
  createAwards: (data, callBack) => {
    try {
      
      let query = `insert into awards (awards_image,awards_name,user_id) values ( ? , ? , ? )`
      pool.query(
        query,[
          data.awards_image,
          data.awards_name,
          data.user_id
        ],(err,result)=>{
          if(err){
            return callBack(err)
          }
          return callBack(null,result);
        }
      )

    }
    catch (err) {
      return callBack(err);
    }

  },

  getAllAwardsDetails: (callBack) => {
    // console.log("hi")
    try {
      pool.query(`select * from awards where deleteflag = 0 order by awards_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateaAwardsDataDetailById: (data, callBack) => {
    try {
      pool.query(`update awards set awards_image=?,
      awards_name=? where awards_id =?`,
        [
          data.awards_image,
          data.awards_name,
          data.awards_id
        ], (err, result) => {
          if (err) return callBack(err);
          return callBack(null, result);
        })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteAwardsDataDetailById: (data, callBack) => {
    try {
      pool.query(`update awards set deleteflag = 1 where awards_id=?`, [data.awards_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
};
