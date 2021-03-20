import ApiBase from './_ApiBase'

export default {
  getQuizConfig() {
    return ApiBase.get('api/getkviz')
  },
}
