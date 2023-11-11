import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.json()

  const formDataArray = Object.entries(formData.fields)

  const htmlMessage = `<ul>${formDataArray
    .map((pair) => {
      return `<li>${pair[0].split('_')[0]}: ${pair[1]}</li>`
    })
    .join('')}</ul>`

  const textMessage = `${formDataArray.map((pair) => {
    return `${pair[0]}: ${pair[1]}`
  })}`

  async function main() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    })

    const info = await transporter.sendMail({
      from: `"The Chugs ${formData.subject}" <${process.env.GOOGLE_EMAIL}>`,
      to: formData.recipients,
      subject: formData.subject,
      text: textMessage,
      html: htmlMessage,
    })

    return {
      success: true,
      message: { info },
    }
  }

  const sendMail = await main()
  const { success } = sendMail

  async function postToSlack() {
    await fetch(
      `https://hooks.slack.com/services/${process.env.SLACK_WEBHOOK}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: `The form ${formData.subject} has messed up somehow. Go check https://vercel.com/wambach-web-development/thechugs to see what HECK is going on!!.`,
        }),
      }
    )
  }

  if (success) {
    return NextResponse.json({
      status: 200,
      body: {
        message: 'Your message has been sent!',
      },
    })
  } else {
    postToSlack()

    return NextResponse.json({
      status: 500,
      body: {
        message: 'Your message could not be sent.',
      },
    })
  }
}
