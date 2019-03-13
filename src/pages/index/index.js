import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import IntroSection from './section-intro'
import GoalSection from './section-goal'
import Hero from './hero'

const HomePage = ({
  data
}) => {
  return (
    <Layout>
      <div id='main'>
        <Hero/>
        <IntroSection/>
        <GoalSection/>
        <ArticlesSection/>
      </div>
    </Layout>
  )
}

export default HomePage