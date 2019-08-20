import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'components/image-background'
import {
  Heading,
  BodyText,
  ListItem,
  UnorderedList
} from 'components/typography'
import media from 'components/theme/media'
import {BodyLink} from 'components/link'
import {graphql} from 'gatsby'

const UnstyledMilestoneCard = ({
  className,
  entry
}) => {
  const image = entry.coverImage || entry.articles[0].coverImage

  return (
    <div className={className}>
      <Timeline>
        <Date>{entry.slashDate}</Date>
        <Line/>
      </Timeline>
      <Content>
        <Heading level={2}>
          <TitleDate>{entry.slashDate}: </TitleDate>
          {entry.title}
        </Heading>
        <BodyText>{entry.personalSummary.text}</BodyText>
        <ImageContainer>
          <BackgroundImage data={image}/>
        </ImageContainer>
        <ResourcesHeading level={3}>Resources</ResourcesHeading>
        <ResourceList>
          {entry.articles.map(entry =>{
            return <ListItem key={entry.id}><BodyLink page={entry}>{entry.shortName || entry.title}</BodyLink></ListItem>
          })}
        </ResourceList>
        <Lesson level={2}>
          <LessonHeading>Takeaway:</LessonHeading> {entry.takeaway}
        </Lesson>
      </Content>
    </div>
  )
}

const MilestoneCard = styled(UnstyledMilestoneCard)`
  display: flex;
  margin-bottom: ${props => props.theme.padding.large};

  ${media.maxTablet`
    display: block;
  `}
`

const Lesson = styled(BodyText)`
  margin-bottom: 0;
`

const LessonHeading = styled.span`
  font-weight: 600;
  font-family: nitti;
`

const ResourcesHeading = styled(Heading)`
  margin-top: ${props => props.theme.padding.small};
`

const ResourceList = styled(UnorderedList)`
  margin-top: ${props => props.theme.padding.small};
`

const UnstyledLine = ({
  className
}) => {
  return (
    <svg className={className} viewBox='0 0 10 400' preserveAspectRatio='false' style={{height: '100%'}}>
      <path 
        d='m 5 0 l 0 400' 
        vectorEffect='non-scaling-stroke' 
        strokeWidth='2px' 
        strokeDasharray='10px,10px'
        stroke='#ccc'
        strokeLinecap='square'
      />
    </svg>
  )
}

const TitleDate = styled.span`
  ${media.aboveTablet`display: none;`}
`

const Line = styled(UnstyledLine)`
  width: ${props => props.theme.padding.small};
  height: 100%;
  flex-grow: 1;

  ${media.maxTablet`
    display: none;
  `}

  & path {
    stroke-width: 2x;
    stroke: ${props => props.theme.color.grey.lighten};
    height: 100%;
  }
`

const Timeline = styled.div`
  margin-right: ${props => props.theme.padding.medium};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.maxTablet`
    display: none;
  `}
`

const Date = styled(Heading)`
  color: ${props => props.theme.color.grey.lighten};
`

const Content = styled.div`
  
`

const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  margin-top: ${props => props.theme.padding.small};
`

export const milestoneMetaFragment = graphql`
  fragment milestoneMeta on ContentfulMilestone {
    id
    contentfulId: contentful_id
    title
    date
    takeaway
    slashDate: date(formatString: "M/Y")
    personalSummary {
      text: personalSummary
    }
  }
`

export default MilestoneCard