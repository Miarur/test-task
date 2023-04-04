<template>
  <div class="user__block">
    <div class="user-header">
      <div class="user-header__wrapper">
        <div class="user-controls">
          <button class="user-controls__btn user-controls__btn__back"></button>
          <button class="user-controls__btn user-controls__btn__options"></button>
        </div>
        <div class="user-info__block">
          <div class="user-info__avatar"></div>
          <p class="user-info__fullname">Катя Белая</p>
          <p class="user-info__email">hhhhhh@gmail.com</p>
          <p class="user-info__birthday">16.09.1997</p>
        </div>
      </div>
    </div>
    <UserMenu />
    <NavigationPanel />
  </div>
</template>

<script>
import NavigationPanel from './NavigationPanel/NavigationPanel.vue';
import UserMenu from './UserMenu/UserMenu.vue';

export default {
  components: {
    NavigationPanel,
    UserMenu,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.user__block {
  color: #FDFFFF;
}

.user-header {
  background: url('@/assets/img/Vector.svg') no-repeat;
  background-position: center;
  background-size: contain;
  background-color: $primary-color;
  height: 410px;
}

.user-header__wrapper {
  margin: 0 auto;
  max-width: 335px;
}

.user-controls {
  padding-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.user-controls__btn {
  width: 40px;
  height: 40px;
  box-shadow: 0px 4px 70px rgba(35, 35, 35, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 7px;
  border: none;

  &.user-controls__btn__back {
    background: url('@/assets/icons/usermenu/arrow.svg') no-repeat rgba(249, 249, 249, 0.1);
    background-position: center;
  }

  &.user-controls__btn__options {
    background: url('@/assets/icons/usermenu/dots.svg') no-repeat rgba(249, 249, 249, 0.1);
    background-position: center;
  }
}

.user-info__block {
  margin: 34px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  max-width: 120px;
}

.user-info__avatar {
  width: 120px;
  height: 120px;
  background: url('@/assets/img/avatar.jpg') no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 20px;
}

.user-info__fullname {
  padding-top: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

.user-info__email {
  padding-top: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01em;
}

.user-info__birthday {
  padding-top: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01%;
}
</style>