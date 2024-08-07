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

<style>
body {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  //max-width: 100%;
  box-sizing: border-box;
  //overflow-x: hidden;
}
</style>
