<template>
  <div class="neiros__sidebar_form">
    <div v-if="hasName" class="neiros__input_form">
      <span>Введите Ваше имя*</span>
      <input
        v-model="name"
        type="text"
        name="name"
        class=""
        placeholder="Иванов Иван"
      />
    </div>
    <div v-if="hasEmail" class="neiros__input_form">
      <span>На какую почту отправить результаты?</span>
      <input
        v-model="email"
        type="text"
        name="email"
        class=""
        placeholder="Ваш e-mail"
      />
    </div>
    <div v-if="hasPhone" class="neiros__input_form">
      <span>Введите Ваш телефон*</span>
      <input
        v-model="phone"
        type="text"
        name="phone"
        class=""
        placeholder="+7 922-000-00-00"
      />
    </div>
    <div v-if="hasComment" class="neiros__input_form">
      <span>Введите Ваш коментарий*</span>
      <textarea
        v-model="comment"
        name="comment"
        class="comment-textarea"
        placeholder="Ваш коментарий"
        maxlength="250"
        rows="3"
        autocomplete="off"
      ></textarea>
    </div>
    <div class="neiros__social_block">
      <span>Использовать месседжеры</span>
      <div>
        <a href="#"><img src="images/icons/social/facebook.PNG" /></a>
        <a href="#"><img src="images/icons/social/telegram.PNG" /></a>
        <a href="#"><img src="images/icons/social/vk.PNG" /></a>
        <a href="#"><img src="images/icons/social/viber.PNG" /></a>
      </div>
    </div>
    <button
      :disabled="!isValidForm"
      class="neiros__btn-left-sidebar"
      @click.prevent="goToThanks"
    >
      <img src="images/btn-mail.PNG" /> {{ textButton }}
    </button>
    <div class="neiros__privacy_policy_block">
      <input id="neiros__privacy_policy" type="checkbox" checked />
      <label for="neiros__privacy_policy"
        >С <a href="">политикой конфиденциальности</a> ознакомлен</label
      >
    </div>
    <div class="neiros__block_present">
      <img src="images/present.png" />
      <span class="txt-14 pt-1">+ 7 дней безлимита в подарок</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    name: null,
    email: null,
    phone: null,
    comment: null,
  }),
  computed: {
    ...mapState({
      contacts: (state) => state?.quiz?.steps?.step4,
    }),
    textButton() {
      return this.contacts?.text_button || 'Получить результаты'
    },
    isValidForm() {
      let isValid = true
      if (this.hasEmail && !this.email) {
        isValid = false
      }
      if (this.hasName && !this.name) {
        isValid = false
      }
      if (this.hasPhone && !this.phone) {
        isValid = false
      }
      if (this.hasComment && !this.comment) {
        isValid = false
      }
      return isValid
    },
    hasName() {
      return this.contacts?.name?.active
    },
    hasEmail() {
      return this.contacts?.email?.active
    },
    hasPhone() {
      return this.contacts?.phone?.active
    },
    hasComment() {
      return this.contacts?.comment?.active
    },
  },
  methods: {
    goToThanks() {
      if (this.name && this.email) {
        this.$router.push('/thanks')
      }
    },
  },
}
</script>
