<template>
  <div class="banner-inner" >

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
@import "./../sass/banner/banner.scss";
@import "../sass/global/adaptive.scss";
</style>
