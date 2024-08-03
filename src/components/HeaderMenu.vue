<script setup>
import { ref } from "vue";
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="header">
    <nav class="header__menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projekty</RouterLink>
      <RouterLink to="/doswiadczenie">Doświadczenie</RouterLink>
    </nav>
    <div class="header__layout"></div>
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

  &__menu {
    display: flex;
    gap: 20px;
    font-size: 18px;

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
}

.hidden {
  display: none;
}
</style>