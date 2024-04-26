const pool = require("../../config/database");

module.exports = {
  createBlog: (data, callBack) => {
    try {
      let query = `insert into Blog (blog_image,blog_title,blog_description,
        blog_h1,blog_h2,blog_h3,blog_description1,blog_description2,blog_description3,user_id) values (
          ?,?,?,?,?,?,?,?,?,?)`
      pool.query(
        query,[
          data.blog_image,
          data.blog_title,
          data.blog_description,
          data.blog_title1,
          data.blog_title2,
          data.blog_title3,
          data.blog_description1,
          data.blog_description2,
          data.blog_description3,
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

  getAllBlogDetails: (callBack) => {
    // console.log("hi")
    try {
      pool.query(`select * from Blog where deleteflag = 0 order by blog_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateBlogDataDetailById: (data, callBack) => {
    try {
    
      pool.query(`update blog set blog_image=?,
      blog_title=?,
      blog_description=?,
      blog_h1=?,
      blog_h2=?,
      blog_h3=?,
      blog_description1=?,
      blog_description2=?,
      blog_description3=? where blog_id =?`,
        [
          data.blog_image,
          data.blog_title,
          data.blog_description,
          data.blog_title1,
          data.blog_title2,
          data.blog_title3,
          data.blog_description1,
          data.blog_description2,
          data.blog_description3,
          data.blog_id
        ], (err, result) => {
          if (err) return callBack(err);
          return callBack(null, result);
        })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteBlogDataDetailById: (data, callBack) => {
    try {
      pool.query(`update blog set deleteflag = 1 where blog_id=?`, [data.blog_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  getRecentBlogDetails: (callBack) => {
    try {
      pool.query(`select * from blog order by blog_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  }
};
