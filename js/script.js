$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(".header__link").click(function(){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});


function parall(event){
  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-sp');
    layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
  });
  this.querySelectorAll('.layer_r').forEach(layer_r => {
    let speed_r = layer_r.getAttribute('data-sp');
    layer_r.style.transform = `translateX(${event.clientX*-speed_r/1000}px)`
  });
}
document.addEventListener('mousemove', parall);
///////////////////////////////////////////////////

document.getElementById('dmg').addEventListener('click', function(){

  TweenMax.to('.dmg__h', .01, {
    color: "rgb(212, 246, 90)",
    ease: Circ.easeOut,
    borderBottom: "3px solid #D4F65A",
    borderTop: 0
  });
  TweenMax.to('.dmg__p', .01, {
    ease: Circ.easeOut,
    fontSize: 18,
    padding: 60,
    scaleY:1,
    opacity: 1
  });
  TweenMax.to('.bcvs__h', .01, {
    color: "rgb(41, 34, 125)",
    ease: Circ.easeOut,
    borderTop: "3px solid #D4F65A",
    borderBottom: 0
  });
  TweenMax.to('.bcvs__p', .01, {
    ease: Circ.easeOut,
    fontSize: 0,
    padding: 0,
    scaleY:0,
    opacity: 0
  });
  TweenMax.to('.ma__h', .01, {
    color: "rgb(41, 34, 125)",
    ease: Circ.easeOut,
    borderBottom: 0,
    borderTop: "3px solid #D4F65A"
  });
  TweenMax.to('.ma__p', .01, {
    ease: Circ.easeOut,
    fontSize: 0,
    padding: 0,
    scaleY:0,
    opacity: 0
  });
})

document.getElementById('bcvs').addEventListener('click', function(){

  TweenMax.to('.bcvs__h', .01, {
    color: "rgb(212, 246, 90)",
    ease: Circ.easeOut,
    borderTop: 0,
    borderBottom: "3px solid #D4F65A"
  });
  TweenMax.to('.bcvs__p', .01, {
    ease: Circ.easeOut,
    fontSize: 18,
    padding: 60,
    scaleY: 1,
    opacity: 1
  });
  TweenMax.to('.dmg__h', .01, {
    color: "rgb(41, 34, 125)",
    ease: Circ.easeOut,
    color: "#251F72"
  });
  TweenMax.to('.dmg__p', .01, {
    ease: Circ.easeOut,
    fontSize: 0,
    padding: 0,
    scaleY: 0,
    opacity: 0
  });
  TweenMax.to('.ma__h', .01, {
    color: "rgb(41, 34, 125)",
    ease: Circ.easeOut,
    borderBottom: 0,
    borderTop: "3px solid #D4F65A"
  });
  TweenMax.to('.ma__p', .01, {
    ease: Circ.easeOut,
    fontSize: 0,
    padding: 0,
    scaleY:0,
    opacity: 0
  });
})

document.getElementById('ma').addEventListener('click', function(){

  TweenMax.to('.ma__h', .01, {
    color: "rgb(212, 246, 90)",
    ease: Circ.easeOut,
    borderBottom: "3px solid #D4F65A",
    borderTop: 0
  });
  TweenMax.to('.ma__p', .01, {
    ease: Circ.easeOut,
    fontSize: 18,
    padding: 60,
    scaleY: 1,
    opacity: 1
  });
  TweenMax.to('.bcvs__h', .01, {
    color: "rgb(41, 34, 125)",
    ease: Circ.easeOut,
    borderTop: 0,
    borderBottom: "3px solid #D4F65A"
  });
  TweenMax.to('.bcvs__p', .01, {
    ease: Circ.easeOut,
    fontSize: 0,
    padding: 0,
    scaleY:0,
    opacity: 0
  });
  TweenMax.to('.dmg__h', .01, {
    color: "rgb(41, 34, 125)",
    ease: Circ.easeOut,
    borderTop: 0,
    borderBottom: "3px solid #D4F65A"
  });
  TweenMax.to('.dmg__p', .01, {
    ease: Circ.easeOut,
    fontSize: 0,
    padding: 0,
    scaleY:0,
    opacity: 0
  });
})
///////////////////////////////////////

var tl3 = new TimelineMax({onUpdate:updatePercentage});
var tl4 = new TimelineMax();

var tl6 = new TimelineMax({onUpdate:updatePercentage});
var tl7 = new TimelineMax({onUpdate:updatePercentage});
var tl8 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();


tl3.to('.fontain__image-left', 2, {x:0, ease: Power4.easeInOut});
tl3.to('.fontain__image-right', 2, {x:0, ease: Power4.easeInOut,delay: -2});
tl3.to('.fontain', 2, {opacity: 1, ease: Power4.easeInOut});


tl4.from(".online__left", .4, {opacity: 0, x:-200, ease: Power3.easeOut});
tl4.from(".online__right", .4, {opacity: 0, x:200, ease: Power3.easeOut, delay: -0.2});
tl4.from(".online__title", .4, {opacity: 0, y:200, ease: Power3.easeOut, delay: -0.3});
tl4.to(".online__left", .2, {opacity:1, y: 0});
tl4.to(".online__right", .2, {opacity:1, y: 0});
tl4.to(".online__title", .2, {opacity:1, y: 0});

tl6.to('.team__rigth', 2, {x:400, opacity: 0, ease: Power4.easeInOut});
tl6.to('.team__left', 1.5, {x:-400, opacity: 0, ease: Power4.easeInOut, delay: -2});
tl6.to('.team__img-top', 1, {y:0, opacity: 1, ease: Power4.easeInOut, delay: -1});
tl6.to('.team__img-bottom', 1, {x:0, opacity: 1, ease: Power4.easeInOut, delay: -0.7});
tl6.to('.team__border', 1, {scale: 1, opacity: 1, ease: Power4.easeInOut, delay: -0.7});
tl6.to('.team__p-anim', 1, {y:0, opacity: 1, ease: Power4.easeInOut, delay: -1.5});

tl7.to(".offline__left", 2, {opacity: 0, x:-200, ease: Power4.easeOut, delay: .5});
tl7.to(".offline__right", 1, {opacity: 0, x:200, ease: Power4.easeOut, delay: -2});
tl7.to(".rte_1", 1, {opacity:1, y: 0, ease: Power4.easeOut, delay: -1});
tl7.to(".rte_2", 1, {opacity:1, y: 0, ease: Power4.easeOut, delay: -1.2});
tl7.to(".rte_3", 1, {opacity:1, y: 0, ease: Power4.easeOut, delay: -1.3});
tl7.to(".offline", 2, {backgroundColor: "#29227D", delay: -1.8});
tl7.to(".problem__title", 2, {opacity: 0, x: -30, delay: -1.8 });
tl7.to(".offline__title", 2, {opacity: 1, delay: -1.8 });
tl7.to(".palm__image-left", 2, {y:0, ease: Power4.easeOut});
tl7.to(".palm__image-center", 2, {y:0, ease: Power4.easeOut, delay: -1.8});
tl7.to(".palm__image-right", 2, {y:0, ease: Power4.easeOut, delay: -1.8});

tl8.to('.history__rigth', 3, {x:400, opacity: 0, ease: Power4.easeOut, delay: 1});
tl8.to('.history__left', 3, {x:-400, opacity: 0, ease: Power4.easeOut, delay: -3});
tl8.to('.history__content_3', 5, {y:-900, delay: -1.7, ease: SlowMo.ease.config(0.3, 0.7, false) });
tl8.to(".history", 2, {backgroundColor: "#C0D3FB",delay: -1});
tl8.to(".history__title", 2, {color: "#FF720A", delay: -1});
tl8.to('.history__img-top', 1.5, {y:0, opacity: 1, ease: Power3.easeOut, delay: -2});
tl8.to('.history__img-bottom', 1, {x:0, opacity: 1, ease: Power3.easeOut, delay: -2});
tl8.to('.history__border', 1, {scale: 1, opacity: 1, ease: Power3.easeOut, delay: -1.8});
tl8.to('.history__p-anim', 1, {y:0, opacity: 1, ease: Power3.easeOut, delay: -1.5});

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".space",
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(".space")
.setTween(tl3)
.addTo(controller);

function updatePercentage() {
  tl3.progress();
}

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".online",
  triggerHook: 0.7
})
.setTween(tl4)
.addTo(controller);


const scene6 = new ScrollMagic.Scene({
  triggerElement: ".team",
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(".team")
.setTween(tl6)
.addTo(controller);

function updatePercentage() {
  tl6.progress();
}

const scene7 = new ScrollMagic.Scene({
  triggerElement: ".offline",
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(".offline")
.setTween(tl7)
.addTo(controller);

function updatePercentage() {
  tl7.progress();
}
const scene8 = new ScrollMagic.Scene({
  triggerElement: ".history",
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(".history")
.setTween(tl8)
.addTo(controller);

function updatePercentage() {
  tl8.progress();
}


/////////////////////////////////////////

//$(window).bind('resize', function() {
//  location.reload();
//});
$(window).bind('orientationchange', function (event) {
    location.reload(true);
});

$(document).on('click', '.item', function() {
  $(this).toggleClass('open');
});
