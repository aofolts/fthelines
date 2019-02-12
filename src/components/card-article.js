import styled from 'styled-components'
import React from 'react'
import {Heading,BodyText} from 'components/type'

const Content = styled.div`
  display: block;
`

const UnstyledArticleCard = ({
  className,
  entry
}) => {
  return (
    <article className={className}>   
      <Content>
        <Heading level='3' as='h3'>Review: The Brooks Ghost is Cushy and Lighter Than Ever</Heading>
        <BodyText level='3'>Sed cursus turpis vitae tortor. Praesent vestibulum dapibus nibh. Aenean ut eros et nisl sagittis vestibulum. Cras ultricies mi eu turpis hendrerit fringilla.</BodyText>
      </Content>
    </article>
  )
}

const ArticleCard = styled(UnstyledArticleCard)`
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`

export default ArticleCard