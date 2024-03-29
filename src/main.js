import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import './assets/app.scss'

// import configs
// require('dotenv').config()

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// fa regular
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
// fa brand
import { faFacebookF, faInstagram, faCcPaypal, faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons'
// fa solid
import { faSearch, faShoppingBag, faLongArrowAltLeft, faLongArrowAltRight, faArrowCircleRight, faCircle, faMinus, faPlus, faChevronRight, faShoppingCart, faUsers, faUndoAlt, faUnlockAlt, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebookF, faInstagram, faSearch, faHeart, faShoppingBag,
  faLongArrowAltLeft, faLongArrowAltRight, faArrowCircleRight, faCcPaypal,
  faCcVisa, faCcMastercard, faCcAmex, faCircle, faMinus, faPlus, faChevronRight,
  faComment, faShoppingCart, faUsers, faUndoAlt, faUnlockAlt, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
