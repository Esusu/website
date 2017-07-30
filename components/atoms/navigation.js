import React from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
`

const NavImage = styled.img`
height: 2.125em;
width: auto;
`

const Menu = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style-type: none;
margin: 0px;
padding: 0px;
${ props => props.column &&`
flex-direction: column;
align-items: baseline;
text-align: left;
& > li {
padding-left: 0px;
padding-top: 0.5em;
padding-bottom: 0.5em;
}
`}

`

const MenuItem = styled.li`
padding-left: 0.8em;

`

export {
  Navigation,
  NavImage,
  Menu,
  MenuItem
}
