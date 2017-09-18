import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import { Flex, Box } from 'grid-styled'
import Prismic from 'prismic-javascript'
import {RichText, Date} from 'prismic-dom'
import dateFormat from 'dateformat'

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
      stories: null
    }
  }

  componentDidMount(){
    this.getPage('stories')
    this.getStories()
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

  getStories() {
    initApi(this.props.req).then((api) => {
          return api.query(
            Prismic.Predicates.at('document.type', 'post'),
              { 
                'fetch': ['post.title', 'post.published', 'post.featured', 'post.author' ],
                'fetchLinks': 'author.headshot',
                'orderings': '[my.post.published desc]' 
              }
            )
      }).then((response) => {
          this.setState({ 
            stories: response.results
          })
      })
  }

  render() {
    const { 
      page,
      stories } = this.state

    return page && stories && (
      <Wrapper>
        <Head>
          <title>{page.data.metatitle}</title>
        </Head>
        <Section>
          <Block center p={[4]}>
            <Title color="#000" fontSize="3em" light>{RichText.asText(page.data.title)}</Title>
            <br />
            <Paragraph color="#9B9B9B" fontSize="1.5em" italicize>{RichText.asText(page.data.description)}</Paragraph>
          </Block>
        </Section>
        <Section>
          <Block>
            <Flex justify="center" wrap>
              { stories.map((story) => (
                <Box p={[1, 2, 3]} w={[1, 1/2, 1/3, 1/4]}  key={story.id}>
                  <Link as={`/story/${story.uid}`} href={`/story?id=${story.uid}`}>
                    <a>
                      <Card>
                        <Image src={`${story.data.featured.url}`}/>
                        <Overlay>
                          <OverlayContent>
                            <StyledImage src={`${story.data.author.data.headshot.url}`} />
                            <Paragraph color="#9b9b9b" fontSize="0.5em" uppercase>{dateFormat(Date(story.data.published), 'mmmm dS, yyyy')}</Paragraph>
                            <Subheading color="#9b9b9b" fontSize="0.8em">{RichText.asText(story.data.title)}</Subheading>
                          </OverlayContent>
                        </Overlay>
                      </Card>
                    </a>
                  </Link>
                </Box>
              ))}
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
  position: relative;
  width: 300px;
  height: 300px;
  text-align: center;
  &:hover > div {
    height: 100%;
    width: 100%;
    border: 1px solid #60c091; 
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

const StyledImage = styled.img`
  display: block;  
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
  padding: 10px 0;
  object-fit: cover;
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
  color: white;
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
