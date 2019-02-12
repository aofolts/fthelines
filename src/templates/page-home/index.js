import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'

const HomePage = ({
  data
}) => {
  return (
    <Layout>
      <div id='main'>
        <ArticlesSection/>
      </div>
    </Layout>
  )
}

export default HomePage