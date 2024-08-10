<script setup>
import { onMounted } from "vue";
import { RouterView } from 'vue-router';
import HeaderMenu from './components/HeaderMenu.vue';
import FooterComponent from './components/FooterComponent.vue';

const originalTitle = document.title;

const changeTitle = () => {
  if(document.hidden) {
    document.title = 'Wracaj szybko 💔';
  } else {
    document.title = originalTitle;
  }
}

document.addEventListener("visibilitychange", changeTitle);
</script>

<template>
  <HeaderMenu />
  <RouterView />
  <footer-component />
</template>

<style lang="scss">
html {
  overflow-x: hidden;

  ::selection {
    background-color: $font-color;
    color: $color-secondary;
  }
}
body {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  box-sizing: border-box;
  overflow-x: hidden;
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
