import React from 'react'
import styled from 'styled-components'
import {JumboHeading,BodyText} from 'components/text'
import Link from 'components/link'

const Wrap = styled.div`
  width: ${props => props.theme.columns(10)};
  max-width: 100%;
  margin: 0 auto;
`

const TextWrap = styled.div`
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`

const GoalBarWrap = styled.div`
  margin-top: ${props => props.theme.padding.medium};
`

const GoalPosts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${props => props.theme.padding.small};
`

const Post = styled(BodyText)`
  margin-bottom: 0;
`

const StartPost = styled(Post)`
  
`

const EndPost = styled(Post)`
  
`

const GoalBar = styled.div`
  border: 2px solid ${props => props.theme.color.grey.darkest};
  height: ${props => props.theme.padding.mediumLarge};
  padding: ${props => props.theme.padding.smallest};
`

const Progress = styled.div`
  background: ${props => props.theme.color.primary.medium};
  width: ${props => Math.round((props.data.spotsTaken / props.data.totalSpots) * 100)}%;
  height: 100%;
`

export const goalData = {
  spotsTaken: 118,
  totalSpots: 365
}

goalData.spotsLeft = goalData.totalSpots - goalData.spotsTaken

const UnstyledGoalSection = ({
  className,
  browseLink = true
}) => {
  console.log(browseLink)
  return (
    <section className={className}>
      <Wrap>
        <TextWrap>
          <JumboHeading kind='jumbo'>365 Comics</JumboHeading>
          <BodyText>
            The secret to creativity is not inspiration. Been there, failed at that. What does work is consistency. This year, I'm challenging myself to draw a new comic every day for 365 days. It's flipped my world upside down. What challenge could you start today? <BrowseLink display={browseLink}/>
          </BodyText>
        </TextWrap>
        <GoalBarWrap>
          <GoalPosts>
            <StartPost level='1'>{goalData.spotsTaken} comics drawn</StartPost>
            <EndPost level='1'>{goalData.spotsLeft} comics left</EndPost>
          </GoalPosts>
          <GoalBar>
            <Progress data={goalData}/>
          </GoalBar>
        </GoalBarWrap>
      </Wrap>
    </section>
  )
}

const BrowseLink = ({
  display
}) => {
  if (!display) return false

  return <Link to='/comics'>Browse the Series</Link>
}

const GoalSection = styled(UnstyledGoalSection)`
  padding: ${props => props.theme.padding.default};
  background: white;
`

export default GoalSection