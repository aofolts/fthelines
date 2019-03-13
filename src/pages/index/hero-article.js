import React from 'react'
import styled from 'styled-components'
import {Heading,ActionLink} from 'components/text'
import BackgroundImage from 'components/image-background'
import {StaticQuery} from 'gatsby'
import {getPagePath} from 'utilities/router'

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

const HeroTitle = styled(Heading)`
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
            {articleData.summary.text} <ActionLink to={getPagePath(articleData)}>Read More</ActionLink>
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
          __typename
          id
          slug
          title
          summary {
            text: summary
          }
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