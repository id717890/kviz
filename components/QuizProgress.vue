<template>
  <div>
    <div class="neiros__kviz_progress_text">
      Вопрос <span id="current-step">{{ currentQuestionIndex + 1 }}</span> из
      <span id="all-step">{{ totalQuestions }}</span>
    </div>
    <div class="progress-bar quiz-bar quiz-blue quiz-stripes w-100">
      <span :style="{ width: `${progress}%` }"></span>
    </div>
    <div class="mt-9 d-flex flex-row justify-content-between">
      <button class="neiros_kviz_btn_prev" @click="prev">
        <img src="images/row-left.png" /> <span>назад</span>
      </button>
      <button
        class="neiros_kviz_btn_next"
        :disabled="isPreventNext"
        @click="next"
      >
        далее <img src="images/row-right.PNG" />
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
