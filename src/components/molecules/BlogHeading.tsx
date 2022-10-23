import React from 'react'
import { Text, Stack, Divider, useColorModeValue } from '@chakra-ui/react'
import DisplayDate from '@components/atoms/DisplayDate'
import { IBlogPostFields } from '../../@types/generated/contentful'

type Props = {
  post?: IBlogPostFields
}

const BlogHeading = ({ post }: Props) => {
  const borderColor = useColorModeValue('accent.600', 'accent.500')
  return (
    <>
      <Text fontSize={'lg'} mb={2}>{post?.title}</Text>
      <Stack direction='row' justifyContent={'space-between'} alignItems={'flex-start'} mb={3}>
        <Text fontSize={'xs'} textAlign={'right'}>
          <DisplayDate datetime={post?.publishDate} />
        </Text>
        <Text fontSize={'xs'}>{post?.tags?.join()}</Text>
      </Stack>
      <Divider borderColor={borderColor} mb={5} />
    </>
  )
}

export default BlogHeading
