import React, { useState } from 'react'
import Image from 'next/image'
import { useDisclosure, useColorModeValue } from "@chakra-ui/react"
import { Fade, Text, keyframes, Flex, Box, FormControl, Input, FormHelperText, Textarea, InputGroup, InputLeftElement, Button, FormErrorMessage } from "@chakra-ui/react"
import { EmailIcon, SpinnerIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'

import logo from '../../public/l-black.svg'
import { contactSchema, contactInitialValue } from '../../lib/ValidationSchema/index'

const animationKeyframes = keyframes`
  100% { transform: rotate(360deg) }
`;
const animation = `${animationKeyframes} 1.5s linear infinite`

const Contact = () => {
  const [onSubmit, setOnSubmit] = useState(false)
  const [onSuccess, setOnSuccess] = useState(false)
  const [onError, setOnError] = useState(false)
  const { isOpen, onOpen } = useDisclosure()
  const borderColor = useColorModeValue('brand.300', 'brand.200')

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

      fetch('/api/send', {
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          content: values.content
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(res => {
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
    <>
      <Flex m={'auto'} pb={'3rem'} maxW={'480px'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
        <Box w={'80px'}>
          <Image src={logo} alt={'logo of me'} width={80} />
        </Box>
        <Box m={'auto'} w={'100%'}>
          <form onSubmit={formik.handleSubmit}>

            <FormControl mb={'1rem'} isInvalid={Boolean(formik.errors.name)}>
              <InputGroup>
                <Input type='text' name='name' onChange={(e) => formik.handleChange(e)} variant='flushed' borderColor={borderColor} placeholder='your name' />
              </InputGroup>
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl mb={'1.5rem'} isInvalid={Boolean(formik.errors.email)}>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <EmailIcon color='brand.300' />
                </InputLeftElement>
                <Input type='email' name='email' onChange={(e) => formik.handleChange(e)} variant='flushed' maxLength={100} borderColor={borderColor} />
              </InputGroup>
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              <FormHelperText>I&apos;ll never share your email.</FormHelperText>
            </FormControl>

            <FormControl mb={'2rem'} isInvalid={Boolean(formik.errors.content)}>
              <Textarea name='content' onChange={(e) => formik.handleChange(e)} maxLength={1000} borderColor={borderColor} />
              <FormErrorMessage>{formik.errors.content}</FormErrorMessage>
            </FormControl>

            <Flex w={'100%'} justifyContent={'center'}>
              {
              onError ?
                <Text color={'danger.500'}>An error has occurred.<br />Please reload and try again.</Text>
                : onSuccess ?
                  <Fade in={isOpen}>
                    <Text color={'accent.500'}>Thank you for your contact.</Text>
                  </Fade> :
                  <Button type='submit' disabled={onSubmit} colorScheme='info' m={'auto'}>
                    {!onSubmit ? 'Submit' : <SpinnerIcon animation={animation} />}
                  </Button>
              }
            </Flex>

          </form>
        </Box>
      </Flex>
    </>
  )
}

export default Contact
