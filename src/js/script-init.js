var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player1;
  var player2;
 function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('mainvideo', {
      height: '315',
      width: '560',
      videoId: 'w4gnFr49Q3o',});

  }

  function play1() {
    player1.playVideo();
  }

$(document).ready(function () {

// fix header
  var headerInner = $(".header");
  var headerHeight = headerInner.height();
  var headerNav = $(".header-nav");
  var headerFixed = "header--fixed";
  var menuBtnDesk = $(".hamburger--desk");
  var hamburger = $('.hamburger-button');

  $(window).scroll(function () {

      if ( ($(this).scrollTop() > (headerHeight + 30)) && $(window).width() >= 992 ) {
        headerInner.addClass(headerFixed);
        if (headerInner.hasClass('header--index')) {
          headerNav.removeClass("header-nav--index");
        } else {
          $(".main-inner").css('padding-top', headerHeight);
        }
        menuBtnDesk.addClass("hamburger--show");
      } else {
      if ( $(this).scrollTop() <= (headerHeight + 30) && headerInner.hasClass(headerFixed) ) {
        headerInner.removeClass(headerFixed);
        $(".main-inner").css('padding-top', '');
        menuBtnDesk.removeClass("hamburger--show");
        if (headerInner.hasClass('header--index') && ($(window).width() >= 1200) ) {
          headerNav.addClass("header-nav--index");
          headerNav.removeClass('header-nav--show');
          $('.additional-nav--vertical').removeClass('additional-nav--hidden');
          hamburger.removeClass('hamburger-button--close');
        }
      }
    }

  });
// end fix header


  // hamburger.click(function() {
  //    hamburger.toggleClass('hamburger-button--close');
  // });

  $(window).on('resize', function () {
    if ($(window).width() < 1200) {
      $(window).on('resize', function () {
        if ($(window).width() >= 1200) {
          headerNav.removeClass('header-nav--show');
          $('.additional-nav--vertical').removeClass('additional-nav--hidden');
          hamburger.removeClass('hamburger-button--close');
          $('.header-nav-layer').removeClass('header-nav-layer--show');
        }
      });
    }
  });

// -------------------------------------------------------------------------
// menu
$('.hamburger--desk').on('click', function () {
    $('.header-nav').toggleClass('header-nav--show');
    $('.additional-nav--vertical').toggleClass('additional-nav--hidden');
    hamburger.toggleClass('hamburger-button--close');
});

$('.hamburger--mobile').on('click', function () {
  $('.header-nav').toggleClass('header-nav--show');
  $('.header-nav__sub-list-inner').slideUp();
  $('.header-nav__item--drop > span').removeClass('arr-up');
  $('.header-nav').scrollTop(0);
  $('.header-nav-layer').toggleClass('header-nav-layer--show');
  hamburger.toggleClass('hamburger-button--close');
});

$('.header-nav__item--drop > span').on('click', function () {
  $(this).siblings('.header-nav__sub-list-inner').slideToggle(300);
  $(this).toggleClass('arr-up');
});




  $('.header-nav-layer').on('click', function (e) {
    $('.header-nav').toggleClass('header-nav--show');
    $('.header-nav__sub-list-inner').slideUp();
    $('.header-nav__item--drop > span').removeClass('arr-up');
    $('.header-nav').scrollTop(0);
    $(this).removeClass('header-nav-layer--show');
    hamburger.removeClass('hamburger-button--close');
  });



// end menu ----------------------------------------------------------------




  // $('.main-promo__plate').on('click', function () {
  //   $(this).addClass('main-promo__plate--hidden');
  //   play1();
  //   // $('.main-promo__video').get(0).play();
  // });

  $('.tab-list--scrolled').mCustomScrollbar({
    axis:"x",
    theme: "3d-dark"
  });

  $('.table-responsive--scrolled').mCustomScrollbar({
    axis:"x",
    theme: "3d-dark"
  });


  $('[data-fancybox]').fancybox({
	  loop: true,
	});


	$('.tel-mask').mask('+7(999)999-99-99');

  $(".set > a").on("click", function(evt){
	  evt.preventDefault();
	  if($(this).hasClass('active')){
	    $(this).removeClass("active");
	    $(this).siblings('.content').slideUp(200);
	    $(".set > a i").removeClass("ar-up");
	  }else{
	    $(".set > a i").removeClass("ar-up");
	  $(this).find("i").addClass("ar-up");
	  $(".set > a").removeClass("active");
	  $(this).addClass("active");
	  $('.content').slideUp(200);
	  $(this).siblings('.content').slideDown(200);
	  }

	});

	$('.accordion-container .set').first().children('a').trigger('click');


  $('.tab-list .tab-list__item').on('click', function(event) {
    var currentAttributeValue = $(this).attr('href');

    // Show/Hide Tabs
    $('.tab-container ' + currentAttributeValue).fadeIn('fast').siblings().fadeOut('fast');
    // $('.tab-container ' + currentAttributeValue).addClass('show active').siblings().removeClass('show active');

    // Change/remove current tab to active
    $(this).addClass('active').siblings().removeClass('active');

    event.preventDefault();

  });

  $('.table-mobile-scroll').on('touchmove', function () {
    $(this).addClass('layer-hidden');
  });


	$('.js_main-slider').slick({
			 dots: true,
			 infinite: true,
       prevArrow: $('.main-slider-inner .arr-prev'),
       nextArrow: $('.main-slider-inner .arr-next'),
			 speed: 800,
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 draggable: false,
			 autoplay: false,
       autoplaySpeed: 7000,
			 responsive: [
			     {
			       breakpoint: 769,
			       settings: {
			         arrows: false,
			         dots: true
			       }
			     }
			   ]
	});

  $('.js_doctor-slider').slick({
			 dots: false,
			 infinite: true,
       prevArrow: $('.doctor-slider .arr-prev'),
       nextArrow: $('.doctor-slider .arr-next'),
			 speed: 800,
			 slidesToShow: 5,
			 slidesToScroll: 1,
       swipeToSlide: true,
			 draggable: false,
			 autoplay: false,
       autoplaySpeed: 7000,
			 responsive: [
			     {
			       breakpoint: 1200,
			       settings: {
			         slidesToShow: 4,
			       }
			     },
           {
			       breakpoint: 992,
			       settings: {
			         slidesToShow: 3,
			       }
			     },
           {
			       breakpoint: 767,
			       settings: {
               slidesToShow: 3,
			         dots: true
			       }
			     },
           {
			       breakpoint: 576,
			       settings: {
			         slidesToShow: 2,
               dots: true
			       }
			     },
           {
			       breakpoint: 410,
			       settings: {
               centerMode: true,
               centerPadding: '50px',
			         slidesToShow: 1,
               dots: true
			       }
			     },
			   ]
	});

  $('.js_doctor-slider2').slick({
			 dots: true,
			 infinite: true,
       prevArrow: $('.doctors .arr-prev'),
       nextArrow: $('.doctors .arr-next'),
			 speed: 800,
			 slidesToShow: 5,
			 slidesToScroll: 1,
       swipeToSlide: true,
			 draggable: false,
			 autoplay: false,
       autoplaySpeed: 7000,
			 responsive: [
			     {
			       breakpoint: 1200,
			       settings: {
			         slidesToShow: 4,
			       }
			     },
           {
			       breakpoint: 992,
			       settings: {
			         slidesToShow: 3,
			       }
			     },
           {
			       breakpoint: 767,
			       settings: {
               slidesToShow: 3,
			         dots: true
			       }
			     },
           {
			       breakpoint: 576,
			       settings: {
			         slidesToShow: 2,
               dots: true
			       }
			     },
           {
			       breakpoint: 410,
			       settings: {
               centerMode: true,
               centerPadding: '50px',
			         slidesToShow: 1,
               dots: true
			       }
			     },
			   ]
	});

  $('.js_single-rooms-slider').slick({
			 dots: true,
			 infinite: true,
       prevArrow: $('.single-rooms-slider .arr-prev'),
       nextArrow: $('.single-rooms-slider .arr-next'),
			 speed: 800,
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 draggable: false,
			 autoplay: false,
       autoplaySpeed: 7000,
			 responsive: [
			     {
			       breakpoint: 768,
			       settings: {
			         dots: true
			       }
			     }
			   ]
	});

  $('.js_single-rooms-slider-pic').slick({
			 dots: true,
			 infinite: true,
       prevArrow: $('.single-rooms-slider--pic .arr-prev'),
       nextArrow: $('.single-rooms-slider--pic .arr-next'),
			 speed: 800,
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 draggable: false,
			 autoplay: false,
       autoplaySpeed: 7000,
			 responsive: [
			     {
			       breakpoint: 768,
			       settings: {
			         dots: true
			       }
			     }
			   ]
	});

  $('.js_reviews-slider').slick({
			 dots: true,
			 infinite: true,
       prevArrow: $('.reviews-slider .arr-prev'),
       nextArrow: $('.reviews-slider .arr-next'),
			 speed: 800,
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 draggable: false,
			 autoplay: false,
       autoplaySpeed: 7000,
			 responsive: [
			     {
			       breakpoint: 768,
			       settings: {
			         dots: true
			       }
			     }
			   ]
	});


  $('.js_room-standart').slick({
       dots: false,
       arrows: true,
       infinite: true,
       prevArrow: $('.room-slider--standart .arr-prev'),
       nextArrow: $('.room-slider--standart .arr-next'),
       speed: 800,
       slidesToShow: 1,
       slidesToScroll: 1,
       draggable: false,
       autoplay: true,
       autoplaySpeed: 7000
  });

  $('.js_room-junior').slick({
       dots: false,
       arrows: true,
       infinite: true,
       prevArrow: $('.room-slider--junior .arr-prev'),
       nextArrow: $('.room-slider--junior .arr-next'),
       speed: 800,
       slidesToShow: 1,
       slidesToScroll: 1,
       draggable: false,
       autoplay: true,
       autoplaySpeed: 7000
  });

  $('.js_room-standart2').slick({
       dots: false,
       arrows: true,
       infinite: true,
       prevArrow: $('.room-slider--standart2 .arr-prev'),
       nextArrow: $('.room-slider--standart2 .arr-next'),
       speed: 800,
       slidesToShow: 1,
       slidesToScroll: 1,
       draggable: false,
       autoplay: true,
       autoplaySpeed: 7000
  });


  var sizer = '.sizer4';
  var container = $('#gallery1');

    container.imagesLoaded(function(){
        container.masonry({
            itemSelector: '.masonry-gallery__item',
            columnWidth: sizer,
            gutter: '.gutter-sizer',
            percentPosition: true
        });
    });


  if(Cookies.get('cookies-popup') != 1) {
		$('.cookies-popup').fadeIn();
	}
	$('.cookies-popup__btn').on('click', function (evt) {
		evt.preventDefault();
		$('.cookies-popup').fadeOut();
    Cookies.set('cookies-popup', '1', { expires: 365000 * 7 });
	});

  $('[data-fancybox="popupmap"]').fancybox({
    smallBtn : true,
    toolbar : false,
    touch:false,
    animationDuration: 350,
    animationEffect: "material",
    // closeClickOutside : true,
  });

  // btn-scroll down
  jQuery("body").on('click', '.js_mouse', function(evt){
    var fixed_offset = 20;
    jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
    evt.preventDefault();
  });

  $('a[href="#header-top"]').click(function(){
          $('html, body').animate({scrollTop:0}, 'slow');
          return false;
      });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.totop').addClass('totop--show');
    }
    else {
      $('.totop').removeClass('totop--show');
    }
  });

});   // end document ready


google.maps.event.addDomListener(window, 'load', init);

            function init() {

                var mapOptions = {
                  scrollwheel: false,
                    zoom: 15,
                    fullscreenControl: false,

                    center: new google.maps.LatLng(44.055144, 43.038282), // New York

                    styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]}]


                };


                var mapElement = document.getElementById('mapfooter');

                var map = new google.maps.Map(mapElement, mapOptions);

                var point1 = new google.maps.LatLng(44.054849, 43.038176);
                var point2 = new google.maps.LatLng(44.054031, 43.041116);

                var marker = new google.maps.Marker({ position: point1, map: map, title: 'Стационар'});
                var marker2 = new google.maps.Marker({ position: point2, map: map, title: 'Поликлиника'});

            }

            google.maps.event.addDomListener(window, 'load', init);

                        function init() {

                            var mapOptions = {
                              scrollwheel: false,
                                zoom: 15,
                                fullscreenControl: false,

                                center: new google.maps.LatLng(44.055144, 43.038282), // New York

                                styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]}]


                            };


                            var mapElement = document.getElementById('contacts-map');

                            var map = new google.maps.Map(mapElement, mapOptions);

                            var point1 = new google.maps.LatLng(44.054849, 43.038176);

                            var marker = new google.maps.Marker({ position: point1, map: map, title: 'Стационар'});

                        }
