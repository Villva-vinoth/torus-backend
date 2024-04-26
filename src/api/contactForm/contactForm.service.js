const pool = require("../../config/database");

module.exports = {
  createContactForm: (data, callBack) => {
    try {
      let query = `insert into ContactForm (name,company,email,comments) values (?,?,?,?)`
      pool.query(
        query,[
          data.name,
          data.company_name,
          data.bussiness_email,
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

  getAllContactFormDatas: (callBack) => {
    try {
      pool.query(`select * from contactForm where deleteflag = 0 order by c_form_id desc`, (err, result) => {
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
