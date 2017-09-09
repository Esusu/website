import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../lib/theme/theme'

export default WrappedComponent => props => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    </div>
  )
}
