<template>
  <div class="reviews-inner">
    <h1 class="reviews-title text-center">{{mainTitle}}</h1>
    <div class="reviews-inner_content d-flex justify-content-between">
      <form @click.prevent class="comment-form col-xl-6  ml-auto">
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
      </form>
      <div class="contacts col-xl-5 mr-auto">
        <h3>{{contactsTitle}}</h3>
        <ul class="contact-list mt-5">
          <li class="contact-list_element d-flex justify-content-start align-items-center mt-2" v-for="(contact,i) in contacts" :key="contact.name"><a :href="contact.link" target="_blank"><i class="fas pr-2" :class='icons[i]'></i>{{contact.name}} : {{contact.value}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainTitle: "Контакты и Отзывы",
      contactsTitle: "Как нас найти?",
      contacts: [
        {
          name: "Адрес",
          value: "84300, Краматорск, Улица Василия Стуса, 44",
          link:
            "https://www.google.cz/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8F+%D0%A1%D1%82%D1%83%D1%81%D0%B0,+44,+%D0%9A%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%BE%D1%80%D1%81%D1%8C%D0%BA,+%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+84300/@48.7393003,37.5867212,17z/data=!3m1!4b1!4m5!3m4!1s0x40df971caf802b47:0x28cd9c1770d5b012!8m2!3d48.7393003!4d37.5889099"
        },
        { name: "Телефон", value: "+380(50)111-111-111" },
        { name: "Електронная почта", value: "example@gmail.com" }
      ],
      icons: ["fa-map-marked-alt", "fa-phone-square", "fa-envelope"]
    };
  }
};
</script>
<style lang="scss">
.reviews-inner {
  height: 85%;
}
.reviews-inner_content {
  padding-top: 100px;
  background: url("../assets/contact.jpg") no-repeat;
  background-size: cover;
  height: 90%;

  ul {
    padding: 0;
    margin: 0;
  }

  .contact-list_element {
    margin-bottom: 0;
    padding-bottom: 0;
    height: 30px;
    line-height: 1;
    font-size: 17px;

    i {
      position: static;
    }
  }
}

.reviews-title {
  margin: 20px 0px;
}

.comment-form {
  button {
    background-color: #005b96;
    border: 0px;

    &:focus {
      outline: none !important;
      border: 0px;
      box-shadow: none !important;
    }
  }
}
</style>
