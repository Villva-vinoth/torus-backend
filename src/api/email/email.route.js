const { sendMail } = require("./email.controller");

const router = require("express").Router();

router.post("/sendMail",sendMail)

module.exports=router