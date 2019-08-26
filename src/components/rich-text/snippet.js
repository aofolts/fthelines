import React from 'react'
import styled from 'styled-components'

const UnstyledHyperlinkSnippet = ({
  className,
  entry,
  children
}) => {
  const {fields} = entry
  let Tag = 'div'
  let link

  if (fields.link) {
    Tag = 'a'
    link = fields.link['en-US']
  }

  return (
    <Tag className={className} href={link} target='__blank'>
      {children}
    </Tag>
  )
}

const HyperlinkSnippet = styled(UnstyledHyperlinkSnippet)`
  
`

export {
  HyperlinkSnippet
}