import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import IntroSection from './section-intro'
import UnstyledGoalSection from 'components/section-goal'
import PackagesSection from './section-packages'
import Hero from './hero'
import {graphql} from 'gatsby'
import styled from 'styled-components'

const HomePage = ({
  data
}) => {
  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
        <Hero data={data}/>
        <IntroSection/>
        <PackagesSection/>
        <GoalSection/>
        <ArticlesSection/>
      </div>
    </Layout>
  )
}

const GoalSection = styled(UnstyledGoalSection)`
  background: ${props => props.theme.color.grey.lighter};
`

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