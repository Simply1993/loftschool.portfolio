import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillValue: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["circle"];
      const figure = this.$refs["figure"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (dashOffset / 100) * (100 - this.skillValue);

      window.addEventListener("scroll", function() {
        const positionTop = figure.getBoundingClientRect().top;
        const top = positionTop.toFixed();
        if (top > 350 && top < 600) {
          figure.style.opacity = 0.9;
          circle.style.strokeDashoffset = persents;
        }
      });
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-wrapper",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
  },
  template: "#skills"
});
