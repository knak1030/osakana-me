// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

type Data = {
  name: string
  email: string
  content: string
}

type Message = {
  to: string
  from: string
  subject: string
  text: string
  html: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {  
  if(req.method !== 'POST') {
    res.status(404)
  }

  sgMail.setApiKey(process.env.SG_API_KEY as string)

  const notifyMsg: Message = {
    to: process.env.MAIL_NOTIFY_TO as string,
    from: process.env.MAIL_FROM as string,
    subject: 'osakana-me | 問い合わせがありました。',
    text: `問い合わせが送信されました。<br />${JSON.stringify(req.body)}`,
    html: `問い合わせが送信されました。<br />${JSON.stringify(req.body)}`
  }

  const bodyTxt = `お問合せを受け付けました。回答をお待ちください。<br />
Your inquiry has been received. Please wait for my reply.<br />
---<br />
Your name: ${req.body.name}<br />
Your email: ${req.body.email}<br />
content: ${req.body.content}<br />
<br />
---<br />
osakana-me<br />
${process.env.APP_URL}`

  const msg: Message = {
    to: req.body.email,
    from: process.env.MAIL_FROM as string,
    subject: 'osakana-me | Thank you for your contact!',
    text: bodyTxt,
    html: bodyTxt
  }

  sgMail.send(notifyMsg)
  .then(() => {
    sgMail.send(msg)
    .then(() => {
      res.status(200).json({
        name: req.body.name,
        email: req.body.email,
        content: req.body.content
      })
    })
    .catch(() => {
      res.status(500).json({
        name: req.body.name,
        email: req.body.email,
        content: req.body.content
      })
    })
  })
}