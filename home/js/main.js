(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  /* 
  CounterUp
  ========================================================================== */
  $('.counter').counterUp({
    time: 500
  });  
  
  /* 
  MixitUp
  ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   Screens Crouserl
   ========================================================================== */
    $('#carousel-screen').carousel({
      num: 5,
      maxWidth: 450,
      maxHeight: 300,
      distance: 50,
      scale: 0.6,
      animationTime: 1000,
      showTime: 4000
    });   

  /* 
   Clients Sponsor 
   ========================================================================== */
    var owl = $("#clients-scroller");
    owl.owlCarousel({
      items:5,
      itemsTablet:3,
      margin:90,
      stagePadding:90,
      smartSpeed:450,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,3],
      itemsTablet: [767,2],
      itemsTabletSmall: [480,2],
      itemsMobile : [479,1],
    });

  /* Testimonials Carousel 
  ========================================================*/
  var owl = $("#testimonials");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTablet: [767,1],
      itemsTabletSmall: [480,1],
      itemsMobile : [479,1],
    });   

  /* 
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 4,
      itemsDesktopSmall: [1024, 4],
      itemsTablet: [600, 2],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="lni-arrow-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="lni-arrow-right"></i>');

    /* Screens Shot Slider
    =============================*/
     var owl = $(".screens-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        addClassActive: true,
        items: 3,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });

  /* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

  /* 
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

}(jQuery));

// auto type text start
(function () {
   var CharacterPos = 0;
   var MsgBuffer = "";
   var TypeDelay = 150; 
   var NxtMsgDelay = 1000;
   var MsgIndex = 0;
   var delay;
   var MsgArray = ["Welcome to A.K Technical Study Center.","1. Power Battery was invented by Alessandro Volta in 1800.",
   "2. DC Motor was invented by Zenobe Gramme in 1873.","3. AC motor was invented by Nikola Tesla in 1888.","4. Electro-magnet was invented by William Strjn in 1824.",
   "5. Neon-lamp was invented by George Claude in 1910.","6. The transformer was invented by Michael Faraday in 1831.","6. The transformer was invented by Michael Faraday in 1831.",
   "7. The Elevator was invented by Ilisa Otis in 1852.","8. The washing machine was invented by Alva Fisher in 1906.","9. Microprocessor was invented by ME E Huf in 1971.",
   "10. wi-fi was invented by benjamin franklin in 1780."];

   function StartTyping() {
      var id = document.getElementById("typing-text");
      if (CharacterPos != MsgArray[MsgIndex].length) {
         MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
         id.value = MsgBuffer+"_";
         delay = TypeDelay;
         id.scrollTop = id.scrollHeight; 
      } else {
         delay = NxtMsgDelay;
         MsgBuffer   = "";
         CharacterPos = -1;
         if (MsgIndex!=MsgArray.length-1){
           MsgIndex++;
         }else {
           MsgIndex = 0;
         }
       }
       CharacterPos++;
       setTimeout(StartTyping,delay);
   }
StartTyping();
})();
// auto type text end

// mathjax code start here

// mathjax code end here



