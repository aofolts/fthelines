import {normalizeEntry} from 'utilities/data'
import React from 'react'
import styled from 'styled-components'
import ArticleCard from 'components/card-article'
import media from 'components/theme/media'

const UnstyledArticlesGrid = ({
  className,
  entries
}) => {
  const articles = entries.map(rawEntry => {
    const entry = normalizeEntry(rawEntry)

    return <ArticleCard key={entry.title} entry={entry}/>
  })

  return (
    <div className={className}>
      {articles}
    </div>
  )
}

const ArticlesGrid = styled(UnstyledArticlesGrid)`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.mediumLarge} ${props => props.theme.padding.medium};
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;

  ${media.phone`
    grid-gap: ${props => props.theme.padding.medium};
  `}
`

export default ArticlesGrid