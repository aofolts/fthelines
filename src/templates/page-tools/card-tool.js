import React,{useState} from 'react'
import styled from 'styled-components'
import BackgroundImage from 'components/image-background'
import Button from 'components/button'
import {
  Heading,
  BodyText
} from 'components/typography'
import {InlineLink} from 'components/link'
import RichText from 'components/rich-text'

const UnstyledToolCard = ({
  className,
  entry
}) => {
  const [isExpanded,setIsExpanded] = useState(false)

  return (
    <article className={className}>
      <ActionContainer>
        <ThumbnailContainer>
          <Thumbnail data={entry.thumbnail}/>
        </ThumbnailContainer>
        <ActionButton url={entry.url}>{entry.buttonLabel}</ActionButton>
      </ActionContainer>
      <Info>
        <Heading level={3}>{entry.title}</Heading>
        <SubTitle level={2}>{entry.headline}</SubTitle>
        <Content {...{isExpanded}}>
          <RichText json={entry.content.json}/>
        </Content>
        <Teaser {...{isExpanded}} level={2}>
          {entry.teaser.text}
        </Teaser>
        <ReadMore onClick={() => setIsExpanded(!isExpanded)} level={2}>
          <InlineLink>{isExpanded ? 'Show Less' : 'Show More'}</InlineLink>
        </ReadMore>
      </Info>
    </article>
  )
}

const SubTitle = styled(BodyText)`
  color: ${props => props.theme.color.grey.medium};
`

const ReadMore = styled(BodyText)`
  display: ${props => props.isExpanded ? 'none' : 'block'};
  cursor: pointer;
`

const Teaser = styled(BodyText)`
  display: ${props => props.isExpanded ? 'none' : 'block'};
`

const ThumbnailContainer = styled.div`
  width: ${props => props.theme.padding.large};
  height: ${props => props.theme.padding.large};

  ${props => props.theme.media.phone`
    display: none;
  `}
`

const Thumbnail = styled(BackgroundImage)`
`

const ActionContainer = styled.div`
  margin-right: ${props => props.theme.padding.mediumSmall};
  width: 22.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-contents: center;
  flex-shrink: 0;

  ${props => props.theme.media.phone`
    display: block;
    margin-right: 0;
    width: 100%;
  `}
`

const ActionButton = styled(Button)`
  margin-bottom: 0;
  width: 100%;
  text-align: center;
`

const Content = styled.div`
  display: ${props => props.isExpanded ? 'block' : 'none'};

  & p {
    font-size: 1.8rem;
  }
`

const ToolCard = styled(UnstyledToolCard)`
  display: flex;
  border: 2px dashed ${props => props.theme.color.grey.lighten};
  padding: ${props => props.theme.padding.medium};

  & + & {
    border-top-width: 0;
  }

  ${props => props.theme.media.phone`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  `}
`

const Info = styled.div`

`

export default ToolCard