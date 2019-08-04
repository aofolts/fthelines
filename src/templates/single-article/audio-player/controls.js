import React from 'react'
import styled from 'styled-components'
import {PlayerContext} from './index'

const UnstyledControls = ({
  className
}) => {
  const playerContext = React.useContext(PlayerContext)

  return (
    <div className={className}>
      <PlayButton onClick={() => playerContext.togglePlay()}>
        <PlaySymbol {...playerContext}/>
        <PauseSymbol {...playerContext}/>
      </PlayButton>
    </div>
  )
}

const Controls = styled(UnstyledControls)`
  
`

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

export default Controls