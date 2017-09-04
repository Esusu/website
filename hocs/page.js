import { compose } from 'redux'
// import withAnalytics from './withAnalytics'
import withData from './withData'
import withLayout from './withLayout'
import withStyle from './withStyle'
import withTheme from './withTheme'
import withSmoothScroll from './withSmoothScroll'

// Compose functions from right to left
export default compose (
  // withAnalytics,
  withData,
  withSmoothScroll,
  withStyle,
  withTheme,
  withLayout
)
