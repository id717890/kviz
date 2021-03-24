<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме? Text</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros__slider_block flex-grow-1">
          <vue-range-slider
            v-if="rangeValue"
            ref="slider"
            v-model="rangeValue"
            height="10"
            :min="minValue"
            :max="maxValue"
            :step="step"
            :bg-style="bgStyle"
            :process-style="processStyle"
            :tooltip-style="tooltipStyle"
            @slide-end="debouncedChangeRange"
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
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionRangeVariant',
  components: { VueRangeSlider },
  mixins: [saveAnswerMixin],
  data: () => ({
    minValue: 0,
    maxValue: 100,
    step: 1,
  }),
  computed: {
    isRangeDouble() {
      return this.question?.diapazon_polzunka ?? false
    },
  },
  created() {
    // this.minValue = 0
    // this.maxValue = 100
    // this.step = 1
    // this.rangeValue = 10
    this.bgStyle = {
      backgroundColor: '#1FE7FF',
      boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)',
    }
    this.processStyle = {
      backgroundColor: '#03A7D5',
    }
    this.tooltipStyle = {
      backgroundColor: '#666',
      borderColor: '#666',
    }
  },
  mounted() {
    const min = parseInt(this.question?.diapazon_dat_ot)
    const max = parseInt(this.question?.diapazon_dat_do)
    const step = parseInt(this.question?.diapazon_dat_step)
    this.minValue = Number.isInteger(min) ? min : 0
    this.maxValue = Number.isInteger(max) ? max : 1000
    this.step = Number.isInteger(step) ? step : 1
    if (this.isRangeDouble) {
      this.rangeValue = [this.minValue, this.maxValue]
    } else {
      this.rangeValue = this.minValue
    }
    if (this.answers?.length === 1) {
      this.rangeValue = this.answers[0]
    }
  },
}
</script>
