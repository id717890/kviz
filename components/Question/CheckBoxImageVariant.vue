<template>
  <div>
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="neiros__kviz_polls-right-img step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="polls-left-part">
          <div
            v-for="(variant, index) in variants"
            :key="index"
            class="neiros__answer-variants__textVariant"
            data-img-src="~/assets/images/polls-img.JPG"
            :class="{ active: variant.isSelected }"
          >
            <input
              :id="`cb${index}`"
              v-model="variant.isSelected"
              type="checkbox"
              :name="`checkbox-polls-${index}`"
              @change="changeCheckBoxAndImage(variant)"
            />
            <label :for="`cb${index}`" class="mb-0">
              <span>{{ variant.text }}</span>
            </label>
          </div>
        </div>

        <div v-if="currentImage" class="polls-right-part">
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
  name: 'QuestionCheckBoxImageVariant',
  mixins: [saveAnswerMixin],
  data: () => ({
    currentImage: null,
  }),
  mounted() {
    if (this.variants?.length) {
      // this.currentImage = this.variants[0]?.src ?? '/images/polls-img.JPG'
      this.currentImage = '/images/polls-img.JPG'
    }
  },
  methods: {
    changeCheckBoxAndImage(variant) {
      // this.currentImage = variant?.src ?? '/images/polls-img.JPG'
      this.currentImage = '/images/polls-img.JPG'
      this.saveAnswer()
    },
  },
}
</script>
