import React from 'react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Text, ListItem, UnorderedList, Link, useColorModeValue } from '@chakra-ui/react'

type Props = {
  content?: string
}

const BlogPostBody = ({ content = '' }: Props) => {
  const linkColor = useColorModeValue('info.500', 'info.400')

  const newTheme = {
    p: (props: any) => {
      const { children } = props;
      return (
        <Text mb={2} fontSize={'sm'}>
          {children}
        </Text>
      );
    },
    ul: (props: any) => {
      const { children } = props;
      return (
        <UnorderedList mb={2}>
          {children}
        </UnorderedList>
      );
    },
    li: (props: any) => {
      const { children } = props;
      return (
        <ListItem fontSize={'sm'}>
          {children}
        </ListItem>
      );
    },
    h1: (props: any) => {
      const { children } = props;
      return (
        <Text fontSize={'2xl'} mb={2}>
          {children}
        </Text>
      );
    },
    h2: (props: any) => {
      const { children } = props;
      return (
        <Text fontSize={'xl'} mb={2}>
          {children}
        </Text>
      );
    },
    a: (props: any) => {
      const { children, href } = props;
      return (
        <Link isExternal href={href} color={linkColor} borderBottom={'dashed 1px'}>
          {children}
        </Link>
      )
    }
  }

  return (
    <Box p={2}>
      <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
        {content}
      </ReactMarkdown>
    </Box>
  )
}

export default BlogPostBody
