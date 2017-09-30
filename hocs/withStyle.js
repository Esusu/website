import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

export default WrappedComponent => props => {
  injectGlobal`
    ${normalize()}

    *, *:before; *:after {
      box-sizing: border-box;
    }

    html, body {
      padding: 0;
      margin: 0;
      font-family: Avenir, 'Helvetic Neue', sans-serif;
      font-size: 100%;
      line-height: 1.125em;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, p {
      font-family: Avenir, 'Helvetic Neue', sans-serif;
      color: #000000;
      letter-spacing: 0;
      font-style: normal;
    }
    h1 {
      font-size: 3.7em;
      line-height: 3.25em;
    }
    h2 {
      font-size: 2em;
      line-height: 2.25em;
    }
    h3 {
      font-size: 1.5em;
      color: #5D6072;
      line-height: 2em;
      font-style: light;
    }
    p {
    font-size: 0.875em;
    }
  `
  return (
    <div>
      <WrappedComponent {...props} />
    </div>
  )
}
