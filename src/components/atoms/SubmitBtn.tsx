import React from 'react'
import { Button, keyframes } from '@chakra-ui/react'
import { SpinnerIcon } from '@chakra-ui/icons'

type Props = {
  onSubmitFlag: boolean
}

const animationKeyframes = keyframes`
  100% { transform: rotate(360deg) }
`;
const animation = `${animationKeyframes} 1.5s linear infinite`

const SubmitBtn = ({ onSubmitFlag }: Props) => {
  return (
    <Button type='submit' disabled={onSubmitFlag} colorScheme='info' m={'auto'}>
      {!onSubmitFlag ? 'Submit' : <SpinnerIcon animation={animation} />}
    </Button>
  )
}

export default SubmitBtn
