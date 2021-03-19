import types from './types'
import Constants from '~/constants'

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
      {
        id: 2,
        type: Constants.QUESTION_TYPE.COMBO_BOX_VARIANTS,
        question: 'q2',
      },
      {
        id: 3,
        type: Constants.QUESTION_TYPE.DATE_PICKER_VARIANTS,
        question: 'q3',
      },
      {
        id: 4,
        type: Constants.QUESTION_TYPE.CHECK_BOX_TEXT_VARIANTS,
        question: 'q4',
      },
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
  [types.NEXT_QUESTION_ACTION]: ({ commit, getters, state }) => {
    const total = getters.totalQuestions
    const current = state.currentQuestion
    if (current < total - 1) {
      commit(types.SET_CURRENT_QUESTION, current + 1)
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
