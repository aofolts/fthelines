import styled from 'styled-components'
import theme from 'components/theme'
import BodyText from 'components/text/body-text'

function getBorderColor({type}) {
  const color = theme.color

  if (type === 'primary')   return color.primary.medium
  if (type === 'secondary') return color.primary.medium
}

function getBackgroundColor({type}) {
  const color = theme.color

  if (type === 'primary')   return color.primary.medium
  if (type === 'secondary') return 'none'
}

const Button = styled.a`
  padding: 1em 1.5em;
  background: ${props => getBackgroundColor(props)};
  border: 2px solid ${props => getBorderColor(props)};
  color: ${props => props.theme.color.grey.medium};
  display: inline-block;
  font-size: ${BodyText.font.size[2]};
  font-weight: ${props => props.theme.paragraph.bold.weight};
  font-family: nitti;
  letter-spacing: .02em;
  cursor: pointer;
  margin-top: ${props => props.theme.padding.small};
`

Button.defaultProps = {
  type: 'primary'
}

export default Button