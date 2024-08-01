<script setup>
import { defineProps, onMounted, ref } from "vue";
import SkillsCheck from "@/components/home/SkillsCheck.vue";

const { letters } = defineProps(["letters"]);

const displayedText = ref([]);
const typingSpeed = 100;
const delayBetweenLoops = 30000;

onMounted(() => {
  startTyping();

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element jest widoczny!');
      }
    });
  }
});

const observer = new IntersectionObserver((handleIntersection) => {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});

const startTyping = () => {
  console.log('da')
  let index = 0;
  displayedText.value = [];

  const typeLetter = () => {
    if (index < letters.length) {
      const nextLetter = letters[index] === ' ' ? '&nbsp;' : letters[index];
      displayedText.value.push(nextLetter);
      index++;
      setTimeout(typeLetter, typingSpeed);
    } else {
      setTimeout(() => startTyping(), delayBetweenLoops);
    }
  };
  typeLetter();
}
</script>

<template>
  <div class="box">
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
}
</style>