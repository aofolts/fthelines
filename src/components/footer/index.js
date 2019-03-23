import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/text'
import Form from './form'

const Wrap = styled.div`
  width: ${props => props.theme.columns(7)};
  max-width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.padding.default};
  text-align: center;
`

const UnstyledFooter = ({
  className
}) => {
  return (
    <footer id='footer' className={className}>
      <Wrap>
        <Heading>Stay Updated</Heading>
        <BodyText>Get unstuck. Get weekly stories on breaking away from the A life and living the F life.</BodyText>
        <Form/>
      </Wrap>
    </footer>
  )
}

const Footer = styled(UnstyledFooter)`
  background: ${props => props.theme.color.grey.lighter};
`

export default Footer