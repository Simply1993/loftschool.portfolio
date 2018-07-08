<template lang="pug">
.skills-row
  h3.skills-row__title {{ typeItem.name }}
  .skills-row__list
    skill(
      v-for="skill in skills"
      v-if="skill.category === typeItem.id"
      :key="skill.id"
      :skill="skill"
    )
    skill(
      :editmode="true"
      :typeId="typeItem.id"
    )
</template>

<script>
import skill from "./skill.vue";

export default {
  components: {
    skill
  },
  props: {
    typeItem: {
      type: Object,
      default: () => {}
    },
    skills: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.skills-row__title {
  color: $text-color;
  margin: 0 0 15px;
  font-size: 16px;
  font-weight: 500;
}

.skills-row__list {
  margin-left: 15px;
  color: $text-color;
  font-size: 16px;
  font-weight: 400;
}
</style>
