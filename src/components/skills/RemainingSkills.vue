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
      <div class="container__body-item" v-for="item in skills.items" :key="item.title">
        <div class="container__body-box">
          <img :src="item.img" alt="logo">
          <h4>
            {{ item.title }}
          </h4>
        </div>
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
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    &-item {
      width: 400px;
    }

    &-box {
      display: flex;
      align-items: center;
      gap: 10px;

      & img {
        height: 34px;
      }

      & h4 {
        color: $color-tertiary;
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 700;
      }
    }
  }
}
</style>