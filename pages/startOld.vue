<template>
  <div id="neiros_kviz" class="start-wrapper">
    <div class="start-image">
      <v-img class="start-picture" src="/images/bg-left-kviz.jpg" cover></v-img>
    </div>
    <div class="start-content">
      <div v-if="title" class="neiros__kviz_block_right_text_top">
        {{ title }}
        <p></p>
        <!-- Пройдите тест и узнайте какие инструменты<br />
        использовать для увеличения продаж
        <p>В конце теста бонус - <b>профессиональная консультация</b></p> -->
      </div>
      <div v-if="subtitle" class="neiros__kviz_block_right_text_top">
        {{ subtitle }}
        <p></p>
      </div>
      <nuxt-link to="/quiz" class="neiros_kviz_btn">{{ buttonText }}</nuxt-link>
      <div v-if="isShowBonus">
        <div class="txt1">Бонус после прохождения теста!</div>
        <Bonus />
        <!-- <div class="neiros__bonus-container">
          <img src="images/bonus-img.PNG" alt="" />
          <div>Полное<br />руковоство<br />для бизнеса</div>
        </div> -->
      </div>
      <div class="neiros__footer">
        <span>Сделано в</span> <img src="/images/logo-kviz.PNG" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bonus from '~/components/BonusStart'
export default {
  components: { Bonus },
  computed: {
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
  },
}
</script>
