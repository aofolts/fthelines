import React from 'react'
import styled,{css} from 'styled-components'

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: ${props => props.theme.color.grey.darkest};
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%) rotate(0deg);
`

const TopLine = styled(Line)`
  top: 0;

  ${props => {
    if (props.isOpen) return css`transform: translate(-50%,-50%) rotate(45deg);`
  }}
`

const MiddleLine = styled(Line)`
  top: 50%;
  transition: height .2s ease-in-out;

  ${props => {
    if (props.isOpen) return css`height: 0;`
  }}
`

const BottomLine = styled(Line)`
  top: 100%;

  ${props => {
    if (props.isOpen) return css`transform: translate(-50%,-50%) rotate(-45deg);`
  }}
`

const UnstyledToggle = ({
  className,
  context
}) => {
  const handleClick = () => {
    context.mobileMenu.setIsOpen(!context.mobileMenu.isOpen)
  }

  return (
    <div className={className} onClick={handleClick}>
      <TopLine isOpen={context.mobileMenu.isOpen}/>
      <MiddleLine isOpen={context.mobileMenu.isOpen}/>
      <BottomLine isOpen={context.mobileMenu.isOpen}/>
    </div>
  )
}

const Toggle = styled(UnstyledToggle)`
  width: ${props => props.theme.padding.mediumSmall};
  height: 15px;
  transition: height .2s ease-in-out;
  overflow: visible;

  ${props => {
    if (props.context.mobileMenu.isOpen) return css`height: 0px;`
  }}

  ${props => props.theme.media.desktop`
    display: none;
  `}
`

export default Toggle