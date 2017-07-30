import { css } from 'styled-components'
import { em } from 'polished'

const fontFamily = 'DINPro'

const fontSizes = [
  14,
  16,
  18,
  24,
  32,
  60,
]

const fontWeights = [
  100,
  200,
  400,
  600,
]

const baseColors = {
  black: '#000000',
  white: '#FFFFFF',
  salem: '#159146',
  silvertree: '#60C091',
  ghost: '#C3C4C6',
  blackRock: '#030A2F'
}

const scale = [
  0,
  8,
  16,
  32,
  64
]


const zIndex = [
  0,
  2,
  4,
  8,
  16
]


const size = [
  1,
  1.2,
  1.5,
  2
]

const screenSizes = {
  tv: em(1170),
  desktop: em(992),
  tablet: em(768),
  mobile: em(376)
}

const cardTheme = {
  gutter: 0,
  minHeight: '21.750em',
  maxWidth: '33.750em',
  teal: {
    bg: '#49AAAF',
    title: '#000000'
  },
  royal: {
    bg: '#3359DF',
    title: '#0A21A8',
  },
  grape: {
    bg: '#7C0AED',
    title: '#000000',
  },
  breakpoints: {
    small: screenSizes.mobile,
    medium: screenSizes.tablet,
    large: screenSizes.desktop
  },
}

const theme = {
  font: {
    family: fontFamily,
    xsmall: `${em(fontSizes[0])}`,
    small: `${em(fontSizes[1])}`,
    base: `${em(fontSizes[2])}`,
    medium: `${em(fontSizes[3])}`,
    large: `${em(fontSizes[4])}`,
    xlarge: `${em(fontSizes[5])}`,
    breakpoints: {
      small: screenSizes.mobile,
      medium: screenSizes.tablet,
      large: screenSizes.desktop
    },
    weight: {
      xlight: fontWeights[0],
      light: fontWeights[1],
      normal: fontWeights[2],
      bold: fontWeights[3],
    }
  },
  color: {
    ...baseColors,
    primary: baseColors.silvertree,
    secondary: baseColors.salem,
    default: baseColors.ghost,
    /* info: baseColors.gray, */
    /* success: baseColors.green, */
    /* warning: baseColors.yellow, */
    /* error: baseColors.red, */
    /* link: baseColors.blue */
  },
  borderRadius: '4px',
  boxShadow: '0 0 10px 0 rgba(74,74,74,0.30)',
}

export {
  theme,
  cardTheme
 }
