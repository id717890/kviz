<template>
  <div class="neiros__right_sidebar" :style="stylesForm">
    <div class="neiros__sidebar_form" :style="cssVars">
      <div v-if="hasName" class="neiros__input_form">
        <span>Введите Ваше имя*</span>
        <input
          ref="textfield"
          v-model="name"
          type="text"
          name="name"
          :class="{ error: errors.name }"
          placeholder="Иванов Иван"
        />
      </div>
      <div v-if="hasEmail" class="neiros__input_form">
        <span>На какую почту отправить результаты?</span>
        <input
          ref="textfield"
          v-model="email"
          type="text"
          name="email"
          :class="{ error: errors.name }"
          placeholder="Ваш e-mail"
        />
      </div>
      <div v-if="hasPhone" class="neiros__input_form">
        <span>Введите Ваш телефон*</span>
        <input
          ref="textfield"
          v-model="phone"
          type="text"
          name="phone"
          :class="{ error: errors.name }"
          placeholder="+7 922-000-00-00"
        />
      </div>
      <div v-if="hasComment" class="neiros__input_form">
        <span>Введите Ваш коментарий*</span>
        <textarea
          ref="textarea"
          v-model="comment"
          name="comment"
          class="comment-textarea"
          :class="{ error: errors.name }"
          placeholder="Ваш коментарий"
          maxlength="250"
          rows="3"
          autocomplete="off"
        ></textarea>
      </div>
      <div v-if="hasSocial" class="neiros__social_block">
        <span>Использовать месседжеры</span>
        <div>
          <a href="#"><img src="images/icons/social/facebook.PNG" /></a>
          <a href="#"><img src="images/icons/social/telegram.PNG" /></a>
          <a href="#"><img src="images/icons/social/vk.PNG" /></a>
          <a href="#"><img src="images/icons/social/viber.PNG" /></a>
        </div>
      </div>
      <button
        class="neiros__btn-left-sidebar"
        :style="buttonColor"
        type="button"
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
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    name: null,
    email: null,
    phone: null,
    comment: null,
    errors: {
      name: false,
      email: false,
      phone: false,
      comment: false,
    },
  }),
  computed: {
    ...mapGetters('quiz', ['color']),
    ...mapState({
      contacts: (state) => state?.quiz?.steps?.step4,
    }),
    cssVars() {
      return {
        '--color': this.color,
      }
    },
    stylesForm() {
      return {
        marginTop: this.hasComment ? 0 : '30px',
      }
    },
    buttonColor() {
      return {
        background: this.color,
      }
    },
    textButton() {
      return this.contacts?.text_button || 'Получить результаты'
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
    hasSocial() {
      return this.contacts?.send
    },
  },
  methods: {
    resetErrors() {
      this.errors.name = false
      this.errors.email = false
      this.errors.phone = false
      this.errors.comment = false
    },
    validateForm() {
      this.resetErrors()
      let isValid = true
      if (this.hasEmail && !this.email) {
        this.errors.email = true
        isValid = false
      }
      if (this.hasName && !this.name) {
        this.errors.name = true
        isValid = false
      }
      if (this.hasPhone && !this.phone) {
        this.errors.phone = true
        isValid = false
      }
      if (this.hasComment && !this.comment) {
        this.errors.comment = true
        isValid = false
      }
      return isValid
    },
    goToThanks() {
      const isValid = this.validateForm()
      // console.log(isValid)
      if (isValid) {
        this.$router.push('/thanks')
      }
    },
  },
}
</script>

<style scoped>
.neiros__sidebar_form .neiros__input_form input:focus,
.comment-textarea:focus {
  border: 1px solid var(--color);
}
</style>
