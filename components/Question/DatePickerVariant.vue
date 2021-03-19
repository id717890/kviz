<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме? Text</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros___polls_date active flex-grow-1">
          <div class="container-fluid pa-0">
            <div class="row">
              <div class="col-6">
                <date-picker
                  v-model="time1"
                  format="DD.MM.YYYY"
                  class="neiros__datepicker__vue"
                  type="date"
                  placeholder="Выберите дату"
                ></date-picker>
              </div>
              <div class="col-6">
                <date-picker
                  v-model="time2"
                  format="DD.MM.YYYY"
                  class="neiros__datepicker__vue"
                  type="date"
                  placeholder="Выберите дату"
                ></date-picker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/ru'
export default {
  name: 'QuestionDatePickerVariant',
  components: { DatePicker },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    result1: null,
    time1: null,
    time2: null,
    time3: null,
  }),
}
</script>
