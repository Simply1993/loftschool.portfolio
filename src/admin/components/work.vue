<template lang="pug">
.work
  .work__title {{work.title}}
  .work__techs {{work.techs}}
  a.work__link(:href="work.link" target="_blank") {{work.link}}
  .work__photo
    img.work__photo-img(:src="'http://webdev-api.loftschool.com/' + work.photo")
  button.work__btn(@click="remove" type="button") Удалить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    work: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["removeWork"]),
    remove() {
      this.removeWork(this.work.id);
    }
  }
};
</script>

<style lang="scss">
.work__photo-img {
  max-height: 200px;
  max-width: 200px;
}
</style>
