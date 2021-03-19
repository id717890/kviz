<template>
  <div class="d-flex flex-grow-1 justify-content-center align-items-center">
    <Loading />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import types from '~/store/types'
export default {
  mounted() {
    const id = this.$route.query.id
    if (id) {
      this[types.SET_QUIZ_ID](id)
      setTimeout(() => {
        this.$router.push({ name: 'quiz' })
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
