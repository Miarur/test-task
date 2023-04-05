<template>
  <router-view></router-view>
</template>

<script>
import { mapState } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  computed: {
    ...mapState({
      user: (state) => state.user.userInfo
    })
  },
  watch: {
    user: {
      immediate: true,
      handler (value) {
        if (!value) {
          this.$store.dispatch('initUserInfo')
        }
      }
    }
  }
})
</script>
