<template>
  <div>
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="step checkbox-block active">
      <div v-if="variants" class="neiros__kviz_polls">
        <div
          v-for="(variant, index) in variants"
          :key="index"
          class="neiros__answer-variants__textVariant"
          :class="{ active: variant.isSelected }"
          :style="cssVars"
        >
          <input
            :id="`cb${index}`"
            v-model="variant.isSelected"
            type="checkbox"
            :name="`checkbox-polls-${index}`"
            @change="change"
          />
          <label :for="`cb${index}`" class="mb-0">
            <span :style="cssVars">{{ variant.text }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'
export default {
  name: 'QuestionCheckBoxVariant',
  mixins: [saveAnswerMixin],
  computed: {
    ...mapGetters('quiz', ['color']),
    cssVars() {
      return {
        '--cb-color': this.color,
        '--cb-shadow': this.shadow,
        '--cb-border': this.border,
      }
    },
    shadow() {
      const rgb = this.convertHex(this.color, 0.3)
      return `0px 0px 5px ${rgb}`
    },
    border() {
      const rgb = this.convertHex(this.color, 0.55)
      return `1px solid ${rgb}`
    },
  },
}
</script>

<style scoped>
input[type='checkbox']:checked + label span::after {
  border-left: 2.5px solid var(--cb-color);
  border-bottom: 2.5px solid var(--cb-color);
}

.neiros__answer-variants__textVariant.active {
  box-shadow: var(--cb-shadow);
  border: var(--cb-border);
}
</style>
