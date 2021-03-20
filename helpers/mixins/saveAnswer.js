import { mapMutations, mapState, mapGetters } from 'vuex'
import types from '~/store/types'

export default {
  mounted() {
    this.variants = this.question?.variants?.map((x) => {
      x.isSelected = false
      return x
    })
  },
  computed: {
    ...mapState({
      currentQuestionIndex: (state) => state?.quiz?.currentQuestionIndex,
    }),
    ...mapGetters({
      question: 'quiz/currentQuestion',
    }),
  },
  methods: {
    ...mapMutations('quiz', [types.SAVE_STEP_ANSWER]),
    change() {
      this[types.SAVE_STEP_ANSWER]({
        index: this.currentQuestionIndex,
        answers: this.variants?.filter((x) => x.isSelected),
      })
    },
  },
}
