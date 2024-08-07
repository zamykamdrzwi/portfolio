<script setup>
import WheatherApp from "@/components/projects/WheatherApp.vue";

const wheatherSettings = {
  sliderFirst: true
}
</script>

<template>
  <section>
    <WheatherApp :settings="wheatherSettings" />
  </section>
</template>

<style scoped lang="scss">

</style>