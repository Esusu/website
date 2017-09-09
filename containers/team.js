import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import { Section, Block, Spacer } from '../components/atoms/layout'
import {
  Title, 
  Subtitle,
  Subheading,
  Paragraph } from '../components/atoms/typography'

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
      team: null
    }
  }

  componentDidMount(){
    this.getPage('team')
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
            <br />
            <Paragraph color="#9B9B9B" fontSize="1.5em" italicize>{PrismicDOM.RichText.asText(page.data.description)}</Paragraph>
          </Block>
        </Section>
        <Section>
          <Block center>
            <Flex justify="center" wrap>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/samir-goel.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/goelsamir" target="_blank">Samir Goel</Link></CardTitle>
                      <CardSubtitle>Co-Founder</CardSubtitle>
                      <Quote>
                        <p>Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.</p>
                        <cite>Booker T. Washington</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/wemimo-abbey.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/wemimo-abbey-62382a2a" target="_blank">Wemimo Abbey</Link></CardTitle> 
                      <CardSubtitle>Co-Founder</CardSubtitle>
                      <Quote>
                        <p>If you want to go quickly, go alone. If you want to go far, go together.</p>
                        <cite>African Proverb</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/jeph-acheampong.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/jephthahacheampong" target="_blank">Jephthah Acheampong</Link></CardTitle>
                      <CardSubtitle>Head of Marketing & Sales</CardSubtitle>
                      <Quote>
                        <p>Thoughts lead on to purposes; purposes go forth in action; actions form habits; habits decide character; and character fixes our destiny.</p>
                        <cite>Tyron Edwards</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>              
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/alterrique-iqram.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/alterrique" target="_blank">Alterrique Iqram</Link></CardTitle>
                      <CardSubtitle>Head of Design</CardSubtitle>
                      <Quote>
                        <p>Design is not just what it looks like and feels like. Design is how it works.</p>
                        <cite>Steve Jobs</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                  </Card>
              </Box>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/paul-dariye.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/pauldariye" target="_blank">Paul Dariye</Link></CardTitle>
                      <CardSubtitle>Head of Product & Engineering</CardSubtitle>
                      <Quote>
                        <p>There is only one success: to be able to spend your life in your own way.</p>
                        <cite>Christopher Morley</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                  </Card>
              </Box>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/sophia-senyo.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/sophia-senyo-esq-488547100" target="_blank">Sophia Senyo</Link></CardTitle>
                      <CardSubtitle>Head of Legal & Compliance</CardSubtitle>
                      <Quote>
                        <p>The strength of any person is not in his or her victory but in his or her ability to come back from defeat.</p>
                        <cite>Unknown</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/robert-henning.jpg" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/robert-henning-a4050614" target="_blank">Robert Henning</Link></CardTitle>
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
        <Section>
          <Block center p={[4]}>
            <Subheading color="#000" fontSize="1.5em" light center uppercase>Advisors</Subheading>
            <Flex justify="center" wrap>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/bradley-michaelson.png" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/bradleymichelson" target="_blank">Bradley Michaelson</Link></CardTitle>
                      <CardSubtitle>Director of Business Development, Idealist</CardSubtitle>
                      <Quote>
                        <p>It's not that I'm so smart, it's just that I stay with problems longer.</p>
                        <cite>Albert Einstein</cite>
                      </Quote>
                    </Bio>
                  </Overlay>
                </Card>
              </Box>
              <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}>
                <Card>
                  <Image src="/static/scott-taitel.png" />
                  <Overlay>
                    <Bio>
                      <CardTitle><Link href="https://www.linkedin.com/in/scott-taitel-a711a79" target="_blank">Scott Taitel</Link></CardTitle>
                      <CardSubtitle>Director of Social Impact, Innovation, & Investment</CardSubtitle>
                      <CardSubtitle>NYU Wagner F. Robert Graduate School of Public Policy</CardSubtitle>
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
  width: 300px;
  heigh: 300px;
  position: relative;
  &:hover > div {
    height: 100%;
    width: 100%;
  }
`

const Image = styled.img`
  display: block;  
  width: 300px;
  height: 300px;
  background: #F7F7F7;
  box-shadow: -9px 12px 24px 0 rgba(0,0,0,0.10);
  border-radius: 4px;
  object-fit: cover;
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
  line-height: 1;
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

const Link = styled.a`
  text-decoration: none;
  border-bottom: 1px solid;
  color: inherit;
`
