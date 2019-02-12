import styled from 'styled-components'
import React from 'react'
import Icon from 'components/icon'

const ArrowContainer = styled.div`
  display: inline-block;
  width: 2em;
  height: .66em;
`

const UnstyledArrowIcon = ({
  className
}) => {
  return (
    <Icon name='arrow' className={className}/>
  )
}

const Arrow = styled(UnstyledArrowIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%; 

  line, polyline {
    stroke: red;
    stroke-width: 3px;
    fill: none;
  }
`

const UnstyledActionLink = ({
  className,
  children
}) => {
  return (
    <a className={className} href='todo'> 
      <div style={{display: 'inline-block'}}>{children}</div>
      <ArrowContainer>
        <Arrow/>
      </ArrowContainer>
    </a>
  )
}

export const ActionLink = styled(UnstyledActionLink)`
  color: ${props => props.theme.color.primary.medium};
  font-size: 2rem;
  font-weight: 500;
  display: inline-block;
  stroke: red;
`

export default ActionLink