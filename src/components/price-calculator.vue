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
  background: url(../assets/item19.jpg) no-repeat ;
  background-position-y: 40%;
  background-size: cover;
  background-attachment: fixed;
}

.calculator-inner_title{
  padding: 15px 0;
  font-size: 25px;
  margin-bottom: 0;
    background: #d7dee3;
background: -moz-linear-gradient(top, #d7dee3 16%, #d7dee3 16%, #e5ebee 50%, #f5f7f9 100%);
background: -webkit-linear-gradient(top, #d7dee3 16%,#d7dee3 16%,#e5ebee 50%,#f5f7f9 100%);
background: linear-gradient(to bottom, #d7dee3 16%,#d7dee3 16%,#e5ebee 50%,#f5f7f9 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d7dee3', endColorstr='#f5f7f9',GradientType=0 );
  }
</style>
