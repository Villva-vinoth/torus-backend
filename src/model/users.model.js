const sql = require('../config/database');

module.exports ={
    createUser : ()=>{
        let data = `create table if not exists usermaster(
            t_id int primary key auto_increment,
            email varchar(100) not null,
            createAt TIMESTAMP  default current_timestamp,
            password varchar(125),
            deleteflag int default 0
        )`
       try{
        sql.query(data, (err,results)=>{
            if(err){
                console.log(err.message);
            }
            else{
                console.log("table usermaster created Successfully !");
            }
            sql.end();
        })
       }
       catch(err){
        console.log(err);
       }
    }
}