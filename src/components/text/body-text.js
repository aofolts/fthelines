import styled from 'styled-components'
import DynamicComponent from 'components/dynamic-component'
import React from 'react'

export const paragraphStyles = {
  fontSize: {
    primary: '2.2rem',
    secondary: '1.8rem',
    tertiary: '1.6rem'
  }
}

const {
  fontSize 
} = paragraphStyles

export function getBodyTextSize({level}) {
  const sizeKeys = Object.keys(paragraphStyles.fontSize)
  return fontSize[sizeKeys[level - 1]] || fontSize.primary
}

export const UnstyledBodyText = props => (
  <DynamicComponent {...props}>
    {props.children}
  </DynamicComponent>
)

const BodyText = styled.p`
  font-size: ${props => getBodyTextSize(props)};
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