import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import { Flex, Box } from 'grid-styled'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

import { 
  Section, 
  Block, 
  Spacer } from '../components/atoms/layout'
import {
  Title,
  Subtitle,
  Subheading,
  Paragraph,
  HR } from '../components/atoms/typography'


import initApi from '../data/initApi'

export default class extends React.Component {

  static async getInitialProps({req, query}) {
    return {
      req
    }
  }
  
  constructor(props) {
    super(props)
    this.state = {
      page: null,
    }
  }

  componentDidMount(){
    this.getPage('faq')
  }

  getPage(uid) {
    initApi(this.props.req).then((api) => {
      return api.getByUID('page', uid)
    }).then((response) => {
      this.setState({ 
        page: response
      })
    })
  }

  render() {
    const { page } = this.state

    return page && (
      <Wrapper>
        <Head>
          <title>{page.data.metatitle}</title>
        </Head>
        <Section>
          <Block center p={[4]}>
            <Title color="#000" fontSize="3em" light>{PrismicDOM.RichText.asText(page.data.title)}</Title>
          </Block>
        </Section>
        <Section >
          <Block>
            <Flex column>
             <Box width={1} p={[1, 2, 3, 4]}>
              <RichTextView 
                dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(page.data.content)}} />
              </Box>
            </Flex>
          </Block>
        </Section>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`

const RichTextView = styled.div`
  & > h3 {
    color: #4a4a4a;
    font-size: 1.25em;
  }
`
