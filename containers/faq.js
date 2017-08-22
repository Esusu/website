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
            <Title color="#000" fontSize="3em" light>FAQs</Title>
          </Block>
        </Section>
        <Section >
          <Block>
            <Flex column>
              <Box width={1} p={[1, 2, 3, 4]}>
                <Subheading color="#4a4a4a" fontSize="1.25em" >1. What is Esusu?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >2. How do I create a group?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >3. What are my obligations as a group leader?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >4. How do I join a group?</Subheading>
                <ol type="a">
                  <li><b>Can I join a group if I am not invited?</b></li>
                </ol>
                <Subheading color="#4a4a4a" fontSize="1.25em" >5. What if someone abandons the group and stops making payments?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >6. How do I make payments?</Subheading>
                <ol type="a">
                  <li><b>How are payments processed?</b></li>
                  <li><b>Can I use Credit Card or Bank Account?</b></li>
                  <li><b>Are there transaction fees?</b></li>
                </ol>
                <Subheading color="#4a4a4a" fontSize="1.25em" >7. How do I receive payouts?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >8. How is the order of payouts chosen?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >9. Can we change the order after the cycle has already started?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >10. Is this legal?</Subheading>
                <ol type="a">
                  <li><b>When should I report behavior to Esusu?</b></li>
                </ol>
                <Subheading color="#4a4a4a" fontSize="1.25em" >11. Can I be removed from the group before our cycle is complete?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >12. Can the leader of a group be changed?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >13. What if I cannot make payments anymore towards the group?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >14. Can I change my payment method after the cycle started?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >15. What if someone in the group is late with their payment?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >16. When will a desktop version of Esusu be available?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >17. Is there an Android version of Esusu?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >18. What are fees for using Esusu?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >19. How does Esusu make money?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >20. How does Esusu protect my financial information?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >21. Is Esusu FDIC insured?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >22. Who is Esusu’s banking partner?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >23. Who is <a href="https://synapsepay.com" target="blank">Synapse Pay</a>?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >24. Who is <a href="http://triumphbank.com" target="blank">Triumph Bank</a>?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >25. Where can I report a security vulnerability?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >26. Is Esusu PCI Compliant?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >27. Can I make payments on behalf of someone or can someone make payments for me?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >28. Can I share my account?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >29. What if my payment does not go through?</Subheading>
                <ol type="a">
                  <li>Will I be notified? How?</li>
                  <li>Is there a fee?</li>
                </ol>
                <Subheading color="#4a4a4a" fontSize="1.25em" >30. What if my account is hacked?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >31. What if I forget my password?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >32. What is the average group amount range, savings amount and time period?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >33. Why am I being asked for my personal financial information or documents?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >34. What is KYC?</Subheading>
                <Subheading color="#4a4a4a" fontSize="1.25em" >35. Where I can go if I have more questions?</Subheading>
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
