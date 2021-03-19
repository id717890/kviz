<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме? Text</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros__slider_block flex-grow-1">
          <vue-range-slider
            ref="slider"
            v-model="value"
            height="10"
            :min="1"
            :max="200"
            :bg-style="bgStyle"
            :process-style="processStyle"
          ></vue-range-slider>
          <!-- <div class="min_value"></div> -->
          <!-- <div id="slider"> -->
          <!-- <div id="custom-handle" class="ui-slider-handle"></div> -->
          <!-- </div> -->
          <!-- <div class="max_value"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
  name: 'QuestionSliderVariant',
  components: { VueRangeSlider },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    value: 10,
    bgStyle: {
      backgroundColor: '#1FE7FF',
      boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)',
    },
    processStyle: {
      backgroundColor: '#03A7D5',
    },
  }),
}
</script>
