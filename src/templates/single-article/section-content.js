import styled, {createGlobalStyle} from 'styled-components'
import React from 'react'
import {Heading} from 'components/type'

const Content = styled.div`
  width: ${props => props.theme.columns(9)};
  max-width: 100%;
  margin: 0 auto;
`

const ContentStyle = createGlobalStyle`
  #article-content p {
    width: ${props => props.theme.columns(7)};
    max-width: 100%;
    margin-right: auto;
    font-size: 2rem;
    font-family: europa;
    font-weight: 300;
    color: ${props => props.theme.color.grey.darker};
    line-height: 1.4em;
  }

  #article-content p b {
    font-weight: 400;
  }

  #article-content h2,h3 {
    color: ${props => props.theme.color.grey.darkest};
    font-family: Brown;
    margin-bottom: .75em;
    margin-top: 2em;
  }

  #article-content h2 {
    font-size: ${Heading.styles.fontSize[2]};
    font-weight: ${Heading.styles.fontWeight[2]};
  }

  #article-content h3 {
    font-size: ${Heading.styles.fontSize[3]};
    font-weight: ${Heading.styles.fontWeight[3]};
  }
`

const UnstyledContentSection = ({
  className,
  data
}) => {
  const richText = data.entry.content.richText.html

  return (
    <section id='article-body' className={className}>
      <ContentStyle/>
      <Content id='article-content' dangerouslySetInnerHTML={{__html: richText}}/>
    </section>
  )
}

const ContentSection = styled(UnstyledContentSection)`
  background: white;
  padding: ${props => props.theme.padding.default};
`

export default ContentSection