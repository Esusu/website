import React from 'react'
import styled from 'styled-components'

import { Section, 
  Block, 
  Spacer } from '../components/atoms/layout'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {}
  }

  render() {
    return (
      <Wrapper>
        <Section>
          <Block>
            This is the stories page
          </Block>
        </Section>
        <Spacer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`
