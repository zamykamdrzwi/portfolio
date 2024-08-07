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
      description: 'Najwięcej styli napisałem w tym frameworku',
      img: '/images/bootstrap_logo.webp',
    },
    {
      title: 'Tailwind',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
      img: '/images/tailwind_logo.webp',
    },
    {
      title: 'Sass',
      description: 'Używam go w każdym projekcie',
      img: '/images/sass_logo.webp',
    },
    {
      title: 'Docker',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
      img: '/images/docker_logo.svg',
    },
    {
      title: 'Linux - Ubuntu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
      img: '/images/ubuntu_logo.svg',
    },
    {
      title: 'Node-JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
      img: '/images/nuxt_loogo.webp',
    },
    {
      title: 'Laravel',
      description: 'Nad nauką tego frameworka spędzam obecnie najwięcej czasu',
      img: '/images/laravel_logo.svg',
    },
    {
      title: 'PHP',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
      img: '/images/php_logo.svg',
    },
    {
      title: 'Type Script',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
      img: '/images/typescript_logo.svg',
    },
    {
      title: 'SQL',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.',
      img: '/images/sql_logo.webp',
    },
    {
      title: 'C#',
      description: 'Uczę się go głównie na studiach',
      img: '/images/csharp_logo.svg',
    },
    {
      title: 'Java',
      description: 'Uczę się go głównie na studiach',
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
