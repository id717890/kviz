<template>
  <div>
    <h3>
      {{ message }}
    </h3>
  </div>
</template>

<script>
export default {
  layout: 'error',
  computed: {
    message() {
      return this.$route.params.message
    },
  },
}
</script>
