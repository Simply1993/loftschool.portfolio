<template lang="pug">
.skill(v-if="!editmode")
  .skill__title {{skill.title}}
  .skill__info
    .skill__percents
      input.skill__input.skill__input--percents(
        :value="skill.percents"
      )
      span %
    .btns
      button(@click="remove" type="button" class="btn btn--remove") х

.skill.skill--new(v-else)
  .skill__title
    input(
      class="skill__input skill__input--name"
      type="text"
      placeholder="имя"
      v-model="newSkill.title"
    )
  .skill__info
    .skill__percents
      input(
        class="skill__input skill__input--percents"
        type="text"
        placeholder="%"
        v-model="newSkill.percents"
      )
      span %
    .btns
      button(@click="add" type="button" class="btn btn--add") +
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    },
    editmode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["removeSkill", "addSkill"]),
    add() {
      this.addSkill(this.newSkill).then(response => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
      });
    },
    remove() {
      this.removeSkill(this.skill.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/layout/mixins";

.skill {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 32px;
  margin-bottom: 10px;
  @include phones {
    justify-content: space-between;
  }
}

.skill__title {
  min-width: 105px;
  margin-right: 10px;
  @include phones {
    min-width: 80px;
  }
}

.skill__percents {
  margin-right: 10px;
}

.skill__info {
  display: flex;
}

.skill__input {
  width: 46px;
  height: 32px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
}

.skill__input--name {
  width: 100%;
  @include tablets {
    width: 90px;
  }
}

.skill__input--percents {
  text-align: center;
  margin-right: 10px;
}

.btn {
  color: $text-color;
  padding: 0;
  font-size: 18px;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
  vertical-align: middle;
  display: inline-block;
}

.btn--add {
  color: $pale-green;
}

.btn--remove {
  color: red;
}
</style>
