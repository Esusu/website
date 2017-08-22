import React from 'react'
import styled from 'styled-components'

const Form = styled.form`

`

const FormTitle = styled.h3`
font-family: Avenir;
font-weight: 400;
font-size: 1em;
color: #fff;
letter-spacing: 0;
margin: 0px;
`

const FormSubheading = styled.p`
font-family: Avenir;
font-weight: book;
font-size: 0.85em;
color: #fff;
line-height: 2.25em;
margin: 0px;
`

const FormField = styled.div`
padding-bottom: 0.75em;
`
const Input = styled.input`
  background: #fff;
  font-family: Avenir;
  font-weight: 300;
  font-size: 0.85em;
  color: #ABABAB;
  letter-spacing: 0;
  padding: 5px;
  width: 100%;
  min-width: 10em;
  height: 2em;
  border: none;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
`

export { 
  Form,
  FormTitle,
  FormSubheading,
  FormField,
  Input
}
