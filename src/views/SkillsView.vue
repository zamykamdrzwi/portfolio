<script setup>
import { ref } from "vue";
import SkillsCheck from "@/components/skills/SkillsCheck.vue";
import RemainingSkills from "@/components/skills/RemainingSkills.vue";

const skillsSettings = ref('#555555');
const learnSettings = ref('#2F2F2F');

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

const remaining = ref({
  title: 'Pozostałe umiejętności',
  subtitle: 'Biblioteki, języki prrogramowania, frameworki, narzędzia, inne',
  items: [
    {
      title: 'Pinia',
      img: '/images/pinia_logo.svg'
    },
    {
      title: 'Vue router',
      img: '/images/vue_logo.webp'
    },
    {
      title: 'Vue store',
      img: '/images/vue_logo.webp'
    },
    {
      title: 'Git',
      img: '/images/git_logo.svg'
    },
    {
      title: 'Visual Studio',
      img: '/images/vs_logo.svg'
    },
    {
      title: 'Php Storm',
      img: '/images/phpstorm_logo.svg'
    },
    {
      title: 'Google API',
      img: '/images/google_logo.webp'
    },
    {
      title: 'Swiper JS',
      img: '/images/swiper_logo.webp'
    },
    {
      title: 'Three JS',
      img: '/images/threejs_logo.svg'
    },
    {
      title: 'Chart.js',
      img: '/images/chartjs_logo.svg'
    },
    {
      title: 'Highcharts',
      img: '/images/highcharts_logo.svg'
    },
    {
      title: 'Postman',
      img: '/images/postman_logo.svg'
    },
    {
      title: 'NPM',
      img: '/images/npm_logo.svg'
    },
  ]
});
</script>

<template>
  <section>
    <skills-check :skills="skills" :settings="skillsSettings"/>
    <skills-check :skills="learn" :settings="learnSettings"/>
    <remaining-skills :skills="remaining"/>
  </section>
</template>

<style>
</style>
