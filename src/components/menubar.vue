<template>
  <div id="menubar">
  <div class="header-inner d-flex align-items-center justify-content-between">
    <div class="logo navbar-brand col-lg-5"><router-link to="/banner" href="#">
    {{nameLogo}}
    <img  class="logoIcon" :src="logoIcon">
    </router-link>
    <div class="toggle-button" v-show="window.width <= 425">
      <i class="far  toggle-bar" v-show="mobile" @click.prevent="toggleMenu = !toggleMenu" :class="{'fa-caret-square-up' : toggleMenu , 'fa-caret-square-down' : !toggleMenu}"></i>
    </div></div>
    
    <transition name="slide">
     <ul class="menu-bar justify-content-end align-items-center col-lg-7" v-show="toggleMenu">
      <li class="menu-bar_element d-flex" @mouseover="onMouseOver(element)" @mouseleave="onMouseLeave(element)" v-for="(element,i) in elements" :key="element.name" ><router-link :to="pages[i]" >{{element.name}}
        <transition name="icon-move">
        <i v-if="!element.showIcon" class="fas" :class='icons[i]'></i>
         </transition>
      </router-link></li>
    </ul>
    </transition>
  </div>
  <hr>
  </div>
</template>
<script>
import logo from "../assets/item35copy.png";
export default {
  props: ["elements"],
  data() {
    return {
      nameLogo: "Кофейня",
      icons: [
        "fa-cookie-bite",
        "fa-calculator",
        "fa-images",
        "fa-phone",
        "fa-star"
      ],
      pages: ["/banner", "/price-calculator", "/gallery", "/reviews"],
      logoIcon: logo,
      mobile: true,
      toggleMenu: false,
      window: {
        width: 0
      }
    };
  },
  methods: {
    onMouseOver(element) {
      element.showIcon = true;
    },
    onMouseLeave(element) {
      element.showIcon = false;
    }
  },
  mounted: function menuShow() {
    if (this.window.width >= 426) {
      return (this.toggleMenu = true);
    }
  }
};
</script>
<style lang="scss">
@import "../sass/menubar/_menubar.scss";
</style>
