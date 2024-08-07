<script setup>
import { onMounted, defineProps, ref } from "vue";
import { Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/vue';

const { content } = defineProps(["content"]);

const swiperbox = ref(null);

const swiperParams = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  injectStylesUrls: [
    'path/to/pagination-element.min.css',
  ],
}

onMounted(() => {
  Object.assign(swiperbox.value, swiperParams);

  swiperbox.value.initialize();
});
</script>

<template>
  <section>
    <div class="swipe-container">
      <div class="prev swipe-container-btn">
        <img src="/images/arrow.svg" alt="arrow" class="left">
      </div>
      <swiper-container init="false" ref="swiperbox">
        <swiper-slide v-for="item in content" :key="item">
          <img :src="item.img" alt="image" class="swiper">
          <p v-html="item.content"></p>
        </swiper-slide>
      </swiper-container>
      <div class="next swipe-container-btn">
        <img src="/images/arrow.svg" alt="arrow" class="right">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.swipe-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & swiper-container {
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 830px) {
      width: 100%;
    }
  }

  & swiper-slide {
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    cursor: grab;

    @media(max-width: 830px) {
      width: 100%;
    }

    & p {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
      padding: 0 30px;
    }

    & img {
      width: 100%;
      height: auto;
    }
  }

  & swiper-slide:active {
    cursor: grabbing;
  }

  &-btn {
    cursor: pointer;
    width: 50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s ease-in-out;

    @media(max-width: 830px) {
      display: none;
    }

    & img {
      width: 50px;
    }
  }

  &-btn:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.left {
  transform: rotate(180deg);
  margin-right: 2.5px;
  margin-left: -2.5px;
}

.right {
  margin-right: -2.5px;
  margin-left: 2.5px;
}
</style>