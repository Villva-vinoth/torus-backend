const pool = require("../../config/database");

module.exports = {
  createProduct: (data, callBack) => {
    try {

      let query = `insert into productmaster (product_image,product_title,product_description,
        voltage_range,rated_power,peak_power,max_RPM,peak_torque,overload_torque,duty_cycle,
        weight,nominal_voltage,max_current,rated_voltage,absolute_max_voltage,
        continous_current,peak_current,support,operating_mode,user_id) values (
          ?,?,?,?,?,
          ?,?,?,?,?,
          ?,?,?,?,?,
          ?,?,?,?,?)`
      pool.query(
        query,[
          data.product_image,
          data.product_title,
          data.product_description,
          data.voltage_range,
          data.rated_power,
          data.peak_power,
          data.max_RPM,
          data.peak_torque,
          data.overload_torque,
          data.duty_cycle,
          data.weight,data.nominal_voltage,
          data.max_current,
          data.rated_voltage,
          data.absolute_max_voltage,
          data.continous_current,
          data.peak_current,
          data.support,
          data.operating_mode,
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

  getProjectDetails: (callBack) => {
    try {
      // console.log("hi")
      pool.query(`select * from productmaster where deleteflag = 0 order by product_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateProjectDataDetailById: (data, callBack) => {
    try {
      // console.log(data)
      pool.query(`update productmaster set product_image=?,
      product_title=?,
      product_description=?,
      voltage_range=?,
      rated_power=?,
      peak_power=?,
      max_RPM=?,
      peak_torque=?,
      overload_torque=?,
      duty_cycle=?,
      weight=?,
      nominal_voltage=?,
      max_current=?,
      rated_voltage=?,
      absolute_max_voltage=?,
      continous_current=?,
      peak_current=?,
      support=?,
      operating_mode=? where product_id =?`,
        [
          data.product_image,
          data.product_title,
          data.product_description,
          data.voltage_range,
          data.rated_power,
          data.peak_power,
          data.max_RPM,
          data.peak_torque,
          data.overload_torque,
          data.duty_cycle,
          data.weight,data.nominal_voltage,
          data.max_current,
          data.rated_voltage,
          data.absolute_max_voltage,
          data.continous_current,
          data.peak_current,
          data.support,
          data.operating_mode,
        data.product_id], (err, result) => {
          if (err) return callBack(err);
          return callBack(null, result);
        })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteProjectDataDetailById: (data, callBack) => {
    try {
      pool.query(`update productmaster set deleteflag = 1 where product_id=?`, [data.product_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  getRecentProjectDetails: (callBack) => {
    try {
      pool.query(`select * from productmaster order by project_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  }
};
