<template>
  <div
    v-if="isShowBonusFinish"
    class="neiros__bonus finish-bonus-block"
    :class="positions"
    :style="gradient"
  >
    <!-- <img v-if="!image" class="img ma-1" src="/images/icons/bg-bonus.png" /> -->
    <img v-if="image" class="img" :src="image" alt="" />
    <div v-if="text" class="text" :style="colorText">
      {{ text }}
    </div>
    <img src="/images/icons/bonus-lebel-check.png" class="icon" alt="" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Constants from '~/constants'

export default {
  computed: {
    ...mapState({
      bonus: (state) => state?.quiz?.steps?.step3?.bonus?.finish,
      isActiveBonus: (state) => state?.quiz?.steps?.step3?.bonus?.is_checked,
      size: (state) => state?.quiz?.size,
    }),
    isXsSize() {
      return this.size === Constants?.SIZES?.XS
    },
    isShowBonusFinish() {
      const isShow = this.bonus?.finish
      if (!this.isActiveBonus || !this.bonus?.active) return false
      if (isShow === false || isShow === true) {
        return isShow
      }
      return true
    },
    positions() {
      let result = ''
      if (!this.isXsSize) {
        result += 'ml-3 '
      }
      if (!this.image) {
        result += 'justify-content-center'
      }
      return result
    },
    colorText() {
      const result = this.bonus['color-text']
      return result ? { color: `${result} !important` } : ''
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
