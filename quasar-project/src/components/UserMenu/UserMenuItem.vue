<template>
  <div class="user-menu__item">
    <div class="icon__block">
      <img v-if="icon" :src="getIconPath(icon)" class="item__icon" :alt="`${icon} `" />
    </div>
    <div class="user-menu__content">
      <span class="item__text">{{ menuTitle }}</span>
      <span class="item__counter">{{ countWishes }}</span>
      <span v-if="status" class="item__counter">{{ status }} </span>
      <img class="item__btn" src="../../assets/icons/usermenu/arrow-right.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countWishes: {
      type: Number,
      default: null
    },
    menuTitle: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    }
  },
  methods: {
    getIconPath (iconName) {
      try {
        const iconItem = iconName.toLowerCase()
        return new URL(
          `../../assets/icons/usermenu/${iconItem}.svg`,
          import.meta.url
        ).href
      } catch (err) {
        console.log(`< iconName Error > :  ${err}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/app.scss';

.user-menu__item {
  width: 335px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 55px;
}
.icon__block {
  width: 40px;
}
.item__icon {
  margin-left: 15px;
}
.user-menu__content {
  display: flex;
  flex-direction: row;
  width: 295px;
}
.item__text {
  padding-left: 10px;
  text-align: left;
  @include font('Inter', 16px, normal, 500, 18px, normal);
}
.item__counter {
  padding-left: 15px;
  @include font('Inter', 16px, normal, 500, 18px, 0.02em);
  color: $color-light;
}
.item__btn {
  margin-left: auto;
  margin-right: 25px;
}
</style>
