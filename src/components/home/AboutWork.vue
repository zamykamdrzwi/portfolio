<script setup>

import LettersAnimation from "@/components/layouts/LettersAnimation.vue";
</script>

<template>
  <section class="container">
    <div class="image" data-aos="fade-right">
      <img src="/images/keyboard_img.webp" alt="keyboard img">
    </div>
    <div class="content">
      <div class="content__header">
        <small data-aos="fade-right">Z jaką firmą chętnie podejmę współpracę.</small>
        <letters-animation :letters="'Szukam pracy'"/>
      </div>
      <div class="content__body">
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque, dicta facere illo obcaecati officia perspiciatis possimus quaerat quod ratione sequi ullam velit vitae! Asperiores culpa deserunt, ex facilis fugiat, fugit harum itaque iure nostrum numquam optio quos sequi similique sint soluta voluptas voluptatum. Cumque, cupiditate distinctio dolores facere, illo, impedit ipsam iste magnam molestiae non numquam odio officia repellat similique sint. Alias aliquid amet animi, assumenda beatae consequatur culpa delectus eos exercitationem fuga illum ipsa itaque iure laborum minima nam, nostrum optio possimus qui quod reiciendis repellendus rerum sunt temporibus ullam veniam voluptas voluptatibus. Accusamus aspernatur consequuntur distinctio doloremque facilis fugit illum, ipsam magnam mollitia, neque, nihil optio praesentium qui repellat soluta tempore voluptas? Aperiam dignissimos fugiat quam voluptas.
        </p>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt error expedita fuga harum, inventore labore minima nam, necessitatibus nihil optio placeat quaerat quo quos repudiandae, saepe sapiente vel voluptatem.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  background-color: $color-primary;
  padding: 130px 165px 130px 0;

  @media(max-width: 1300px) {
    padding: 130px 30px;
  }

  @media(max-width: 900px) {
    flex-direction: column;
  }
}

.image {

  @media(max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & img {
    margin-left: -200px;
    transform: rotate(-25deg);

    @media(max-width: 1050px) {
      margin-left: -350px;
    }

    @media(max-width: 900px) {
      margin-left: 0;
      margin-bottom: 50px;
    }
  }
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 110px;

    & small {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }

  &__body {
    margin-left: 100px;

    @media(max-width: 900px) {
      margin-left: 0;
    }

    & p {
      color: $color-tertiary;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 28px;
      margin-bottom: 30px;
      text-align: end;

      @media(max-width: 900px) {
        text-align: start;
      }
    }
  }
}
</style>