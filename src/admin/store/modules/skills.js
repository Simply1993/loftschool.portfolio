const skills = {
  //данные, используемые внутри приложения
  state: {
    skillsItems: []
  },
  //методы, изменяющие данные
  mutations: {
    setListSkills(state, skills) {
      state.skillsItems = skills;
    },
    addNewSkill(state, skill) {
      state.skillsItems.push(skill);
    },
    removeExSkill(state, skillId) {
      state.skillsItems = state.skillsItems.filter(item => item.id !== skillId);
    }
  },
  //для получения данных из state
  getters: {},
  //методы, описывающие, что происходит с данными
  actions: {
    getSkills(store, userId) {
      return this.$axios
        .get(`/skills/${userId}`)
        .then(
          response => {
            if (response.status === 200) {
              store.commit("setListSkills", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    },
    addSkill(store, skill) {
      return this.$axios
        .post("/skills", skill)
        .then(
          response => {
            if (response.status === 201) {
              store.commit("addNewSkill", response.data);
              console.log("addSkill", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    },
    /*updateSkill(store, skill) {
      return this.$axios.
    },*/
    removeSkill(store, skillId) {
      return this.$axios
        .delete(`/skills/${skillId}`)
        .then(
          response => {
            if (response.status === 200) {
              store.commit("removeExSkill", response.data);
              console.log("removeSkill", response.data);
            }
          },
          error => console.log(error)
        )
        .catch(e => console.error(e));
    }
  }
};

export default skills;
