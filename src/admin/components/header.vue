<template lang="pug">
header.header
  .header__wrap.container
    .header__left
      h1.header__title Панель администрирования
    .header__right
      a.header__link(@click="logoutUser") Вернуться на сайт
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout().then(response => {
        console.log("logout user");
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/layout/mixins";

.header {
  background-color: $pale-green;
  position: relative;
}

.header__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  @include phones {
    flex-direction: column-reverse;
    padding-top: 20px;
  }
}

.header__left,
.header__right {
  width: 50%;
  @include phones {
    width: 100%;
  }
}

.header__left {
  text-align: left;
  @include phones {
    text-align: center;
  }
}

.header__right {
  text-align: right;
  @include phones {
    text-align: center;
  }
}

.header__title {
  font-weight: bold;
  color: $white;
  font-size: 28px;
  @include tablets {
    font-size: 21px;
  }
}

.header__link {
  color: $white;
  font-weight: bold;
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
