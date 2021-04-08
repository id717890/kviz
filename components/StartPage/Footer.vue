<template>
  <!-- <div class="neiros__footer start-page-footer"> -->
  <div class="start-page-footer">
    <div class="w-100">
      <div class="row">
        <div v-if="isActiveCompany" class="col-sm-12 col-lg-8">
          <div class="d-flex flex-column pr-3 flex-grow-1">
            <div v-if="companyPhone" class="font-weight-bold">
              {{ companyPhone }}
            </div>
            <div v-if="companyRequisites">{{ companyRequisites }}</div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4 d-flex flex-row align-items-end">
          <span>Сделано в</span>
          <img class="mb-1" src="images/logo-kviz.PNG" />
        </div>
      </div>
    </div>
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
