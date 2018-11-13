<template>
  <div id="app">
      <menubar :elements='menuElements'></menubar>
    <transition name='change-page' mode='out-in'> 
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      menuElements: [
        { name: "Главная", showIcon: false },
        { name: "Калькулятор цены", showIcon: false },
        { name: "Галерея", showIcon: false },
        { name: "Контакты ", showIcon: false }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./sass/App/_App.scss";
@import "./sass/global/adaptive.scss";
</style>


