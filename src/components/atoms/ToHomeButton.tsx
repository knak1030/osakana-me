import React from 'react'
import NextLink from 'next/link'
import { Button, Link } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

const ToHomeButton = () => {
  return (
    <>
      <NextLink href='/' passHref>
        <Link>
          <Button
            aria-label='back to home button'
            position={'fixed'} top={5} left={5} bg={'transparent'}
          >
            <ArrowBackIcon />
          </Button>
        </Link>
      </NextLink>
    </>
  )
}

export default ToHomeButton
