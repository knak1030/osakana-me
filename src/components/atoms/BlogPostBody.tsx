import React from 'react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import remarkGfm from 'remark-gfm'
import styles from '@styles/markdown.module.css'
import { Box, Text, ListItem, UnorderedList, Link, useColorModeValue, Code, Divider, Table, Td, Th } from '@chakra-ui/react'

type Props = {
  content?: string
}

const BlogPostBody = ({ content = '' }: Props) => {
  const linkColor = useColorModeValue('info.500', 'info.400')
  const borderColor = useColorModeValue('accent.600', 'accent.500')

  const newTheme = {
    p: (props: any) => {
      const { children } = props;
      return (
        <Text mb={2} ml={2} fontSize={'sm'}>
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
        <ListItem fontSize={'sm'} ml={2}>
          {children}
        </ListItem>
      );
    },
    h1: (props: any) => {
      const { children } = props;
      return (
        <>
          <Text fontSize={'2xl'} mb={3} pt={3}>
            {children}
          </Text>
          <Divider mb={3} borderColor={borderColor} />
        </>
      );
    },
    h2: (props: any) => {
      const { children } = props;
      return (
        <Text fontSize={'xl'} mb={2} pt={1}>
          {children}
        </Text>
      );
    },
    h3: (props: any) => {
      const { children } = props;
      return (
        <Text fontSize={'lg'} mb={2} pt={1} ml={2}>
          {children}
        </Text>
      );
    },
    h4: (props: any) => {
      const { children } = props;
      return (
        <Text fontSize={'lg'} mb={2} pt={1} ml={2}>
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
    },
    code: (props: any) => {
      const { children } = props;
      return (
        <Code mb={2} ml={2}>
          {children}
        </Code>
      )
    },
    table: (props: any) => {
      const { children } = props;
      return (
        <Table size={'sm'} variant='simple'>
          {children}
        </Table>
      )
    },
    td: (props: any) => {
      const { children } = props;
      return (
        <Td borderColor={'brand.300'}>
          {children}
        </Td>
      )
    },
    th: (props: any) => {
      const { children } = props;
      return (
        <Th borderColor={'brand.300'}>
          {children}
        </Th>
      )
    }
  }

  return (
    <Box p={2}>
      <ReactMarkdown
        components={ChakraUIRenderer(newTheme)}
        className={styles.lineBreak}
        remarkPlugins={[remarkGfm]}
        skipHtml
        >
        {content}
      </ReactMarkdown>
    </Box>
  )
}

export default BlogPostBody
