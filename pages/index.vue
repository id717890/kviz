<template>
  <div class="d-flex flex-grow-1 justify-content-center align-items-center">
    <Loading />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import types from '~/store/types'

export default {
  computed: {
    ...mapState({
      step1: (state) => state?.quiz?.steps?.step1,
    }),
  },
  mounted() {
    const id = this.$route.query.id
    if (id) {
      this[types.SET_QUIZ_ID](id)
      setTimeout(() => {
        const startPageIsActive = this.step1?.isActive
        if (startPageIsActive === true) this.$router.push({ name: 'start' })
        if (startPageIsActive === false) this.$router.push({ name: 'quiz' })
      }, 2000)
    } else {
      this.$router.push({
        name: 'error',
        params: { message: 'Quiz ID not found' },
      })
    }
  },
  methods: {
    ...mapMutations('quiz', [types.SET_QUIZ_ID]),
  },
}
</script>
