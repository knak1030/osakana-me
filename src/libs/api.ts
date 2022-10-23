type mailType = {
  name: string
  email: string
  content: string
}

export async function sendEmail(values: mailType) {
  return await fetch('/api/send', {
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      content: values.content
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
}