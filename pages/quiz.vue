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
            <component :is="question" :items="[]"></component>
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
import { mapState, mapGetters } from 'vuex'
import CheckBoxVariant from '~/components/Question/CheckBoxVariants'
import RadioBoxVariant from '~/components/Question/RadioBoxVariants'
import RadioBoxVariantImage from '~/components/Question/RadioBoxVariantsImage'
import RadioBoxSwiperSlider from '~/components/Question/RadioBoxSwiperSlider'
import ComboBoxVariant from '~/components/Question/ComboBoxVariants'
import TextVariant from '~/components/Question/TextVariant'
import DatePickerVariant from '~/components/Question/DatePickerVariant'
import SliderVariant from '~/components/Question/SliderVariant'
import QuizProgress from '~/components/QuizProgress'
import Constants from '~/constants'

export default {
  components: {
    [Constants.QUESTION_TYPE.CHECK_BOX_TEXT_VARIANTS]: CheckBoxVariant,
    RadioBoxVariant,
    RadioBoxVariantImage,
    RadioBoxSwiperSlider,
    [Constants.QUESTION_TYPE.COMBO_BOX_VARIANTS]: ComboBoxVariant,
    TextVariant,
    [Constants.QUESTION_TYPE.DATE_PICKER_VARIANTS]: DatePickerVariant,
    SliderVariant,
    QuizProgress,
  },
  computed: {
    ...mapGetters('quiz', ['currentQuestion']),
    ...mapState({
      kviz: (state) => state.kviz.steps,
    }),
    question() {
      return this.currentQuestion?.type
    },
  },
}
</script>
