import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import IntroSection from './section-intro'
import GoalSection from './section-goal'
import Hero from './hero'
import {graphql} from 'gatsby'

const HomePage = ({
  data
}) => {
  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
        <Hero data={data}/>
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
    form: contentfulSubscribeForm(formId: {eq: "904072"}) {
      headline
      formId
      teaser {
        text:teaser      
      }
    }
  }
`