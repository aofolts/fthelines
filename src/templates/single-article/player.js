import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

// TODO: Add replay button and reset state

const UnstyledPlaySymbol = ({
  className
}) => {
  return (
    <svg className={className} viewBox="0 0 20 20">
      <polygon points="0 0,15 10,0 20" vectorEffect="non-scaling-stroke"/>
    </svg>
  )
}

const PlaySymbol = styled(UnstyledPlaySymbol)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-30%,-50%);
  width: 40%;
  height: 50%;
  display: ${props => props.isPlaying ? 'none' : 'block'};

  & polygon {
    fill: none;
    stroke: black;
    stroke-width: 2px;
  }
`

const PauseSymbol = styled.div`
  width: 9px;
  height: 40%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: ${props => props.isPlaying ? 'block' : 'none'};
  background: white;
  border-color: ${props => props.theme.color.grey.darkest};
  border-left: 2px solid ${props => props.theme.color.grey.darkest};
  border-right: 2px solid ${props => props.theme.color.grey.darkest};
`

const Audio = styled.audio`
  display: none;
`

const PlaybackTimeline = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const PlaybackHandle = styled.div`
  width: 2px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-50%);
  z-index: 100;
  cursor: pointer;

  &:after {
    content: '';
    width: 2px;
    height: 100%;
    background: ${props => props.theme.color.grey.darkest};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  &:before {
    content: '';
    width: 20px;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
`

const PlayControls = styled.div`
  
`

const ProgressBar = styled.div`
  width: 100%;
  height: ${props => props.theme.padding.extraSmall};
  margin: 0 ${props => props.theme.padding.extraSmall};
  cursor: pointer;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background: ${props => props.theme.color.grey.lighter};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
`

const PlayButton = styled.div`
  width: ${props => props.theme.padding.medium}; 
  height: ${props => props.theme.padding.medium};
  flex-shrink: 1;
  display: block;
  border: 2px solid ${props => props.theme.color.grey.medium};
  border-radius: 1000px; 
  margin-right: ${props => props.theme.padding.small};
  cursor: pointer;
`

const Time = styled.div`
  font-size: 1.4rem;
`

const TimeElapsed = styled(Time)`
  
`

const TimeRemaining = styled(Time)`
  
`

const ProgressMeter = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  width: ${props => (props.timeElapsed / props.audioDuration) * 100 + '%'};
  background: ${props => props.theme.color.primary.medium};
`

const secondsToTime = totalSeconds => {
  var  sec_num = parseInt(totalSeconds, 10)
  var  hours   = Math.floor(sec_num / 3600)
  var  minutes = Math.floor((sec_num - (hours * 3600)) / 60)
  var  seconds = sec_num - (hours * 3600) - (minutes * 60)

  hours = hours < 1 ? '' : hours + ':'
  if (minutes < 10) {minutes = "0"+minutes}
  if (seconds < 10) {seconds = "0"+seconds}
  return hours + '' + minutes + ':' + seconds
}

const UnstyledPlayer = ({
  className,
  episode
}) => {
  const [isPlaying,setIsPlaying] = useState(false)
  const [timeElapsed,setTimeElapsed] = useState(0)
  const [timeRemaining,setTimeRemaining] = useState(0)
  const [audioDuration,setAudioDuration] = useState(0)
  const [isDragging] = useState(false)
  var playheadInterval = null
  let audio = null

  const setPlayheadPositionByCurrentTime = () => {
    if (isPlaying && !isDragging) {
      const percent = audio.currentTime / audio.duration
      const handle = document.getElementById('playback-handle')
      const bar = document.getElementById('audio-progress-bar')
      const barWidth = bar.getBoundingClientRect().width
      const position = barWidth * percent

      setTimeElapsed(audio.currentTime)
      setTimeRemaining(audio.duration - audio.currentTime)

      handle.style.transform = `translate(${position}px,0)`
    }
  }

  useEffect(() => {
    audio = document.getElementById('audio-player')

    console.log(audio.duration)

    const setTime = e => {
      setTimeRemaining(audio.duration)
      setAudioDuration(audio.duration)
    }

    if (audio.readyState > 0) {
      audio.addEventListener('loadedmetadata',setTime)
    }

    playheadInterval = setInterval(setPlayheadPositionByCurrentTime,1000)

    return () => clearInterval(playheadInterval)
  })

  const handlePlayClick = () => {
    const audio = document.getElementById('audio-player')

    if (!isPlaying) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const handleDragStop = e => {
    e.stopPropagation() 

    const bar = document.getElementById('audio-progress-bar').getBoundingClientRect()
    const handle = document.getElementById('playback-handle').getBoundingClientRect()
    const distance = handle.left - bar.left
    const percent = distance / bar.width
    const timeElapsed = audioDuration * percent

    audio.currentTime = timeElapsed
    setTimeElapsed(timeElapsed)
  }

  const handleBarClick = e => {
    const bar = document.getElementById('audio-progress-bar').getBoundingClientRect()
    const handle = document.getElementById('playback-handle')
    const distance = e.pageX - bar.left
    const percent = distance / bar.width
    const timeElapsed = audioDuration * percent

    handle.style.transform = `translate(${distance}px,0)`
    audio.currentTime = timeElapsed
    setTimeElapsed(timeElapsed)
  }

  return (
    <div className={className}>
      <PlayControls>
        <PlayButton onClick={() => handlePlayClick()}>
          <PlaySymbol {...{isPlaying}}/>
          <PauseSymbol {...{isPlaying}}/>
        </PlayButton>
      </PlayControls>
      <PlaybackTimeline>
        <TimeElapsed>{secondsToTime(timeElapsed)}</TimeElapsed>
        <ProgressBar id='audio-progress-bar' onClick={handleBarClick}>
          <ProgressMeter {...{audioDuration,timeElapsed}}/>
          <Draggable axis='x' handle='.handle' bounds='parent' onStop={handleDragStop}>
            <PlaybackHandle className='handle' id='playback-handle'/>
          </Draggable>
        </ProgressBar>
        <TimeRemaining>{secondsToTime(timeRemaining)}</TimeRemaining>
      </PlaybackTimeline>
      <Audio id='audio-player'>
        <source src={episode.audio.file.url} type="audio/mpeg"/>
      </Audio>
    </div>
  )
}

const Player = styled(UnstyledPlayer)`
  margin-bottom: ${props => props.theme.padding.small};
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Player