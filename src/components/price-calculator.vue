<template>
  <div class="calculator-inner">
    <h1 class="calculator-inner_title text-center">{{calcTitle}}</h1>
    <div class="calculator-inner_content">
        <menu-accordeon></menu-accordeon>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calcTitle: "Сколько будет стоить ваш заказ?"
    };
  }
};
</script>
<style lang="scss">
@import "./../sass/price-calculator/price-calculator.scss";
@import "./../sass/global/adaptive.scss";
</style>
