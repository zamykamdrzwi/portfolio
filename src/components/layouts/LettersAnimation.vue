<script setup>
import { defineProps, onMounted, ref } from "vue";

const { letters } = defineProps(["letters"]);

const displayedText = ref([]);
const typingSpeed = 100;

let isTyping = false;
let inView = false;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};
const box = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(box.value);
});

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log('dzoala')
      startTyping();
      inView = true;
    } else {
      // console.log('niee')
      inView = false;
    }
  });
}


// HANDLE ANIMATION
const startTyping = () => {
  let index = 0;
  displayedText.value = [];
  let text = letters;

  const typeLetter = () => {
    if (index < text.length) {
      isTyping = true;
      const nextLetter = text[index] === ' ' ? '&nbsp;' : text[index];
      displayedText.value.push(nextLetter);
      index++;
      if(!inView) {
        index = 0;
        text = letters;
        displayedText.value = [];
      }
      setTimeout(typeLetter, typingSpeed);
    } else {
      isTyping = false;
    }
  };

  if (isTyping) return text = letters;
  typeLetter();
}
</script>

<template>
  <div class="box" ref="box">
    <span v-for="(letter, index) in displayedText" :key="index"
         v-html="letter">
    </span>
    <floor-layout />
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  color: $font-color;
  font-size: 46px;
  line-height: 56px;
  font-weight: 700;

  @media(max-width: 900px) {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>