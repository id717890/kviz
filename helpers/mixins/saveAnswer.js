import { mapMutations, mapState, mapGetters } from 'vuex'
import { cloneDeep } from 'lodash'
import types from '~/store/types'

export default {
  mounted() {
    this.variants = this.question?.variants?.map((x) => {
      const item = cloneDeep(x)
      this.$set(item, 'isSelected', false)
      return item
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
        answers: cloneDeep(this.variants?.filter((x) => x.isSelected)),
      })
    },
  },
}
