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

const UnstyledManifestoSection = ({
  className
}) => {
  return (
    <section id='intro' className={className}>
      <Content>
        <PageTitle>F the Lines Manifesto</PageTitle>
        <Copy>
          
        </Copy>
      </Content>
    </section>
  )
}

const Section = styled(UnstyledManifestoSection)`
  padding: ${props => props.theme.padding.default};
  padding-bottom: 0;
  background: ${props => props.theme.color.grey.lightest};
`

export default Section