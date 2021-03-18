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
          <div style="padding-bottom: 400px">
            <CheckBoxVariant :items="[]" />
            <RadioBoxVariant :items="[]" />
            <RadioBoxVariantImage :items="[]" />
            <RadioBoxSwiperSlider :items="[]" />
            <ComboBoxVariant :items="[]" />
            <TextVariant :items="[]" />
            <DatePickerVariant :items="[]" />
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
import RadioBoxSwiperSlider from '~/components/Question/RadioBoxSwiperSlider'
import ComboBoxVariant from '~/components/Question/ComboBoxVariants'
import TextVariant from '~/components/Question/TextVariant'
import DatePickerVariant from '~/components/Question/DatePickerVariant'

export default {
  components: {
    CheckBoxVariant,
    RadioBoxVariant,
    RadioBoxVariantImage,
    RadioBoxSwiperSlider,
    ComboBoxVariant,
    TextVariant,
    DatePickerVariant,
  },
  computed: {
    ...mapState({
      kviz: (state) => state.kviz.steps,
    }),
  },
}
</script>
