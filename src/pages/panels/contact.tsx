import React, { useState } from 'react'
import Image from 'next/image'
import { useColorModeValue, Flex, Box, FormControl, Input, FormHelperText, Textarea, InputGroup, InputLeftElement, Button, FormErrorMessage } from "@chakra-ui/react"
import { EmailIcon, CheckIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'

import logo from '../../public/l-black.svg'
import { contactSchema, contactInitialValue } from '../../lib/ValidationSchema/index'

const Contact = () => {
  const [onSubmit, setOnSubmit] = useState(false)
  const [onSuccess, setOnSuccess] = useState(false)

  const formik = useFormik({
    initialValues: contactInitialValue,
    validationSchema: contactSchema,
    onSubmit: (values) => {

      const confirmTxt = `name: ${values.name}\nemail: ${values.email}\ncontent:\n${values.content}\n---\nok?`
      if (!confirm(confirmTxt)) {
        setOnSubmit(false)
        return
      }
      setTimeout(() => {
        console.log('hi')
        setOnSuccess(true)
        formik.resetForm()
          
      }, 1000)
    }
  })

  const borderColor = useColorModeValue('brand.300', 'brand.200')
  
  return (
    <>
      <Flex m={'auto'} maxW={'480px'} justifyContent={'center'} alignItems={'center'} direction={'column'} position={'relative'}>
        {onSuccess ? 
          <Box position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} border={'solid 2px'} borderColor={'success.400'} borderRadius={'50%'} p={'50px'}>
            <CheckIcon w={10} h={10} color={'success.500'} />
          </Box>
          : <></>
        }
        <Box w={'80px'} opacity={onSubmit ? '0.5' : '1'}>
          <Image src={logo} alt={'my logo'} width={80} />
        </Box>
        <Box m={'auto'} w={'100%'} opacity={onSubmit ? '0.5' : '1'}>
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
              <Button type='submit' disabled={onSubmit} colorScheme='info' m={'auto'}>Submit</Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  )
}

export default Contact
