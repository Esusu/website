import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { Section, Block } from '../atoms/layout'
import {
  Form,
  FormTitle,
  FormSubheading,
  FormField,
  Input } from '../atoms/form'

import FooterNav from '../molecules/footerNav'
import InterestForm from '../organisms/interestForm'

function Footer() {
  return (
    <Wrapper>
      <Section>
        <Block>
        <Flex justify="center" wrap>
          <Box width={1, 1/2} p={[1, 2, 3, 4]} >
            <FooterNav />
          </Box>
          <Box width={1, 1/2} p={[1, 2, 3, 4]} >
            <Flex justify="center">
              <Box>
                {/* <InterestForm />  */}
              </Box>
            </Flex>
          </Box>
          <Box width={1} pb={[1, 2, 3, 4]}  pr={[1, 2, 3, 4]}  pl={[1, 2, 3, 4]}>
            <Errata>
              <p>
                <Link prefetch href="/terms"><a>Terms & Conditions</a></Link> <Link prefetch href="/privacy"><a>Privacy & Security</a></Link><br />
              </p>
              <p>
                Esusu Inc., {(new Date()).getFullYear()} &copy;. All rights reserved.
              </p>
            </Errata>
          </Box>
        </Flex>
      </Block>
    </Section>
  </Wrapper>
 )
}

const Wrapper = styled.footer`
`
const Errata = styled.div`
font-family: Avenir;
font-size: 12px;
color: #ABABAB;
letter-spacing: 0;
`

export default Footer
