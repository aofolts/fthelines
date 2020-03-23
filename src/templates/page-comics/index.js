import React from 'react'
import Layout from 'components/layout'
import {graphql} from 'gatsby'
import RawComicsSection from './section-comics'
import RawGoalSection from 'components/section-goal'
import styled from 'styled-components'
import RawNagivation from './navigation'

const Page = ({
  data
}) => {
  const comics = data.comics.nodes

  return (
    <Layout meta={{page: data.page}}>
      <div id='main'>
        <GoalSection browseLink={false}/>
        <ComicsSection comics={comics} browseLink={false}/>
        <Navigation/>
      </div>
    </Layout>
  )
}

const Navigation = styled(RawNagivation)`
  padding-top: 0;
`

const GoalSection = styled(RawGoalSection)`
  background: ${props => props.theme.color.grey.lightest};
`

const ComicsSection = styled(RawComicsSection)`
  padding-top: 0;
`

export default Page

export const ComicFragment = graphql`
  fragment Comic on File {
    absolutePath
    id
    base
    relativePath
    childImageSharp {
      id
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "comics"}) {
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
    comics: allFile(
      filter: {
        extension: {
          eq: "jpg"
        },
        name: {
          glob: "*-16x9"
        }
      },
      sort: {
        fields: [relativePath],
        order: DESC
      },
      limit: 27
    ) {
      nodes {
        ...Comic
      }
    }
  }
`