import React,{useState} from 'react'
import styled from 'styled-components'
import Header from './header'
import Nav from './nav-main'
import Brand from './nav-main-brand'
import {withAppContext} from 'components/layout';
import data from './data'
import DesktopMenuItem from './menu-item-desktop'
import DesktopMenu from './menu-desktop'
import {MobileMenuContainer} from './menu-mobile'
import Toggle from './toggle'

const leftMenuItems = data.menuItems.left.map(entry => {
  return (
    <DesktopMenuItem key={entry.title} entry={entry}/>
  )
})

const rightMenuItems = data.menuItems.right.map(entry => (
  <DesktopMenuItem key={entry.title} entry={entry}/>
))

export const HeaderContext = React.createContext({})

const UnstyledMasthead = ({
  className
}) => {
  const [isOpen,setIsOpen] = useState(false)

  const headerContext = {
    mobileMenu: {
      isOpen,
      setIsOpen
    }
  }

  return (
    <HeaderContext.Provider value={headerContext}>
      <div id='masthead' className={className}>
        <Header>
          <Nav>
            <DesktopMenu>
              {leftMenuItems}
            </DesktopMenu>
            <Brand/>
            <DesktopMenu>
              {rightMenuItems}
            </DesktopMenu>
            <MobileMenuContainer context={headerContext}/>
            <Toggle context={headerContext}/>
          </Nav>
        </Header>
      </div>
    </HeaderContext.Provider>
  )
}

const Masthead = styled(UnstyledMasthead)`
  display: block;
  transition: all .2s linear;
  height: ${props => props.context.header.isDocked
    ? props.theme.padding.large
    : props.theme.padding.mediumLarge
  };
  background: ${props => props.theme.color.primary.lightest};
`

export default withAppContext(Masthead)