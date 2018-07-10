import Vue from "vue";
import axios from "axios";

const skill = {
  template: "#skill",
  props: {
    skill: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["circle"];
      const figure = this.$refs["figure"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (dashOffset / 100) * (100 - this.skill.percents);

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

new Vue({
  el: "#skills-wrapper",
  components: {
    skillsRow
  },
  data: {
    skills: [],
    types: [
      { id: 0, name: "Frontend" },
      { id: 1, name: "Backend" },
      { id: 2, name: "Workflow" }
    ]
  },
  created() {
    axios
      .get("http://webdev-api.loftschool.com/skills/17")
      .then(
        response => {
          console.log(response.data);
          if (response.status === 200) {
            this.skills = response.data;
          }
        },
        error => {
          console.log(error);
        }
      )
      .catch(e => console.error(e));
  },
  template: "#skills"
});
