import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { 
  Navigation,
  Menu,
  MenuItem } from '../atoms/navigation'
import  { Paragraph } from '../atoms/typography'
import { StyledLink } from '../atoms/link'

export default () => (
  <Navigation>
    <Menu column>
      <MenuItem><Link prefetch href="/about"><StyledLink title="About." color="#fff">About.</StyledLink></Link></MenuItem>
      <MenuItem><Link prefetch href="/stories"><StyledLink title="Stories." color="#fff">Stories.</StyledLink></Link></MenuItem>
      <MenuItem><Link prefetch href="/team"><StyledLink title="Team." color="#fff">Team.</StyledLink></Link></MenuItem>
      <MenuItem><Link prefetch href="/faq"><StyledLink title="FAQs." color="#fff">FAQs.</StyledLink></Link></MenuItem>
      <MenuItem><Link prefetch href="/legal"><StyledLink title="Legal." color="#fff">Legal.</StyledLink></Link></MenuItem>
    </Menu>
  </Navigation>
)
