import React from 'react'
import styled from 'styled-components'
import {Title} from 'components/type'
import BackgroundImage from 'components/image-background'

const Container = styled.div`
  background: ${props => props.theme.color.primary.lightest};
  width: ${props => props.theme.columns(11)};
  max-width: 100%;
  margin: 0 auto;
`

const Excerpt = styled.div`
  width: ${props => props.theme.columns(7)}
  max-width: 100%;
  flex: 1;
  color: white;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.4em;
  filter: brightness(.95);
`

const Media = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
`

const HeroTitle = styled(Title)`
  width: ${props => props.theme.columns(8)};
  max-width: 100%;
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