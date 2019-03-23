import styled from 'styled-components'
import React from 'react'
import media from 'components/theme/media'
import Input from 'components/form/input'
import Button from 'components/button'

const EmailInput = styled(Input)`
  ${media.phone`
    display: block;
    width: 100%;
  `}
`

const Submit = styled(Button)`
  margin-top: 0;
  text-transform: upper;

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
      <EmailInput type="email" name="EMAIL" id="mce-EMAIL" placeholder="email address" required/>
      <Submit type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</Submit>
      <div style={{position:'absolute',left: '5000px'}} aria-hidden="true">
        <input type="text" name="b_448322c097ab71b0ffe8792d9_4b763ebdb2" tabIndex="-1"/>
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

export default Form