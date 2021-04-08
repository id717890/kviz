<template>
  <div class="quiz-progress-mobile">
    <div class="progress-block">
      <div class="neiros__kviz_progress_text txt-13 mb-3 white--text">
        Вопрос <span id="current-step">{{ currentQuestionIndex + 1 }}</span> из
        <span id="all-step">{{ totalQuestions }}</span>
      </div>
      <div
        class="progress-bar quiz-bar quiz-blue quiz-stripes w-100"
        :style="cssVars"
      >
        <span :style="{ width: `${progress}%` }"></span>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-between btn-block">
      <button
        class="neiros_kviz_btn_prev mr-2"
        type="button"
        @click.prevent="prev"
      >
        <img src="images/row-left.png" />
      </button>
      <button
        class="neiros_kviz_btn_next txt-13"
        :disabled="isPreventNext"
        :style="buttonColor"
        type="button"
        @click.prevent="next"
      >
        далее <img class="ml-2" src="images/row-right.PNG" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import types from '~/store/types'

export default {
  computed: {
    ...mapGetters('quiz', [
      'totalQuestions',
      'currentQuestion',
      'currentQuestionAnswers',
      'color',
    ]),
    ...mapState({
      currentQuestionIndex: (state) => state?.quiz?.currentQuestionIndex,
    }),
    progress() {
      return ((this.currentQuestionIndex * 100) / this.totalQuestions).toFixed()
    },
    isPreventNext() {
      const isOptional = this.currentQuestion?.neobbyazatelnii_vopros
      const isAnyAnswer = this.currentQuestionAnswers?.length > 0
      if (isOptional) {
        return false
      } else if (isAnyAnswer) {
        return false
      } else return true
    },
    buttonColor() {
      return {
        background: this.color,
      }
    },
    cssVars() {
      return {
        '--bg-color': this.color,
      }
    },
  },
  methods: {
    ...mapActions('quiz', [
      types.NEXT_QUESTION_ACTION,
      types.PREV_QUESTION_ACTION,
    ]),
    next() {
      this[types.NEXT_QUESTION_ACTION]()
    },
    prev() {
      this[types.PREV_QUESTION_ACTION]()
    },
  },
}
</script>

<style scoped>
.quiz-blue span {
  background-color: var(--bg-color) !important;
}
</style>
