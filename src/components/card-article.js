import styled from 'styled-components'
import React from 'react'
import {Heading,BodyText} from 'components/text'
import BackgroundImage from 'components/image-background'
import Link from 'components/link'

const Content = styled(Link)`
  display: block;
`

const Media = styled.div`
  padding-bottom: 56.25%;
  margin-bottom: ${props => props.theme.padding.small};
`

const ArticleTitle = styled(Heading)`
  margin-top: 0;

  &:hover {
    text-decoration: underline;
  }
`

const UnstyledArticleCard = ({
  className,
  entry
}) => {
  return (
    <article className={className}>   
      <Content page={entry}>
        <Media>
          <BackgroundImage data={entry.coverImage} test='fuck'/>
        </Media>
        <ArticleTitle level='3' as='h3'>{entry.title}</ArticleTitle>
        <BodyText level='2'>{entry.summary.text}</BodyText>
      </Content>
    </article>
  )
}

const ArticleCard = styled(UnstyledArticleCard)`
  cursor: pointer;

  &:hover {
    
  }
`

export default ArticleCard