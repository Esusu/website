import React from 'react'
let SS
export default (WrappedComponent) => {
  return class extends React.Component {
    static async getInitialProps() {
      let props = {}
      if(WrappedComponent.getInitialProps) {
        props = await WrappedComponent.getInitialProps(ctx);
      }

      return {
        props
      }
    }

    componentDidMount() {
      if(window && !SS) {
        SS = require('smoothscroll-polyfill').polyfill()
      }
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
};
