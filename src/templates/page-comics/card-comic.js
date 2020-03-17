import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'components/image-background'

const UnstyledComicCard = ({
  className,
  entry
}) => {
  return (
    <div className={className}>
      <Media>
        <BackgroundImage data={entry.childImageSharp}/>
      </Media>
    </div>
  )
}

const Media = styled.div`
  background: white;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`

const ComicCard = styled(UnstyledComicCard)`
  
`

export default ComicCard