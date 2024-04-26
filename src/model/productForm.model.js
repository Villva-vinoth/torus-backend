const sql = require('../config/database')

module.exports ={
    createProductForm :()=>{
        let data = `
                create table if not exists ProductForm(
                p_form_id int auto_increment primary key,
                product_id int references productMaster(product_id),
                name varchar(50) not null,
                contact_no varchar(10) not null,
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
                console.log("Product Form table created successfully !")
            }
            sql.end();
        })
    }
    
}