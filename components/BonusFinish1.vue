<template>
  <div
    class="neiros__bonus finish-bonus-block"
    :class="positions"
    :style="styles"
  >
    <!-- <img v-if="!image" class="img" src="/images/icons/bg-bonus.png" /> -->
    <img v-if="image" :src="image" alt="" />
    <div v-if="text" class="text" :style="colorText">
      {{ text }}
    </div>
    <img src="/images/icons/bonus-lebel-check.png" class="icon" alt="" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      bonus: (state) => state?.quiz?.steps?.step3?.bonus?.first,
    }),
    image() {
      return this.bonus?.img ?? null
    },
    text() {
      return this.bonus?.name ?? null
    },
    colorText() {
      const result = this.bonus['color-text']
      return result ? { color: result } : ''
    },
    positions() {
      if (!this.image) {
        return 'justify-content-center'
      }
      return ''
    },
    styles() {
      const color = this.bonus?.color
      if (color) {
        return {
          background: `linear-gradient(172deg, ${color} 36%, rgb(0, 0, 0) 199%)`,
        }
      }
      return ''
    },
  },
}
</script>
