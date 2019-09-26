import styled from 'styled-components'
import React from 'react'
import {graphql,StaticQuery} from 'gatsby'
import ToolCard from './card-tool'

const UnstyledMilestonesSection = ({
  className,
  data
}) => {
  const featuredTools = data.featuredTools.nodes

  return (
    <section id='blog' className={className}>
      <Container>
        {featuredTools.map(entry => <ToolCard entry={entry} key={entry.id}/>)}
      </Container>
    </section>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.columns(7)};
  max-width: 100%;
`

const MilestonesSection = styled(UnstyledMilestonesSection)`
  padding: ${props => props.theme.padding.default};
  background: ${props => props.theme.color.grey.lightest};
`

export const toolInfoFragment = graphql`
  fragment toolInfo on ContentfulTool {
    id
    contentfulId: contentful_id
    title
    headline
    buttonLabel
    url
    teaser {
      text: teaser
    }
    categories {
      id
      contentfulId: contentful_id
      title
      slug
    }
    content {
      json
    }
  }
`

const query = graphql`
  {
    featuredTools: allContentfulTool(
      filter: {
        categories: {elemMatch: {title: {eq: "Featured"}}}
      }
    ) {
      nodes {
        ...toolInfo
        thumbnail {
          ...smallFluidImage
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <MilestonesSection data={data} {...props}/>}
  />
)