const sql = require('../config/database')

module.exports ={
    createAwards :()=>{
        let data = `
            create table if not exists awards(
                awards_id int auto_increment primary key,
                awards_image varchar(100) not null,
                awards_name varchar(100) not null,
                user_id int references usermaster(t_id),
                deleteflag int default 0,
                create_At timestamp default now()
            )
        `
        sql.query(data,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Awards table created successfully !")
            }
            sql.end();
        })
    }
    
}