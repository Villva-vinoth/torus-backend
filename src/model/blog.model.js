const sql = require('../config/database')

module.exports ={
    createBlog :()=>{
        let data = `
            create table if not exists Blog(
                blog_id int auto_increment primary key,
                blog_image varchar(100) not null,
                blog_title varchar(100) not null,
                blog_description text not null,
                blog_h1 varchar(1000),
                blog_h2 varchar(1000),
                blog_h3 varchar(1000),
                blog_description1 text,
                blog_description2 text,
                blog_description3 text,
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
                console.log("Blog table created successfully !")
            }
            sql.end();
        })
    }
    
}