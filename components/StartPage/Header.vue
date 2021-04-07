<template>
  <div v-if="isActiveCompany" class="start-page-header pl-100">
    <img :src="logo" class="mr-3" alt="" />
    <span>{{ companyName }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'StartPageHeader',
  computed: {
    ...mapState({
      config: (state) => state?.quiz?.steps?.step1,
    }),
    logo() {
      return 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_auto,f_auto,q_auto,g_auto,c_fill,h_37,dpr_1/eyfx14t2o4yutk71vo2a.png'
    },
    companyName() {
      return this.config?.name_company || 'Название компании'
    },
    isActiveCompany() {
      return true
    },
  },
}
</script>
