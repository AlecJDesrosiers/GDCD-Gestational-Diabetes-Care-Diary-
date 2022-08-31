
"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
    user:  process.env.NODE_MAILER_EMAIL,
    pass:  process.env.NODE_MAILER_PASSWORD,
    },
});

  // send mail with defined transport object
const sendingemail = (patientScore) => {
transporter.sendMail({
    from: 'gestdiacare@outlook.com', // sender address
    to: "receivegestdiacare@gmail.com", // list of receivers
    subject:  " Gestational Diabetes Self Care Diary",// Subject line
    text: "Hello Doctor, Please see attached the patients Gestational Diabetes Self Care Diary for the ", // plain text body
    html: ` Hello Doctor, 
        Please see attached the patients Gestational Diabetes Self Care Diary for your patient. <p>${patientScore.patientNumber}</p>
        Date of the scores: <p>${patientScore.dateofscores}</p>
        <b>Blood Glucose Values</b>
        Before Breakfast: <p>${patientScore.bgvBeforeBreakfast}</p>
        1hr after Breakfast: <p>${patientScore.bgvAfterBreakfast}</p>
        1hr after Lunch:<p>${patientScore.bgvAfterLunch}</p>
        1hr after Supper: <p>${patientScore.bgvAfterSupper}</p>
        <b>Insuline Dose </b>
        Before Breakfast: <p>${patientScore.idBeforeBreakfast}</p>
        Before Lunch: <p>${patientScore.idBeforeLunch}</p>
        Before Supper: <p>${patientScore.idBeforeSupper}</p>
        Evening: <p>${patientScore.idEvening}</p>
        Comments: <p>${patientScore.comments}</p>`, // html body
}, (err, info) => {if (err){console.log(err);return}console.log(info)}
);
};
console.log(process.env,'hello')
module.exports = { 
    sendingemail, 
};
