import React from 'react'
import styled from 'styled-components'
import Form from 'components/tripwire'
import {StaticQuery,graphql} from 'gatsby'
import {JumboHeading,BodyText} from 'components/typography'

const Wrap = styled.div`
  width: ${props => props.theme.columns(7)};
  max-width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.padding.default};
  text-align: center;
`

const UnstyledFooter = ({
  className,
  data
}) => {
  const {
    formId
  } = data.form

  return (
    <footer id='footer' className={className}>
      <Wrap>
        <JumboHeading>Break free.</JumboHeading>
        <BodyText>Get weekly insights sent straight to your inbox. No bullshit, just 100% actionable advice.</BodyText>
        <Form data={{formId}}/> 
      </Wrap>
    </footer>
  )
}

const Footer = styled(UnstyledFooter)`
  background: ${props => props.theme.color.grey.lighter};
`

const query = graphql`
  {
    form: contentfulSubscribeForm(formId: {eq: "904072"}) {
      headline
      formId
      teaser {
        text:teaser      
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Footer data={data} {...props}/>}
  />
)