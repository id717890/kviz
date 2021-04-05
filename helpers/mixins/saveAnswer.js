import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { cloneDeep, debounce } from 'lodash'
import { format } from 'date-fns'
import types from '~/store/types'

export default {
  data: () => ({
    variants: [],
    textAnswer: null, // для компонента с текстовым полем
    selectedItems: null, // для компонента со списком
    datePicker: {
      dateTime1: null, // для компонента даты
      dateTime2: null, // для компонента даты
    },
    rangeValue: null, // для компонента диапазаон
    files: null, // для компонента файлы
  }),
  created() {
    const debounceTimeout = process.env.VUE_APP_DEBOUNCE_TIMEOUT ?? 1000
    this.debouncedChangeTextVariant = debounce(
      this.changeTextVariant,
      debounceTimeout
    )
    this.debouncedChangeRange = debounce(this.changeRange, debounceTimeout)
    this.debouncedClickSlide = debounce(this.clickSlide, 100)
  },
  beforeMount() {
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
      color: (state) => state?.quiz?.steps?.step5?.color,
    }),
    ...mapGetters({
      question: 'quiz/currentQuestion',
      answers: 'quiz/currentQuestionAnswers',
    }),
    isMultiple() {
      return this.question?.neskolko ?? false
    },
  },
  methods: {
    ...mapMutations('quiz', [types.SAVE_STEP_ANSWER]),
    ...mapActions('quiz', [types.NEXT_QUESTION_ACTION]),
    clickChild(index) {
      const element = this.$refs[`child${index}`][0]
      if (element) {
        element.click()
      }
    },
    convertHex(color, opacity = 1) {
      color = color.replace('#', '')
      const r = parseInt(color.substring(0, 2), 16)
      const g = parseInt(color.substring(2, 4), 16)
      const b = parseInt(color.substring(4, 6), 16)
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    },
    saveAnswer() {
      const answers = cloneDeep(this.variants?.filter((x) => x.isSelected))
      console.log(answers)
      // console.log(answers.length > 0)
      // if (answers && answers.length > 0) {
      this[types.SAVE_STEP_ANSWER]({
        index: this.currentQuestionIndex,
        answers,
      })
      // }
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
    changeRadioAndImage(item) {
      this.variants.forEach((variant) => {
        if (Number(variant.id) === Number(item?.target?.value)) {
          this.currentImage = variant?.src
          variant.isSelected = true
        } else variant.isSelected = false
      })
      this.saveAnswer()
      setTimeout(() => {
        this[types.NEXT_QUESTION_ACTION]()
      }, 750)
    },
    clickSlide(index, reallyIndex) {
      if (!this.isMultiple) {
        this.resetSelection()
      }
      this.variants?.forEach((variant, variantIndex) => {
        if (variantIndex === index) {
          console.log('find')
          if (variant.isSelected === true) {
            console.log('deselect')
            variant.isSelected = false
          } else {
            console.log('select')
            variant.isSelected = true
          }
        }
      })
      this.saveAnswer()
      if (!this.isMultiple) {
        this[types.NEXT_QUESTION_ACTION]()
      }
    },
    resetSelection() {
      this.variants?.forEach((variant) => {
        variant.isSelected = false
      })
    },
    changeTextVariant() {
      this[types.SAVE_STEP_ANSWER]({
        index: this.currentQuestionIndex,
        answers: [this.textAnswer],
      })
    },
    selectChange(items) {
      this.resetSelection()
      if (this.isMultiple) {
        this.variants.forEach((variant) => {
          const findItem = items.find((x) => x.id === variant.id)
          if (findItem) {
            variant.isSelected = true
          }
        })
        this.saveAnswer()
      } else {
        const findItem = this.variants.find((x) => x?.id === items?.id)
        if (findItem) {
          findItem.isSelected = true
        }
        this.saveAnswer()
        this[types.NEXT_QUESTION_ACTION]()
      }
    },
    dateChange() {
      const answers = []
      const dateTime1 = this.datePicker?.dateTime1
      const dateTime2 = this.datePicker?.dateTime2
      const formatDate = 'dd.MM.yyyy'
      const formatTime = 'hh:mm'

      try {
        if (dateTime1) {
          if (this.isTime) {
            answers.push(format(dateTime1, formatTime))
          } else {
            answers.push(format(dateTime1, formatDate))
          }
        }
        if (this.isDataPickerRange && dateTime2) {
          if (this.isTime) {
            answers.push(format(dateTime2, formatTime))
          } else {
            answers.push(format(dateTime2, formatDate))
          }
        }

        if (
          (this.isDataPickerRange && answers?.length === 2) ||
          (!this.isDataPickerRange && answers?.length === 1)
        ) {
          this[types.SAVE_STEP_ANSWER]({
            index: this.currentQuestionIndex,
            answers,
          })
        }
      } catch (e) {
        console.error(e)
      }
    },
    changeRange(value) {
      this[types.SAVE_STEP_ANSWER]({
        index: this.currentQuestionIndex,
        answers: [value],
      })
    },
    uploadFiles(event) {
      this.files = event.target.files
      this[types.SAVE_STEP_ANSWER]({
        index: this.currentQuestionIndex,
        answers: [this.files],
      })
    },
  },
}
