import styled,{css} from 'styled-components'
import { withAppContext } from './layout'
import Button from 'components/button'

const navButtonUndockedStyle = css`
  padding: .5em 1em;
`

const NavButton = styled(Button)`
  background: transparent;
  margin-left: ${props => props.theme.padding.small};
  transition: all .2s linear;
  ${props => props.context.header.isDocked ? null : navButtonUndockedStyle}
`

export default withAppContext(NavButton)