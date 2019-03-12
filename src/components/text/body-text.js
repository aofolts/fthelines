import styled from 'styled-components'

export const paragraphStyles = {
  fontSize: {
    1: '2.2rem',
    2: '1.8rem',
    3: '1.6rem'
  }
}

export function getFontSize({level}) {
  return paragraphStyles.fontSize[level]
}

const BodyText = styled.p`
  font-size: ${props => getFontSize(props)};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 300;
  line-height: ${props => props.level === '3' ? '1.2em' : props.theme.lineHeight.normal};
  margin-bottom: 1em;
  color: ${props => props.theme.color.primary.darker};
  letter-spacing: -.025em;
  word-spacing: -.15em;

  b {
    font-family: nitti;
  }

  a {
    font-family: underlined;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.color.primary.medium};
    }
  }
`

BodyText.font = {
  size: paragraphStyles.fontSize
}

BodyText.defaultProps = {
  level: 1
}

export default BodyText