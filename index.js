const nodemailer = require ('nodemailer');
const path = require('path');
const fs = require('fs');

let transportmail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'umapnishad1@gmail.com',
        pass:'vyapzjvywepukzph'
    }
})
// twilio
let mailContent={
    from :'umapnishad1@gmail.com',
    to :'umapnishad2510@gmail.com',
    subject:'Verification Mail',
    html: '<p>This mail is regarding email verification.</p><img src="cid:image@unique.cid"/>',
    attachments: [
        {
            filename: 'document.docx',
            path: path.join(__dirname, './myinfo.txt' )
        },
        {
            filename: 'image.jpg',
            path: path.join(__dirname, './email_img.png'),
            cid: 'image@unique.cid'
        }
    ]
}
// './myinfo.txt' 
// './email_img.png'
transportmail.sendMail(mailContent,function(err,val){
    if(err){
        console.log(err);
    }else{
        console.log(val.response, "Mail Sent Successfully...");
    }
})