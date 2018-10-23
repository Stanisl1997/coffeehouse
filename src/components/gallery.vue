<template>
  <div class="gallery-inner">
    <h3 class="gallery-title text-center">Галерея</h3>
    <div class="card-deck">
    	<div class="col-xl-4" v-for="(card,i) in cards">
      <div class="card mt-4 text-center">
        <img class="card-img-top" :src="images[i]" height="300px" width="auto" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{card.title}}</h5>
          <p class="card-text">{{card.text}}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"
import card5 from "../assets/card5.jpg"
import card6 from "../assets/card6.jpg"
import card7 from "../assets/card7.jpg"
import card8 from "../assets/card8.jpg"
import card9 from "../assets/card9.jpg"

export default {
	data(){
		return {
			cards: [{title:'Cвойства Кофе' , text:"Считается, что о свойствах кофе впервые узнал эфиопский пастух Калди, который заметил, что его козы становятся энергичными после того, как употребляют ягоды с незнакомого дерева"},
			{title:'Немного Истории' , text:"Изначально люди употребляли кофейные ягоды в пищу, а уже потом из него стали готовить напиток."},
			{title:'Откуда Привозят Кофе?' , text:"Весь кофе в мире растет в довольно узком коридоре между тропиком рака и тропиком козерога."},
			{title:'Запрет На Кофе?' , text:"На протяжении своей истории кофейни неоднократно запрещали власти различных стран. Наиболее известен запрет в Мекке в 1511 году и в Англии в 1675 году. Как правило, власти считали кофейни источником революционных мыслей и местом сбора заговорщиков."},
			{title:'Решение Проблем' , text:"Бостонское чаепитие 1773 года и Великая французская революция 1789 года также частично планировались в кофейнях."},
			{title:'Немного Статистики' , text:"Каждый год в мире выпивается более 500 млрд. чашек кофе. Более половины – за завтраком (или вместо?)."},
			{title:'Потребление Кофе' , text:"С точки зрения потребления кофе на душу населения в год лидируют страны Северной Европы – Финляндия (12 кг), Норвегия (9,9 кг), Исландия (9 кг)."},
			{title:'Кофе с Молоком' , text:"Добавлять молоко в кофе стали в 17 веке. Такой рецепт выписывал своим пациентам один французский врач."},
			{title:'Обжарка' , text:"Кофе светлой обжарки содержит больше кофеина, чем темной"}],
      images : [card1,card2,card3,card4,card5,card6,card7,card8,card9]
		}
	}
}

</script>
<style>
.gallery-title {
  margin: 30px 0px 0px 0px;
}

</style>
