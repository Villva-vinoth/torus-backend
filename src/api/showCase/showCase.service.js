const pool = require("../../config/database");

module.exports = {
  createShowCase: (data, callBack) => {
    try {

      
      let query = `insert into ShowCase (showcase_name) values (?)`
      pool.query(
        query,[
          data.showcase_name,
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

  getAllShowCase: (callBack) => {
    try {
      pool.query(`select * from showcase where deleteflag = 0 order by showcase_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateShowCaseById: (data, callBack) => {
    try {
      pool.query(`update showCase set showcase_value=? where showcase_id =?`,
        [
          data.showcase_value,
        data.showcase_id], (err, result) => {
          if (err) return callBack(err);
          return callBack(null, result);
        })
    } catch (error) {
      return callBack(error)
    }
  },
  // deleteProjectDataDetailById: (data, callBack) => {
  //   try {
  //     pool.query(`update productMaster set deleteflag = 1 where product_id=?`, [data.product_id], (err, result) => {
  //       if (err) return callBack(err);
  //       return callBack(null, result);
  //     })
  //   } catch (error) {
  //     return callBack(error)
  //   }
  // },
 
};
