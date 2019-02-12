import React from 'react'
import styled from 'styled-components'
import {withAppContext} from 'components/layout'

const Wrap = styled.div`
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const UnstyledNav = ({
  children,
  className
}) => {
  return (
    <nav id='nav' className={className}>
      <Wrap>
        {children}
      </Wrap>
    </nav>
  )
}

const Nav = styled(UnstyledNav)`
  background: white;
  transition: all .2s linear;
  height: ${props => props.context.header.isDocked
    ? props.theme.padding.large
    : props.theme.padding.mediumLarge
  };
`

export default withAppContext(Nav)