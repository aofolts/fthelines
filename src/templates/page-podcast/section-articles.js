import styled from 'styled-components'
import React from 'react'
import {graphql,StaticQuery} from 'gatsby'
import ArticlesGrid from 'components/articles-grid'

const UnstyledArticlesSection = ({
  className,
  data
}) => {
  const articles = data.articles.edges.map(edge => edge.node)

  return (
    <section id='blog' className={className}>
      <ArticlesGrid entries={articles}/>
    </section>
  )
}

const ArticlesSection = styled(UnstyledArticlesSection)`
  padding: ${props => props.theme.padding.default};
  background: ${props => props.theme.color.grey.lightest};
`

const query = graphql`
  {
    articles: allContentfulArticle(
      sort: {
        fields: podcastEpisode___number
        order: DESC
      }
      filter: {
        podcastEpisode: {number: {ne: null}}
      }
    ) {
      edges {
        node {
          ...articleMeta
          ...podcastEpisode
          coverImage {
            ...mediumFluidImage
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <ArticlesSection data={data} {...props}/>}
  />
)