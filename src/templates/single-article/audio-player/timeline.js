import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import {secondsToTime} from './functions'
import {PlayerContext} from './index'

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

const PlaybackHandle = styled.div`
  width: 2px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-50%);
  z-index: 100;
  cursor: pointer;

  &:hover {
    &:after {
      width: 3px;
    }
  }

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

const handleDragStart = ({e,playerContext}) => {
  e.stopPropagation() 

  playerContext.pause()
}

const handleDragStop = ({e,playerContext}) => {
    e.stopPropagation() 

    const bar = document.getElementById('audio-progress-bar').getBoundingClientRect()
    const handle = document.getElementById('playback-handle').getBoundingClientRect()
    const distance = handle.left - bar.left
    const percent = distance / bar.width
    const timeElapsed = playerContext.duration * percent

    playerContext.audio.currentTime = timeElapsed
    playerContext.setTimeElapsed(timeElapsed)
    playerContext.play()
  }

const UnstyledTimeline = ({
  className
}) => {
  const playerContext = React.useContext(PlayerContext)
  const timeElapsed = secondsToTime(playerContext.timeElapsed)
  const timeRemaining = secondsToTime(playerContext.timeRemaining)

  const draggableArgs = {
    axis: 'x',
    handle: '.handle',
    bounds: 'parent',
    onStart: e => handleDragStart({e,playerContext}),
    onStop: e => handleDragStop({e,playerContext})
  }

  return (
    <div className={className}>
      <TimeElapsed>{timeElapsed}</TimeElapsed>
      <ProgressBar id='audio-progress-bar'>
        <ProgressMeter/>
        <Draggable {...draggableArgs}>
          <PlaybackHandle className='handle' id='playback-handle'/>
        </Draggable>
      </ProgressBar>
      <TimeRemaining>{timeRemaining}</TimeRemaining>
    </div>
  )
}

const Timeline = styled(UnstyledTimeline)`
  width: 100%;
  display: flex;
  align-items: center;
`

export default Timeline