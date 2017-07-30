import React from 'react'
import styled from 'styled-components'

const Form = styled.form`

`

const FormTitle = styled.h3`
font-family: Avenir;
font-weight: bold;
font-size: 1em;
color: #888989;
letter-spacing: 0;
margin: 0px;
`

const FormSubheading = styled.p`
font-family: Avenir;
font-weight: book;
font-size: 14px;
color: #ABABAB;
line-height: 36px;
margin: 0px;
`

const FormField = styled.div`
padding-bottom: 0.75em;
`
const Input = styled.input`
background: #E0E1E1;
font-family: Avenir;
font-weight: book;
font-size: 14px;
color: #ABABAB;
letter-spacing: 0;
width: 100%;
min-width: 10em;
height: 2em;
border: none;
`

export { 
  Form,
  FormTitle,
  FormSubheading,
  FormField,
  Input
}
