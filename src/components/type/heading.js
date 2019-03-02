import styled from 'styled-components'
import theme from 'components/theme'

function getColor(props) {
  const {
    reverse,
    palette
  } = props.theme

  const shadeKey = reverse ? props.light : props.dark
  
  return props.theme.color[palette][shadeKey]
}

export const Heading = styled.h2`
  font-size: ${props => Heading.styles.fontSize[props.level]};
  font-family: nitti,monospace;
  font-weight: ${props => Heading.styles.fontWeight[props.level]};
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => Heading.styles.margin.bottom[props.level]};
  color: ${props => getColor(props)};
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