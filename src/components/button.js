import styled from 'styled-components'
import theme from 'components/theme'

function getBorderColor({type}) {
  const color = theme.color

  if (type === 'primary')   return color.primary.medium
  if (type === 'secondary') return '#F5B3AB'
}

const Button = styled.a`
  padding: 1em 1.5em;
  background: ${props => props.theme.color.primary.medium};
  border: 2px solid ${props => getBorderColor(props)};
  color: ${props => props.type === 'primary' ? 'white' : props.theme.color.primary.medium};
  display: inline-block;
  border-radius: 3px;
  font-size: ${props => props.theme.paragraph.secondary.fontSize};
  font-weight: ${props => props.theme.paragraph.bold.weight};
  letter-spacing: .02em;
  cursor: pointer;
`

Button.defaultProps = {
  type: 'primary'
}

export default Button