<template>
  <div id="neiros__kviz_iframe">
    <div
      class="neiros__container_kviz d-flex align-items-center justify-content-center"
    >
      <div class="neiros__block_kviz_success ma-0">
        <div class="kviz_success_icon">
          <img src="images/icons/check.PNG" />
        </div>
        <div class="kviz_success_h1">Спасибо!</div>
        <div class="kviz_success_h2">
          {{ message }} <img src="images/icons/like.PNG" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      settings: (state) => state?.quiz?.steps?.step4,
      message() {
        return this.settings?.messenge || 'Ожидайте ответа'
      },
    }),
  },
}
</script>
