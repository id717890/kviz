<template>
  <div>
    <h1>ERROR</h1>
    <h3>
      {{ message }}
    </h3>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$route.params.message
    },
  },
}
</script>
