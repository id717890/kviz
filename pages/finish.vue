<template>
  <div id="neiros__kviz_iframe">
    <div class="neiros__container_kviz">
      <div class="neiros__block_kviz_left two_polls_block">
        <div class="neiros__block_kviz_cov">
          <div class="neiros__final_h1">{{ title }}</div>
          <div class="neiros__progress_block_two overflow-visible">
            <div
              class="progress-bar quiz-bar quiz-blue quiz-stripes overflow-visible"
            >
              <span style="width: 98%">
                <div class="neiros__procent_top">98%</div>
              </span>
            </div>
          </div>
          <div class="neiros__final_block_text">
            <div class="neiros__final_h2">
              <!-- Заполните форму, чтобы получить результаты<br />прохождения теста -->
              {{ text1 }}
            </div>
            <div class="neiros__final_h2_description">
              Мы рассмотрели ваши ответы и в течении 5 минут вышлем Вам
              подробную<br />
              инструкцию <b>+ заработаные бонусы!</b>
            </div>
          </div>

          <div class="d-flex pt-5 mt-5">
            <!-- <div class="neiros__bonus">
              <img src="images/bonus-img-final2.PNG" />
              <div>
                Полное<br />
                руковоство<br />
                для бизнеса
              </div>
            </div> -->
            <BonusFinish1 v-if="isShowBonus1Finish" />
            <BonusFinish2 />
          </div>
          <!-- <div class="neiros__final_block_bonus">
            <div class="neiros__bonus">
              <img src="images/bonus-img-final2.PNG" />
              <div>
                Полное<br />
                руковоство<br />
                для бизнеса
              </div>
            </div>
            <BonusFinish />
          </div> -->
        </div>
      </div>
      <div class="neiros__block_kviz_right two_polls_block">
        <div class="neiros__right_sidebar">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import types from '~/store/types'
import BonusFinish1 from '~/components/BonusFinish1'
import BonusFinish2 from '~/components/BonusFinish2'
import ContactForm from '~/components/ContactForm'
export default {
  components: { BonusFinish1, BonusFinish2, ContactForm },

  computed: {
    ...mapGetters('quiz', ['currentQuestion']),
    ...mapState({
      isShowBonus1Finish: (state) => {
        const isShow = state?.quiz?.steps?.step3?.bonus?.first.finish
        if (isShow === false || isShow === true) {
          return isShow
        }
        return true
      },
      settings: (state) => state?.quiz?.steps?.step4,
    }),
    title() {
      return this.settings?.title || 'Отлично! Остался всего один шаг!'
    },
    text1() {
      return (
        this.settings?.text ||
        'Заполните форму, чтобы получить результаты прохождения теста'
      )
    },
    question() {
      return this.currentQuestion?.type
    },
  },
  async created() {
    await this[types.FETCH_QUIZ_CONFIG_ACTION]('qweqwe')
  },
  methods: {
    ...mapActions('quiz', [types.FETCH_QUIZ_CONFIG_ACTION]),
  },
}
</script>
