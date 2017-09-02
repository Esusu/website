import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Flex, Box } from 'grid-styled'

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


export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {}
  }

  render() {
    return (
      <Wrapper>
        <Section>
          <Block center p={[4]}>
            <Title color="#000" fontSize="3em" light>About Us</Title>
            <blockquote>
              <Paragraph>&quot;To Build Tools that Cultivate Financially Healthy Communities.&quot;</Paragraph>
              <cite><Paragraph color="#9B9B9B" font-size="1.5em">- Our Mission</Paragraph></cite>
            </blockquote>
          </Block>
        </Section>
        <Section>
          <Block>
            <Flex column>
              <Box width={1} p={[1, 2, 3, 4]}>
                <Subheading color="#4a4a4a" fontSize="1.25em">Our Vision</Subheading>
                <Paragraph>Generate equitable financial access for everyone.</Paragraph>
                <Subheading color="#4a4a4a" fontSize="1.25em">The Problem</Subheading>
                <Paragraph>
                  Around the world there are over 2 Billion unbanked and underbanked people. Even right here in our backyard, 57% percent of Americans would be considered financially unhealthy. This is not a problem that is going away. 
                </Paragraph><br/>
                <Subheading color="#4a4a4a" fontSize="1.25em">Why Esusu?</Subheading>
                <Paragraph>
                Over the course of history hundreds of financial and economic interventions have been tried and failed. All but one have failed to demonstrate the staying power and long term results that truly moves the needle. As such Rotational Savings, often referred to as ROSCA, has become the most common and impactful financial intervention in the world. It is an informal system in which groups of people come together, pool their income, and distribute it to different members of the trusted group based on their needs. It is this communal system upon which Esusu is built.
              </Paragraph><br />
              <Paragraph>
What we realized is that the historic paper-pencil intervention of rotational savings fails to solve the underlying problem: financial marginalization. Even with rotational savings most of these people will be in the same vulnerable financial position for the rest of their lives. That is what we aim to fix with Esusu. By transitioning this system into the digital, we are creating better long-term outcomes for communities around the world. This is because our system is
              </Paragraph>
              <Paragraph>
                <ol>
                  <li>Secure</li>
                  <li>Time Efficient</li>
                  <li>Accessible everywhere, at any time (In the US)</li>
                  <li>Simple</li>
                </ol>
              </Paragraph><br />
                <Paragraph>Today in the United States alone, approximately 106 million people are still 'unbanked'. Saving is hard for anyone, and even more so for those without access to financial institutions. Esusu allows users to form groups (of people they already know) in which they collectively save money and pay the collective sum to a different user each pay period.</Paragraph><br />
              <Paragraph>This means that when you need a little more... for your home down payment, student loans, new business, education, and more you can get it from your family and friends and pay it back immediately. Esusu meets individuals where they are and enables them to empower themselves.
              </Paragraph><br />
              <Paragraph>
              On top of this building a digital system allows us to measure, track, and report users contributions helping them build the credit and identity they need to access mainstream financial solutions in the future. 
            </Paragraph>
            <Subheading color="#4a4a4a" fontSize="1.25em">Our Impact & Measurement</Subheading>
            <Paragraph> 
              Our impact is both measurable and immeasurable. At the simplest level we help people save. We give them the accountability, purpose, and tools they need to obtain their dreams. We keep track of every dollar saved on our platform and always look to connect with our users to hear what they use their payout for. 
            </Paragraph><br />
            <Paragraph>
              This is where measurement gets trickier as we can’t track all the ripple effects of sending a kid to school, starting a local business, or sending money back to your family. As such we will look to collect accurate data on the buckets our users are spending on: business, community, education, luxury, shelter, travel, etc. and supplement this with anecdotes and stories from real people.
            </Paragraph><br />
            <Paragraph>
              In the longer term we want to measure economic empowerment in terms access to other financial tools, credit reporting, and overall social mobility. If Esusu is working properly it is not a pure individual solution but rather a community-driven solution that generates economic opportunity and mobility.
            </Paragraph>
            <Subheading color="#4a4a4a" fontSize="1.25em">Still don’t understand Esusu?</Subheading>
            <Paragraph>
              That’s totally understandable. Esusu is deeply rooted in cultures in Africa, Latin America, and South Asia. If you have not spent time in those regions of the world, this may feel a bit foreign, and that’s ok. An easy way to contextualize this is ‘pay-it-forward crowdfunding’. It’s coming together to as a community to crowdfund each other’s aspirations and goals. 
            </Paragraph><br />
            <Paragraph>
              Alternatively this about how difficult savings can be at times. Planning for a wedding? Buying a home? Paying back debt? This is a surefire way to hold yourself accountable and stay on top of what you need too.
            </Paragraph>
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
