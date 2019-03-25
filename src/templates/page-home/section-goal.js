import React from 'react'
import styled from 'styled-components'
import {Heading,JumboHeading,BodyText} from 'components/text'

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
  width: ${props => Math.round((props.data.raised / props.data.goal) * 100)}%;
  height: 100%;
`

const UnstyledGoalSection = ({
  className
}) => {
  const data = {
    raised: 940,
    goal: 25000
  }

  return (
    <section className={className}>
      <Wrap>
        <TextWrap>
          <JumboHeading kind='jumbo'>The Goal</JumboHeading>
          <BodyText>
            A mission without a deadline is just a dream. Here's the plan: by August 1st, I'm going to have a travel van, a podcast, and a list of 10 people across the U.S. who I can interview about living an unconventional life.
          </BodyText>
        </TextWrap>
        <GoalBarWrap>
          <GoalPosts>
            <StartPost level='1'>$0</StartPost>
            <EndPost level='1'>${data.goal.toLocaleString('en')}</EndPost>
          </GoalPosts>
          <GoalBar>
            <Progress data={data}/>
          </GoalBar>
        </GoalBarWrap>
      </Wrap>
    </section>
  )
}

const GoalSection = styled(UnstyledGoalSection)`
  padding: ${props => props.theme.padding.default};
  margin-top: calc(${props => props.theme.padding.large} * -1);
`

export default GoalSection