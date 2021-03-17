<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме?</div>
    <div class="neiros__kviz_polls-right-img step radio-block active">
      <div class="neiros__kviz_polls">
        <div class="polls-left-part">
          <div
            class="neiros__answer-variants__textVariant active"
            data-img-src="~/assets/images/polls-img.JPG"
          >
            <label class="radio">
              <input type="radio" name="r" value="1" />
              <span>Каждый день3</span>
            </label>
          </div>

          <div
            class="neiros__answer-variants__textVariant"
            data-img-src="~/assets/images/polls-img-2.JPG"
          >
            <label class="radio">
              <input type="radio" name="r" value="1" />
              <span>Продвижение бизнеса</span>
            </label>
          </div>

          <div
            class="neiros__answer-variants__textVariant"
            data-img-src="~/assets/images/polls-img.JPG"
          >
            <label class="radio">
              <input type="radio" name="r" value="1" />
              <span>5 раз в неделю</span>
            </label>
          </div>

          <div
            class="neiros__answer-variants__textVariant"
            data-img-src="~/assets/images/polls-img-2.JPG"
          >
            <label class="radio">
              <input type="radio" name="r" value="1" />
              <span>Бизнер работает без моего участия</span>
            </label>
          </div>
        </div>

        <div class="polls-right-part">
          <img src="~/assets/images/polls-img.JPG" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCheckBoxVariantImage',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>
