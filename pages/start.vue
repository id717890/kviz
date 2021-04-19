<template>
  <div id="neiros_kviz" class="neiros_kviz">
    <div class="neiros__kviz_block_left" style="background-size: cover">
      <img :src="imageBg" alt="" />
    </div>
    <div class="neiros__kviz_block_right d-flex flex-column">
      <StartHeader />
      <div class="neiros__kviz_padding_block d-flex flex-column flex-grow-1">
        <div class="start-page-btn-and-bonus">
          <div v-if="title" class="neiros__kviz_block_right_text_top">
            {{ title }}
            <p v-if="subtitle">{{ subtitle }}</p>
          </div>

          <nuxt-link to="/quiz" class="neiros_kviz_btn" :style="buttonColor">
            {{ buttonText }}
          </nuxt-link>

          <div v-if="isActiveBonus" class="txt1 mb-0">
            Бонус после прохождения теста!
          </div>
          <Bonus />
        </div>
        <StartFooter />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Bonus from '~/components/BonusStartNew'
import StartHeader from '~/components/StartPage/Header'
import StartFooter from '~/components/StartPage/Footer'
export default {
  components: { Bonus, StartHeader, StartFooter },
  computed: {
    ...mapGetters('quiz', ['color']),
    ...mapState({
      step1: (state) => state?.quiz?.steps?.step1,
      testMode: (state) => state?.quiz?.testMode,
      isActiveBonus: (state) => state?.quiz?.steps?.step3?.bonus?.is_checked,
      // isShowBonus: (state) => {
      //   const isShow = state?.quiz?.steps?.step3?.bonus?.first?.first
      //   if (isShow === false || isShow === true) {
      //     return isShow
      //   }
      //   return true
      // },
    }),
    backgroundImage() {
      return {
        background: `url(${this.step1?.img}) center center no-repeat`,
      }
    },
    imageBg() {
      return this.step1?.img
    },
    title() {
      return this.step1?.title
    },
    subtitle() {
      return this.step1?.subtite
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
  async created() {
    if (this.testMode)
      await this.$store.dispatch('quiz/FETCH_QUIZ_CONFIG_ACTION', 'qweqwe')
  },
}
</script>
