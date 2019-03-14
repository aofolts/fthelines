import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/text'
import Video from './video'

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(6)};
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
        <BodyText>I went to the right college. Took the right job. Earned the right amount of money. It didn't lead to happiness. So what does? I don't have the answer, but I'm setting out on a mission to find it. Here's how I'll do it...</BodyText>
      </Content>
      <VideoContainer>
        <Video/>
      </VideoContainer>
    </section>
  )
}

const Section = styled(UnstyledIntoSection)`
  padding: ${props => props.theme.padding.default};
  background: white;
`

export default Section