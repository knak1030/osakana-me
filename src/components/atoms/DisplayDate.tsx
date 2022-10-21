import React from 'react'

type Props = {
  datetime?: string
}

const dateFormatter = (datetime: string) => {
  const date = new Date(datetime)
  return `${date.getDate()}.${date.getMonth() +1}.${date.getFullYear()}`
}

const DisplayDate = ({ datetime = '' }: Props) => {
  return (
    <>{dateFormatter(datetime)}</>
  )
}

export default DisplayDate