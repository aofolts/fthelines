import React from 'react'
import styled from 'styled-components'
import ComicCard from './card-comic'
import media from 'components/theme/media'
import Grid from './grid-comics'

const UnstyledComicsSection = ({
  className,
  comics
}) => {
  const comicCards = comics.map(entry => {
    return <ComicCard entry={entry} key={entry.id}/>
  })

  return (
    <section className={className}>
      <Grid>
        {comicCards}
      </Grid>
    </section>
  )
}



const ComicsSection = styled(UnstyledComicsSection)`
  padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.small};
  display: flex;
  justify-content: center;
`

export default ComicsSection