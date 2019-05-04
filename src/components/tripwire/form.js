import styled from 'styled-components'

const Form = styled.form`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${props => props.theme.padding.smallest};
  max-width: 100%;
  width: ${props => props.theme.columns(4)};
`

export default Form