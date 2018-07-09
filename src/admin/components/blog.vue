<template lang="pug">
.content_wrap.container
  h2.content__title Страница "Блог"
  new-article
  //articles(:articles="articles")
</template>

<script>
import newArticle from "./newArticle.vue";
import articles from "./articles.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    newArticle,
    articles
  },
  computed: {
    ...mapState({
      articles: state => state.blog.articlesItems
    }),
    ...mapGetters(["userId"])
  },
  created() {
    this.getUser().then(response => {
      this.getArticles(this.userId);
    });
  },
  methods: {
    ...mapActions(["getUser", "getArticles"])
  }
};
</script>
