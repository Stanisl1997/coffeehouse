<template>
  <div class="calculator-inner">
    <h1 class="calculator-inner_title text-center">{{calcTitle}}</h1>
    <div class="calculator-inner_content">
      <div class="calculator-inner_content__list">
        <ul class="menu-list d-flex flex-column flex-wrap pt-4 justify-content-between ml-auto mr-auto">
          <li class="menu-list_element d-flex justify-content-between align-items-center" v-for="(item,i,key) in items">
            {{item.name}}
            <ul class="price-list d-flex align-items-center justify-content-between" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size">
                <button class="btn btn-success" :style="{backgroundColor:colors[j]}" @click='priceIncrease(j,item,size)'>{{size.name}}</button><span class="price">{{size.price | currency('₴',0,{ symbolOnLeft: false })}}</span></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="cart pt-3 ml-auto mr-auto">
        <h3>Всего ваш заказ будет стоить : {{totallPrice | currency('₴',0,{ symbolOnLeft: false,spaceBetweenAmountAndSymbol: true })}}</h3>
        <h5>Ваш заказ <i class="fas fa-shopping-cart"></i>: </h5>
        <transition-group tag="ul" class="cart-list d-flex flex-wrap" name='items-list'>
          <li v-for="(item,k) in cart" class="cart-list_element pl-2 d-flex align-items-start justify-content-between" :key="item.name">{{item.name}}({{item.size}})
            <button class="pl-2 decrease"><i @click='deleteFromCart(k,item)' class="fas fa-times-circle"></i></button>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calcTitle: "Сколько будет стоить ваш заказ?",
      items: [
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
        },
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
        },
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
        },
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
        },
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
    priceIncrease(j, item, size) {
      this.cartPushItems(j, item, size);
      item.size[j].amount++;
      this.totallPrice =
        this.totallPrice + item.size[j].price * item.size[j].amount;
    },

    cartPushItems(j, item, size) {
      let itemCart = {
        name: item.name,
        size: item.size[j].name,
        price: item.size[j].price
      };
      this.cart.push(itemCart);
    },
    deleteFromCart(k, item) {
      this.totallPrice -= this.cart[k].price;
      this.cart.splice(k, 1);
    }
  }
};
</script>
<style lang="scss">
.calculator-inner {
  background: url("../assets/bg5.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  height: 88%;

  .calculator-inner_title {
    padding: 20px 0px;
    background-color: #f8f8fa;
    margin-bottom: 0;
  }

  .calculator-inner_content {
    height: 87%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fffef9;

    .calculator-inner_content__list {
      .price-list {
        padding-left: 15px;
      }

      .menu-list {
        height: 385px;
        width: 100%;
        padding-left: 0;
        padding-left: 50px;

        .btn-success {
          padding: 0;
          border-color: transparent;

          &:focus {
            border-color: transparent;
            outline: none !important;
            box-shadow: none !important;
          }

          &:hover {
            background-color: #4fa640 !important;
          }
        }

        .price-list {
          margin-right: 60px;
          height: 30px;
          width: 300px;

          .price {
            font-size: 20px;
            margin-right: 5px;
            margin-left: 5px;
          }
        }

        .maxSizeMiss {
          padding-right: 89px;
        }

        .smallSizeMiss {
          width: 200px;
        }
      }
    }

    .cart {
      width: 900px;

      i {
        position: static;
        font-size: 18px;
      }

      ul {
        padding-left: 0;
        margin-bottom: 0;
      }

      .order {
        width: 150px;
      }

      .cart-list_element {
        height: 25px;

        .fa-times-circle {
          color: #ff6f69;
        }

        i {
          position: static;
          font-size: 18px;
          margin-left: -5px;
          margin-top: 1px;
          transition: all 0.6s;

          &:hover {
            font-size: 20px;
            color: #cc2a36;
          }
        }

        button {
          border: 0px;
          outline: none;
          cursor: pointer;
          background-color: transparent;
          padding: 0;
          margin: 0;
        }
      }

      .items-list-enter-active {
        transition: all 0.6s ease;
      }

      .items-list-leave-active {
        transition: all 0.6s;
        position: absolute;
      }

      .items-list-enter {
        opacity: 0;
        transform: translateX(100px);
      }

      .items-list-leave-to {
        opacity: 0;
      }

      .items-list-move {
        transition: transform 0.5s;
      }
    }
  }
}
</style>
