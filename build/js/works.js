webpackJsonp([1],[function(e,t){var n,o,i,c=(n=document.querySelector(".hero__bg"),o=document.querySelector(".hero__user"),i=document.querySelector(".hero__title"),{move:function(e,t,n){var o="translate3d(0,"+t/-n+"%,0)",i=e.style;i.transform=o,i.webkitTransform=o},init:function(e){this.move(n,e,45),this.move(i,e,20),this.move(o,e,7)}});window.onscroll=function(){var e=window.pageYOffset;c.init(e)}},function(e,t){let n=document.getElementById("gamb");n.addEventListener("click",function(){navigation.classList.contains("header__navigation--active")?(document.body.style.overflowY="auto",navigation.classList.remove("header__navigation--active"),n.classList.remove("gamb__btn--active")):(document.body.style.overflowY="hidden",navigation.classList.add("header__navigation--active"),n.classList.add("gamb__btn--active"))})},,,function(e,t,n){"use strict";n.p},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(29),i=(n.n(o),n(2)),c=(n.n(i),n(30),n(31),n(32),n(33),n(4),n(3)),r=(n.n(c),n(0)),s=(n.n(r),n(1)),a=(n.n(s),n(34));n.n(a)},function(e,t){},function(e,t,n){"use strict";n.p},function(e,t,n){"use strict";n.p},function(e,t,n){"use strict";n.p},function(e,t,n){"use strict";n.p},function(e,t){var n,o,i=(n=document.querySelector(".blur__form-wrapper"),o=document.querySelector(".blur__form"),{set:function(){var e=document.querySelector(".section__reviews").offsetWidth,t=-n.offsetLeft,i=-n.offsetTop,c=o.style;c.backgroundSize=e+"px auto",c.backgroundPosition=t+"px "+i+"px"}});i.set(),window.onresize=function(){i.set()}}],[28]);