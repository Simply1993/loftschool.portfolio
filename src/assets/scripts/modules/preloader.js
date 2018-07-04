import Vue from "vue";

new Vue({
  el: "#animated-number",
  data: {
    tweenedNumber: 0,
    load: false,
    images: null,
    imagesCount: 0,
    percent: 100,
    minImg: 3,
    loadedImg: 0,
    progress: 0
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  created() {
    this.loading();
  },
  methods: {
    img_load() {
      this.progress += this.percent;
      this.loadedImg++;
      if (this.progress >= 100 || this.loadedImg == this.imagesCount) {
        this.load = true;
      }
      TweenLite.to(this.$data, 0.1, { tweenedNumber: this.progress });
    },
    loading() {
      document.body.classList.toggle("disable-scroll");
      this.images = document.images;
      this.imagesCount = this.images.length;
      console.log("Картинок " + this.imagesCount);
      if (this.imagesCount > 0) {
        this.percent = 100 / this.imagesCount;
      }
      if (this.imagesCount >= this.imgSum && this.imagesCount > 0) {
        for (var i = 0; i < this.imagesCount; i++) {
          var img_copy = new Image();
          img_copy.src = document.images[i].src;
          img_copy.onload = this.img_load;
          img_copy.onerror = this.img_load;
        }
        setTimeout(() => {
          this.$data.load = true;
        }, 500);
      } else {
        TweenLite.to(this.$data, 1, { tweenedNumber: 100 });
        setTimeout(() => {
          this.$data.load = true;
          document.body.classList.toggle("disable-scroll");
        }, 1500);
      }
    }
  },
  template: "#preloader"
});
