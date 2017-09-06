import { css } from 'styled-components'
import {
  animation,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  em,
  lighten,
  darken,
  opacify,
  shade,
  tint,
  transparentize,
  margin,
  padding,
  position,
  size,
  background,
  backgroundImages,
  wordWrap,
  ellipsis,
  radialGradient,
} from 'polished'

// borderProps,
// marginProps,
// backgroundColorProps,
// paddingProps,
// alignmentProps,
// positioningProps,
// sizeProps,
// spacingProps

// Source: https://m.alphasights.com/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b
const borderProps = props => css`
  ${props.borderBottom && `border-bottom: ${props.borderWidth || "1px"} solid ${color.border}`};
  ${props.borderTop && `border-top: ${props.borderWidth || "1px"} solid ${color.border}`};
  ${props.borderLeft && `border-left: ${props.borderWidth || "1px"} solid ${color.border}`};
  ${props.borderRight && `border-right: ${props.borderWidth || "1px"} solid ${color.border}`};
`;

const marginProps = props => css`
  ${props.marginBottom && `margin-bottom: ${typeof (props.marginBottom) === "string" ? props.marginBottom : "1em"}`};
  ${props.marginTop && `margin-top: ${typeof (props.marginTop) === "string" ? props.marginTop : "1em"}`};
  ${props.marginLeft && `margin-left: ${typeof (props.marginLeft) === "string" ? props.marginLeft : "1em"}`};
  ${props.marginRight && `margin-right: ${typeof (props.marginRight) === "string" ? props.marginRight : "1em"}`};
  ${props.margin && `margin: ${typeof (props.margin) === "string" ? props.margin : "1em"}`};
  ${props.marginVertical && `
    margin-top: ${typeof (props.marginVertical) === "string" ? props.marginVertical : "1em"}
    margin-bottom: ${typeof (props.marginVertical) === "string" ? props.marginVertical : "1em"}
  `};
  ${props.marginHorizontal && `
    margin-left: ${typeof (props.marginHorizontal) === "string" ? props.marginHorizontal : "1em"}
    margin-right: ${typeof (props.marginHorizontal) === "string" ? props.marginHorizontal : "1em"}
  `};
`;

const borderRadiusProps = props => css`
  ${props.borderRadius && `border-radius: ${typeof (props.borderRadius) === "string" ? props.borderRadius : "4px"}` };
  ${props.borderRadiusTopLeft && `border-top-left-radius: ${typeof (props.borderRadiusTopLeft) === "string" ? props.borderRadiusTopLeft : "4px"}`};
  ${props.borderRadiusTopRight && `border-top-right-radius: ${typeof (props.borderRadiusTopRight) === "string" ? props.borderRadiusTopRight : "4px"}`};
  ${props.borderRadiusBottomLeft && `border-bottom-left-radius: ${typeof (props.borderRadiusBottomLeft) === "string" ? props.borderRadiusBottomLeft : "4px"}`};
  ${props.borderRadiusBottomRight && `border-bottom-right-radius: ${typeof (props.borderRadiusBottomRight) === "string" ? props.borderRadiusBottomRight : "4px"}`};
`

const boxShadowProps = props => css`
  ${props.boxShadow && `box-shadow: ${typeof (props.boxShadow) === "string" ? props.boxShadow : "0 0 10px 0 rgba(74,74,74,0.30)"}` };
`

const paddingProps = props => css`
  ${props.paddingBottom && `padding-bottom: ${typeof (props.paddingBottom) === "string" ? props.paddingBottom : "1em"}`};
  ${props.paddingTop && `padding-top: ${typeof (props.paddingTop) === "string" ? props.paddingTop : "1em"}`};
  ${props.paddingLeft && `padding-left: ${typeof (props.paddingLeft) === "string" ? props.paddingLeft : "1em"}`};
  ${props.paddingRight && `padding-right: ${typeof (props.paddingRight) === "string" ? props.paddingRight : "1em"}`};
  ${props.padding && `padding: ${typeof (props.padding) === "string" ? props.padding : "1em"}`};
  ${props.paddingVertical && `
    padding-top: ${typeof (props.marginVertical) === "string" ? props.marginVertical : "1em"}
    padding-bottom: ${typeof (props.marginVertical) === "string" ? props.marginVertical : "1em"}
  `};
  ${props.paddingHorizontal && `
    padding-left: ${typeof (props.marginHorizontal) === "string" ? props.marginHorizontal : "1em"}
    padding-right: ${typeof (props.marginHorizontal) === "string" ? props.marginHorizontal : "1em"}
  `};
`;

/**
 * Device sizes
 * source: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
 */
const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export {
  media,
  marginProps,
  paddingProps,
  borderProps,
  boxShadowProps,
  borderRadiusProps
}
