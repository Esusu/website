import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const StyledLink = styled.a`
color: #60C091;
text-decoration: none;
cursor: pointer;
transition: 0.1s ease-in-out all;
&:hover, &:focus {
  font-weight: bold;
}
&::after {
  display:block;
  content:attr(title);
  font-weight:bold;
  height:1px;
  color:transparent;
  overflow:hidden;
  visibility:hidden;
  margin-bottom:-1px;
}
`

export {
  StyledLink 
}
