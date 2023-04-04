<template>
  <div class="user-menu__item">
    <img
      v-if="icon"
      :src="getIconPath(icon)"
      class="item__icon"
      :alt="`${icon}`"
    />
    <span class="item__text">{{ menuTitle }}</span>
    <span class="item__counter">{{ countWishes }}</span>
    <span v-if="status" class="item__counter">{{ status }} </span>
    <img class="item__btn" src="@/assets/icons/usermenu/arrow-right.svg" />
  </div>
</template>

<script>
export default {
  props: {
    countWishes: {
      type: Number,
      default: null,
    },
    menuTitle: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
  },
  methods: {
    getIconPath(iconName) {
      try {
        const iconItem = iconName.toLowerCase();
        return new URL(
          `../../assets/icons/usermenu/${iconItem}.svg`,
          import.meta.url
        ).href;
      } catch (err) {
        console.log(`< iconName Error > :  ${err}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

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
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
}

.item__counter {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #d0d0d0;
}
</style>
