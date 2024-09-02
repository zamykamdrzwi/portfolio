<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from 'vue-router';
import HamburgerMenu from "@/components/layouts/HamburgerMenu.vue";

const isHidden = ref(true);
const hamburger = ref(null);
const pcmenu = ref(null);

onMounted(() => {
  scroll();
});

const toggleMenu = () => {
  void hamburger.offsetWidth;
  isHidden.value = !isHidden.value;
};

const scroll = () => {
  const triggerPoint = 280;

  window.addEventListener("scroll", () => {
    if(window.scrollY >= triggerPoint && isHidden.value) {
      pcmenu.value.classList.remove("add-bg");
    } else {
      pcmenu.value.classList.add("add-bg");
    }
  });
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
</script>

<template>
  <section class="header">
    <nav class="header__menu">
      <RouterLink to="/" @click="scrollToTop">Home</RouterLink>
      <RouterLink to="/moje-umiejetnosci" @click="scrollToTop">Moje Umiejętności</RouterLink>
      <RouterLink to="/projekty" @click="scrollToTop">Projekty</RouterLink>
<!--      <RouterLink to="/doswiadczenie" @click="scrollToTop">Doświadczenie</RouterLink>-->
    </nav>
    <div class="header__layout add-bg" ref="pcmenu"></div>
    <div class="header__burger">
      <hamburger-menu @click="toggleMenu"/>
    </div>
    <div :class="[ 'header__phone', { 'show' : !isHidden } ]" ref="hamburger">
      <RouterLink to="/" @click="scrollToTop">Home</RouterLink>
      <RouterLink to="/moje-umiejetnosci" @click="scrollToTop">Moje Umiejętności</RouterLink>
      <RouterLink to="/projekty" @click="scrollToTop">Projekty</RouterLink>
<!--      <RouterLink to="/doswiadczenie" @click="scrollToTop">Doświadczenie</RouterLink>-->
    </div>
  </section>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 999;

  @media(max-width: 830px) {
    justify-content: flex-end;
  }

  &__menu {
    display: flex;
    gap: 20px;
    font-size: 18px;
    padding-top: 15px;

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
    margin-top: 23px;
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
    right: -190px;
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

  &__layout {
    position: fixed;
    display: flex;
    width: 100%;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    transition: height 0.5s ease-out;

    @media(max-width: 830px) {
      display: none;
    }
  }
}

.add-bg {
  height: 0px;
}
</style>