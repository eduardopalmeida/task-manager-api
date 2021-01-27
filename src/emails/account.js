const sgMail = require('@sendgrid/mail')
const { format } = require('sharp')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWecolmeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eduardopalmeida@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with app.`,
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eduardopalmeida@gmail.com',
    subject: 'Sorry to see you go',
    text: `Hi ${name},\n` +
          `We'd love to know why you're going away.\n`+
          `Please let us know what we can do to help.`
  })
}

module.exports = {
  sendWecolmeEmail, sendGoodbyeEmail
}
