<template lang="pug">
.article
  .article__title {{article.title}}
  .article__date {{formatedDate}}
  .article__content {{article.content}}
  button.article__btn(@click="remove" type="button") Удалить
</template>

<script>
import helpers from "../helpers";
import { mapActions } from "vuex";

export default {
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formatedDate: function() {
      return helpers.dateView(this.article.date);
    }
  },
  methods: {
    ...mapActions(["removeArticle"]),
    remove() {
      this.removeArticle(this.article.id);
    }
  }
};
</script>

<style lang="scss">
</style>
