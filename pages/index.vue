<template>
  <div class="d-flex flex-grow-1 justify-content-center align-items-center">
    <Loading />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import types from '~/store/types'

export default {
  computed: {
    ...mapState({
      step1: (state) => state?.quiz?.steps?.step1,
    }),
  },
  async mounted() {
    /* eslint-disable camelcase */
    const { id, metrika_id, neiros_visit } = this.$route.query
    console.log('PARAMS', id, metrika_id, neiros_visit)
    if (metrika_id) {
      this[types.SET_METRIKA_ID](metrika_id)
    }
    if (neiros_visit) {
      this[types.SET_NEIROS_VISIT](neiros_visit)
    }
    if (id) {
      await this[types.FETCH_QUIZ_CONFIG_ACTION](id)
      // this.$router.push({ name: 'start' })
      const startPageIsActive = this.step1?.optional
      if (startPageIsActive) this.$router.push({ name: 'start' })
      else this.$router.push({ name: 'quiz' })
    } else {
      this.$router.push({
        name: 'error',
        params: { message: 'Quiz ID not found' },
      })
    }
  },
  methods: {
    ...mapActions('quiz', [types.FETCH_QUIZ_CONFIG_ACTION]),
    ...mapMutations('quiz', [types.SET_METRIKA_ID, types.SET_NEIROS_VISIT]),
    // ...mapMutations('quiz', [types.SET_QUIZ_ID]),
  },
}
</script>
