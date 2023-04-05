<template>
  <div id="app">
    <router-view v-if="user"></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: (state) => state.user.userInfo,
    }),
  },
  watch: {
    user: {
      immediate: true,
      handler(value) {
        if (!value) {
          this.$store.dispatch("initUserInfo");
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
</style>
