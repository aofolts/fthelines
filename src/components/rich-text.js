import {BLOCKS,INLINES} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from 'react'
import ResourceCard from 'components/card-resource'
import {Heading,BodyText} from 'components/typography'
import styled from 'styled-components'
import SubscribeForm from 'components/form-subscribe'
import Link from 'components/link'

function getYouTubeVideoKey(url){
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)

  return (match&&match[7].length===11)? match[7] : false
}

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const UnstyledVideo = ({
  className,
  entry
}) => {
  let src = ''
  const url = entry.fields.url['en-US']
  const title = entry.fields.title['en-US']

  if (url.indexOf('youtube')) {
    src = `https://www.youtube.com/embed/${getYouTubeVideoKey(url)}?controls=0`
  }

  return (
    <div className={className}>
      <VideoIframe src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </div>
  )
}

const Video = styled(UnstyledVideo)`
  width: 100%;
  max-width: 100%;
  padding-bottom: 56.25%;
`

const RichResourceCard = styled(ResourceCard)`
  margin-top: ${props => props.theme.padding.medium};
`

const renderEmbeddedEntry = (node) => {
  const entry = node.data.target
  const type  = entry.sys.contentType.sys.id

  switch (type) {
    case 'resource': return <RichResourceCard entry={entry}/>
    case 'subscribeForm': return <SubscribeForm entry={entry} isEmbedded={true}/>
    case 'video': return <Video entry={entry}/>
    default: return null
  }
}

const RichHeading2 = styled(Heading)`
  margin-top: ${props => props.theme.padding.medium};

  &:first-child {
    margin-top: 0;
  }
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

const UnorderedList = styled.ul`
  font-size: ${props => props.theme.text.size.mediumSmall};
  margin-left: 2em;
  margin-bottom: ${props => props.theme.padding.small};

  & li {
    list-style-type: disc;
  }
`

const renderUnorderedList = (node,children) => {
  return <UnorderedList>{children}</UnorderedList>
}

const OrderedList = styled.ol`
  font-size: ${props => props.theme.text.size.mediumSmall};
  margin-left: 1em;
  margin-bottom: ${props => props.theme.padding.small};

  & li {
    list-style-type: decimal;
  }
`

const renderOrderedList = (node,children) => {
  return <OrderedList>{children}</OrderedList>
}

const ListItem = styled.li`
  margin-bottom: .5em;
  padding: 0;

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

const renderEntryHyperlink = (node,children) => {
  const {fields,sys} = node.data.target
  const type = sys.contentType.sys.id

  if (type === 'subscribeForm') {
    return <a href={fields.url['en-US']} target='__blank'>{children}</a>
  }

  if (type === 'articleSeries') {
    const page = {
      title: fields.title['en-US'],
      slug: fields.slug['en-US'],
      type
    }

    return <Link page={page}>{children}</Link>
  }
}

const renderHyperlink = (node,children) => {
  return <a href={node.data.uri} target='__blank'>{children}</a>
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
    [BLOCKS.OL_LIST]: (node,children) => renderOrderedList(node,children),
    [BLOCKS.LIST_ITEM]: (node,children) => renderListItem(node,children),
    [INLINES.ENTRY_HYPERLINK]: (node,children) => renderEntryHyperlink(node,children),
    [INLINES.HYPERLINK]: (node,children) => renderHyperlink(node,children)
  },
}

const RichText = ({
  json
}) => {
  return documentToReactComponents(json,options)
}

export default RichText