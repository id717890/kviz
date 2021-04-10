<template>
  <div class="text-center">
    <v-progress-circular
      indeterminate
      width="2"
      :color="color"
      :size="size"
    ></v-progress-circular>
    <div v-if="text" class="mt-3">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 32,
    },
    color: {
      type: String,
      required: false,
      default: '#000000',
    },
    text: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
