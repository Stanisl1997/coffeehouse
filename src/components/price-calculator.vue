<template>
  <div class="calculator-inner">
    <h1 class="calculator-inner_title text-center">{{calcTitle}}</h1>
    <div class="calculator-inner_content ">
      <div class="calculator-inner_content_lists d-flex justify-content-between">
        <div class="drinks-calculator d-flex">
          <ul class="drink-list d-flex flex-column justify-content-between">
            <li class="drink-list_element" v-for="drink in drinks">{{drink.name}} </li>
          </ul>
          <ul class="price-list d-flex flex-column justify-content-between">
            <li class="price-list_element d-flex justify-content-between align-items-center" v-for="(drink,i) in drinks">{{drink.price}} грн
              <button @click='amountIncrease("drink",drink,i)' class="pl-2"><i class="fas fa-plus-circle"></i></button>
            </li>
          </ul>
        </div>
        <div class="food-calculator d-flex">
          <ul class="food-list">
            <li class="food-list_element" v-for="food in foods">{{food.name}} </li>
          </ul>
          <ul class="price-list">
            <li class="price-list_element d-flex justify-content-between" v-for="(food,i) in foods">{{food.price}} грн
              <button @click='amountIncrease("food",food,i)' class="pl-2"><i class="fas fa-plus-circle"></i></button>
            </li>
          </ul>
        </div>
      </div>
      <h3 class="totall"> Всего : {{totalAmount}} грн</h3>
      <div class="cart d-flex align-items-end">
        <h4 class="order">Ваш заказ:</h4>
        <transition-group tag="ul" class="cart-list d-flex flex-wrap" name='items-list'>
          <li v-for="(item,i) in cart" class="cart-list_element pl-2 d-flex align-items-start justify-content-between" :key="item.id">{{item.name}}
            <button class="pl-2 decrease"><i @click='deleteFromCart(i,item)' class="fas fa-times-circle"></i></button>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calcTitle: "Сколько будет стоить ваш заказ?",
      drinks: [{ name: 'Капучино', price: 20, amount: 0 },
        { name: 'Американо', price: 15, amount: 0 },
        { name: 'Латте', price: 25, amount: 0 },
        { name: 'Лемонад', price: 23, amount: 0 }
      ],
      foods: [{ name: 'Яблочный пирог', price: 20, amount: 0 },
        { name: 'Джелато ', price: 15, amount: 0 },
        { name: 'Моти с мороженым', price: 25, amount: 0 },
        { name: 'Кнафе ', price: 25, amount: 0 }
      ],
      totalAmount: 0,
      cart: []
    }
  },
  methods: {
    amountIncrease(kind, item, i) {
      var cart = this.cart;
      var itemCart = {
        name: item.name,
        setId() {
          itemCart.id = cart.length + 1;
        },
        price: item.price
      }
      switch (kind) {
        case 'food':
          {
            itemCart.setId();
            this.cart.push(itemCart);
            this.foods[i].amount++;
            this.totalAmount += this.foods[i].price;
            break;
          }
        case 'drink':
          {
            itemCart.setId();
            this.cart.push(itemCart);
            this.drinks[i].amount++;
            this.totalAmount += this.drinks[i].price;
            break;

          }
      }
    },
    deleteFromCart(i, item) {
      this.totalAmount -= this.cart[i].price;
      this.cart.splice(i, 1);


    }
  }
}

</script>
<style lang="scss">
.calculator-inner_title {
  padding: 20px 0px;
  background-color: #f8f8fa;
  margin-bottom: 0;
}
.calculator-inner{
   background: url('../assets/bg5.jpg') no-repeat;
  background-position: center center;
  background-size: cover;
  height: 88%;

}
.calculator-inner_content {
  height: 87%;
  width: 100%;
 background-color: rgba(0,0,0,0.6);
   color: #fffef9;


  .totall {
    margin: 50px auto;
    width: 300px;
  }
}

.calculator-inner_content_lists {
  width: 900px;
  font-size: 23px;
  margin: 0 auto;
  padding-top: 95px;
	color: #fffef9;
  i {
    position: static;
    font-size: 18px;
    transition: all 0.3s;

    &:hover {
      font-size: 20px;
      color:#008744 ;
    }
  }

  .fa-plus-circle {
    color: #88d8b0;
  }

  .price-list_element {
    height: 34px;
    width: 110px;


    button {
      background-color: transparent;
      border: 0px;
      outline: none;
      cursor: pointer;
    }
  }
}

.cart {
  margin-left: 350px;
  height: 20px;
  color:#fffef9;
  width: 800px;


  h4,
  p {
    padding-bottom: 0px;
    margin-bottom: 0;
    height: auto;
  }

  p {
    font-size: 18px;
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;
  }
  .order{
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
    transition: all .6s ease;
  }

  .items-list-leave-active {
    transition: all .6s;
    position: absolute;
  }

  .items-list-enter {
    opacity: 0;
    transform: translateX(100px)
  }

  .items-list-leave-to {
    opacity: 0;
  }

  .items-list-move {
    transition: transform 0.5s;
  }
}

</style>
