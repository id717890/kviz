<template>
  <div id="neiros_kviz" class="neiros_kviz">
    <div
      class="neiros__kviz_block_left scale-up-hor-left"
      style="background-size: cover"
      :style="backgroundImage"
    ></div>
    <div class="neiros__kviz_block_right scale-up-hor-right d-flex">
      <div
        class="neiros__kviz_padding_block py-0 d-flex flex-column justify-content-center flex-grow-1"
      >
        <StartHeader />
        <div v-if="title" class="neiros__kviz_block_right_text_top">
          {{ title }}
          <p v-if="subtitle">{{ subtitle }}</p>
        </div>

        <nuxt-link to="/quiz" class="neiros_kviz_btn" :style="buttonColor">
          {{ buttonText }}
        </nuxt-link>

        <div class="txt1 mb-0">Бонус после прохождения теста!</div>
        <Bonus />
        <StartFooter />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Bonus from '~/components/BonusStart'
import StartHeader from '~/components/StartPage/Header'
import StartFooter from '~/components/StartPage/Footer'
export default {
  components: { Bonus, StartHeader, StartFooter },
  computed: {
    ...mapGetters('quiz', ['color']),
    ...mapState({
      step1: (state) => state?.quiz?.steps?.step1,
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
    await this.$store.dispatch('quiz/FETCH_QUIZ_CONFIG_ACTION', 'qweqwe')
  },
}
</script>
