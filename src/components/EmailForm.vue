<script setup>
import { ref } from "vue";

const formData = ref({
  name: '',
  email: '',
  message: ''
});
const sendEmail = async () => {
  console.log('dziala')
};
</script>

<template>
  <section>
    <form @submit.prevent="sendEmail" class="email-form">

      <div class="email-form__box" data-aos="fade-right">
        <label for="name">Imię:</label>
        <input type="text" v-model="formData.name" name="name" placeholder="Twoję imię" required>
      </div>

      <div class="email-form__box" data-aos="fade-right">
        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" name="email" placeholder="Twój email" required>
      </div>

      <div class="email-form__box" data-aos="fade-right">
        <label for="message">Wiadomość:</label>
        <textarea v-model="formData.message" name="message" placeholder="Twoja wiadomośc" required></textarea>
      </div>

      <button type="submit" data-aos="zoom-in">Wyślij</button>
    </form>
  </section>
</template>

<style scoped lang="scss">
.email-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;

  &__box {
    display: flex;
    justify-content: space-between;

    & label {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
    }

    & input {
      width: 340px;
    }

    & textarea {
      width: 340px;
    }
  }

  & button {
    padding: 14px 40px;
    width: auto;
    border-radius: 40px;
    border: none;
    background-color: $color-primary;
    color: $font-color;
    align-self: center;
    margin-top: 20px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease-in-out;
  }

  & button:hover {
    background-color: $font-color;
    color: $color-secondary;
  }
}
</style>