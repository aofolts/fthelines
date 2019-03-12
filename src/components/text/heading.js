import styled,{css} from 'styled-components'
import theme from 'components/theme'
import media from 'components/theme/media'

function getColor(props) {
  const {
    reverse,
    palette
  } = props.theme

  const shadeKey = reverse ? props.light : props.dark
  
  return props.theme.color[palette][shadeKey]
}

function getFontSize({kind}) { 
  switch (kind) {
    case 'jumbo': return '8.5rem'
    default: return '3.6rem'
  }
}

function getFontFamily({kind}) { 
  switch (kind) {
    case 'title': return 'highlighted'
    default: return 'nitti'
  }
}

export const styles = {}

styles.jumbo = css`
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

  ${media.phone`font-size: 4rem;`}
`

styles.title = css`
  font-family: highlighted;
  font-size: 6rem;
  letter-spacing: initial;
  word-spacing: initial;
`

export const Heading = styled.h2`
  font-size: ${props => getFontSize(props)};
  font-family: ${props => getFontFamily(props)};
  font-weight: ${props => Heading.styles.fontWeight[props.level]};
  line-height: ${props => props.theme.lineHeight.small};
  letter-spacing: -.05em;
  word-spacing: -.15em;
  margin-bottom: ${props => Heading.styles.margin.bottom[props.level]};
  color: ${props => getColor(props)};

  ${props => styles[props.kind]}
`

Heading.styles = {
  fontSize: {
    2: '3.6rem',
    3: '2.8rem'
  },
  fontWeight: {
    2: 600,
    3: 600
  },
  margin: {
    bottom: {
      2: theme.margin.bottom.small,
      3: theme.margin.bottom.small
    }
  }
}

Heading.defaultProps = {
  level: 2,
  light: 'lightest',
  dark: 'darkest'
}

export default Heading