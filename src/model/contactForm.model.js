const sql = require('../config/database')

module.exports ={
    createContactForm :()=>{
        let data = `
                create table if not exists ContactForm(
                c_form_id int auto_increment primary key,
                name varchar(50) not null,
                company varchar(200) not null,
                email varchar(100) not null,
                comments text not null,
                deleteflag int default 0,
                create_At timestamp default now()
            )
        `
        sql.query(data,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Contact Form table created successfully !")
            }
            sql.end();
        })
    }
    
}