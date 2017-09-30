import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  marginProps,
  paddingProps,
  boxShadowProps,
  borderRadiusProps } from '../../lib/helpers/prop-helpers'

import { 
  space, 
  width, 
  fontSize, 
  color } from 'styled-system'

const Section = styled.section`
  width: 100%;
  ${props => props.bgColor && `
    background-color: ${props.bgColor}; 
  `}
  ${props => props.bgImage &&`
    background: ${ props.bgImage };
  `}
  ${paddingProps}
  ${marginProps}
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string
}


const Block = styled.div`
margin: 0 auto;
/* max-width: 75vw; */
${props => props.center && `
  text-align: center;;
`}
${props => props.hideOverflow && `
  overflow: hidden;
`}
${props => props.fluid && `
  max-width: 100%;
  margin: 0;
`}
${props => props.media &&`
  min-height: 25.000em;
`}
${props => props.large && `
  max-width: 75vw;
`}
${borderRadiusProps}
${boxShadowProps}
${space}
${width}
${fontSize}
${color}
`

Block.propTypes = {
  backgroundColor: PropTypes.string,
  boxRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  media: PropTypes.string
}

const Card = styled.div`
// display: flex;
// align-items: center;
// justify-content: flex-start;
`

const Spacer = styled.div`
 margin-top: 5em;
 margin-bottom: 5em;
`

export {
  Section,
  Block,
  Card,
  Spacer
}
