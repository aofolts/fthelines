import React from 'react'
import Layout from 'components/layout'
import {graphql} from 'gatsby'
import IntroSection from './section-intro'
import MilestonesSection from './section-milestones'

const HomePage = ({
  data
}) => {
  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
        <IntroSection/>
        <MilestonesSection/>
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