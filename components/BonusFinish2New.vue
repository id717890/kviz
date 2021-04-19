<template>
  <div
    v-if="isShowBonusFinish"
    class="neiros__bonus design-block-label"
    :style="gradient"
  >
    <div class="design-block-left">
      <div class="design-tupe-duwn">
        <img v-if="image" :src="image" />
      </div>
    </div>
    <div class="design-block-right-cont">
      <div class="design-block-right" :style="colorText">
        {{ text }}
      </div>
    </div>
    <img
      src="/images/icons/bonus-lebel-check.png"
      class="design-icon-check"
      alt=""
    />
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
      return this.isActiveBonus && this.bonus?.active
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
      const color = this.bonus?.color || '#001C60'
      if (color) {
        return `background: linear-gradient(172deg, ${color} 36%, rgb(0, 0, 0) 199%)`
      }
      return ''
    },
  },
}
</script>
