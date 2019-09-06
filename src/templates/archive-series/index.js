import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import {graphql} from 'gatsby'
import Header from './header'

const Archive = ({
  data
}) => {
  const {
    page,
    homePage
  } = data

  const meta = {
    title: page.title,
    description: page.description.description,
    image: {
      url: homePage.coverImage.fluid.src
    },
    page
  }

  const articles = page.articles.filter(entry => entry.publishDate)

  return (
    <Layout meta={meta}>
      <div id='main'>
        <Header entry={page}/>
        <ArticlesSection data={{articles}}/>
      </div>
    </Layout>
  )
}

export default Archive

export const query = graphql`
  query articleSeriesBySlug($slug: String!) {
    page: contentfulArticleSeries(slug: {eq: $slug}) {
      id
      title
      slug
      description {
        description
      }
      articles {
        ...articleMeta
        coverImage {
          ...mediumFluidImage
        }
      }
    }
    homePage: contentfulPage(slug: {eq: "home"}) {
      coverImage {
        ...heroImage
      }
    }
  } 
`