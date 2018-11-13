<template>
  <div class="reviews-inner">
    <h1 class="reviews-title text-center">{{mainTitle}}</h1>
    <div class="reviews-inner_content d-flex justify-content-between">
      <!--<form @click.prevent class="comment-form col-xl-6  ml-auto">                        Wont work without PHP or other backend
        <div class="form-group">
          <div class="col">
             <label for="form-control">Имя</label>
            <input type="text" class="form-control" placeholder="Имя">
          </div>
        </div>
        <div class="form-group col">
          <label for="form-control">Комментарий</label>
          <textarea class="form-control " rows="7" placeholder="Лучшее кафе во всем городе"></textarea>
        </div>
        <div class="button text-right mr-3">
          <button @click.prevent type="submit" class="btn btn-primary ">Отправить</button>
        </div>
      </form> -->
      <GmapMap
  :center="{lat:48.739268, lng:37.588998}"
  :zoom="17"
  map-type-id="terrain"
  style="width: 600px; height: 400px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
      <div class="contacts col-xl-6 ml-auto">
        <h3 class="contacts-title">{{contactsTitle}}</h3>
        <div class="icons d-flex justify-content-between">
            <a href="https://www.instagram.com/cofe_one/?hl=ru" target="_blank" class=" d-flex align-items-center " v-for="(item,i) in socialIcons" :key='item.name'>
              <i class="fab" :class='socialIcons[i].icon'></i>
              <p class="ml-2">{{item.name}}</p>
            </a>
        </div>
        <ul class="contact-list mt-2">
          <li class="contact-list_element d-flex justify-content-start align-items-center mt-2" v-for="(contact,i) in contacts" :key="contact.name"><a :href="contact.link" target="_blank"><i class="fas pr-2" :class='contactIcons[i]'></i>{{contact.name}} : {{contact.value}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainTitle: "Контакты",
      contactsTitle: "Как нас найти?",
      markers: [{ position: { lat: 48.739268, lng: 37.588998 } }],
      contacts: [
        {
          name: "Адрес",
          value: "84300, Краматорск, Улица Василия Стуса, 44",
          link:
            "https://www.google.cz/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8F+%D0%A1%D1%82%D1%83%D1%81%D0%B0,+44,+%D0%9A%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%BE%D1%80%D1%81%D1%8C%D0%BA,+%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+84300/@48.7393003,37.5867212,17z/data=!3m1!4b1!4m5!3m4!1s0x40df971caf802b47:0x28cd9c1770d5b012!8m2!3d48.7393003!4d37.5889099"
        },
        { name: "Телефон", value: "+380(50)947-75-06" },
        { name: "Електронная почта", value: "lenf240576@ukr.net" },
        {
          name: "Граффик работы",
          value: "Понедельник - Воскресенье с 9:00 до 22:00"
        }
      ],
      contactIcons: [
        "fa-map-marked-alt",
        "fa-phone-square",
        "fa-envelope",
        "fas fa-business-time"
      ],
      socialIcons: [{ name: "Сofe_one", icon: " fa-instagram" }]
    };
  }
};
</script>
<style lang="scss">
@import "./../sass/reviews/reviews.scss";
@import "./../sass/global/adaptive.scss";
</style>
