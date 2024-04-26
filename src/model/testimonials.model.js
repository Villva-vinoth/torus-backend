const sql = require('../config/database')

module.exports ={
    createTestimonials :()=>{
        let data = `
            create table if not exists testimonials(
                testimonials_id int auto_increment primary key,
                testimonials_image varchar(100) not null,
                testimonials_name varchar(100) not null,
                testimonials_description text not null,
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
                console.log("Testimonials table created successfully !")
            }
            sql.end();
        })
    }
    
}