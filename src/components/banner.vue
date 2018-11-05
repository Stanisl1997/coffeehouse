<template>
  <div class="banner-inner" >
    <div class="banner-inner_title">
      <h1 class="text-center">{{bannerTitle}}</h1>
      <h3 class="text-center">{{bannerTitleSmall}}</h3>
    </div>
    <qSlider></qSlider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerTitle: "Добро пожаловать!",
      bannerTitleSmall: "Welcome!"
    };
  }
};
</script>
<style lang="scss">
.banner-inner {
  width: 100%;
  background: url("../assets/banner.jpg") center no-repeat;
  background-size: cover;
  height: calc(100vh - 100px);
}

.banner-inner_title {
  padding-top: 70px;
}

.quote-slider {
  width: 70%;
  margin: 90px auto;
}
</style>
