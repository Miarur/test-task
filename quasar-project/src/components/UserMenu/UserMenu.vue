<template>
  <div class="user-menu">
    <div class="user-menu__group user-menu__group__favorite">
      <UserMenuItem icon="heart" menuTitle="Мои желания" :countWishes="5" />
      <UserMenuItem menuTitle="Мои бронирования" :countWishes="5" />
    </div>

    <div class="user-menu__group ">
      <UserMenuItem icon="friends" menuTitle="Мои друзья" :countWishes="5" />
      <UserMenuItem icon="status" menuTitle="Статус" status="Открыто для всех" />
      <UserMenuItem menuTitle="Помощь/поддержка" />
    </div>
  </div>
</template>

<script>
import UserMenuItem from './UserMenuItem.vue'

export default {
  components: {
    UserMenuItem
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/app.scss';
.user-menu {
  color: $primary-color;
}

.user-menu__group {
  margin: 10px auto 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 335px;
  align-items: center;
  background: $main-color;
  border-radius: 15px;

  &.user-menu__group__favorite {
    margin: -90px auto 0 auto;
    background: $main-color;
    border-radius: 15px;
    filter: drop-shadow(0px 20px 120px rgba(35, 35, 35, 0.05));
    backdrop-filter: blur(25px);
  }
}
</style>
