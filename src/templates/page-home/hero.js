import React from 'react'
import styled from 'styled-components'
import {JumboHeading,BodyText} from 'components/text'
import GlitchImg from './hero-glitch.gif'
import Input from 'components/form/input'
import Button from 'components/button'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
  display: flex;
`

const Text = styled.div`
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
`

const Copy = styled(BodyText)`
  max-width: 100%;
  flex: 1;
`

const HeroTitle = styled(JumboHeading)`
  
`

const Tripwire = styled.div`
  margin-top: ${props => props.theme.padding.smallest};
`

const EmailInput = styled(Input)`
`

const Submit = styled(Button)`
  margin-top: 0;
`

const UnstyledForm = ({
  className
}) => {
  return (
    <form id='footer-contact-form' className={className} {...formData}>
      <EmailInput type="email" name="EMAIL" id="mce-EMAIL" placeholder="email address" required/>
      <Submit type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe</Submit>
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
  margin-top: ${props => props.theme.padding.smallest};
  max-width: 100%;
`

const formData = {
  action: "https://fthelines.us20.list-manage.com/subscribe/post?u=448322c097ab71b0ffe8792d9&amp;id=4b763ebdb2",
  method: "post",
  name: "mc-embedded-subscribe-form",
  target: "_blank",
  noValidate: true
}

const MaskContainer = styled.div`
  width: 100%;
  height: ${props => props.theme.padding.large};
  position: absolute;
  left: 0;
  bottom: 0;
`

const Mask = styled.div`
  clip-path: polygon(0 100%, 0 0, 100% 100%);
  background: white;
  width: 100%;
  height: 100%;
`

const TripwireTeaser = styled(BodyText)`
  font-size: 1.6rem;
  color: rgba(0,0,0,.3);
  margin-bottom: 0;
`

const Glitch = styled.img`
  position: absolute;
  left: 50%;
  bottom: -65%;
  height: 90rem;
`

const UnstyledHero = ({
  className
}) => {
  return (
    <section id='hero' className={className}>
      <Container>
        <Content>
          <Text>
            <HeroTitle>Stop chasing the A Life.</HeroTitle>
            <Copy>
              Hi there, I'm Andrew. F the Lines is a no-bullshit blog about <a href='tk'>creativity</a>, <a href='tk'>productivity</a>, <a href='tk'>happiness</a>, and how to create a <a href='tk'>lifestyle business</a> that delivers on all of the above: the "F Life." Let's make it happen.
            </Copy>
            <Tripwire>
              <TripwireTeaser>Get 100% actionable advice. No filler.</TripwireTeaser>
              <Form/>
            </Tripwire>
          </Text>
          <Glitch src={GlitchImg}/>
        </Content>
      </Container>
      <MaskContainer>
        <Mask/>
      </MaskContainer>
    </section>
  )
} 

const Hero = styled(UnstyledHero)`
  padding: ${props => props.theme.padding.default};
  padding-bottom: calc(${props => props.theme.padding.large} * 2);
  background: ${props => props.theme.color.grey.lightest};
`

export default Hero