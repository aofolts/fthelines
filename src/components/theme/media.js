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

const media = {
  phone: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 481px) and (max-width: 767px) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (min-width:768px) and (max-width: 1280px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1281px) {
      ${css(...args)}
    }
  `,
  aboveTablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  belowLaptop: (...args) => css`
    @media (max-width: 769px) {
      ${css(...args)}
    }
  `,
  belowDesktop: (...args) => css`
    @media (max-width: 1280px) {
      ${css(...args)}
    }
  `,
  maxTablet: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
}

export default media