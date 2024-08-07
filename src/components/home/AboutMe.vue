<script setup>
import { RouterLink } from 'vue-router';
import LettersAnimation from "@/components/layouts/LettersAnimation.vue";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
</script>

<template>
  <section class="container">
    <div class="container__header">
      <small data-aos="fade-right">Trochę więcej informacji na mój temat</small>
      <letters-animation :letters="'Kim jestem?'"/>
    </div>
    <div class="container__content">
      <p data-aos="fade-up">
        Nazywam się <span class="bold">Rafał Dawidczyk</span> i jestem początkującym programistą. Mam już za sobą pierwsze doświadczenie w pracy jako programista,
        gdyż byłem na stażu (więcej informacji na ten temat <span class="bold"><router-link to="/doswiadczenie">tutaj</router-link></span>).
        Zrobiłem kilka własnych projektów, można je zobaczyć <span class="bold"><router-link to="/projekty">tutaj</router-link></span> bądź
        bezpośrednio na moim <span class="bold"><a href="https://github.com/zamykamdrzwi">GitHub</a></span>.
      </p>
      <p data-aos="fade-up">
        Obecnie szukam pracy jako <span class="bold">junior frontend developer</span>. Jeżeli jesteś zainteresowany podjęciem ze mną współpracy, to zachęcam do kontaktu ze mną 
        <span class="bold"><a href="/#contact">tutaj</a></span>.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  background-color: $color-primary;
  padding: 130px 165px;
  //width: 100%;

  @media(max-width: 1300px) {
    padding: 130px 30px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 110px;

    & small {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }

  &__content {

    & p {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 28px;
      margin-bottom: 30px;
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