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
          :class="{ error1: errors.name }"
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
          :class="{ error1: errors.email }"
          placeholder="Ваш e-mail"
        />
      </div>
      <div v-if="hasPhone" class="neiros__input_form">
        <span>Введите Ваш телефон*</span>
        <input
          ref="textfield"
          v-model="phone"
          v-mask="'+# (###) ###-##-##'"
          type="text"
          name="phone"
          :class="{ error1: errors.phone }"
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
          :class="{ error1: errors.comment }"
          placeholder="Ваш коментарий"
          maxlength="250"
          rows="3"
          autocomplete="off"
        ></textarea>
      </div>
      <div v-if="showSocialIcons" class="neiros__social_block">
        <span>Использовать месседжеры</span>
        <div>
          <a v-if="showFb" href="#">
            <img src="images/icons/social/facebook.PNG" />
          </a>
          <a v-if="showTg" href="#"
            ><img src="images/icons/social/telegram.PNG"
          /></a>
          <a v-if="showVk" href="#"><img src="images/icons/social/vk.PNG" /></a>
          <a v-if="showViber" href="#"
            ><img src="images/icons/social/viber.PNG"
          /></a>
        </div>
      </div>
      <button
        v-if="hasName || hasEmail || hasPhone || hasComment"
        class="neiros__btn-left-sidebar"
        :style="buttonColor"
        :disabled="loading"
        type="button"
        @click.prevent="goToThanks"
      >
        <div class="d-flex align-items-center justify-content-center">
          <img src="images/btn-mail.PNG" /> {{ textButton }}
          <Loading v-if="loading" :color="'white'" :size="26" class="ml-3" />
        </div>
      </button>
      <div class="neiros__privacy_policy_block">
        <input id="neiros__privacy_policy" type="checkbox" checked />
        <label for="neiros__privacy_policy">
          С
          <a href="https://neiros.ru/policy/" target="_blank">
            политикой конфиденциальности
          </a>
          ознакомлен
        </label>
      </div>
      <!-- <div class="neiros__block_present">
        <img src="images/present.png" />
        <span class="txt-14 pt-1">+ 7 дней безлимита в подарок</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
import types from '~/store/types'

export default {
  directives: { mask },
  data: () => ({
    loading: false,
    name: null,
    email: null,
    phone: null,
    comment: null,
    // name: 'test',
    // email: 'test@test.ru',
    // phone: '79924870500',
    // comment: '123',
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
    showSocialIcons() {
      return this.showFb || this.showTg || this.showVk || this.showViber
    },
    showFb() {
      return this.contacts?.active_massenger?.fb
    },
    showTg() {
      return this.contacts?.active_massenger?.telegram
    },
    showViber() {
      return this.contacts?.active_massenger?.viber
    },
    showVk() {
      return this.contacts?.active_massenger?.vk
    },
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
    // hasSocial() {
    //   return this.contacts?.send
    // },
    validateEmail() {
      return /.+@.+/.test(this.email)
    },
    validatePhone() {
      return this.phone?.length === 18
    },
  },
  methods: {
    ...mapActions('quiz', [types.SAVE_RESULT_QUIZ_ACTION]),
    resetErrors() {
      this.errors.name = false
      this.errors.email = false
      this.errors.phone = false
      this.errors.comment = false
    },
    validateForm() {
      this.resetErrors()
      let isValid = true
      if (this.hasEmail && (!this.email || !this.validateEmail)) {
        console.log('email invalid')
        this.errors.email = true
        isValid = false
      }
      if (this.hasName && !this.name) {
        this.errors.name = true
        isValid = false
      }
      if (this.hasPhone && (!this.phone || !this.validatePhone)) {
        this.errors.phone = true
        isValid = false
      }
      if (this.hasComment && !this.comment) {
        this.errors.comment = true
        isValid = false
      }
      return isValid
    },
    async goToThanks() {
      const isValid = this.validateForm()
      // console.log(isValid)
      if (isValid) {
        try {
          this.loading = true
          await this[types.SAVE_RESULT_QUIZ_ACTION]({
            email: this.email,
            phone: this.phone,
          })
          setTimeout(() => {
            this.$router.push('/thanks')
          }, 300)
        } catch (e) {
          this.loading = false
        }
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
