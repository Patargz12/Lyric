import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faFacebookF, faInstagram, faFacebook)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})