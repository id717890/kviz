<template>
  <div>
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="step radio-block active">
      <div class="neiros__kviz_polls">
        <div
          v-for="(variant, index) in variants"
          :key="index"
          class="neiros__answer-variants__textVariant"
          :class="{ active: variant.isSelected }"
        >
          <label class="radio">
            <input
              :checked="variant.isSelected"
              type="radio"
              name="polls-1"
              :value="variant.id"
              @change="changeRadio"
            />
            <span :style="cssVars">{{ variant.text }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'
import Constants from '~/constants'
export default {
  name: 'QuestionRadioBoxVariant',
  mixins: [saveAnswerMixin],
  computed: {
    ...mapState({
      color: (state) =>
        state?.quiz?.steps?.step5?.color || Constants.DEFAULT_COLOR_CHECK_BOX,
    }),
    cssVars() {
      return {
        '--cb-color': this.color,
      }
    },
  },
}
</script>

<style scoped>
input:checked + span::before {
  background: var(--cb-color) !important;
}
</style>
