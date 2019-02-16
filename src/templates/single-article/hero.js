import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'components/image-background'

const Container = styled.div`
  background: ${props => props.theme.color.primary.lightest};
  width: ${props => props.theme.columns(11)};
  max-width: 100%;
  margin: 0 auto;
`

const Media = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
`

const UnstyledHero = ({
  className,
  entry
}) => {
  return (
    <section id='hero' className={className}>
      <Container>
        <Media>
          <BackgroundImage data={entry.coverImage} filter='dark'/>
        </Media>
      </Container>
    </section>
  )
}

const Hero = styled(UnstyledHero)`
  background: ${props => props.theme.color.grey.lightest};

  &:before {
    content: '';
    width: 100%;  
    height: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
  }
`

export default Hero