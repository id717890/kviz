import ApiBase from './_ApiBase'

export default {
  getQuizConfig(id) {
    return ApiBase.get(`api/getkviz?id=${id}`)
  },
  getQuizConfigShortUlr(hash) {
    return ApiBase.get(`api/getkviz?hash=${hash}`)
  },
  saveResults(data) {
    return ApiBase.post('api/datafrom_kwiz', data)
  },
  sendMetrika(params) {
    return ApiBase.get(`api/counter_quiz.js?${params}`)
  },
}
