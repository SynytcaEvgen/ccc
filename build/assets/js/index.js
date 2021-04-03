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


 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8qU2xpZGVyIHN3aXBlciBoZWFkZXIgYmFubmVyIHN0YXJ0Ki9cbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xuXG4gICAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIHN0YXJ0Ki9cbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAvLyBncmFiQ3Vyc29yOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICB9LFxuICAgICAgICAzMDA6IHtcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxuICAgICAgICAgfSxcblx0XHRcdCAgIDM3NToge1xuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXG4gICAgICAgIH0sXG4gICAgICAgICA0ODA6IHtcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi42LFxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgIH0sXG4gICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgICB9LFxuICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICB9LFxuICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcblx0XHRcdCAgIH0sXG5cdFx0XHQgICAxMzY2OiB7XG5cdFx0XHQgICBcdHNsaWRlc1BlclZpZXc6IDUsXG5cdFx0XHQgICB9LFxuXHRcdCAgfSxcbiAgICB9KTtcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIHN0YXJ0Ki9cbiAgbGV0IHN3aXBlckdvb2RzID0gbmV3IFN3aXBlcignLmdhbGxlcnktbW9iLWNvbnRhaW5lci5zd2lwZXItY29udGFpbmVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsIFxuICAgIH0sXG4gIH0pO1xuICAvKlNsaWRlciBzd2lwZXIgZ29vZHMtY2FyZCBlbmQqL1xuICBmdW5jdGlvbiBtZW51QWNjb3JkaW9uTW92ZXIoKSB7XG4gICAgbGV0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJ0blwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xuICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgbGV0IHBhbmVsID0gYWNjW2ldLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQmJnBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uJykpIHtcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgIH0gXG4gICAgICAgfSk7XG4gICAgfTsgXG4gIH07XG4gIGZ1bmN0aW9uIGFjY0VuZ2luZShwaWNrKSB7XG4gICAgbGV0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGljayk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgfSBcbiAgICAgICB9KTtcbiAgICB9OyBcbiAgfTtcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3MoZWxlbSwgYWRkKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDkwMCkge1xuICAgICAgJChlbGVtKS5hZGRDbGFzcyhhZGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3NfNzY3KGVsZW0sIGFkZCkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA3NjcpIHtcbiAgICAgICQoZWxlbSkuYWRkQ2xhc3MoYWRkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlbGVtKS5yZW1vdmVDbGFzcyhhZGQpO1xuICAgIH07XG4gIH07XG4gIFxuICBmdW5jdGlvbiBvcGVuUG9wVXAoZWxlbSkge1xuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbCcpO1xuICB9O1xuICBmdW5jdGlvbiBjbG9zZVBvcFVwKGVsZW0pIHtcbiAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgIFxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcbiAgfTtcbiAgalF1ZXJ5LmV4dGVuZChqUXVlcnkudmFsaWRhdG9yLm1lc3NhZ2VzLCB7XG4gICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcbiAgICByZW1vdGU6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcbiAgICBlbWFpbDogXCLQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDRjdC70LXQutGC0YDQvtC90L3Ri9C5INCw0LTRgNC10YFcIixcbiAgfSk7XG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIkVNQUlMXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05LV0rXFwuW2EtekEtWi5dezIsNX0kL2kudGVzdCh2YWx1ZSk7XG4gIH0sIFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIpO1xuICBmdW5jdGlvbiB2YWxpZGF0b3JGb3JtKGVsZW0pIHtcbiAgICAkKGVsZW0pLnZhbGlkYXRlKHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgIHBzd29yZDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIG1pbmxlbmd0aDogNixcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxfbjpcInJlcXVpcmVkIEVNQUlMXCIsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgcHN3b3JkOiB7XG4gICAgICAgICAgbWlubGVuZ3RoOiAn0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyA2INGB0LjQvNCy0L7Qu9C+0LInXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIGFkZEhvdmVyKGVsZW0pIHsgXG4gICAgJChlbGVtKS5hZGRDbGFzcygnaW4taG92ZXInKTsgXG4gIH07XG4gIGZ1bmN0aW9uIHJlbW92ZUhvdmVyKGVsZW0pIHsgXG4gICAgJChlbGVtKS5yZW1vdmVDbGFzcygnaW4taG92ZXInKTsgXG4gIH07XG4gIGZ1bmN0aW9uIGdvVG9DdXJyZW5jeShlbGVtKSB7XG4gICAgbGV0IG51bWJlclRvRm9ybWF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclRvRm9ybWF0Lmxlbmd0aDsgaSsrICkge1xuICAgICAgIGxldCB0b051bWIgPSArbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MO1xuICAgICAgIGxldCBmb3JtYXROdW0gPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJywgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdSVUInLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkuZm9ybWF0KHRvTnVtYik7XG4gICAgICAgbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MID0gZm9ybWF0TnVtO1xuICAgIH1cbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGNoZWNrQm94RW5naW5lKGVsZW0pIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQtLTtcbiAgICAgIH1cbiAgICAgIGNoZWNoQnRuKHRoaXMsIGNvdW50KTtcbiAgICAgICQodGhpcykucGFyZW50c1VudGlsKCcuY29udGVudC1maWx0ZXInKS5uZXh0KCcuYnRuLXdyYXBwZXInKS5jaGlsZHJlbignLnN0YXRlLXNlbGVjdCcpLmNoaWxkcmVuKCcubnVtYi1zZWxlY3QnKS5jaGlsZHJlbignc3BhbicpLmh0bWwoY291bnQpO1xuICAgIH0pO1xuICB9O1xuICBcbiAgZnVuY3Rpb24gY2hlY2hCdG4oZWxlbSwgYSkge1xuICAgIGlmIChhID4gMCkge1xuICAgICAgJChlbGVtKS5wYXJlbnRzVW50aWwoJy5jb250ZW50LWZpbHRlcicpLm5leHQoJy5idG4td3JhcHBlcicpLmNoaWxkcmVuKCcuZmlsdGVyLWJ0bicpLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcbiAgICAgICQoZWxlbSkucGFyZW50KCcuZmlsdGVyLWl0ZW1zJykucGFyZW50c1VudGlsKCcuZmlsdGVyLWl0ZW1zJykucHJldigpLmFkZENsYXNzKCdzZWxlY3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlbGVtKS5wYXJlbnRzVW50aWwoJy5jb250ZW50LWZpbHRlcicpLm5leHQoJy5idG4td3JhcHBlcicpLmNoaWxkcmVuKCcuZmlsdGVyLWJ0bicpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcbiAgICAgICQoZWxlbSkucGFyZW50KCcuZmlsdGVyLWl0ZW1zJykucGFyZW50c1VudGlsKCcuZmlsdGVyLWl0ZW1zJykucHJldigpLnJlbW92ZUNsYXNzKCdzZWxlY3QnKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRTZWxlY3QoZWxlbSwgYm94KSB7XG4gICAgJChlbGVtKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJChib3gpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAkKGVsZW0pLm5leHQoJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgwKTtcbiAgICAgIGNvdW50ID0gMDtcbiAgICAgIGNoZWNoQnRuKGJveCk7XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIGluaXRSYW5nZVNsaWRlcigpIHsgXG4gICAgdmFyICRyYW5nZSA9ICQoXCIuanMtcmFuZ2Utc2xpZGVyXCIpLFxuICAgICRpbnB1dEZyb20gPSAkKFwiLmpzLWlucHV0LWZyb21cIiksXG4gICAgJGlucHV0VG8gPSAkKFwiLmpzLWlucHV0LXRvXCIpLFxuICAgIGluc3RhbmNlLFxuICAgIG1pbiA9IDAsXG4gICAgbWF4ID0gMTAwMDAwLFxuICAgIGZyb20gPSAwLFxuICAgIHRvID0gMDtcbiAgICAkcmFuZ2UuaW9uUmFuZ2VTbGlkZXIoe1xuICAgIFx0ICBza2luOiBcInJvdW5kXCIsXG4gICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgIG1pbjogbWluLFxuICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgZnJvbTogMCxcbiAgICAgICAgdG86IDEwMDAwMCxcbiAgICAgICAgb25TdGFydDogdXBkYXRlSW5wdXRzLFxuICAgICAgICBvbkNoYW5nZTogdXBkYXRlSW5wdXRzXG4gICAgfSk7XG4gICAgaW5zdGFuY2UgPSAkcmFuZ2UuZGF0YShcImlvblJhbmdlU2xpZGVyXCIpO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUlucHV0cyAoZGF0YSkge1xuICAgIFx0ZnJvbSA9IGRhdGEuZnJvbTtcbiAgICAgICAgdG8gPSBkYXRhLnRvO1xuICAgICAgICBcbiAgICAgICAgJGlucHV0RnJvbS5wcm9wKFwidmFsdWVcIiwgZnJvbSk7XG4gICAgICAgICRpbnB1dFRvLnByb3AoXCJ2YWx1ZVwiLCB0byk7XHRcbiAgICB9XG4gICAgJGlucHV0RnJvbS5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgaWYgKHZhbCA8IG1pbikge1xuICAgICAgICAgICAgdmFsID0gbWluO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IHRvKSB7XG4gICAgICAgICAgICB2YWwgPSB0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcbiAgICAgICAgICAgIGZyb206IHZhbFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICAkaW5wdXRUby5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgaWYgKHZhbCA8IGZyb20pIHtcbiAgICAgICAgICAgIHZhbCA9IGZyb207XG4gICAgICAgIH0gZWxzZSBpZiAodmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWwgPSBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSh7XG4gICAgICAgICAgICB0bzogdmFsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICAoZnVuY3Rpb24oJCl7XG4gICAgICAgICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xuICAgICAgICAgICQoXCIuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLmZpbHRlci1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoXCIubW9iaWxlLWZpbHRlci1jb250YWluZXIgLmNvbnRlbnQtZmlsdGVyIC5tb2ItY2hlY2staXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKFwiLmFsbC1sYW5nLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgIH0pO1xuICB9KShqUXVlcnkpO1xuICBmdW5jdGlvbiBjb21lKGVsZW0pIHtcbiAgICB2YXIgZG9jVmlld1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgZWxlbVRvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wLFxuICAgICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyAkKGVsZW0pLmhlaWdodCgpO1xuXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBkb2NWaWV3VG9wKSk7XG4gIH1cbiAgICQoJy5mZWF0dXJlc19pdGVtcyAuc2VhcmNoJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA5MDApIHtcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vZGFsJyk7XG4gICAgICBpZiAoJCgnYm9keT5kaXYnKS5oYXNDbGFzcygnb3ZlcmxheScpKSB7XG4gICAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PicpLnByZXBlbmRUbygnYm9keScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XG4gICAgICAkKCcuc2VhcmNoLXdyYXBwZXIgLmZvcm0gPiBpbnB1dCcpLmZvY3VzKCk7XG4gICAgIH07XG4gICAgIHJldHVybiBmYWxzZVxuICAgfSk7XG4gICQoJy5zZWFyY2gtaGVhZGVyLWxpbmUgc3ZnLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5mZWF0dXJlc19pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XG4gICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcbiAgfSk7XG4gICQoJy5idXJnZXItbWVudScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7ICBcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XG4gIH0pO1xuICAkKCcubWVudV9tb2JpbGUgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIC5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubWVudV9tb2JpbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xuICB9KTtcbiAgJCgnLm5hdl93cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5uYXZfd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG4gICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbiAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZTtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9O1xuICAgIFxuICB9KTtcbiAgJCgnLnByb21vX2xpbmUgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykucGFyZW50KCkuY3NzKCdoZWlnaHQnLCAnMCcpO1xuICAgICQodGhpcykucGFyZW50KCkuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICB9KTtcbiAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XG4gIGFkZFJlbW92ZUNsYXNzKCdzZWN0aW9uLmluZm8gLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xuICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsJ2FjY29yZGlvbi1idG4nKTtcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xuICAgIG1lbnVBY2NvcmRpb25Nb3ZlcigpO1xuICAgIGFkZFJlbW92ZUNsYXNzXzc2NygnLmdhbGwtd3JhcHAtbWFpbicsICdsb2FkJyk7XG4gIH0pO1xuICBtZW51QWNjb3JkaW9uTW92ZXIoKTtcbiAgYWNjRW5naW5lKCcuYWNjLW9wZW4nKTtcbiAgZnVuY3Rpb24gc2xpY2VTZW50ZW5jZShxLCBzZW50ZW5jZSkge1xuICAgIGxldCBzaXplID0gcSxcbiAgICAgIG5ld3NDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZW50ZW5jZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG5ld3NDb250ZW50W2ldLmlubmVySFRNTC5sZW5ndGggPiBzaXplKSB7XG4gICAgICAgICBcdG5ld3NDb250ZW50W2ldLmlubmVySFRNTCA9IG5ld3NDb250ZW50W2ldLmlubmVySFRNTC5zbGljZSgwLCBzaXplKSArICcgLi4uJztcbiAgICAgIH07XG4gICAgfTtcbiAgfTsgICAgXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDM1Nykge1xuICAgICAgc2xpY2VTZW50ZW5jZSgzNCwgJy5kaXNjcnB0aW9uLWdvb2RzLXMgPiBwJyk7XG4gICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7IFxuICAgIH1cbiAgICBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA0ODAgJiYgJCh3aW5kb3cpLndpZHRoKCkgPj0gMzU3KSB7XG4gICAgICAgIHNsaWNlU2VudGVuY2UoMzgsICcuZGlzY3JwdGlvbi1nb29kcy1zID4gcCcpO1xuICAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICBzbGljZVNlbnRlbmNlKDI3LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcbiAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7IFxuICAgIH07XG4gIFxuICB2YWxpZGF0b3JGb3JtKFwiI3NpZ24taW5cIik7XG4gIHZhbGlkYXRvckZvcm0oXCIjcmVzZXQtcGFzc1wiKTtcbiAgJCgnLmNsb3NlLXBvcHVwJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcbiAgfSk7XG4gICQoJy5mZWF0dXJlc19pdGVtcyAuYXV0b3JpemF0aW9uJykuY2xpY2soZnVuY3Rpb24gKCl7XG4gICAgb3BlblBvcFVwKCcjcG9wdXAtc2lnbi1pbicpO1xuICB9KTtcbiAgJCgnI3BvcHVwLXNpZ24taW4gLmxpbmtfd3JhcHBlciBhJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXJlc2V0LXBhc3MnKTtcbiAgfSk7XG4gICQoJy5sYW5nLXdyYXBwZXIgLnNlbGVjdC1sYW5nJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmxhc3QoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pXG4gICQoJy5tZW51X21vYmlsZSAuc2VhcmNoLWxpbmUnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2VudGVyJyk7XG4gICAgICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmFkZENsYXNzKCdlbnRlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5oYXNDbGFzcygnZW50ZXInKSkge1xuICAgICAgICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgJChcIi5zdWJfbWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgIGFkZEhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xuICB9KTtcbiAgJChcIi5tZW51X2l0ZW1zID4gYVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgYWRkSG92ZXIodGhpcyk7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVIb3Zlcih0aGlzKTtcbiAgIH0pO1xuICAkKFwiLmZlYXR1cmVzX2l0ZW1zID4gYVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XG4gIH0pO1xuICBsZXQgaGVpZ2h0SGVhZGVyID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XG4gICQod2luZG93KS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQoJ2hlYWRlcicpLmhlaWdodCgpIDwgaGVpZ2h0SGVhZGVyKSB7XG4gICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nJywgJCgnaGVhZGVyJykuaGVpZ2h0KCkgKyAncHgnKTtcbiAgICB9XG4gIH0pO1xuICBnb1RvQ3VycmVuY3koJy5wcmljZScpO1xuICBnb1RvQ3VycmVuY3koJy5wcmljZV9uZXcnKTtcbiAgZ29Ub0N1cnJlbmN5KCcucHJpY2Vfb2xkJyk7XG4gICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ25vLWFjdGl2ZScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoXCI8ZGl2IGNsYXNzPSdsb2NrLXBvaW50ZXInPjwvZGl2PlwiKS5hcHBlbmRUbyhcImJvZHlcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5sb2NrLXBvaW50ZXInKS5yZW1vdmUoKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX3dyYXBwZXInKSkge1xuICAgICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbG9jay1wb2ludGVyJykpIHtcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5JykpIHtcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xuICAgICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuICAkKCcubW9yZS1sZXNzLWZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgfVxuICB9KTtcbiAgaW5pdFJhbmdlU2xpZGVyKCk7XG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLnNpemUnKTtcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suY29sb3InKTtcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suY2F0X2YnKTtcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suYnJhbmQnKTtcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2subWF0ZXJpYWwnKTtcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suaCcpO1xuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLnNpemUgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLnNpemUnKTtcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5jb2xvciAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suY29sb3InKTtcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5jYXRfZiAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suY2F0X2YnKTtcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5icmFuZCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suYnJhbmQnKTtcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5tYXRlcmlhbCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2subWF0ZXJpYWwnKTtcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5oIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5oJyk7XG4gICQoJy5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBvcGVuUG9wVXAoJCh0aGlzKS5uZXh0KCkpO1xuICB9KTtcbiAgJCgnLm1vZGFsLWZpdGVyIC50aXRsZS1maWx0ZXIgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlUG9wVXAoJy5tb2RhbC1maXRlcicpO1xuICB9KTtcbiAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbiAgXG4gIGxldCBjb3VudCA9IDA7XG4gICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudC0tO1xuICAgICAgfVxuICAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpXG4gICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAkKCcubW9kYWwtcmVzZXQnKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcbiAgICAgfVxuICAgfSk7XG4gICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjazpub3QoLmNvbG9yKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcblxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5hcHBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nKyAkKHRoaXMpLm5leHQoKS5odG1sKCkrJz4oJyArICQodGhpcykubmV4dCgpLmh0bWwoKSArICcpPC9zcGFuPicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykucGFyZW50cygnLm1vYi1maWx0ZXItaXRlbXMnKS5jaGlsZHJlbignLm1vYi1maWx0ZXItaGVhZGVyJykuZmluZCgnc3BhbltkYXRhLW5hbWU9JyskKHRoaXMpLm5leHQoKS5odG1sKCkrJ10nKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgfSk7XG4gICQoJy5tb2RhbC1yZXNldCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICQoJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJ3NwYW4nKS5yZW1vdmUoKTtcbiAgICBjb3VudCA9IDA7XG4gICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKTtcbiAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcblxuICB9KTtcbiAgaWYgKCQoJyNidG4td2F0Y2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY29tZSgnI2J0bi13YXRjaCcpKSB7XG4gICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgfVxuICAgICB9KTtcbiAgfTtcbiAgXG4gIGxldCBtb2JHYWxsU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtd3JhcHAtbWFpbicpLFxuICAgIGNsb3NlR2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsLWNsb3NlLWJ0bicpO1xuICBpZiAobW9iR2FsbFNsaWRlcikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbGwtd3JhcHAtbWFpbicpKSB7XG4gICAgICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpXG4gICAgICAgfSBlbHNlIHsgcmV0dXJuIH07XG4gICAgfSk7XG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsJyk7XG4gICAgfSk7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMSwgMCk7XG4gICAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygyLCAwKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtMycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygzLCAwKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtNCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg0LCAwKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtNScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg1LCAwKTtcbiAgICB9KTsgIFxuICB9IGVsc2UgeyByZXR1cm4gfTtcbn07XG5cblxuICJdLCJmaWxlIjoiaW5kZXguanMifQ==
