import React from 'react'
import styled from 'styled-components'
import ComicCard from './card-comic'
import media from 'components/theme/media'

const UnstyledComicsSection = ({
  className,
  comics
}) => {
  const comicCards = comics.map(entry => {
    return <ComicCard entry={entry} key={entry.id}/>
  })

  return (
    <section className={className}>
      <Wrap>
        {comicCards}
      </Wrap>
    </section>
  )
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.medium};
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
`

const ComicsSection = styled(UnstyledComicsSection)`
  padding: ${props => props.theme.padding.large} ${props => props.theme.padding.small};
  display: flex;
  justify-content: center;
`

export default ComicsSection