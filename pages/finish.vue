<template>
  <div id="neiros__kviz_iframe">
    <div class="neiros__container_kviz">
      <div class="neiros__block_kviz_left two_polls_block">
        <div class="neiros__block_kviz_cov">
          <div class="neiros__final_h1">Отлично! Остался всего один шаг!</div>
          <div class="neiros__progress_block_two overflow-visible">
            <div
              class="progress-bar quiz-bar quiz-blue quiz-stripes overflow-visible"
            >
              <span style="width: 98%">
                <div class="neiros__procent_top">98%</div>
              </span>
            </div>
          </div>
          <div class="neiros__final_block_text">
            <div class="neiros__final_h2">
              Заполните форму, чтобы получить результаты<br />прохождения теста
            </div>
            <div class="neiros__final_h2_description">
              Мы рассмотрели ваши ответы и в течении 5 минут вышлем Вам
              подробную<br />
              инструкцию <b>+ заработаные бонусы!</b>
            </div>
          </div>
          <div class="neiros__final_block_bonus">
            <div class="neiros__bonus">
              <img src="images/bonus-img-final2.PNG" />
              <div>
                Полное<br />
                руковоство<br />
                для бизнеса
              </div>
            </div>
            <div class="neiros__bonus">
              <img src="images/bonus-img-final.PNG" />
              <div class="pos-2">
                Скидка<br />
                на месяц<br />
                подписки
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="neiros__block_kviz_right two_polls_block">
        <div class="neiros__right_sidebar">
          <div class="neiros__sidebar_form">
            <div class="neiros__input_form">
              <span>Введите Ваше имя*</span>
              <input
                type="text"
                name="name"
                class=""
                placeholder="Иванов Иван"
              />
            </div>
            <div class="neiros__input_form">
              <span>На какую почту отправить результаты?</span>
              <input
                type="text"
                name="email"
                class=""
                placeholder="Ваш e-mail"
              />
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
            <button class="neiros__btn-left-sidebar">
              <img src="images/btn-mail.PNG" /> получить результаты
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('quiz', ['currentQuestion']),
    ...mapState({
      kviz: (state) => state.kviz.steps,
    }),
    question() {
      return this.currentQuestion?.type
    },
  },
}
</script>
