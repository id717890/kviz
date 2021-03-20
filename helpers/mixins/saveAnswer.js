import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
import types from '~/store/types'

export default {
  mounted() {
    this.variants = this.question?.variants?.map((variant) => {
      const item = cloneDeep(variant)
      const findAnswer = this.answers?.find(
        (answer) => answer.id === variant.id
      )
      if (findAnswer) this.$set(item, 'isSelected', true)
      else this.$set(item, 'isSelected', false)
      return item
    })
  },
  computed: {
    ...mapState({
      currentQuestionIndex: (state) => state?.quiz?.currentQuestionIndex,
    }),
    ...mapGetters({
      question: 'quiz/currentQuestion',
      answers: 'quiz/currentQuestionAnswers',
    }),
  },
  methods: {
    ...mapMutations('quiz', [types.SAVE_STEP_ANSWER]),
    ...mapActions('quiz', [types.NEXT_QUESTION_ACTION]),
    saveAnswer() {
      const answers = cloneDeep(this.variants?.filter((x) => x.isSelected))
      console.log(answers)
      console.log(answers.length > 0)
      if (answers && answers.length > 0) {
        this[types.SAVE_STEP_ANSWER]({
          index: this.currentQuestionIndex,
          answers,
        })
      }
    },
    change() {
      this.saveAnswer()
    },
    changeRadio(item) {
      this.variants.forEach((variant) => {
        if (Number(variant.id) === Number(item?.target?.value))
          variant.isSelected = true
        else variant.isSelected = false
      })
      this.saveAnswer()
      this[types.NEXT_QUESTION_ACTION]()
    },
  },
}
