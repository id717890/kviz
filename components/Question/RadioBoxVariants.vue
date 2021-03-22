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
            <span>Каждый день2</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionRadioBoxVariant',
  mixins: [saveAnswerMixin],
  data: () => ({
    variants: [],
  }),
}
</script>
