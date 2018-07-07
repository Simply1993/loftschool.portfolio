<template lang="pug">
#root
  router-view(name="header")
  router-view(name="tabs")
  .content
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
</style>
