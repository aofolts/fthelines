import styled from 'styled-components'
import DynamicComponent from 'components/dynamic-component'
import React from 'react'
import media from 'components/theme/media'

export const UnstyledBodyText = props => (
  <DynamicComponent {...props}>
    {props.children}
  </DynamicComponent>
)

const JumboHeading = styled.h1`
  color: ${props => {
    if (props.theme.colorMode === 'light') return props.theme.color.grey.darkest
    else return 'white'
  }};
  font-size: 8.5rem;
  font-family: nitti, monospace;
  font-weight: 600;
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => props.theme.padding.small};
  color: ${props => props.theme.color.grey.darkest};
  letter-spacing: -.05em;
  word-spacing: -.15em;

  ${media.phone`font-size: 4rem;`}
`

export default JumboHeading