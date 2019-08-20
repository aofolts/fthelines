import React from 'react'
import styled from 'styled-components'
import {JumboHeading,BodyText} from 'components/text'

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
  spotsTaken: 2,
  totalSpots: 10
}

goalData.spotsLeft = goalData.totalSpots - goalData.spotsTaken

const UnstyledGoalSection = ({
  className
}) => {
  return (
    <section className={className}>
      <Wrap>
        <TextWrap>
          <JumboHeading kind='jumbo'>Get Unstuck</JumboHeading>
          <BodyText>
            Through December 1st, I'm coaching ten creative rebels who want to find their focus and grow a freedom business. If that's you, let's chat! If we're a great fit, we'll do four Clarity Calls (1-2hrs each), and you can book #1 <a href='https://calendly.com/fthelines/60min' target='__blank'>right here</a>. They're all free. No strings attached. (:
          </BodyText>
        </TextWrap>
        <GoalBarWrap>
          <GoalPosts>
            <StartPost level='1'>{goalData.spotsTaken} spots gone</StartPost>
            <EndPost level='1'>{goalData.spotsLeft} spots left</EndPost>
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