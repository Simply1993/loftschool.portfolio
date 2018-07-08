<template lang="pug">
#root
  router-view(name="header")
  router-view(name="tabs")
  .content
    transition(name="fade-out" mode="out-in")
      router-view
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";

export default {
  components: {
    adminHeader: header,
    tabs,
    skills
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  height: 100%;
}

body {
  font-family: $font-text;
  font-size: 16px;
  line-height: 1.42;
  color: $text-color;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;
  background-image: url("./welcome-bg.jpg");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba($white, 0.85);
  }
}

.container {
  margin: 0 auto;
  width: 95%;
  padding: 0 2.5%;
}

.content {
  position: relative;
}

.content__title {
  margin: 0 0 35px;
  color: $text-color;
  font-size: 21px;
  font-weight: 500;
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: 0.4s;
}

.fade-out-leave {
  opacity: 1;
}

.fade-out-leave-to {
  opacity: 0;
}

.fade-out-enter {
  opacity: 0;
}

.fade-out-enter-to {
  opacity: 1;
}
</style>
