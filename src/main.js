import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

library.add(faShoppingCart)
library.add(faPlus)
library.add(faHeart)
library.add(faReadme)

Vue.component('font-awesome-icon', FontAwesomeIcon)
import '@/assets/main.css'
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyA5n5J032Xm8IN8XNxJiPTSngs6dUCXK8I",
  authDomain: "reactwebsite-c8e08.firebaseapp.com",
  projectId: "reactwebsite-c8e08",
  storageBucket: "reactwebsite-c8e08.appspot.com",
  messagingSenderId: "605112163860",
  appId: "1:605112163860:web:73b7d851afc3bfd213d101",
  measurementId: "G-Y91T8N3XYW"
}
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

