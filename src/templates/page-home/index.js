import React from 'react'
import Layout from 'components/layout'
import IntroSection from './section-intro'
import RawGoalSection from 'components/section-goal'
import RawComicsSection from 'templates/page-comics/section-comics'
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
        <GoalSection/>
        <ComicsSection comics={data.comics.nodes}/>
      </div>
    </Layout>
  )
}

export default HomePage

const GoalSection = styled(RawGoalSection)`
  background: ${props => props.theme.color.grey.lightest};
  margin-top: calc(-1 * ${props => props.theme.padding.large});
  padding-top: calc(2 * ${props => props.theme.padding.large});
`

const ComicsSection = styled(RawComicsSection)`
  padding: ${props => props.theme.padding.default};
  margin-top: calc(-1 * ${props => props.theme.padding.large});
`

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
      limit: 3
    ) {
      nodes {
        ...Comic
      }
    }
  }
`