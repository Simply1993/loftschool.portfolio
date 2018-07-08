const blog = {
  state: {
    articlesItems: []
  },
  mutations: {
    setListArticles(state, articles) {
      state.articlesItems = articles;
    },
    addNewArticle(state, article) {
      state.articlesItems.push(article);
    },
    removeExArticle(state, articleId) {
      state.articlesItems = state.articlesItems.filter(
        item => item.id !== articleId
      );
    }
  },
  getters: {},
  actions: {
    getArticles(store, userId) {
      return this.$axios
        .get(`/posts/${userId}`)
        .then(
          response => {
            if (response.status === 200) {
              store.commit("setListArticles", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    },
    addArticle(store, article) {
      return this.$axios
        .post("/posts", article)
        .then(
          response => {
            if (response.status === 201) {
              store.commit("addNewArticle", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    },
    removeArticle(store, articleId) {
      return this.$axios
        .delete(`/posts/${articleId}`)
        .then(
          response => {
            if (response.status === 200) {
              store.commit("removeExArticle", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    }
  }
};

export default blog;
