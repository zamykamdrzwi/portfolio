<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderMenu from './components/HeaderMenu.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <HeaderMenu />
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

  <RouterView />
  <footer-component />
</template>

<style>
body {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  max-width: 100%;
  box-sizing: border-box;
  //overflow-x: hidden;
}
</style>
