const nodemailer = require('nodemailer');

export default function sendEmail(infos) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abdullahveliyev2005@gmail.com',
      pass: 'AbDuLlAh2005'
    }
  });

  var mailOptions = {
    from: 'abdullahveliyev2005@gmail.com',
    to: 'abdullahveliyev2005@gmail.com',
    subject: 'This email send via nodemailer and nuxtjs',
    text: 'That was really easy!\nNode.js is awesome\nI love Nuxt.js'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
