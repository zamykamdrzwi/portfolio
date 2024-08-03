<script setup>
import EmailForm from "@/components/EmailForm.vue";
</script>

<template>
  <section class="footer">
    <div class="footer__header">
      <small data-aos="fade-right">
        Jeżeli jesteś zainteresowany podjęciem ze mną współprawcy to zapraszam do kontaktu
      </small>
      <letters-animation :letters="'Kontakt'"/>
    </div>
    <div class="footer__form">
      <email-form />
    </div>
  </section>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $color-secondary;
  padding: 130px 165px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & small {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }

  &__form {
    margin-top: 50px;
  }
}
</style>