import styled from 'styled-components'
import React from 'react'
import ArticleCard from 'components/card-article'

const data = {
  articles: [
    {
      title: 'Review: The Brooks Ghost is Cushy and Lighter Than Ever.',
      category: 'Product Reviews',
      excerpt: `Sed cursus turpis vitae tortor. Praesent vestibulum dapibus nibh. Aenean ut eros et nisl sagittis vestibulum. Cras ultricies mi eu turpis hendrerit fringilla.`
    },
    {
      title: 'Review: The Brooks Ghost is Cushy and Lighter Than Ever!',
      category: 'Product Reviews',
      excerpt: `Sed cursus turpis vitae tortor. Praesent vestibulum dapibus nibh. Aenean ut eros et nisl sagittis vestibulum. Cras ultricies mi eu turpis hendrerit fringilla.`,
    },
    {
      title: 'Review: The Brooks Ghost is Cushy and Lighter Than Ever',
      category: 'Product Reviews',
      excerpt: `Sed cursus turpis vitae tortor. Praesent vestibulum dapibus nibh. Aenean ut eros et nisl sagittis vestibulum. Cras ultricies mi eu turpis hendrerit fringilla.`
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