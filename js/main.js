$(document).ready(function(){
  $("a").click(function(e){
    e.preventDefault();  
  });

  $("nav > ul > li").mouseover(function () {
    $(".over-bg, header .header-menu, h1 .logo-on, h1 .logo, .header-menu .gnb li, .util-menu ul li, header .header-menu .gnb > li > a.out-link li a, .ut-logo, .ut-logo-on, .header-menu .menuall a, .header-menu .search a").addClass("active");
    var heightValue = $(this).data("height");
    $("header").addClass("active").css("height", heightValue);
  });
      $("header").on("mouseleave",function () {
        $("header").removeClass("active").css("height",0);
        $(".over-bg, header .header-menu,  h1 .logo-on, h1 .logo, .header-menu .gnb li, .util-menu ul li, .out-link li a, .ut-logo, .ut-logo-on, .header-menu .menuall a, .header-menu .search a").removeClass("active");
        $("nav > ul > li .depth02-box ").hide();
      });
      
  // 클릭시 .depth02-box를 활성화하고 다른 .depth02-box를 숨김
  $("nav > ul > li .depth02-box ").hide();
  $("nav > ul > li").hover(function() {
    $(this).find(".depth02-box").show();
    $(this).siblings().find(".depth02-box").hide();
  });

  var bullet = ['국내여행정보', '관광기업지원', '관광데이터'];
  var swiper01 = new Swiper('.main-swiper', {
    // Default parameters
    slidesPerView: 1,
    effect : 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed:1200,
    loop: true, 
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main-pagination",
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
      }
    },
  })
  var swiper02 = new Swiper('.main-swiper', {
    slidesPerView: 1,
    loop: true, 
    pagination: {
      el:".main-progressbar",
      type: "progressbar",
    },
    effect : 'fade',
    fadeEffect: {
      crossFade: true
    },
  })
  swiper01.controller.control =swiper02;
  swiper02.controller.control =swiper01;

  var swiper03 = new Swiper('.new-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, 
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el:".pagination-fraction",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                ' / ' +
                '<span class="' + totalClass + '"></span>';
      },
    },
  })


  $(".new .start").on("click",function(){
    swiper03.autoplay.start();
    return false;
  });
  $(".new .stop").on("click",function(){
    swiper03.autoplay.stop();
    return false; 
  });
  $(".new .stop").click(function(){
    $(".new .start, .new .stop").addClass("active");
  });
  $(".new .start").click(function(){
    $(".new .start, .new .stop").removeClass("active");
  });

  var $tablink = $(".business-tap li").click(function(){
    var idx=$tablink.index(this);
    $(".business-tap li").removeClass("active")
    $(".business-tap li").eq(idx).addClass("active");
  });

  var swiper04 = new Swiper('.site-swiper', {
    slidesPerView: "auto",
    loop: true, 
    speed : 1000,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
  $(".site .start").on("click",function(){
    swiper04.autoplay.start();
    return false;
  });
  $(".site .stop").on("click",function(){
    swiper04.autoplay.stop();
    return false; 
  });
  $(".site .stop").click(function(){
    $(".site .start ,.site .stop").addClass("active");
  });
  $(".site .start").click(function(){
    $(".site .start, .site .stop").removeClass("active");
  });
  $(".family-site a").click(function(){
    $(".family-popup").addClass("active");
  });
  $(".popup-box .pop-tit > a").click(function(){
    $(".family-popup").removeClass("active");
  });

  $('.top-btu').click(function(){
    $('html, body').animate({"scrollTop":0});
  });
});


