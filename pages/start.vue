<template>
  <div id="neiros_kviz" class="neiros_kviz">
    <div
      class="neiros__kviz_block_left scale-up-hor-left"
      style="
        background: url(images/bg-left-kviz.jpg) center center no-repeat;
        background-size: cover;
      "
    ></div>
    <div class="neiros__kviz_block_right scale-up-hor-right d-flex">
      <div
        class="neiros__kviz_padding_block py-0 d-flex flex-column justify-content-center flex-grow-1"
      >
        <div v-if="title" class="neiros__kviz_block_right_text_top">
          {{ subtitle }}
          <p></p>
        </div>

        <nuxt-link to="/quiz" class="neiros_kviz_btn" :style="buttonColor">
          {{ buttonText }}
        </nuxt-link>

        <div class="txt1">Бонус после прохождения теста!</div>
        <Bonus />
        <div class="neiros__footer">
          <span>Сделано в</span> <img src="images/logo-kviz.PNG" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Bonus from '~/components/BonusStart'
export default {
  components: { Bonus },
  computed: {
    ...mapGetters('quiz', ['color']),
    ...mapState({
      step1: (state) => state?.quiz?.steps?.step1,
      isShowBonus: (state) => {
        const isShow = state?.quiz?.steps?.step3?.bonus?.finish?.active
        if (isShow === false || isShow === true) {
          return isShow
        }
        return true
      },
    }),
    title() {
      return this.step1?.title
    },
    subtitle() {
      return this.step1?.subtitle
    },
    buttonText() {
      const btnText = this.step1?.button_text
      return btnText || 'Пройти тест'
    },
    buttonColor() {
      return {
        background: this.color,
      }
    },
  },
}
</script>
