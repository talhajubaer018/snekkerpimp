import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import './assets/app.scss'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// fa regular
import { faHeart } from '@fortawesome/free-regular-svg-icons'
// fa brand
import { faFacebookF, faInstagram, faCcPaypal, faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons'
// fa solid
import { faSearch, faShoppingBag, faLongArrowAltLeft, faLongArrowAltRight, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebookF, faInstagram, faSearch, faHeart, faShoppingBag,
  faLongArrowAltLeft, faLongArrowAltRight, faArrowCircleRight, faCcPaypal,
  faCcVisa, faCcMastercard, faCcAmex)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
