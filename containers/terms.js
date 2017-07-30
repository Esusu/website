import React from 'react'
import styled from 'styled-components'

import { Section, Block } from '../components/atoms/layout'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {}
  }

  render() {
    return (
      <Wrapper>
        <Section>
          <Block>
            This is the terms page
          </Block>
        </Section>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`
