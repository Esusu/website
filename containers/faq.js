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
        <Section bgColor="#EDF0F5">
          <Block center p={[4]}>
            <Title>FAQs</Title>
          </Block>
        </Section>
        <Section >
          <Block>
            <Flex column>
              <Box width={1} p={[1, 2, 3, 4]}>
                <Subheading>1. What is Esusu?</Subheading>
                <Subheading>2. How do I create a group?</Subheading>
                <Subheading>3. What are my obligations as a group leader?</Subheading>
                <Subheading>4. How do I join a group?</Subheading>
                <ol type="a">
                  <li><b>Can I join a group if I am not invited?</b></li>
                </ol>
                <Subheading>5. What if someone abandons the group and stops making payments?</Subheading>
                <Subheading>6. How do I make payments?</Subheading>
                <ol type="a">
                  <li><b>How are payments processed?</b></li>
                  <li><b>Can I use Credit Card or Bank Account?</b></li>
                  <li><b>Are there transaction fees?</b></li>
                </ol>
                <Subheading>7. How do I receive payouts?</Subheading>
                <Subheading>8. How is the order of payouts chosen?</Subheading>
                <Subheading>9. Can we change the order after the cycle has already started?</Subheading>
                <Subheading>10. Is this legal?</Subheading>
                <ol type="a">
                  <li><b>When should I report behavior to Esusu?</b></li>
                </ol>
                <Subheading>11. Can I be removed from the group before our cycle is complete?</Subheading>
                <Subheading>12. Can the leader of a group be changed?</Subheading>
                <Subheading>13. What if I cannot make payments anymore towards the group?</Subheading>
                <Subheading>14. Can I change my payment method after the cycle started?</Subheading>
                <Subheading>15. What if someone in the group is late with their payment?</Subheading>
                <Subheading>16. When will a desktop version of Esusu be available?</Subheading>
                <Subheading>17. Is there an Android version of Esusu?</Subheading>
                <Subheading>18. What are fees for using Esusu?</Subheading>
                <Subheading>19. How does Esusu make money?</Subheading>
                <Subheading>20. How does Esusu protect my financial information?</Subheading>
                <Subheading>21. Is Esusu FDIC insured?</Subheading>
                <Subheading>22. Who is Esusu’s banking partner?</Subheading>
                <Subheading>23. Who is <a href="https://synapsepay.com" target="blank">Synapse Pay</a>?</Subheading>
                <Subheading>24. Who is <a href="http://triumphbank.com" target="blank">Triumph Bank</a>?</Subheading>
                <Subheading>25. Where can I report a security vulnerability?</Subheading>
                <Subheading>26. Is Esusu PCI Compliant?</Subheading>
                <Subheading>27. Can I make payments on behalf of someone or can someone make payments for me?</Subheading>
                <Subheading>28. Can I share my account?</Subheading>
                <Subheading>29. What if my payment does not go through?</Subheading>
                <ol type="a">
                  <li>Will I be notified? How?</li>
                  <li>Is there a fee?</li>
                </ol>
                <Subheading>30. What if my account is hacked?</Subheading>
                <Subheading>31. What if I forget my password?</Subheading>
                <Subheading>32. What is the average group amount range, savings amount and time period?</Subheading>
                <Subheading>33. Why am I being asked for my personal financial information or documents?</Subheading>
                <Subheading>34. What is KYC?</Subheading>
                <Subheading>35. Where I can go if I have more questions?</Subheading>
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
