<script setup>
import { ref, onMounted } from "vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import LettersAnimation from "@/components/layouts/LettersAnimation.vue";

const { settings } = defineProps(["settings"]);

const container = ref(null);

onMounted(() => {
  setBackground();
})

const setBackground = () => {
  container.value.style.backgroundColor = settings.background;
}
</script>

<template>
  <section class="container" ref="container">
    <small data-aos="fade-right">{{ settings.subtitle }}</small>
    <letters-animation :letters="settings.title"/>
    <div class="container__links">
      <a :href="settings.github" target="_blank"
         data-aos="fade-right">
        <img src="../../../public/images/github_loho.webp" alt="logo">
        <span>GitHub</span>
      </a>
      <a :href="settings.link" target="_blank"
         data-aos="fade-right">
        <span>Link do strony</span>
      </a>
    </div>
    <div class="container__content" >
      <div class="container__content-slide" :class="{ 'slider-right' : settings.sliderFirst }" data-aos="fade-left">
        <slider-component :content="settings.content"/>
      </div>
      <div class="container__content-text">
        <div class="container__content-text-title">
          <h3 data-aos="fade-right">
            Na temat aplikacji
          </h3>
          <span>
            <img v-for="item in settings.logo" :key="item" :src="item" alt="logo">
          </span>
        </div>
        <p v-html="settings.paragraph1" data-aos="fade-up"></p>
        <p v-html="settings.paragraph2" data-aos="fade-up"></p>
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

      &-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & h3 {
          color: $font-color;
          font-size: 25px;
          margin-bottom: 35px;
        }

        & span {
          display: flex;
          gap: 15px;

          & img {
            width: 30px;
          }
        }
      }

      & p {
        margin-bottom: 30px;
      }
    }
  }
}
</style>