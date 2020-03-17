import React from 'react'
import Layout from 'components/layout'
import {graphql} from 'gatsby'
import ComicsSection from './section-comics'

const Page = ({
  data
}) => {
  const comics = data.pageComics.nodes
  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
      <ComicsSection comics={comics}/>
      </div>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query comicsQuery($skip: Int!, $limit: Int!) {
    page: contentfulPage(slug: {eq: "comics"}) {
      coverImage {
        ...heroImage
      }
      meta {
        title
        description {
          description
        }
      }
    }
    pageComics: allFile(
      filter: {
        extension: {
          eq: "jpg"
        },
        name: {
          glob: "*-16x9"
        }
      },
      sort: {
        fields: [relativePath],
        order: DESC
      },
      limit: $limit
      skip: $skip
    ) {
      nodes {
        absolutePath
        id
        base
        relativePath
        childImageSharp {
          id
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`