<template>
  <div class="gallery-inner">
    <h3 class="gallery-title text-center">Галерея</h3>
    <div class="card-columns">
      <div class="card mt-4 text-center" v-for="(card,i) in images" :key="card.title">
        <img class="card-img-top" :src="images[i]" height="auto" width="auto" alt="Card image cap">
       <!-- <div class="card-body">
          <h5 class="card-title">{{card.title}}</h5>
          <p class="card-text">{{card.text}}</p>
        </div> -->
        </div>
      </div>
  </div>
</template>
<script>
import card1 from "../assets/item1.jpg";
import card2 from "../assets/item2.jpg";
import card3 from "../assets/item3.jpg";
import card4 from "../assets/item4.jpg";
import card5 from "../assets/item5.jpg";
import card6 from "../assets/item6.jpg";
import card7 from "../assets/item7.jpg";
import card8 from "../assets/item8.jpg";
import card9 from "../assets/item9.jpg";
import card10 from "../assets/item10.jpg";
import card11 from "../assets/item11.jpg";
import card12 from "../assets/item12.jpg";
import card13 from "../assets/item13.jpg";
import card14 from "../assets/item14.jpg";
import card15 from "../assets/item15.jpg";
import card16 from "../assets/item16.jpg";
import card17 from "../assets/item17.jpg";
import card18 from "../assets/item18.jpg";
import card19 from "../assets/item19.jpg";
import card20 from "../assets/item20.jpg";
import card21 from "../assets/item21.jpg";
import card22 from "../assets/item22.jpg";
import card23 from "../assets/item23.jpg";
import card24 from "../assets/item24.jpg";
import card25 from "../assets/item25.jpg";
import card26 from "../assets/item26.jpg";
import card27 from "../assets/item27.jpg";
import card28 from "../assets/item28.jpg";
import card29 from "../assets/item29.jpg";
import card30 from "../assets/item30.jpg";
import card31 from "../assets/item31.jpg";
import card32 from "../assets/item32.jpg";
import card33 from "../assets/item33.jpg";
import card34 from "../assets/item34.jpg";

export default {
  data() {
    return {
      
      images: [
        card1,
        card2,
        card3,
        card4,
        card5,
        card6,
        card7,
        card8,
        card9,
        card10,
        card11,
        card12,
        card13,
        card14,
        card15,
        card16,
        card17,
        card18,
        card19,
        card20,
        card21,
        card22,
        card23,
        card24,
        card25,
        card26,
        card27,
        card28,
        card29,
        card30,
        card31,
        card32,
        card33,
        card34
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.gallery-inner {
  overflow-x: hidden !important;
}
.gallery-title {
  margin: 30px 0px 0px 0px;
}
.card-columns {
  width: 95%;
  margin: 0 auto;
}
.card {
  padding: 0px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    box-shadow: 0 18px 27px rgba(0, 0, 0, 0.5);
  }
}
</style>
