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

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Vollkorn+SC:400,700&subset=cyrillic");
html,
body {
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
#app {
  background: #f4f4f8;
  font-family: "Vollkorn SC", serif;
  color: #1e1f26;
}
.container {
  width: 1070px;
  padding: 0px;
}

.change-page-enter-active {
  transition: all 0.6s ease;
}

.change-page-leave-active {
  transition: all 0.6s;
}

.change-page-enter {
  opacity: 0;
  transform: translateX(100px);
}

.change-page-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
