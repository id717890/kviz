<template>
  <div>
    <!-- <div class="neiros__kviz_polls_h1">{{ question.question }}</div> -->
    <!-- <slot></slot> -->
    <div class="d-flex flex-row flex-nowrap">
      <div class="neiros__kviz_polls_h1 flex-grow-1">
        {{ question.question }}
      </div>
      <slot></slot>
    </div>
    <div class="step radio-block active">
      <div class="neiros__kviz_polls">
        <div
          v-for="(variant, index) in variants"
          :key="index"
          class="neiros__answer-variants__textVariant"
          :class="{ active: variant.isSelected }"
          :style="cssVars"
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
import { mapGetters } from 'vuex'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'
export default {
  name: 'QuestionRadioBoxVariant',
  mixins: [saveAnswerMixin],
  computed: {
    ...mapGetters('quiz', ['color']),
    cssVars() {
      return {
        '--rb-color': this.color,
        '--rb-shadow': this.shadow,
        '--rb-border': this.border,
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
input:checked + span::before {
  background: var(--rb-color) !important;
}

.neiros__answer-variants__textVariant.active,
.neiros__answer-variants__textVariant:hover {
  box-shadow: var(--rb-shadow);
  border: var(--rb-border);
}
</style>
