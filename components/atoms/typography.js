import React from 'react'
import styled from 'styled-components'
import { fontSize, color } from 'styled-system'

const Title = styled.h1`
  font-family: Avenir;
  font-size: 56px;
  font-weight: bold;
  color: #ABABAB;
  line-height: 59px;
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

const Subtitle = styled.h2`
  font-family: Avenir;
  font-weight: medium;
  font-size: 24px;
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
  ${color}
`

const Subheading = styled.h3`
  font-family: Avenir;
  font-size: 26px;
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
  font-weight: book;
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
  background: #ABABAB;
  height: 2px;
  width: ${ props => props.width ? props.width : 100 }%;
`

export {
  Title, 
  Subtitle,
  Subheading,
  Paragraph,
  HR,
}
