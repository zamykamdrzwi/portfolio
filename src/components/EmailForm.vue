<script setup>
import { ref } from "vue";
import emailjs from 'emailjs-com';

emailjs.init({
  publicKey: 'sO7p7ujC7Uth2EfA9',
});

const formData = ref({
  name: '',
  email: '',
  message: ''
});
const sendEmail = async () => {
  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    message: formData.value.message,
  }

  await emailjs.send('service_pfb6z6v', 'template_xeys76m', templateParams, 'sO7p7ujC7Uth2EfA9')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      // statusMessage.value = 'Wiadomość wysłana!'
      formData.value = { name: '', email: '', message: '' }
    }, (err) => {
      console.error('FAILED...', err)
      // statusMessage.value = 'Błąd podczas wysyłania wiadomości.'
    })
};
</script>

<template>
  <section>
    <form @submit.prevent="sendEmail" class="email-form">

      <div class="email-form__box" data-aos="fade-right">
        <label for="name">Imię:</label>
        <input type="text" v-model="formData.name" name="name" placeholder="Twoję imię" required class="email-form__box-input">
      </div>

      <div class="email-form__box" data-aos="fade-right">
        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" name="email" placeholder="Twój email" required class="email-form__box-input">
      </div>

      <div class="email-form__box" data-aos="fade-right">
        <label for="message">Wiadomość:</label>
        <textarea v-model="formData.message" name="message" placeholder="Twoja wiadomośc" required class="email-form__box-input"></textarea>
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
    align-items: center;

    & label {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
    }

    &-input {
      background: none;
      border: none;
      outline: none;
      padding: 10px;
      margin: 0;
      box-shadow: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 340px;
      border-bottom: 2px solid $font-color;
      font-family: "Roboto Mono", monospace;
      caret-color: $font-color;
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
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