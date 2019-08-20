import React from 'react'
import styled from 'styled-components'

function getYouTubeVideoKey(url){
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)

  return (match&&match[7].length===11)? match[7] : false
}

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const UnstyledVideo = ({
  className,
  entry
}) => {
  let src = ''
  const url = entry.url ? entry.url : entry.fields.url['en-US']
  const title = entry.title ? entry.title : entry.fields.title['en-US']

  if (url.indexOf('youtube')) {
    src = `https://www.youtube.com/embed/${getYouTubeVideoKey(url)}?controls=0`
  }

  return (
    <div className={className}>
      <VideoIframe src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </div>
  )
}

const Video = styled(UnstyledVideo)`
  width: 100%;
  max-width: 100%;
  padding-bottom: 56.25%;
`

export default Video