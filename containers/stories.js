import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Flex, Box } from 'grid-styled'
import { Section, Block, Spacer } from '../components/atoms/layout'
import {
  Title, 
  Subtitle,
  Subheading,
  Paragraph } from '../components/atoms/typography'
//
// const PostLink = (props) => (
//   <Link as={`/story/${props.id}`} href={`/store`} />
// )

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {}
  }

  render() {
    return (
      <Wrapper>
        <Section>
          <Block center p={[4]}>
            <Title color="#000" fontSize="3em" light>#EsusuStories: Empower Your Community</Title>
            <br />
            <Paragraph color="#9B9B9B" fontSize="1.5em" italicize>To share your story, email jephthah@esusu.org</Paragraph>
          </Block>
        </Section>
        <Section>
          <Block center>
            <Flex justify="center" wrap>
              { Array.from({length: 20}, () => Math.floor(Math.random() * 20))
                  .map((i) => (
                    <Box p={[4]} w={[1, 1/2, 1/3, 1/4]}  key={i.toString()}>
                      <Link as={`/story/${i}`} href={`/story?title=${i}`}>
                        <a>
                          <Card>
                            <Image src="http://lorempixel.com/600/600/nature/"/>
                            <Overlay>
                              <OverlayContent>
                                <StyledImage src="http://lorempixel.com/300/300/people/" />
                                <Paragraph color="#9b9b9b" fontSize="0.5em" uppercase>17 Sep 2017</Paragraph>
                                <Subheading color="#9b9b9b" fontSize="0.8em">This is a title</Subheading>
                              </OverlayContent>
                            </Overlay>
                          </Card>
                        </a>
                      </Link>
                    </Box>
                  ))
              }
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
    border: 1px solid #60c091; 
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

const StyledImage = styled.img`
  display: block;  
  width: 50px;
  height: auto;
  border-radius: 50%;
  margin: 0 auto;
  padding: 10px 0;
`
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  border-radius: 4px;
  &:hover {
    border: 1px solid #60c091; 
  }
`

const OverlayContent = styled.div`
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
