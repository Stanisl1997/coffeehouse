<template>
  <div id="app">
    <div class="container h-a">
      <menubar :elements='menuElements'></menubar>
    </div>
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
        { name: "Контакты и Отзывы", showIcon: false }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Vollkorn+SC:400,700&subset=cyrillic");
html,
body {
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
#app {
  background-color: #f8f8fa;
  font-family: "Vollkorn SC", serif;
  color: #1e1f26;
  height: 100%;
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
