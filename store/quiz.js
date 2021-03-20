import types from './types'
import Constants from '~/constants'
// import QuizApi from '~/api/Quiz'

export const state = () => ({
  id: null,
  currentQuestion: 0,
  steps: {
    step1: {
      title: '',
      subtitle: '',
      buttonText: '',
      isActive: true,
    },
    step2: [
      {
        id: 1,
        type: Constants.QUESTION_TYPE.CHECK_BOX_TEXT_VARIANTS,
        question: 'q1',
      },
      // {
      //   id: 2,
      //   type: Constants.QUESTION_TYPE.COMBO_BOX_VARIANTS,
      //   question: 'q2',
      // },
      // {
      //   id: 3,
      //   type: Constants.QUESTION_TYPE.DATE_PICKER_VARIANTS,
      //   question: 'q3',
      // },
      // {
      //   id: 4,
      //   type: Constants.QUESTION_TYPE.CHECK_BOX_TEXT_VARIANTS,
      //   question: 'q4',
      // },
    ],
    step3: null,
  },
})

export const getters = {
  totalQuestions(state) {
    return state?.steps?.step2?.length
  },
  currentQuestion(state, getters) {
    return state?.steps?.step2[state?.currentQuestion]
  },
}

export const actions = {
  [types.FETCH_QUIZ_CONFIG_ACTION]: async ({ commit }, id) => {
    try {
      // const { data } = await QuizApi.getQuizConfig()
      commit(types.SET_QUIZ_ID, id)
      commit(types.SET_QUIZ_STEPS, fake?.data)
      // commit(types.SET_QUIZ_STEPS, data?.data)
    } catch (e) {
      console.log('FETCH_QUIZ_CONFIG_ACTION', e)
    }
  },
  [types.NEXT_QUESTION_ACTION]: ({ commit, getters, state }) => {
    const total = getters.totalQuestions
    const current = state.currentQuestion
    if (current < total - 1) {
      commit(types.SET_CURRENT_QUESTION, current + 1)
    } else if (current === total - 1) {
      // eslint-disable-next-line no-undef
      $nuxt.$router.push({ name: 'finish' })
    }
  },
  [types.PREV_QUESTION_ACTION]: ({ commit, state }) => {
    const current = state.currentQuestion
    if (current > 0) {
      commit(types.SET_CURRENT_QUESTION, current - 1)
    }
  },
}

export const mutations = {
  [types.SET_QUIZ_STEPS]: (state, steps) => {
    state.steps = steps
  },
  [types.SET_CURRENT_QUESTION]: (state, current) => {
    state.currentQuestion = current
  },
  [types.NEXT_QUESTION]: (state) => {
    state.currentQuestion--
  },
  [types.SET_QUIZ_ID]: (state, id) => {
    state.id = id
  },
}

const fake = {
  id: 1,
  widget_id: null,
  data: {
    step1: {
      title: 'йцу',
      subtite: 'ц',
      button_text: 'ццц',
    },
    step2: [
      {
        variants: [
          {
            id: '1',
            text: 'й1',
          },
          {
            id: '2',
            text: 'й2',
          },
          {
            id: '3',
            text: 'й3',
          },
        ],
        tip_oprosa: 'var-otvetov',
        optional: 'true',
        diapazon_polzunka: 'true',
        neskolko: 'false',
        vibor_diapazon_dat: 'false',
        vibor_vremeni: 'false',
        neobbyazatelnii_vopros: 'true',
        question: 'Вопрос 1',
        massage: 'Вопрос 1 Вопрос 1 Вопрос 1 Вопрос 1 Вопрос 1 Вопрос 1',
      },
      {
        variants: [
          {
            id: '1',
            text: 'йййй1',
            src: null,
          },
          {
            id: '2',
            text: 'ййййй2',
            src: null,
          },
        ],
        tip_oprosa: 'var-s-kartinami',
        optional: 'true',
        diapazon_polzunka: 'true',
        neskolko: 'false',
        vibor_diapazon_dat: 'false',
        vibor_vremeni: 'false',
        neobbyazatelnii_vopros: 'false',
        question: 'Вопрос 2',
        massage:
          'Вопрос 2 Вопрос 2 Вопрос 2 Вопрос 2 Вопрос 2 Вопрос 2 Вопрос 2 Вопрос 2',
      },
      {
        tip_oprosa: 'data',
        optional: 'false',
        diapazon_polzunka: 'true',
        neskolko: 'true',
        vibor_diapazon_dat: 'false',
        vibor_vremeni: 'false',
        neobbyazatelnii_vopros: 'false',
        question: 'Вопрос 3',
        massage: 'Вопрос 3 Вопрос 3 Вопрос 3 Вопрос 3 3',
      },
      {
        tip_oprosa: 'polzynok',
        optional: 'true',
        diapazon_polzunka: 'false',
        neskolko: 'true',
        vibor_diapazon_dat: 'false',
        vibor_vremeni: 'false',
        neobbyazatelnii_vopros: 'false',
        question: 'Вопрос 4',
        massage: 'Вопрос 4 Вопрос 4 Вопрос 4 Вопрос 4',
        diapazon_dat_ot: '100',
        diapazon_dat_do: '200',
        diapazon_dat_step: '5',
      },
    ],
    step3: {
      konsultant: {
        name: null,
        dolgnost: null,
        is_checked: 'true',
      },
      motivaciya: {
        'type-skidki': 'Растущая',
        prise1: '1000',
        prise2: '500',
        is_checked: 'true',
      },
      bonus: {
        first: {
          name: null,
          color: '#D5D3FA',
          first: 'true',
          finish: 'false',
        },
        finish: {
          active: 'false',
          name: null,
          color: '#D5D3FA',
          first: 'true',
          finish: 'false',
        },
      },
    },
    step4: {
      name: {
        active: 'true',
        value: null,
      },
      email: {
        active: 'false',
        value: null,
      },
      phone: {
        active: 'true',
        value: null,
      },
      comment: {
        active: 'false',
        value: null,
      },
      send: 'false',
      title_massenger: null,
      text_button_massenger: null,
      title: null,
      text: null,
      text_button: null,
      messenge: null,
    },
    step5: {
      color: '#d5d3fa',
      linck: null,
      event: null,
      'text-label': null,
      icon: '/global_assets/images/icon_kviz/design/form.svg',
      position: 'down-right',
    },
  },
  created_at: '2021-03-20 00:00:00',
  updated_at: '2021-03-20 00:00:00',
}
