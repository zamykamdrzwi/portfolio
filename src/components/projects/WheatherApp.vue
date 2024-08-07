<script setup>
import { ref } from "vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import LettersAnimation from "@/components/layouts/LettersAnimation.vue";

const { settings } = defineProps(["settings"]);

const content = ref([
  {
    img: '/images/wheatherapp_1.webp',
    content: 'Dzięki wykorzystaniu biblioteki highcharts dodałem do aplikacji zaawansowane wykresy pokazujące dokładne dane pogodowe rozłożone w czasie.'
  },
  {
    img: '/images/wheatherapp_2.webp',
    content: 'Można dokładnie sprawdzić każdy parametr pogodowy taki jak temperatura, kierunek wiatru czy ciśnienie.'
  },
  {
    img: '/images/wheatherapp_3.webp',
    content: 'Mamy dostęp do aktualnej pogody w każdym miejscu i określonym czasie.'
  },
  {
    img: '/images/wheatherapp_4.webp',
    content: 'Użyłem google maps API do dodania interaktywnej mapy, gdzie po naciśnięciu w wybrane miejsce uzyskamy informacje o pogodzie w wybranej miejscowości.'
  },
])
</script>

<template>
  <section class="container">
    <small data-aos="fade-right">Aplikacja pokazująca relną prognozę pogody w wybranym miejscu</small>
    <letters-animation :letters="'WeatherApp'"/>
    <div class="container__links">
      <a href="https://github.com/zamykamdrzwi/weatherapp-vue" target="_blank"
         data-aos="fade-right">
        <img src="../../../public/images/github_loho.webp" alt="logo">
        <span>GitHub</span>
      </a>
      <a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank"
         data-aos="fade-right">
        <span>Link do strony</span>
      </a>
    </div>
    <div class="container__content" >
      <div class="container__content-slide" :class="{ 'slider-right' : settings.sliderFirst }" data-aos="fade-left">
        <slider-component :content="content"/>
      </div>
      <div class="container__content-text">
        <h3 data-aos="fade-right">
          Na temat aplikacji
        </h3>
        <p data-aos="fade-up">
          <span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">WeatherApp</a></span> ma za zadanie pokazywać aktualną, jak i przyszłą
          pogodę. Aby tego dokonać, użyłem <span class="bold"><a href="https://openweathermap.org/" target="_blank">OpenWeather API</a></span>, który dostarcza mi dane pogodowe
          w formacie json, które przesłałem na stronę. Aby poprawić i przyspieszyć wyszukiwanie pogody w konkretnych miejscowościach wykorzystałem
          <span class="bold"><a href="https://developers.google.com/maps/documentation/javascript?hl=pl" target="_blank">google maps API</a></span>
          do wyświetlenia interaktywnej mapy, na której po kliknięciu pokazuje nam informacje o pogodzie w wybranym miejscu. Wykorzystałem również bibliotekę
          <span class="bold"><a href="https://www.highcharts.com/" target="_blank">Highcharts</a></span> do pokazania danych pogodowych w bardziej czytelny sposób.
        </p>
        <p data-aos="fade-up">
          Aplikacja jest napisana we <span class="bold">VUE 2</span> w <span class="bold">Java Script</span>, gdzie do stylizacji użyłem
          <span class="bold"><a href="https://getbootstrap.com/" target="_blank">Bootrstapa</a></span>. W aplikacji wykorzystałem również <span class="bold">vue router</span> oraz <span class="bold">store</span> do
          zarządzania danymi z API. Zachęcam do sprawdzenia kodu na moim <span class="bold"><a href="https://github.com/zamykamdrzwi/weatherapp-vue/tree/master" target="_blank">GitHub</a></span>
          oraz do odwiedzenia strony <span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">tutaj</a></span>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: $color-primary;
  padding: 130px 165px;

  @media(max-width: 1050px) {
    padding: 130px 30px;
  }

  & small {
    color: $color-tertiary;
    font-size: 16px;
    letter-spacing: 1px;
  }

  &__links {
    display: flex;
    gap: 50px;
    margin-top: 40px;

    & a {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 28px;
      font-weight: 700;
    }

    & a:hover {
      text-decoration: underline;
    }

    & img {
      height: 34px;
    }
  }

  &__content {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 1680px) {
      flex-direction: column;
    }

    &-slide {
      width: 55%;

      @media(max-width: 1680px) {
        width: 100%;
      }
    }

    &-slide.slider-right {
      order: 2;
    }

    &-text {
      width: 45%;
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 28px;
      margin-right: 30px;

      @media(max-width: 1680px) {
        width: 100%;
      }

      & h3 {
        color: $font-color;
        font-size: 25px;
        margin-bottom: 45px;
      }

      & p {
        margin-bottom: 30px;
      }
    }
  }
}

.bold {
  font-weight: 700;

  & a {
    text-decoration: none;
    color: $color-tertiary;
  }

  & a:hover {
    text-decoration: underline;
  }
}
</style>