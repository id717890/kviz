<template>
  <div id="#neiros__kviz_iframe">
    <div class="neiros__container_kviz">
      <div class="neiros__block_kviz_left ferst_polls_block">
        <div class="neiros__block_kviz_cov">
          <div class="neiros__top_copyright">
            <img src="~/assets/images/check-element.PNG" />
            <span
              >Пройдите тест и узнайте какие инструменты использовать для
              увеличения продаж</span
            >
          </div>
          <div class="">
            <CheckBoxVariant :items="[]" />
            <RadioBoxVariant :items="[]" />
            <RadioBoxVariantImage :items="[]" />
            <RadioBoxVariant :items="[]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CheckBoxVariant from '~/components/Question/CheckBoxVariants'
import RadioBoxVariant from '~/components/Question/RadioBoxVariants'
import RadioBoxVariantImage from '~/components/Question/RadioBoxVariantsImage'
export default {
  components: { CheckBoxVariant, RadioBoxVariant, RadioBoxVariantImage },
  computed: {
    ...mapState({
      kviz: (state) => state.kviz.steps,
    }),
  },
}
</script>
