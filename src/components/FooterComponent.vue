<script setup>
import EmailForm from "@/components/EmailForm.vue";
</script>

<template>
  <section class="footer" id="contact">
    <div class="footer__header">
      <small data-aos="fade-right">
        Jeżeli jesteś zainteresowany podjęciem ze mną współpracy to zapraszam do kontaktu
      </small>
      <letters-animation :letters="'Kontakt'"/>
    </div>
    <div class="footer__bottom">
      <div class="footer__form">
        <email-form />
      </div>
      <div class="footer__contact">
        <div class="footer__contact-item" data-aos="fade-left">
          <img src="/images/mail_icon.svg" alt="mail img">
          <span>rafdaw1337@wp.pl</span>
        </div>
        <div class="footer__contact-item" data-aos="fade-left">
          <img src="/images/phone_icon.svg" alt="phone img">
          <span>505 013 455</span>
        </div>
        <div class="footer__contact-item" data-aos="fade-left">
          <img src="/images/user_icon.svg" alt="user img">
          <span>Rafał Dawidczyk</span>
        </div>
        <div class="footer__contact-media">
          <a href="https://github.com/zamykamdrzwi/" target="_blank" data-aos="flip-up">
            <img src="/images/github_loho.webp" alt="github logo">
          </a>
          <a href="https://www.linkedin.com/in/rafa%C5%82-dawidczyk-769427243/" target="_blank" data-aos="flip-up">
            <img src="/images/linkedin_logo.webp" alt="linkedin logo">
          </a>
        </div>
      </div>
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

  @media(max-width: 1050px) {
    padding: 130px 30px;
  }

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

  &__bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 100px;
    }
  }

  &__form {
    margin-top: 50px;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: center;

    &-item {
      display: flex;
      gap: 10px;

      & img {
        width: 25px;
      }

      & span {
        color: $color-tertiary;
        font-size: 16px;
        letter-spacing: 1px;
      }
    }

    &-media {
      display: flex;
      gap: 15px;
      margin-top: 30px;

      & a {

        & img {
          width: 30px;
        }
      }
    }
  }
}
</style>