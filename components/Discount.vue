<template>
  <div v-if="isShowDiscount" class="neiros__block_seles_top">
    <div class="neiros__border_sb">
      <div class="neiros__left_sele">
        <div class="neiros__top_descr">Ваша скидка</div>
        <div class="neiros__top_price">{{ price1 }} Р</div>
      </div>
      <div class="neiros__right_sele">
        <div>
          <img v-if="isGrowing" height="25" src="images/icons/up-row.svg" />
          <img v-if="isFalling" height="25" src="images/icons/down-row.svg" />
        </div>
        <div>+ {{ price2 }} Р за ответ</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Constants from '~/constants'

export default {
  computed: {
    ...mapState({
      discount: (state) => state?.quiz?.steps?.step3?.motivaciya,
    }),
    isShowDiscount() {
      return this.discount?.is_checked ?? false
    },
    price1() {
      return this.discount?.prise1 ?? 0
    },
    price2() {
      return this.discount?.prise2 ?? 0
    },
    isGrowing() {
      return (
        this.discount['type-skidki']?.toLowerCase() ===
        Constants.DISCOUNT_TYPE.GROWING.toLowerCase()
      )
    },
    isFalling() {
      return (
        this.discount['type-skidki']?.toLowerCase() ===
        Constants.DISCOUNT_TYPE.FALLING.toLowerCase()
      )
    },
  },
}
</script>
