<script setup>
import { ref } from "vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";

const content = ref([
  '/images/wheatherapp_1.webp',
  '/images/wheatherapp_2.webp',
  '/images/wheatherapp_3.webp',
  '/images/wheatherapp_4.webp'
])
</script>

<template>
  <section class="container">
    <small data-aos="fade-right">Aplikacja pokazująca relną prognozę pogody w wybranym miejscu</small>
    <letters-animation :letters="'WheatherApp'"/>
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
    <div>
      <slider-component :content="content"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: $color-primary;
  padding: 130px 165px;

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
}
</style>