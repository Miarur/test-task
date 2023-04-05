<template>
  <UserCard :user="user" />
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
  }
}
</script>

<style lang="scss" scoped></style>
