import React from 'react'
import initApi from '../data/initApi'

export default (WrappedComponent) => (
  class extends React.Component {
    static async getInitialProps(ctx) {
      const { req } = ctx
      const props =  {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await (WrappedComponent.getInitialProps ? WrappedComponent.getInitialProps(ctx) : {})
      }

      // initialize Prismic Client
      initApi(req)

      return {
        req,
        ...props
      }
    }
      
    constructor(props) {
      super(props)
      this.prismic = initApi(this.props.req)
    }

    render() {
      return <WrappedComponent {...this.props} prismic={this.prismic} />
    }
  }
)



