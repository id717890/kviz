<template>
  <div>
    <div class="d-flex flex-row flex-nowrap">
      <div class="neiros__kviz_polls_h1 flex-grow-1">
        {{ question.question }}
      </div>
      <slot></slot>
    </div>
    <div class="neiros__kviz_polls-right-img step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="polls-left-part" :style="cssVars">
          <div
            v-for="(variant, index) in variants"
            :key="index"
            class="neiros__answer-variants__textVariant"
            data-img-src="~/assets/images/polls-img.JPG"
            :class="{ active: variant.isSelected }"
            :style="cssVars"
            @click.self.prevent="clickChild(index)"
          >
            <input
              :id="`cb${index}`"
              :ref="'child' + index"
              v-model="variant.isSelected"
              type="checkbox"
              :name="`checkbox-polls-${index}`"
              @change="changeCheckBoxAndImage(variant)"
            />
            <label :for="`cb${index}`" class="mb-0">
              <span :style="cssVars">{{ variant.text }}</span>
            </label>
          </div>
        </div>

        <div
          v-if="currentImage"
          class="polls-right-part d-flex justify-content-center"
        >
          <!-- <img src="~/assets/images/polls-img.JPG" /> -->
          <img class="radio-image-variant" :src="currentImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'
export default {
  name: 'QuestionCheckBoxImageVariant',
  mixins: [saveAnswerMixin],
  data: () => ({
    currentImage: null,
  }),
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
  mounted() {
    if (this.variants?.length) {
      this.currentImage = this.variants[0]?.src
      // this.currentImage = '/images/polls-img-2.JPG'
    }
  },
  methods: {
    changeCheckBoxAndImage(variant) {
      this.currentImage = variant?.src
      // this.currentImage = '/images/polls-img-2.JPG'
      this.saveAnswer()
    },
  },
}
</script>

<style scoped>
input[type='checkbox']:checked + label span::after {
  border-left: 2.5px solid var(--cb-color);
  border-bottom: 2.5px solid var(--cb-color);
}

.neiros__answer-variants__textVariant.active,
.neiros__answer-variants__textVariant:hover {
  box-shadow: var(--cb-shadow);
  border: var(--cb-border);
}

.polls-left-part::-webkit-scrollbar-thumb {
  background-color: var(--cb-color);
}
</style>
