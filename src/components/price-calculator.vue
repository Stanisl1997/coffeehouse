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
      colors: ["#1B7EAF", "#415AAC", "#063858"],
      totallPrice: 0,
      cart: []
    };
  },
  methods: {
    priceIncrease(j, item) {
      this.cartPushItems(j, item);
      item.size[j].amount++;
      this.totallPrice += item.size[j].price;
    },

    cartPushItems(j, item) {
      let cartLength = this.cart.length;
      let itemCart = {
        name: item.name,
        size: item.size[j].name,
        price: item.size[j].price,
        id: cartLength
      };
      this.cart.push(itemCart);
    },
    deleteFromCart(k) {
      this.totallPrice -= this.cart[k].price;
      this.cart.splice(k, 1);
    }
  }
};
</script>
<style lang="scss">
.calculator-inner_content {
  height: calc(100vh - 150px);
  background: url(../assets/altBg.jpg) no-repeat bottom;
  background-size: cover;
}
</style>
