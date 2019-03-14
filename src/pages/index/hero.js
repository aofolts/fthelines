import React from 'react'
import styled from 'styled-components'
import {Heading} from 'components/text'
import BodyText from 'components/text/body-text'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
`

const Text = styled.div`
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
`

const Copy = styled(BodyText)`
  max-width: 100%;
  flex: 1;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.4em;
  filter: brightness(.95);
`

const HeroTitle = styled(Heading)`
  
`

const Tripwire = styled.div`
  margin-top: ${props => props.theme.padding.smallest};
`

const Input = styled.input`
  padding: 1em;
  font-size: ${BodyText.font.size[2]};
  border: none;
  box-sizing: border-box;
  background: white;
  min-width: 2px;

  &:hover, &:focus {
    box-shadow: inset 0 0 0 2px ${props => props.theme.color.primary.medium};
    outline: none;
  }
`

const Submit = styled.button`
  background: ${props => props.theme.color.primary.default};
  padding: 1em;
  display: block;
  margin: 0 auto;
  background: ${props => props.theme.color.primary.medium};
  border: none;
  font-size: ${BodyText.font.size[2]};
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

const UnstyledHero = ({
  className
}) => {
  return (
    <section id='hero' className={className}>
      <Container>
        <Content>
          <Text>
            <HeroTitle kind='jumbo'>Stop chasing the A life.</HeroTitle>
            <Copy>
              Hi there, I'm Andrew. F the Lines is a no-bullshit blog about <a>creativity</a>, <a>happiness</a>, <a>productivity</a>, and all the things I learn on my journey away from the beaten path toward the F life. Are you with me?
            </Copy>
            <Tripwire>
              <TripwireTeaser>Get 100% actionable advice. No fluff.</TripwireTeaser>
              <Form/>
            </Tripwire>
          </Text>
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