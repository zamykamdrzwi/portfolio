<script setup>
import { ref, defineProps } from "vue";
import LettersAnimation from "@/components/layouts/LettersAnimation.vue";

const { skills } = defineProps(["skills"]);
</script>

<template>
  <section class="container">
    <div class="container__header">
      <small data-aos="fade-right">{{ skills.subtitle }}</small>
      <letters-animation :letters="skills.title"/>
    </div>

    <div class="container__body">
      <div class="container__item" v-for="item in skills.items" :key="item.name"
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

  @media(max-width: 1300px) {
    padding: 130px 30px;
  }

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
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px 20px;

    @media(max-width: 1600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 1050px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;

    @media(max-width: 1050px) {
      align-items: center;
    }
    
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