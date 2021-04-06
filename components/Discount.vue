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
  data: () => ({}),
  computed: {
    ...mapState({
      discount: (state) => state?.quiz?.steps?.step3?.motivaciya,
      questionIndex: (state) => state?.quiz?.currentQuestionIndex,
    }),
    isShowDiscount() {
      return this.discount?.is_checked ?? false
    },
    price1() {
      const discountStartValue = Number(this.discount?.prise1) || 0
      const discountStep = Number(this.price2)
      const step = this.questionIndex
      let discountValue = 0
      if (this.isGrowing) {
        discountValue = discountStartValue + step * discountStep
      } else if (this.isFalling) {
        discountValue = discountStartValue - step * discountStep
      }
      return discountValue <= 0 ? 0 : discountValue
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
