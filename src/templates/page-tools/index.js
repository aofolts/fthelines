import React from 'react'
import Layout from 'components/layout'
import {graphql} from 'gatsby'
import IntroSection from './section-intro'
import ToolsSection from './section-tools'

const ToolsPage = ({
  data
}) => {
  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
        <IntroSection/>
        <ToolsSection/>
      </div>
    </Layout>
  )
}

export default ToolsPage

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "tools"}) {
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