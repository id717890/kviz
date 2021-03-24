<template>
  <div id="neiros__kviz_iframe">
    <div class="neiros__container_kviz">
      <div class="neiros__block_kviz_left ferst_polls_block">
        <div class="neiros__block_kviz_cov">
          <div class="neiros__top_copyright">
            <img src="~/assets/images/check-element.PNG" />
            <span
              >Пройдите тест и узнайте какие инструменты использовать для
              увеличения продаж</span
            >
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <component :is="question" v-if="question"></component>
            <!-- <RadioBoxVariantImage :items="[]" /> -->
            <!-- <CheckBoxVariant :items="[]" />
            <RadioBoxVariant :items="[]" />
            <RadioBoxVariantImage :items="[]" />
            <RadioBoxSwiperSlider :items="[]" />
            <ComboBoxVariant :items="[]" />
            <TextVariant :items="[]" />
            <DatePickerVariant :items="[]" />
            <SliderVariant :items="[]" /> -->
          </div>
          <div>
            <QuizProgress />
          </div>
          <!-- <div class="neiros__block_kviz_btn_footer">
            <div class="neiros__kviz_progress_block">
              <div class="neiros__kviz_progress_block_xs">
                <div class="neiros__kviz_progress_text">
                  Вопрос <span id="current-step">1</span> из
                  <span id="all-step">7</span>
                </div>
                <div class="progress-bar blue stripes">
                  <span style="width: 20%"></span>
                </div>
              </div>
            </div>

            <div class="neiros__block_btn_footer">
              <div class="neiros__block_kviz_btn_left">
                <button id="neiros__prev" disabled="disabled">
                  <img src="images/row-left.png" /> <span>назад</span>
                </button>
              </div>
              <div class="neiros__block_kviz_btn_right">
                <button id="neiros__next">
                  далее <img src="images/row-right.PNG" />
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="neiros__block_kviz_right ferst_polls_block">
        <div class="neiros__right_sidebar">
          <div class="neiros__block_seles_top">
            <div class="neiros__border_sb">
              <div class="neiros__left_sele">
                <div class="neiros__top_descr">Ваша скидка</div>
                <div class="neiros__top_price">2345 Р</div>
              </div>
              <div class="neiros__right_sele">
                <div><img src="images/lightning.PNG" /></div>
                <div>+ 500 Р за ответ</div>
              </div>
            </div>
          </div>

          <div class="neiros__block_operator">
            <div class="neiros___left">
              <img src="images/operator3.JPG" />
            </div>
            <div class="neiros___right">
              <div class="neiros__status">
                <div class="neiros__status_icon"></div>
                Онлайн
              </div>
              <div class="neiros__name_operator">Владимир</div>
              <div class="neiros__work_operator">Ведущий программист</div>
            </div>
          </div>

          <div class="neiros__block_bonus">
            <img src="images/bonus-img2.PNG" alt="" />
            <div class="neiros__text_bonus">
              + Полное рукводство<br />
              для вашего бизнеса<br />
              <span>в подарок</span>
            </div>
            <div class="neiros__text_bonus_dop">
              Пройдите тест до конца, чтобы получить<br />
              подробные инструкци
            </div>
          </div>

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
import SliderVariant from '~/components/Question/SliderVariant'
import QuizProgress from '~/components/QuizProgress'
import QuestionNotFound from '~/components/Question/NotFound'
import Constants from '~/constants'
import types from '~/store/types'

const CHECK_OR_RADIO_VARIANTS = 'VAR-OTVETOV'
const CHECK_OR_RADIO_IMAGE_VARIANTS = 'VAR-S-KARTINAMI'
const CHECK_OR_RADIO_AND_IMAGE_VARIANTS = 'VAR-I-KARTINKA'
const TEXT_VARIANT = 'POLE-DLYA-VVODA'
const COMBOBOX_VARIANT = 'VIPADAYSHII-SPISOK'

export default {
  components: {
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
    SliderVariant,
    QuizProgress,
    [Constants.QUESTION_TYPE.QUESTION_NOT_FOUND]: QuestionNotFound,
  },
  computed: {
    ...mapGetters('quiz', ['currentQuestion']),
    ...mapState({
      kviz: (state) => state.kviz.steps,
    }),
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
      }
      return Constants.QUESTION_TYPE.QUESTION_NOT_FOUND
    },
  },
  async mounted() {},
  async created() {
    await this[types.FETCH_QUIZ_CONFIG_ACTION]('qweqwe')
  },
  methods: {
    ...mapActions('quiz', [types.FETCH_QUIZ_CONFIG_ACTION]),
  },
}
</script>
