import React from 'react'
import styled,{css} from 'styled-components'

const titleDesktopStyle = css`
  display: inline-block;
  font-size: ${props => props.theme.paragraph.fontSize[2]};
`

export const Title = styled.div`
  ${titleDesktopStyle}
`

const UnstyledMenuItem = ({
  className,
  entry
}) => {
  return (
    <li className={className}>
      <Title>{entry.title}</Title>
    </li>
  )
}

const desktopStyle = css`
  display: inline-block;
  font-size: ${props => props.theme.text.mediumSmall};
  color: ${props => props.theme.color.grey.darker};

  & + & {
    margin-left: ${props => props.theme.padding.small};
  }
`

const MenuItem = styled(UnstyledMenuItem)`
  ${desktopStyle}
`

export default MenuItem 