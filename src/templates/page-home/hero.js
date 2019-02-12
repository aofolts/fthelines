import React from 'react'
import styled from 'styled-components'
import {Title} from 'components/type'
import Button from 'components/button'
import imageSrc from './clothespins.jpeg'
import BackgroundImage from 'components/image-background'

const Container = styled.div`
  background: ${props => props.theme.color.primary.lightest};
  height: 65rem;
  background: #444;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.columns(7)};
`

const Text = styled.div`
  width: ${props => props.theme.container.height.tall}
  max-width: 100%;
  flex: 1;
  color: white;
`

const Copy = styled.p`
  font-size: 2rem;
  color: white;
`

const Media = styled.div`
  display: block;
  width: ${props => props.theme.columns(4)};
  max-width: 100%;
  height: ${props => props.theme.columns(5)};
  background: grey;

  @media screen and (min-width: 100rem) {
    margin-left: calc(${props => props.theme.padding.large} * 2);
  }
`

const UnstyledBackground = ({
  className
}) => {
  return (
    // <BackgroundImage data={{src: imageSrc}} className={className}/>
    <div className={className}></div>
  )
}

const Background = styled(UnstyledBackground)`
  background: #666;
`

const Hero = () => {
  return (
    <Container>
      <Background/>
      <Content>
        <Title>Hey</Title>
      </Content>
    </Container>
  )
} 

export default Hero