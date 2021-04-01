<template>
  <section>
    <div class="neiros__bonus bonus-step w-100 mt-4" :style="gradient">
      <img v-if="!image" class="img" :src="image" />
      <!-- <img v-else :src="image" class="img-step" alt="" /> -->
      <div v-if="text" class="text" :style="colorText">
        {{ text }}
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      bonus: (state) => state?.quiz?.steps?.step3?.bonus?.first,
    }),
    image() {
      return this.bonus?.src ?? null
    },
    colorText() {
      const result = this.bonus['color-text']
      return result ? { color: result } : ''
    },
    text() {
      return this.bonus?.name ?? null
    },
    gradient() {
      const color = this.bonus?.color
      if (color) {
        return `background: linear-gradient(172deg, ${color} 36%, rgb(0, 0, 0) 199%)`
      }
      return ''
    },
  },
}
</script>
