import { compose } from 'redux'
import withLayout from './withLayout'
import withStyle from './withStyle'
import withTheme from './withTheme'
import withSmoothScroll from './withSmoothScroll'

// Compose functions from right to left
export default compose (
  withSmoothScroll,
  withStyle,
  withTheme,
  withLayout
)
