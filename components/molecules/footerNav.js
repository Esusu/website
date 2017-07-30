import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { 
  Navigation,
  Menu,
  MenuItem } from '../atoms/navigation'
import { StyledLink } from '../atoms/link'

export default () => (
  <Navigation>
    <Menu column>
      <MenuItem><Link prefetch href="/about"><StyledLink title="About">About</StyledLink></Link></MenuItem>
      {/* <MenuItem><Link prefetch href="/stories"><StyledLink title="Stories">Stories</StyledLink></Link></MenuItem> */}
      <MenuItem><Link prefetch href="/team"><StyledLink title="Team">Team</StyledLink></Link></MenuItem>
      <MenuItem><Link prefetch href="/faq"><StyledLink title="FAQs">FAQs</StyledLink></Link></MenuItem>
    </Menu>
  </Navigation>
)
