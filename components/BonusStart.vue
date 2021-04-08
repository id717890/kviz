<template>
  <div
    v-if="isShowBonus"
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
import Constants from '~/constants'

export default {
  computed: {
    ...mapState({
      bonus: (state) => state?.quiz?.steps?.step3?.bonus?.first,
      isActiveBonus: (state) => state?.quiz?.steps?.step3?.bonus?.is_checked,
    }),
    isShowBonus() {
      const isShow = this.bonus?.first
      if (!this.isActiveBonus) return false
      if (isShow === false || isShow === true) {
        return isShow
      }
      return true
    },
    positions() {
      if (!this.image) {
        return 'justify-content-center pl-12 pr-5'
      }
      return ''
    },
    colorText() {
      const result = this.bonus['color-text']
      return result ? { color: result } : ''
    },
    image() {
      if (this.isCustom) {
        return this.bonus?.img || '/images/bg-bonus.png'
      }
      switch (this.bonus?.type) {
        case Constants?.BONUS_TYPE?.PRICE:
          return '/images/lebel-price.png'
        case Constants?.BONUS_TYPE?.CATALOG:
          return '/images/lebel-catalog.png'
        case Constants?.BONUS_TYPE?.CUPON:
          return '/images/lebel-cupon.png'
      }
      return null
    },
    isCustom() {
      return this.bonus?.type === Constants?.BONUS_TYPE?.CUSTOM
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
