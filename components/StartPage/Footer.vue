<template>
  <!-- <div class="neiros__footer start-page-footer"> -->
  <div class="start-page-footer">
    <div class="w-100">
      <div class="row">
        <div v-if="isActiveCompany" class="col-sm-12 col-md-8">
          <div class="d-flex flex-column pr-3 flex-grow-1">
            <div v-if="companyPhone" class="font-weight-bold">
              {{ companyPhone }}
            </div>
            <div v-if="companyRequisites">{{ companyRequisites }}</div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 d-flex flex-row align-items-end">
          <span style="white-space: nowrap">Сделано в</span>
          <img class="mb-1 logo-neiros" src="/logo_neiros.svg" />
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
      return this.config?.company_requisites
    },
    companyPhone() {
      return this.config?.phone_company
    },
    isActiveCompany() {
      return this.config?.company
    },
  },
}
</script>
