import React,{createContext,Component} from 'react'
import styled,{ThemeProvider,createGlobalStyle} from 'styled-components'
import theme from './theme'
import Masthead from 'components/masthead'
import Helmet from 'react-helmet'
import Footer from 'components/footer'
import favicon from 'images/favicon.png'
import nittiMediumWoff from '../fonts/Nitti-Medium.woff'
import typewriterWoff from '../fonts/NittiTypewriter-Regular.woff'
import typewriterHighlightedWoff from '../fonts/NittiTypewriter-Cameo.woff'
import typewriterUnderlinedWoff from '../fonts/NittiTypewriter-Underlined.woff'
import typewriterCorrectedWoff from '../fonts/NittiTypewriter-Corrected.woff'

const GlobalStyle = createGlobalStyle`
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
      className
    } = this.props

    const context = {
      ...this.state,
    }

    return (
      <AppContext.Provider value={context}>
          <ThemeProvider theme={theme} className={className}>
            <div id='layout' className={className}>
              <Helmet>
                <link rel='shortcut icon' type='image/png' href={favicon}/>
              </Helmet>
              <GlobalStyle/>
              <Masthead/>
              {children}
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