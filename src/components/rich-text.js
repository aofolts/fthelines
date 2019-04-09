import {BLOCKS} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from 'react'
import ResourceCard from 'components/card-resource'
import {Heading,BodyText} from 'components/typography'
import styled from 'styled-components'
import SubscribeForm from 'components/subscribe-form'

const RichResourceCard = styled(ResourceCard)`
  margin-top: ${props => props.theme.padding.medium};
`

const renderEmbeddedEntry = (node) => {
  const entry = node.data.target
  const type  = entry.sys.contentType.sys.id

  switch (type) {
    case 'resource': return <RichResourceCard entry={entry}/>
    case 'subscribeForm': return <SubscribeForm entry={entry} isEmbedded={true}/>
    default: return null
  }
}

const RichHeading2 = styled(Heading)`
  margin-top: ${props => props.theme.padding.medium};
`

const RichHeading3 = styled(Heading)`
  margin-top: ${props => props.theme.padding.mediumSmall};
`

const renderHeading = (node,children) => {
  const level = node.nodeType

  switch (level) {
    case 'heading-2': return <RichHeading2 level={2}>{children}</RichHeading2>
    case 'heading-3': return <RichHeading3 level={3}>{children}</RichHeading3>
    default: return null
  }
}

const renderParagraph = (node,children) => {
  console.log(node)
  return <BodyText level={2}>{children}</BodyText>
}

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  margin: ${props => props.theme.padding.small} 0;
`

const renderAsset = (node) => {
  //const level = node.nodeType
  const entry = node.data.target

  const props = {
    title: entry.fields.title['en-US'],
    alt: entry.fields.description ? entry.fields.description['en-US'] : entry.fields.title['en-US'],
    src: entry.fields.file['en-US'].url
  }

  return <Image {...props}/>
}

const UnorderedList = styled.div`
  font-size: ${props => props.theme.text.size.mediumSmall};
  margin-left: 2em;
  margin-bottom: ${props => props.theme.padding.small};
`

const renderUnorderedList = (node,children) => {
  return <UnorderedList>{children}</UnorderedList>
}

const ListItem = styled.li`
  margin-bottom: .5em;
  text-indent: -1.5em;
  padding-left: .1em;

  &:last-child {
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
    display: inline;
  }
`

const renderListItem = (node,children) => {
  return <ListItem>{children}</ListItem>
}

const options = {
  renderMark: {
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => renderEmbeddedEntry(node),
    [BLOCKS.HEADING_2]: (node,children) => renderHeading(node,children),
    [BLOCKS.HEADING_3]: (node,children) => renderHeading(node,children),
    [BLOCKS.PARAGRAPH]: (node,children) => renderParagraph(node,children),
    [BLOCKS.EMBEDDED_ASSET]: (node) => renderAsset(node),
    [BLOCKS.UL_LIST]: (node,children) => renderUnorderedList(node,children),
    [BLOCKS.LIST_ITEM]: (node,children) => renderListItem(node,children)
  },
}

const RichText = ({
  json
}) => {
  return documentToReactComponents(json,options)
}

export default RichText