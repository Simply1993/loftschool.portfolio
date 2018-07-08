const works = {
  state: {
    worksItems: []
  },
  mutations: {
    setListWorks(state, works) {
      state.worksItems = works;
    },
    addNewWork(state, work) {
      state.worksItems.push(work);
    },
    removeExWork(state, workId) {
      state.worksItems = state.worksItems.filter(
        item => item.id !== workId
      );
    }
  },
  getters: {},
  actions: {
    getWorks(store, userId) {
      return this.$axios
        .get(`/works/${userId}`)
        .then(
          response => {
            if (response.status === 200) {
              store.commit("setListWorks", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    },
    addWork(store, work) {
      return this.$axios
        .post("/works", work)
        .then(
          response => {
            if (response.status === 201) {
              console.log("addWork", response.data);
              store.commit("addNewWork", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    },
    removeWork(store, workId) {
      return this.$axios
        .delete(`/works/${workId}`)
        .then(
          response => {
            if (response.status === 200) {
              store.commit("removeExWork", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    }
  }
};

export default works;
