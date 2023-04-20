const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const oAuth2Client = new google.auth.OAuth2(
  process.env.NODEMAILER_GMAIL_ID,
  process.env.NODEMAILER_GMAIL_SECRET,
  process.env.NODEMAILER_REDIRECT
)

oAuth2Client.setCredentials({ refresh_token: process.env.NODEMAILER_REFRESH })

export default async (req: any, res: any) => {
  const bodyData = JSON.parse(req.body)
  async function main() {
    let htmlMessage = ''
    let textMessage = ''
    let subject = 'Form Submission'
    let recipient = 'thechugsband@gmail.com'

    console.log(Object.entries(bodyData))

    Object.entries(bodyData).forEach((entry, index) => {
      if (entry[0] === 'subject') {
        //@ts-ignore
        subject = entry[1]
      }
      if (entry[0] === 'recipient') {
        //@ts-ignore
        recipient = entry[1]
      }

      if (
        entry[0] !== 'hpFirst' &&
        entry[0] !== 'recipient' &&
        entry[0] !== 'submit' &&
        entry[0] !== 'subject' &&
        entry[0] !== 'currentPath' &&
        entry[1] !== ''
      ) {
        htmlMessage += `<li>${entry[0]}: ${entry[1]}</li>`
        textMessage += `${entry[0]}: ${entry[1]}${
          Object.entries(bodyData).length - 1 !== index && ', '
        }`
      }
    })

    const accessToken = await oAuth2Client.getAccessToken()

    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'thechugsband@gmail.com',
        clientId: process.env.NODEMAILER_GMAIL_ID,
        clientSecret: process.env.NODEMAILER_GMAIL_SECRET,
        refreshToken: process.env.NODEMAILER_REFRESH,
        accessToken,
      },
    })

    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error)
      }
      if (success) {
        console.log('Server is ready to take our messages')
      }
    })

    const info = await transporter.sendMail({
      from: '"THE CHUGS, BABY!" <thechugsband@gmail.com>',
      to: recipient,
      subject,
      text: textMessage,
      html: htmlMessage,
      auth: {
        user: 'thechugsband@gmail.com',
      },
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    return {
      success: true,
      message: { info: info.messageId },
    }
  }

  main()
    .then(() => res.status(200).json({ message: 'Success' }))
    .catch(() => {
      fetch(`${process.env.SITE_URL}api/slack`, {
        method: 'POST',
        body: `There was a problem with form "${bodyData.subject}" at ${
          process.env.SITE_URL
        }${bodyData.currentPath.split('/')[1]}`,
      })
      return res.status(500).json({ message: console.error })
    })
}
