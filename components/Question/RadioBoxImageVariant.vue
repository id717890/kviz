<template>
  <div>
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="neiros__kviz_polls-right-img step radio-block active">
      <div class="neiros__kviz_polls">
        <div class="polls-left-part">
          <div
            v-for="(variant, index) in variants"
            :key="index"
            class="neiros__answer-variants__textVariant"
            :class="{ active: variant.isSelected }"
            :data-img-src="variant.src"
            :style="cssVars"
          >
            <label class="radio">
              <input
                :checked="variant.isSelected"
                :value="variant.id"
                type="radio"
                name="r"
                @change="changeRadioAndImage"
              />
              <span :style="cssVars">{{ variant.text }}</span>
            </label>
          </div>
        </div>
        <div class="polls-right-part">
          <!-- <img src="~/assets/images/polls-img.JPG" /> -->
          <img :src="currentImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'
export default {
  name: 'QuestionRadioBoxImageVariant',
  mixins: [saveAnswerMixin],
  data: () => ({
    currentImage: null,
  }),
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
  mounted() {
    if (this.variants?.length) {
      this.currentImage = this.variants[0]?.src
    }
  },
}
</script>

<style scoped>
input:checked + span::before {
  background: var(--rb-color) !important;
}

.neiros__answer-variants__textVariant.active {
  box-shadow: var(--rb-shadow);
  border: var(--rb-border);
}
</style>
