<template>
  <div class="calculator-inner">
    <h1 class="calculator-inner_title text-center">{{calcTitle}}</h1>
    <div class="calculator-inner_content">
        <menu-accordion></menu-accordion>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calcTitle: "Сколько будет стоить ваш заказ?",
    };
  }
};
</script>
<style lang="scss">
.calculator-inner_content {
  background: url(../assets/altBg.jpg) no-repeat top;
  background-size: cover;
  background-attachment: fixed;
}
</style>
