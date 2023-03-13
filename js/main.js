$(document).ready(function () {
   $(".swich").click(function () {
      $("body").toggleClass("dark");
      $(".swich").toggleClass("active");
   })

   $(".slaiders").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class=" prev btn slick-btn"><img src="img/left.svg" alt="arrow"></button>',
      nextArrow: '<button class="btn active next slick-btn"><img src="img/right.svg" alt="arrow"></button>',
      responsive: [
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true,
            }
         }
      ]
   })

   $('.slick-btn').click(function () {
      $('.slick-btn').removeClass('active')
      $(this).addClass('active')
   })

   // tabs
   $('.experience-tabs li').click(function(){
     let value = $(this).attr('data-fillter') 
     $('.experience-tabs li').removeClass("active").eq($(this).index()).addClass("active");
     $(".experience-tab").removeClass("active").eq($(this).index()).addClass("active");
   })

   $(".blog-slaiders").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               dots: true,
            }
         }
      ]
   })

   // testimonials-slaider

   $(".testimonials-slaider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
      autoplay: true,
      autoplaySpeed: 1700,
      responsive: [
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               dots: true,
            }
         }
      ]
   })

   // menu

   $(".burger").click(function(){
      $(".burger").toggleClass("active")
      $(".nav").toggleClass("active")
      $("body").toggleClass("hiden")
   })

});