import React from 'react'

import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'

export default (WrappedComponent) => (
  class extends React.Component {
  static async getInitialProps(ctx) {
    const { req } = ctx
    let props = {}
    if(WrappedComponent.getInitialProps) {
      props = await WrappedComponent.getInitialProps(ctx)
    }
    return {
      props
    }
  }

  render() {
    return (
      <div>
        <Header url={this.props.url}/>
        <main>
          <WrappedComponent {...this.props} />
        </main>
        <Footer />
      </div>
    );
  }
})
