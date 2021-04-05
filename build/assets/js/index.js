window.addEventListener("DOMContentLoaded", init);
function init() {
    /*Slider swiper header banner start*/
    let swiperBanner = new Swiper('.slider_container.swiper-container', {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
          clickable: true, 
      },
    });
    /*Slider swiper header banner end*/

    /*Slider swiper prod-slider start*/
    let swiperProd = new Swiper('.prod-slider-container.swiper-container', {
      spaceBetween: 16,
      slidesPerView: 5,
      slidesPerGroup: 1,
      // grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
           spaceBetween: 4,
           slidesPerView: 1,
         },
        300: {
           spaceBetween: 4,
           slidesPerView: 2.08,
         },
			   375: {
           spaceBetween: 4,
           slidesPerView: 2.08,
        },
         480: {
           slidesPerView: 2.6,
           spaceBetween: 4,
        },
         600: {
           slidesPerView: 2.8,
           spaceBetween: 4,
         },
         768: {
           slidesPerView: 4,
           spaceBetween: 10,
         },
        1024: {
          slidesPerView: 5,
			   },
			   1366: {
			   	slidesPerView: 5,
			   },
		  },
    });
  /*Slider swiper prod-slider end*/
  /*Slider swiper goods-card start*/
  let swiperGoods = new Swiper('.gallery-mob-container.swiper-container', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.goods-pagination',
        clickable: true, 
    },
  });
  /*Slider swiper goods-card end*/
  function menuAccordionMover() {
    let acc = document.querySelectorAll(".accordion-btn");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = acc[i].parentElement.previousElementSibling;
         if (panel.style.maxHeight&&panel.classList.contains('accordion')) {
           panel.style.maxHeight = null;
         } else {
           panel.style.maxHeight = panel.scrollHeight + "px";
         } 
       });
    }; 
  };
  function accEngine(pick) {
    let acc = document.querySelectorAll(pick);
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
           panel.style.maxHeight = null;
         } else {
           panel.style.maxHeight = panel.scrollHeight + "px";
         } 
       });
    }; 
  };
  function addRemoveClass(elem, add) {
    if ($(window).width() <= 900) {
      $(elem).addClass(add);
    } else {
      $(elem).removeClass(add);
    };
  };
  function addRemoveClass_767(elem, add) {
    if ($(window).width() >= 767) {
      $(elem).addClass(add);
    } else {
      $(elem).removeClass(add);
    };
  };
  
  function openPopUp(elem) {
    $(elem).addClass('active');  
    $('body').addClass('modal');
  };
  function closePopUp(elem) {
    $(elem).removeClass('active');  
    $('body').removeClass('modal');
  };
  jQuery.extend(jQuery.validator.messages, {
    required: "Поле является обязательным",
    remote: "Поле является обязательным",
    email: "Введите корректный электронный адрес",
  });
  $.validator.addMethod("EMAIL", function(value, element) {
      return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
  }, "Введите корректный электронный адрес");
  function validatorForm(elem) {
    $(elem).validate({
      rules: {
        psword: {
          required: true,
          minlength: 6,
        },
        email_n:"required EMAIL",
      },
      messages: {
        psword: {
          minlength: 'Минимальная длина пароля 6 символов'
        }
      },
    });
  };
  function addHover(elem) { 
    $(elem).addClass('in-hover'); 
  };
  function removeHover(elem) { 
    $(elem).removeClass('in-hover'); 
  };
  function goToCurrency(elem) {
    let numberToFormat = document.querySelectorAll(elem);
    for (let i = 0; i < numberToFormat.length; i++ ) {
       let toNumb = +numberToFormat[i].innerHTML;
       let formatNum = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(toNumb);
       numberToFormat[i].innerHTML = formatNum;
    }
  };
  
  function checkBoxEngine(elem) {
    let count = 0;
    $(elem).change(function () {
      if ($(this).prop('checked')) {
        count++;
      } else {
        count--;
      }
      chechBtn(this, count);
      $(this).parentsUntil('.content-filter').next('.btn-wrapper').children('.state-select').children('.numb-select').children('span').html(count);
    });
  };
  
  function chechBtn(elem, a) {
    if (a > 0) {
      $(elem).parentsUntil('.content-filter').next('.btn-wrapper').children('.filter-btn').removeClass('no-active');
      $(elem).parent('.filter-items').parentsUntil('.filter-items').prev().addClass('select');
    } else {
      $(elem).parentsUntil('.content-filter').next('.btn-wrapper').children('.filter-btn').addClass('no-active');
      $(elem).parent('.filter-items').parentsUntil('.filter-items').prev().removeClass('select');
    }
  }
  function resetSelect(elem, box) {
    $(elem).click(function (e) {
      e.preventDefault();
      $(box).prop('checked', false);
      $(elem).next('.numb-select').children('span').html(0);
      count = 0;
      chechBtn(box);
    });
  };
  function initRangeSlider() { 
    var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 100000,
    from = 0,
    to = 0;
    $range.ionRangeSlider({
    	  skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 100000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    function updateInputs (data) {
    	from = data.from;
        to = data.to;
        
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);	
    }
    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });
    
    $inputTo.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });
  };
  (function($){
        $(window).on("load",function(){
          $(".descktop-filter-container .content-filter .filter-item").mCustomScrollbar({
             theme:"my-theme"
          });
          $(".mobile-filter-container .content-filter .mob-check-item").mCustomScrollbar({
             theme:"my-theme"
          });
          $(".all-lang-item").mCustomScrollbar({
             theme:"my-theme"
          });
          
        });
  })(jQuery);
  function come(elem) {
    var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height(),
      elemTop = $(elem).offset().top,
      elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
   $('.features_items .search').click(function () {
    if ($(window).width() >= 900) {
      $('header .search-header-line').toggleClass('active');
      $(this).parent().toggleClass('active');
      $('body').toggleClass('modal');
      if ($('body>div').hasClass('overlay')) {
        $('.overlay').remove();
      } else {
        $('<div class="overlay"></div>').prependTo('body');
      }
    } else {
      $('.menu_mobile').addClass('active');
      $('body').addClass('modal');
      $('.search-wrapper .form > input').focus();
     };
     return false
   });
  $('.search-header-line svg.close').click(function () {
    $('header .search-header-line').removeClass('active');
    $('.features_items').removeClass('active');
    $('body').removeClass('modal');
    $('.overlay').remove();
  });
  $('.burger-menu').click(function () {
    $('.menu_mobile').addClass('active');  
    $('body').addClass('modal');
  });
  $('.menu_mobile .mobile-header-container .close').click(function () {
    $('.menu_mobile').removeClass('active');
    $('body').removeClass('modal');
  });
  $('.nav_wrapper .menu .menu_items').click(function () {
    $('.nav_wrapper .menu .menu_items').removeClass('active');
    $(this).addClass('active');
  });
  $('.mobile-menu-wrapper .menu .menu_items').click(function () {
    $('.mobile-menu-wrapper .menu .menu_items').removeClass('active');
    $(this).addClass('active');
  });
  $('.mob_sub_menu_items').click(function () {
    if ($('.mob_sub_menu_items').hasClass('active')) {
      $('.mob_sub_menu_items').removeClass('active');
      $(this).addClass('active');
    } else;
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    };
    
  });
  $('.promo_line svg').click(function () {
    $(this).parent().css('height', '0');
    $(this).parent().css('visibility', 'hidden');
  });
  addRemoveClass('.info-frame .info-content-wrapper>.title','accordion-btn');
  addRemoveClass('section.info .info-menu-wrapper', 'accordion');
  addRemoveClass_767('.gall-wrapp-main', 'load');
  $(window).resize(function () {
    addRemoveClass('.info-frame .info-content-wrapper>.title','accordion-btn');
    addRemoveClass('section.info .container .info-frame .info-menu-wrapper', 'accordion');
    menuAccordionMover();
    addRemoveClass_767('.gall-wrapp-main', 'load');
  });
  menuAccordionMover();
  accEngine('.acc-open');
  function sliceSentence(q, sentence) {
    let size = q,
      newsContent = document.querySelectorAll(sentence);
    for (let i = 0; i < newsContent.length; i++) {
      if (newsContent[i].innerHTML.length > size) {
         	newsContent[i].innerHTML = newsContent[i].innerHTML.slice(0, size) + ' ...';
      };
    };
  };    
    if ($(window).width() <= 357) {
      sliceSentence(34, '.discrption-goods-s > p');
      sliceSentence(33, '.discrption-goods > p'); 
    }
    else if ($(window).width() <= 480 && $(window).width() >= 357) {
        sliceSentence(38, '.discrption-goods-s > p');
        sliceSentence(33, '.discrption-goods > p');
    } else {
       sliceSentence(27, '.discrption-goods-s > p');
       sliceSentence(33, '.discrption-goods > p'); 
    };
  
  validatorForm("#sign-in");
  validatorForm("#reset-pass");
  $('.close-popup').click(function () {
    closePopUp('.popup.active');
  });
  $('.features_items .autorization').click(function (){
    openPopUp('#popup-sign-in');
  });
  $('#popup-sign-in .link_wrapper a').click(function (e) {
    e.preventDefault();
    closePopUp('.popup.active');
    openPopUp('#popup-reset-pass');
  });
  $('.lang-wrapper .select-lang').click(function () {
     $(this).toggleClass('active');
     $(this).children().last().toggleClass('active');
  })
  $('.menu_mobile .search-line').change(function () {
    if ($(this).val().length > 0) {
      $(this).addClass('enter');
      $('.menu_mobile .search').addClass('enter');
    } else {
      if ($('.menu_mobile .search').hasClass('enter')) {
        $('.menu_mobile .search').removeClass('enter');
        $(this).removeClass('enter');
      } else {
        return
      }
    }
  });
  $(".sub_menu_items > a").hover(function () {
    addHover(this.parentElement);
  }, function () {
    removeHover(this.parentElement);
  });
  $(".menu_items > a").hover(function () {
    addHover(this);
  }, function () {
    removeHover(this);
   });
  $(".features_items > a").hover(function () {
    addHover(this.parentElement);
  }, function () {
    removeHover(this.parentElement);
  });
  let heightHeader = $('header').height();
  $(window).click(function () {
    if ($('header').height() < heightHeader) {
      $('main').css('padding', $('header').height() + 'px');
    }
  });
  goToCurrency('.price');
  goToCurrency('.price_new');
  goToCurrency('.price_old');
  $('.descktop-filter-container .filter-header').click(function () {
    if (!$(this).hasClass('active')) {
      $('.descktop-filter-container .filter-header').removeClass('active');
      $('.descktop-filter-container .filter-header').next().removeClass('active');
      $('.lock-pointer').remove();
      if ($(this).hasClass('no-active')) {
        return false;
      } else {
        $(this).addClass('active');
        $(this).next().addClass('active');
        $("<div class='lock-pointer'></div>").appendTo("body");
      }
    } else {
      $('.lock-pointer').remove();
      $(this).removeClass('active');
      $(this).next().removeClass('active');
    }
  });
  $(document).click(function (e) {
    if (e.target.classList.contains('popup__wrapper')) {
      closePopUp('.popup.active');
    }
  });
  $(document).click(function (e) {
    if (e.target.classList.contains('lock-pointer')) {
      $('.filter-header').removeClass('active');
      $('.filter-header').next().removeClass('active');
      $('.lock-pointer').remove();
    } else if (e.target.classList.contains('overlay')) {
      $('header .search-header-line').removeClass('active');
      $('.features_items').removeClass('active');
      $('body').removeClass('modal');
      $('.overlay').remove();
    }
  });
  $('.more-less-filter').click(function () {
    $(this).toggleClass('active');
    $(this).children().toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).parent().addClass('open');
    } else {
      $(this).parent().removeClass('open');
    }
  });
  initRangeSlider();
  checkBoxEngine('.box-check.size');
  checkBoxEngine('.box-check.color');
  checkBoxEngine('.box-check.cat_f');
  checkBoxEngine('.box-check.brand');
  checkBoxEngine('.box-check.material');
  checkBoxEngine('.box-check.h');
  resetSelect('.content-filter.size .reser-select', '.box-check.size');
  resetSelect('.content-filter.color .reser-select', '.box-check.color');
  resetSelect('.content-filter.cat_f .reser-select', '.box-check.cat_f');
  resetSelect('.content-filter.brand .reser-select', '.box-check.brand');
  resetSelect('.content-filter.material .reser-select', '.box-check.material');
  resetSelect('.content-filter.h .reser-select', '.box-check.h');
  $('.mobile-filter-container .filter-header').click(function () {
    openPopUp($(this).next());
  });
  $('.modal-fiter .title-filter svg').click(function () {
    closePopUp('.modal-fiter');
  });
  $('.mob-filter-header').click(function () {
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
  });
  
  let count = 0;
   $('.mob-check-items .box-check').change(function () {
      if ($(this).prop('checked')) {
        count++;
      } else {
        count--;
      }
     $('.modal-reset span').html('(' + count + ')')
     if (count > 0) {
       $('.modal-reset').removeClass('no-active');
       $('.modal-submit').removeClass('no-active');
     } else {
       $('.modal-reset').addClass('no-active');
       $('.modal-submit').addClass('no-active');
     }
   });
  $('.mob-check-items .box-check:not(.color)').click(function () {
    if ($(this).prop('checked')) {

      $(this).parents('.mob-filter-items').children('.mob-filter-header').append('<span data-name='+ $(this).next().html()+'>(' + $(this).next().html() + ')</span>');
      } else {
      $(this).parents('.mob-filter-items').children('.mob-filter-header').find('span[data-name='+$(this).next().html()+']').remove();
      }
  });
  $('.modal-reset').click(function () {
    $('.mob-check-items .box-check').prop('checked', false);
    $('.mob-filter-header').find('span').remove();
    count = 0;
    $('.modal-reset span').html('(' + count + ')');
    $('.modal-reset').addClass('no-active');
    $('.modal-submit').addClass('no-active');

  });
  if ($('#btn-watch').length > 0) {
     $(document).scroll(function () {
      if (come('#btn-watch')) {
         $('.preview-header-goods').removeClass('active');
      } else {
         $('.preview-header-goods').addClass('active')
       }
     });
  };
  
  let mobGallSlider = document.querySelector('.gall-wrapp-main'),
    closeGallery = document.querySelector('.gall-close-btn');
  if (mobGallSlider) {
      document.addEventListener('click', function (e) {
       if (e.target.classList.contains('gall-wrapp-main')) {
          mobGallSlider.classList.remove('open');
          document.body.classList.remove('modal')
       } else { return };
    });
    closeGallery.addEventListener('click', function () {
      mobGallSlider.classList.remove('open');
      document.body.classList.remove('modal');
    });
    
    document.querySelector('#slide-1').addEventListener('click', function (e) {
      e.preventDefault();
      mobGallSlider.classList.add('open');
      document.body.classList.add('modal');
      swiperGoods.slideTo(1, 0);
      });
    document.querySelector('#slide-2').addEventListener('click', function (e) {
      e.preventDefault();
      mobGallSlider.classList.add('open');
      document.body.classList.add('modal');
      swiperGoods.slideTo(2, 0);
    });
    document.querySelector('#slide-3').addEventListener('click', function (e) {
      e.preventDefault();
      mobGallSlider.classList.add('open');
      document.body.classList.add('modal');
      swiperGoods.slideTo(3, 0);
    });
    document.querySelector('#slide-4').addEventListener('click', function (e) {
      e.preventDefault();
      mobGallSlider.classList.add('open');
      document.body.classList.add('modal');
      swiperGoods.slideTo(4, 0);
    });
    document.querySelector('#slide-5').addEventListener('click', function (e) {
      e.preventDefault();
      mobGallSlider.classList.add('open');
      document.body.classList.add('modal');
      swiperGoods.slideTo(5, 0);
    });  
  } else { return };
};


 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMzUwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xyXG5cclxuICAgIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgICAgIH0sXHJcblx0XHRcdCAgIDM3NToge1xyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdCAgIH0sXHJcblx0XHRcdCAgIDEzNjY6IHtcclxuXHRcdFx0ICAgXHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHQgICB9LFxyXG5cdFx0ICB9LFxyXG4gICAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXHJcbiAgZnVuY3Rpb24gbWVudUFjY29yZGlvbk1vdmVyKCkge1xyXG4gICAgbGV0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJ0blwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSBhY2NbaV0ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0JiZwYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbicpKSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICB9KTtcclxuICAgIH07IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWNjRW5naW5lKHBpY2spIHtcclxuICAgIGxldCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBpY2spO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICB9KTtcclxuICAgIH07IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3MoZWxlbSwgYWRkKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTAwKSB7XHJcbiAgICAgICQoZWxlbSkuYWRkQ2xhc3MoYWRkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBmdW5jdGlvbiBhZGRSZW1vdmVDbGFzc183NjcoZWxlbSwgYWRkKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNzY3KSB7XHJcbiAgICAgICQoZWxlbSkuYWRkQ2xhc3MoYWRkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiBvcGVuUG9wVXAoZWxlbSkge1xyXG4gICAgJChlbGVtKS5hZGRDbGFzcygnYWN0aXZlJyk7ICBcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGNsb3NlUG9wVXAoZWxlbSkge1xyXG4gICAgJChlbGVtKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7ICBcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICB9O1xyXG4gIGpRdWVyeS5leHRlbmQoalF1ZXJ5LnZhbGlkYXRvci5tZXNzYWdlcywge1xyXG4gICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIHJlbW90ZTogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxyXG4gICAgZW1haWw6IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIsXHJcbiAgfSk7XHJcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiRU1BSUxcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS1dK1xcLlthLXpBLVouXXsyLDV9JC9pLnRlc3QodmFsdWUpO1xyXG4gIH0sIFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIpO1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRvckZvcm0oZWxlbSkge1xyXG4gICAgJChlbGVtKS52YWxpZGF0ZSh7XHJcbiAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgcHN3b3JkOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG1pbmxlbmd0aDogNixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsX246XCJyZXF1aXJlZCBFTUFJTFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIHBzd29yZDoge1xyXG4gICAgICAgICAgbWlubGVuZ3RoOiAn0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBhZGRIb3ZlcihlbGVtKSB7IFxyXG4gICAgJChlbGVtKS5hZGRDbGFzcygnaW4taG92ZXInKTsgXHJcbiAgfTtcclxuICBmdW5jdGlvbiByZW1vdmVIb3ZlcihlbGVtKSB7IFxyXG4gICAgJChlbGVtKS5yZW1vdmVDbGFzcygnaW4taG92ZXInKTsgXHJcbiAgfTtcclxuICBmdW5jdGlvbiBnb1RvQ3VycmVuY3koZWxlbSkge1xyXG4gICAgbGV0IG51bWJlclRvRm9ybWF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyVG9Gb3JtYXQubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICBsZXQgdG9OdW1iID0gK251bWJlclRvRm9ybWF0W2ldLmlubmVySFRNTDtcclxuICAgICAgIGxldCBmb3JtYXROdW0gPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJywgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdSVUInLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkuZm9ybWF0KHRvTnVtYik7XHJcbiAgICAgICBudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUwgPSBmb3JtYXROdW07XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiBjaGVja0JveEVuZ2luZShlbGVtKSB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgJChlbGVtKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgIH1cclxuICAgICAgY2hlY2hCdG4odGhpcywgY291bnQpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5zdGF0ZS1zZWxlY3QnKS5jaGlsZHJlbignLm51bWItc2VsZWN0JykuY2hpbGRyZW4oJ3NwYW4nKS5odG1sKGNvdW50KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2hlY2hCdG4oZWxlbSwgYSkge1xyXG4gICAgaWYgKGEgPiAwKSB7XHJcbiAgICAgICQoZWxlbSkucGFyZW50c1VudGlsKCcuY29udGVudC1maWx0ZXInKS5uZXh0KCcuYnRuLXdyYXBwZXInKS5jaGlsZHJlbignLmZpbHRlci1idG4nKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICQoZWxlbSkucGFyZW50KCcuZmlsdGVyLWl0ZW1zJykucGFyZW50c1VudGlsKCcuZmlsdGVyLWl0ZW1zJykucHJldigpLmFkZENsYXNzKCdzZWxlY3QnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoZWxlbSkucGFyZW50c1VudGlsKCcuY29udGVudC1maWx0ZXInKS5uZXh0KCcuYnRuLXdyYXBwZXInKS5jaGlsZHJlbignLmZpbHRlci1idG4nKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICQoZWxlbSkucGFyZW50KCcuZmlsdGVyLWl0ZW1zJykucGFyZW50c1VudGlsKCcuZmlsdGVyLWl0ZW1zJykucHJldigpLnJlbW92ZUNsYXNzKCdzZWxlY3QnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcmVzZXRTZWxlY3QoZWxlbSwgYm94KSB7XHJcbiAgICAkKGVsZW0pLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJChib3gpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICQoZWxlbSkubmV4dCgnLm51bWItc2VsZWN0JykuY2hpbGRyZW4oJ3NwYW4nKS5odG1sKDApO1xyXG4gICAgICBjb3VudCA9IDA7XHJcbiAgICAgIGNoZWNoQnRuKGJveCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGluaXRSYW5nZVNsaWRlcigpIHsgXHJcbiAgICB2YXIgJHJhbmdlID0gJChcIi5qcy1yYW5nZS1zbGlkZXJcIiksXHJcbiAgICAkaW5wdXRGcm9tID0gJChcIi5qcy1pbnB1dC1mcm9tXCIpLFxyXG4gICAgJGlucHV0VG8gPSAkKFwiLmpzLWlucHV0LXRvXCIpLFxyXG4gICAgaW5zdGFuY2UsXHJcbiAgICBtaW4gPSAwLFxyXG4gICAgbWF4ID0gMTAwMDAwLFxyXG4gICAgZnJvbSA9IDAsXHJcbiAgICB0byA9IDA7XHJcbiAgICAkcmFuZ2UuaW9uUmFuZ2VTbGlkZXIoe1xyXG4gICAgXHQgIHNraW46IFwicm91bmRcIixcclxuICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxyXG4gICAgICAgIG1pbjogbWluLFxyXG4gICAgICAgIG1heDogbWF4LFxyXG4gICAgICAgIGZyb206IDAsXHJcbiAgICAgICAgdG86IDEwMDAwMCxcclxuICAgICAgICBvblN0YXJ0OiB1cGRhdGVJbnB1dHMsXHJcbiAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUlucHV0c1xyXG4gICAgfSk7XHJcbiAgICBpbnN0YW5jZSA9ICRyYW5nZS5kYXRhKFwiaW9uUmFuZ2VTbGlkZXJcIik7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVJbnB1dHMgKGRhdGEpIHtcclxuICAgIFx0ZnJvbSA9IGRhdGEuZnJvbTtcclxuICAgICAgICB0byA9IGRhdGEudG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgJGlucHV0RnJvbS5wcm9wKFwidmFsdWVcIiwgZnJvbSk7XHJcbiAgICAgICAgJGlucHV0VG8ucHJvcChcInZhbHVlXCIsIHRvKTtcdFxyXG4gICAgfVxyXG4gICAgJGlucHV0RnJvbS5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS5wcm9wKFwidmFsdWVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdmFsaWRhdGVcclxuICAgICAgICBpZiAodmFsIDwgbWluKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IG1pbjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IHRvKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnN0YW5jZS51cGRhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiB2YWxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkaW5wdXRUby5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS5wcm9wKFwidmFsdWVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdmFsaWRhdGVcclxuICAgICAgICBpZiAodmFsIDwgZnJvbSkge1xyXG4gICAgICAgICAgICB2YWwgPSBmcm9tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsID4gbWF4KSB7XHJcbiAgICAgICAgICAgIHZhbCA9IG1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcclxuICAgICAgICAgICAgdG86IHZhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICAoZnVuY3Rpb24oJCl7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmNvbnRlbnQtZmlsdGVyIC5maWx0ZXItaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLm1vYmlsZS1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAubW9iLWNoZWNrLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5hbGwtbGFuZy1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gIH0pKGpRdWVyeSk7XHJcbiAgZnVuY3Rpb24gY29tZShlbGVtKSB7XHJcbiAgICB2YXIgZG9jVmlld1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyAkKHdpbmRvdykuaGVpZ2h0KCksXHJcbiAgICAgIGVsZW1Ub3AgPSAkKGVsZW0pLm9mZnNldCgpLnRvcCxcclxuICAgICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyAkKGVsZW0pLmhlaWdodCgpO1xyXG5cclxuICAgIHJldHVybiAoKGVsZW1Cb3R0b20gPD0gZG9jVmlld0JvdHRvbSkgJiYgKGVsZW1Ub3AgPj0gZG9jVmlld1RvcCkpO1xyXG4gIH1cclxuICAgJCgnLmZlYXR1cmVzX2l0ZW1zIC5zZWFyY2gnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gOTAwKSB7XHJcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgICBpZiAoJCgnYm9keT5kaXYnKS5oYXNDbGFzcygnb3ZlcmxheScpKSB7XHJcbiAgICAgICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PicpLnByZXBlbmRUbygnYm9keScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICAgICAgJCgnLnNlYXJjaC13cmFwcGVyIC5mb3JtID4gaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgIH07XHJcbiAgICAgcmV0dXJuIGZhbHNlXHJcbiAgIH0pO1xyXG4gICQoJy5zZWFyY2gtaGVhZGVyLWxpbmUgc3ZnLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnaGVhZGVyIC5zZWFyY2gtaGVhZGVyLWxpbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcuZmVhdHVyZXNfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAkKCcub3ZlcmxheScpLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gICQoJy5idXJnZXItbWVudScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tZW51X21vYmlsZScpLmFkZENsYXNzKCdhY3RpdmUnKTsgIFxyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbCcpO1xyXG4gIH0pO1xyXG4gICQoJy5tZW51X21vYmlsZSAubW9iaWxlLWhlYWRlci1jb250YWluZXIgLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1lbnVfbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gIH0pO1xyXG4gICQoJy5uYXZfd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5uYXZfd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1vYmlsZS1tZW51LXdyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2U7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH07XHJcbiAgICBcclxuICB9KTtcclxuICAkKCcucHJvbW9fbGluZSBzdmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnaGVpZ2h0JywgJzAnKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gIH0pO1xyXG4gIGFkZFJlbW92ZUNsYXNzKCcuaW5mby1mcmFtZSAuaW5mby1jb250ZW50LXdyYXBwZXI+LnRpdGxlJywnYWNjb3JkaW9uLWJ0bicpO1xyXG4gIGFkZFJlbW92ZUNsYXNzKCdzZWN0aW9uLmluZm8gLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gIGFkZFJlbW92ZUNsYXNzXzc2NygnLmdhbGwtd3JhcHAtbWFpbicsICdsb2FkJyk7XHJcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsJ2FjY29yZGlvbi1idG4nKTtcclxuICAgIGFkZFJlbW92ZUNsYXNzKCdzZWN0aW9uLmluZm8gLmNvbnRhaW5lciAuaW5mby1mcmFtZSAuaW5mby1tZW51LXdyYXBwZXInLCAnYWNjb3JkaW9uJyk7XHJcbiAgICBtZW51QWNjb3JkaW9uTW92ZXIoKTtcclxuICAgIGFkZFJlbW92ZUNsYXNzXzc2NygnLmdhbGwtd3JhcHAtbWFpbicsICdsb2FkJyk7XHJcbiAgfSk7XHJcbiAgbWVudUFjY29yZGlvbk1vdmVyKCk7XHJcbiAgYWNjRW5naW5lKCcuYWNjLW9wZW4nKTtcclxuICBmdW5jdGlvbiBzbGljZVNlbnRlbmNlKHEsIHNlbnRlbmNlKSB7XHJcbiAgICBsZXQgc2l6ZSA9IHEsXHJcbiAgICAgIG5ld3NDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZW50ZW5jZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld3NDb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChuZXdzQ29udGVudFtpXS5pbm5lckhUTUwubGVuZ3RoID4gc2l6ZSkge1xyXG4gICAgICAgICBcdG5ld3NDb250ZW50W2ldLmlubmVySFRNTCA9IG5ld3NDb250ZW50W2ldLmlubmVySFRNTC5zbGljZSgwLCBzaXplKSArICcgLi4uJztcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTsgICAgXHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMzU3KSB7XHJcbiAgICAgIHNsaWNlU2VudGVuY2UoMzQsICcuZGlzY3JwdGlvbi1nb29kcy1zID4gcCcpO1xyXG4gICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7IFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNDgwICYmICQod2luZG93KS53aWR0aCgpID49IDM1Nykge1xyXG4gICAgICAgIHNsaWNlU2VudGVuY2UoMzgsICcuZGlzY3JwdGlvbi1nb29kcy1zID4gcCcpO1xyXG4gICAgICAgIHNsaWNlU2VudGVuY2UoMzMsICcuZGlzY3JwdGlvbi1nb29kcyA+IHAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICBzbGljZVNlbnRlbmNlKDI3LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgIHNsaWNlU2VudGVuY2UoMzMsICcuZGlzY3JwdGlvbi1nb29kcyA+IHAnKTsgXHJcbiAgICB9O1xyXG4gIFxyXG4gIHZhbGlkYXRvckZvcm0oXCIjc2lnbi1pblwiKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI3Jlc2V0LXBhc3NcIik7XHJcbiAgJCgnLmNsb3NlLXBvcHVwJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xyXG4gIH0pO1xyXG4gICQoJy5mZWF0dXJlc19pdGVtcyAuYXV0b3JpemF0aW9uJykuY2xpY2soZnVuY3Rpb24gKCl7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1zaWduLWluJyk7XHJcbiAgfSk7XHJcbiAgJCgnI3BvcHVwLXNpZ24taW4gLmxpbmtfd3JhcHBlciBhJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXJlc2V0LXBhc3MnKTtcclxuICB9KTtcclxuICAkKCcubGFuZy13cmFwcGVyIC5zZWxlY3QtbGFuZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAkKHRoaXMpLmNoaWxkcmVuKCkubGFzdCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KVxyXG4gICQoJy5tZW51X21vYmlsZSAuc2VhcmNoLWxpbmUnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdlbnRlcicpO1xyXG4gICAgICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmFkZENsYXNzKCdlbnRlcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCQoJy5tZW51X21vYmlsZSAuc2VhcmNoJykuaGFzQ2xhc3MoJ2VudGVyJykpIHtcclxuICAgICAgICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2VudGVyJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICAkKFwiLnN1Yl9tZW51X2l0ZW1zID4gYVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICBhZGRIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlbW92ZUhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSk7XHJcbiAgJChcIi5tZW51X2l0ZW1zID4gYVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICBhZGRIb3Zlcih0aGlzKTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzKTtcclxuICAgfSk7XHJcbiAgJChcIi5mZWF0dXJlc19pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIGxldCBoZWlnaHRIZWFkZXIgPSAkKCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAkKHdpbmRvdykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoJ2hlYWRlcicpLmhlaWdodCgpIDwgaGVpZ2h0SGVhZGVyKSB7XHJcbiAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmcnLCAkKCdoZWFkZXInKS5oZWlnaHQoKSArICdweCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlJyk7XHJcbiAgZ29Ub0N1cnJlbmN5KCcucHJpY2VfbmV3Jyk7XHJcbiAgZ29Ub0N1cnJlbmN5KCcucHJpY2Vfb2xkJyk7XHJcbiAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5sb2NrLXBvaW50ZXInKS5yZW1vdmUoKTtcclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ25vLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKFwiPGRpdiBjbGFzcz0nbG9jay1wb2ludGVyJz48L2Rpdj5cIikuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX193cmFwcGVyJykpIHtcclxuICAgICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrLXBvaW50ZXInKSkge1xyXG4gICAgICAkKCcuZmlsdGVyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKSB7XHJcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuZmVhdHVyZXNfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICAgICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcubW9yZS1sZXNzLWZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbigpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaW5pdFJhbmdlU2xpZGVyKCk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suc2l6ZScpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmNvbG9yJyk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suY2F0X2YnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5icmFuZCcpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLm1hdGVyaWFsJyk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suaCcpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuc2l6ZSAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suc2l6ZScpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuY29sb3IgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLmNvbG9yJyk7XHJcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5jYXRfZiAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suY2F0X2YnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLmJyYW5kIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5icmFuZCcpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIubWF0ZXJpYWwgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLm1hdGVyaWFsJyk7XHJcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5oIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5oJyk7XHJcbiAgJCgnLm1vYmlsZS1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgb3BlblBvcFVwKCQodGhpcykubmV4dCgpKTtcclxuICB9KTtcclxuICAkKCcubW9kYWwtZml0ZXIgLnRpdGxlLWZpbHRlciBzdmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBjbG9zZVBvcFVwKCcubW9kYWwtZml0ZXInKTtcclxuICB9KTtcclxuICAkKCcubW9iLWZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGxldCBjb3VudCA9IDA7XHJcbiAgICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjaycpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgfVxyXG4gICAgICQoJy5tb2RhbC1yZXNldCBzcGFuJykuaHRtbCgnKCcgKyBjb3VudCArICcpJylcclxuICAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgICAkKCcubW9kYWwtcmVzZXQnKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICAkKCcubW9kYWwtc3VibWl0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICAkKCcubW9kYWwtc3VibWl0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgIH1cclxuICAgfSk7XHJcbiAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrOm5vdCguY29sb3IpJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcblxyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5tb2ItZmlsdGVyLWl0ZW1zJykuY2hpbGRyZW4oJy5tb2ItZmlsdGVyLWhlYWRlcicpLmFwcGVuZCgnPHNwYW4gZGF0YS1uYW1lPScrICQodGhpcykubmV4dCgpLmh0bWwoKSsnPignICsgJCh0aGlzKS5uZXh0KCkuaHRtbCgpICsgJyk8L3NwYW4+Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnLm1vYi1maWx0ZXItaXRlbXMnKS5jaGlsZHJlbignLm1vYi1maWx0ZXItaGVhZGVyJykuZmluZCgnc3BhbltkYXRhLW5hbWU9JyskKHRoaXMpLm5leHQoKS5odG1sKCkrJ10nKS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG4gICQoJy5tb2RhbC1yZXNldCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjaycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAkKCcubW9iLWZpbHRlci1oZWFkZXInKS5maW5kKCdzcGFuJykucmVtb3ZlKCk7XHJcbiAgICBjb3VudCA9IDA7XHJcbiAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpO1xyXG4gICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcbiAgaWYgKCQoJyNidG4td2F0Y2gnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGNvbWUoJyNidG4td2F0Y2gnKSkge1xyXG4gICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICQoJy5wcmV2aWV3LWhlYWRlci1nb29kcycpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgfVxyXG4gICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgbGV0IG1vYkdhbGxTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbC13cmFwcC1tYWluJyksXHJcbiAgICBjbG9zZUdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbC1jbG9zZS1idG4nKTtcclxuICBpZiAobW9iR2FsbFNsaWRlcikge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWxsLXdyYXBwLW1haW4nKSkge1xyXG4gICAgICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsJylcclxuICAgICAgIH0gZWxzZSB7IHJldHVybiB9O1xyXG4gICAgfSk7XHJcbiAgICBjbG9zZUdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygxLCAwKTtcclxuICAgICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG4gICAgICBzd2lwZXJHb29kcy5zbGlkZVRvKDIsIDApO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtMycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG4gICAgICBzd2lwZXJHb29kcy5zbGlkZVRvKDMsIDApO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtNCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG4gICAgICBzd2lwZXJHb29kcy5zbGlkZVRvKDQsIDApO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtNScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG4gICAgICBzd2lwZXJHb29kcy5zbGlkZVRvKDUsIDApO1xyXG4gICAgfSk7ICBcclxuICB9IGVsc2UgeyByZXR1cm4gfTtcclxufTtcclxuXHJcblxyXG4gIl0sImZpbGUiOiJpbmRleC5qcyJ9
