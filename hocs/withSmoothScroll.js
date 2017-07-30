import React from 'react'
let SS
export default (WrappedComponent) => {
  return class extends React.Component {
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
      if(window && !SS) {
        SS = require('smoothscroll-polyfill').polyfill()
      }
    }

    render() {
      return (
          <WrappedComponent {...this.props} />
      );
    }
  }
};
