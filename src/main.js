import Vue from "vue";
import VueRouter from "vue-router";
import Vue2Filters from "vue2-filters";
import * as VueGoogleMaps from 'vue2-google-maps';


import App from "./App.vue";
import Menu from "./components/menubar.vue";
import Banner from "./components/banner.vue";
import qSlider from "./components/quote-slider.vue";
import priceCalculator from "./components/price-calculator.vue";
import menuAccordeon from "./components/menu-accordeon.vue";
import gallery from "./components/gallery.vue";
import reviews from "./components/reviews.vue";


Vue.component("menubar", Menu);
Vue.component("banner", Banner);
Vue.component("qSlider", qSlider);
Vue.component("price-calculator", priceCalculator);
Vue.component("menu-accordeon", menuAccordeon);
Vue.component("gallery", gallery);
Vue.component("reviews", reviews);

Vue.use(VueRouter);
Vue.use(Vue2Filters);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDU6z2ZOoBTBVdA1qC_HFqNbJN4-3KeVhA',
    libraries: 'places'
  }
})

var router = new VueRouter({
  routes: [{
      path: "/",
      component: Banner
    },
    {
      path: "/banner",
      component: Banner
    },
    {
      path: "/price-calculator",
      component: priceCalculator
    },
    {
      path: "/gallery",
      component: gallery
    },
    {
      path: "/reviews",
      component: reviews
    }
  ]
});
new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
