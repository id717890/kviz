<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме?</div>
    <div class="step radio-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros__answer-variants__textVariant">
          <label class="radio">
            <input type="radio" name="polls-1" value="1" />
            <span>Каждый день2</span>
          </label>
        </div>

        <div class="neiros__answer-variants__textVariant">
          <label class="radio">
            <input type="radio" name="polls-1" value="1" />
            <span>Продвижение бизнеса</span>
          </label>
        </div>

        <div class="neiros__answer-variants__textVariant">
          <label class="radio">
            <input type="radio" name="polls-1" value="1" />
            <span>5 раз в неделю</span>
          </label>
        </div>

        <div class="neiros__answer-variants__textVariant">
          <label class="radio">
            <input type="radio" name="polls-1" value="1" />
            <span>Бизнер работает без моего участия</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCheckBoxVariant',
}
</script>
