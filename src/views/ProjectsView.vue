<script setup>
import ProjectComponent from "@/components/projects/ProjectComponent.vue";

const wheatherSettings = {
  sliderFirst: true,
  background: '#555555',
  paragraph1: `<span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">WeatherApp</a></span> ma za zadanie pokazywać aktualną, jak i przyszłą
          pogodę. Aby tego dokonać, użyłem <span class="bold"><a href="https://openweathermap.org/" target="_blank">OpenWeather API</a></span>, który dostarcza mi dane pogodowe
          w formacie json, które przesłałem na stronę. Aby poprawić i przyspieszyć wyszukiwanie pogody w konkretnych miejscowościach wykorzystałem
          <span class="bold"><a href="https://developers.google.com/maps/documentation/javascript?hl=pl" target="_blank">google maps API</a></span>
          do wyświetlenia interaktywnej mapy, na której po kliknięciu pokazuje nam informacje o pogodzie w wybranym miejscu. Wykorzystałem również bibliotekę
          <span class="bold"><a href="https://www.highcharts.com/" target="_blank">Highcharts</a></span> do pokazania danych pogodowych w bardziej czytelny sposób.`,
  paragraph2: `Aplikacja jest napisana we <span class="bold">VUE 2</span> w <span class="bold">Java Script</span>, gdzie do stylizacji użyłem
          <span class="bold"><a href="https://getbootstrap.com/" target="_blank">Bootrstapa</a></span>. W aplikacji wykorzystałem również <span class="bold">vue router</span> oraz <span class="bold">store</span> do
          zarządzania danymi z API. Zachęcam do sprawdzenia kodu na moim <span class="bold"><a href="https://github.com/zamykamdrzwi/weatherapp-vue/tree/master" target="_blank">GitHub</a></span>
          oraz do odwiedzenia strony <span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">tutaj</a></span>.`,
  title: 'WeatherApp',
  subtitle: `Aplikacja pokazująca relną prognozę pogody w wybranym miejscu`,
  github: 'https://github.com/zamykamdrzwi/weatherapp-vue',
  link: 'https://weatherapp-vue-two.vercel.app/weather',
  logo: [
      '/images/vue_logo.webp',
      '/images/bootstrap_logo.webp'
  ],
  content: [
    {
      img: '/images/wheatherapp_1.webp',
      content: 'Dzięki wykorzystaniu biblioteki highcharts dodałem do aplikacji zaawansowane wykresy pokazujące dokładne dane pogodowe rozłożone w czasie.'
    },
    {
      img: '/images/wheatherapp_2.webp',
      content: 'Można dokładnie sprawdzić każdy parametr pogodowy taki jak temperatura, kierunek wiatru czy ciśnienie.'
    },
    {
      img: '/images/wheatherapp_3.webp',
      content: 'Mamy dostęp do aktualnej pogody w każdym miejscu i określonym czasie.'
    },
    {
      img: '/images/wheatherapp_4.webp',
      content: 'Użyłem google maps API do dodania interaktywnej mapy, gdzie po naciśnięciu w wybrane miejsce uzyskamy informacje o pogodzie w wybranej miejscowości.'
    },
  ]
}

const portfolioSettings = {
  sliderFirst: false,
  background: '#2F2F2F',
  paragraph1: `<span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">WeatherApp</a></span> ma za zadanie pokazywać aktualną, jak i przyszłą
          pogodę. Aby tego dokonać, użyłem <span class="bold"><a href="https://openweathermap.org/" target="_blank">OpenWeather API</a></span>, który dostarcza mi dane pogodowe
          w formacie json, które przesłałem na stronę. Aby poprawić i przyspieszyć wyszukiwanie pogody w konkretnych miejscowościach wykorzystałem
          <span class="bold"><a href="https://developers.google.com/maps/documentation/javascript?hl=pl" target="_blank">google maps API</a></span>
          do wyświetlenia interaktywnej mapy, na której po kliknięciu pokazuje nam informacje o pogodzie w wybranym miejscu. Wykorzystałem również bibliotekę
          <span class="bold"><a href="https://www.highcharts.com/" target="_blank">Highcharts</a></span> do pokazania danych pogodowych w bardziej czytelny sposób.`,
  paragraph2: `Aplikacja jest napisana we <span class="bold">VUE 2</span> w <span class="bold">Java Script</span>, gdzie do stylizacji użyłem
          <span class="bold"><a href="https://getbootstrap.com/" target="_blank">Bootrstapa</a></span>. W aplikacji wykorzystałem również <span class="bold">vue router</span> oraz <span class="bold">store</span> do
          zarządzania danymi z API. Zachęcam do sprawdzenia kodu na moim <span class="bold"><a href="https://github.com/zamykamdrzwi/weatherapp-vue/tree/master" target="_blank">GitHub</a></span>
          oraz do odwiedzenia strony <span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">tutaj</a></span>.`,
  title: 'Portfolio',
  subtitle: `Prosta aplikacja konwerująca obrazy typu .png albo .jpeg w .webp`,
  github: 'https://github.com/zamykamdrzwi/portfolio',
  link: 'https://rafal-portfolio.vercel.app/',
  logo: [
    '/images/vue_logo.webp',
    '/images/sass_logo.webp'
  ],
  content: [
    {
      img: '/images/imgcon1.webp',
      content: 'Można ustawić docelową jakość zdjęcia między 20 a 80%, a następnie przeciągnąć zdjęcia do wyznaczonego pola.'
    },
    {
      img: '/images/imgcon2.webp',
      content: 'Po przesłaniu jednego bądź kilku obrazów można je pobrać. Przy pobieraniu kilku naraz są one zapisywane w pliku .zip'
    },
  ]
}

const imgConverterSettings = {
  sliderFirst: true,
  background: '#555555',
  paragraph1: `<span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">WeatherApp</a></span> ma za zadanie pokazywać aktualną, jak i przyszłą
          pogodę. Aby tego dokonać, użyłem <span class="bold"><a href="https://openweathermap.org/" target="_blank">OpenWeather API</a></span>, który dostarcza mi dane pogodowe
          w formacie json, które przesłałem na stronę. Aby poprawić i przyspieszyć wyszukiwanie pogody w konkretnych miejscowościach wykorzystałem
          <span class="bold"><a href="https://developers.google.com/maps/documentation/javascript?hl=pl" target="_blank">google maps API</a></span>
          do wyświetlenia interaktywnej mapy, na której po kliknięciu pokazuje nam informacje o pogodzie w wybranym miejscu. Wykorzystałem również bibliotekę
          <span class="bold"><a href="https://www.highcharts.com/" target="_blank">Highcharts</a></span> do pokazania danych pogodowych w bardziej czytelny sposób.`,
  paragraph2: `Aplikacja jest napisana we <span class="bold">VUE 2</span> w <span class="bold">Java Script</span>, gdzie do stylizacji użyłem
          <span class="bold"><a href="https://getbootstrap.com/" target="_blank">Bootrstapa</a></span>. W aplikacji wykorzystałem również <span class="bold">vue router</span> oraz <span class="bold">store</span> do
          zarządzania danymi z API. Zachęcam do sprawdzenia kodu na moim <span class="bold"><a href="https://github.com/zamykamdrzwi/weatherapp-vue/tree/master" target="_blank">GitHub</a></span>
          oraz do odwiedzenia strony <span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">tutaj</a></span>.`,
  title: 'IMG Converter',
  subtitle: `Prosta aplikacja konwerująca obrazy typu .png albo .jpeg w .webp`,
  github: 'https://github.com/zamykamdrzwi/img-converter',
  link: 'https://img-converter-psi.vercel.app/',
  logo: [
    '/images/vue_logo.webp',
    '/images/tailwind_logo.webp'
  ],
  content: [
    {
      img: '/images/imgcon1.webp',
      content: 'Można ustawić docelową jakość zdjęcia między 20 a 80%, a następnie przeciągnąć zdjęcia do wyznaczonego pola.'
    },
    {
      img: '/images/imgcon2.webp',
      content: 'Po przesłaniu jednego bądź kilku obrazów można je pobrać. Przy pobieraniu kilku naraz są one zapisywane w pliku .zip'
    },
  ]
}

const quizSettings = {
  sliderFirst: false,
  background: '#2F2F2F',
  paragraph1: `<span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">WeatherApp</a></span> ma za zadanie pokazywać aktualną, jak i przyszłą
          pogodę. Aby tego dokonać, użyłem <span class="bold"><a href="https://openweathermap.org/" target="_blank">OpenWeather API</a></span>, który dostarcza mi dane pogodowe
          w formacie json, które przesłałem na stronę. Aby poprawić i przyspieszyć wyszukiwanie pogody w konkretnych miejscowościach wykorzystałem
          <span class="bold"><a href="https://developers.google.com/maps/documentation/javascript?hl=pl" target="_blank">google maps API</a></span>
          do wyświetlenia interaktywnej mapy, na której po kliknięciu pokazuje nam informacje o pogodzie w wybranym miejscu. Wykorzystałem również bibliotekę
          <span class="bold"><a href="https://www.highcharts.com/" target="_blank">Highcharts</a></span> do pokazania danych pogodowych w bardziej czytelny sposób.`,
  paragraph2: `Aplikacja jest napisana we <span class="bold">VUE 2</span> w <span class="bold">Java Script</span>, gdzie do stylizacji użyłem
          <span class="bold"><a href="https://getbootstrap.com/" target="_blank">Bootrstapa</a></span>. W aplikacji wykorzystałem również <span class="bold">vue router</span> oraz <span class="bold">store</span> do
          zarządzania danymi z API. Zachęcam do sprawdzenia kodu na moim <span class="bold"><a href="https://github.com/zamykamdrzwi/weatherapp-vue/tree/master" target="_blank">GitHub</a></span>
          oraz do odwiedzenia strony <span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">tutaj</a></span>.`,
  title: 'Quiz',
  subtitle: `Na tej strtonie można rozwiązać bądź utworzyć quiz`,
  github: 'https://github.com/zamykamdrzwi/vue-quiz',
  link: 'https://quiz-iota-ebon.vercel.app/',
  logo: [
    '/images/vue_logo.webp',
    '/images/bootstrap_logo.webp'
  ],
  content: [
    {
      img: '/images/imgcon1.webp',
      content: 'Można ustawić docelową jakość zdjęcia między 20 a 80%, a następnie przeciągnąć zdjęcia do wyznaczonego pola.'
    },
    {
      img: '/images/imgcon2.webp',
      content: 'Po przesłaniu jednego bądź kilku obrazów można je pobrać. Przy pobieraniu kilku naraz są one zapisywane w pliku .zip'
    },
  ]
}

const weatherJsSettings = {
  sliderFirst: true,
  background: '#555555',
  paragraph1: `<span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">WeatherApp</a></span> ma za zadanie pokazywać aktualną, jak i przyszłą
          pogodę. Aby tego dokonać, użyłem <span class="bold"><a href="https://openweathermap.org/" target="_blank">OpenWeather API</a></span>, który dostarcza mi dane pogodowe
          w formacie json, które przesłałem na stronę. Aby poprawić i przyspieszyć wyszukiwanie pogody w konkretnych miejscowościach wykorzystałem
          <span class="bold"><a href="https://developers.google.com/maps/documentation/javascript?hl=pl" target="_blank">google maps API</a></span>
          do wyświetlenia interaktywnej mapy, na której po kliknięciu pokazuje nam informacje o pogodzie w wybranym miejscu. Wykorzystałem również bibliotekę
          <span class="bold"><a href="https://www.highcharts.com/" target="_blank">Highcharts</a></span> do pokazania danych pogodowych w bardziej czytelny sposób.`,
  paragraph2: `Aplikacja jest napisana we <span class="bold">VUE 2</span> w <span class="bold">Java Script</span>, gdzie do stylizacji użyłem
          <span class="bold"><a href="https://getbootstrap.com/" target="_blank">Bootrstapa</a></span>. W aplikacji wykorzystałem również <span class="bold">vue router</span> oraz <span class="bold">store</span> do
          zarządzania danymi z API. Zachęcam do sprawdzenia kodu na moim <span class="bold"><a href="https://github.com/zamykamdrzwi/weatherapp-vue/tree/master" target="_blank">GitHub</a></span>
          oraz do odwiedzenia strony <span class="bold"><a href="https://weatherapp-vue-two.vercel.app/weather" target="_blank">tutaj</a></span>.`,
  title: 'WeatherApp JS',
  subtitle: `Moj pierwszy większy projekt jaki zrealizowałem`,
  github: 'https://github.com/zamykamdrzwi/weatherapp',
  link: '/',
  logo: [
    '/images/js_logo.svg',
    '/images/sass_logo.webp'
  ],
  content: [
    {
      img: '/images/imgcon1.webp',
      content: 'Można ustawić docelową jakość zdjęcia między 20 a 80%, a następnie przeciągnąć zdjęcia do wyznaczonego pola.'
    },
    {
      img: '/images/imgcon2.webp',
      content: 'Po przesłaniu jednego bądź kilku obrazów można je pobrać. Przy pobieraniu kilku naraz są one zapisywane w pliku .zip'
    },
  ]
}
</script>

<template>
  <section>
    <project-component :settings="wheatherSettings" />
    <project-component :settings="portfolioSettings"/>
    <project-component :settings="imgConverterSettings"/>
    <project-component :settings="quizSettings"/>
    <project-component :settings="weatherJsSettings"/>
  </section>
</template>

<style scoped lang="scss">

</style>