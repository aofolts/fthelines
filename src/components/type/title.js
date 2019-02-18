import styled from 'styled-components'
import {media} from 'components/theme/media'

const Title = styled.h1`
  color: ${props => {
    if (props.theme.colorMode === 'light') return props.theme.color.grey.darkest
    else return 'white'
  }};
  font-size: 6rem;
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 600;
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => props.theme.padding.small};
  font-family: Tiempos Headline Test,sans-serif;

  ${media.phone`font-size: 4rem;`}
`

export default Title