import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Section, Block, Spacer } from '../components/atoms/layout'
import {
  Title, 
  Subtitle,
  Paragraph } from '../components/atoms/typography'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {}
  }

  render() {
    return (
      <Wrapper>
        <Section bgColor="#EDF0F5">
          <Block center p={[4]}>
            <Title>Meet the Dream Team</Title>
            <Subtitle>Utterly Passionate About Changing the World</Subtitle>
          </Block>
        </Section>
        <Spacer />
        <Section>
          <Block center>
            <Flex justify="center" wrap>
              <Box p={[1, 2, 3, 4]} w={[1, 1/2, 1/3]}>
                <Card>
                  <Image src="/static/samir-goel.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle>Samir Goel</CardTitle>
                      <CardSubtitle>Co-Founder</CardSubtitle>
                      <Quote>
                        <p>Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.</p>
                        <cite>Booker T. Washington</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>
              <Box p={[1, 2, 3, 4]} w={[1, 1/2, 1/3]}>
                <Card>
                  <Image src="/static/wemimo-abbey.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle>Wemimo Abbey</CardTitle>
                      <CardSubtitle>Co-Founder</CardSubtitle>
                      <Quote>
                        <p>If you want to go quickly, go alone. If you want to go far, go together.</p>
                        <cite>African Proverb</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>
            </Flex>
            <Flex justify="center" wrap>
              <Box p={[1, 2, 3, 4]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/jeph-acheampong.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle>Jephthah Acheampong</CardTitle>
                      <CardSubtitle>Head of Marketing & Sales</CardSubtitle>
                      <Quote>
                        <p>Thoughts lead on to purposes; purposes go forth in action; actions form habits; habits decide character; and character fixes our destiny.</p>
                        <cite>Tyron Edwards</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>              
              <Box p={[1, 2, 3, 4]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/alterrique-iqram.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle>Alterrique Iqram</CardTitle>
                      <CardSubtitle>Head of Design</CardSubtitle>
                      <Quote>
                        <p>Design is not just what it looks like and feels like. Design is how it works.</p>
                        <cite>Steve Jobs</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                  </Card>
              </Box>
              <Box p={[1, 2, 3, 4]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/paul-dariye.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle>Paul Dariye</CardTitle>
                      <CardSubtitle>Head of Product & Engineering</CardSubtitle>
                      <Quote>
                        <p>There is only one success: to be able to spend your life in your own way.</p>
                        <cite>Christopher Morley</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                  </Card>
              </Box>
              <Box p={[1, 2, 3, 4]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/sophia-senyo.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle>Sophia Senyo</CardTitle>
                      <CardSubtitle>Head of Legal & Compliance</CardSubtitle>
                      <Quote>
                        <p>The strength of any person is not in his or her victory but in his or her ability to come back from defeat.</p>
                        <cite>Unknown</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>
              <Box p={[1, 2, 3, 4]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/robert-henning.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle>Robert Henning</CardTitle>
                      <CardSubtitle>Head of Finance & Accounting</CardSubtitle>
                      <Quote>
                        <p>The greater danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.</p>
                        <cite>Michelangelo</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
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

const Card = styled.div`
/* background: #F7F7F7; */
/* box-shadow: -9px 12px 24px 0 rgba(0,0,0,0.10); */
/* border-radius: 4px; */
  /* overflow: hidden; */
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
const Quote = styled.blockquote`
  text-align: left;
  border-left: 1px solid #fff;
  color: #fff;
  & > p,
  & > cite {
    padding-left: 2px;
    color: #fff;
  }
`
