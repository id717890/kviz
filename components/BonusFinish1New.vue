<template>
  <div
    v-if="isShowBonusFinish"
    class="neiros__bonus design-block-label"
    :style="styles"
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
      bonus: (state) => state?.quiz?.steps?.step3?.bonus?.first,
      isActiveBonus: (state) => state?.quiz?.steps?.step3?.bonus?.is_checked,
    }),
    isShowBonusFinish() {
      const isShow1 = this.bonus?.first
      const isShow2 = this.bonus?.finish
      if (!this.isActiveBonus) return false
      return (
        (isShow2 && this.isActiveBonus) ||
        (!isShow2 && isShow1 && this.isActiveBonus)
      )
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
    // image() {
    //   return this.bonus?.img ?? null
    // },
    text() {
      return this.bonus?.name ?? null
    },
    colorText() {
      const result = this.bonus['color-text']
      return result ? { color: result } : ''
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
