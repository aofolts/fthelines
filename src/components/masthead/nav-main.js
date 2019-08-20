import React from 'react'
import styled from 'styled-components'
import {withAppContext} from 'components/layout'
import media from 'components/theme/media'

const Wrap = styled.div`
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
  height: 100%;
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
  padding: 0 ${props => props.theme.padding.mediumSmall};
  height: ${props => props.context.header.isDocked
    ? props.theme.padding.large
    : props.theme.padding.mediumLarge
  };

  ${media.phone`
    padding: 0 ${props => props.theme.padding.small};
  `}
`

export default withAppContext(Nav)