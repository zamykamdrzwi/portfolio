<script setup>
import { ref } from "vue";
import FloorLayout from "@/components/layouts/FloorLayout.vue";
import LettersAnimation from "@/components/layouts/LettersAnimation.vue";

const skills = ref([
  {
    title: 'VUE',
    description: 'Najlepiej programuję we vue 2 oraz vue 3',
    img: '/images/vue_logo.webp',
  },
  {
    title: 'Bootstrap',
    description: 'Najlepiej programuję we vue 2 oraz vue 3',
    img: '/images/bootstrap_logo.webp',
  },
  {
    title: 'Tailwind',
    description: 'Najlepiej programuję we vue 2 oraz vue 3',
    img: '/images/tailwind_logo.webp',
  },
  {
    title: 'Sass',
    description: 'Najlepiej programuję we vue 2 oraz vue 3',
    img: '/images/sass_logo.webp',
  },
  {
    title: 'Docker',
    description: 'Najlepiej programuję we vue 2 oraz vue 3',
    img: '/images/docker_logo.svg',
  },
  {
    title: 'Linux - Ubuntu',
    description: 'Najlepiej programuję we vue 2 oraz vue 3',
    img: '/images/ubuntu_logo.svg',
  },
  {
    title: 'Node-JS',
    description: 'Najlepiej programuję we vue 2 oraz vue 3',
    img: '/images/node-js_logo.svg',
  }
])
</script>

<template>
  <section class="container">
    <div class="container__header">
      <small data-aos="fade-right">Języki programowania, frameworki oraz narzędzia</small>
<!--      <h2 data-aos="fade-right">-->
<!--        <span>Moje umiejętności</span>-->
<!--        <floor-layout />-->
<!--      </h2>-->
      <letters-animation :letters="'Moje umiejętności'"/>
    </div>

    <div class="container__body">
      <div class="container__item" v-for="item in skills" :key="item.name"
           data-aos="zoom-in">
        <div class="container__item-box">
          <img :src="item.img" alt="logo">
          <h3>{{ item.title }}</h3>
        </div>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  background-color: $color-primary;
  padding: 130px 165px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 110px;

    & small {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
    }

    //& h2 {
    //  color: $font-color;
    //  font-size: 46px;
    //  line-height: 56px;
    //  font-weight: 700;
    //}
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    
    &-box {
      display: flex;
      align-items: center;
      gap: 20px;

      & img {
        height: 34px;
      }

      & h3 {
        color: $font-color;
        font-size: 24px;
        font-weight: 700;
      }
    }

    & p {
      width: 250px;
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 28px;
    }
  }
}
</style>