<script setup>
import { ref } from "vue";
import { RouterLink } from 'vue-router';
import HamburgerMenu from "@/components/layouts/HamburgerMenu.vue";

const isHidden = ref(true);
const hamburger = ref(null);

const toggleMenu = () => {
  void hamburger.offsetWidth;
  isHidden.value = !isHidden.value;
};
</script>

<template>
  <section class="header">
    <nav class="header__menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projekty">Projekty</RouterLink>
      <RouterLink to="/doswiadczenie">Doświadczenie</RouterLink>
    </nav>
    <div class="header__layout"></div>
    <div class="header__burger">
      <hamburger-menu @click="toggleMenu"/>
    </div>
    <div :class="[ 'header__phone', { 'show' : !isHidden } ]" ref="hamburger">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projekty">Projekty</RouterLink>
      <RouterLink to="/doswiadczenie">Doświadczenie</RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
  z-index: 999;

  @media(max-width: 830px) {
    justify-content: flex-end;
  }

  &__menu {
    display: flex;
    gap: 20px;
    font-size: 18px;

    @media(max-width: 830px) {
      display: none;
    }

    & a {
      color: $color-tertiary;
      text-decoration: none;
      padding: 5px 10px;
    }

    & a:hover {
      background-color: rgba(0, 0, 0, 0.2);
      text-decoration: underline;
    }
  }

  &__seccond {
    display: flex;
  }

  &__burger {
    display: none;
    margin-right: 18px;

    @media(max-width: 830px) {
      display: flex;
    }
  }

  &__phone {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 60px;
    right: -150px;
    background-color: rgba(0, 0, 0, 0.2);
    transition: right 0.5s ease-in-out;

    & a {
      color: $color-tertiary;
      text-decoration: none;
      padding: 5px 10px;
    }
  }

  &__phone.show {
    right: 9px;
  }
}
</style>