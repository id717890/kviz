import types from './types'

export const state = () => ({
  id: null,
  steps: [{ id: 1 }, { id: 2, steps: [{ id: 1, type: 'qwe' }] }],
})

export const actions = {}

export const mutations = {
  [types.SET_QUIZ_ID]: (state, id) => {
    state.id = id
  },
}
