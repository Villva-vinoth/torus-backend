const nodemailer = require('nodemailer')
require('dotenv').config()
module.exports.sendMail = async (req, res) => {

    const transporter = nodemailer.createTransport({
        // host: 'smtp-mail.outlook.com',
        // port:587,
        // secureConnection:false,
        // tls:{
        //     ciphers:'SSLv3',
        //     rejectUnauthorized:false,
        // },
        // auth: {
        //     user: 'jesinthkumar2904@outlook.com',
        //     pass: process.env.APP_PASS
        // }
        service:"gmail",    
        auth:{
            user:"vinothpukal6580@gmail.com",
            pass:process.env.APP_PASS
        }
    })




    const data = req.body


// console.log(data)

const subject = data.product_name? 'Product Enquiry' : data.company_name ? 'Bussiness Enquiry' : 'Client Enquiry'

    const html = data.product_name ? (`<h1>Client Name : ${data.name}</h1>
 <h2>Mobile Number : ${data.contact_number}</h2>
 <h2>Email Address : ${data.email}</h2>
 <h3>Message : ${data.comments}</h3>
 <h3>Product Name : ${data.product_name}</h3>`) : data.company_name  ? (`<h1>Client Name : ${data.name}</h1>
 <h2>Company name : ${data.company_name}</h2>
 <h2>Bussiness Email Address : ${data.bussiness_email}</h2>
 <h3>Message : ${data.comments}</h3>`) : (`<h1>Client Name : ${data.name}</h1>
 <h2>Email Address : ${data.email}</h2>
 <h3>Message : ${data.comments}</h3>`)

    const mailOptions = {
        from: 'vinothpukal6580@gmail.com',
        to: 'marketing@torusrobotics.com',
        subject: subject,
        html: html
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            return res.json({
                success: 0,
                message: "Mail not Send"
            })
        }
        else {
            return res.json({
                success: 1,
                message: "Mail sent succesfully !"
            })
        }
    })


}