<template>
  <div class="d-flex justify-content-center align-items-center vh100">
    {{ id }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import types from '~/store/types'

export default {
  computed: {
    ...mapState({
      step1: (state) => state?.quiz?.steps?.step1,
    }),
    id() {
      return this.$route?.params?.id
    },
  },
  mounted() {
    this.setInitialize()
  },
  methods: {
    ...mapActions('quiz', [
      types.GET_QUIZ_PARAMS_BY_SHORT_URL_ACTION,
      types.SEND_METRIKA_ACTION,
    ]),
    async setInitialize() {
      // console.log(this.$route)
      // const code = this.$route?.params?.id
      // const code = 'wistis.ru/123'
      const domain = process.env.VUE_APP_API_URL_HASH?.substring(
        0,
        process.env.VUE_APP_API_URL_HASH?.length - 1
      )
      const code = `${domain}${this.$route?.path}`
      if (code) {
        const result = await this[types.GET_QUIZ_PARAMS_BY_SHORT_URL_ACTION]({
          hash: code,
        })
        this[types.SEND_METRIKA_ACTION](
          this.makeUrlForMetrika(
            result?.neirosVisit,
            result?.metrikaId,
            result?.sessionId,
            result?.id
          )
        )

        const startPageIsActive = this.step1?.optional
        if (startPageIsActive) this.$router.push({ name: 'start' })
        else this.$router.push({ name: 'quiz' })
      }
    },
    makeUrlForMetrika(neirosVisit, metrikaId, sessionId, id) {
      const href = window?.location?.href
      const params = {
        URl: '' + document.URL + '',
        href,
        referrer: '' + document.referrer + '',
        utm: '' + window.location.search.substr(1) + '',
      }
      const ymUid = this.getCookie('_ym_uid') // кука яндекса
      const gid = this.getCookie('_ga') // кука гугла
      const bodyNew =
        'neiros_visit=' +
        neirosVisit +
        '&url=' +
        encodeURIComponent(JSON.stringify(href)) +
        '&_ym_uid=' +
        encodeURIComponent(JSON.stringify(ymUid)) +
        '&metrika_id=' +
        metrikaId +
        '&session_id=' +
        sessionId +
        '&_gid=' +
        encodeURIComponent(JSON.stringify(gid)) +
        '&params=' +
        encodeURIComponent(JSON.stringify(params)) +
        '&key=' +
        id
      console.log(bodyNew)
      return bodyNew
    },
    getCookie(cookieName) {
      const results = document.cookie.match(
        '(^|;) ?' + cookieName + '=([^;]*)(;|$)'
      )

      if (results) return unescape(results[2])
      else return null
    },
  },
}
</script>
