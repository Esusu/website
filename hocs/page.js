import { compose } from 'redux'
// import withAnalytics from './withAnalytics'
import withLayout from './withLayout'
import withStyle from './withStyle'
import withTheme from './withTheme'
import withSmoothScroll from './withSmoothScroll'

// Compose functions from right to left
export default compose (
  withSmoothScroll,
  // withAnalytics,
  withStyle,
  withTheme,
  withLayout
)
