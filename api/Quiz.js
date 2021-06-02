import ApiBase from './_ApiBase'

export default {
  getQuizConfig(id) {
    return ApiBase.get(`api/getkviz?id=${id}`)
  },
  getQuizConfigShortUlr(id) {
    return ApiBase.get(`api/getkviz?id=${id}`)
  },
  saveResults(data) {
    return ApiBase.post('api/datafrom_kwiz', data)
  },
}
