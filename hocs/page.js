import { compose } from 'redux'
import withData from './withData'
import withLayout from './withLayout'
import withStyle from './withStyle'
import withTheme from './withTheme'
import withSmoothScroll from './withSmoothScroll'

// Compose functions from right to left
export default compose (
  // withData,
  // withSmoothScroll,
  withLayout,
  withStyle,
  withTheme,
)
