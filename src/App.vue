<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderMenu from './components/HeaderMenu.vue';
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
</template>

<style>
body {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  max-width: 100%;
  box-sizing: border-box;
  //overflow-y: hidden;
}
</style>
