import styled from 'styled-components'
import React from 'react'
import ArticleCard from 'components/card-article'
import {graphql,StaticQuery} from 'gatsby'
import media from 'components/theme/media'

const Articles = ({entries}) => entries.map(entry => {
  return <ArticleCard key={entry.title} entry={entry}/>
})

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.mediumLarge} ${props => props.theme.padding.medium};
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;

  ${media.phone`
    grid-gap: ${props => props.theme.padding.medium};
  `}
`

const UnstyledArticlesSection = ({
  className,
  data
}) => {
  return (
    <section id='blog' className={className}>
      <Grid>
        <Articles entries={data.articles.edges.map(e => e.node)}/>
      </Grid>
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
      limit: 3,
      sort: {
        fields: [publishDate],
        order: DESC
      },
      filter: {
        publishDate: {ne: null}
      }
    ) {
      edges {
        node {
          ...articleMeta
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