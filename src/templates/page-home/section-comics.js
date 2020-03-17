import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/text'
import Video from 'components/video'

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
`

const VideoContainer = styled.div`
  width: ${props => props.theme.columns(8)};
  max-width: 100%;
  margin: ${props => props.theme.padding.mediumLarge} auto 0;
`

const UnstyledIntoSection = ({
  className
}) => {
  return (
    <section id='intro' className={className}>
      <Content>
        <Heading>Who wrote the lines that hold you back? What if you redrew them?</Heading>
        <BodyText>The starving artist. What an awful idea. Society tells us that it's impossible to make doing what we love. The thing is, you CAN follow your passions. But you need one secret ingredient: consistency. Here's why...</BodyText>
      </Content>
      <VideoContainer>
        <Video entry={{url: 'https://youtu.be/ft192BoCFVk',title:'F the Lines Intro Video'}}/>
      </VideoContainer>
    </section>
  )
}

const Section = styled(UnstyledIntoSection)`
  padding: ${props => props.theme.padding.default};
  padding-bottom: 0;
  background: white;
`

export default Section