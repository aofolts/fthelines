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
        <Heading level='3' as='h3'>Hang Tight, More Stories Coming Soon. Like Real Fucking Soon.</Heading>
        <BodyText level='3'>Fuck the Lines is a no-holds-barred exploration of the invisible lines that define our throughts and actions. It's a growing collection of insights and strategies.</BodyText>
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