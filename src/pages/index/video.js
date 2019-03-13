import React from 'react'
import styled from 'styled-components'

const UnstyledVideo = ({
  className
}) => {
  return (
    <div className={className}>
      
    </div>
  )
}

const Video = styled(UnstyledVideo)`
  width: 100%;
  padding-bottom: 56.25%;
  background: grey;
`

export default Video