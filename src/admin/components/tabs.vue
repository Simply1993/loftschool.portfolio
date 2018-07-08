<template lang="pug">
.tabs
  ul.tabs__list
    li.tabs__item(
      v-for="tab in tabs"
      :class='{"tabs__item--active": urlPage == tab.href}'
    )
      router-link(
        :to="tab.href"
      ).tabs__link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Блог", href: "/blog" },
        { title: "Работы", href: "/works" }
      ],
      urlPage: window.location.pathname
    };
  },
  watch: {
    $route(to, from) {
      this.urlPage = to.path;
    }
  }
};
</script>

<style lang="scss">
.tabs {
  position: relative;
  margin-bottom: 40px;
}

.tabs__list {
  background-color: #f0efe9;
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
.tabs__item {
  background-color: #f0efe9;
  border-right: 2px solid $white;
  transition: 0.3s;
  &--active,
  &:hover {
    background-color: $white;
    .tabs__link {
      color: $pale-green;
    }
  }
}
.tabs__link {
  text-decoration: none;
  padding: 20px 70px;
  display: block;
  color: #566358;
}
</style>
