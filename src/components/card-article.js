import styled from 'styled-components'
import React from 'react'
import {Heading,BodyText} from 'components/text'
import BackgroundImage from 'components/image-background'
import Link from 'components/link'

const UnstyledContent = ({
  className,
  entry,
  children
}) => {
  return (
    <Link className={className} entry={entry}>{children}</Link>
  )
}

const Content = styled(UnstyledContent)`
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

const Summary = styled(BodyText)`
  margin-bottom: 0;
`

const UnstyledArticleCard = ({
  className,
  entry
}) => {
  return (
    <article className={className}>   
      <Content entry={entry}>
        <Media>
          <BackgroundImage data={entry.coverImage}/>
          {/* <Category level={3}>{entry.categories[0].title}</Category> */}
        </Media>
        <ArticleTitle level={3}>{entry.title}</ArticleTitle>
        <Summary level='2'>{entry.summary.text}</Summary>
      </Content>
    </article>
  )
}

const ArticleCard = styled(UnstyledArticleCard)`
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`

// const Category = styled(BodyText)`
//   position: absolute;
//   left: ${props => props.theme.padding.extraSmall};
//   background: ${props => props.theme.color.primary.medium};
//   line-height: 100%;
//   padding: .25em .5em;
//   bottom: -1.75em;
// `

export default ArticleCard