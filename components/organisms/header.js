import React from 'react'
import styled from 'styled-components'

import {
  Section,
  Block } from '../atoms/layout'

import MainNav from '../molecules/mainNav'

function Header() {
  return (
    <Wrapper>
      <Section>
        <Block>
          <MainNav />
        </Block>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 1em;
  border: 1px solid #E0E0E0;
`

export default Header
