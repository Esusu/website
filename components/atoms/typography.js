import React from 'react'
import styled from 'styled-components'
import { fontSize, color } from 'styled-system'

import { media } from '../../lib/helpers/prop-helpers'

const Title = styled.h1`
  font-family: Avenir;
  font-size: 3em;
  font-weight: bold;
  color: #ABABAB;
  line-height: 46px;;
  margin: 0;
  ${props => props.left &&`
    text-align: left;
  `}
  ${props => props.center &&`
    text-align: center;
  `}
  ${props => props.right &&`
    text-align: right;
  `}
  ${props => props.italicize &&`
    font-style: italic;
  `}
  ${props => props.light &&`
    font-weight: 200;
  `}
  ${props => props.uppercase &&`
    text-transform: uppercase;
  `}
  ${fontSize} 
  ${color}
  ${ media.phone`
    font-size: 1.5em; 
  `}
`

const Subtitle = styled.h2`
  font-family: Avenir;
  font-weight: medium;
  font-size: 1.5em;
  color: #ABABAB;
  margin: 0;
  ${props => props.left &&`
    text-align: left;
  `}
  ${props => props.center &&`
    text-align: center;
  `}
  ${props => props.right &&`
    text-align: right;
  `}
  ${props => props.italicize &&`
    font-style: italic;
  `}
  ${props => props.light &&`
    font-weight: 200;
  `}
  ${props => props.uppercase &&`
    text-transform: uppercase;
  `}
  ${fontSize} 
  ${color}
  ${fontSize} 
`

const Subheading = styled.h3`
  font-family: Avenir;
  font-size: 1.625em;
  color: #FFFFFF;
  letter-spacing: 0.81px;
  ${props => props.left &&`
    text-align: left;
  `}
  ${props => props.center &&`
    text-align: center;
  `}
  ${props => props.right &&`
    text-align: right;
  `}
  ${props => props.italicize &&`
    font-style: italic;
  `}
  ${props => props.light &&`
    font-weight: 200;
  `}
  ${props => props.uppercase &&`
    text-transform: uppercase;
  `}
  ${fontSize} 
  ${color}
`

const Paragraph = styled.p`
  font-family: Avenir;
  font-weight: 400px;
  font-size: 1em;
  color: #6d6d6d;
  line-height: 24px;
  margin: 0;
  ${props => props.left &&`
    text-align: left;
  `}
  ${props => props.center &&`
    text-align: center;
  `}
  ${props => props.right &&`
    text-align: right;
  `}
  ${props => props.italicize &&`
    font-style: italic;
  `}
  ${props => props.light &&`
    font-weight: 200;
  `}
  ${props => props.uppercase &&`
    text-transform: uppercase;
  `}
  ${fontSize} 
  ${color}
`

const HR = styled.div`
  height: 2px;
  width: ${ props => props.width ? props.width : 100 }%;
  background: ${ props => props.bgColor ? props.bgColor : '#ABABAB'};

`

export {
  Title, 
  Subtitle,
  Subheading,
  Paragraph,
  HR,
}
