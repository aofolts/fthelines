import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/text'

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
`

// const VideoContainer = styled.div`
//   width: ${props => props.theme.columns(8)};
//   max-width: 100%;
//   margin: ${props => props.theme.padding.mediumLarge} auto 0;
// `

const UnstyledIntoSection = ({
  className
}) => {
  return (
    <section id='intro' className={className}>
      <Content>
        <Heading>Skip the line. Get 5 years of experience in one conversation.</Heading>
        <BodyText>Since starting a <a href='https://www.sherpadesign.co/' target='__blank'>web design business</a> back in 2014, I've gone from $20/hr to $1,200 per day. Now, I'm rolling that experience into insight-packed coaching sessions, so you can jump straight to creative lightspeed.</BodyText>
      </Content>
    </section>
  )
}

const Section = styled(UnstyledIntoSection)`
  padding: ${props => props.theme.padding.default};
  background: white;
`

export default Section