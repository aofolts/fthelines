import React from 'react'
import styled from 'styled-components'
import {JumboHeading} from 'components/text'

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(8)};
  max-width: 100%;
`

const PageTitle = styled(JumboHeading)`
  margin-bottom: 0;
`

const UnstyledIntoSection = ({
  className
}) => {
  return (
    <section id='intro' className={className}>
      <Content>
        <PageTitle>Podcast Episodes</PageTitle>
      </Content>
    </section>
  )
}

const Section = styled(UnstyledIntoSection)`
  padding: ${props => props.theme.padding.default};
  padding-bottom: 0;
  background: ${props => props.theme.color.grey.lightest};
`

export default Section