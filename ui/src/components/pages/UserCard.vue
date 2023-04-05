<template>
  <div class="user-card">
    <div class="user-card__header">
      <div class="user-card__wrapper">
        <div class="user-card__btn-group">
          <button class="user-card__btn user-card__btn_back"></button>
          <button class="user-card__btn user-card__btn_options"></button>
        </div>
        <div class="user-info__block">
          <img class="user-info__avatar" :src="`data:image/jpg;base64,${user.user.photo}`"
            :alt="`${user.user.photo.slice(0, 10)}`" />
          <p class="user-info__fullname">{{ user.user.name }}</p>
          <p class="user-info__email">{{ user.user.email }}</p>
          <p class="user-info__birthday">
            {{ formatPostData(user.user.birthday) }}
          </p>
        </div>
      </div>
    </div>
    <div class="user-card__wrapper user-card__wrapper_body">
      <UserMenu />
      <NavigationPanel />
    </div>
  </div>
</template>

<script>
import NavigationPanel from "../NavigationPanel/NavigationPanel.vue";
import UserMenu from "../UserMenu/UserMenu.vue";

export default {
  components: {
    NavigationPanel,
    UserMenu,
  },
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    formatPostData(data) {
      return new Intl.DateTimeFormat("ru-RU", {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }).format(new Date(data));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.user-card {
  color: $main-color;
}
.user-card__header {
  background: url('@/assets/img/Vector.svg') no-repeat;
  background-position: center;
  background-size: contain;
  background-color: $primary-color;
  height: 430px;
}
.user-card__wrapper {
  margin: 0 auto;
  max-width: 335px;

  &.user-card__wrapper_body {
    margin: 0 auto;
    max-width: 335px;
  }
}
.user-card__btn-group {
  padding-top: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.user-card__btn {
  width: 40px;
  height: 40px;
  box-shadow: 0px 4px 70px rgba(35, 35, 35, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 7px;
  border: none;

  &.user-card__btn_back {
    background: url('@/assets/icons/usermenu/arrow.svg') no-repeat rgba(249, 249, 249, 0.1);
    background-position: center;
  }

  &.user-card__btn_options {
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
  border-radius: 20px;
  filter: drop-shadow(0px 20px 30px rgba(44, 44, 44, 0.15));
  border: none;
}
.user-info__fullname {
  padding-top: 10px;
  @include font('Inter', 16px, normal, 500, 19px, normal);
}
.user-info__email {
  padding-top: 5px;
  @include font('Inter', 12px, normal, 400, 15px, -0.01em);
}
.user-info__birthday {
  padding-top: 5px;
  @include font('Inter', 12px, normal, 400, 15px, -0.01em);
}
</style>
