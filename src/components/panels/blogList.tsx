import React from 'react'
import NextLink from 'next/link'
import { List, ListItem, Text, Link, Stack } from '@chakra-ui/react'
import { IBlogPostFields } from '../../@types/generated/contentful'
import DisplayDate from '../atoms/DisplayDate'

type Props = {
  posts?: IBlogPostFields[]
}

const BlogList = ({ posts }: Props) => {
  return (
    <>
      <List styleType={'none'} spacing={3} m={3}>
        {
          posts?.map((item, index) => {
            const tag = item.tags?.join()
            return (
              <ListItem key={index} mb={2}>
                <NextLink href={`/posts/${item.slug}`} passHref>
                  <Link>
                    <Text fontSize={'sm'} mb={0}>{item.title}</Text>
                    <Stack direction='row' justifyContent={'space-between'} alignItems={'flex-end'}>
                      <Text fontSize={'xs'}>({tag})</Text>
                      <Text fontSize={'xs'}>
                        <DisplayDate datetime={item?.publishDate} />
                      </Text>
                    </Stack>
                  </Link>
                </NextLink>
              </ListItem>
            )
          })
        }
      </List>
    </>
  )
}

export default BlogList
