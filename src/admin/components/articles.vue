<template lang="pug">
.articles
  ul.articles__list
    li.articles__item(v-for="article in articles" :key="article.id")
      articleItem(:article="article")
</template>

<script>
import article from "./article.vue";

export default {
  components: {
    articleItem: article
  },
  props: {
    articles: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
.articles__item {
  margin-bottom: 10px;
}
</style>
