webpackJsonp([2],{3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fullscreenMenu=function(){var e=document.querySelector(".menu-hamburger"),t=document.querySelector(".fullscreen-menu");return{init:function(){e.addEventListener("click",function(e){e.preventDefault(),e.currentTarget.classList.toggle("menu-hamburger--active"),t.classList.toggle("fullscreen-menu--active"),document.body.classList.toggle("disable-scroll")})}}}},38:function(e,t,r){"use strict";r(39),r(4),r(40),(0,r(3).fullscreenMenu)().init();var n=document.querySelector(".btn-down"),s=document.querySelector(".btn-up");null!=n&&n.addEventListener("click",function(e){e.preventDefault();var t=n.getAttribute("href"),r=document.querySelector(t).offsetTop;window.scrollBy({top:r,behavior:"smooth"})}),null!=s&&s.addEventListener("click",function(e){e.preventDefault();var t=n.getAttribute("href"),r=document.querySelector(t).offsetTop;window.scrollBy({top:r,behavior:"smooth"})})},39:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=n(r(1)),o=n(r(2));new s.default({el:"#feedback-wrapper",data:{errors:[],name:null,email:null,msg:null,url:null,success:!1,unsuccess:!1},methods:{sendForm:function(e){var t=this;if(this.url=e.target.action,this.checkForm()){var r={name:this.name,email:this.email,msg:this.msg};o.default.post(this.url,r).then(function(r){t.success=!0,setTimeout(function(){t.success=!1,console.log(e),e.target.reset()},2e3),console.log(r)}).catch(function(e){console.log(e)})}else this.unsuccess=!0,setTimeout(function(){t.unsuccess=!1},2e3),console.log(this.errors)},checkForm:function(){return this.errors=[],!(!(this.name&&this.email&&this.msg)&&(this.errors=[],this.name||this.errors.push("Требуется указать имя."),this.email?this.validEmail(this.email)||this.errors.push("Укажите корректный адрес электронной почты."):this.errors.push("Укажите электронную почту."),this.msg||this.errors.push("Требуется написать сообщение."),this.errors.length>0))},validEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},invalidField:function(e){e.target.classList.add("form__input-text--error")},validField:function(e){e.target.classList.remove("form__input-text--error")}},template:"#feedback"})},40:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=n(r(1)),o=n(r(2)),i={template:"#slider-info",props:{work:Object},methods:{enterHandlerWord:function(e,t){var r=e.innerText.trim().split(" ").map(function(e){return"<span>"+e+"</span>"}).join("");e.innerHTML=r;var n=0;!function e(r){var s=r[n],o=setTimeout(function(){e(r)},100);s.classList.add("flipInX"),++n>=r.length&&(clearTimeout(o),t())}(e.children)},enterHandler:function(e,t){var r=e.innerText.trim().split("").map(function(e){return'<span class="'+(" "===e?"whitespace":"")+'">'+e+"</span>"}).join("");e.innerHTML=r,Array.from(e.children);var n=0;!function e(r){var s=r[n],o=setTimeout(function(){e(r)},20);s.classList.add("bounceIn"),++n>=r.length&&(clearTimeout(o),t())}(e.children)}}},c={template:"#slider-display",props:{work:Object}},u={template:"#slider-buttons",props:{works:Array,currentIndex:Number},methods:{slide:function(e){this.$emit("slide",e)},getReqImage:function(e){var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.works));switch(e){case"prev":var r=t[t.length-1];t.unshift(r),t.pop();break;case"next":t.push(t[0]),t.shift()}return t[this.currentIndex]}}};new s.default({el:"#slider-component",components:{info:i,display:c,buttons:u},data:{works:[],currentWork:{},currentIndex:0},watch:{currentIndex:function(e){var t=this.works.length-1;e>t&&(this.currentIndex=0),e<0&&(this.currentIndex=t),this.currentWork=this.works[e]}},beforeCreate:function(){console.log("Nothing gets called before me!")},created:function(){var e=this;o.default.get("http://webdev-api.loftschool.com/works/17").then(function(t){console.log("response"),console.log(t.data),200===t.status&&(e.works=t.data,e.currentWork=e.works[0])},function(e){console.log(e)}).catch(function(e){return console.error(e)})},methods:{handleSlide:function(e){switch(e){case"next":this.currentIndex=this.currentIndex+1;break;case"prev":this.currentIndex=this.currentIndex-1}}},template:"#slider"})}},[38]);