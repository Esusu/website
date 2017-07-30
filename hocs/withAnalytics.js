import React, { Component } from 'react'
import env from '../config'
let Analytics
export default (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps(ctx) {
      const { req } = ctx
      let props = {}
      if(WrappedComponent.getInitialProps) {
        props = await WrappedComponent.getInitialProps(ctx);
      }

      return {
        props
      }
    }

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      if(window && !Analytics) {
        Analytics = require('../lib/segment')
        analytics.load(env.SEGMENT_WRITE_KEY)
      } else {
        analytics.load(env.SEGMENT_WRITE_KEY)
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}
