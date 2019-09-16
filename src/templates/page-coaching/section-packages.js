import React from 'react'
import styled from 'styled-components'
import ServiceCard from './card-package'
import coaching from 'data/coaching'

const data = {
  packages: Object.values(coaching.packages)
}

const UnstyledPackagesSection = ({
  className
}) => {
  return (
    <section id='packages' className={className}>
      <Content>
        <Grid>
          <Cards entries={data.packages}/>
        </Grid>
      </Content>
    </section>
  )
}

const Cards = ({
  entries
}) => {
  return entries.map(entry => {
    return (
      <ServiceCard entry={entry} key={entry.name}/>
    )
  })
}

const PackagesSection = styled(UnstyledPackagesSection)`
  padding: ${props => props.theme.padding.default};
  background: white;
  margin-top: calc(-1 * ${props => props.theme.padding.large});
`

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.medium};
`



export default PackagesSection