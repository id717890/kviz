<template>
  <div>
    <!-- <div class="neiros__kviz_polls_h1">{{ question.question }}</div> -->
    <!-- <slot></slot> -->
    <div class="d-flex flex-row flex-nowrap">
      <div class="neiros__kviz_polls_h1 flex-grow-1">
        {{ question.question }}
      </div>
      <slot></slot>
    </div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros___polls_select step active w100">
          <vue-select
            v-model="selectedItems"
            :placeholder="placeholder"
            :clearable="false"
            class="kviz-select-field"
            name="select1"
            label="text"
            :options="variants"
            :multiple="isMultiple"
            @input="selectChange"
          >
          </vue-select>
          <!-- <VueSelect :options="['qwe', 'www']" /> -->
          <!-- <select id="neiros___polls_select">
            <option></option>
            <option value="1">Продвижение бизнеса5</option>
            <option value="2">Количество прибыли5</option>
            <option value="3">Поиск сотрудников</option>
            <option value="4">Услуги</option>
            <option value="5">Для себя</option>
          </select> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from 'vue-select'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

export default {
  name: 'QuestionComboBoxVariant',
  components: {
    'vue-select': VueSelect,
  },
  mixins: [saveAnswerMixin],
  computed: {
    placeholder() {
      return this.question?.primer_otveta || 'Выберите вариант из списка'
    },
  },
  mounted() {
    if (this.answers) {
      this.selectedItems = this.answers
    }
  },
}
</script>
