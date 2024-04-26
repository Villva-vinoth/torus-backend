const pool = require("../../config/database");

module.exports = {
   createHomeForm: (data, callBack) => {
    try {

      
      let query = `insert into HomeForm (name,email,comments) values (?,?,?)`
      pool.query(
        query,[
          data.name,
          data.email,
          data.comments
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

  getAllFormDatas: (callBack) => {
    try {
      pool.query(`select * from HomeForm where deleteflag = 0 order by h_form_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  // updateShowCaseById: (data, callBack) => {
  //   try {
  //     pool.query(`update showCase set showcase_value=? where sho_id =?`,
  //       [
  //         data.showcase_value,
  //       data.product_id], (err, result) => {
  //         if (err) return callBack(err);
  //         return callBack(null, result);
  //       })
  //   } catch (error) {
  //     return callBack(error)
  //   }
  // },
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
