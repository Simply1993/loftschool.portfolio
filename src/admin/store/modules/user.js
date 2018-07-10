const user = {
  //данные, используемые внутри приложения
  state: {
    userData: {}
  },
  //методы, изменяющие данные
  mutations: {
    setUser(state, user) {
      state.userData = user;
    },
    clearUser(state) {
      state.userData = {};
    }
  },
  //для получения данных из state
  getters: {
    userId: state => state.userData.id
  },
  //методы, описывающие, что происходит с данными
  actions: {
    getUser(store) {
      return this.$axios
        .get("/user")
        .then(
          response => {
            if (response.status === 200) {
              store.commit("setUser", response.data.user);
            }
          },
          error => {
            console.log(error);
          }
        )
        .catch(e => console.error(e));
    },
    logout(store) {
      return this.$axios
        .post("/logout")
        .then(
          response => {
            if (response.status === 200) {
              console.log("logout response", response);
              localStorage.removeItem("token");
              localStorage.removeItem("ttl");
              store.commit("clearUser");
              window.location.href = "/loftschool.portfolio/dist/";
            }
          },
          error => {
            console.log(error);
          }
        )
        .catch(e => console.error(e));
    }
  }
};

export default user;
