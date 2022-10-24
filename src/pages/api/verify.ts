// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const ENDPOINT = String(process.env.SITE_VERIFY_ENDPOINT)
const SECRET = String(process.env.SITE_VERIFY_SECRET)

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {  
  if(req.method !== 'POST') {
    res.status(404)
  }

  const body = `secret=${encodeURIComponent(SECRET)}&response=${encodeURIComponent(req.body.token)}`

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })

  const data = await response.json()
  if (!data.success) {
    return res.status(response.status).json({
      success: false
    })
  }
  return res.status(200).json({
    success: true
  })
}