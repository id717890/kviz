<template>
  <div class="pl-100 neiros__footer start-page-footer">
    <div v-if="isActiveCompany" class="d-flex flex-column pr-16 flex-grow-1">
      <div class="font-weight-bold">{{ companyPhone }}</div>
      <div>{{ companyRequisites }}</div>
    </div>
    <span>Сделано в</span>
    <img class="mb-1" src="images/logo-kviz.PNG" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'StartPageFooter',
  computed: {
    ...mapState({
      config: (state) => state?.quiz?.steps?.step1,
    }),
    companyRequisites() {
      return (
        this.config?.company_requisites ||
        `ООО 'Компания' ИНН:7000000 КПП:7777777`
      )
    },
    companyPhone() {
      return this.config?.phone_company || '+7 (495) 000-00-00'
    },
    isActiveCompany() {
      return true
    },
  },
}
</script>
