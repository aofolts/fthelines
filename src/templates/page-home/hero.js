import React from 'react'
import styled from 'styled-components'
import {JumboHeading,BodyText} from 'components/typography'
import GlitchImg from './andrew-hero.gif'
import Tripwire from 'components/tripwire'
import Link from 'components/link'
import axios from 'axios'

const UnstyledHero = ({
  className,
  data
}) => {
  return (
    <section id='hero' className={className}>
      <Container>
        <Content>
          <Text>
            <HeroTitle>Stop chasing the A Life.</HeroTitle>
            <Copy>
              Hi there, I'm Andrew. F the Lines is a no-bullshit blog for <Link to='/articles/f-the-lines-manifesto'>creative rebels</Link> who want to find their purpose, get focused, and stay <Link to='articles/freedom-business-roadmap'>wildly functional</Link> in a distracted world: the "F Life." Let's make it happen.
            </Copy>
            <div>
              <Tripwire data={data.form}/>
            </div>
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
  height: 74rem;
  flex-shrink: 0;
  width: auto;

  @media (max-width: 1200px) {
    display: none;
  }
`

const Hero = styled(UnstyledHero)`
  padding: ${props => props.theme.padding.default};
  padding-bottom: calc(${props => props.theme.padding.large} * 2);
  background: ${props => props.theme.color.grey.lightest};
`

export default Hero