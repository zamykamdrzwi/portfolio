<script setup>
import { ref } from "vue";
import PageBanner from "@/components/home/PageBanner.vue";
import SkillsCheck from "@/components/home/SkillsCheck.vue";

const skills = ref({
  title: 'Moje umiejętności',
  subtitle: 'Języki programowania, frameworki oraz narzędzia',
  items: [
    {
      title: 'VUE',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/vue_logo.webp',
    },
    {
      title: 'Bootstrap',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/bootstrap_logo.webp',
    },
    {
      title: 'Tailwind',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/tailwind_logo.webp',
    },
    {
      title: 'Sass',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/sass_logo.webp',
    },
    {
      title: 'Docker',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/docker_logo.svg',
    },
    {
      title: 'Linux - Ubuntu',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/ubuntu_logo.svg',
    },
    {
      title: 'Node-JS',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/node-js_logo.svg',
    }
  ]
});

const learn = ref({
  title: 'Czego się obecnie uczę',
  subtitle: 'Umiejętności w których nie mam jeszcze zbyt dużego doświadczenia bądź dopiero się ich uczę',
  items: [
    {
      title: 'Nuxt',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/nuxt_loogo.webp',
    },
    {
      title: 'Laravel',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/laravel_logo.svg',
    },
    {
      title: 'PHP',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/php_logo.svg',
    },
    {
      title: 'Type Script',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/typescript_logo.svg',
    },
    {
      title: 'SQL',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/sql_logo.webp',
    },
    {
      title: 'C#',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/csharp_logo.svg',
    },
    {
      title: 'Java',
      description: 'Najlepiej programuję we vue 2 oraz vue 3',
      img: '/images/java_logo.webp',
    }
  ]
});
</script>

<template>
  <main>
    <page-banner />
    <skills-check :skills="skills"/>
    <skills-check :skills="learn"/>
  </main>
</template>

<style scoped lang="scss">

</style>
