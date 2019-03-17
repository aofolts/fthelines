import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import IntroSection from './section-intro'
import GoalSection from './section-goal'
import Hero from './hero'
import Meta from 'components/meta'

const HomePage = ({
  data
}) => {
  return (
    <Layout>
      <div id='main'>
        <Meta {...data.page}/>
        <Hero/>
        <IntroSection/>
        <GoalSection/>
        <ArticlesSection/>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "home"}) {
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