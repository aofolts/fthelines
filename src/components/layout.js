import React,{createContext,Component} from 'react'
import styled,{ThemeProvider,createGlobalStyle} from 'styled-components'
import theme from './theme'
import Masthead from 'components/masthead'
import UnstyledFooter from 'components/footer'
import nittiMediumWoff from '../fonts/Nitti-Medium.woff'
import typewriterWoff from '../fonts/NittiTypewriter-Regular.woff'
import typewriterHighlightedWoff from '../fonts/NittiTypewriter-Cameo.woff'
import typewriterUnderlinedWoff from '../fonts/NittiTypewriter-Underlined.woff'
import typewriterCorrectedWoff from '../fonts/NittiTypewriter-Corrected.woff'
import media from 'components/theme/media'
import Meta from 'components/meta'

const GlobalStyle = createGlobalStyle`
  :root {
    --padding-large: 10rem;
  }

  @font-face {
    font-family: nitti;
    src: url(${nittiMediumWoff}) format('woff');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: typewriter;
    src: url(${typewriterWoff}) format('woff');
  }

  @font-face {
    font-family: highlighted;
    src: url(${typewriterHighlightedWoff}) format('woff');
  }

  @font-face {
    font-family: corrected;
    src: url(${typewriterCorrectedWoff}) format('woff');
  }

  @font-face {
    font-family: underlined;
    src: url(${typewriterUnderlinedWoff}) format('woff');
  }

  ${media.phone`
    :root {
      font-size: 8px;
      --padding-large: 6rem;
    }
  `}

  ${media.tablet`
    :root {
      font-size: 8px;
      --padding-large: 7.5rem;
    }
  `}

  ${media.laptop`
    :root {
      font-size: 9px;
      --padding-large: 8.5rem;
    }
  `}

  html {
    width: 100vw;
    overflow-x: hidden;
  }
`

const Footer = styled(UnstyledFooter)`
  align-self: flex-end;
`

const Main = styled.main`
  background: black;
`

const AppContext = createContext()

export function withAppContext(Component) {
  return props => (
    <AppContext.Consumer>
      {context => <Component {...props} context={context}/>}
    </AppContext.Consumer>
  )
}

class UnstyledLayout extends Component {
  state = {
    header: {
      isDocked: null,
      height: null
    },
    nav: {
      height: null 
    }
  }

  checkHeaderState = () => {
    const pageYOffset  = window.pageYOffset,
          header       = document.querySelector('#header'),
          headerHeight = header.offsetHeight

    let isDocked = this.state.header.isDocked

    if (pageYOffset === 0 && !isDocked) {
      this.setState({
        header: {
          isDocked: true,
          height: headerHeight
        },
        nav: {
          height: theme.padding.large
        }
      })
    } else if (pageYOffset > 0 && isDocked) {
      this.setState({
        header: {
          isDocked: false,
          height: headerHeight
        },
        nav: {
          height: theme.padding.medium
        }
      })
    }
  }

  componentDidMount() {
    this.checkHeaderState()

    window.addEventListener('scroll',this.checkHeaderState)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll',this.checkHeaderState)
  }

  render() {
    const {
      children,
      className,
      meta
    } = this.props

    const context = {
      ...this.state,
    }

    return (
      <AppContext.Provider value={context}>
        <GlobalStyle/>
        <ThemeProvider theme={theme} className={className}>
          <div id='layout' className={className}>
            <Meta {...meta}/>
            <Masthead/>
            <Main>
              {children}
            </Main>
            <Footer/>
          </div>
        </ThemeProvider>
      </AppContext.Provider>
    )
  }
}

const Layout = styled(UnstyledLayout)`
  font-family: ${theme.font.family.primary};
  min-height: 100vh;
`

export default Layout