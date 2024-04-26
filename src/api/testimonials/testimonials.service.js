const pool = require("../../config/database");

module.exports = {
  createTestimonials: (data, callBack) => {
    try {
      // console.log(data)
      let query = `insert into testimonials (testimonials_image,testimonials_name,testimonials_description,user_id) values (
          ?,?,?,?)`
      pool.query(
        query,[
          data.testimonials_image,
          data.testimonials_name,
          data.testimonials_description,
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

  getTestimonialsDetails: (callBack) => {
    try {
      pool.query(`select * from testimonials where deleteflag = 0 order by testimonials_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateTestimonialsDataDetailById: (data, callBack) => {
    try {
      pool.query(`update testimonials set testimonials_image=?,
      testimonials_name=?,
      testimonials_description=?
       where testimonials_id =?`,
        [
          data.testimonials_image,
          data.testimonials_name,
          data.testimonials_description,
        data.testimonials_id], (err, result) => {
          if (err) return callBack(err);
          return callBack(null, result);
        })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteTestimonialsDataDetailById: (data, callBack) => {
    try {
      console.log(data)
      pool.query(`update testimonials set deleteflag = 1 where testimonials_id=?`, [data.testimonialId], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })  
    } catch (error) {
      return callBack(error)
    }
  },
};
