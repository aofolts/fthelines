import styled from 'styled-components'
import React from 'react'
import ArticleCard from 'components/card-article'
import media from 'components/theme/media'
import ArticlesGrid from 'components/articles-grid'

const UnstyledArticlesSection = ({
  className,
  data
}) => {
  return (
    <section id='blog' className={className}>
      <ArticlesGrid entries={data.articles}/>
    </section>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.medium};
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;

  ${media.phone`
    display: block;
  `}
`

const ArticlesSection = styled(UnstyledArticlesSection)`
  padding: ${props => props.theme.padding.default};
  background: ${props => props.theme.color.grey.lightest};
`
export default ArticlesSection