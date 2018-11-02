<template>
  <div class="accordion-inner">
  <button class="btn btn-primary accordeon">Section1</button>
    <ul class="classic-list main-list d-flex flex-column justify-content-between">
      <li class="classic-list_element d-flex align-items-center justify-content-between" v-for="(item) in classicCoffeItems" :key="item.name">{{item.name}}
        <ul class="price-list d-flex align-items-center justify-content-between" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colors[j]}">{{size.name}}</button><span class="price">{{size.price | currency('₴',0,{ symbolOnLeft: false })}}</span></li>
            </ul>
      </li>
    </ul>
  <button class="btn btn-success accordeon">Section2</button>
  <ul class="gurman-list main-list d-flex flex-column justify-content-between">
      <li class="gurman-list_element d-flex align-items-center justify-content-between" v-for="(item) in gurmanMenuItems" :key="item.name">{{item.name}}
        <ul class="price-list d-flex align-items-center justify-content-between" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colors[j]}">{{size.name}}</button><span class="price">{{size.price | currency('₴',0,{ symbolOnLeft: false })}}</span></li>
            </ul>
      </li>
    </ul>
  <button class="btn btn-warning accordeon">Section3</button>
  <ul class="cold-list main-list d-flex flex-column justify-content-between">
      <li class="cold-list_element d-flex align-items-center justify-content-between" v-for="(item) in coldMenuItems" :key="item.name">{{item.name}}
        <ul class="price-list d-flex align-items-center justify-content-between" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colors[j+1]}">{{size.name}}</button><span class="price">{{size.price | currency('₴',0,{ symbolOnLeft: false })}}</span></li>
            </ul>
      </li>
    </ul>
  <button class="btn btn-danger accordeon ">Section4</button>
  <ul class="smousi-list main-list d-flex flex-column  justify-content-between">
      <li class="smousi-list_element d-flex align-items-center justify-content-between" v-for="(item) in smousiMenuItems" :key="item.name">{{item.name}}
        <ul class="price-list" :class="{maxSizeMiss : !item.isMax,smallSizeMiss : !item.isSmall}">
              <li class="price-list_element" v-for="(size,j) in item.size" :key="size.name">
                <button class="btn btn-success" :style="{backgroundColor:colors[j+1]}">{{size.name}}</button><span class="price">{{size.price | currency('₴',0,{ symbolOnLeft: false })}}</span></li>
            </ul>
      </li>
    </ul>
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
      smousiMenuItems: [
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
      colors: ["#1B7EAF", "#415AAC", "#063858"]
    };
  }
};
</script>
<style lang="scss">
ul {
  padding-left: 0;
}
.accordion-inner {
  width: 600px;

  .accordeon {
    width: 100%;
  }
  .main-list {
    margin-top: 16px;
  }
  .price-list {
    width: 400px;

    .price-list_element > button {
      padding: 0px;
      font-size: 15px;
      font-weight: normal;
      border-color: transparent;
    }

    .price {
      margin-left: 10px;
      font-size: 20px;
    }
  }
  .maxSizeMiss{
    padding-right: 150px;
  }
  .smallSizeMiss{
    width: 241px;
  }
} 
</style>
