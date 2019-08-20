import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from './hero'
import ArticleHeader from './header'
import ContentSection from './section-content'
import RelatedArticlesSection from './section-related-articles'
// import {createClient} from 'contentful-management'

// let contentfulConfig

// try {
//   // Load the Contentful config from the .contentful.json
//   contentfulConfig = require('./../../../.contentful')
// } catch (_) {}

// // Overwrite the Contentful config with environment variables if they exist
// contentfulConfig = {
//   spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
//   accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || contentfulConfig.managementToken
// }

// const { spaceId, accessToken } = contentfulConfig

// const client = createClient({
//   accessToken
// })

const SingleArticle = ({
  data
}) => {
  const meta = {
    page: data.page,
    description: data.page.summary.text
  }

  // // Increment the article view count
  // client.getSpace(spaceId)
  //   .then(space => space.getEntry(data.page.contentfulId))
  //   .then(latestEntry => {
  //     if (!latestEntry.fields.viewCount) {
  //       latestEntry.fields.viewCount = {'en-US': 0}
  //     }

  //     latestEntry.fields.viewCount['en-US'] += 1

  //     return latestEntry.update()
  //   })

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
    contentfulId: contentful_id
    slug
    title
    shortName
    updatedAt
    updatedAtString: updatedAt(formatString: "MMM D, Y [at] h:mma")
    summary {
      text: summary
    }
    categories {
      id
      contentfulId: contentful_id
      title
      slug
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

export const VideoFragment = graphql`
  fragment video on ContentfulVideo {
    id
    title
    url
  }
`

export const articleContentFragment = graphql`
  fragment articleContent on ContentfulArticle {
    content {
      json
    }
  }
`

export const podcastEpisodeFragment = graphql`
  fragment podcastEpisode on ContentfulArticle {
    podcastEpisode {
      id
      contentfulId: contentful_id
      number
      audio {
        id
        file {
          url
        }
      }
    }
  }
`

export const query = graphql`
  query articleBySlug($slug: String!) {
    page: contentfulArticle(slug: {eq: $slug}) {
      coverImage {
        ...heroImage
      }
      coverAnimation {
        ...heroImage
      }
      video {
        ...video
      }
      ...articleContent
      ...articleMeta
      relatedArticles {
        ...articleMeta
        coverImage {
          ...smallFluidImage
        }
      }
      ...podcastEpisode
    }
  } 
`