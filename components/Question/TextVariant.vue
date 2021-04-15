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
        <div
          class="neiros___polls_text step active flex-grow-1"
          :style="cssVars"
        >
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
import { mapGetters } from 'vuex'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionTextVariant',
  mixins: [saveAnswerMixin],
  data: () => ({}),
  computed: {
    ...mapGetters('quiz', ['color']),
    cssVars() {
      return {
        '--color': this.color,
      }
    },
  },
  beforeMount() {
    if (this.answers?.length) {
      this.textAnswer = this.answers[0]
    }
  },
}
</script>

<style scoped>
.neiros___polls_text textarea {
  border: 1px solid var(--color);
}

.neiros___polls_text textarea:focus {
  outline: 0.3px solid var(--color);
}
</style>
