const sql = require('../config/database');

module.exports ={
    createProduct :()=>{
        let data = `create table if not exists productmaster(
            product_id int auto_increment primary key,
            product_image varchar(500) not null,
            product_title varchar(350) not null,
            product_description text,
            user_id int references usermaster(t_id),
            deleteflag int default 0,
            voltage_range varchar(100),
            rated_power varchar(100), 
            peak_power varchar(100),
            max_RPM varchar(100),
            peak_torque varchar(100),
            overload_torque varchar(100),
            duty_cycle varchar(100),
            weight varchar(100),
            nominal_voltage varchar(100),
            max_current varchar(100),
            rated_voltage varchar(100),
            absolute_max_voltage varchar(100),
            continous_current varchar(100),
            peak_current varchar(100),
            support varchar(100),
            operating_mode varchar(100),
            createAt timestamp default now()
        )`
        sql.query( data,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(`table projectMaster create Successfully`);
            }
            sql.end();
        })
    }
}