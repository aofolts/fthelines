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
  }
}

theme.fonts = {
  nitti: {
    typewriter: {
      regular: nittiTypewriterRegular
    }
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

theme.text = {
  small: '1.6rem',
  mediumSmall: '1.8rem',
  medium: '2rem',
  mediumLarge: '2.4rem',
  large: '3.6rem',
  extraLarge: '6.5rem'
}

export default theme