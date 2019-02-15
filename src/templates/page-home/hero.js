import React from 'react'
import styled from 'styled-components'
import {Title,ActionLink} from 'components/type'
import Button from 'components/button'
import imageSrc from './clothespins.jpeg'
import BackgroundImage from 'components/image-background'
import {StaticQuery} from 'gatsby'

const Container = styled.div`
  background: ${props => props.theme.color.primary.lightest};
  height: ${props => props.theme.columns(7)};
  background: #444;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
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
  display: block;
  width: ${props => props.theme.columns(4)};
  max-width: 100%;
  height: ${props => props.theme.columns(5)};
  background: grey;

  @media screen and (min-width: 100rem) {
    margin-left: calc(${props => props.theme.padding.large} * 2);
  }
`

const Background = styled.div`
  background: #333;
`

const HeroTitle = styled(Title)`
  width: ${props => props.theme.columns(8)};
  max-width: 100%;
`

const Hero = ({
  className,
  data
}) => {
  const articleData = data.articles.edges[0].node

  return (
    <section id='hero' className={className}>
      <Container>
        <BackgroundImage data={articleData.coverImage} filter='dark'/>
        <Content>
          <HeroTitle>{articleData.title}</HeroTitle>
          <Excerpt>
            {articleData.excerpt} <ActionLink>Read More</ActionLink>
          </Excerpt>
        </Content>
      </Container>
    </section>
  )
} 

const query = graphql`
  {
    articles: allContentfulArticle(
      limit: 1
    ) {
      edges {
        node {
          id
          title
          excerpt
          coverImage {
            ...heroImage
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Hero data={data} {...props}/>}
  />
)