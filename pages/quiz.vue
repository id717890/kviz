<template>
  <div id="neiros__kviz_iframe">
    <div class="neiros__container_kviz">
      <div class="neiros__block_kviz_left ferst_polls_block">
        <div class="neiros__block_kviz_cov">
          <div class="neiros__top_copyright d-flex align-items-center">
            <CheckSquareSvg class="check-square-svg mr-1" />
            <!-- <img src="~/assets/images/check-element.PNG" /> -->
            <span class="mt-1">
              {{ quizName }}
              <!-- Пройдите тест и узнайте какие инструменты использовать для -->
              <!-- увеличения продаж -->
            </span>
          </div>
          <div class="quiz-container">
            <component :is="question" v-if="question">
              <div v-if="isAllowSkip" class="mb-5">
                <a
                  href="#"
                  class="btn btn-skip-step btn-sm"
                  @click.prevent="skipStep"
                >
                  Можно пропустить
                </a>
              </div>
            </component>
          </div>
          <div>
            <QuizProgress />
          </div>
        </div>
      </div>
      <div class="neiros__block_kviz_right ferst_polls_block">
        <div class="neiros__right_sidebar">
          <Discount />
          <Operator />
          <StepBonus v-if="isShowBonus1">
            <div class="text-bonus-dop">
              Пройдите тест до конца, чтобы получить бонус
            </div>
          </StepBonus>
          <div class="neiros__footer">
            <span>Сделано в</span> <img src="images/logo-kviz.PNG" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import CheckBoxVariant from '~/components/Question/CheckBoxVariant'
import CheckBoxImageVariant from '~/components/Question/CheckBoxImageVariant'
import RadioBoxVariant from '~/components/Question/RadioBoxVariant'
import RadioBoxImageVariant from '~/components/Question/RadioBoxImageVariant'
import SliderImageVariants from '~/components/Question/SliderImageVariants'
import ComboBoxVariant from '~/components/Question/ComboBoxVariant'
import TextVariant from '~/components/Question/TextVariant'
import DatePickerVariant from '~/components/Question/DatePickerVariant'
import RangeVariant from '~/components/Question/RangeVariant'
import FileVariant from '~/components/Question/FileVariant'
import QuizProgress from '~/components/QuizProgress'
import QuestionNotFound from '~/components/Question/NotFound'
import Constants from '~/constants'
import types from '~/store/types'
import Operator from '~/components/Operator'
import Discount from '~/components/Discount'
import StepBonus from '~/components/BonusSteps'
import CheckSquareSvg from '~/components/SVG/CheckSquare'

const CHECK_OR_RADIO_VARIANTS = 'VAR-OTVETOV'
const CHECK_OR_RADIO_IMAGE_VARIANTS = 'VAR-S-KARTINAMI'
const CHECK_OR_RADIO_AND_IMAGE_VARIANTS = 'VAR-I-KARTINKA'
const TEXT_VARIANT = 'POLE-DLYA-VVODA'
const COMBOBOX_VARIANT = 'VIPADAYSHII-SPISOK'
const DATE_PICKER = 'DATA'
const RANGE = 'POLZYNOK'
const FILE_VARIANT = 'TIME-PAGE'

export default {
  components: {
    Operator,
    Discount,
    StepBonus,
    [Constants.QUESTION_TYPE.CHECK_BOX_TEXT_VARIANTS]: CheckBoxVariant,
    [Constants.QUESTION_TYPE
      .CHECK_BOX_TEXT_AND_IMAGE_VARIANTS]: CheckBoxImageVariant,
    [Constants.QUESTION_TYPE.RADIO_BOX_TEXT_VARIANTS]: RadioBoxVariant,
    [Constants.QUESTION_TYPE
      .RADIO_BOX_TEXT_AND_IMAGE_VARIANTS]: RadioBoxImageVariant,
    [Constants.QUESTION_TYPE.RADIO_BOX_SWIPER_SLIDER]: SliderImageVariants,
    [Constants.QUESTION_TYPE.TEXT_VARIANT]: TextVariant,
    [Constants.QUESTION_TYPE.COMBO_BOX_VARIANTS]: ComboBoxVariant,
    [Constants.QUESTION_TYPE.DATE_PICKER_VARIANTS]: DatePickerVariant,
    [Constants.QUESTION_TYPE.RANGE_VARIANTS]: RangeVariant,
    [Constants.QUESTION_TYPE.FILE_VARIANTS]: FileVariant,
    QuizProgress,
    [Constants.QUESTION_TYPE.QUESTION_NOT_FOUND]: QuestionNotFound,
    CheckSquareSvg,
  },
  computed: {
    ...mapGetters('quiz', ['currentQuestion', 'currentQuestionAnswers']),
    ...mapState({
      quiz: (state) => state?.quiz?.steps,
      isActiveBonus: (state) => state?.quiz?.steps?.step3?.bonus?.is_checked,
      bonusStep: (state) => state?.quiz?.steps?.step3?.bonus?.first,
    }),
    quizName() {
      return this.quiz?.name || 'Название квиза'
    },
    isShowBonus1() {
      const isShow = this.bonusStep?.first
      if (!this.isActiveBonus) return false
      if (isShow === false || isShow === true) {
        return isShow
      }
      return true
    },
    isAllowSkip() {
      return this.currentQuestion?.neobbyazatelnii_vopros === true
    },
    chatMessage() {
      return this.currentQuestion?.massage
    },
    question() {
      const questionType = this.currentQuestion?.tip_oprosa?.toUpperCase()
      // console.log(questionType)
      switch (questionType) {
        case CHECK_OR_RADIO_VARIANTS: {
          const multiple = this.currentQuestion?.neskolko
          if (multiple) {
            return Constants.QUESTION_TYPE.CHECK_BOX_TEXT_VARIANTS
          } else {
            return Constants.QUESTION_TYPE.RADIO_BOX_TEXT_VARIANTS
          }
        }
        case CHECK_OR_RADIO_IMAGE_VARIANTS: {
          // const multiple = this.currentQuestion?.neskolko
          return Constants.QUESTION_TYPE.RADIO_BOX_SWIPER_SLIDER
        }
        case CHECK_OR_RADIO_AND_IMAGE_VARIANTS: {
          const multiple = this.currentQuestion?.neskolko
          if (multiple) {
            return Constants.QUESTION_TYPE.CHECK_BOX_TEXT_AND_IMAGE_VARIANTS
          } else {
            return Constants.QUESTION_TYPE.RADIO_BOX_TEXT_AND_IMAGE_VARIANTS
          }
        }
        case TEXT_VARIANT: {
          return Constants.QUESTION_TYPE.TEXT_VARIANT
        }
        case COMBOBOX_VARIANT: {
          return Constants.QUESTION_TYPE.COMBO_BOX_VARIANTS
        }
        case DATE_PICKER: {
          return Constants.QUESTION_TYPE.DATE_PICKER_VARIANTS
        }
        case RANGE: {
          return Constants.QUESTION_TYPE.RANGE_VARIANTS
        }
        case FILE_VARIANT: {
          return Constants.QUESTION_TYPE.FILE_VARIANTS
        }
      }
      return Constants.QUESTION_TYPE.QUESTION_NOT_FOUND
    },
  },
  async created() {
    // await this[types.FETCH_QUIZ_CONFIG_ACTION]('qweqwe')
    await this.$store.dispatch('quiz/FETCH_QUIZ_CONFIG_ACTION', 'qweqwe')
  },
  methods: {
    ...mapActions('quiz', [types.NEXT_QUESTION_ACTION]),
    skipStep() {
      this[types.NEXT_QUESTION_ACTION]()
    },
    // ...mapActions('quiz', [types.FETCH_QUIZ_CONFIG_ACTION]),
  },
}
</script>
