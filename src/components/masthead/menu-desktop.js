import React from 'react'
import styled from 'styled-components'
import media from 'components/theme/media'

const UnstyledDesktopMenu = ({
  className,
  children
}) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

const DesktopMenu = styled(UnstyledDesktopMenu)`
  display: flex;

  ${media.belowDesktop`
    display: none;
  `}
`

export default DesktopMenu