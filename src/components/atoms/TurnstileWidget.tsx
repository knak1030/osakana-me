import React, { Dispatch, SetStateAction } from 'react'
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'
import { Flex } from '@chakra-ui/react'

type Prop = {
  invalid: () => void
  success: (token: string) => void
}

const TurnstileWidget = ({ invalid, success }: Prop) => {
  return (
    <Flex justifyContent={'center'}>
      <Turnstile siteKey={process.env.NEXT_PUBLIC_SITE_KEY as string}
        options={{theme: 'auto'}}
        onError={() => invalid}
        onExpire={() => invalid}
        onSuccess={(token) => success(token)}
      />
    </Flex>
  )
}

export default TurnstileWidget
