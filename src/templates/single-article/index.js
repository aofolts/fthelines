import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from './hero'
import ArticleHeader from './header'
import ContentSection from './section-content'
import RelatedArticlesSection from './section-related-articles'

const SingleArticle = ({
  data
}) => {
  const meta = {
    page: data.page,
    description: data.page.summary.text
  }

  return (
    <Layout meta={meta}>
      <ArticleHeader entry={data.page} colorMode='light'/>
      <Hero entry={data.page}/>
      <ContentSection data={{entry: data.page}}/>
      <RelatedArticlesSection relatedArticles={data.page.relatedArticles}/>
    </Layout>
  )
}

export default SingleArticle

export const articleMetaFragment = graphql`
  fragment articleMeta on ContentfulArticle {
    __typename
    id
    slug
    title
    updatedAt
    updatedAtString: updatedAt(formatString: "MMM D, Y [at] h:mma")
    summary {
      text: summary
    }
    fullPublishDate: publishDate(formatString: "MMMM d, YYYY")
    publishDate
    author {
      name
      avatar {
        ...mediumFluidImage
      }
    }
  }
`

export const articleContentFragment = graphql`
  fragment articleContent on ContentfulArticle {
    content {
      json
    }
  }
`

export const query = graphql`
  query articleBySlug($slug: String!) {
    page: contentfulArticle(slug: {eq: $slug}) {
      coverImage {
        ...heroImage
      }
      ...articleContent
      ...articleMeta
      relatedArticles {
        ...articleMeta
        coverImage {
          ...smallFluidImage
        }
      }
    }
  } 
`