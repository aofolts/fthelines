import {BLOCKS} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from 'react'
import ResourceCard from 'components/card-resource'
import {Heading,BodyText} from 'components/typography'
import styled from 'styled-components'

const RichResourceCard = styled(ResourceCard)`
  margin-top: ${props => props.theme.padding.medium};
`

const renderEmbeddedEntry = (node) => {
  const entry = node.data.target
  const type  = entry.sys.contentType.sys.id

  switch (type) {
    case 'resource': return <RichResourceCard entry={entry}/>
    default: return null
  }
}

const renderHeading = (node,children) => {
  const level = node.nodeType

  switch (level) {
    case 'heading-2': return <Heading level={2}>{children}</Heading>
    default: return null
  }
}

const renderParagraph = (node,children) => {
  return <BodyText level={2}>{children}</BodyText>
}

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  margin: ${props => props.theme.padding.small} 0;
`

const renderAsset = (node) => {
  const level = node.nodeType

  const entry = node.data.target

  const props = {
    title: entry.fields.title['en-US'],
    alt: entry.fields.description ? entry.fields.description['en-US'] : entry.fields.title['en-US'],
    src: entry.fields.file['en-US'].url
  }

  return <Image {...props}/>
}

const options = {
  renderMark: {
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => renderEmbeddedEntry(node),
    [BLOCKS.HEADING_2]: (node,children) => renderHeading(node,children),
    [BLOCKS.HEADING_3]: (node,children) => renderHeading(node,children),
    [BLOCKS.PARAGRAPH]: (node,children) => renderParagraph(node,children),
    [BLOCKS.EMBEDDED_ASSET]: (node) => renderAsset(node)
  },
}

const RichText = ({
  json
}) => {
  return documentToReactComponents(json,options)
}

export default RichText