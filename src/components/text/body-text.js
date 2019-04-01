import styled from 'styled-components'
import DynamicComponent from 'components/dynamic-component'
import React from 'react'

export const paragraphStyles = {
  fontSize: {
    1: '2.2rem',
    2: '1.8rem',
    3: '1.6rem'
  }
}

export function getFontSize({level}) {
  return paragraphStyles.fontSize[level] || paragraphStyles.fontSize[1] 
}

export const UnstyledBodyText = props => (
  <DynamicComponent {...props}>
    {props.children}
  </DynamicComponent>
)

const BodyText = styled.p`
  font-size: ${props => getFontSize(props)};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 300;
  line-height: 1.4em};
  margin-bottom: 1em;
  color: ${props => props.theme.color.primary.darker};
  letter-spacing: -.025em;
  word-spacing: -.15em;

  b {
    font-family: nitti;
  }

  a {
    font-family: underlined;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.color.primary.medium};
    }
  }
`

BodyText.font = {
  size: paragraphStyles.fontSize
}

BodyText.defaultProps = {
  level: 1,
  tag: 'p'
}

export default BodyText