<template>
  <div>
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме? CB</div>
    <div class="step checkbox-block active">
      <div class="neiros__kviz_polls">
        <div class="neiros___polls_select step active w100">
          <vue-select
            placeholder="Выберите вариант из списка"
            :clearable="false"
            class="kviz-select-field"
            name="select1"
            :options="options1"
            :model="result1"
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
export default {
  name: 'QuestionComboBoxVariant',
  components: {
    'vue-select': VueSelect,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    options1: [
      'Продвижение бизнеса5',
      'Количество прибыли5',
      'Поиск сотрудников',
      'Услуги',
      'Для себя',
    ],
    result1: null,
  }),
}
</script>
