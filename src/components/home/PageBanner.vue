<script setup>
import { ref, onMounted } from 'vue';
import FloorLayout from "@/components/layouts/FloorLayout.vue";

const textArray = [
  'Hello World!',
  'Rafał Dawidczyk',
  'Frontend Developer',
];

const displayedText = ref([]);
const typingSpeed = 100;
const delayBetweenLoops = 2000;
const showScroll = ref(false);

onMounted(() => {
  prepareText(2);
});

const prepareText = (whatText) => {
  whatText = (whatText + 1) % textArray.length;
  startTyping(whatText)
}

const startTyping = (whatText) => {
  let index = 0;
  displayedText.value = [];
  const text = textArray[whatText];

  const typeLetter = () => {
    if (index < text.length) {
      const nextLetter = text[index] === ' ' ? '&nbsp;' : text[index];
      displayedText.value.push(nextLetter);
      index++;
      setTimeout(typeLetter, typingSpeed);
    } else {
      setTimeout(() => {
        prepareText(whatText++);
        showScroll.value ||= true;
      }, delayBetweenLoops);
    }
  };
  typeLetter();
}
</script>

<template>
  <section class="container">
    <div class="container__text">
      <span v-for="(letter, index) in displayedText" :key="index"
        class="container__letters" v-html="letter">
      </span>
      <floor-layout />
    </div>
    <div class="container__scroll" :class="{ 'hidden' : !showScroll }">
      <img src="../../../public/images/mouse_scroll.svg" alt="mouse image">
    </div>

    <div class="container__overlay"></div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: $color-primary;
  z-index: -2;
  display: flex;
  align-items: center;

  &__text {
    padding: 0 165px;
    display: flex;
    font-size: 96px;
    letter-spacing: 1px;
    font-weight: 700;
    white-space: pre;
    color: $font-color;

    @media(max-width: 1500px) {
      font-size: 70px;
    }

    @media(max-width: 1050px) {
      font-size: 46px;
      padding: 0 0 0 30px;
    }

    @media(max-width: 700px) {
      font-size: 36px;
    }

    @media(max-width: 500px) {
      font-size: 24px;
    }
  }

  &__scroll {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    & img {
      width: 40px;
      display: inline-block;
      animation: bounce 1s infinite;
    }
  }

  &__overlay {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: $color-secondary;
    animation: bouncing 2s ease-in-out;
    animation-iteration-count: 2;
    animation-delay: 3.5s;
  }
}

.hidden {
  display: none;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes bouncing {
  0% {
    transform: translateY(0);
  }
  15% {
    transform: translateY(-80px);
  }
  85% {
    transform: translateY(0px);
  }
}
</style>