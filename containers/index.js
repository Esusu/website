import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { Flex, Box } from "grid-styled";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-dom";
import { Section, Block, Spacer } from "../components/atoms/layout";
import {
  Title,
  Subtitle,
  Subheading,
  Paragraph,
  HR
} from "../components/atoms/typography";
import { media } from "../lib/helpers/prop-helpers";
import { Button } from "../components/atoms/link";
import Icon from "../components/atoms/icon";
import InviteForm from "../components/organisms/inviteForm";
import initApi from "../data/initApi";

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {
      req
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }

  componentDidMount() {
    this.getPage("home");
  }

  getPage(uid) {
    initApi(this.props.req)
      .then(api => {
        return api.getSingle(uid);
      })
      .then(response => {
        this.setState({
          page: response
        });
      });
  }

  render() {
    const { page } = this.state;
    return (
      page && (
        <Wrapper>
          <Head>
            <title>{page.data.title}</title>
          </Head>
          <Section>
            <Block>
              <VideoView>
                <video muted autoPlay playsInline loop>
                  <source
                    src="/static/esusu-highlight.webm"
                    type="video/webm"
                  />
                  <source src="/static/esusu-highlight.mp4" type="video/mp4" />
                </video>
                <VideoOverlay>
                  <Box width={[1]} p={[1, 2, 3, 4, 5, 6]}>
                    <Title color="#fff">
                      {RichText.asText(page.data.hero[0].title)}
                    </Title>
                    <Paragraph color="#fff">
                      {RichText.asText(page.data.hero[0].subtitle)}
                    </Paragraph>
                    <Spacer />
                    <Button href="#mc-embedded-subscribe-form">
                      Request Early Access
                    </Button>
                  </Box>
                </VideoOverlay>
              </VideoView>
            </Block>
          </Section>
          <Section marginTop="5em">
            <Block>
              <Flex justify="center" align="center" wrap column>
                <Box w={[1]}>
                  <Subheading color="#60C091" center>
                    Collective Savings 101
                  </Subheading>
                </Box>
                <Box w={[1, 1 / 2]} p={[1, 2, 3, 4]}>
                  <RoscaVideoView>
                    <iframe
                      src="https://spark.adobe.com/video/5n0EP/embed"
                      width="960"
                      height="540"
                      frameBorder="0"
                      allowFullScreen
                    />
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
                    <Box p={[1, 2]} w={[1, 1 / 2, 1 / 2, 1 / 4]}>
                      <Card>
                        <Icon
                          name="mobile"
                          color="#60C091"
                          height="75px"
                          width="40px"
                        />
                        <Desc>
                          Users join the Esusu platform by downloading the Esusu
                          iPhone App
                        </Desc>
                      </Card>
                    </Box>
                    <Box p={[1, 2]} w={[1, 1 / 2, 1 / 2, 1 / 4]}>
                      <Card>
                        <Icon
                          name="group"
                          color="#60C091"
                          height="75px"
                          width="104px"
                        />
                        <Desc>
                          Users invite their friends and family members to join
                          their savings group
                        </Desc>
                      </Card>
                    </Box>
                    <Box p={[1, 2]} w={[1, 1 / 2, 1 / 2, 1 / 4]}>
                      <Card>
                        <Icon name="deposit" height="75px" width="70px" />
                        <Desc>
                          Groups set a monthly savings goal and members make
                          regular contributions
                        </Desc>
                      </Card>
                    </Box>
                    <Box p={[1, 2]} w={[1, 1 / 2, 1 / 2, 1 / 4]}>
                      <Card>
                        <Icon name="rotation" />
                        <Desc>
                          Every month a different member withdraws funds from
                          the group savings pot
                        </Desc>
                      </Card>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Block>
          </Section>
          <Section marginTop="5em">
            <Block>
              <Flex justify="center" align="center" column>
                <Box width={1}>
                  <Subheading color="#60C091" center>
                    Why Esusu?
                  </Subheading>
                </Box>
                <Box width={1}>
                  <Flex justify="center" align="center" wrap>
                    <Box width={[1, 1 / 2]} p={[1, 2, 3, 4]}>
                      <Image src="/static/app-screenshot.png" />
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2, 3, 4]}>
                      <HR width="20" />
                      <Subheading fontSize="1.25em" color="#4A4A4A">
                        No pen and paper required. <br />
                        <br />Direct payments between user accounts. <br />
                        <br />Affordable scaling of savings communities.
                      </Subheading>
                      <Spacer />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Block>
          </Section>
          <Section marginTop="5em">
            <Block>
              <Flex justify="center" align="center" column>
                <Box width={1}>
                  <Subheading color="#60C091" center>
                    Interactive Preview
                  </Subheading>
                </Box>
                <Box width={1}>
                  <Flex justify="center" align="center" wrap>
                    <Box width={[1, 1 / 2]} p={[1, 2, 3, 4]}>
                      <HR width="20" />
                      <Subheading color="#4A4A4A">
                        Save Together. <br />Build Community. <br />Be
                        Empowered.
                      </Subheading>
                    </Box>
                    <Box width={[1, 1 / 2]}>
                      <DemoView>
                        <iframe
                          width="438"
                          height="930"
                          src="//invis.io/MW9V2FLVZ"
                          frameBorder="0"
                          allowFullScreen
                        />
                      </DemoView>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Block>
          </Section>
        </Wrapper>
      )
    );
  }
}

const Wrapper = styled.div``;

const DemoView = styled.div`
  height: 47em;
  text-align: center;
  & > iframe {
    border: 0;
    transform: scale(0.7);
  }
`;
const PlayIcon = styled.img`
  vertical-align: middle;
  padding-right: 5px;
`;

const Card = styled.div`
  background: #f7f7f7;
  box-shadow: -9px 12px 24px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15em;
  height: 15em;
  position: relative;
  margin: 0 auto;
`;

const Image = styled.img`
  display: block;
  width: 300px;
  height: auto;
  ${media.phone`
    width: 100%;
  `};
`;
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f7f7;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  border-radius: 4px;
  text-align: center;
`;

const Bio = styled.div`
  color: white;
  position: relative;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const CardTitle = styled.h3`
  font-size: 20px;
  letter-spacing: 0;
  line-height: 0;
  color: #fff;
  font-weight: 200;
`;
const CardSubtitle = styled.h5`
  font-size: 14px;
  line-height: 0;
  color: #fff;
`;

const Logo = styled.img`
  width: auto;
  height: 5em;
  max-height: 5em;
  background-size: cover;
`;

const Step = styled.h3`
  color: #60c091;
  font-size: 3em;
  font-weight: 800;
  line-height: 0em;
`;

const OverlayImage = styled.img`
  z-index: 6;
  height: auto;
  width: 90%;
`;

const Desc = styled.p`
  display: block;
  padding: 10px;
  text-align: center;
`;

const PressCoverageBox = styled(Box)`
  background: #ffffff;
  border: 1px solid #f7f7f7;
  box-shadow: -1px 2px 2px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px 4px 0 0;
  text-align: center;
`;

const CoverageImage = styled.img`
  height: 1.6em;
  max-height: 1.6em;
  width: auto;
`;

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
    background: rgba(25, 29, 34, 0.75);
  }
  & > video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-size: cover;
    overflow: hidden;
  }
  ${media.tablet`
    height: 400px;
  `} ${media.phone`
    height: 270px;
  `};
`;

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
`;

const RoscaVideoView = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
