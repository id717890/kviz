<template>
  <div>
    <!-- <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <slot></slot> -->
    <div class="d-flex flex-row flex-nowrap">
      <div class="neiros__kviz_polls_h1 flex-grow-1">
        {{ question.question }}
      </div>
      <slot></slot>
    </div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div>
          <div class="file-block">
            <input
              ref="file"
              type="file"
              name="file"
              class="d-none"
              :accept="fileTypes"
              :multiple="isMultiple"
              @change="uploadFiles"
            />
            <label for="file" @click="$refs.file.click()">
              <img src="/images/icons/load-img.svg" alt="" />
              <div>
                Загрузить <br />
                файл
              </div>
            </label>
          </div>
          <div v-if="fileList.length">
            <div>Прикрепленные файлы:</div>
            <div v-for="(file, index) in fileList" :key="index">{{ file }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionFileVariant',
  mixins: [saveAnswerMixin],
  computed: {
    fileList() {
      const result = []
      this.files?.forEach((file, index) =>
        result.push(`${index + 1} - ${file?.name}`)
      )
      return result
    },
    fileTypes() {
      let acceptedTypes = 'ALL'
      if (this.question?.variants?.length > 0) {
        acceptedTypes = this.question.variants[0]?.type_files?.toUpperCase()
      }
      console.log(acceptedTypes)
      switch (acceptedTypes) {
        case 'PNG':
          return 'image/png'
        case 'JPG':
          return 'image/jpeg'
        default:
          return ''
      }
    },
  },
  mounted() {
    if (this.answers?.length > 0) {
      this.files = this.answers[0]
    }
  },
}
</script>
