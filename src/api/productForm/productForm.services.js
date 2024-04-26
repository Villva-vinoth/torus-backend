const pool = require("../../config/database");

module.exports = {
   createProductForm: (data, callBack) => {
    try {
      let query = `insert into productForm (product_id,name,contact_no,email,comments) values (?,?,?,?,?)`
      pool.query(
        query,[
          data.product_id,
          data.name,
          data.contact_number,
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

  getAllProductFormData: (callBack) => {
    try {
      pool.query(`select * from productForm p join productmaster pm on p.product_id=pm.product_id and p.deleteflag = 0 order by p.p_form_id desc`, (err, result) => {
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
