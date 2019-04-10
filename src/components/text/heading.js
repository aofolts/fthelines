import styled from 'styled-components'
import theme from 'components/theme'
import React from 'react'

function getFontSize({level}) { 
  switch (level) {
    case 3: return '2.8rem'
    default: return '3.8rem'
  }
}

// function getMargin({level}) { 
//   switch (level) {
//     case 3: return '2.8rem'
//     default: return '3.6rem'
//   }
// }

const UnstyledHeading = ({
  level,
  children,
  className
}) => {
  const Tag = level ? `h${level}` : 'h2'

  return <Tag className={className}>{children}</Tag>
}

export const Heading = styled(UnstyledHeading)`
  font-size: ${props => getFontSize(props)};
  font-family: nitti,monospace;
  font-weight: 600;
  line-height: ${props => props.theme.lineHeight.small};
  letter-spacing: -.05em;
  word-spacing: -.15em;
  color: ${theme.color.grey.darkest};
  margin-bottom: .5em;
`

export default Heading