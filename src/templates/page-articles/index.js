import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import Meta from 'components/meta'
import {graphql} from 'gatsby'

const HomePage = ({
  data
}) => {
  return (
    <Layout>
      <div id='main'>
        <Meta page={data.page}/>
        <ArticlesSection/>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "articles"}) {
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