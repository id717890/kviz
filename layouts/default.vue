<template>
  <v-app id="neiros_kviz">
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    // console.log('SIZE', window.screen.availWidth)
    this.$store.dispatch('quiz/LOAD_DOC_ACTION')
  },
}
</script>
