<template>
  <div>
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros___polls_date active flex-grow-1">
          <div class="container-fluid pa-0">
            <div class="row">
              <div class="col-6">
                <date-picker
                  v-model="datePicker.dateTime1"
                  :format="formatPicker"
                  class="neiros__datepicker__vue"
                  :type="typePicker"
                  placeholder="Выберите дату"
                  @input="dateChange"
                ></date-picker>
              </div>
              <div v-if="isDataPickerRange" class="col-6">
                <date-picker
                  v-model="datePicker.dateTime2"
                  :format="formatPicker"
                  class="neiros__datepicker__vue"
                  :type="typePicker"
                  placeholder="Выберите дату"
                  @input="dateChange"
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
import { parse } from 'date-fns'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionDatePickerVariant',
  components: { DatePicker },
  mixins: [saveAnswerMixin],
  computed: {
    isDataPickerRange() {
      return this.question?.vibor_diapazon_dat
    },
    isTime() {
      return this.question?.vibor_vremeni
    },
    typePicker() {
      if (this.isTime) return 'time'
      return 'date'
    },
    formatPicker() {
      if (this.isTime) return 'hh:mm'
      return 'DD.MM.YYYY'
    },
  },
  mounted() {
    try {
      const formating = this.isTime ? 'hh:mm' : 'dd.MM.yyyy'
      if (this.isDataPickerRange && this.answers?.length === 2) {
        this.datePicker.dateTime1 = parse(
          this.answers[0],
          formating,
          new Date()
        )
        this.datePicker.dateTime2 = parse(
          this.answers[1],
          formating,
          new Date()
        )
      } else if (!this.isDataPickerRange && this.answers?.length === 1) {
        this.datePicker.dateTime1 = parse(
          this.answers[0],
          formating,
          new Date()
        )
      }
    } catch (e) {
      console.error('DATE_PICKER ERROR', e)
    }
  },
}
</script>
