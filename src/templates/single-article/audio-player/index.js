import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Timeline from './timeline'
import Controls from './controls'
import {incrementTime} from './functions'

export const PlayerContext = React.createContext({})

const UnstyledAudioPlayer = ({
  className,
  episode
}) => {
  const [isPlaying,setIsPlaying] = useState(false)
  const [timeElapsed,setTimeElapsed] = useState(0)
  const [timeRemaining,setTimeRemaining] = useState(0)
  const [duration,setDuration] = useState(0)
  const [isInitialized,setIsInitialized] = useState(false)
  const [isScrubbing,setIsScrubbing] = useState(false)
  const [audio,setAudio] = useState(null)

  let playheadInterval = null

  const play = () => {
    setIsPlaying(true)
    audio.play()
  }

  const pause = () => {
    setIsPlaying(false)
    audio.pause()
  }

  const togglePlay = () => {
    isPlaying ? pause() : play()
  }

  const initializePlayer = () => {
    setDuration(audio.duration)
    setTimeElapsed(audio.currentTime)
    setTimeRemaining(audio.duration - audio.currentTime)
    setIsInitialized(true)
  }

  const playerContext = {
    audio,
    setAudio,
    isPlaying,
    setIsPlaying,
    timeElapsed,
    setTimeElapsed,
    timeRemaining,
    setTimeRemaining,
    duration,
    setDuration,
    play,
    pause,
    togglePlay
  }

  useEffect(() => {
    if (!audio) {
      setAudio(document.getElementById('audio-player'))
    }

    // Initialize time
    if (audio && !isInitialized) {
      audio.addEventListener('loadedmetadata',initializePlayer)

    }

    // Count seconds while playing
    if (isPlaying && !playheadInterval) {
      playheadInterval = setInterval(() => {
        const newTime = incrementTime({timeElapsed,duration})
    
        setTimeElapsed(newTime)
        setTimeRemaining(duration - newTime)
      },1000)
    } else {
      clearInterval(playheadInterval)
    }

    return () => clearInterval(playheadInterval)
  })

  return (
    <div className={className}>
      <PlayerContext.Provider value={playerContext}>
        <Controls/>
        <Timeline/>
        <Audio id='audio-player' controls>
          <source src={episode.audio.file.url} type="audio/mpeg"/>
        </Audio>
      </PlayerContext.Provider>
    </div>
  )
}

const Audio = styled.audio`
  display: none;
`

const AudioPlayer = styled(UnstyledAudioPlayer)`
  margin-bottom: ${props => props.theme.padding.small};
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default AudioPlayer