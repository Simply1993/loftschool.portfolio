<template lang="pug">
.new-work
  h3.new-work__title Добавить запись
  .new-work__form
    label.work__label(for="title") Название проекта
    input.work__input#title(v-model="newWork.title" placeholder="Название проекта")
    label.work__label(for="techs") Технологии
    input.work__input#techs(v-model="newWork.techs" placeholder="Технологии")
    label.work__label(for="link") Ссылка
    input.work__input#link(v-model="newWork.link" placeholder="Ссылка")
    label.work__label(for="picture") Картинка проекта
    .work__file-upload
      label.btn.btn--file(for="picture") {{currentFile}}
      input.work__file-input#picture(type="file" @change="addPhoto")
    button.btn(@click="add") Добавить
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newWork: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      },
      currentFile: "Загрузить картинку"
    };
  },
  methods: {
    ...mapActions(["addWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.len === 0) return;

      this.newWork.photo = files[0];
      this.currentFile = files[0].name;
    },
    add() {
      const formData = new FormData();

      Object.keys(this.newWork).forEach(prop => {
        formData.append(prop, this.newWork[prop]);
      });

      this.addWork(formData).then(response => {
        this.newWork.title = "";
        this.newWork.techs = "";
        this.newWork.link = "";
        this.newWork.photo = "";
        this.currentFile = "Загрузить картинку";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  font-size: 16px;
  font-weight: 500;
  color: $white;
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
  background-color: $pale-green;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: $green;
  }
}

.btn--file {
  outline: none;
  padding: 0;
  background-color: transparent;
  color: $pale-green;
  font-weight: 400;
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    width: 35px;
    height: 35px;
    background-image: url("../file-pic.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  &:hover {
    background-color: transparent;
  }
}

.new-work {
  font-size: 16px;
}

.new-work__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.work__input {
  background-color: $white;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  font-weight: 400;
  margin-bottom: 20px;
}

.work__input {
  height: 45px;
  width: 300px;
  font-size: 16px;
}

.work__label {
  left: -9999px;
  position: absolute;
  top: 0;
}

.new-work__title {
  color: $text-color;
  font-size: 16px;
  font-weight: 500;
}

.work__file-upload {
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
}

.work__file-input {
  position: absolute;
  top: 0;
  left: -9999px;
  opacity: 0;
}
</style>
