import styled from 'styled-components'
import theme from 'components/theme'

const Input = styled.input`
  padding: 1em;
  font-size: ${theme.text.bodyText.fontSize[2]};
  border: 2px solid white;
  box-sizing: border-box;
  background: white;
  min-width: 2px;

  &:hover, &:focus {
    box-shadow: inset 0 0 0 2px ${props => props.theme.color.primary.medium};
    outline: none;
  }
`

export default Input