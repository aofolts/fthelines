// import React from 'react'
// import {graphql} from 'gatsby'
// import Layout from 'components/layout'
// import Hero from './hero'
// import ArticleHeader from './header'
// import ContentSection from './section-content'
// import RelatedArticlesSection from './section-related-articles'

// const SinglePodcast = ({
//   data
// }) => {
//   const meta = {
//     page: data.page,
//     description: data.page.summary.text
//   }

//   return (
//     <Layout meta={meta}>
//       <ArticleHeader entry={data.page} colorMode='light'/>
//       <Hero entry={data.page}/>
//       <ContentSection data={{entry: data.page}}/>
//       {/* <RelatedArticlesSection relatedArticles={data.page.relatedArticles}/> */}
//     </Layout>
//   )
// }

// export default SinglePodcast

// export const podcastEpisodeMetaFragment = graphql`
//   fragment podcastEpisodeMeta on ContentfulPodcastEpisode {
//     __typename
//     id
//     slug
//     title
//     updatedAt
//     updatedAtString: updatedAt(formatString: "MMM D, Y [at] h:mma")
//     summary {
//       text: summary
//     }
//     fullPublishDate: publishDate(formatString: "MMMM d, YYYY")
//     publishDate
//     number
//   }
// `

// // export const podcastEpisodeContentFragment = graphql`
// //   fragment podcastEpisodeContent on ContentfulpodcastEpisode {
// //     content {
// //       json
// //     }
// //   }
// // `

// export const query = graphql`
//   query podcastEpisodeBySlug($slug: String!) {
//     page: contentfulPodcastEpisode(slug: {eq: $slug}) {
//       coverImage {
//         ...heroImage
//       }
//       ...podcastEpisodeMeta
//       audio {
//         id
//         title
//         file {
//           url
//         }
//       }
//       notes {
//         json
//       }
//     }
//   } 
// `