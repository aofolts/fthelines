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
  spotsTaken: 113,
  totalSpots: 365
}

goalData.spotsLeft = goalData.totalSpots - goalData.spotsTaken

const UnstyledGoalSection = ({
  className
}) => {
  return (
    <section className={className}>
      <Wrap>
        <TextWrap>
          <JumboHeading kind='jumbo'>365 Comics</JumboHeading>
          <BodyText>
            Running your own business full-time can be overwhelming. That's why I created a straightforward plan called the Freedom Business Roadmap. It's a 15-week email crash course designed to take you from "A to Free" by building creative consistency.
           <Link to='/articles/freedom-business-roadmap'>Get started here</Link>.
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

const GoalSection = styled(UnstyledGoalSection)`
  padding: ${props => props.theme.padding.default};
  background: white;
`

export default GoalSection