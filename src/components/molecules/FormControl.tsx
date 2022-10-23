import React, { ReactNode } from 'react'
import { FormControl as ChakraFormControl, InputGroup, Input, FormErrorMessage, useColorModeValue, FormHelperText, InputLeftElement, Textarea } from '@chakra-ui/react'

type Props = {
  errorMessage?: string
  inputElement?: ReactNode
  name: string
  inputType?: 'text'|'email'|'textarea'
  onChange: (e: React.FormEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  helperTxt?: string
}

const FormControl = ({
  errorMessage,
  name,
  inputType = 'text',
  onChange,
  placeholder = '',
  inputElement,
  helperTxt
}: Props) => {
  const borderColor = useColorModeValue('brand.300', 'brand.200')
  return (
    <ChakraFormControl mb={'1rem'} isInvalid={Boolean(errorMessage)}>
      <InputGroup>
        {
          inputElement ? 
            <InputLeftElement pointerEvents='none'>
              {inputElement}
            </InputLeftElement>
            : <></>
        }
        {
          inputType === 'textarea' ?
            <Textarea name={name} onChange={(e) => {onChange(e)}} maxLength={1000} borderColor={borderColor} />
            : <Input type={inputType} name={name} onChange={(e) => {onChange(e)}} variant='flushed' borderColor={borderColor} placeholder={placeholder} />
        }
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {helperTxt ? <FormHelperText>{helperTxt}</FormHelperText> : <></>}
    </ChakraFormControl>

  )
}

export default FormControl
