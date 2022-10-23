import React, { useState } from 'react'
import { Flex, useDisclosure } from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'

import ContractFrame from '@components/molecules/ContractFrame'
import FormControl from '@components/molecules/FormControl'
import ErrorStatement from '@components/atoms/ErrorStatement'
import SuccessStatement from '@components/atoms/SuccessStatement'
import SubmitBtn from '@components/atoms/SubmitBtn'

import { contactSchema, contactInitialValue } from '@libs/ValidationSchema/index'
import { sendEmail } from '@libs/api'

const Contact = () => {
  const [onSubmit, setOnSubmit] = useState(false)
  const [onSuccess, setOnSuccess] = useState(false)
  const [onError, setOnError] = useState(false)
  const { isOpen, onOpen } = useDisclosure()

  const formik = useFormik({
    initialValues: contactInitialValue,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      setOnSubmit(true)
      const confirmTxt = `name: ${values.name}\nemail: ${values.email}\ncontent:\n${values.content}\n---\nok?`
      if (!confirm(confirmTxt)) {
        setOnSubmit(false)
        return
      }
      sendEmail(values).then(res => {
        if (res.status !== 200) {
          setOnError(true)
          return
        }
        setOnSuccess(true)
        onOpen()
        formik.resetForm()
      }).catch(() => {
        setOnError(true)
      })
    }
  })

  return (
    <ContractFrame>
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
        <Flex w={'100%'} justifyContent={'center'} mt={'2rem'}>
          {
            onError ?
              <ErrorStatement />
              :
              onSuccess ?
                <SuccessStatement isOpen={isOpen} />
                :
                <SubmitBtn onSubmitFlag={onSubmit} />
          }
        </Flex>
      </form>
    </ContractFrame>
  )
}

export default Contact
