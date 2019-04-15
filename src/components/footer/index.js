import React from 'react'
import styled from 'styled-components'
import Form from 'components/form-subscribe'
import {StaticQuery,graphql} from 'gatsby'

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
  const settings = {
    format: 'inline',
    sizing: 'large'
  }

  return (
    <footer id='footer' className={className}>
      <Wrap>
        <Form settings={settings} entry={data.form}/> 
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