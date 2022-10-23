import React from 'react'
import { Box } from '@chakra-ui/react'
import { IBlogPostFields } from '../../../@types/generated/contentful'
import BlogPostBody from '@components/atoms/BlogPostBody'
import BlogHeading from '@components/molecules/BlogHeading'

type Props = {
  post?: IBlogPostFields
}

const Blog = ({ post }: Props) => {
  return (
    <>
      <Box m={2}>
        <BlogHeading post={post}/>
        <BlogPostBody content={post?.body} />
      </Box>
    </>
  )
}

export default Blog
