import styled from 'styled-components'

const Title = styled.h1`
  color: white;
  font-size: 6.5rem;
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 600;
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => props.theme.padding.small};
  font-family: Tiempos Headline Test,sans-serif;
`

export default Title