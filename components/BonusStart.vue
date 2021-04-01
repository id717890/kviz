<template>
  <div
    v-if="isShowBonusFinish"
    class="neiros__bonus bonus-start mt-4"
    :class="positions"
    :style="gradient"
  >
    <!-- <img v-if="!image" class="img-start" src="/images/icons/bg-bonus.png" /> -->
    <img v-if="image" :src="image" alt="" class="img-start" />
    <div v-if="text" class="text-start" :style="colorText">
      {{ text }}
    </div>
    <img src="/images/icons/bonus-lebel-check.png" class="icon-start" alt="" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      bonusFinish: (state) => state?.quiz?.steps?.step3?.bonus?.finish,
    }),
    isShowBonusFinish() {
      const isShow = this.bonusFinish?.active
      if (isShow === false || isShow === true) {
        return isShow
      }
      return true
    },
    positions() {
      if (!this.image) {
        return 'justify-content-center'
      }
      return ''
    },
    colorText() {
      const result = this.bonusFinish['color-text']
      return result ? { color: result } : ''
    },
    image() {
      return this.bonusFinish?.img ?? null
    },
    text() {
      return this.bonusFinish?.name ?? null
    },
    gradient() {
      const color = this.bonusFinish?.color
      if (color) {
        return `background: linear-gradient(172deg, ${color} 36%, rgb(0, 0, 0) 199%)`
      }
      return ''
    },
  },
}
</script>
