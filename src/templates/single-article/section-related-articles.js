import React from 'react'
import styled from 'styled-components'
import {Heading} from 'components/typography'
import ArticleCard from 'components/card-article'
import {graphql,StaticQuery} from 'gatsby'

const RelatedArticleCard = styled(ArticleCard)`
  
`

const SectionHeading = styled(Heading)`
  margin: 0 auto;
  max-width: ${props => props.theme.columns(6)};
  width: 100%;
  text-align: center;
  margin-bottom: ${props => props.theme.padding.mediumLarge};
`

const ArticlesWrap = styled.div`
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.medium};
`

const UnstyledRelatedArticlesSection = ({
  className,
  relatedArticles,
  data
}) => {
  const recentArticles = data.recentArticles.edges.map(item => item.node)

  const articles = (relatedArticles || recentArticles).map(entry => {
    return (
      <RelatedArticleCard entry={entry} key={entry.id}/>
    )
  })

  return (
    <section className={className}>
      <SectionHeading level='2'>Related Articles</SectionHeading>
      <ArticlesWrap>
        {articles}
      </ArticlesWrap>
    </section>
  )
}

const RelatedArticlesSection = styled(UnstyledRelatedArticlesSection)`
  padding: ${props => props.theme.padding.default};
  background: ${props => props.theme.color.grey.lightest};
`

const query = graphql`
  {
    recentArticles: allContentfulArticle(
      limit: 3,
      sort: {
        fields: [publishDate],
        order: DESC
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
    render={data => <RelatedArticlesSection data={data} {...props}/>}
  />
)