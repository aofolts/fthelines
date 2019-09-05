import React from 'react'
import styled, {keyframes,css} from 'styled-components'
import media from 'components/theme/media'
import data from './data'
import tvStatic from 'images/tv-static.gif'
import MenuItem from './menu-item-mobile'

const UnstyledMobileMenuContainer = ({
  className,
  context
}) => {
  return (
    <div className={className}>
      <TVStatic src={tvStatic} context={context}/>
      <MobileMenu/>
    </div>
  )
}

export const MobileMenuContainer = styled(UnstyledMobileMenuContainer)`
  display: none;

  ${media.belowDesktop`
    display: ${props => props.context.mobileMenu.isOpen ? 'flex' : 'none'};
    background: ${props => props.theme.color.primary.medium};
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0; 
    align-items: center;
    justify-content: center;
  `}
`

const UnstyledTVStatic = ({
  className
}) => {
  return (
    <img src={tvStatic} className={className} alt='tv static animation'/>
  )
}

const menuStatic = keyframes`
  0% {opacity: 1;}
  98% {opacity: 1;}
  99% {opacity: 0;}
`

const TVStatic = styled(UnstyledTVStatic)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  opacity: 0;
  ${props => {
    if (props.context.mobileMenu.isOpen) {
      return css`animation: ${menuStatic} .4s linear forwards`
    }
  }}
`



const UnstyledMobileMenu = ({
  className
}) => {
  return (
    <div className={className}>
      {data.menuItems.all.map(entry => {
        return <MenuItem key={entry.title} entry={entry}/>
      })}
    </div>
  )
}

const MobileMenu = styled(UnstyledMobileMenu)`
  
`

export default MobileMenu