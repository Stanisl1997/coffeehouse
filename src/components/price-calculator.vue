<template>
  <div class="calculator-inner">
    <h1 class="calculator-inner_title text-center">{{calcTitle}}</h1>
    <div class="calculator-inner_content">
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calcTitle: "Сколько будет стоить ваш заказ?",
      classicCoffeItems: [
        {
          name: "Эспрессо",
          size: [
            { name: "small", amount: 0, price: 13 },
            { name: "stand", amount: 0, price: 18 }
          ],
          isMax: false,
          isSmall: true
        },
        {
          name: "Американо",
          size: [
            { name: "small", amount: 0, price: 13 },
            { name: "stand", amount: 0, price: 18 },
            { name: "MAX", amount: 0, price: 23 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Капучино",
          size: [
            { name: "small", amount: 0, price: 18 },
            { name: "stand", amount: 0, price: 23 },
            { name: "MAX", amount: 0, price: 28 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Латте",
          size: [
            { name: "small", amount: 0, price: 18 },
            { name: "stand", amount: 0, price: 23 },
            { name: "MAX", amount: 0, price: 28 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Мокко",
          size: [
            { name: "small", amount: 0, price: 23 },
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Карамель Макиато",
          size: [
            { name: "small", amount: 0, price: 23 },
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        }
      ],
      gurmanMenuItems: [
        {
          name: "Раф",
          size: [
            { name: "small", amount: 0, price: 23 },
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Кедоровый Латте",
          size: [
            { name: "small", amount: 0, price: 28 },
            { name: "stand", amount: 0, price: 33 },
            { name: "MAX", amount: 0, price: 38 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Какао",
          size: [
            { name: "small", amount: 0, price: 23 },
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Шоколад",
          size: [
            { name: "small", amount: 0, price: 23 },
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Имбирный Латте",
          size: [
            { name: "small", amount: 0, price: 23 },
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Ореховый BOOM",
          size: [
            { name: "small", amount: 0, price: 23 },
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        }
      ],
      coldMenuItems: [
        {
          name: "Фредо",
          size: [
            { name: "stand", amount: 0, price: 30 },
            { name: "MAX", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Ice Latte",
          size: [
            { name: "stand", amount: 0, price: 25 },
            { name: "MAX", amount: 0, price: 30 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Фраппе",
          size: [
            { name: "stand", amount: 0, price: 35 },
            { name: "MAX", amount: 0, price: 40 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Фруктовый коффе ",
          size: [{ name: "stand", amount: 0, price: 35 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Молочный коктейль",
          size: [
            { name: "stand", amount: 0, price: 28 },
            { name: "MAX", amount: 0, price: 32 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Коктейль 'Орео'",
          size: [
            { name: "stand", amount: 0, price: 30 },
            { name: "MAX", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Лимонады",
          size: [{ name: "stand", amount: 0, price: 25 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Мятная фиерия",
          size: [
            { name: "stand", amount: 0, price: 30 },
            { name: "MAX", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Мохито",
          size: [
            { name: "stand", amount: 0, price: 30 },
            { name: "MAX", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Пина колада",
          size: [
            { name: "stand", amount: 0, price: 35 },
            { name: "MAX", amount: 0, price: 40 }
          ],
          isMax: true,
          isSmall: false
        }
      ],
      teaMenuItems: [
        {
          name: "Имбирный чай",
          size: [{ name: "stand", amount: 0, price: 25 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Цитрусовый чай",
          size: [{ name: "stand", amount: 0, price: 28 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Пряный чай",
          size: [{ name: "stand", amount: 0, price: 25 }],
          isMax: false,
          isSmall: false
        }
      ],
      smousi: [
        {
          name: "Шоколадно-клубничный мафин",
          size: [{ name: "stand", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Мятный",
          size: [{ name: "stand", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Миндально-кокосовый",
          size: [{ name: "stand", amount: 0, price: 42 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Зеленый",
          size: [{ name: "stand", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Ягодный",
          size: [{ name: "stand", amount: 0, price: 32 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Питательный",
          size: [{ name: "stand", amount: 0, price: 35 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Белковый",
          size: [{ name: "stand", amount: 0, price: 55 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Шоколадно-кофейный",
          size: [{ name: "stand", amount: 0, price: 50 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Морковно-банановый",
          size: [{ name: "stand", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        }
      ],
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
