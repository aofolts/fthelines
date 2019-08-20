import React from 'react'
import Layout from 'components/layout'
import {graphql} from 'gatsby'
import ManifestoSection from './section-manifesto'

const HomePage = ({
  data
}) => {
  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
        <ManifestoSection/>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "about"}) {
      id
      title
      slug
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
  }
`