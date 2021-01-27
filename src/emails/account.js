const sgMail = require('@sendgrid/mail')
const { format } = require('sharp')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWecolmeEmail = (email, name) => {
  sgMail.send({
    to: 'andrereigoto@gmail.com' ,
    from: 'eduardopalmeida@gmail.com',
    subject: 'Isto é um teste!',
    text: `Olá André!\n\n Tudo em ordem?\n Estou aqui a fazer o meu curso de Node.js e já consigo enviar emails através da minha app.\n` + 
          `Continuação de um bom trabalho.\n\n Abraço,\n Eduardo `,
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
