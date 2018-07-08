<template lang="pug">
.content_wrap.container
  h2.content__title Страница "Обо мне"
  .skills
    .skills__item(
      v-for="typeItem in types"
      :key="typeItem.name"
    )
      skills-row(
        :typeItem="typeItem"
        :skills="skills"
      )
</template>

<script>
import skillsRow from "./skillsRow.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.skillsItems
    }),
    ...mapGetters(["userId"])
  },
  /*watch: {
    skills: function() {
      console.log("change skills " + Date.now());
      //this.getSkills(this.userId);
    }
  },*/
  created() {
    this.getUser().then(response => {
      this.getSkills(this.userId);
    });
  },
  methods: {
    ...mapActions(["getUser", "getSkills"])
  }
};
</script>

<style lang="scss" scoped>
.skills {
  /*width: 70%;*/
}

.skills__item {
  display: inline-flex;
  margin-bottom: 25px;
  margin-right: 60px;
}
</style>
