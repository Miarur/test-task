<template>
  <nav class="navigation-panel">
    <li class="navigation-panel__item">
      <a class="navigation__link" href="#">
        <img
          class="item__icon"
          src="../../assets/icons/panel/home.svg"
          alt="home"
        />
      </a>
    </li>
    <li class="navigation-panel__item">
      <a class="navigation__link" href="#">
        <img
          class="item__icon"
          src="../../assets/icons/panel/friends.svg"
          alt="friends"
        />
      </a>
    </li>
    <li class="navigation-panel__item">
      <a class="navigation__link" href="#">
        <img class="item__icon" src="../../assets/icons/panel/add.svg" alt="chat" />
      </a>
    </li>
    <li class="navigation-panel__item">
      <a class="navigation__link" href="#">
        <img
          class="item__icon"
          src="../../assets/icons/panel/likes.svg"
          alt="likes"
        />
      </a>
    </li>
    <li class="navigation-panel__item">
      <a class="navigation__link" href="#">
        <img
          class="item__icon"
          src="../../assets/icons/panel/user.svg"
          alt="user"
        />
      </a>
    </li>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../css/app.scss';
.navigation-panel {
  margin: 78px 0 39px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  min-width: 350px;
  max-height: 70px;
  background-color: $secondary-color;
  box-shadow: 0px 5px 30px rgba(123, 122, 122, 0.5);
  border-radius: 10px;
}
.navigation-panel__item {
  list-style: none;
}
.navigation__link {
  padding: 0;
  margin: 0;
  border: none;
}
</style>
