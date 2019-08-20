import React from 'react'
import Layout from 'components/layout'
import {graphql} from 'gatsby'
import ArticlesSection from './section-articles'
import IntroSection from './section-intro'

const HomePage = ({
  data
}) => {
  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
        <IntroSection/>
        <ArticlesSection/>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "podcast"}) {
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