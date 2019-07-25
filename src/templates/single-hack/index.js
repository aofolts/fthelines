import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from './hero'
import ArticleHeader from './header'
import ContentSection from './section-content'
// import RelatedArticlesSection from './section-related-articles'

const SingleHack = ({
  data
}) => {
  const meta = {
    page: data.page,
    description: data.page.summary.text,
    image: false
  }

  const modifiedPage = {
    ...data.page,

  }

  return (
    <Layout meta={meta}>
      <ArticleHeader entry={data.page} colorMode='light'/>
      <ContentSection data={{entry: data.page}}/>
      {/* <RelatedArticlesSection relatedArticles={data.page.relatedArticles}/> */}
    </Layout>
  )
}

export default SingleHack

export const hackMetaFragment = graphql`
  fragment hackMeta on ContentfulHack {
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

export const hackContentFragment = graphql`
  fragment hackContent on ContentfulHack {
    content {
      json
    }
  }
`

export const query = graphql`
  query hackBySlug($slug: String!) {
    page: contentfulHack(slug: {eq: $slug}) {
      ...hackContent
      ...hackMeta
      # relatedArticles {
      #   ...articleMeta
      #   coverImage {
      #     ...smallFluidImage
      #   }
      # }
    }
  } 
`