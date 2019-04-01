import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from './hero'
import ArticleHeader from './header'
import ContentSection from './section-content'
import Meta from 'components/meta'

const SingleArticle = ({
  data
}) => {
  return (
    <Layout>
      <Meta {...data.page}/>
      <ArticleHeader entry={data.page} colorMode='light'/>
      <Hero entry={data.page}/>
      <ContentSection data={{entry: data.page}}/>
    </Layout>
  )
}

export default SingleArticle

export const query = graphql`
  query articleBySlug($slug: String!) {
    page: contentfulArticle(slug: {eq: $slug}) {
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
      content {
        json
      }
      coverImage {
        ...heroImage
      }
      meta {
        title
        description {
          description
        }
      }
      author {
        name
        avatar {
          ...smallFluidImage
        }
      }
    }
  } 
`