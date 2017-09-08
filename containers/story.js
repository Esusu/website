import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Section, Block, Spacer } from '../components/atoms/layout'
import Prismic from 'prismic.io'
import dateFormat from 'dateformat'
import 'isomorphic-fetch'
import {
  Title, 
  Subtitle,
  Subheading,
  Paragraph } from '../components/atoms/typography'
import { initApi } from '../data/initApi'

export default class Story extends React.Component {
  static async getInitialProps({req, query}) {
    const  { id  } = query
    return {
      id,
      req,
    }
  }
  
  constructor(props) {
    super(props)
    this.state = {
      story: null,
      author: null
    }
  }
  // getAuthorByID(id) {
  //   initApi().then((api) => {
  //       return api.getByID(id)
  //   }).then((response) => {
  //     this.setState({
  //       author: response
  //     })
  //   })
  //
  // }

  componentWillMount(){
    const uid = this.props.url.query.id || this.props.id
    initApi().then((api) => {
      return api.getByUID('post', uid)
    }).then((response) => {
      this.setState({
        story: response
      })
    })
  }

  render() {
    console.log(this.props.id)
    const story = this.state.story
    return story && (
      <Wrapper>
        <Section>
          <Block p={[4]} left>
            <Back href="/stories">Back to Stories</Back><br /><br />
            <StyledImage src="http://lorempixel.com/300/300/people/" />
            <Paragraph color="#9b9b9b" fontSize="0.5em" uppercase>{dateFormat(story.getDate('post.published'), 'mmmm dS, yyyy')}</Paragraph>
            <Title color="#000" fontSize="3em" light>{story.getText('post.title')}</Title>
            <br />
            <RichTextView 
              dangerouslySetInnerHTML={{__html: story.getStructuredText('post.content').asHtml()}} />
          </Block>
        </Section>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`

const Back = styled.a`
  text-decoration: none;
  font-size: 1em;
  text-transform: uppercase;
  color: #9b9b9b;
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
  /* margin: 0 auto; */
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

const Link = styled.a`
  text-decoration: none;
  border-bottom: 1px solid;
  color: inherit;
`

const RichTextView = styled.div`
  & > p {
    font-size: 1em;
    color: #4a4a4a;
  }
`
