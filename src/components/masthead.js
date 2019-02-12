import React,{Component} from 'react'
import styled from 'styled-components'
import Header from 'components/header'
import Nav from 'components/nav-main'
import Brand from 'components/nav-main-brand'
import {withAppContext} from 'components/layout';

const data = {
  menuItems: {
    left: [
      {
        title: 'Stories'
      },
      {
        title: 'Manifesto'
      }
    ],
    right: [
      {
        title: 'About'
      },
      {
        title: 'Contact'
      }
    ]
  }
}

const MenuItem = styled.li`
  display: inline-block;
`

const leftMenuItems = data.menuItems.left.map(entry => (
  <MenuItem entry={entry} key={entry.title}/>
))

const rightMenuItems = data.menuItems.right.map(entry => (
  <MenuItem entry={entry} key={entry.title}/>
))

const DesktopMenu = styled.ul`
  display: block;
`

class UnstyledMasthead extends Component {
  render() {
    const {
      className
    } = this.props

    return (
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
          </Nav>
        </Header>
      </div>
    )
  }
}

const Masthead = styled(UnstyledMasthead)`
  display: block;
  height: ${props => props.theme.padding.large};
  background: ${props => props.theme.color.red.lightest};
`

export default withAppContext(Masthead)