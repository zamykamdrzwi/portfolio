<script setup>
import { ref, onMounted } from "vue";
import LettersAnimation from "@/components/layouts/LettersAnimation.vue";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const exampleCode = ref(`
  const typeLetter = () => {
    if (index < text.length) {
      const nextLetter = text[index] === ' ' ? '&nbsp;' : text[index];
      displayedText.value.push(nextLetter);
      index++;
      setTimeout(typeLetter, typingSpeed);
    } else {
      setTimeout(() => {
        prepareText(whatText++);
        showScroll.value ||= true;
      }, delayBetweenLoops);
    }
  };
`);

const pritierCode = ref('');

onMounted(() => {
  pritierCode.value = Prism.highlight(exampleCode.value, Prism.languages.js, 'js');
});
</script>

<template>
  <section class="container">
    <div class="container__header">
      <small data-aos="fade-right">
        Jakie jest moje podejście do programowania.
      </small>
      <letters-animation :letters="'Jak programuję'"/>
    </div>
    <div class="container__content">
      <div class="container__content-box" data-aos="flip-up">
        <pre><code class="language-js" v-html="pritierCode"></code></pre>
      </div>
      <div class="container__content-text" data-aos="fade-up">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consectetur, eaque id ipsa ipsam ipsum libero magni minima, minus mollitia numquam quia ratione repellendus rerum sit ullam unde. Consequatur iste obcaecati qui tempore! Aperiam assumenda deleniti earum ipsa iusto, molestiae nihil omnis, perspiciatis quam qui quibusdam recusandae unde, veritatis! Blanditiis consequatur doloribus omnis quia! A accusamus accusantium animi at blanditiis consequatur deleniti doloremque doloribus ducimus eaque eum excepturi facilis fuga inventore ipsam itaque laborum minima neque nesciunt non nulla placeat quia ratione, sint, sit, tenetur unde! Accusamus, molestiae, mollitia. Alias, asperiores blanditiis ea eligendi ipsam nisi sapiente sequi similique, unde veritatis, voluptas voluptatum. Adipisci corporis doloremque dolorum eius, explicabo iste labore odio officiis perferendis quo quos recusandae reiciendis sunt suscipit tempora unde veniam. Aliquid cupiditate dignissimos est, porro sapiente ullam! Accusantium, cupiditate debitis deleniti doloremque eius eligendi error est eum ex exercitationem expedita illum impedit ipsum itaque laborum, minus molestiae, necessitatibus odio officia repudiandae sapiente suscipit tenetur voluptatem. Alias, est quos. Accusamus accusantium ducimus eos facere ipsa itaque quasi rem. Ab adipisci consequatur delectus magnam minima odio praesentium sint tempore temporibus voluptates. A aspernatur dolor earum ipsum quam. Aliquid dolore ducimus fuga in incidunt iure iusto laudantium libero magni.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $color-secondary;
  padding: 130px 165px;

  @media(max-width: 1300px) {
    padding: 130px 30px;
  }

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

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media(max-width: 1050px) {
      flex-direction: column;
    }

    &-box {
      height: 100%;
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 20px;
      border-radius: 8px;
      font-family: 'Courier New', Courier, monospace;
      overflow: auto;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      & pre {
        margin: 0;
        font-size: 14px;
      }

      & code {
        display: block;
        white-space: pre-wrap;
      }
    }

    &-text {
      width: 60%;

      @media(max-width: 1050px) {
        width: 100%;
      }

      & p {
        color: $color-tertiary;
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 28px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>