import styled from 'styled-components'
import theme from 'components/theme'
import {getBodyTextSize} from 'components/text/body-text'
import Link from 'components/link'

function getBorderColor({type}) {
  // const color = theme.color

  // if (type === 'primary')   return color.primary.medium
  // if (type === 'secondary') return color.primary.medium

  return theme.color.primary.medium
}

function getBackgroundColor({type}) {
  // const color = theme.color

  // if (type === 'primary')   return color.primary.medium
  // if (type === 'secondary') return 'none'

  return theme.color.primary.medium
}

const Button = styled(Link)`
  padding: 1em 1.5em;
  background: ${props => getBackgroundColor(props)};
  border: 2px solid ${props => getBorderColor(props)};
  color: ${props => props.theme.color.grey.medium};
  display: inline-block;
  font-size: ${props => getBodyTextSize({level: props.level + 1 || 2})};
  font-weight: ${props => props.theme.paragraph.bold.weight};
  font-family: nitti;
  letter-spacing: .02em;
  cursor: pointer;
  margin-top: ${props => props.theme.padding.small};

  &:focus {
    outline: none;
  }
`

Button.defaultProps = {
  type: 'primary',
  tag: 'a'
}

export default Button