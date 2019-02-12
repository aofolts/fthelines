import React from 'react'
import styled from 'styled-components'
import MenuItem from 'components/menu-main-item'
import { withAppContext } from './layout'
import NavButton from 'components/nav-main-button'

const data = {
  menuItems: [
    {
      title: 'Products'
    },
    {
      title: 'Training'
    },
    {
      title: 'Events'
    },
    {
      title: 'About'
    },
    {
      title: 'Contact'
    }
  ]
}

const items = data.menuItems.map(entry => {
  return <MenuItem key={entry.title} entry={entry}/>
})

const UnstyledMainMenu = ({
  className
}) => {
  return (
    <ul id='menu-main' className={className}>
      {items}
      <NavButton type='secondary'>Get the right fit</NavButton>
    </ul>
  )
}

const MainMenu = styled(UnstyledMainMenu)`
  display: block;
`

export default withAppContext(MainMenu)