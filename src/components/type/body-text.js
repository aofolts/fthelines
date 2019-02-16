import styled from 'styled-components'

export const paragraphStyles = {
  fontSize: {
    1: '2rem',
    2: '1.8rem',
    3: '1.6rem'
  }
}

const BodyText = styled.p`
  font-size: ${props => paragraphStyles.fontSize[props.level]};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 300;
  line-height: ${props => props.level === '3' ? '1.2em' : props.theme.lineHeight.normal};
  margin-bottom: 1em;
  color: ${props => props.theme.color.red.darker};
`

BodyText.defaultProps = {
  level: 1
}

export default BodyText