<template>
  <section>
    <div
      class="neiros__bonus finish-bonus-block bonus-mini w-100 mt-4"
      :style="gradient"
    >
      <img v-if="!image" class="img" src="/images/icons/bg-bonus.png" />
      <img v-else :src="image" alt="" />
      <div v-if="text" class="text">
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
