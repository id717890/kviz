<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме? Text</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros___polls_text step active flex-grow-1">
          <textarea
            id="neiros___polls_textarea"
            maxlength="1000"
            autocomplete="off"
            placeholder="Напишите свой ответ"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionTextareaVariant',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    result1: null,
  }),
}
</script>
