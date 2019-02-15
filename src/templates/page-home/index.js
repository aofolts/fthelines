import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import IntroSection from './section-intro'
import Hero from './hero'

const HomePage = ({
  data
}) => {
  return (
    <Layout>
      <div id='main'>
        <Hero/>
        <IntroSection/>
        <ArticlesSection/>
      </div>
    </Layout>
  )
}

export default HomePage