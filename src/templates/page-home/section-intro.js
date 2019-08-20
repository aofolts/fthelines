import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/text'
import Video from './video'

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
        <Heading>Who wrote the lines that hold you back? What if you crossed them?</Heading>
        <BodyText>You went to the right school. Took the right job. Worked the right hours. But you're not <i>really</i> free, are you? You feel stuck, I get it. I've been there. But here's the good news: that's about to change. Let me tell you why...</BodyText>
      </Content>
      <VideoContainer>
        <Video/>
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