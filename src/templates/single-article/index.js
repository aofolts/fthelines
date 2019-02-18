import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from './hero'
// import {getPageUrl} from 'utilities/router'
import ArticleHeader from './header'
import ContentSection from './section-content'

const SingleArticle = ({
  data
}) => {
  return (
    <Layout>
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
      summary {
        text: summary
      }
      fullPublishDate: publishDate(formatString: "MMMM d, YYYY")
      content {
        richText: childContentfulRichText {
          html
        }
      }
      coverImage {
        ...heroImage
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