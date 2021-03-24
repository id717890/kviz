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
          >
            <label class="radio">
              <input
                :checked="variant.isSelected"
                :value="variant.id"
                type="radio"
                name="r"
                @change="changeRadioAndImage"
              />
              <span>{{ variant.text }}</span>
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
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'
export default {
  name: 'QuestionRadioBoxImageVariant',
  mixins: [saveAnswerMixin],
  data: () => ({
    currentImage: null,
  }),
  mounted() {
    if (this.variants?.length) {
      this.currentImage = this.variants[0]?.src
    }
  },
}
</script>
