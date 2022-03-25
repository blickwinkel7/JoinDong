 "use strict"
const nodemailer = require("nodemailer")

function sendEmail(sendTo, name,pass){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'joindonghacktiv8@gmail.com',
            pass: 'Pohodeu1'
        }
    });
    
    var mailOptions = {
        from: 'joindonghacktiv8@gmail.com',
        to: `${sendTo}`,
        subject: 'Registrasi JoinDong',
        text: `halo ${name}, email kamu sekarang sudah terdaftar di JoinDong.
        kamu bisa login dengan: 
        email : ${sendTo}
        password: ${pass}`
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        console.log('Email sent: ' + info.response);
    });
}

module.exports = sendEmail;