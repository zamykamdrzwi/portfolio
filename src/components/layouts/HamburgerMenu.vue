<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="hamburger-menu" @click="toggle">
    <div :class="['item1', 'hamburger-menu__line', { 'open' : isOpen }]"></div>
    <div :class="['item2', 'hamburger-menu__line', { 'open' : isOpen }]"></div>
    <div :class="['item3', 'hamburger-menu__line', { 'open' : isOpen }]"></div>
  </div>
</template>

<style scoped lang="scss">
.hamburger-menu {
  display: flex;
  flex-direction: column;
  gap: 7px;

  &__line {
    width: 30px;
    height: 3px;
    background-color: $color-tertiary;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
}

.item1.open {
  transform: rotate(45deg) translate(9px, 5px);
}

.item2.open {
  opacity: 0;
}

.item3.open {
  transform: rotate(-45deg) translate(9px, -5px);
}
</style>