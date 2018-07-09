<template lang="pug">
.content_wrap.container
  h2.content__title Страница "Мои работы"
  new-work
  //works-list(:works="works")
</template>

<script>
import worksList from "./worksList.vue";
import newWork from "./newWork.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    worksList,
    newWork
  },
  computed: {
    ...mapState({
      works: state => state.works.worksItems
    }),
    ...mapGetters(["userId"])
  },
  created() {
    this.getUser().then(response => {
      this.getWorks(this.userId);
    });
  },
  methods: {
    ...mapActions(["getWorks", "getUser"])
  }
};
</script>
