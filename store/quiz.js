import { cloneDeep } from 'lodash'
import types from './types'
// import Constants from '~/constants'
// import QuizApi from '~/api/Quiz'
import fakedata from '~/fakedata'
// import fakedata from '~/fakedata'

export const state = () => ({
  id: null,
  answers: [],
  currentQuestionIndex: 0,
  steps: null,
})

export const getters = {
  currentQuestionAnswers(state) {
    return (
      state?.answers.find((x) => x.index === state?.currentQuestionIndex)
        ?.answers ?? []
    )
  },
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
      // const steps = cloneDeep(data?.data)
      const steps = cloneDeep(fakedata?.data)
      steps.step2 = steps.step2.filter((x) => x.optional !== false)
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
      console.log('findIndex', findIndex, index)
      if (findIndex) {
        state.answers.splice(state.answers.indexOf(findIndex), 1, {
          index,
          answers,
        })
      } else {
        state.answers.push({ index, answers })
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
