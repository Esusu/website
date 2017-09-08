import React from 'react'
import 'isomorphic-fetch'
import { initApi } from '../data/initApi'

export default (Component) => (
  class extends React.Component {
    static async getInitialProps(ctx) {
      const { req } = ctx
      const isServer = !!req
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      const props =  {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {})
      }
      
      return {
        req,
        isServer,
        userAgent,
        ...props
      }
    }
      
    constructor(props) {
      super(props)
      this.client = initApi(this.props.req)
    }

    render() {
     return(
        <Component prismicClient={this.client} />
     )
    }
  }
)



