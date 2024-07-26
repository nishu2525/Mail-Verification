const nodemailer = require ('nodemailer');

let transportmail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'umapnishad1@gmail.com',
        pass:'vyapzjvywepukzph'
    }
})
let mailContent={
    from :'umapnishad1@gmail.com',
    to :'umapnishad2510@gmail.com',
    subject:'Verification Mail',
    text: 'This mail is regarding to email verification'
}

transportmail.sendMail(mailContent,function(err,val){
    if(err){
        console.log(err);
    }else{
        console.log(val.response, "Mail Sent Successfully...");
    }
})