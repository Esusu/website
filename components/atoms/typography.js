import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-family: Avenir;
font-size: 56px;
font-weight: bold;
color: #ABABAB;
line-height: 59px;
margin: 0;
`
const Subtitle = styled.h2`
font-family: Avenir;
font-weight: medium;
font-size: 24px;
color: #ABABAB;
margin: 0;
`

const Subheading = styled.h3`

`

const Paragraph = styled.p`
font-family: Avenir;
font-weight: book;
font-size: 1em;
color: #6d6d6d;
line-height: 24px;
margin: 0;
`
const HR = styled.div`
  background: #9FDBB6;
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
