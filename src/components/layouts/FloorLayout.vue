<template>
  <span class="floor">_</span>
</template>

<style scoped lang="scss">
.floor {
  animation: blink 0.6s infinite;
  animation-timing-function: steps(1, end);
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>