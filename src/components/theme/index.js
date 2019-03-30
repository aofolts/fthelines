import color from './color'
import nittiTypewriterRegular from 'fonts/NittiTypewriter-Regular.woff'

const theme = {
  color,
  palette: 'default',
  path: {

  },
  reverse: false,
  container: {
    height: {
      tall: 650
    }, 
    width: {
      medium: 1000,
      main: 1400
    }
  },
  font: {
    family: {
      primary: "typewriter"
    },
    size: {
      base: '1.8rem'
    }
  },
  letterSpacing: {
    small: '-.025em'
  },
  lighting: 'light',
  lineHeight: {
    small: '1.2em',
    normal: '1.5em'
  },
  margin: {
    bottom: {
      small: '.5em',
      medium: '1em'
    }
  },
  mode: 'light',
  padding: {
    smallest: '1.5rem',
    extraSmall: '2rem',
    small: '2.5rem',
    mediumSmall: '3.75rem',
    medium: '5rem',
    mediumLarge: '7.5rem',
    large: '10rem'
  },
  paragraph: {
    weight: 300,
    fontSize: '2rem',
    margin: {
      bottom: '1em'
    },
    bold: {
      weight: 400
    },
    secondary: {
      fontSize: '1.6rem'
    }
  },
  space: {
    smallest: '1.5rem',
    extraSmall: '2rem',
    small: '2.5rem',
    mediumSmall: '3.75rem',
    medium: '5rem',
    mediumLarge: '7.5rem',
    large: '10rem'
  },
  wordSpacing: {
    small: '-.125em'
  }
}

theme.fonts = {
  nitti: {
    typewriter: {
      regular: nittiTypewriterRegular
    }
  }
}

// css`
//   color: ${props => {
//     if (props.theme.colorMode === 'light') return props.theme.color.grey.darkest
//     else return 'white'
//   }};
//   font-size: 8.5rem;
//   font-family: nitti, monospace;
//   font-weight: 600;
//   line-height: ${props => props.theme.lineHeight.small};
//   margin-bottom: ${props => props.theme.padding.small};
//   color: ${props => props.theme.color.grey.darkest};

//   ${media.phone`font-size: 4rem;`}
// `

// font-size: ${props => getFontSize(props)};
//   font-family: ${props => props.theme.font.family.primary};
//   font-weight: 300;
//   line-height: ${props => props.level === '3' ? '1.2em' : props.theme.lineHeight.normal};
//   margin-bottom: 1em;
//   color: ${props => props.theme.color.primary.darker};
//   letter-spacing: -.025em;
//   word-spacing: -.15em;

//   b {
//     font-family: nitti;
//   }

//   a {
//     font-family: underlined;
//     cursor: pointer;

//     &:hover {
//       color: ${props => props.theme.color.primary.medium};
//     }
//   }

theme.fontSizes = [1,2.2,1.8,1.6]

theme.bodyFontSizes = [2.2,1.8,1.6]

theme.text = {
  jumboHeading: {
    fontSize: '8.4rem',
    fontFamily: 'nitti,monospace',
    fontWeight: 600,
    lineHeight: theme.lineHeight.small,
    wordSpacing: theme.wordSpacing.small
  },
  headline: {

  },
  bodyText: {
    fontSize: {
      1: '2.2em',
      2: '1.8em',
      3: '1.6em'
    }
  },
  cardTitle: {

  },
  size: {
    small: '1.6rem',
    mediumSmall: '1.8rem',
    medium: '2rem',
    mediumLarge: '2.4rem',
    large: '3.6rem',
    extraLarge: '6.5rem'
  }
}

theme.columns = num => (theme.container.width.main / 120) * num + 'rem'

theme.heading = {
  tertiary: {
    size: '2.6rem',
    weight: 500
  }
}

theme.icon = {
  size: {
    large: '15rem'
  }
}

theme.padding.default = `
  ${theme.padding.large} ${theme.padding.small}
`

theme.zIndex = {
  navigation: 1000
}

export default theme