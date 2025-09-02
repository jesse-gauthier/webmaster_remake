// FontAwesome selective imports for better performance
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import only the icons we actually use
import {
  faCode,
  faServer, 
  faShoppingCart,
  faSearch,
  faLink,
  faFileAlt,
  faChartLine,
  faChartBar,
  faCogs,
  faFileContract,
  faCircleNotch,
  faCheckCircle,
  faChevronUp,
  faChevronDown,
  faTimes,
  faExternalLinkAlt,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'

import {
  faVuejs
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  faCode,
  faServer,
  faShoppingCart,
  faSearch,
  faLink,
  faFileAlt,
  faChartLine,
  faChartBar,
  faCogs,
  faFileContract,
  faCircleNotch,
  faCheckCircle,
  faChevronUp,
  faChevronDown,
  faTimes,
  faExternalLinkAlt,
  faQuoteLeft,
  faVuejs
)

export { FontAwesomeIcon }