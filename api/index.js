const app = require('express')()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



function sendEmail(infos) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `${infos.name} from your website: ${infos.subject}`,
    text: `${infos.message}\n\n\n\n\nEmail of ${infos.name}: ${infos.email}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return false
    } else {
      return true
    }
  });
}


app.post("/sendMail",async (req,res) => {
  await sendEmail(req.body.contactInfos)
  res.send(true)
})

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
