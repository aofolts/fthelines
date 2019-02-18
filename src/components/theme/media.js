import {css} from 'styled-components'

export const devices = {
  phone: {
    minWidth: 0,
    maxWidth: 480
  },
  tablet: {
    minWidth: 481,
    maxWidth: 767
  },
  laptop: {
    minWidth: 768,
    maxWidth: 1280
  },
  desktop: {
    minWidth: 1281,
    maxWidth: 1920
  }
}

export const media = {
  phone: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)}
    }
  `
}