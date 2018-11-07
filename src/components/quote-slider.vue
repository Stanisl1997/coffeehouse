<template>
  <div class="quote-slider w-100">
    <transition-group>
      <blockquote class="blockquote text-center w-100" v-for="(quote) in quoteContent" v-show="quote.isActive" :key="quote.text">
        <p class="mb-0">{{quote.text}}</p>
        <footer class="blockquote-footer">{{quote.author}} <cite title="Source Title">{{quote.source}}</cite></footer>
      </blockquote>
    </transition-group>
    <div class="slider-controls d-flex justify-content-between">
      <a href="#" v-for="(quote,i) in quoteContent" :class="{active : quote.isActive}" @click.prevent="controlsChange(i)" :key="quote.text"></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      randNum: 0,
      quoteContent: [{
          text: "Встал ради чашки кофе, а потом не заметил, как день прошёл. И так каждое утро...",
          author: "Валиуллин Ринат",
          source: "«Где валяются поцелуи»",
          showQuote: true,
          isActive: true
        },
        {
          text: "«Кофе — любимый напиток цивилизованного мира»",
          author: "Томас Джефферсон",
          source: "",
          showQuote: false,
          isActive: false
        },
        {
          text: "«Если это кофе, пожалуйста, принесите мне чаю, а если это чай, пожалуйста, принесите мне кофе»",
          author: "Авраам Линкольн",
          source: "",
          showQuote: false,
          isActive: false
        },
        {
          text: "«Запахло свежемолотыми зёрнами — аромат, отделяющий день от ночи...»",
          author: "Харуки Мураками",
          source: "«Бесцветный Цкуру Тадзаки и годы его странствий»",
          showQuote: false,
          isActive: false
        }
      ],
      quoteCounter:0
    }
  },
  methods: {
    controlsChange(i) {
      this.quoteContent[i].isActive = true;
      for (var j = 0; j < this.quoteContent.length; j++) {
        if (j !== i) {
          this.quoteContent[j].isActive = false;
        }
      }
    },
    changeQuotes() {
      this.quoteContent[this.quoteCounter].isActive = true;
      for (var j = 0; j < this.quoteContent.length; j++) {
        if (j !== this.quoteCounter) {
          this.quoteContent[j].isActive = false;
        }
    }
      (this.quoteCounter === this.quoteContent.length - 1) ? this.quoteCounter = 0 : this.quoteCounter++;
  }
  },
  mounted: function quotesChange() {
    setInterval(()=>{this.changeQuotes()}, 5000)
  }
}

</script>
<style lang="scss">
.quote-slider {
  position: relative;
  padding-top: 300px;
} 

blockquote {
  background-color: rgba($color: #000000, $alpha: 0.5) ;
  position: absolute;
  color:#fff;
  p {
    height: 70px;
  }

  & > footer {
    color:papayawhip !important;
  }
  
}

.slider-controls {
  width: 50%;
  padding-top: 150px;
  margin: 0 auto;

  a {
    width: 8px;
    height: 8px;
    background-color: #000;
    border-radius: 50%;
    transition: background-color 0.5s;
  }

  .active {
    background-color:mintcream;
  }
}

.v-enter-active {
  transition: all 0.6s ease;
}

.v-leave-active {
  transition: all 0.6s;
}

.v-enter {
  opacity: 0;
  transform: translateX(200px);
}

.v-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}


</style>
