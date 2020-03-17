import RichText from 'components/rich-text'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.medium};
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
`