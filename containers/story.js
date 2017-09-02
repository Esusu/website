import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Section, Block, Spacer } from '../components/atoms/layout'
import {
  Title, 
  Subtitle,
  Subheading,
  Paragraph } from '../components/atoms/typography'

export default class extends React.Component {
  static async getInitialProps({ query: { title } }) {
    return {title}
  }

  render() {
    const title = this.props.url.query.title
    return (
      <Wrapper>
        <Section>
          <Block p={[4]} left>
            <Back href="/stories">Back to Stories</Back><br /><br />
            <StyledImage src="http://lorempixel.com/300/300/people/" />
            <Paragraph color="#9b9b9b" fontSize="0.5em" uppercase>17 Sep 2017</Paragraph>
            <Title color="#000" fontSize="3em" light>{title}</Title>
            <br />
            <Paragraph color="#4a4a4a" fontSize="1em">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a arcu pretium, vestibulum mauris a, bibendum tortor. Curabitur non rutrum felis. Nunc a sagittis urna. Sed tempor nunc et interdum efficitur. Sed ullamcorper commodo nulla non eleifend. In hac habitasse platea dictumst. Vivamus condimentum metus ligula. Etiam cursus fringilla porta. Morbi sit amet ultrices nisl.
          </Paragraph><br />
              <Paragraph color="#4a4a4a" fontSize="1em">
        In ultrices nisi tellus. Integer urna mi, consectetur a nisi at, venenatis varius nibh. Morbi convallis quam nec sem cursus, in rhoncus magna porttitor. Curabitur lacinia sollicitudin orci. Vestibulum scelerisque nec odio id pretium. Nulla condimentum eros sem, molestie tempus odio condimentum a. Cras vestibulum tincidunt rhoncus. Integer faucibus sapien non augue pharetra, in maximus lectus finibus. Praesent in interdum ante. Duis accumsan feugiat consequat.
      </Paragraph><br />
      <Paragraph color="#4a4a4a" fontSize="1em">
        Vivamus aliquet velit id justo ornare egestas. Nunc lacinia feugiat sapien quis dignissim. Maecenas porta, metus sit amet maximus vulputate, lectus urna fermentum ipsum, vitae tristique lacus nibh eu urna. In elementum justo ut est ullamcorper pellentesque. Sed faucibus consectetur bibendum. Vestibulum viverra velit ut orci consequat tincidunt. Sed sem orci, interdum vitae quam vel, mattis tempus nunc. Nunc feugiat neque non ex consequat aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
      </Paragraph>
<Paragraph color="#4a4a4a" fontSize="1em">
  Etiam nec egestas ipsum. Aliquam orci magna, sagittis vestibulum bibendum sit amet, auctor ac justo. Sed sem purus, tincidunt et risus eget, tristique tempus dolor. Integer gravida ullamcorper nibh in pellentesque. Aenean sit amet est vitae ligula tempor varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed tortor elit. Curabitur efficitur orci in odio ullamcorper imperdiet. Sed quis finibus odio. Nullam eget eleifend lorem. In pellentesque vel turpis id tempus. Ut sed nisi felis.
</Paragraph><br />
      <Paragraph color="#4a4a4a" fontSize="1em">
  Phasellus luctus velit diam, non tristique augue auctor quis. Aenean ac libero commodo, feugiat metus tristique, laoreet nisi. Vivamus fermentum, neque eu ultrices posuere, justo justo faucibus velit, quis feugiat metus leo quis mauris. Sed nulla lacus, cursus at aliquet sit amet, tempor nec velit. Duis aliquam, felis in pulvinar tristique, sem nulla vehicula mauris, at consectetur tortor eros nec massa. Nam lobortis magna nec malesuada dictum. Quisque sapien nunc, commodo et egestas id, blandit non purus. Quisque nec enim massa. Integer condimentum tincidunt facilisis.
</Paragraph><br />
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
