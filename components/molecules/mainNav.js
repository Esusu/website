import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import {
  Navigation,
  Menu,
  MenuItem,
  NavImage } from '../atoms/navigation'
import { StyledLink } from '../atoms/link'

export default (props) => (
  <Navigation> 
    <Menu>
      <MenuItem><Link prefetch href="/"><StyledLink><NavImage src="/static/esusu.png" /></StyledLink></Link></MenuItem>
        <MenuItem><Link prefetch href="/stories"><StyledLink title="Stories">Stories</StyledLink></Link></MenuItem>
        <MenuItem><Link prefetch href="/team"><StyledLink title="Team">Team</StyledLink></Link></MenuItem>
          <MenuItem><Link prefetch href="/faq"><StyledLink title="FAQ">FAQs</StyledLink></Link></MenuItem>
    </Menu>
    <Menu>
      <MenuItem>
        {/* <NavImage src="/static/apple-app-store-badge.svg" /> */}
      </MenuItem>
    </Menu>
  </Navigation>
)



