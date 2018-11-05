<template>
<div class="container-fluid">
  <div class="row d-flex ">
  <div class="accordeon-inner_content col-xl-7 mt-5">
  <button class="btn accordeon" @click.prevent="slideMenu($event)" >Классический кофе</button>
    <ul class="classic-list main-list flex-column justify-content-between">
      <li class="classic-list_element main-list_element d-flex align-items-center justify-content-between" v-for="(item) in classicCoffeItems" :key="item.name">{{item.name}}
        <ul class="price-list d-flex align-items-center justify-content-between" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colorsAddButtons[j]}"  @click='priceIncrease(j,item)'>{{size.name}}</button><span class="price">{{size.price }} грн</span>
                </li>
            </ul>
      </li>
    </ul>
      
  <button class="btn accordeon" @click.prevent ="slideMenu($event)" >Гурман меню</button>
  <ul class="gurman-list main-list  flex-column justify-content-between" >
      <li class="gurman-list_element main-list_element d-flex align-items-center justify-content-between" v-for="(item) in gurmanMenuItems" :key="item.name">{{item.name}}
        <ul class="price-list d-flex align-items-center justify-content-between" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colorsAddButtons[j]}"  @click='priceIncrease(j,item)'>{{size.name}}</button><span class="price">{{size.price }} грн</span>
                 </li>
            </ul>
      </li>
    </ul>
      
  <button class="btn accordeon" @click.prevent ="slideMenu($event)" >Холодные напитки</button>
  <ul class="cold-list main-list  flex-column justify-content-between" >
      <li class="cold-list_element main-list_element d-flex align-items-center justify-content-between" v-for="(item) in coldMenuItems" :key="item.name">{{item.name}}
        <ul class="price-list d-flex align-items-center justify-content-between" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colorsAddButtons[j+1]}" @click='priceIncrease(j,item)'>{{size.name}}</button><span class="price">{{size.price }} грн</span>
                 </li>
            </ul>
      </li>
    </ul>
      
  <button class="btn accordeon " @click.prevent ="slideMenu($event)" >Смузи</button>
  <ul class="smousi-list main-list flex-column  justify-content-between" >
      <li class="smousi-list_element main-list_element d-flex align-items-center justify-content-between" v-for="(item) in smousiMenuItems" :key="item.name">{{item.name}}
        <ul class="price-list" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colorsAddButtons[j+1]}" @click='priceIncrease(j,item)'>{{size.name}}</button><span class="price">{{size.price }} грн</span>
                 </li>
            </ul>
      </li>
    </ul>
    </div>
    <div class="accordeon-inner_cart col-xl-5" >
<h3 class="mt-5">Всего ваш заказ будет стоить : {{totallPrice | currency('₴',0,{ symbolOnLeft: false,spaceBetweenAmountAndSymbol: true })}}</h3>
<h5 class="mt-2">Ваш заказ <i class="fas fa-shopping-cart"></i>: </h5>
      <div class="cart pt-3 ml-auto mr-auto">
        <transition-group tag="ul" class="cart-list" name='items-list'>
          <li v-for="(item,k) in cart" class="cart-list_element pl-2 d-flex align-items-start justify-content-between" :key="item.id">{{item.name}} <span class="description">Размер: {{item.size}}, Цена: {{item.price | currency('₴',0,{ symbolOnLeft: false,spaceBetweenAmountAndSymbol: true })}} </span>
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
      classicCoffeItems: [
        {
          name: "Эспрессо",
          size: [
            { name: "S", amount: 0, price: 13 },
            { name: "M", amount: 0, price: 18 }
          ],
          isMax: false,
          isSmall: true
        },
        {
          name: "Американо",
          size: [
            { name: "S", amount: 0, price: 13 },
            { name: "M", amount: 0, price: 18 },
            { name: "L", amount: 0, price: 23 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Капучино",
          size: [
            { name: "S", amount: 0, price: 18 },
            { name: "M", amount: 0, price: 23 },
            { name: "L", amount: 0, price: 28 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Латте",
          size: [
            { name: "S", amount: 0, price: 18 },
            { name: "M", amount: 0, price: 23 },
            { name: "L", amount: 0, price: 28 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Мокко",
          size: [
            { name: "S", amount: 0, price: 23 },
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Карамель Макиато",
          size: [
            { name: "S", amount: 0, price: 23 },
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        }
      ],
      gurmanMenuItems: [
        {
          name: "Раф",
          size: [
            { name: "S", amount: 0, price: 23 },
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Кедоровый Латте",
          size: [
            { name: "S", amount: 0, price: 28 },
            { name: "M", amount: 0, price: 33 },
            { name: "L", amount: 0, price: 38 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Какао",
          size: [
            { name: "S", amount: 0, price: 23 },
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Шоколад",
          size: [
            { name: "S", amount: 0, price: 23 },
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Имбирный Латте",
          size: [
            { name: "S", amount: 0, price: 23 },
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        },
        {
          name: "Ореховый BOOM",
          size: [
            { name: "S", amount: 0, price: 23 },
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 33 }
          ],
          isMax: true,
          isSmall: true
        }
      ],
      coldMenuItems: [
        {
          name: "Фредо",
          size: [
            { name: "M", amount: 0, price: 30 },
            { name: "L", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Ice Latte",
          size: [
            { name: "M", amount: 0, price: 25 },
            { name: "L", amount: 0, price: 30 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Фраппе",
          size: [
            { name: "M", amount: 0, price: 35 },
            { name: "L", amount: 0, price: 40 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Фруктовый коффе ",
          size: [{ name: "M", amount: 0, price: 35 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Молочный коктейль",
          size: [
            { name: "M", amount: 0, price: 28 },
            { name: "L", amount: 0, price: 32 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Коктейль 'Орео'",
          size: [
            { name: "M", amount: 0, price: 30 },
            { name: "L", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Лимонады",
          size: [{ name: "M", amount: 0, price: 25 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Мятная фиерия",
          size: [
            { name: "M", amount: 0, price: 30 },
            { name: "L", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Мохито",
          size: [
            { name: "M", amount: 0, price: 30 },
            { name: "L", amount: 0, price: 35 }
          ],
          isMax: true,
          isSmall: false
        },
        {
          name: "Пина колада",
          size: [
            { name: "M", amount: 0, price: 35 },
            { name: "L", amount: 0, price: 40 }
          ],
          isMax: true,
          isSmall: false
        }
      ],
      teaMenuItems: [
        {
          name: "Имбирный чай",
          size: [{ name: "M", amount: 0, price: 25 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Цитрусовый чай",
          size: [{ name: "M", amount: 0, price: 28 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Пряный чай",
          size: [{ name: "M", amount: 0, price: 25 }],
          isMax: false,
          isSmall: false
        }
      ],
      smousiMenuItems: [
        {
          name: "Шоколадно-клубничный мафин",
          size: [{ name: "M", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Мятный",
          size: [{ name: "M", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Миндально-кокосовый",
          size: [{ name: "M", amount: 0, price: 42 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Зеленый",
          size: [{ name: "M", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Ягодный",
          size: [{ name: "M", amount: 0, price: 32 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Питательный",
          size: [{ name: "M", amount: 0, price: 35 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Белковый",
          size: [{ name: "M", amount: 0, price: 55 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Шоколадно-кофейный",
          size: [{ name: "M", amount: 0, price: 50 }],
          isMax: false,
          isSmall: false
        },
        {
          name: "Морковно-банановый",
          size: [{ name: "M", amount: 0, price: 38 }],
          isMax: false,
          isSmall: false
        }
      ],
      colorsAddButtons: ["#1B7EAF", "#415AAC", "#063858"],
      bgColorsListElements: [
        "#f6cd61",
        "#a8e6cf",
        "#dcedc1",
        "#e3f0ff",
        "#edc951",
        "#ffd3b6",
        "#ffaaa5",
        "#fe8a71",
        "#eb6841",
        "#ff8b94",
        "#d2e7ff"
      ],
      totallPrice: 0,
      cart: []
    };
  },
  methods: {
    slideMenu(e) {
      let toggleButton = e.target;
      let slideList = toggleButton.nextElementSibling;
      if (toggleButton.classList.contains("accordeon")) {
        if (slideList.style.maxHeight) {
          slideList.style.maxHeight = null;
        } else {
          slideList.style.maxHeight = slideList.scrollHeight + "px";
        }
      }
    },
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
<style scoped lang="scss">
ul {
  padding-left: 0;
}
.row {
  padding-bottom: calc(100vh - 510px);
}
.accordeon-inner_content {
  width: 650px;
  height: 100%;

  .accordeon {
    width: 100%;
    transition: all 0.4s ease-in-out;
    border-radius: 3px;
    font-size: 18px;
    margin-top: 5px;
    opacity: 0.7;
    font-weight: bold;
    &:hover {
      transition: all 0.4s;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
      background-color: #83d0c9;
      //background:linear-gradient(135deg, #61c698 0%,#5ab59e 100%);
      opacity: 1;
    }
    &:focus {
      box-shadow: none !important;
    }
  }
}
.main-list {
  margin-top: 16px;
  max-height: 0px;
  transition: max-height 0.5s ease-out;
  margin: 0px;
  overflow: hidden;
}
.main-list_element {
  margin: 5px 0px;
  border-radius: 3px;
  padding: 5px 5px;
  font-size: 15px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.price-list {
  width: 400px;
  .price-list_element {
    width: 92px;
    padding-right: 5px;
  }
  .price-list_element > button {
    padding: 0px;
    font-size: 16px;
    font-weight: bold;
    border-color: transparent;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .price {
    font-size: 17px;
    margin-left: 5px;
  }
}
.maxSizeMiss {
  padding-right: 155px;
}
.smallSizeMiss {
  width: 241px;
}

.fa-shopping-cart {
  position: static;
  font-size: 18px;
}

.accordeon-inner_cart {
  position: sticky;
  top: 10px;
  align-self: flex-start;
}

.cart {
  background-color:rgba($color: #fff, $alpha: 0.5);
  border-radius: 4px;

  ul {
    padding-left: 0;
    margin-bottom: 0;
    min-height: 250px;
  }
  .order {
    width: 150px;
  }
  .cart-list_element {
    height: 30px;
    font-size: 16px;
    .fa-times-circle {
      color: #ff6f69;
      position: static;
      font-size: 25px;
      margin-left: -5px;
      margin-top: 1px;
      transition: all 0.6s;
      &:hover {
        font-size: 27px;
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
}

.description {
  width: 40%;
  text-align: center;
}

.items-list-enter-active {
  transition: all 0.4s ease-in;
}
.items-list-leave-active {
  transition: all 0.4s ease-out;
  position: absolute;
}
.items-list-enter {
  opacity: 0;
  transform: translateY(200px);
}
.items-list-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
.items-list-move {
  transition: transform 0.3s;
}
</style>
