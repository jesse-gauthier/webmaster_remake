import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
} from '@fortawesome/free-solid-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';

export default defineNuxtPlugin(nuxtApp => {
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
  );
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
