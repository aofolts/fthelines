import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/type'

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(6)};
`

const UnstyledIntoSection = ({
  className
}) => {
  return (
    <section id='intro' className={className}>
      <Content>
        <Heading>Stop chasing the A life. Fuck the lines, and start living the life you want.</Heading>
        <BodyText>Fuck the Lines is a no-holds-barred exploration of the invisible lines that define our throughts and actions. It's a growing collection of insights and strategies to help you break free and live the creative life you want.</BodyText>
      </Content>
    </section>
  )
}

const Section = styled(UnstyledIntoSection)`
  padding: ${props => props.theme.padding.default};
  background: white;
`

export default Section