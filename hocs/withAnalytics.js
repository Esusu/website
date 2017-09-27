import React, { Component } from 'react'
const key = 'JdYqpw8TPTABZSdZxOfr0j2WPNYoKl0D'
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
        Analytics = require('../lib/segment/segment')
        window.analytics.load(key)
      }
      window.analytics.page()
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}
