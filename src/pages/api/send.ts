// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { Email } from '../../entities/email'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'only POST method is allowed' })
    return
  }

  if (!req.body.email) {
    res.status(400).json({ message: 'email is required' })
    return
  }

  const email = new Email(
    req.body.email,
    req.body.name,
    req.body.content
  )

  const transporter = nodemailer.createTransport({
    ...email.options,
  })

  try {
    transporter.sendMail(email.message, function (error, info) {
      if (error) {
        console.log('send failed')
        console.log(error.message)
        return res.status(400).json({ message: 'email sending failed' })
      }

      transporter.sendMail(email.toCustomer().message, function (error, info) {
        if (error) {
          console.log('send failed')
          console.log(error.message)
          return res.status(400).json({ message: 'email sending failed' })
        }

        // 送信成功
        console.log('send successful')
        console.log(info.messageId)
        return res.status(200).json({ message: 'success' })
      })
    })
  } catch (e) {
    console.log('Error', e)
    res.status(400).json({ message: 'email sending failed' })
  }
}


