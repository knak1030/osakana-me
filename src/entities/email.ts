type Message = {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

type Option = {
  host: string
  port: number
  auth: {
    user: string
    pass: string
  }
}

export type EmailData = {
  message: Message,
  options: Option
}

export class Email {
  public message: Message = {
    from: process.env.FROM_MAIL_ADDRESS || 'info@example.com',
    to: process.env.FROM_MAIL_ADDRESS || '',
    subject: 'お問い合わせのお知らせ',
    text: '',
    html: '',
  }

  readonly options: Option = {
    host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    port: parseInt(process.env.SMTP_PORT || '2525'),
    auth: {
      user: process.env.SMTP_USER || 'user',
      pass: process.env.SMTP_PASSWORD || 'password',
    },
  }
  
  constructor(
    public readonly to: string,
    public readonly name: string,
    public readonly content: string
  ) {
    this.name = this.htmlspecialchars(name)
    this.content = this.htmlspecialchars(content)
    this.setAdminMessage()
  }

  private htmlspecialchars(str: string) {
    return (str + '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  private setAdminMessage() {
    const text = `
      問い合わせが送信されました。
      ---
      name: ${this.name}
      email: ${this.to}
      content: ${this.content}
    `
    const html = text.replace(/\n/g, '<br />')
    this.message = {
      from: process.env.FROM_MAIL_ADDRESS || 'info@example.com',
      to: process.env.FROM_MAIL_ADDRESS || '',
      subject: 'お問い合わせのお知らせ',
      text: text,
      html: html,
    }
  }

  private setCustomerMessage() {
    const text =`
      お問合せを受け付けました。回答をお待ちください。
      Your inquiry has been received. Please wait for my reply.
      ---
      Your name: ${this.name}
      content: ${this.content}
      ---
      osakana-me
      ${process.env.APP_URL}
    `
    const html = text.replace(/\n/g, '<br />')
    this.message = {
      from: process.env.FROM_MAIL_ADDRESS || 'info@example.com',
      to: this.to,
      subject: 'お問い合わせを受け付けました。',
      text: text,
      html: html,
    }
  }

  public toCustomer() {
    this.setCustomerMessage()
    return this
  }
}