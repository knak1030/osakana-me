import React, { useState } from 'react'
import Head from 'next/head'
import { useDisclosure } from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'

import ContactFrame from '@components/molecules/ContactFrame'
import FormControl from '@components/molecules/FormControl'
import NotifyStatement from '@components/atoms/NotifyStatement'
import SubmitBtn from '@components/atoms/SubmitBtn'
import TurnstileWidget from '@components/atoms/TurnstileWidget'
import Toggle from '@components/molecules/Toggle'

import { contactSchema, contactInitialValue } from '@libs/ValidationSchema/index'
import { sendEmail, turnstileVerify } from '@libs/api'

const Contact = () => {
  const [onDisabled, setOnDisabled] = useState<boolean>(true)
  const [onError, setOnError] = useState(false)
  const [token, setToken] = useState<string>('')
  const { isOpen, onOpen } = useDisclosure()

  const verifySuccess = (token: string) => {
    setToken(token)
    setOnDisabled(false)
  }

  const verifyError = () => {
    setToken('')
    setOnError(true)
  }

  const formik = useFormik({
    initialValues: contactInitialValue,
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      setOnDisabled(true)
      const confirmTxt = `name: ${values.name}\nemail: ${values.email}\ncontent:\n${values.content}\n---\nok?`
      if (!confirm(confirmTxt)) {
        setOnDisabled(false)
        return
      }

      const verifyRes = await turnstileVerify(token)
      const data = await verifyRes.json()
      if (!data.success) {
        setOnError(true)
        return
      }

      const mailRes = await sendEmail(values)
      if (mailRes.status !== 200) {
        setOnError(true)
        return
      }
      setOnError(false)
      onOpen()
    }
  })

  return (
    <>
      <Head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>
      <ContactFrame>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            name='name'
            errorMessage={formik.errors.name}
            onChange={(e) => formik.handleChange(e)}
            placeholder='your name'
          />
          <FormControl
            name='email' inputType='email'
            errorMessage={formik.errors.email}
            onChange={(e) => formik.handleChange(e)}
            inputElement={<EmailIcon color='brand.300' />}
            helperTxt='I&apos;ll never share your email.'
          />
          <FormControl
            name='content' inputType='textarea'
            errorMessage={formik.errors.content}
            onChange={(e) => formik.handleChange(e)}
          />
          <TurnstileWidget
            invalid={verifyError}
            success={(token) => verifySuccess(token)}
          />
          <Toggle
            isOpenElement={
              <NotifyStatement type={onError ? 'error' : 'success'} />
            }
            isCloseElement={
              <SubmitBtn onSubmitFlag={onDisabled} hidden={isOpen} />
            }
            isOpen={isOpen || onError}
           />
        </form>
      </ContactFrame>
    </>
  )
}

export default Contact
