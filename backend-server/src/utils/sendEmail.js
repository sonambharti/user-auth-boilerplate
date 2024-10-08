// Code to send a mail 
require('dotenv').config();
var nodemailer = require('nodemailer');

const password = process.env.NODEMAILER_PASS;
const email = process.env.NODEMAILER_email;

const sendEmail = ({ email, title, text }) => {
    var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: email,
        pass: password
    }
});

var mailOptions = {
    from: email,
    // to: {email},
    to: { email },
    subject: title,
    text: text
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log("There is an error:\n", error);
    } else {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
        // console.log('Email sent: ' + info.response);
    }
});
};
module.exports = sendEmail;