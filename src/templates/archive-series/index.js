import React from 'react'
import Layout from 'components/layout'
import ArticlesSection from './section-articles'
import {graphql} from 'gatsby'
import Header from './header'

const Archive = ({
  data
}) => {
  const articles = data.articles.edges.map((edge,i) => {
    return edge.node
  })

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
    }
    homePage: contentfulPage(slug: {eq: "home"}) {
      coverImage {
        ...heroImage
      }
    }
    articles: allContentfulArticle(
      filter: {
        series: {
          elemMatch: {
            slug: {eq: $slug}
          }
        }
      },
      sort: {
        fields: [publishDate],
        order: ASC
      }
    ) {
      edges {
        node {
          ...articleMeta
          coverImage {
            ...mediumFluidImage
          }
        }
      }
    }
  } 
`