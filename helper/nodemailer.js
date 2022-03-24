const { send } = require("express/lib/response");
const nodemailer = require("nodemailer")

function sendEmail(sendTo){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'titancelica@gmail.com',
            pass: 'Pohodeu1'
        }
    });
    
    var mailOptions = {
        from: 'titancelica@gmail.com',
        to: 'titamulyana10@gmail.com',
        subject: 'Registrasi JoinDong',
        text: `halo ${sendTo}, email kamu sekarang sudah terdaftar di JoinDong.`
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        console.log('Email sent: ' + info.response);
    });
}

module.exports = sendEmail;