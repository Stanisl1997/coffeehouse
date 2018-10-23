<template>
  <div id="menubar">
  <div class="header-inner d-flex align-items-center justify-content-between">
    <div class="logo navbar-brand col-lg-2"><router-link to="/banner" href="#">{{nameLogo}}</router-link></div>
    <ul class="menu-bar  d-flex justify-content-end align-items-center m-0 p-0 col-lg-7">
      <li class="menu-bar_element d-flex" @mouseover="onMouseOver(element)" @mouseleave="onMouseLeave(element)" v-for="(element,i) in elements" ><router-link :to="pages[i]" >{{element.name}}
        <transition>
        <i v-if="!element.showIcon" class="fas" :class='icons[i]'></i>
         </transition>
      </router-link></li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {
  props: ['elements'],
  data() {
    return {
      nameLogo: 'Кофейня №1',
      icons: ['fa-cookie-bite', 'fa-calculator','fa-images','fa-phone','fa-star'],
      pages: ['/banner','/price-calculator' , '/gallery' , '/reviews']
    }
  },
  methods : {
    onMouseOver(element){  
      element.showIcon = true;
      },
    onMouseLeave(element){
      element.showIcon = false;
    }
  }
  }


</script>
<style lang="scss">


.header-inner {
  padding-top: 20px;
}

a {
  text-decoration: none;
  color: #1e1f26;

  &:hover {
    color: #1e1f26;
    text-decoration: none;
  }
}

.menu-bar_element>a {
  padding: 3px 5px;
  margin-bottom: 0px;
  margin-right: 4px;
  font-size: 14px;
  font-size: bold;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    transition: all 0.5s ;
   text-shadow: 0 18px 27px rgba(0, 0, 0, 0.5);
  }
}

ul {
  list-style: none;
}


.logo {
  font-size: 47px;
  transition: all 0.5s ;
  &:hover {
    transition: all 0.5s ;
   text-shadow: 0 18px 27px rgba(0, 0, 0, 0.5);
  }
}

.menu-bar_element {
  padding: 5px 10px;
  margin-left: 10px;
  position:relative;
}
i {
  position: absolute;
  top: 10px;
  right: -5px;
}



.v-enter-active {
  transition: all .4s ease;
}

.v-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.v-enter {
  transform: translateY(10px);
  opacity: 0;
}
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

</style>
