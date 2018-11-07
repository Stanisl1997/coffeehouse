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
.banner-inner {
  width: 100%;
  background: url("../assets/item12.jpg") center no-repeat;
  background-size: cover;
  height:calc(100vh - 100px);
  color:#000;
}

</style>
