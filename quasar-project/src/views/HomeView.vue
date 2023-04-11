<template>
  <UserCard :user="user"></UserCard>
</template>

<script>
import { mapState } from 'vuex'
import UserCard from '../components/pages/UserCard.vue'
export default {
  components: {
    UserCard
  },
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
}
</script>

<style lang="scss" scoped></style>
