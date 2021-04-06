<template>
  <section v-if="isShowOperator">
    <div class="neiros__block_operator">
      <div class="neiros___left">
        <img src="images/operator3.JPG" />
      </div>
      <div class="neiros___right">
        <div class="neiros__status">
          <div class="neiros__status_icon"></div>
          Онлайн
        </div>
        <div class="neiros__name_operator">{{ operator.name }}</div>
        <div class="neiros__work_operator">{{ operator.dolgnost }}</div>
      </div>
    </div>
    <div v-if="chatMessage" class="message-chat-question">
      <div class="tolltip">{{ chatMessage }}</div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('quiz', ['currentQuestion']),
    ...mapState({
      operator: (state) => state?.quiz?.steps?.step3?.konsultant,
    }),
    chatMessage() {
      return this.currentQuestion?.massage
    },
    isShowOperator() {
      return this.operator?.is_checked ?? false
    },
  },
}
</script>
