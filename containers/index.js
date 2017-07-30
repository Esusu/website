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

import InviteForm from '../components/organisms/inviteForm'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {}
  }

  render() {
    return (
      <Wrapper>
        <Section>
          <Block>
            <Flex align="center" justify="center" wrap>
              <Box width={[1, 1/2, 1/3]} p={[ 1, 2, 3, 4 ]}>
                <Title>Save your income collectively</Title>
              </Box>
              <Box width={[1, 1/2, 1/3]}>
                <DemoView>
                  <iframe width="438" height="930" src="//invis.io/MW9V2FLVZ" frameBorder="0" allowFullScreen></iframe>
                </DemoView>
              </Box>
              <Box width={[1, 1, 1/3]} p={[ 1, 2, 3, 4 ]}>
                <HR width="30" />
                <Subheading>Simple. <br />Secure. <br />Sustainable.</Subheading>
                <Paragraph>Collect and save money with your personal communities. Manage your collective sum and organize each pay period to a different person.</Paragraph>
                <Spacer /> 
                <Paragraph><PlayIcon src="/static/play-icon.png" />The Esusu Promise</Paragraph> 
              </Box> 
            </Flex> 
          </Block> 
        </Section> 
        <Section marginTop="10em" bgColor="#f7f7f7"> 
          <Block pt={[1, 2, 3, 4]} pb={[1, 2, 3, 4]}>
            <Flex justify="center" align="center" wrap column>
              <Box>
                <Subheading>How it works?</Subheading>
              </Box>
              <Box>
                <Flex justify="center" wrap>
                  <Box p={[1, 2]} w={[1, 1/4, 1/4]}>
                    <Card>
                      <Step>1</Step>
                      <Desc>Download App</Desc>
                    </Card>
                  </Box>
                  <Box p={[1, 2]} w={[1, 1/4, 1/4]}>
                    <Card>
                      <Step>2</Step>
                      <Desc>Create Account</Desc>
                    </Card>
                  </Box>
                  <Box p={[1, 2]} w={[1, 1/4, 1/4]}>
                    <Card>
                      <Step>3</Step>
                      <Desc>Create Group</Desc>
                    </Card>
                  </Box>
                  <Box p={[1, 2]} w={[1, 1/4, 1/4]}>
                    <Card>
                      <Step>4</Step>
                      <Desc>Invite Friends</Desc>
                    </Card>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Block>
        </Section>
        <Section marginTop="5em">
          <Block>
            <Flex justify="center" align="flex-end" wrap>
              <Box width={[1, 1/2]} p={[ 1, 2, 3, 4 ]}>
                <HR width="20" />
                <Subheading>Save Together. <br/>Build Community. <br/>Be Empowered.</Subheading>
                <Paragraph>Esusu could be best classified as purpose-first and we are entirely committed to our vision of generating equitable financial access. As such we reinvest the majority of our net margin toward furthering this vision.</Paragraph>
                <Spacer />
              </Box>
              <Box width={[1, 1/2]}>
                <DemoView>
                  <iframe width="438" height="930" src="//invis.io/MW9V2FLVZ" frameBorder="0" allowFullScreen></iframe>
                </DemoView>
              </Box>
            </Flex>
          </Block>
        </Section>
        {/* <Section bgColor="#f7f7f7" marginTop="10em"> */}
        {/*   <Block> */}
        {/*     <Flex align="center" column> */}
        {/*       <Box> */}
        {/*         <Subheading>IN THE NEWS</Subheading> */}
        {/*       </Box> */}
        {/*       <Box style={ {textAlign: 'center' }} p={[2]}> */}
        {/*         <Flex justify="center" align="center" wrap> */}
        {/*           <Box width={[1/2, 1/3, 1/6]} p={[1, 2, 3, 4]}> */}
        {/*             <Logo src="/static/placeholder.jpg" /> */}
        {/*           </Box> */}
        {/*           <Box width={[1/2, 1/3, 1/6]} p={[1, 2, 3, 4]}> */}
        {/*             <Logo src="/static/placeholder.jpg" /> */}
        {/*           </Box> */}
        {/*           <Box width={[1/2, 1/3, 1/6]} p={[1, 2, 3, 4]}> */}
        {/*             <Logo src="/static/placeholder.jpg" /> */}
        {/*           </Box> */}
        {/*           <Box width={[1/2, 1/3, 1/6]} p={[1, 2, 3, 4]}> */}
        {/*             <Logo src="/static/placeholder.jpg" /> */}
        {/*           </Box> */}
        {/*           <Box width={[1/2, 1/3, 1/6]} p={[1, 2, 3, 4]}> */}
        {/*             <Logo src="/static/placeholder.jpg" /> */}
        {/*           </Box> */}
        {/*           <Box width={[1/2, 1/3, 1/6]} p={[1, 2, 3, 4]}> */}
        {/*             <Logo src="/static/placeholder.jpg" /> */}
        {/*           </Box> */}
        {/*         </Flex> */}
        {/*       </Box> */}
        {/*     </Flex> */}
        {/*   </Block> */}
        {/* </Section> */}
        {/* <Spacer /> */}
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`

`

const DemoView = styled.div`
  height: 47em;
  text-align: center;
  & > iframe {
    border: 0;
    transform: scale(0.7);
  }
`
const PlayIcon = styled.img`
  vertical-align: middle;
  padding-right: 5px;
`

const Card = styled.div`
  background: #F7F7F7;
  box-shadow: -9px 12px 24px 0 rgba(0,0,0,0.10);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15em;
  height: 15em;
  position: relative;
  &:hover > div {
    height: 100%;
    width: 100%;
  }
`

const Image = styled.img`
display: block;  
width: 300px;
height: auto;
background: #F7F7F7;
box-shadow: -9px 12px 24px 0 rgba(0,0,0,0.10);
border-radius: 4px;

`
const Overlay = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
background-color: #60C091;
overflow: hidden;
width: 100%;
height: 0;
transition: .5s ease;
border-radius: 4px;
`

const Bio = styled.div`
/* white-space: nowrap;  */
color: white;
/* font-size: 20px; */
  /* position: absolute; */
position: relative;
overflow: hidden;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
`

const CardTitle = styled.h3`
  font-size: 20px;
  letter-spacing: 0;
  line-height: 0;
  color: #fff;
  font-weight: 200;
`
const CardSubtitle = styled.h5`
  font-size: 14px;
  line-height: 0;
  color: #fff; 
`

const Logo = styled.img`
  width: auto;
  height: 5em;
  max-height: 5em;
  background-size: cover;
`

const Step = styled.h3`
  color: #60C091;
  font-size: 3em;
  font-weight: 800;
  line-height: 0em;

`

const Desc = styled.p`
display: block;
`
