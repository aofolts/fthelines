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
        <Heading>Rochester’s friendly running and walking store since 1984</Heading>
        <BodyText>Whether you're training for your fifth marathon, planning some outdoor adventures, or getting into running, we're here to help you find the perfect fit—and have fun doing it!</BodyText>
      </Content>
    </section>
  )
}

const Section = styled(UnstyledIntoSection)`
  padding: ${props => props.theme.padding.default};
`

export default Section