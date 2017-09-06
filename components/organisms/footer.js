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
      <Section bgColor="#60C091" >
        <Block>
          <Flex wrap>
            <Box p={[1, 2, 3, 4]} >
              <FooterNav />
            </Box>
            <Box ml='auto' p={[1, 2, 3, 4]} >
              <InterestForm /> 
            </Box>
          </Flex>
          <Flex>
            <Box width={1} pb={[1, 2, 3, 4]}  pr={[1, 2, 3, 4]}  pl={[1, 2, 3, 4]}>
              <Errata>
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
  /* overflow: hidden; */
`
const Errata = styled.div`
  font-family: Avenir;
  font-size: 12px;
  & > p, & > a  {
    color: #fff;
    letter-spacing: 0;
  }
`

export default Footer
