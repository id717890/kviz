import { cloneDeep } from 'lodash'
import types from './types'
// import Constants from '~/constants'
import QuizApi from '~/api/Quiz'
import fakedata from '~/fakedata'
import Constants from '~/constants'

export const state = () => ({
  id: null,
  metrikaId: null,
  neirosVisit: null,
  sessionId: null,
  answers: [],
  currentQuestionIndex: 0,
  steps: null,
  size: null,
  testMode: false,
})

export const getters = {
  color(state) {
    return state?.steps?.step5?.color || Constants.DEFAULT_COLOR_CHECK_BOX
  },
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
  [types.SAVE_RESULT_QUIZ_ACTION]: async ({ state }, { email, phone }) => {
    const metrika = state?.metrikaId
    const neirosVisit = state?.neirosVisit
    const answers = state?.answers
    const sessionId = state?.sessionId
    const id = state?.id

    const data = {
      id,
      email,
      phone,
      metrika_id: metrika,
      neiros_visit: neirosVisit,
      session_id: sessionId,
      data: answers,
    }
    return QuizApi.saveResults(data)
  },
  [types.LOAD_DOC_ACTION]: ({ commit }) => {
    // let divise
    const windowWight = window.screen.availWidth
    // console.log('WINDOW', windowWight)
    if (windowWight <= 1267 && windowWight >= 1001) {
      document
        ?.querySelector('#neiros__kviz_before_iframe')
        ?.classList?.add('neiros__lg')
      commit(types.SET_APP_SIZE, Constants?.SIZES?.LG)
      document.querySelector('#neiros_kviz').classList?.add('neiros__lg')
      // divise = 'neiros__lg resize'
    }
    if (windowWight <= 1000.9 && windowWight >= 768) {
      document
        ?.querySelector('#neiros__kviz_before_iframe')
        ?.classList.add('neiros__md')
      document?.querySelector('#neiros_kviz')?.classList?.add('neiros__md')
      commit(types.SET_APP_SIZE, Constants?.SIZES?.MD)
      // divise = 'neiros__md resize'
    }
    // if (windowWight <= 864 && windowWight >= 500) {
    if (windowWight <= 767.9) {
      // document?.querySelector('#neiros_kviz')?.classList?.add('neiros__md_s')
      document?.querySelector('#neiros_kviz')?.classList?.add('neiros__xs')
      commit(types.SET_APP_SIZE, Constants?.SIZES?.XS)
    }
    // if (windowWight <= 499) {
    //   document?.querySelector('#neiros_kviz')?.classList?.add('neiros__xs')
    // }
    // if (windowWight <= 864) {
    //   document
    //     ?.querySelector('#neiros__kviz_before_iframe')
    //     ?.classList?.add('neiros__xs')
    //   document
    //     ?.querySelector('.neiros__kviz_before_iframe_bg')
    //     ?.classList?.add('neiros__xs')
    //   // divise = 'neiros__xs resize'
    // }
  },
  [types.SAVE_STEP_ANSWER_ACTION]: ({ commit }, data) => {
    console.log(data)
  },
  [types.FETCH_QUIZ_CONFIG_ACTION]: async ({ commit }, id) => {
    try {
      // id = 13
      commit(types.SET_QUIZ_ID, id)
      const { data } = await QuizApi.getQuizConfig(id)
      const steps = cloneDeep(data?.data?.data)
      // console.log('steps', steps)
      // eslint-disable-next-line no-unused-vars
      const stepsOLD = cloneDeep(fakedata?.data?.data)
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
  [types.SET_SESSION_ID]: (state, payload) => {
    state.sessionId = payload
  },
  [types.SET_METRIKA_ID]: (state, payload) => {
    state.metrikaId = payload
  },
  [types.SET_NEIROS_VISIT]: (state, payload) => {
    state.neirosVisit = payload
  },
  [types.SET_APP_SIZE]: (state, size) => {
    state.size = size
  },
  [types.SAVE_STEP_ANSWER]: (state, data) => {
    const { index, answers, questionId } = data
    if (!state?.answers || !state?.answers?.length) {
      state.answers.push({ questionId, index, answers })
    } else {
      const findIndex = state.answers.find((x) => x.index === index)
      // console.log('findIndex', findIndex, index)
      if (findIndex) {
        state.answers.splice(state.answers.indexOf(findIndex), 1, {
          questionId,
          index,
          answers,
        })
      } else {
        state.answers.push({ questionId, index, answers })
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
