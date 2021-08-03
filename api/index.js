const app = require('express')()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function sendEmail(infos) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `${infos.name.trim()} from your website: ${infos.subject.trim()}`,
    text: `${infos.message.trim()}\n\n\n\n\nEmail of ${infos.name.trim()}: ${infos.email.trim()}`
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return false
    } else {
      return true
    }
  })
}

app.post('/sendMail', async (req, res) => {
  var contactInfos = await req.body.contactInfos
  if (
    contactInfos.name.trim() &&
    contactInfos.email.trim() &&
    contactInfos.subject.trim() &&
    contactInfos.message.trim()
  ) {
    await sendEmail(contactInfos)
  }
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
