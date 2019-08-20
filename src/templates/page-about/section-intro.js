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
        <PageTitle>Hi, I'm Andrew.</PageTitle>
        <Copy>I'm a designer and coder who learned how to grow a freedom business through pure trial-and-error. Now, I'm downloading those insights into coaching and resources that help you get there even faster. Here's a bit of what I picked up along the way...</Copy>
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