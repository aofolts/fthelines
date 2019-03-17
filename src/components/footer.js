import React from 'react'
import styled from 'styled-components'
import Heading from 'components/text/heading'
import BodyText from 'components/text/body-text'
import media from 'components/theme/media'

const Input = styled.input`
  padding: 1em;
  font-size: ${BodyText.font.size[2]};
  border: none;
  background: white;

  ${media.phone`
    display: block;
    width: 100%;
  `}
`

const Submit = styled.button`
  background: ${props => props.theme.color.primary.default};
  padding: 1em;
  display: block;
  margin: 0 auto;
  background: ${props => props.theme.color.primary.medium};
  border: none;
  font-size: ${BodyText.font.size[2]};

  ${media.phone`
    display: block;
    width: 100%;
    margin-top: ${props => props.theme.padding.smallest};
  `}
`

const UnstyledForm = ({
  className
}) => {
  return (
    <form id='footer-contact-form' className={className} {...formData}>
      <Input type="email" name="EMAIL" id="mce-EMAIL" placeholder="email address" required/>
      <Submit type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">Subscribe</Submit>
      <div style={{position:'absolute',left: '5000px'}} aria-hidden="true">
        <input type="text" name="b_448322c097ab71b0ffe8792d9_4b763ebdb2" tabindex="-1" value=""/>
      </div>
    </form>
  )
}

const Form = styled(UnstyledForm)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${props => props.theme.padding.small};

  ${media.phone`
    display: block;
  `}
`

const formData = {
  action: "https://fthelines.us20.list-manage.com/subscribe/post?u=448322c097ab71b0ffe8792d9&amp;id=4b763ebdb2",
  method: "post",
  name: "mc-embedded-subscribe-form",
  target: "_blank",
  noValidate: true
}

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
        <Heading level='2'>Stay Updated</Heading>
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