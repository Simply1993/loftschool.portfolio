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
import { mapState, mapActions, mapGetters } from "vuex";

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

.content__title {
  margin: 0 0 35px;
  color: $text-color;
  font-size: 21px;
  font-weight: 500;
}

.skills__item {
  display: inline-flex;
  margin-bottom: 25px;
  margin-right: 60px;
}
</style>
