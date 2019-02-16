import styled from 'styled-components'
import React from 'react'
import ArticleCard from 'components/card-article'

const data = {
  articles: [
    {
      title: 'More Content Coming Soon. Until Then, Fuck the Lines!',
      category: 'Product Reviews',
      excerpt: `Fuck the Lines is a no-holds-barred exploration of the invisible lines that define our throughts and actions. It's a growing collection of insights and strategies.`
    },
    {
      title: 'More Content Coming Soon. Until Then, Fuck the Lines.',
      category: 'Product Reviews',
      excerpt: `Fuck the Lines is a no-holds-barred exploration of the invisible lines that define our throughts and actions. It's a growing collection of insights and strategies.`
    },
    {
      title: 'More Content Coming Soon. Until Then, Fuck the Lines?',
      category: 'Product Reviews',
      excerpt: `Fuck the Lines is a no-holds-barred exploration of the invisible lines that define our throughts and actions. It's a growing collection of insights and strategies.`
    }
  ]
}

const articles = data.articles.map(entry => (
  <ArticleCard key={entry.title} entry={entry}/>
))

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.medium};
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
`

const UnstyledArticlesSection = ({
  className
}) => {
  return (
    <section id='blog' className={className}>
      <Grid>{articles}</Grid>
    </section>
  )
}

const ArticlesSection = styled(UnstyledArticlesSection)`
  padding: ${props => props.theme.padding.default};
`

export default ArticlesSection