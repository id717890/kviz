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
    ...mapActions('quiz', [types.GET_QUIZ_PARAMS_BY_SHORT_URL_ACTION]),
    async setInitialize() {
      const code = this.$route?.params?.id
      if (code) {
        await this[types.GET_QUIZ_PARAMS_BY_SHORT_URL_ACTION]({
          id: code,
        })
        const startPageIsActive = this.step1?.optional
        if (startPageIsActive) this.$router.push({ name: 'start' })
        else this.$router.push({ name: 'quiz' })
      }
    },
  },
}
</script>
