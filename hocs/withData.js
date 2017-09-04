import React from 'react'
import 'isomorphic-fetch'
import Prismic from 'prismic.io'
import PrismicToolbar from 'prismic-toolbar'
import PrismicConfig from '../prismic-configuration'

export default (WrappedComponent) => (
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        prismicCtx: null,
      }
    }

    componentWillMount() {
      this.buildContext().then((prismicCtx) => {
        this.setState({ prismicCtx })
      }).catch((e) => {
        console.error(`Cannot contact the API, check prismic configuration: \n ${e}`)
      })
    }

    refreshToobar() {
      const maybeCurrentExperiment = this.api.currentExperiment()
      if (maybeCurrentExperiment) {
        PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId())
      }
      PrismicToolbar.setup(PrismicConfig.apiEndpoint)
    }

    buildContext() {
      const accessToken = PrismicConfig.accessToken
      return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
        api, 
        endpoint: PrismicConfig.apiEndpoint,
        accessToken,
        linkResolver: PrismicConfig.linkResolver,
        toolbar: this.refreshToolbar,
      }))
    }

    render() {
      return (
        <div>
          <WrappedComponent prismicCtx={this.state.prismicCtx} />
        </div>
      )
    }
  }
)
