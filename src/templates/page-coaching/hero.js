import React from 'react'
import styled from 'styled-components'
import {JumboHeading,BodyText} from 'components/typography'
import GlitchImg from './andrew-hero.gif'
import Button from 'components/button'
import Link from 'components/link'
import coaching from 'data/coaching'

const UnstyledHero = ({
  className,
  data
}) => {
  return (
    <section id='hero' className={className}>
      <Container>
        <Content>
          <Text>
            <HeroTitle>Coaching For Creatives.</HeroTitle>
            <Copy>
              Does it feel like you're moving an inch in a million directions? I'm here to help you untangle your priorities and get focused on ONE PATH, so you can grow a <Link to='/articles/freedom-business-roadmap'>business</Link> that delivers max freedom.
            </Copy>
            <Button url={coaching.discoveryCall.url}>Book a *Free* Discovery Call</Button>
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



const Glitch = styled.img`
  position: absolute;
  left: 53%;
  bottom: -52%;
  height: 73rem;

  @media (max-width: 1200px) {
    display: none;
  }
`

export default Hero