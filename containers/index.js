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
import { media } from '../lib/helpers/prop-helpers'
import { Button } from '../components/atoms/link'
import InviteForm from '../components/organisms/inviteForm'
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
    this.getPage('home')
  }

  getPage(uid) {
    initApi(this.props.req).then((api) => {
      return api.getSingle(uid)
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
          <title>{page.data.title}</title>
        </Head>
        <Section>
          <Block>
            <VideoView>
              <video 
                muted
                autoPlay
                loop
              >
                <source src="/static/esusu-highlight.webm" 
                  type="video/webm"
                />
                <source src="/static/esusu-highlight.mp4" 
                  type="video/mp4"
                />
              </video>
              <VideoOverlay>
                <Box width={[1]} p={[1, 2, 3, 4, 5, 6]}>
                  <Title color="#fff">Save income collectively</Title>
                  {/* <Subheading color="#fff">Simple. Secure. Sustainable.</Subheading> */}
                  <Paragraph color="#fff">Collect and save money with your personal communities.</Paragraph>
                  <Spacer />
                  <Button href="#mc-embedded-subscribe-form">Request Early Access</Button>
                  {/* <Spacer />  */}
                  {/* <Paragraph color="#fff"><PlayIcon src="/static/play-icon.png" />The Esusu Promise</Paragraph> */}
                </Box>
              </VideoOverlay>
            </VideoView>
          </Block> 
        </Section> 
        <Section>
          <Block>
            <Flex justify="center" align="center" wrap column>
              <Box width={1}>
                <PressCoverageBox  p={[1]}>
                  <Flex justify="center" align="center" wrap column>
                    <Box width={1}>
                      <Paragraph color="#000">Featured in ...</Paragraph>
                    </Box>
                    <Box width={1} pt={2}>
                      <Flex justify="center" align="center" wrap column>
                        <Box>
                          <CoverageImage src="/static/teenvogue.svg" alt="Esusu Inc Feature - TeenVogue" />
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </PressCoverageBox>
              </Box>
            </Flex>
          </Block>
        </Section>
        <Section marginTop="5em">
          <Block>
            <Flex justify="center" align="center" wrap column>
              <Box width={1}>
                <Subheading color="#60C091"center>Collective Savings 101</Subheading>
                <Paragraph color="#000" center>Manage your collective sum and organize each pay period to a different person.</Paragraph>
                  <Spacer />

              </Box>
              <Box>
                <RoscaVideoView>
                  <video
                    autoPlay
                    loop
                  >
                    <source src="/static/rosca.mp4" type="video/mp4" />
                    <img src="/static/rosca.gif" />
                    Your browser doesn't have support for video
                  </video>
                </RoscaVideoView>
              </Box>
            </Flex>
          </Block>
        </Section>
        <Section marginTop="5em" bgColor="#60C091"> 
          <Block p={[1, 2, 3, 4]}>
            <Flex column>
              <Box width={1}>
                <Subheading center>How it works?</Subheading>
              </Box>
              <Box width={1}>
                <Flex justify="center" wrap>
                  {/* <Box p={[1, 2]} w={[1, 1/4, 1/4]}> */}
                  {/*   <Card> */}
                  {/*     <Step>1</Step> */}
                  {/*     <Desc>Download App</Desc> */}
                  {/*     <Overlay> */}
                  {/*     </Overlay> */}
                  {/*   </Card> */}
                  {/* </Box> */}
                  <Box p={[1, 2]} w={[1, 1/4, 1/4]}>
                    <Card>
                      <Step>1</Step>
                      <Desc>Create a savings group of trusted family, friends, or co-workers.</Desc>
                      <Overlay>
                        <OverlayImage src="/static/creategroup.png" />
                      </Overlay>
                    </Card>
                  </Box>
                  <Box p={[1, 2]} w={[1, 1/4, 1/4]}>
                    <Card>
                      <Step>2</Step>
                      <Desc>Set monthly savings goals and make contributions to the pot.
                      </Desc>
                      <Overlay>
                        <OverlayImage src="/static/invitefriends.png" />
                      </Overlay>
                    </Card>
                  </Box>
                  <Box p={[1, 2]} w={[1, 1/4, 1/4]}>
                    <Card>
                      <Step>3</Step>
                      <Desc>Take turn receiving the full pot of money.</Desc>
                      <Overlay>
                        <OverlayImage src="/static/beempowered.png" />
                      </Overlay>
                    </Card>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Block>
        </Section>
        <Section>
          <Block>
            <Flex justify="center" align="flex-end" wrap>
              <Box width={[1, 1/2]} p={[ 1, 2, 3, 4 ]}>
                <HR width="20" />
                <Subheading color="#ABABAB">Save Together. <br/>Build Community. <br/>Be Empowered.</Subheading>
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
  background-color: #f7f7f7;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  border-radius: 4px;
  text-align: center;
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

const OverlayImage = styled.img`
  z-index: 6; 
  height: auto;
  width: 90%;
`

const Desc = styled.p`
  display: block;
  padding: 10px;
  text-align: center;
`

const PressCoverageBox = styled(Box)`
  background: #FFFFFF;
  border: 1px solid #F7F7F7;
  box-shadow: -1px 2px 2px 0 rgba(0,0,0,0.19);
  border-radius: 4px 4px 0 0;
  text-align: center;
`

const CoverageImage = styled.img`
  height: 1.6em;
  max-height: 1.6em;
  width: auto;
`

const VideoView = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 640px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 3;
    top: 0; 
    left: 0;
    background: rgba(25,29,34,0.75);
  }
  & > video {
    position: relative;
    vertical-align: middle;
    height: auto;
    top: 0;
    left: 0;
    z-index: -1;
  }
  ${media.tablet`
    height: 400px;
  `}
  ${media.phone`
    height: 270px;
  `}

`

const VideoOverlay = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`

const RoscaVideoView = styled.div`
  position: relative;

  & > video {
    width: 400px;
    height: auto;

    ${media.phone`
      width: 300px;
    `}
  }
`
