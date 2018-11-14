import Vue from 'vue'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueCookies from 'vue-cookies'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueCookies)
import ajax from '../util/axios'
Vue.prototype.$http = ajax