<template>
  <div>
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="step checkbox-block active">
      <div v-if="variants" class="neiros__kviz_polls">
        <div
          v-for="(variant, index) in variants"
          :key="index"
          class="neiros__answer-variants__textVariant"
          :class="{ active: variant.isSelected }"
        >
          <input
            :id="`cb${index}`"
            v-model="variant.isSelected"
            type="checkbox"
            :name="`checkbox-polls-${index}`"
            @change="change"
          />
          <label :for="`cb${index}`" class="mb-0">
            <span>Каждый день1</span>
          </label>
        </div>

        <!-- <div class="neiros__answer-variants__textVariant">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionCheckBoxVariant',
  mixins: [saveAnswerMixin],
  data: () => ({
    variants: [],
  }),
}
</script>
