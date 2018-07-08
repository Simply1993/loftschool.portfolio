<template lang="pug">
.works
  ul.works__list
    li.works__item(v-for="work in works" :key="work.id")
      work(:work="work")
</template>

<script>
import work from "./work.vue";

export default {
  components: {
    work
  },
  props: {
    works: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
.works__item {
  margin-bottom: 10px;
}
</style>
