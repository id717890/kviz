<template>
  <div>
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros___polls_text step active flex-grow-1">
          <textarea
            id="neiros___polls_textarea"
            v-model="textAnswer"
            maxlength="1000"
            autocomplete="off"
            placeholder="Напишите свой ответ"
            @input="debouncedChangeTextVariant"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionTextVariant',
  mixins: [saveAnswerMixin],
  data: () => ({}),
  beforeMount() {
    if (this.answers?.length) {
      this.textAnswer = this.answers[0]
    }
  },
}
</script>
