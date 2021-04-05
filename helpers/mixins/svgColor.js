import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('quiz', ['color']),
    cssVars() {
      return {
        '--svg-color': this.color,
      }
    },
  },
}
