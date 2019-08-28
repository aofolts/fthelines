import React from 'react'
import styled from 'styled-components'
import {JumboHeading,BodyText} from 'components/text'

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(7)};
  max-width: 100%;
`

const PageTitle = styled(JumboHeading)`
  margin-bottom: 0;
`

const Copy = styled(BodyText)`
  margin-top: ${props => props.theme.padding.small};
`

const yearsXp = (() => {
  const date = new Date()

  return date.getFullYear() - 2014
})()

const UnstyledIntoSection = ({
  className
}) => {
  return (
    <section id='intro' className={className}>
      <Content>
        <PageTitle>Tools &amp; Resources</PageTitle>
        <Copy>Below is an essential list of tools and resources that I've personally tested and relied on to grow F the Lines. FYI: many of the links are affiliate links, which means you'll get a discount and I'll get a comission. High five!</Copy>
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