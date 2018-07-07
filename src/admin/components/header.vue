<template lang="pug">
header.header
  .header__wrap.container
    .header__left
      h1.header__title Панель администрирования
    .header__right
      a.header__link(@click="logout()") Вернуться на сайт
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions["logout"]
  }
};
</script>

<style lang="scss">
.header {
  background-color: $pale-green;
  position: relative;
}

.header__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__left,
.header__right {
  width: 50%;
}

.header__left {
  text-align: left;
}

.header__right {
  text-align: right;
}

.header__title {
  font-weight: 500;
  color: $white;
  font-size: 28px;
}

.header__link {
  color: $white;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid $white;
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid transparent;
  }
}
</style>
