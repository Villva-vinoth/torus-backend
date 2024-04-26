const sql = require('../config/database')

module.exports ={
    createShowCase :()=>{
        let data = `
            create table if not exits showCase(
                showcase_id int auto_increment primary key,
                showcase_name varchar(500) not null,
                showcase_value boolean default true,
                deleteflag int default 0,
                create_At timestamp default now()
            )
        `
        sql.query(data,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Showcase table created successfully !")
            }
            sql.end();
        })
    }
    
}