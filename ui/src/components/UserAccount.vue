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

    <div class="user-menu">
      <div class="user-menu__group user-menu__group__favorite">
        <div class="user-menu__item">
          <img class="item__icon" src="../assets/icons/heart.svg">
          <p class="item__text">Мои желания</p>
          <p class="item__counter">5</p>
          <img class="item__btn" src="@/assets/icons/arrow-right.svg">
        </div>

        <div class="user-menu__item">
          <img class="user-menu__icon">
          <p class="item__text">Мои бронирования</p>
          <p class="item__counter">5</p>
          <img class="item__btn" src="@/assets/icons/arrow-right.svg">
        </div>
      </div>

      <div class="user-menu__group ">
        <div class="user-menu__item">
          <img class="item__icon" src="@/assets/icons/friends.svg">
          <p class="item__text">Мои друзья</p>
          <p class="item__counter">5</p>
          <img class="item__btn" src="@/assets/icons/arrow-right.svg">
        </div>

        <div class="user-menu__item">
          <img class="item__icon" src="@/assets/icons/status.svg">
          <p class="item__text">Статус</p>
          <p class="item__counter">Открыто для всех</p>
          <img class="item__btn" src="@/assets/icons/arrow-right.svg">
        </div>

        <div class="user-menu__item">
          <p class="item__text">Помощь/поддержка</p>
          <button class="item__btn"></button>
          <img class="item__btn" src="@/assets/icons/arrow-right.svg">
        </div>
      </div>
    </div>

    <nav class="navigation-panel">
      <li class="navigation-panel__item">
        <a href="#">
          <img class="item__icon" src="@/assets/icons/panel/home.svg" alt="home">
        </a>
      </li>
      <li class="navigation-panel__item">
        <a href="#">
          <img class="item__icon" src="@/assets/icons/panel/friends.svg" alt="friends">
        </a>
      </li>
      <li class="navigation-panel__item">
        <a href="#">
          <img class="item__icon" src="@/assets/icons/panel/add.svg" alt="chat">
        </a>
      </li>
      <li class="navigation-panel__item">
        <a href="#">
          <img class="item__icon" src="../assets/icons/panel/likes.svg" alt="likes">
        </a>
      </li>
      <li class="navigation-panel__item">
        <a href="#">
          <img class="item__icon" src="../assets/icons/panel/user.svg" alt="user">
        </a>
      </li>
    </nav>
  </div>
</template>

<script>
export default {

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
    background: url('@/assets/icons/arrow.svg') no-repeat rgba(249, 249, 249, 0.1);
    background-position: center;
  }

  &.user-controls__btn__options {
    background: url('@/assets/icons/dots.svg') no-repeat rgba(249, 249, 249, 0.1);
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

.user-menu {
  color: $primary-color;
}

.user-menu__group {
  margin: 10px auto 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 335px;
  align-items: center;
  background: #FDFFFF;
  border-radius: 15px;

  &.user-menu__group__favorite {
    margin: -90px auto 0 auto;
    background: #FDFFFF;
    border-radius: 15px 15px 0px 0px;
    filter: drop-shadow(0px 20px 120px rgba(35, 35, 35, 0.05));
    backdrop-filter: blur(25px);
  }
}

.user-menu__item {
  width: 295px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 55px;
}

.item__text {
  text-align: left;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
}

.item__counter {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #D0D0D0;
}

.navigation-panel {
  margin: 78px 7px 39px 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  max-width: 350p;
  max-height: 70px;
  background-color: $secondary-color;
  box-shadow: 0px 5px 30px rgba(123, 122, 122, 0.5);
  border-radius: 10px;
}

.navigation-panel__item {
  list-style: none;
}
</style>