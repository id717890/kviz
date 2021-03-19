<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме?</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros__answer-variants__textVariant active">
          <input id="cb1" type="checkbox" name="checkbox-polls-1" />
          <label for="cb1" class="mb-0"><span>Каждый день1</span></label>
        </div>

        <div class="neiros__answer-variants__textVariant">
          <input id="cb2" type="checkbox" name="checkbox-polls-2" />
          <label for="cb2"><span>Продвижение бизнеса</span></label>
        </div>

        <div class="neiros__answer-variants__textVariant">
          <input id="cb3" type="checkbox" name="checkbox-polls-3" />
          <label for="cb3"><span>5 раз в неделю</span></label>
        </div>

        <div class="neiros__answer-variants__textVariant">
          <input id="cb4" type="checkbox" name="checkbox-polls-4" />
          <label for="cb4"
            ><span>Бизнер работает без моего участия</span></label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCheckBoxVariant',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>
