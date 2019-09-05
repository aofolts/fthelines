import styled from 'styled-components'
import React from 'react'
import {graphql,StaticQuery} from 'gatsby'
import MilestoneCard from './card-milestone'

const UnstyledMilestonesSection = ({
  className,
  data
}) => {
  const milestones = data.milestones.edges.map(edge => edge.node)

  return (
    <section id='blog' className={className}>
      <Container>
        {milestones.map(entry => <MilestoneCard entry={entry} key={entry.id}/>)}
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

const query = graphql`
  {
    milestones: allContentfulMilestone(
      sort: {
        fields: [date],
        order: ASC
      }
    ) {
      edges {
        node {
          ...milestoneMeta
          articles {
            ...articleMeta
            coverImage {
              ...mediumFluidImage
            }
          }
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