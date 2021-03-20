import { cloneDeep } from 'lodash'
import types from './types'
import Constants from '~/constants'
// import QuizApi from '~/api/Quiz'
import fakedata from '~/fakedata'

export const state = () => ({
  id: null,
  answers: [],
  currentQuestionIndex: 0,
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
    return state?.steps?.step2[state?.currentQuestionIndex]
  },
}

export const actions = {
  [types.SAVE_STEP_ANSWER_ACTION]: ({ commit }, data) => {
    console.log(data)
  },
  [types.FETCH_QUIZ_CONFIG_ACTION]: async ({ commit }, id) => {
    try {
      // const { data } = await QuizApi.getQuizConfig()
      commit(types.SET_QUIZ_ID, id)
      const steps = cloneDeep(fakedata?.data)
      steps.step2 = steps.step2.filter((x) => x.optional !== 'false')
      commit(types.SET_QUIZ_STEPS, steps)
      // commit(types.SET_QUIZ_STEPS, data?.data)
    } catch (e) {
      console.log('FETCH_QUIZ_CONFIG_ACTION', e)
    }
  },
  [types.NEXT_QUESTION_ACTION]: ({ commit, getters, state }) => {
    const total = getters.totalQuestions
    const current = state.currentQuestionIndex
    if (current < total - 1) {
      commit(types.SET_CURRENT_QUESTION, current + 1)
    } else if (current === total - 1) {
      // eslint-disable-next-line no-undef
      $nuxt.$router.push({ name: 'finish' })
    }
  },
  [types.PREV_QUESTION_ACTION]: ({ commit, state }) => {
    const current = state.currentQuestionIndex
    if (current > 0) {
      commit(types.SET_CURRENT_QUESTION, current - 1)
    }
  },
}

export const mutations = {
  [types.SAVE_STEP_ANSWER]: (state, data) => {
    const { index, answers } = data
    if (!state?.answers || !state?.answers?.length) {
      state.answers.push({ index, answers })
    } else {
      const findIndex = state.answers.find((x) => x.index === index)
      if (findIndex) {
        state.answers.splice(state.answers.indexOf(findIndex), 1, {
          index,
          answers,
        })
      }
    }
  },
  [types.SET_QUIZ_STEPS]: (state, steps) => {
    state.steps = steps
  },
  [types.SET_CURRENT_QUESTION]: (state, current) => {
    state.currentQuestionIndex = current
  },
  [types.SET_QUIZ_ID]: (state, id) => {
    state.id = id
  },
}
