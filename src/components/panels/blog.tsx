import React from 'react'
import { Text, Box, Divider, Stack } from '@chakra-ui/react'
import { IBlogPostFields } from '../../@types/generated/contentful'
import BlogPostBody from '../atoms/BlogPostBody'
import DisplayDate from '../atoms/DisplayDate'

type Props = {
  post?: IBlogPostFields
}

const Blog = ({ post }: Props) => {
  return (
    <>
      <Box m={2}>
        <Text fontSize={'lg'} mb={2}>{post?.title}</Text>
        <Stack direction='row' justifyContent={'space-between'} alignItems={'flex-start'} mb={3}>
          <Text fontSize={'xs'} textAlign={'right'}>
            <DisplayDate datetime={post?.publishDate} />
          </Text>
          <Text fontSize={'xs'}>{post?.tags?.join()}</Text>
        </Stack>
        <Divider borderColor={'accent.500'} mb={5} />
        <Box p={2}>
          <BlogPostBody content={post?.body} />
        </Box>
      </Box>
    </>
  )
}

export default Blog
