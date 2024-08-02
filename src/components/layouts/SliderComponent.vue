<script setup>
import { onMounted, defineProps } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

const { content } = defineProps(["content"]);

console.log(content)

onMounted(() => {
  new Swiper('.swiper', {
    slidesPerView: 1,
    // grid: {
    //   rows: 3,
    // },
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // mousewheel: {
    //   forceToAxis: true,
    // },
  });
})
</script>

<template>
  <section>
    <swiper-container >
      <swiper-slide v-for="item in content" :key="item">
        <img :src="item" alt="image" class="swiper">
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<style scoped lang="scss">

</style>