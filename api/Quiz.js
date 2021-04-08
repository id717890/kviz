import ApiBase from './_ApiBase'

export default {
  getQuizConfig(id) {
    return ApiBase.get(`api/getkviz?id=${id}`)
  },
}
