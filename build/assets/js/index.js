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
  function withScrollBar() {
    let popWrap = document.querySelector('main');
     let wScroll = window.innerWidth - popWrap.offsetWidth;
     return wScroll;
  }
  function menuAccordionMover() {
    let acc = document.querySelectorAll(".accordion-btn");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.parentElement.previousElementSibling;
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
        this.firstElementChild.classList.toggle("active");
        let panel = this.firstElementChild.nextElementSibling;
         if (panel.style.maxHeight) {
           panel.style.maxHeight = null;
         } else {
           panel.style.maxHeight = panel.scrollHeight + "px";
         } 
       });
    }; 
  };
  function addRemoveClass(elem, add) {
    if ($(window).width() <= (900 - withScrollBar())) {
      $(elem).addClass(add);
    } else {
      $(elem).removeClass(add);
    };
  };
  function addRemoveClass_767(elem, add) {
    if ($(window).width() >= (767 - withScrollBar())) {
      $(elem).addClass(add);
    } else {
      $(elem).removeClass(add);
    };
  };
  
  function openPopUp(elem) {
    let wScrolO = withScrollBar();
    $(elem).addClass('active');  
    $('body').addClass('modal');
    $('body').css('padding-right', wScrolO);
    $('header').css('padding-right', wScrolO);
    $('header .promo_line').css('padding-right', wScrolO);
    $('header .promo_line').css('margin-right', -wScrolO);
  };
  function closePopUp(elem) {
    $(elem).removeClass('active');  
    $('body').removeClass('modal');
    $('body').css('padding-right', 0);
    $('header').css('padding-right', 0);
    $('header .promo_line').css('padding-right', 0);
    $('header .promo_line').css('margin-right', 0);
  };
  jQuery.extend(jQuery.validator.messages, {
    required: "Поле является обязательным",
    remote: "Поле является обязательным",
    email: "Введите корректный электронный адрес",
  });
  $.validator.addMethod("EMAIL", function(value, element) {
      return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
  }, "Введите корректный электронный адрес");
  $.validator.addMethod("PHONE", function (value, element) {
    return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
  }, "Введите коректный номер телефона");
  function validatorForm(elem) {
    $(elem).validate({
      rules: {
        psword: {
          required: true,
          minlength: 6,
        },
        name: {
          required: true,
        },
        last_name: {
          required: true,
        },
        city: {
          required: true,
        },
        street: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
        building: {
          required: true,
        },
        apartament: {
          required: true,
        },

         zip: {
           required: true,
           minlength: 6,
           maxlength: 6,
           digits: true,
        },
        last_name: {
          required: true,
        },
        psword_confirm: {
          required: true,
          minlength: 6,
          equalTo : "#person-pass",
        },
        email_n: "required EMAIL",
        email_pr: "EMAIL",
        phone_ru: "PHONE",
        phone_ru_req: "required PHONE",
      },
      messages: {
        psword: {
          minlength: 'Минимальная длина пароля 6 символов'
        },
        psword_confirm: {
          equalTo: "Пароли не совпадают",
          minlength: 'Минимальная длина пароля 6 символов'
        },
        zip: {
          minlength:'Почтовый индекс состоит из 6 цифр',
          maxlength: 'Почтовый индекс состоит из 6 цифр',
          digits: 'Почтовый индекс состоит из 6 цифр',

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
    $(elem).change(function () {
      let selectCheck = $(this).parents('.content-filter').find('.numb-select span'),
        numSelected = +selectCheck.html();
      if ($(this).prop('checked')) {
        numSelected++;
      } else {
        if (numSelected > 0) {
          numSelected--;
        } else {
          numSelected = 0;
        }
      }
      chechBtn(this, numSelected);
      selectCheck.html(numSelected);
    });
  };
  function chechBtn(elem, a) {
    let parBtn = $(elem).parentsUntil('.content-filter').next('.btn-wrapper').children('.filter-btn'),
        fItem = $(elem).parent('.filter-items').parentsUntil('.filter-items').prev();
    if (a > 0) {
      parBtn.removeClass('no-active');
      fItem.addClass('select');
    } else {
      parBtn.addClass('no-active');
      fItem.removeClass('select');
    }
  }
  function resetSelect(elem) {
    $(elem).click(function (e) {
      e.preventDefault();
      let boxIn = $(this).parents('.content-filter').find('.box-check'),
        numSelect = $(this).next('.numb-select').children('span'),
        countSel = +numSelect.html();
      $(boxIn).each(function () {
        if ($(this).prop('checked')) {
          atrbt = $(this).attr('id');
          $('.filter-active-items').find('div[data-name=' + atrbt + ']').remove();
          haveAChild('.filter-active-items');
          $(this).prop('checked', false);
          countSel--;
          numSelect.html(countSel);
          chechBtn($(this), countSel);
        };
      });

    });
  };
  let instance;
  function initRangeSlider(slid, input1, input2) { 
    var $range = $(slid),
      $inputFrom = $(input1),
      $inputTo = $(input2),
      
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
        onChange: updateInputs,
        onFinish: updateInputs
        
    });
    instance = $range.data("ionRangeSlider");
    function updateInputs(data) {
      from = data.from;
      to = data.to;
      if (from !== min || to !== max) {
        $('.filter-header.range').addClass('select')
      } else {
        $('.filter-header.range').removeClass('select');
      }
        $inputFrom.prop("value", rNumber(from));
        $inputTo.prop("value", rNumber(to));
    }
    $inputFrom.on("input", function () {
      var val = $(this).prop("value").replace(/[^0-9]/g, '');
      if (+val > max) {
        return $inputFrom.prop("value", rNumber(max));
      }
       $inputFrom.prop("value", val.replace(/\B(?=(\d{3})+(?!\d))/g, " "));
       
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
      var val = $(this).prop("value").replace(/[^0-9]/g, '');
      if (+val > max) {
        return $inputTo.prop("value", rNumber(max));
      }
      $inputTo.prop("value", val.replace(/\B(?=(\d{3})+(?!\d))/g, " "));
        
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
  function rNumber(elem){
    return String(elem).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
          $(".points-list__outter").mCustomScrollbar({
            theme:"my-theme"
          });
          $(".account-orders__nav__var,.size-table").mCustomScrollbar({
            theme:"my-theme",
            axis: "x"
          });
          
        });
  })(jQuery);
  function come(elem) {
    var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height(),
      elemTop = $(elem).offset().top,
      elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  };
  function sliceSentence(elem, addClass) {
    $(elem).each(function (index, value) {
      if ($(this).outerHeight() > $(this).parent().height()) {
        $(this).parent().addClass(addClass)
      } else {
        if ($(this).parent().hasClass(addClass)) {
          $(this).parent().removeClass(addClass);
        };
      };
    });
  };
  function resPrice() {
    instance.reset();
    if ($(window).width() >= (900 - withScrollBar())) {
      $('.js-input-from').val('0');
      $('.js-input-to').val('100 000');
      $('.filter-header.range').removeClass('select');
    } else {
      $('.mob-input-from').val('0');
      $('.mob-input-to').val('100 000');
      $('.filter-header.range').removeClass('select');
    }
    
  };
  function addFilter(elem, _id, content, past) {
    if ($(elem).prop('checked')) {
        past.append(
        '<div data-name=' + _id + ' class="active-item">' +
        '<span class="name-filter">' + content + '</span>' +
        '<div class="close-filter-wrapper">' +
          '<svg class="close-filter">' +
            '<use href="assets/sprite/sprite.svg#close"></use>' +
          '</svg>' +
        '</div>' +
        '</div>');
      } else {
      past.find('div[data-name=' + _id + ']').remove();
      }
  };
  function haveAChild(elem) {
    let parElem = $(elem);
    if (parElem.children().length >= 2) {
      parElem.css('display', 'flex')
    } else {
      parElem.css('display', 'none');
    }
  };
  function watcherIn(elem) {
    if (elem.children().length > 0) {
      elem.css('display', 'flex');
      return true
    } else {
      elem.css('display', 'none');
      return false
    }
  };
  function mobFilterCheck(pick, pull) {
    let mobIdCheck = $(pick).prop('id'),
      pastPos = $(pick).parents('.mob-filter-items').children('.mob-filter-header').children('.mob-check-holder'),
      lastChild;
    if ($(pick).prop('checked')) {
      if (watcherIn(pastPos)) {
        pastPos.prepend('<span data-name=' + mobIdCheck +'>' + pull + ',</span>');
      } else {
        pastPos.prepend('<span data-name=' + mobIdCheck + '>' + pull + '</span>');
      }
      watcherIn(pastPos);
    } else {
      pastPos.find('span[data-name=' + mobIdCheck + ']').remove();
      watcherIn(pastPos);
    }
    lastChild = pastPos.children().last().html();
    if (typeof lastChild == 'undefined') {
      return;
    } else {
       lastChild = lastChild.replace(/[\s.,%]/g, '');
       pastPos.children().last().html(lastChild);
    }
  };
  function addShadow(elem) {
    $(elem).addClass('mob-size-init');
  };
  function removeShadow(elem) {
     $(elem).removeClass('mob-size-init');
  };
  function ifShadow(elem) {
    if ($(elem).find('table').width() > $(elem).parents('.popup__content').outerWidth()) {
      addShadow(elem);
    } else {
      removeShadow(elem);
    }
  };
  function disableButton(inPut, form, btn) {
    $(inPut).change(function () {
       if ($(this).children('.accept_check').prop('checked')) {
         $(this).parents(form).find(btn).removeClass('no-active');
       } else {
         $(this).parents(form).find(btn).addClass('no-active');
       }
    });
  };
  function onlyLetterInput(intext) {
    let jin = document.querySelectorAll(intext);
    for (let i = 0; i < jin.length; i++) {
      jin[i].addEventListener('keydown', function(e){
      if( e.key.match(/[0-9]/) ) return e.preventDefault();
     }); 
      jin[i].addEventListener('input', function(e){
       this.value = this.value.replace(/[0-9]/g, "");
      });
    };
  };
  $('.features_items .search').click(function () {
    if ($(window).width() >= (900 - withScrollBar())) {
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
  if ($(window).width() <= (900 - withScrollBar())) {
    initRangeSlider('.mob-range-slider', '.mob-input-from', '.mob-input-to');
  } else {
    initRangeSlider('.js-range-slider', '.js-input-from', '.js-input-to');
  }
  $(window).resize(function () {
    addRemoveClass('.info-frame .info-content-wrapper>.title','accordion-btn');
    addRemoveClass('section.info .container .info-frame .info-menu-wrapper', 'accordion');
    addRemoveClass_767('.gall-wrapp-main', 'load');
    ifShadow('.popup.active .size-table');
    if ($(window).width() <= (767 - withScrollBar())) {
      sliceSentence('.discrption-goods:not(.catalog-k) p', 'cut-word');
      sliceSentence('.discrption-goods.catalog-k p', 'catalog-k');
    }
    if ($(window).width() <= (900 - withScrollBar())) {
      initRangeSlider('.mob-range-slider', '.mob-input-from', '.mob-input-to');
    } else {
      initRangeSlider('.js-range-slider', '.js-input-from', '.js-input-to');
    }
  });
  
  sliceSentence('.discrption-goods:not(.catalog-k) p', 'cut-word');
  sliceSentence('.discrption-goods.catalog-k p', 'catalog-k');
  menuAccordionMover();
  accEngine('.payment-items');
  validatorForm("#sign-in");
  validatorForm("#reset-pass");
  validatorForm("#registration-form");
  validatorForm("#account-prersonal-data");
  validatorForm("#faqForm");
  validatorForm("#checkoutForm");
  validatorForm("#contacts_form");
  $('.close-popup').click(function () {
    closePopUp('.popup.active');
  });
  $('.features_items .autorization').click(function (){
    openPopUp('#popup-sign-in');
    return false;
  });
  $('#popup-sign-in .link_wrapper a').click(function (e) {
    e.preventDefault();
    closePopUp('.popup.active');
    openPopUp('#popup-reset-pass');
  });
  $('.chose-point').click(function (e) {
    e.preventDefault();
    openPopUp('#popup-delivery-point');
  });
  $('.link-to__table-size').click(function () {
    openPopUp('#popup-table-size');
    ifShadow('.popup.active .size-table');
  });

  $('.lang-wrapper .select-lang').click(function () {
    $(this).toggleClass('active');
    $(this).children().last().toggleClass('active');
  });
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
  checkBoxEngine('.box-check');
  resetSelect('.reset-select');
  $('.mobile-filter-container .filter-header').click(function () {
    openPopUp($(this).next());
  });
  $('.modal-fiter .title-filter svg').click(function () {
    closePopUp('.modal-fiter');
  });
  $('.mob-filter-header').click(function () {
    $(this).parent('.mob-filter-items').toggleClass('active');
    $(this).toggleClass('active');
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
  $('.mob-check-items .box-check').click(function () {
    let mobCheck = $(this).next().html(),
      mobCheckColor = $(this).next().children('.color-name').html();
    if ($(this).hasClass('color')) {
      mobFilterCheck(this, mobCheckColor);
    } else {
      mobFilterCheck(this, mobCheck);
    }
  });
  $('.modal-reset').click(function () {
    $('.mob-check-items .box-check').prop('checked', false);
    $('.mob-filter-header').find('.mob-check-holder').children().remove();
    count = 0;
    $('.modal-reset span').html('(' + count + ')');
    $('.modal-reset').addClass('no-active');
    $('.modal-submit').addClass('no-active');
    resPrice();
    watcherIn($('.mob-check-holder'))
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
  } else { };
  let favIcon = document.querySelectorAll('.favorit');
  for (let i = 0; i < favIcon.length; i++) {
    favIcon[i].addEventListener('click', function () {
      this.classList.toggle('select');
    });
  };
  $('.size-holder .size-items').click(function () {
    $('.size-holder .size-items').removeClass('current');
    $(this).toggleClass('current');
  });
  $('.add-to-favorit').click(function () {
    $('.add-to-favorit').toggleClass('select');
  });
  $('.add_to_favorit').click(function(e){
        let button      = $(e.currentTarget)
        let prod_id     = button.data('product_id')
        let need_delete = (button.hasClass('select')) ? 1 : 0;

        $.ajax({
            url: '/local/ajax/favorites.php',
            method: 'post',
            data: {
                favorite: prod_id,
                delete: need_delete
            },
            success: function(response){
                response = JSON.parse(response);

                if(response.success) {
                    if(need_delete) {
                        button.removeClass('select');
                    }else {
                        button.addClass('select');
                    }
                }
            }
        });
  });

  $('.decrease').click(function (e){
    var old = $(this).siblings('input').val();
    if (old > 1){
      $(this).siblings('input').val(parseInt(old) - 1);
    }
  })
  $('.increase').click(function (e){
    var old = $(this).siblings('input').val();
    $(this).siblings('input').val(parseInt(old) + 1);
  })
  $('.points-nav a').click(function (e){
    e.preventDefault();
    $('.points-nav a.active').removeClass('active');
    $(this).addClass('active')
    $('.points-view .active').removeClass('active');
    $('.'+$(this).attr('data-id')).addClass('active');
  })
  $('.points-list .point').click(function (e) {
    $('.points-list .point.selected').removeClass('selected');
    $(this).addClass('selected')
  });
  $('select').niceSelect();
  $('.filter-items > .box-check:not(.color)').click(function () {
    let contCheck = $(this).next().html(),
        picId = $(this).prop('id');
    putThis = $(this).parents('.filter-continer').children('.filter-active-wrapper').children('.filter-active-items');
    addFilter(this, picId, contCheck, putThis);
    haveAChild('.filter-active-items');
  });
  $('.filter-items > .box-check.color').click(function () {
    let contColor = $(this).next().children('.color-name').html(),
        colorId = $(this).prop('id');
    putThisCol = $(this).parents('.filter-continer').children('.filter-active-wrapper').children('.filter-active-items');
    addFilter(this, colorId, contColor, putThisCol);
    haveAChild('.filter-active-items');
  });
  $('.filter-active-items').on('click', '.close-filter-wrapper', function(e){
    let cPar = $(this).parents('.active-item'),
      wayCheck = cPar.attr('data-name'),
      filterWrap = $('.filter-continer'),
      clickIn = filterWrap.find('input[id=' + wayCheck + ']');
    clickIn.prop('checked', false).trigger('change');
    cPar.remove();
    haveAChild('.filter-active-items');
  });
  $('.filter-active-items').on('click', '.filter-active-reset-btn', function(e){
    let itemRem = $('.active-item'),
        filterCont = $('.filter-continer');
    
    filterCont.find('input').prop('checked', false).trigger('change');
    itemRem.remove();
    resPrice();
    haveAChild('.filter-active-items');
  });
  $(".wrap-calendar").click(function () {
    let hasFocus = $(this).prev().is(':focus');
    console.log(hasFocus);
    if (hasFocus) {
      $(this).prev().blur();
    } else {
      $(this).prev().focus();
    }
  });
  $('.new-pass').change(function () {
    if ($(this).val() != 0) {
    $(this).attr('name', 'psword');
    $(this).attr('id', 'person-pass');
    $('.check-pass').attr('name', 'psword_confirm');
    } else {
      $(this).removeAttr('name');
      $('.check-pass').removeAttr('name');
    }
  });
  $('.valid-tel').change(function () {
    if ($(this).val() != 0) {
      $(this).attr('name', 'phone_ru');
    } else {
       $(this).removeAttr('name');
    }
  });
  $('.countries .show-all').click(function () {
    $('.countries .show-all').toggleClass('show');
    $(this).parent().siblings('.row').toggleClass('opened');
  });
  disableButton(".checkbox-label", ".form", "input.accept_btn");
  disableButton(".checkbox-label", "#registration-form", ".form-actions .submit-btn");
  $('.phone_mask').mask('+0 (000) 000-00-00');
  $('.zip_mask').mask('000000');
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('button').addClass('mob_center')
  } else {
    if ($('button').hasClass('mob_center')) {
      $('button').removeClass('mob_center')
    };
  };
  $('#input_date').datepicker({
    autoClose: true,
  });
  
  onlyLetterInput('.only_letter')
  

  
};


 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMzUwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xyXG5cclxuICAgIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgICAgIH0sXHJcblx0XHRcdCAgIDM3NToge1xyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdCAgIH0sXHJcblx0XHRcdCAgIDEzNjY6IHtcclxuXHRcdFx0ICAgXHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHQgICB9LFxyXG5cdFx0ICB9LFxyXG4gICAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXHJcbiAgZnVuY3Rpb24gbWVudUFjY29yZGlvbk1vdmVyKCkge1xyXG4gICAgbGV0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJ0blwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCYmcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFjY0VuZ2luZShwaWNrKSB7XHJcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwaWNrKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFJlbW92ZUNsYXNzKGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDkwMCkge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3NfNzY3KGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDc2Nykge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb3BlblBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjbG9zZVBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBqUXVlcnkuZXh0ZW5kKGpRdWVyeS52YWxpZGF0b3IubWVzc2FnZXMsIHtcclxuICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1INGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C8XCIsXHJcbiAgICByZW1vdGU6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIGVtYWlsOiBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiLFxyXG4gIH0pO1xyXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIkVNQUlMXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aLl17Miw1fSQvaS50ZXN0KHZhbHVlKTtcclxuICB9LCBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0b3JGb3JtKGVsZW0pIHtcclxuICAgICQoZWxlbSkudmFsaWRhdGUoe1xyXG4gICAgICBydWxlczoge1xyXG4gICAgICAgIHBzd29yZDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbF9uOlwicmVxdWlyZWQgRU1BSUxcIixcclxuICAgICAgfSxcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwc3dvcmQ6IHtcclxuICAgICAgICAgIG1pbmxlbmd0aDogJ9Cc0LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8gNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gcmVtb3ZlSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gZ29Ub0N1cnJlbmN5KGVsZW0pIHtcclxuICAgIGxldCBudW1iZXJUb0Zvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclRvRm9ybWF0Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgbGV0IHRvTnVtYiA9ICtudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUw7XHJcbiAgICAgICBsZXQgZm9ybWF0TnVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnUlVCJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pLmZvcm1hdCh0b051bWIpO1xyXG4gICAgICAgbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MID0gZm9ybWF0TnVtO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2hlY2tCb3hFbmdpbmUoZWxlbSkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICB9XHJcbiAgICAgIGNoZWNoQnRuKHRoaXMsIGNvdW50KTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzVW50aWwoJy5jb250ZW50LWZpbHRlcicpLm5leHQoJy5idG4td3JhcHBlcicpLmNoaWxkcmVuKCcuc3RhdGUtc2VsZWN0JykuY2hpbGRyZW4oJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbChjb3VudCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNoZWNoQnRuKGVsZW0sIGEpIHtcclxuICAgIGlmIChhID4gMCkge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5hZGRDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0KGVsZW0sIGJveCkge1xyXG4gICAgJChlbGVtKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoYm94KS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAkKGVsZW0pLm5leHQoJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgwKTtcclxuICAgICAgY291bnQgPSAwO1xyXG4gICAgICBjaGVjaEJ0bihib3gpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBpbml0UmFuZ2VTbGlkZXIoKSB7IFxyXG4gICAgdmFyICRyYW5nZSA9ICQoXCIuanMtcmFuZ2Utc2xpZGVyXCIpLFxyXG4gICAgJGlucHV0RnJvbSA9ICQoXCIuanMtaW5wdXQtZnJvbVwiKSxcclxuICAgICRpbnB1dFRvID0gJChcIi5qcy1pbnB1dC10b1wiKSxcclxuICAgIGluc3RhbmNlLFxyXG4gICAgbWluID0gMCxcclxuICAgIG1heCA9IDEwMDAwMCxcclxuICAgIGZyb20gPSAwLFxyXG4gICAgdG8gPSAwO1xyXG4gICAgJHJhbmdlLmlvblJhbmdlU2xpZGVyKHtcclxuICAgIFx0ICBza2luOiBcInJvdW5kXCIsXHJcbiAgICAgICAgdHlwZTogXCJkb3VibGVcIixcclxuICAgICAgICBtaW46IG1pbixcclxuICAgICAgICBtYXg6IG1heCxcclxuICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgIHRvOiAxMDAwMDAsXHJcbiAgICAgICAgb25TdGFydDogdXBkYXRlSW5wdXRzLFxyXG4gICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVJbnB1dHNcclxuICAgIH0pO1xyXG4gICAgaW5zdGFuY2UgPSAkcmFuZ2UuZGF0YShcImlvblJhbmdlU2xpZGVyXCIpO1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRzIChkYXRhKSB7XHJcbiAgICBcdGZyb20gPSBkYXRhLmZyb207XHJcbiAgICAgICAgdG8gPSBkYXRhLnRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRpbnB1dEZyb20ucHJvcChcInZhbHVlXCIsIGZyb20pO1xyXG4gICAgICAgICRpbnB1dFRvLnByb3AoXCJ2YWx1ZVwiLCB0byk7XHRcclxuICAgIH1cclxuICAgICRpbnB1dEZyb20ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IG1pbikge1xyXG4gICAgICAgICAgICB2YWwgPSBtaW47XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiB0bykge1xyXG4gICAgICAgICAgICB2YWwgPSB0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogdmFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJGlucHV0VG8ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IGZyb20pIHtcclxuICAgICAgICAgICAgdmFsID0gZnJvbTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG1heCkge1xyXG4gICAgICAgICAgICB2YWwgPSBtYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHRvOiB2YWxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgKGZ1bmN0aW9uKCQpe1xyXG4gICAgICAgICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAuZmlsdGVyLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLm1vYi1jaGVjay1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuYWxsLWxhbmctaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICB9KShqUXVlcnkpO1xyXG4gIGZ1bmN0aW9uIGNvbWUoZWxlbSkge1xyXG4gICAgdmFyIGRvY1ZpZXdUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxyXG4gICAgICBlbGVtVG9wID0gJChlbGVtKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgIGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgJChlbGVtKS5oZWlnaHQoKTtcclxuXHJcbiAgICByZXR1cm4gKChlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20pICYmIChlbGVtVG9wID49IGRvY1ZpZXdUb3ApKTtcclxuICB9XHJcbiAgICQoJy5mZWF0dXJlc19pdGVtcyAuc2VhcmNoJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDkwMCkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9kYWwnKTtcclxuICAgICAgaWYgKCQoJ2JvZHk+ZGl2JykuaGFzQ2xhc3MoJ292ZXJsYXknKSkge1xyXG4gICAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5zZWFyY2gtd3JhcHBlciAuZm9ybSA+IGlucHV0JykuZm9jdXMoKTtcclxuICAgICB9O1xyXG4gICAgIHJldHVybiBmYWxzZVxyXG4gICB9KTtcclxuICAkKCcuc2VhcmNoLWhlYWRlci1saW5lIHN2Zy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICB9KTtcclxuICAkKCcuYnVyZ2VyLW1lbnUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7ICBcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubWVudV9tb2JpbGUgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIC5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tZW51X21vYmlsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubW9iaWxlLW1lbnUtd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfSk7XHJcbiAgJCgnLnByb21vX2xpbmUgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsICcwJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICB9KTtcclxuICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsJ2FjY29yZGlvbi1idG4nKTtcclxuICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5pbmZvLW1lbnUtd3JhcHBlcicsICdhY2NvcmRpb24nKTtcclxuICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gICAgbWVudUFjY29yZGlvbk1vdmVyKCk7XHJcbiAgICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gIH0pO1xyXG4gIG1lbnVBY2NvcmRpb25Nb3ZlcigpO1xyXG4gIGFjY0VuZ2luZSgnLmFjYy1vcGVuJyk7XHJcbiAgZnVuY3Rpb24gc2xpY2VTZW50ZW5jZShxLCBzZW50ZW5jZSkge1xyXG4gICAgbGV0IHNpemUgPSBxLFxyXG4gICAgICBuZXdzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VudGVuY2UpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobmV3c0NvbnRlbnRbaV0uaW5uZXJIVE1MLmxlbmd0aCA+IHNpemUpIHtcclxuICAgICAgICAgXHRuZXdzQ29udGVudFtpXS5pbm5lckhUTUwgPSBuZXdzQ29udGVudFtpXS5pbm5lckhUTUwuc2xpY2UoMCwgc2l6ZSkgKyAnIC4uLic7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07ICAgIFxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDM1Nykge1xyXG4gICAgICBzbGljZVNlbnRlbmNlKDM0LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgzMywgJy5kaXNjcnB0aW9uLWdvb2RzID4gcCcpOyBcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCAmJiAkKHdpbmRvdykud2lkdGgoKSA+PSAzNTcpIHtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDM4LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgc2xpY2VTZW50ZW5jZSgyNywgJy5kaXNjcnB0aW9uLWdvb2RzLXMgPiBwJyk7XHJcbiAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7IFxyXG4gICAgfTtcclxuICBcclxuICB2YWxpZGF0b3JGb3JtKFwiI3NpZ24taW5cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNyZXNldC1wYXNzXCIpO1xyXG4gICQoJy5jbG9zZS1wb3B1cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcuZmVhdHVyZXNfaXRlbXMgLmF1dG9yaXphdGlvbicpLmNsaWNrKGZ1bmN0aW9uICgpe1xyXG4gICAgb3BlblBvcFVwKCcjcG9wdXAtc2lnbi1pbicpO1xyXG4gIH0pO1xyXG4gICQoJyNwb3B1cC1zaWduLWluIC5saW5rX3dyYXBwZXIgYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1yZXNldC1wYXNzJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmxhbmctd3JhcHBlciAuc2VsZWN0LWxhbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmxhc3QoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSlcclxuICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaC1saW5lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmhhc0NsYXNzKCdlbnRlcicpKSB7XHJcbiAgICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIi5zdWJfbWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIubWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcyk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcyk7XHJcbiAgIH0pO1xyXG4gICQoXCIuZmVhdHVyZXNfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZEhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9KTtcclxuICBsZXQgaGVpZ2h0SGVhZGVyID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgJCh3aW5kb3cpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCdoZWFkZXInKS5oZWlnaHQoKSA8IGhlaWdodEhlYWRlcikge1xyXG4gICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nJywgJCgnaGVhZGVyJykuaGVpZ2h0KCkgKyAncHgnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBnb1RvQ3VycmVuY3koJy5wcmljZScpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX25ldycpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX29sZCcpO1xyXG4gICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCduby1hY3RpdmUnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIjxkaXYgY2xhc3M9J2xvY2stcG9pbnRlcic+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fd3JhcHBlcicpKSB7XHJcbiAgICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbG9jay1wb2ludGVyJykpIHtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vcmUtbGVzcy1maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGluaXRSYW5nZVNsaWRlcigpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLnNpemUnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmgnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLnNpemUgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLnNpemUnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLmNvbG9yIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuY2F0X2YgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5icmFuZCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLm1hdGVyaWFsIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuaCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suaCcpO1xyXG4gICQoJy5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5Qb3BVcCgkKHRoaXMpLm5leHQoKSk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vZGFsLWZpdGVyIC50aXRsZS1maWx0ZXIgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY2xvc2VQb3BVcCgnLm1vZGFsLWZpdGVyJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBcclxuICBsZXQgY291bnQgPSAwO1xyXG4gICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgIH1cclxuICAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpXHJcbiAgICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9XHJcbiAgIH0pO1xyXG4gICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjazpub3QoLmNvbG9yKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5hcHBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nKyAkKHRoaXMpLm5leHQoKS5odG1sKCkrJz4oJyArICQodGhpcykubmV4dCgpLmh0bWwoKSArICcpPC9zcGFuPicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5tb2ItZmlsdGVyLWl0ZW1zJykuY2hpbGRyZW4oJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJ3NwYW5bZGF0YS1uYW1lPScrJCh0aGlzKS5uZXh0KCkuaHRtbCgpKyddJykucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAkKCcubW9kYWwtcmVzZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuZmluZCgnc3BhbicpLnJlbW92ZSgpO1xyXG4gICAgY291bnQgPSAwO1xyXG4gICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKTtcclxuICAgICQoJy5tb2RhbC1yZXNldCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICQoJy5tb2RhbC1zdWJtaXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG4gIGlmICgkKCcjYnRuLXdhdGNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChjb21lKCcjYnRuLXdhdGNoJykpIHtcclxuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgIH1cclxuICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBtb2JHYWxsU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtd3JhcHAtbWFpbicpLFxyXG4gICAgY2xvc2VHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtY2xvc2UtYnRuJyk7XHJcbiAgaWYgKG1vYkdhbGxTbGlkZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbC13cmFwcC1tYWluJykpIHtcclxuICAgICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpXHJcbiAgICAgICB9IGVsc2UgeyByZXR1cm4gfTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMSwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygyLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygzLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg0LCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg1LCAwKTtcclxuICAgIH0pOyAgXHJcbiAgfSBlbHNlIHsgcmV0dXJuIH07XHJcbn07XHJcblxyXG5cclxuICJdLCJmaWxlIjoiaW5kZXguanMifQ==

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMzUwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xyXG5cclxuICAgIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgICAgIH0sXHJcblx0XHRcdCAgIDM3NToge1xyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdCAgIH0sXHJcblx0XHRcdCAgIDEzNjY6IHtcclxuXHRcdFx0ICAgXHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHQgICB9LFxyXG5cdFx0ICB9LFxyXG4gICAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXHJcbiAgZnVuY3Rpb24gd2l0aFNjcm9sbEJhcigpIHtcclxuICAgIGxldCBwb3BXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgIGxldCB3U2Nyb2xsID0gd2luZG93LmlubmVyV2lkdGggLSBwb3BXcmFwLm9mZnNldFdpZHRoO1xyXG4gICAgIHJldHVybiB3U2Nyb2xsO1xyXG4gIH1cclxuICBmdW5jdGlvbiBtZW51QWNjb3JkaW9uTW92ZXIoKSB7XHJcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tYnRuXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0JiZwYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbicpKSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICB9KTtcclxuICAgIH07IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWNjRW5naW5lKHBpY2spIHtcclxuICAgIGxldCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBpY2spO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHsgICAgXHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFJlbW92ZUNsYXNzKGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XHJcbiAgICAgICQoZWxlbSkuYWRkQ2xhc3MoYWRkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBmdW5jdGlvbiBhZGRSZW1vdmVDbGFzc183NjcoZWxlbSwgYWRkKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gKDc2NyAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgICAgJChlbGVtKS5hZGRDbGFzcyhhZGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChlbGVtKS5yZW1vdmVDbGFzcyhhZGQpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIG9wZW5Qb3BVcChlbGVtKSB7XHJcbiAgICBsZXQgd1Njcm9sTyA9IHdpdGhTY3JvbGxCYXIoKTtcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXJpZ2h0Jywgd1Njcm9sTyk7XHJcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCB3U2Nyb2xPKTtcclxuICAgICQoJ2hlYWRlciAucHJvbW9fbGluZScpLmNzcygncGFkZGluZy1yaWdodCcsIHdTY3JvbE8pO1xyXG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAtd1Njcm9sTyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjbG9zZVBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgMCk7XHJcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcclxuICAgICQoJ2hlYWRlciAucHJvbW9fbGluZScpLmNzcygncGFkZGluZy1yaWdodCcsIDApO1xyXG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAwKTtcclxuICB9O1xyXG4gIGpRdWVyeS5leHRlbmQoalF1ZXJ5LnZhbGlkYXRvci5tZXNzYWdlcywge1xyXG4gICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIHJlbW90ZTogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxyXG4gICAgZW1haWw6IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIsXHJcbiAgfSk7XHJcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiRU1BSUxcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS1dK1xcLlthLXpBLVouXXsyLDV9JC9pLnRlc3QodmFsdWUpO1xyXG4gIH0sIFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIpO1xyXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIlBIT05FXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL14oXFxzKik/KFxcKyk/KFstIF8oKTo9K10/XFxkWy0gXygpOj0rXT8pezEwLDE0fShcXHMqKT8kLy50ZXN0KHZhbHVlKTtcclxuICB9LCBcItCS0LLQtdC00LjRgtC1INC60L7RgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIik7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdG9yRm9ybShlbGVtKSB7XHJcbiAgICAkKGVsZW0pLnZhbGlkYXRlKHtcclxuICAgICAgcnVsZXM6IHtcclxuICAgICAgICBwc3dvcmQ6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWlubGVuZ3RoOiA2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXN0X25hbWU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2l0eToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJlZXQ6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ViamVjdDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1aWxkaW5nOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwYXJ0YW1lbnQ6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICB6aXA6IHtcclxuICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgICAgbWF4bGVuZ3RoOiA2LFxyXG4gICAgICAgICAgIGRpZ2l0czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3RfbmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwc3dvcmRfY29uZmlybToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgICBlcXVhbFRvIDogXCIjcGVyc29uLXBhc3NcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsX246IFwicmVxdWlyZWQgRU1BSUxcIixcclxuICAgICAgICBlbWFpbF9wcjogXCJFTUFJTFwiLFxyXG4gICAgICAgIHBob25lX3J1OiBcIlBIT05FXCIsXHJcbiAgICAgICAgcGhvbmVfcnVfcmVxOiBcInJlcXVpcmVkIFBIT05FXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgcHN3b3JkOiB7XHJcbiAgICAgICAgICBtaW5sZW5ndGg6ICfQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPIDYg0YHQuNC80LLQvtC70L7QsidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBzd29yZF9jb25maXJtOiB7XHJcbiAgICAgICAgICBlcXVhbFRvOiBcItCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RglwiLFxyXG4gICAgICAgICAgbWlubGVuZ3RoOiAn0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6aXA6IHtcclxuICAgICAgICAgIG1pbmxlbmd0aDon0J/QvtGH0YLQvtCy0YvQuSDQuNC90LTQtdC60YEg0YHQvtGB0YLQvtC40YIg0LjQtyA2INGG0LjRhNGAJyxcclxuICAgICAgICAgIG1heGxlbmd0aDogJ9Cf0L7Rh9GC0L7QstGL0Lkg0LjQvdC00LXQutGBINGB0L7RgdGC0L7QuNGCINC40LcgNiDRhtC40YTRgCcsXHJcbiAgICAgICAgICBkaWdpdHM6ICfQn9C+0YfRgtC+0LLRi9C5INC40L3QtNC10LrRgSDRgdC+0YHRgtC+0LjRgiDQuNC3IDYg0YbQuNGE0YAnLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZEhvdmVyKGVsZW0pIHsgXHJcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdpbi1ob3ZlcicpOyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIHJlbW92ZUhvdmVyKGVsZW0pIHsgXHJcbiAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCdpbi1ob3ZlcicpOyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGdvVG9DdXJyZW5jeShlbGVtKSB7XHJcbiAgICBsZXQgbnVtYmVyVG9Gb3JtYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJUb0Zvcm1hdC5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgIGxldCB0b051bWIgPSArbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MO1xyXG4gICAgICAgbGV0IGZvcm1hdE51bSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnLCB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1JVQicsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KS5mb3JtYXQodG9OdW1iKTtcclxuICAgICAgIG51bWJlclRvRm9ybWF0W2ldLmlubmVySFRNTCA9IGZvcm1hdE51bTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNoZWNrQm94RW5naW5lKGVsZW0pIHtcclxuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHNlbGVjdENoZWNrID0gJCh0aGlzKS5wYXJlbnRzKCcuY29udGVudC1maWx0ZXInKS5maW5kKCcubnVtYi1zZWxlY3Qgc3BhbicpLFxyXG4gICAgICAgIG51bVNlbGVjdGVkID0gK3NlbGVjdENoZWNrLmh0bWwoKTtcclxuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgbnVtU2VsZWN0ZWQrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAobnVtU2VsZWN0ZWQgPiAwKSB7XHJcbiAgICAgICAgICBudW1TZWxlY3RlZC0tO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBudW1TZWxlY3RlZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNoZWNoQnRuKHRoaXMsIG51bVNlbGVjdGVkKTtcclxuICAgICAgc2VsZWN0Q2hlY2suaHRtbChudW1TZWxlY3RlZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGNoZWNoQnRuKGVsZW0sIGEpIHtcclxuICAgIGxldCBwYXJCdG4gPSAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJyksXHJcbiAgICAgICAgZkl0ZW0gPSAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKTtcclxuICAgIGlmIChhID4gMCkge1xyXG4gICAgICBwYXJCdG4ucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICBmSXRlbS5hZGRDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJCdG4uYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICBmSXRlbS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0KGVsZW0pIHtcclxuICAgICQoZWxlbSkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgYm94SW4gPSAkKHRoaXMpLnBhcmVudHMoJy5jb250ZW50LWZpbHRlcicpLmZpbmQoJy5ib3gtY2hlY2snKSxcclxuICAgICAgICBudW1TZWxlY3QgPSAkKHRoaXMpLm5leHQoJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJyksXHJcbiAgICAgICAgY291bnRTZWwgPSArbnVtU2VsZWN0Lmh0bWwoKTtcclxuICAgICAgJChib3hJbikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICBhdHJidCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJykuZmluZCgnZGl2W2RhdGEtbmFtZT0nICsgYXRyYnQgKyAnXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICAgICAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgIGNvdW50U2VsLS07XHJcbiAgICAgICAgICBudW1TZWxlY3QuaHRtbChjb3VudFNlbCk7XHJcbiAgICAgICAgICBjaGVjaEJ0bigkKHRoaXMpLCBjb3VudFNlbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBsZXQgaW5zdGFuY2U7XHJcbiAgZnVuY3Rpb24gaW5pdFJhbmdlU2xpZGVyKHNsaWQsIGlucHV0MSwgaW5wdXQyKSB7IFxyXG4gICAgdmFyICRyYW5nZSA9ICQoc2xpZCksXHJcbiAgICAgICRpbnB1dEZyb20gPSAkKGlucHV0MSksXHJcbiAgICAgICRpbnB1dFRvID0gJChpbnB1dDIpLFxyXG4gICAgICBcclxuICAgICAgbWluID0gMCxcclxuICAgICAgbWF4ID0gMTAwMDAwLFxyXG4gICAgICBmcm9tID0gMCxcclxuICAgICAgdG8gPSAwO1xyXG4gICAgJHJhbmdlLmlvblJhbmdlU2xpZGVyKHtcclxuICAgIFx0ICBza2luOiBcInJvdW5kXCIsXHJcbiAgICAgICAgdHlwZTogXCJkb3VibGVcIixcclxuICAgICAgICBtaW46IG1pbixcclxuICAgICAgICBtYXg6IG1heCxcclxuICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgIHRvOiAxMDAwMDAsXHJcbiAgICAgICAgb25TdGFydDogdXBkYXRlSW5wdXRzLFxyXG4gICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVJbnB1dHMsXHJcbiAgICAgICAgb25GaW5pc2g6IHVwZGF0ZUlucHV0c1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBpbnN0YW5jZSA9ICRyYW5nZS5kYXRhKFwiaW9uUmFuZ2VTbGlkZXJcIik7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVJbnB1dHMoZGF0YSkge1xyXG4gICAgICBmcm9tID0gZGF0YS5mcm9tO1xyXG4gICAgICB0byA9IGRhdGEudG87XHJcbiAgICAgIGlmIChmcm9tICE9PSBtaW4gfHwgdG8gIT09IG1heCkge1xyXG4gICAgICAgICQoJy5maWx0ZXItaGVhZGVyLnJhbmdlJykuYWRkQ2xhc3MoJ3NlbGVjdCcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmZpbHRlci1oZWFkZXIucmFuZ2UnKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgICAkaW5wdXRGcm9tLnByb3AoXCJ2YWx1ZVwiLCByTnVtYmVyKGZyb20pKTtcclxuICAgICAgICAkaW5wdXRUby5wcm9wKFwidmFsdWVcIiwgck51bWJlcih0bykpO1xyXG4gICAgfVxyXG4gICAgJGlucHV0RnJvbS5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcbiAgICAgIGlmICgrdmFsID4gbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuICRpbnB1dEZyb20ucHJvcChcInZhbHVlXCIsIHJOdW1iZXIobWF4KSk7XHJcbiAgICAgIH1cclxuICAgICAgICRpbnB1dEZyb20ucHJvcChcInZhbHVlXCIsIHZhbC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiBcIikpO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gdmFsaWRhdGVcclxuICAgICAgICBpZiAodmFsIDwgbWluKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IG1pbjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IHRvKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgaW5zdGFuY2UudXBkYXRlKHtcclxuICAgICAgICBmcm9tOiB2YWxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJGlucHV0VG8ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnByb3AoXCJ2YWx1ZVwiKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG4gICAgICBpZiAoK3ZhbCA+IG1heCkge1xyXG4gICAgICAgIHJldHVybiAkaW5wdXRUby5wcm9wKFwidmFsdWVcIiwgck51bWJlcihtYXgpKTtcclxuICAgICAgfVxyXG4gICAgICAkaW5wdXRUby5wcm9wKFwidmFsdWVcIiwgdmFsLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiIFwiKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdmFsaWRhdGVcclxuICAgICAgICBpZiAodmFsIDwgZnJvbSkge1xyXG4gICAgICAgICAgICB2YWwgPSBmcm9tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsID4gbWF4KSB7XHJcbiAgICAgICAgICAgIHZhbCA9IG1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcclxuICAgICAgICAgICAgdG86IHZhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiByTnVtYmVyKGVsZW0pe1xyXG4gICAgcmV0dXJuIFN0cmluZyhlbGVtKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiBcIik7XHJcbiAgfTtcclxuICAoZnVuY3Rpb24oJCl7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmNvbnRlbnQtZmlsdGVyIC5maWx0ZXItaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLm1vYmlsZS1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAubW9iLWNoZWNrLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5hbGwtbGFuZy1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIucG9pbnRzLWxpc3RfX291dHRlclwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuYWNjb3VudC1vcmRlcnNfX25hdl9fdmFyLC5zaXplLXRhYmxlXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCIsXHJcbiAgICAgICAgICAgIGF4aXM6IFwieFwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gIH0pKGpRdWVyeSk7XHJcbiAgZnVuY3Rpb24gY29tZShlbGVtKSB7XHJcbiAgICB2YXIgZG9jVmlld1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyAkKHdpbmRvdykuaGVpZ2h0KCksXHJcbiAgICAgIGVsZW1Ub3AgPSAkKGVsZW0pLm9mZnNldCgpLnRvcCxcclxuICAgICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyAkKGVsZW0pLmhlaWdodCgpO1xyXG5cclxuICAgIHJldHVybiAoKGVsZW1Cb3R0b20gPD0gZG9jVmlld0JvdHRvbSkgJiYgKGVsZW1Ub3AgPj0gZG9jVmlld1RvcCkpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gc2xpY2VTZW50ZW5jZShlbGVtLCBhZGRDbGFzcykge1xyXG4gICAgJChlbGVtKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgaWYgKCQodGhpcykub3V0ZXJIZWlnaHQoKSA+ICQodGhpcykucGFyZW50KCkuaGVpZ2h0KCkpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKGFkZENsYXNzKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKGFkZENsYXNzKSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhhZGRDbGFzcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gcmVzUHJpY2UoKSB7XHJcbiAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XHJcbiAgICAgICQoJy5qcy1pbnB1dC1mcm9tJykudmFsKCcwJyk7XHJcbiAgICAgICQoJy5qcy1pbnB1dC10bycpLnZhbCgnMTAwIDAwMCcpO1xyXG4gICAgICAkKCcuZmlsdGVyLWhlYWRlci5yYW5nZScpLnJlbW92ZUNsYXNzKCdzZWxlY3QnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5tb2ItaW5wdXQtZnJvbScpLnZhbCgnMCcpO1xyXG4gICAgICAkKCcubW9iLWlucHV0LXRvJykudmFsKCcxMDAgMDAwJyk7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyLnJhbmdlJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfTtcclxuICBmdW5jdGlvbiBhZGRGaWx0ZXIoZWxlbSwgX2lkLCBjb250ZW50LCBwYXN0KSB7XHJcbiAgICBpZiAoJChlbGVtKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICBwYXN0LmFwcGVuZChcclxuICAgICAgICAnPGRpdiBkYXRhLW5hbWU9JyArIF9pZCArICcgY2xhc3M9XCJhY3RpdmUtaXRlbVwiPicgK1xyXG4gICAgICAgICc8c3BhbiBjbGFzcz1cIm5hbWUtZmlsdGVyXCI+JyArIGNvbnRlbnQgKyAnPC9zcGFuPicgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiY2xvc2UtZmlsdGVyLXdyYXBwZXJcIj4nICtcclxuICAgICAgICAgICc8c3ZnIGNsYXNzPVwiY2xvc2UtZmlsdGVyXCI+JyArXHJcbiAgICAgICAgICAgICc8dXNlIGhyZWY9XCJhc3NldHMvc3ByaXRlL3Nwcml0ZS5zdmcjY2xvc2VcIj48L3VzZT4nICtcclxuICAgICAgICAgICc8L3N2Zz4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvZGl2PicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICBwYXN0LmZpbmQoJ2RpdltkYXRhLW5hbWU9JyArIF9pZCArICddJykucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGhhdmVBQ2hpbGQoZWxlbSkge1xyXG4gICAgbGV0IHBhckVsZW0gPSAkKGVsZW0pO1xyXG4gICAgaWYgKHBhckVsZW0uY2hpbGRyZW4oKS5sZW5ndGggPj0gMikge1xyXG4gICAgICBwYXJFbGVtLmNzcygnZGlzcGxheScsICdmbGV4JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhckVsZW0uY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIHdhdGNoZXJJbihlbGVtKSB7XHJcbiAgICBpZiAoZWxlbS5jaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcclxuICAgICAgZWxlbS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIG1vYkZpbHRlckNoZWNrKHBpY2ssIHB1bGwpIHtcclxuICAgIGxldCBtb2JJZENoZWNrID0gJChwaWNrKS5wcm9wKCdpZCcpLFxyXG4gICAgICBwYXN0UG9zID0gJChwaWNrKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5jaGlsZHJlbignLm1vYi1jaGVjay1ob2xkZXInKSxcclxuICAgICAgbGFzdENoaWxkO1xyXG4gICAgaWYgKCQocGljaykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgIGlmICh3YXRjaGVySW4ocGFzdFBvcykpIHtcclxuICAgICAgICBwYXN0UG9zLnByZXBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nICsgbW9iSWRDaGVjayArJz4nICsgcHVsbCArICcsPC9zcGFuPicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhc3RQb3MucHJlcGVuZCgnPHNwYW4gZGF0YS1uYW1lPScgKyBtb2JJZENoZWNrICsgJz4nICsgcHVsbCArICc8L3NwYW4+Jyk7XHJcbiAgICAgIH1cclxuICAgICAgd2F0Y2hlckluKHBhc3RQb3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzdFBvcy5maW5kKCdzcGFuW2RhdGEtbmFtZT0nICsgbW9iSWRDaGVjayArICddJykucmVtb3ZlKCk7XHJcbiAgICAgIHdhdGNoZXJJbihwYXN0UG9zKTtcclxuICAgIH1cclxuICAgIGxhc3RDaGlsZCA9IHBhc3RQb3MuY2hpbGRyZW4oKS5sYXN0KCkuaHRtbCgpO1xyXG4gICAgaWYgKHR5cGVvZiBsYXN0Q2hpbGQgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIGxhc3RDaGlsZCA9IGxhc3RDaGlsZC5yZXBsYWNlKC9bXFxzLiwlXS9nLCAnJyk7XHJcbiAgICAgICBwYXN0UG9zLmNoaWxkcmVuKCkubGFzdCgpLmh0bWwobGFzdENoaWxkKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFNoYWRvdyhlbGVtKSB7XHJcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdtb2Itc2l6ZS1pbml0Jyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiByZW1vdmVTaGFkb3coZWxlbSkge1xyXG4gICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ21vYi1zaXplLWluaXQnKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGlmU2hhZG93KGVsZW0pIHtcclxuICAgIGlmICgkKGVsZW0pLmZpbmQoJ3RhYmxlJykud2lkdGgoKSA+ICQoZWxlbSkucGFyZW50cygnLnBvcHVwX19jb250ZW50Jykub3V0ZXJXaWR0aCgpKSB7XHJcbiAgICAgIGFkZFNoYWRvdyhlbGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbW92ZVNoYWRvdyhlbGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b24oaW5QdXQsIGZvcm0sIGJ0bikge1xyXG4gICAgJChpblB1dCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCcuYWNjZXB0X2NoZWNrJykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICQodGhpcykucGFyZW50cyhmb3JtKS5maW5kKGJ0bikucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKGZvcm0pLmZpbmQoYnRuKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIG9ubHlMZXR0ZXJJbnB1dChpbnRleHQpIHtcclxuICAgIGxldCBqaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGludGV4dCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGppbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBqaW5baV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZiggZS5rZXkubWF0Y2goL1swLTldLykgKSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgIH0pOyBcclxuICAgICAgamluW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bMC05XS9nLCBcIlwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgJCgnLmZlYXR1cmVzX2l0ZW1zIC5zZWFyY2gnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gKDkwMCAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgICAgJCgnaGVhZGVyIC5zZWFyY2gtaGVhZGVyLWxpbmUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgIGlmICgkKCdib2R5PmRpdicpLmhhc0NsYXNzKCdvdmVybGF5JykpIHtcclxuICAgICAgICAkKCcub3ZlcmxheScpLnJlbW92ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJzxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+JykucHJlcGVuZFRvKCdib2R5Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5tZW51X21vYmlsZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbCcpO1xyXG4gICAgICAkKCcuc2VhcmNoLXdyYXBwZXIgLmZvcm0gPiBpbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgfTtcclxuICAgICByZXR1cm4gZmFsc2VcclxuICAgfSk7XHJcbiAgJCgnLnNlYXJjaC1oZWFkZXItbGluZSBzdmcuY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5mZWF0dXJlc19pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbiAgJCgnLmJ1cmdlci1tZW51JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1lbnVfbW9iaWxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1lbnVfbW9iaWxlIC5tb2JpbGUtaGVhZGVyLWNvbnRhaW5lciAuY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubWVudV9tb2JpbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm5hdl93cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm5hdl93cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYmlsZS1tZW51LXdyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubW9iaWxlLW1lbnUtd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gICQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZTtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gIH0pO1xyXG4gICQoJy5wcm9tb19saW5lIHN2ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucGFyZW50KCkuY3NzKCdoZWlnaHQnLCAnMCcpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbiAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XHJcbiAgYWRkUmVtb3ZlQ2xhc3MoJ3NlY3Rpb24uaW5mbyAuaW5mby1tZW51LXdyYXBwZXInLCAnYWNjb3JkaW9uJyk7XHJcbiAgYWRkUmVtb3ZlQ2xhc3NfNzY3KCcuZ2FsbC13cmFwcC1tYWluJywgJ2xvYWQnKTtcclxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gKDkwMCAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgIGluaXRSYW5nZVNsaWRlcignLm1vYi1yYW5nZS1zbGlkZXInLCAnLm1vYi1pbnB1dC1mcm9tJywgJy5tb2ItaW5wdXQtdG8nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5pdFJhbmdlU2xpZGVyKCcuanMtcmFuZ2Utc2xpZGVyJywgJy5qcy1pbnB1dC1mcm9tJywgJy5qcy1pbnB1dC10bycpO1xyXG4gIH1cclxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZFJlbW92ZUNsYXNzKCcuaW5mby1mcmFtZSAuaW5mby1jb250ZW50LXdyYXBwZXI+LnRpdGxlJywnYWNjb3JkaW9uLWJ0bicpO1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3MoJ3NlY3Rpb24uaW5mbyAuY29udGFpbmVyIC5pbmZvLWZyYW1lIC5pbmZvLW1lbnUtd3JhcHBlcicsICdhY2NvcmRpb24nKTtcclxuICAgIGFkZFJlbW92ZUNsYXNzXzc2NygnLmdhbGwtd3JhcHAtbWFpbicsICdsb2FkJyk7XHJcbiAgICBpZlNoYWRvdygnLnBvcHVwLmFjdGl2ZSAuc2l6ZS10YWJsZScpO1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9ICg3NjcgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XHJcbiAgICAgIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzOm5vdCguY2F0YWxvZy1rKSBwJywgJ2N1dC13b3JkJyk7XHJcbiAgICAgIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzLmNhdGFsb2ctayBwJywgJ2NhdGFsb2ctaycpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XHJcbiAgICAgIGluaXRSYW5nZVNsaWRlcignLm1vYi1yYW5nZS1zbGlkZXInLCAnLm1vYi1pbnB1dC1mcm9tJywgJy5tb2ItaW5wdXQtdG8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRSYW5nZVNsaWRlcignLmpzLXJhbmdlLXNsaWRlcicsICcuanMtaW5wdXQtZnJvbScsICcuanMtaW5wdXQtdG8nKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBzbGljZVNlbnRlbmNlKCcuZGlzY3JwdGlvbi1nb29kczpub3QoLmNhdGFsb2ctaykgcCcsICdjdXQtd29yZCcpO1xyXG4gIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzLmNhdGFsb2ctayBwJywgJ2NhdGFsb2ctaycpO1xyXG4gIG1lbnVBY2NvcmRpb25Nb3ZlcigpO1xyXG4gIGFjY0VuZ2luZSgnLnBheW1lbnQtaXRlbXMnKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI3NpZ24taW5cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNyZXNldC1wYXNzXCIpO1xyXG4gIHZhbGlkYXRvckZvcm0oXCIjcmVnaXN0cmF0aW9uLWZvcm1cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNhY2NvdW50LXByZXJzb25hbC1kYXRhXCIpO1xyXG4gIHZhbGlkYXRvckZvcm0oXCIjZmFxRm9ybVwiKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI2NoZWNrb3V0Rm9ybVwiKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI2NvbnRhY3RzX2Zvcm1cIik7XHJcbiAgJCgnLmNsb3NlLXBvcHVwJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xyXG4gIH0pO1xyXG4gICQoJy5mZWF0dXJlc19pdGVtcyAuYXV0b3JpemF0aW9uJykuY2xpY2soZnVuY3Rpb24gKCl7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1zaWduLWluJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbiAgJCgnI3BvcHVwLXNpZ24taW4gLmxpbmtfd3JhcHBlciBhJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXJlc2V0LXBhc3MnKTtcclxuICB9KTtcclxuICAkKCcuY2hvc2UtcG9pbnQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb3BlblBvcFVwKCcjcG9wdXAtZGVsaXZlcnktcG9pbnQnKTtcclxuICB9KTtcclxuICAkKCcubGluay10b19fdGFibGUtc2l6ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXRhYmxlLXNpemUnKTtcclxuICAgIGlmU2hhZG93KCcucG9wdXAuYWN0aXZlIC5zaXplLXRhYmxlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5sYW5nLXdyYXBwZXIgLnNlbGVjdC1sYW5nJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkubGFzdCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaC1saW5lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmhhc0NsYXNzKCdlbnRlcicpKSB7XHJcbiAgICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIi5zdWJfbWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIubWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcyk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcyk7XHJcbiAgIH0pO1xyXG4gICQoXCIuZmVhdHVyZXNfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZEhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9KTtcclxuICBsZXQgaGVpZ2h0SGVhZGVyID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgJCh3aW5kb3cpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCdoZWFkZXInKS5oZWlnaHQoKSA8IGhlaWdodEhlYWRlcikge1xyXG4gICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nJywgJCgnaGVhZGVyJykuaGVpZ2h0KCkgKyAncHgnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBnb1RvQ3VycmVuY3koJy5wcmljZScpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX25ldycpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX29sZCcpO1xyXG4gICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCduby1hY3RpdmUnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIjxkaXYgY2xhc3M9J2xvY2stcG9pbnRlcic+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fd3JhcHBlcicpKSB7XHJcbiAgICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbG9jay1wb2ludGVyJykpIHtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vcmUtbGVzcy1maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrJyk7XHJcbiAgcmVzZXRTZWxlY3QoJy5yZXNldC1zZWxlY3QnKTtcclxuICAkKCcubW9iaWxlLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBvcGVuUG9wVXAoJCh0aGlzKS5uZXh0KCkpO1xyXG4gIH0pO1xyXG4gICQoJy5tb2RhbC1maXRlciAudGl0bGUtZmlsdGVyIHN2ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNsb3NlUG9wVXAoJy5tb2RhbC1maXRlcicpO1xyXG4gIH0pO1xyXG4gICQoJy5tb2ItZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucGFyZW50KCcubW9iLWZpbHRlci1pdGVtcycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gIGxldCBjb3VudCA9IDA7XHJcbiAgICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjaycpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgfVxyXG4gICAgICQoJy5tb2RhbC1yZXNldCBzcGFuJykuaHRtbCgnKCcgKyBjb3VudCArICcpJylcclxuICAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgICAkKCcubW9kYWwtcmVzZXQnKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICAkKCcubW9kYWwtc3VibWl0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICAkKCcubW9kYWwtc3VibWl0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgIH1cclxuICAgfSk7XHJcbiAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG1vYkNoZWNrID0gJCh0aGlzKS5uZXh0KCkuaHRtbCgpLFxyXG4gICAgICBtb2JDaGVja0NvbG9yID0gJCh0aGlzKS5uZXh0KCkuY2hpbGRyZW4oJy5jb2xvci1uYW1lJykuaHRtbCgpO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2NvbG9yJykpIHtcclxuICAgICAgbW9iRmlsdGVyQ2hlY2sodGhpcywgbW9iQ2hlY2tDb2xvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb2JGaWx0ZXJDaGVjayh0aGlzLCBtb2JDaGVjayk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vZGFsLXJlc2V0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICQoJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJy5tb2ItY2hlY2staG9sZGVyJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcclxuICAgIGNvdW50ID0gMDtcclxuICAgICQoJy5tb2RhbC1yZXNldCBzcGFuJykuaHRtbCgnKCcgKyBjb3VudCArICcpJyk7XHJcbiAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAkKCcubW9kYWwtc3VibWl0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgcmVzUHJpY2UoKTtcclxuICAgIHdhdGNoZXJJbigkKCcubW9iLWNoZWNrLWhvbGRlcicpKVxyXG4gIH0pO1xyXG4gIGlmICgkKCcjYnRuLXdhdGNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChjb21lKCcjYnRuLXdhdGNoJykpIHtcclxuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgIH1cclxuICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBtb2JHYWxsU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtd3JhcHAtbWFpbicpLFxyXG4gICAgY2xvc2VHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtY2xvc2UtYnRuJyk7XHJcbiAgaWYgKG1vYkdhbGxTbGlkZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbC13cmFwcC1tYWluJykpIHtcclxuICAgICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpXHJcbiAgICAgICB9IGVsc2UgeyByZXR1cm4gfTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMSwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygyLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygzLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg0LCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg1LCAwKTtcclxuICAgIH0pOyAgXHJcbiAgfSBlbHNlIHsgfTtcclxuICBsZXQgZmF2SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0Jyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYXZJY29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmYXZJY29uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdCcpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICAkKCcuc2l6ZS1ob2xkZXIgLnNpemUtaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc2l6ZS1ob2xkZXIgLnNpemUtaXRlbXMnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY3VycmVudCcpO1xyXG4gIH0pO1xyXG4gICQoJy5hZGQtdG8tZmF2b3JpdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5hZGQtdG8tZmF2b3JpdCcpLnRvZ2dsZUNsYXNzKCdzZWxlY3QnKTtcclxuICB9KTtcclxuICAkKCcuYWRkX3RvX2Zhdm9yaXQnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBsZXQgYnV0dG9uICAgICAgPSAkKGUuY3VycmVudFRhcmdldClcclxuICAgICAgICBsZXQgcHJvZF9pZCAgICAgPSBidXR0b24uZGF0YSgncHJvZHVjdF9pZCcpXHJcbiAgICAgICAgbGV0IG5lZWRfZGVsZXRlID0gKGJ1dHRvbi5oYXNDbGFzcygnc2VsZWN0JykpID8gMSA6IDA7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9sb2NhbC9hamF4L2Zhdm9yaXRlcy5waHAnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGU6IHByb2RfaWQsXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IG5lZWRfZGVsZXRlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5lZWRfZGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkQ2xhc3MoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZGVjcmVhc2UnKS5jbGljayhmdW5jdGlvbiAoZSl7XHJcbiAgICB2YXIgb2xkID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKTtcclxuICAgIGlmIChvbGQgPiAxKXtcclxuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwocGFyc2VJbnQob2xkKSAtIDEpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgJCgnLmluY3JlYXNlJykuY2xpY2soZnVuY3Rpb24gKGUpe1xyXG4gICAgdmFyIG9sZCA9ICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKCk7XHJcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChwYXJzZUludChvbGQpICsgMSk7XHJcbiAgfSlcclxuICAkKCcucG9pbnRzLW5hdiBhJykuY2xpY2soZnVuY3Rpb24gKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLnBvaW50cy1uYXYgYS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgJCgnLnBvaW50cy12aWV3IC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcuJyskKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pXHJcbiAgJCgnLnBvaW50cy1saXN0IC5wb2ludCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKCcucG9pbnRzLWxpc3QgLnBvaW50LnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpXHJcbiAgfSk7XHJcbiAgJCgnc2VsZWN0JykubmljZVNlbGVjdCgpO1xyXG4gICQoJy5maWx0ZXItaXRlbXMgPiAuYm94LWNoZWNrOm5vdCguY29sb3IpJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGNvbnRDaGVjayA9ICQodGhpcykubmV4dCgpLmh0bWwoKSxcclxuICAgICAgICBwaWNJZCA9ICQodGhpcykucHJvcCgnaWQnKTtcclxuICAgIHB1dFRoaXMgPSAkKHRoaXMpLnBhcmVudHMoJy5maWx0ZXItY29udGluZXInKS5jaGlsZHJlbignLmZpbHRlci1hY3RpdmUtd3JhcHBlcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gICAgYWRkRmlsdGVyKHRoaXMsIHBpY0lkLCBjb250Q2hlY2ssIHB1dFRoaXMpO1xyXG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICB9KTtcclxuICAkKCcuZmlsdGVyLWl0ZW1zID4gLmJveC1jaGVjay5jb2xvcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBjb250Q29sb3IgPSAkKHRoaXMpLm5leHQoKS5jaGlsZHJlbignLmNvbG9yLW5hbWUnKS5odG1sKCksXHJcbiAgICAgICAgY29sb3JJZCA9ICQodGhpcykucHJvcCgnaWQnKTtcclxuICAgIHB1dFRoaXNDb2wgPSAkKHRoaXMpLnBhcmVudHMoJy5maWx0ZXItY29udGluZXInKS5jaGlsZHJlbignLmZpbHRlci1hY3RpdmUtd3JhcHBlcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gICAgYWRkRmlsdGVyKHRoaXMsIGNvbG9ySWQsIGNvbnRDb2xvciwgcHV0VGhpc0NvbCk7XHJcbiAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gIH0pO1xyXG4gICQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJykub24oJ2NsaWNrJywgJy5jbG9zZS1maWx0ZXItd3JhcHBlcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgbGV0IGNQYXIgPSAkKHRoaXMpLnBhcmVudHMoJy5hY3RpdmUtaXRlbScpLFxyXG4gICAgICB3YXlDaGVjayA9IGNQYXIuYXR0cignZGF0YS1uYW1lJyksXHJcbiAgICAgIGZpbHRlcldyYXAgPSAkKCcuZmlsdGVyLWNvbnRpbmVyJyksXHJcbiAgICAgIGNsaWNrSW4gPSBmaWx0ZXJXcmFwLmZpbmQoJ2lucHV0W2lkPScgKyB3YXlDaGVjayArICddJyk7XHJcbiAgICBjbGlja0luLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICBjUGFyLnJlbW92ZSgpO1xyXG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICB9KTtcclxuICAkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpLm9uKCdjbGljaycsICcuZmlsdGVyLWFjdGl2ZS1yZXNldC1idG4nLCBmdW5jdGlvbihlKXtcclxuICAgIGxldCBpdGVtUmVtID0gJCgnLmFjdGl2ZS1pdGVtJyksXHJcbiAgICAgICAgZmlsdGVyQ29udCA9ICQoJy5maWx0ZXItY29udGluZXInKTtcclxuICAgIFxyXG4gICAgZmlsdGVyQ29udC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICBpdGVtUmVtLnJlbW92ZSgpO1xyXG4gICAgcmVzUHJpY2UoKTtcclxuICAgIGhhdmVBQ2hpbGQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XHJcbiAgfSk7XHJcbiAgJChcIi53cmFwLWNhbGVuZGFyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBoYXNGb2N1cyA9ICQodGhpcykucHJldigpLmlzKCc6Zm9jdXMnKTtcclxuICAgIGNvbnNvbGUubG9nKGhhc0ZvY3VzKTtcclxuICAgIGlmIChoYXNGb2N1cykge1xyXG4gICAgICAkKHRoaXMpLnByZXYoKS5ibHVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnByZXYoKS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5uZXctcGFzcycpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAwKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ25hbWUnLCAncHN3b3JkJyk7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ3BlcnNvbi1wYXNzJyk7XHJcbiAgICAkKCcuY2hlY2stcGFzcycpLmF0dHIoJ25hbWUnLCAncHN3b3JkX2NvbmZpcm0nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQXR0cignbmFtZScpO1xyXG4gICAgICAkKCcuY2hlY2stcGFzcycpLnJlbW92ZUF0dHIoJ25hbWUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcudmFsaWQtdGVsJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IDApIHtcclxuICAgICAgJCh0aGlzKS5hdHRyKCduYW1lJywgJ3Bob25lX3J1Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCduYW1lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLmNvdW50cmllcyAuc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuY291bnRyaWVzIC5zaG93LWFsbCcpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucm93JykudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xyXG4gIH0pO1xyXG4gIGRpc2FibGVCdXR0b24oXCIuY2hlY2tib3gtbGFiZWxcIiwgXCIuZm9ybVwiLCBcImlucHV0LmFjY2VwdF9idG5cIik7XHJcbiAgZGlzYWJsZUJ1dHRvbihcIi5jaGVja2JveC1sYWJlbFwiLCBcIiNyZWdpc3RyYXRpb24tZm9ybVwiLCBcIi5mb3JtLWFjdGlvbnMgLnN1Ym1pdC1idG5cIik7XHJcbiAgJCgnLnBob25lX21hc2snKS5tYXNrKCcrMCAoMDAwKSAwMDAtMDAtMDAnKTtcclxuICAkKCcuemlwX21hc2snKS5tYXNrKCcwMDAwMDAnKTtcclxuICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAkKCdidXR0b24nKS5hZGRDbGFzcygnbW9iX2NlbnRlcicpXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICgkKCdidXR0b24nKS5oYXNDbGFzcygnbW9iX2NlbnRlcicpKSB7XHJcbiAgICAgICQoJ2J1dHRvbicpLnJlbW92ZUNsYXNzKCdtb2JfY2VudGVyJylcclxuICAgIH07XHJcbiAgfTtcclxuICAkKCcjaW5wdXRfZGF0ZScpLmRhdGVwaWNrZXIoe1xyXG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gIH0pO1xyXG4gIFxyXG4gIG9ubHlMZXR0ZXJJbnB1dCgnLm9ubHlfbGV0dGVyJylcclxuICBcclxuXHJcbiAgXHJcbn07XHJcblxyXG5cclxuIFxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzVxY3lKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2loY0lrUlBUVU52Ym5SbGJuUk1iMkZrWldSY0lpd2dhVzVwZENrN1hISmNibVoxYm1OMGFXOXVJR2x1YVhRb0tTQjdYSEpjYmlBZ0lDQXZLbE5zYVdSbGNpQnpkMmx3WlhJZ2FHVmhaR1Z5SUdKaGJtNWxjaUJ6ZEdGeWRDb3ZYSEpjYmlBZ0lDQnNaWFFnYzNkcGNHVnlRbUZ1Ym1WeUlEMGdibVYzSUZOM2FYQmxjaWduTG5Oc2FXUmxjbDlqYjI1MFlXbHVaWEl1YzNkcGNHVnlMV052Ym5SaGFXNWxjaWNzSUh0Y2NseHVJQ0FnSUNBZ2MzQmhZMlZDWlhSM1pXVnVPaUF6TUN4Y2NseHVJQ0FnSUNBZ2JHOXZjRG9nZEhKMVpTeGNjbHh1SUNBZ0lDQWdZWFYwYjNCc1lYazZJSHRjY2x4dUlDQWdJQ0FnSUNCa1pXeGhlVG9nTXpVd01DeGNjbHh1SUNBZ0lDQWdJQ0JrYVhOaFlteGxUMjVKYm5SbGNtRmpkR2x2YmpvZ1ptRnNjMlVzWEhKY2JpQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lIQmhaMmx1WVhScGIyNDZJSHRjY2x4dUlDQWdJQ0FnSUNCbGJEb2dKeTV6ZDJsd1pYSXRjR0ZuYVc1aGRHbHZiaWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQmpiR2xqYTJGaWJHVTZJSFJ5ZFdVc0lGeHlYRzRnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdJQ0F2S2xOc2FXUmxjaUJ6ZDJsd1pYSWdhR1ZoWkdWeUlHSmhibTVsY2lCbGJtUXFMMXh5WEc1Y2NseHVJQ0FnSUM4cVUyeHBaR1Z5SUhOM2FYQmxjaUJ3Y205a0xYTnNhV1JsY2lCemRHRnlkQ292WEhKY2JpQWdJQ0JzWlhRZ2MzZHBjR1Z5VUhKdlpDQTlJRzVsZHlCVGQybHdaWElvSnk1d2NtOWtMWE5zYVdSbGNpMWpiMjUwWVdsdVpYSXVjM2RwY0dWeUxXTnZiblJoYVc1bGNpY3NJSHRjY2x4dUlDQWdJQ0FnYzNCaFkyVkNaWFIzWldWdU9pQXhOaXhjY2x4dUlDQWdJQ0FnYzJ4cFpHVnpVR1Z5Vm1sbGR6b2dOU3hjY2x4dUlDQWdJQ0FnYzJ4cFpHVnpVR1Z5UjNKdmRYQTZJREVzWEhKY2JpQWdJQ0FnSUM4dklHZHlZV0pEZFhKemIzSTZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lHNWhkbWxuWVhScGIyNDZJSHRjY2x4dUlDQWdJQ0FnSUNCdVpYaDBSV3c2SUNjdWMzZHBjR1Z5TFdKMWRIUnZiaTF1WlhoMEp5eGNjbHh1SUNBZ0lDQWdJQ0J3Y21WMlJXdzZJQ2N1YzNkcGNHVnlMV0oxZEhSdmJpMXdjbVYySnl4Y2NseHVJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdZbkpsWVd0d2IybHVkSE02SUh0Y2NseHVJQ0FnSUNBZ0lDQXdPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjM0JoWTJWQ1pYUjNaV1Z1T2lBMExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOc2FXUmxjMUJsY2xacFpYYzZJREVzWEhKY2JpQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnTXpBd09pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2MzQmhZMlZDWlhSM1pXVnVPaUEwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJSE5zYVdSbGMxQmxjbFpwWlhjNklESXVNRGdzWEhKY2JpQWdJQ0FnSUNBZ0lIMHNYSEpjYmx4MFhIUmNkQ0FnSURNM05Ub2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lITndZV05sUW1WMGQyVmxiam9nTkN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0J6Ykdsa1pYTlFaWEpXYVdWM09pQXlMakE0TEZ4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSURRNE1Eb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lITnNhV1JsYzFCbGNsWnBaWGM2SURJdU5peGNjbHh1SUNBZ0lDQWdJQ0FnSUNCemNHRmpaVUpsZEhkbFpXNDZJRFFzWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnTmpBd09pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2MyeHBaR1Z6VUdWeVZtbGxkem9nTWk0NExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOd1lXTmxRbVYwZDJWbGJqb2dOQ3hjY2x4dUlDQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnTnpZNE9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2MyeHBaR1Z6VUdWeVZtbGxkem9nTkN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0J6Y0dGalpVSmxkSGRsWlc0NklERXdMRnh5WEc0Z0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJREV3TWpRNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUhOc2FXUmxjMUJsY2xacFpYYzZJRFVzWEhKY2JseDBYSFJjZENBZ0lIMHNYSEpjYmx4MFhIUmNkQ0FnSURFek5qWTZJSHRjY2x4dVhIUmNkRngwSUNBZ1hIUnpiR2xrWlhOUVpYSldhV1YzT2lBMUxGeHlYRzVjZEZ4MFhIUWdJQ0I5TEZ4eVhHNWNkRngwSUNCOUxGeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ0x5cFRiR2xrWlhJZ2MzZHBjR1Z5SUhCeWIyUXRjMnhwWkdWeUlHVnVaQ292WEhKY2JpQWdMeXBUYkdsa1pYSWdjM2RwY0dWeUlHZHZiMlJ6TFdOaGNtUWdjM1JoY25RcUwxeHlYRzRnSUd4bGRDQnpkMmx3WlhKSGIyOWtjeUE5SUc1bGR5QlRkMmx3WlhJb0p5NW5ZV3hzWlhKNUxXMXZZaTFqYjI1MFlXbHVaWEl1YzNkcGNHVnlMV052Ym5SaGFXNWxjaWNzSUh0Y2NseHVJQ0FnSUhOd1lXTmxRbVYwZDJWbGJqb2dNekFzWEhKY2JpQWdJQ0JzYjI5d09pQjBjblZsTEZ4eVhHNGdJQ0FnWTJWdWRHVnlaV1JUYkdsa1pYTTZJSFJ5ZFdVc1hISmNiaUFnSUNCaGRYUnZjR3hoZVRvZ2UxeHlYRzRnSUNBZ0lDQmtaV3hoZVRvZ016VXdNQ3hjY2x4dUlDQWdJQ0FnWkdsellXSnNaVTl1U1c1MFpYSmhZM1JwYjI0NklHWmhiSE5sTEZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0FnSUc1aGRtbG5ZWFJwYjI0NklIdGNjbHh1SUNBZ0lDQWdJQ0J1WlhoMFJXdzZJQ2N1YzNkcGNHVnlMV0oxZEhSdmJpMXVaWGgwSnl4Y2NseHVJQ0FnSUNBZ0lDQndjbVYyUld3NklDY3VjM2RwY0dWeUxXSjFkSFJ2Ymkxd2NtVjJKeXhjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0J3WVdkcGJtRjBhVzl1T2lCN1hISmNiaUFnSUNBZ0lHVnNPaUFuTG1kdmIyUnpMWEJoWjJsdVlYUnBiMjRuTEZ4eVhHNGdJQ0FnSUNBZ0lHTnNhV05yWVdKc1pUb2dkSEoxWlN3Z1hISmNiaUFnSUNCOUxGeHlYRzRnSUgwcE8xeHlYRzRnSUM4cVUyeHBaR1Z5SUhOM2FYQmxjaUJuYjI5a2N5MWpZWEprSUdWdVpDb3ZYSEpjYmlBZ1puVnVZM1JwYjI0Z2JXVnVkVUZqWTI5eVpHbHZiazF2ZG1WeUtDa2dlMXh5WEc0Z0lDQWdiR1YwSUdGall5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29YQ0l1WVdOamIzSmthVzl1TFdKMGJsd2lLVHRjY2x4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOakxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUdGalkxdHBYUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRndpWTJ4cFkydGNJaXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyeGhjM05NYVhOMExuUnZaMmRzWlNoY0ltRmpkR2wyWlZ3aUtUdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2NHRnVaV3dnUFNCMGFHbHpMbkJoY21WdWRFVnNaVzFsYm5RdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaenRjY2x4dUlDQWdJQ0FnSUNBZ2FXWWdLSEJoYm1Wc0xuTjBlV3hsTG0xaGVFaGxhV2RvZENZbWNHRnVaV3d1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaFkyTnZjbVJwYjI0bktTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lIQmhibVZzTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUc1MWJHdzdYSEpjYmlBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjR0Z1Wld3dWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ2NHRnVaV3d1YzJOeWIyeHNTR1ZwWjJoMElDc2dYQ0p3ZUZ3aU8xeHlYRzRnSUNBZ0lDQWdJQ0I5SUZ4eVhHNGdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlPeUJjY2x4dUlDQjlPMXh5WEc0Z0lHWjFibU4wYVc5dUlHRmpZMFZ1WjJsdVpTaHdhV05yS1NCN1hISmNiaUFnSUNCc1pYUWdZV05qSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNod2FXTnJLVHRjY2x4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOakxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUdGalkxdHBYUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRndpWTJ4cFkydGNJaXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyeGhjM05NYVhOMExuUnZaMmRzWlNoY0ltRmpkR2wyWlZ3aUtUdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2NHRnVaV3dnUFNCMGFHbHpMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaenRjY2x4dUlDQWdJQ0FnSUNBZ2FXWWdLSEJoYm1Wc0xuTjBlV3hsTG0xaGVFaGxhV2RvZENrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUhCaGJtVnNMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJRzUxYkd3N1hISmNiaUFnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2NHRnVaV3d1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnY0dGdVpXd3VjMk55YjJ4c1NHVnBaMmgwSUNzZ1hDSndlRndpTzF4eVhHNGdJQ0FnSUNBZ0lDQjlJRnh5WEc0Z0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOU95QmNjbHh1SUNCOU8xeHlYRzRnSUdaMWJtTjBhVzl1SUdGa1pGSmxiVzkyWlVOc1lYTnpLR1ZzWlcwc0lHRmtaQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElEdzlJRGt3TUNrZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExtRmtaRU5zWVhOektHRmtaQ2s3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkpsYlc5MlpVTnNZWE56S0dGa1pDazdYSEpjYmlBZ0lDQjlPMXh5WEc0Z0lIMDdYSEpjYmlBZ1puVnVZM1JwYjI0Z1lXUmtVbVZ0YjNabFEyeGhjM05mTnpZM0tHVnNaVzBzSUdGa1pDa2dlMXh5WEc0Z0lDQWdhV1lnS0NRb2QybHVaRzkzS1M1M2FXUjBhQ2dwSUQ0OUlEYzJOeWtnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG1Ga1pFTnNZWE56S0dGa1pDazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuSmxiVzkyWlVOc1lYTnpLR0ZrWkNrN1hISmNiaUFnSUNCOU8xeHlYRzRnSUgwN1hISmNiaUFnWEhKY2JpQWdablZ1WTNScGIyNGdiM0JsYmxCdmNGVndLR1ZzWlcwcElIdGNjbHh1SUNBZ0lDUW9aV3hsYlNrdVlXUmtRMnhoYzNNb0oyRmpkR2wyWlNjcE95QWdYSEpjYmlBZ0lDQWtLQ2RpYjJSNUp5a3VZV1JrUTJ4aGMzTW9KMjF2WkdGc0p5azdYSEpjYmlBZ2ZUdGNjbHh1SUNCbWRXNWpkR2x2YmlCamJHOXpaVkJ2Y0ZWd0tHVnNaVzBwSUh0Y2NseHVJQ0FnSUNRb1pXeGxiU2t1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE95QWdYSEpjYmlBZ0lDQWtLQ2RpYjJSNUp5a3VjbVZ0YjNabFEyeGhjM01vSjIxdlpHRnNKeWs3WEhKY2JpQWdmVHRjY2x4dUlDQnFVWFZsY25rdVpYaDBaVzVrS0dwUmRXVnllUzUyWVd4cFpHRjBiM0l1YldWemMyRm5aWE1zSUh0Y2NseHVJQ0FnSUhKbGNYVnBjbVZrT2lCY0l0Q2YwTDdRdTlDMUlOR1AwTExRdTlHUDBMWFJndEdCMFk4ZzBMN1FzZEdQMExmUXNOR0MwTFhRdTlHTTBMM1JpOUM4WENJc1hISmNiaUFnSUNCeVpXMXZkR1U2SUZ3aTBKL1F2dEM3MExVZzBZL1FzdEM3MFkvUXRkR0MwWUhSanlEUXZ0Q3gwWS9RdDlDdzBZTFF0ZEM3MFl6UXZkR0wwTHhjSWl4Y2NseHVJQ0FnSUdWdFlXbHNPaUJjSXRDUzBMTFF0ZEMwMExqUmd0QzFJTkM2MEw3UmdOR0EwTFhRdXRHQzBMM1JpOUM1SU5HTjBMdlF0ZEM2MFlMUmdOQyswTDNRdmRHTDBMa2cwTERRdE5HQTBMWFJnVndpTEZ4eVhHNGdJSDBwTzF4eVhHNGdJQ1F1ZG1Gc2FXUmhkRzl5TG1Ga1pFMWxkR2h2WkNoY0lrVk5RVWxNWENJc0lHWjFibU4wYVc5dUtIWmhiSFZsTENCbGJHVnRaVzUwS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl3ZEdsdmJtRnNLR1ZzWlcxbGJuUXBJSHg4SUM5ZVcyRXRla0V0V2pBdE9TNWZMVjByUUZ0aExYcEJMVm93TFRrdFhTdGNYQzViWVMxNlFTMWFMbDE3TWl3MWZTUXZhUzUwWlhOMEtIWmhiSFZsS1R0Y2NseHVJQ0I5TENCY0l0Q1MwTExRdGRDMDBMalJndEMxSU5DNjBMN1JnTkdBMExYUXV0R0MwTDNSaTlDNUlOR04wTHZRdGRDNjBZTFJnTkMrMEwzUXZkR0wwTGtnMExEUXROR0EwTFhSZ1Z3aUtUdGNjbHh1SUNCbWRXNWpkR2x2YmlCMllXeHBaR0YwYjNKR2IzSnRLR1ZzWlcwcElIdGNjbHh1SUNBZ0lDUW9aV3hsYlNrdWRtRnNhV1JoZEdVb2UxeHlYRzRnSUNBZ0lDQnlkV3hsY3pvZ2UxeHlYRzRnSUNBZ0lDQWdJSEJ6ZDI5eVpEb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ2NtVnhkV2x5WldRNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQnRhVzVzWlc1bmRHZzZJRFlzWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0JsYldGcGJGOXVPbHdpY21WeGRXbHlaV1FnUlUxQlNVeGNJaXhjY2x4dUlDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ2JXVnpjMkZuWlhNNklIdGNjbHh1SUNBZ0lDQWdJQ0J3YzNkdmNtUTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lHMXBibXhsYm1kMGFEb2dKOUNjMExqUXZkQzQwTHpRc05DNzBZelF2ZEN3MFk4ZzBMVFF1OUM0MEwzUXNDRFF2OUN3MFlEUXZ0QzcwWThnTmlEUmdkQzQwTHpRc3RDKzBMdlF2dEN5SjF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdmU3hjY2x4dUlDQWdJSDBwTzF4eVhHNGdJSDA3WEhKY2JpQWdablZ1WTNScGIyNGdZV1JrU0c5MlpYSW9aV3hsYlNrZ2V5QmNjbHh1SUNBZ0lDUW9aV3hsYlNrdVlXUmtRMnhoYzNNb0oybHVMV2h2ZG1WeUp5azdJRnh5WEc0Z0lIMDdYSEpjYmlBZ1puVnVZM1JwYjI0Z2NtVnRiM1psU0c5MlpYSW9aV3hsYlNrZ2V5QmNjbHh1SUNBZ0lDUW9aV3hsYlNrdWNtVnRiM1psUTJ4aGMzTW9KMmx1TFdodmRtVnlKeWs3SUZ4eVhHNGdJSDA3WEhKY2JpQWdablZ1WTNScGIyNGdaMjlVYjBOMWNuSmxibU41S0dWc1pXMHBJSHRjY2x4dUlDQWdJR3hsZENCdWRXMWlaWEpVYjBadmNtMWhkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWld4bGJTazdYSEpjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYldKbGNsUnZSbTl5YldGMExteGxibWQwYURzZ2FTc3JJQ2tnZTF4eVhHNGdJQ0FnSUNBZ2JHVjBJSFJ2VG5WdFlpQTlJQ3R1ZFcxaVpYSlViMFp2Y20xaGRGdHBYUzVwYm01bGNraFVUVXc3WEhKY2JpQWdJQ0FnSUNCc1pYUWdabTl5YldGMFRuVnRJRDBnYm1WM0lFbHVkR3d1VG5WdFltVnlSbTl5YldGMEtDZHlkUzFTVlNjc0lIc2djM1I1YkdVNklDZGpkWEp5Wlc1amVTY3NJR04xY25KbGJtTjVPaUFuVWxWQ0p5d2diV2x1YVcxMWJVWnlZV04wYVc5dVJHbG5hWFJ6T2lBd0lIMHBMbVp2Y20xaGRDaDBiMDUxYldJcE8xeHlYRzRnSUNBZ0lDQWdiblZ0WW1WeVZHOUdiM0p0WVhSYmFWMHVhVzV1WlhKSVZFMU1JRDBnWm05eWJXRjBUblZ0TzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDA3WEhKY2JpQWdYSEpjYmlBZ1puVnVZM1JwYjI0Z1kyaGxZMnRDYjNoRmJtZHBibVVvWld4bGJTa2dlMXh5WEc0Z0lDQWdiR1YwSUdOdmRXNTBJRDBnTUR0Y2NseHVJQ0FnSUNRb1pXeGxiU2t1WTJoaGJtZGxLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLQ1FvZEdocGN5a3VjSEp2Y0NnblkyaGxZMnRsWkNjcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnWTI5MWJuUXJLenRjY2x4dUlDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNCamIzVnVkQzB0TzF4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lHTm9aV05vUW5SdUtIUm9hWE1zSUdOdmRXNTBLVHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUnpWVzUwYVd3b0p5NWpiMjUwWlc1MExXWnBiSFJsY2ljcExtNWxlSFFvSnk1aWRHNHRkM0poY0hCbGNpY3BMbU5vYVd4a2NtVnVLQ2N1YzNSaGRHVXRjMlZzWldOMEp5a3VZMmhwYkdSeVpXNG9KeTV1ZFcxaUxYTmxiR1ZqZENjcExtTm9hV3hrY21WdUtDZHpjR0Z1SnlrdWFIUnRiQ2hqYjNWdWRDazdYSEpjYmlBZ0lDQjlLVHRjY2x4dUlDQjlPMXh5WEc0Z0lGeHlYRzRnSUdaMWJtTjBhVzl1SUdOb1pXTm9RblJ1S0dWc1pXMHNJR0VwSUh0Y2NseHVJQ0FnSUdsbUlDaGhJRDRnTUNrZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuQmhjbVZ1ZEhOVmJuUnBiQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlKeWt1Ym1WNGRDZ25MbUowYmkxM2NtRndjR1Z5SnlrdVkyaHBiR1J5Wlc0b0p5NW1hV3gwWlhJdFluUnVKeWt1Y21WdGIzWmxRMnhoYzNNb0oyNXZMV0ZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkJoY21WdWRDZ25MbVpwYkhSbGNpMXBkR1Z0Y3ljcExuQmhjbVZ1ZEhOVmJuUnBiQ2duTG1acGJIUmxjaTFwZEdWdGN5Y3BMbkJ5WlhZb0tTNWhaR1JEYkdGemN5Z25jMlZzWldOMEp5azdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuQmhjbVZ1ZEhOVmJuUnBiQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlKeWt1Ym1WNGRDZ25MbUowYmkxM2NtRndjR1Z5SnlrdVkyaHBiR1J5Wlc0b0p5NW1hV3gwWlhJdFluUnVKeWt1WVdSa1EyeGhjM01vSjI1dkxXRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuQmhjbVZ1ZENnbkxtWnBiSFJsY2kxcGRHVnRjeWNwTG5CaGNtVnVkSE5WYm5ScGJDZ25MbVpwYkhSbGNpMXBkR1Z0Y3ljcExuQnlaWFlvS1M1eVpXMXZkbVZEYkdGemN5Z25jMlZzWldOMEp5azdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzRnSUdaMWJtTjBhVzl1SUhKbGMyVjBVMlZzWldOMEtHVnNaVzBzSUdKdmVDa2dlMXh5WEc0Z0lDQWdKQ2hsYkdWdEtTNWpiR2xqYXlobWRXNWpkR2x2YmlBb1pTa2dlMXh5WEc0Z0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JpQWdJQ0FnSUNRb1ltOTRLUzV3Y205d0tDZGphR1ZqYTJWa0p5d2dabUZzYzJVcE8xeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExtNWxlSFFvSnk1dWRXMWlMWE5sYkdWamRDY3BMbU5vYVd4a2NtVnVLQ2R6Y0dGdUp5a3VhSFJ0YkNnd0tUdGNjbHh1SUNBZ0lDQWdZMjkxYm5RZ1BTQXdPMXh5WEc0Z0lDQWdJQ0JqYUdWamFFSjBiaWhpYjNncE8xeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ2ZUdGNjbHh1SUNCbWRXNWpkR2x2YmlCcGJtbDBVbUZ1WjJWVGJHbGtaWElvS1NCN0lGeHlYRzRnSUNBZ2RtRnlJQ1J5WVc1blpTQTlJQ1FvWENJdWFuTXRjbUZ1WjJVdGMyeHBaR1Z5WENJcExGeHlYRzRnSUNBZ0pHbHVjSFYwUm5KdmJTQTlJQ1FvWENJdWFuTXRhVzV3ZFhRdFpuSnZiVndpS1N4Y2NseHVJQ0FnSUNScGJuQjFkRlJ2SUQwZ0pDaGNJaTVxY3kxcGJuQjFkQzEwYjF3aUtTeGNjbHh1SUNBZ0lHbHVjM1JoYm1ObExGeHlYRzRnSUNBZ2JXbHVJRDBnTUN4Y2NseHVJQ0FnSUcxaGVDQTlJREV3TURBd01DeGNjbHh1SUNBZ0lHWnliMjBnUFNBd0xGeHlYRzRnSUNBZ2RHOGdQU0F3TzF4eVhHNGdJQ0FnSkhKaGJtZGxMbWx2YmxKaGJtZGxVMnhwWkdWeUtIdGNjbHh1SUNBZ0lGeDBJQ0J6YTJsdU9pQmNJbkp2ZFc1a1hDSXNYSEpjYmlBZ0lDQWdJQ0FnZEhsd1pUb2dYQ0prYjNWaWJHVmNJaXhjY2x4dUlDQWdJQ0FnSUNCdGFXNDZJRzFwYml4Y2NseHVJQ0FnSUNBZ0lDQnRZWGc2SUcxaGVDeGNjbHh1SUNBZ0lDQWdJQ0JtY205dE9pQXdMRnh5WEc0Z0lDQWdJQ0FnSUhSdk9pQXhNREF3TURBc1hISmNiaUFnSUNBZ0lDQWdiMjVUZEdGeWREb2dkWEJrWVhSbFNXNXdkWFJ6TEZ4eVhHNGdJQ0FnSUNBZ0lHOXVRMmhoYm1kbE9pQjFjR1JoZEdWSmJuQjFkSE5jY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnYVc1emRHRnVZMlVnUFNBa2NtRnVaMlV1WkdGMFlTaGNJbWx2YmxKaGJtZGxVMnhwWkdWeVhDSXBPMXh5WEc0Z0lDQWdablZ1WTNScGIyNGdkWEJrWVhSbFNXNXdkWFJ6SUNoa1lYUmhLU0I3WEhKY2JpQWdJQ0JjZEdaeWIyMGdQU0JrWVhSaExtWnliMjA3WEhKY2JpQWdJQ0FnSUNBZ2RHOGdQU0JrWVhSaExuUnZPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDUnBibkIxZEVaeWIyMHVjSEp2Y0NoY0luWmhiSFZsWENJc0lHWnliMjBwTzF4eVhHNGdJQ0FnSUNBZ0lDUnBibkIxZEZSdkxuQnliM0FvWENKMllXeDFaVndpTENCMGJ5azdYSFJjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQ1JwYm5CMWRFWnliMjB1YjI0b1hDSnBibkIxZEZ3aUxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSFpoYkNBOUlDUW9kR2hwY3lrdWNISnZjQ2hjSW5aaGJIVmxYQ0lwTzF4eVhHNGdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQzh2SUhaaGJHbGtZWFJsWEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkNBOElHMXBiaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd3Z1BTQnRhVzQ3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDJZV3dnUGlCMGJ5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3dnUFNCMGJ6dGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdhVzV6ZEdGdVkyVXVkWEJrWVhSbEtIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1puSnZiVG9nZG1Gc1hISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVJQ0FnSUZ4eVhHNGdJQ0FnSkdsdWNIVjBWRzh1YjI0b1hDSnBibkIxZEZ3aUxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSFpoYkNBOUlDUW9kR2hwY3lrdWNISnZjQ2hjSW5aaGJIVmxYQ0lwTzF4eVhHNGdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQzh2SUhaaGJHbGtZWFJsWEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkNBOElHWnliMjBwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc0lEMGdabkp2YlR0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkNBK0lHMWhlQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd3Z1BTQnRZWGc3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUdsdWMzUmhibU5sTG5Wd1pHRjBaU2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2T2lCMllXeGNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgwcE8xeHlYRzRnSUgwN1hISmNiaUFnS0daMWJtTjBhVzl1S0NRcGUxeHlYRzRnSUNBZ0lDQWdJQ1FvZDJsdVpHOTNLUzV2YmloY0lteHZZV1JjSWl4bWRXNWpkR2x2YmlncGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSkNoY0lpNWtaWE5qYTNSdmNDMW1hV3gwWlhJdFkyOXVkR0ZwYm1WeUlDNWpiMjUwWlc1MExXWnBiSFJsY2lBdVptbHNkR1Z5TFdsMFpXMWNJaWt1YlVOMWMzUnZiVk5qY205c2JHSmhjaWg3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdWdFpUcGNJbTE1TFhSb1pXMWxYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0pDaGNJaTV0YjJKcGJHVXRabWxzZEdWeUxXTnZiblJoYVc1bGNpQXVZMjl1ZEdWdWRDMW1hV3gwWlhJZ0xtMXZZaTFqYUdWamF5MXBkR1Z0WENJcExtMURkWE4wYjIxVFkzSnZiR3hpWVhJb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ2RHaGxiV1U2WENKdGVTMTBhR1Z0WlZ3aVhISmNiaUFnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ1FvWENJdVlXeHNMV3hoYm1jdGFYUmxiVndpS1M1dFEzVnpkRzl0VTJOeWIyeHNZbUZ5S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUhSb1pXMWxPbHdpYlhrdGRHaGxiV1ZjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0I5S1NocVVYVmxjbmtwTzF4eVhHNGdJR1oxYm1OMGFXOXVJR052YldVb1pXeGxiU2tnZTF4eVhHNGdJQ0FnZG1GeUlHUnZZMVpwWlhkVWIzQWdQU0FrS0hkcGJtUnZkeWt1YzJOeWIyeHNWRzl3S0Nrc1hISmNiaUFnSUNBZ0lHUnZZMVpwWlhkQ2IzUjBiMjBnUFNCa2IyTldhV1YzVkc5d0lDc2dKQ2gzYVc1a2IzY3BMbWhsYVdkb2RDZ3BMRnh5WEc0Z0lDQWdJQ0JsYkdWdFZHOXdJRDBnSkNobGJHVnRLUzV2Wm1aelpYUW9LUzUwYjNBc1hISmNiaUFnSUNBZ0lHVnNaVzFDYjNSMGIyMGdQU0JsYkdWdFZHOXdJQ3NnSkNobGJHVnRLUzVvWldsbmFIUW9LVHRjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnS0NobGJHVnRRbTkwZEc5dElEdzlJR1J2WTFacFpYZENiM1IwYjIwcElDWW1JQ2hsYkdWdFZHOXdJRDQ5SUdSdlkxWnBaWGRVYjNBcEtUdGNjbHh1SUNCOVhISmNiaUFnSUNRb0p5NW1aV0YwZFhKbGMxOXBkR1Z0Y3lBdWMyVmhjbU5vSnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRDQ5SURrd01Da2dlMXh5WEc0Z0lDQWdJQ0FrS0Nkb1pXRmtaWElnTG5ObFlYSmphQzFvWldGa1pYSXRiR2x1WlNjcExuUnZaMmRzWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUW9LUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0lDUW9KMkp2WkhrbktTNTBiMmRuYkdWRGJHRnpjeWduYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYVdZZ0tDUW9KMkp2WkhrK1pHbDJKeWt1YUdGelEyeGhjM01vSjI5MlpYSnNZWGtuS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ1FvSnk1dmRtVnliR0Y1SnlrdWNtVnRiM1psS0NrN1hISmNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdKQ2duUEdScGRpQmpiR0Z6Y3oxY0ltOTJaWEpzWVhsY0lqNDhMMlJwZGo0bktTNXdjbVZ3Wlc1a1ZHOG9KMkp2WkhrbktUdGNjbHh1SUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdKQ2duTG0xbGJuVmZiVzlpYVd4bEp5a3VZV1JrUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FrS0NkaWIyUjVKeWt1WVdSa1EyeGhjM01vSjIxdlpHRnNKeWs3WEhKY2JpQWdJQ0FnSUNRb0p5NXpaV0Z5WTJndGQzSmhjSEJsY2lBdVptOXliU0ErSUdsdWNIVjBKeWt1Wm05amRYTW9LVHRjY2x4dUlDQWdJQ0I5TzF4eVhHNGdJQ0FnSUhKbGRIVnliaUJtWVd4elpWeHlYRzRnSUNCOUtUdGNjbHh1SUNBa0tDY3VjMlZoY21Ob0xXaGxZV1JsY2kxc2FXNWxJSE4yWnk1amJHOXpaU2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNRb0oyaGxZV1JsY2lBdWMyVmhjbU5vTFdobFlXUmxjaTFzYVc1bEp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSkNnbkxtWmxZWFIxY21WelgybDBaVzF6SnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdKQ2duWW05a2VTY3BMbkpsYlc5MlpVTnNZWE56S0NkdGIyUmhiQ2NwTzF4eVhHNGdJQ0FnSkNnbkxtOTJaWEpzWVhrbktTNXlaVzF2ZG1Vb0tUdGNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3VZblZ5WjJWeUxXMWxiblVuS1M1amJHbGpheWhtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBa0tDY3ViV1Z1ZFY5dGIySnBiR1VuS1M1aFpHUkRiR0Z6Y3lnbllXTjBhWFpsSnlrN0lDQmNjbHh1SUNBZ0lDUW9KMkp2WkhrbktTNWhaR1JEYkdGemN5Z25iVzlrWVd3bktUdGNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3ViV1Z1ZFY5dGIySnBiR1VnTG0xdlltbHNaUzFvWldGa1pYSXRZMjl1ZEdGcGJtVnlJQzVqYkc5elpTY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ1FvSnk1dFpXNTFYMjF2WW1sc1pTY3BMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNRb0oySnZaSGtuS1M1eVpXMXZkbVZEYkdGemN5Z25iVzlrWVd3bktUdGNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3VibUYyWDNkeVlYQndaWElnTG0xbGJuVWdMbTFsYm5WZmFYUmxiWE1uS1M1amJHbGpheWhtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBa0tDY3VibUYyWDNkeVlYQndaWElnTG0xbGJuVWdMbTFsYm5WZmFYUmxiWE1uS1M1eVpXMXZkbVZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWtLSFJvYVhNcExtRmtaRU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3ViVzlpYVd4bExXMWxiblV0ZDNKaGNIQmxjaUF1YldWdWRTQXViV1Z1ZFY5cGRHVnRjeWNwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNRb0p5NXRiMkpwYkdVdGJXVnVkUzEzY21Gd2NHVnlJQzV0Wlc1MUlDNXRaVzUxWDJsMFpXMXpKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0pDaDBhR2x6S1M1aFpHUkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxtMXZZbDl6ZFdKZmJXVnVkVjlwZEdWdGN5Y3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR2xtSUNna0tDY3ViVzlpWDNOMVlsOXRaVzUxWDJsMFpXMXpKeWt1YUdGelEyeGhjM01vSjJGamRHbDJaU2NwS1NCN1hISmNiaUFnSUNBZ0lDUW9KeTV0YjJKZmMzVmlYMjFsYm5WZmFYUmxiWE1uS1M1eVpXMXZkbVZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ1FvZEdocGN5a3VZV1JrUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdmU0JsYkhObE8xeHlYRzRnSUNBZ2FXWWdLQ1FvZEdocGN5a3VhR0Z6UTJ4aGMzTW9KMkZqZEdsMlpTY3BLU0I3WEhKY2JpQWdJQ0FnSUNRb2RHaHBjeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1aFpHUkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNCOU8xeHlYRzRnSUNBZ1hISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxuQnliMjF2WDJ4cGJtVWdjM1puSnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblFvS1M1amMzTW9KMmhsYVdkb2RDY3NJQ2N3SnlrN1hISmNiaUFnSUNBa0tIUm9hWE1wTG5CaGNtVnVkQ2dwTG1OemN5Z25kbWx6YVdKcGJHbDBlU2NzSUNkb2FXUmtaVzRuS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0JoWkdSU1pXMXZkbVZEYkdGemN5Z25MbWx1Wm04dFpuSmhiV1VnTG1sdVptOHRZMjl1ZEdWdWRDMTNjbUZ3Y0dWeVBpNTBhWFJzWlNjc0oyRmpZMjl5WkdsdmJpMWlkRzRuS1R0Y2NseHVJQ0JoWkdSU1pXMXZkbVZEYkdGemN5Z25jMlZqZEdsdmJpNXBibVp2SUM1cGJtWnZMVzFsYm5VdGQzSmhjSEJsY2ljc0lDZGhZMk52Y21ScGIyNG5LVHRjY2x4dUlDQmhaR1JTWlcxdmRtVkRiR0Z6YzE4M05qY29KeTVuWVd4c0xYZHlZWEJ3TFcxaGFXNG5MQ0FuYkc5aFpDY3BPMXh5WEc0Z0lDUW9kMmx1Wkc5M0tTNXlaWE5wZW1Vb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdZV1JrVW1WdGIzWmxRMnhoYzNNb0p5NXBibVp2TFdaeVlXMWxJQzVwYm1adkxXTnZiblJsYm5RdGQzSmhjSEJsY2o0dWRHbDBiR1VuTENkaFkyTnZjbVJwYjI0dFluUnVKeWs3WEhKY2JpQWdJQ0JoWkdSU1pXMXZkbVZEYkdGemN5Z25jMlZqZEdsdmJpNXBibVp2SUM1amIyNTBZV2x1WlhJZ0xtbHVabTh0Wm5KaGJXVWdMbWx1Wm04dGJXVnVkUzEzY21Gd2NHVnlKeXdnSjJGalkyOXlaR2x2YmljcE8xeHlYRzRnSUNBZ2JXVnVkVUZqWTI5eVpHbHZiazF2ZG1WeUtDazdYSEpjYmlBZ0lDQmhaR1JTWlcxdmRtVkRiR0Z6YzE4M05qY29KeTVuWVd4c0xYZHlZWEJ3TFcxaGFXNG5MQ0FuYkc5aFpDY3BPMXh5WEc0Z0lIMHBPMXh5WEc0Z0lHMWxiblZCWTJOdmNtUnBiMjVOYjNabGNpZ3BPMXh5WEc0Z0lHRmpZMFZ1WjJsdVpTZ25MbUZqWXkxdmNHVnVKeWs3WEhKY2JpQWdablZ1WTNScGIyNGdjMnhwWTJWVFpXNTBaVzVqWlNoeExDQnpaVzUwWlc1alpTa2dlMXh5WEc0Z0lDQWdiR1YwSUhOcGVtVWdQU0J4TEZ4eVhHNGdJQ0FnSUNCdVpYZHpRMjl1ZEdWdWRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29jMlZ1ZEdWdVkyVXBPMXh5WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1WlhkelEyOXVkR1Z1ZEM1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0JwWmlBb2JtVjNjME52Ym5SbGJuUmJhVjB1YVc1dVpYSklWRTFNTG14bGJtZDBhQ0ErSUhOcGVtVXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ1hIUnVaWGR6UTI5dWRHVnVkRnRwWFM1cGJtNWxja2hVVFV3Z1BTQnVaWGR6UTI5dWRHVnVkRnRwWFM1cGJtNWxja2hVVFV3dWMyeHBZMlVvTUN3Z2MybDZaU2tnS3lBbklDNHVMaWM3WEhKY2JpQWdJQ0FnSUgwN1hISmNiaUFnSUNCOU8xeHlYRzRnSUgwN0lDQWdJRnh5WEc0Z0lDQWdhV1lnS0NRb2QybHVaRzkzS1M1M2FXUjBhQ2dwSUR3OUlETTFOeWtnZTF4eVhHNGdJQ0FnSUNCemJHbGpaVk5sYm5SbGJtTmxLRE0wTENBbkxtUnBjMk55Y0hScGIyNHRaMjl2WkhNdGN5QStJSEFuS1R0Y2NseHVJQ0FnSUNBZ2MyeHBZMlZUWlc1MFpXNWpaU2d6TXl3Z0p5NWthWE5qY25CMGFXOXVMV2R2YjJSeklENGdjQ2NwT3lCY2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdWc2MyVWdhV1lnS0NRb2QybHVaRzkzS1M1M2FXUjBhQ2dwSUR3OUlEUTRNQ0FtSmlBa0tIZHBibVJ2ZHlrdWQybGtkR2dvS1NBK1BTQXpOVGNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnpiR2xqWlZObGJuUmxibU5sS0RNNExDQW5MbVJwYzJOeWNIUnBiMjR0WjI5dlpITXRjeUErSUhBbktUdGNjbHh1SUNBZ0lDQWdJQ0J6YkdsalpWTmxiblJsYm1ObEtETXpMQ0FuTG1ScGMyTnljSFJwYjI0dFoyOXZaSE1nUGlCd0p5azdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdjMnhwWTJWVFpXNTBaVzVqWlNneU55d2dKeTVrYVhOamNuQjBhVzl1TFdkdmIyUnpMWE1nUGlCd0p5azdYSEpjYmlBZ0lDQWdJQ0J6YkdsalpWTmxiblJsYm1ObEtETXpMQ0FuTG1ScGMyTnljSFJwYjI0dFoyOXZaSE1nUGlCd0p5azdJRnh5WEc0Z0lDQWdmVHRjY2x4dUlDQmNjbHh1SUNCMllXeHBaR0YwYjNKR2IzSnRLRndpSTNOcFoyNHRhVzVjSWlrN1hISmNiaUFnZG1Gc2FXUmhkRzl5Um05eWJTaGNJaU55WlhObGRDMXdZWE56WENJcE8xeHlYRzRnSUNRb0p5NWpiRzl6WlMxd2IzQjFjQ2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUdOc2IzTmxVRzl3VlhBb0p5NXdiM0IxY0M1aFkzUnBkbVVuS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdVptVmhkSFZ5WlhOZmFYUmxiWE1nTG1GMWRHOXlhWHBoZEdsdmJpY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BlMXh5WEc0Z0lDQWdiM0JsYmxCdmNGVndLQ2NqY0c5d2RYQXRjMmxuYmkxcGJpY3BPMXh5WEc0Z0lIMHBPMXh5WEc0Z0lDUW9KeU53YjNCMWNDMXphV2R1TFdsdUlDNXNhVzVyWDNkeVlYQndaWElnWVNjcExtTnNhV05yS0daMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ0lDQmpiRzl6WlZCdmNGVndLQ2N1Y0c5d2RYQXVZV04wYVhabEp5azdYSEpjYmlBZ0lDQnZjR1Z1VUc5d1ZYQW9KeU53YjNCMWNDMXlaWE5sZEMxd1lYTnpKeWs3WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG14aGJtY3RkM0poY0hCbGNpQXVjMlZzWldOMExXeGhibWNuS1M1amJHbGpheWhtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0pDaDBhR2x6S1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdKQ2gwYUdsektTNWphR2xzWkhKbGJpZ3BMbXhoYzNRb0tTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdmU2xjY2x4dUlDQWtLQ2N1YldWdWRWOXRiMkpwYkdVZ0xuTmxZWEpqYUMxc2FXNWxKeWt1WTJoaGJtZGxLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUdsbUlDZ2tLSFJvYVhNcExuWmhiQ2dwTG14bGJtZDBhQ0ErSURBcElIdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNWhaR1JEYkdGemN5Z25aVzUwWlhJbktUdGNjbHh1SUNBZ0lDQWdKQ2duTG0xbGJuVmZiVzlpYVd4bElDNXpaV0Z5WTJnbktTNWhaR1JEYkdGemN5Z25aVzUwWlhJbktUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lHbG1JQ2drS0NjdWJXVnVkVjl0YjJKcGJHVWdMbk5sWVhKamFDY3BMbWhoYzBOc1lYTnpLQ2RsYm5SbGNpY3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25MbTFsYm5WZmJXOWlhV3hsSUM1elpXRnlZMmduS1M1eVpXMXZkbVZEYkdGemN5Z25aVzUwWlhJbktUdGNjbHh1SUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbkpsYlc5MlpVTnNZWE56S0NkbGJuUmxjaWNwTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymx4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnZlNrN1hISmNiaUFnSkNoY0lpNXpkV0pmYldWdWRWOXBkR1Z0Y3lBK0lHRmNJaWt1YUc5MlpYSW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnWVdSa1NHOTJaWElvZEdocGN5NXdZWEpsYm5SRmJHVnRaVzUwS1R0Y2NseHVJQ0I5TENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQnlaVzF2ZG1WSWIzWmxjaWgwYUdsekxuQmhjbVZ1ZEVWc1pXMWxiblFwTzF4eVhHNGdJSDBwTzF4eVhHNGdJQ1FvWENJdWJXVnVkVjlwZEdWdGN5QStJR0ZjSWlrdWFHOTJaWElvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ1lXUmtTRzkyWlhJb2RHaHBjeWs3WEhKY2JpQWdmU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ2NtVnRiM1psU0c5MlpYSW9kR2hwY3lrN1hISmNiaUFnSUgwcE8xeHlYRzRnSUNRb1hDSXVabVZoZEhWeVpYTmZhWFJsYlhNZ1BpQmhYQ0lwTG1odmRtVnlLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUdGa1pFaHZkbVZ5S0hSb2FYTXVjR0Z5Wlc1MFJXeGxiV1Z1ZENrN1hISmNiaUFnZlN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdjbVZ0YjNabFNHOTJaWElvZEdocGN5NXdZWEpsYm5SRmJHVnRaVzUwS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0JzWlhRZ2FHVnBaMmgwU0dWaFpHVnlJRDBnSkNnbmFHVmhaR1Z5SnlrdWFHVnBaMmgwS0NrN1hISmNiaUFnSkNoM2FXNWtiM2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUdsbUlDZ2tLQ2RvWldGa1pYSW5LUzVvWldsbmFIUW9LU0E4SUdobGFXZG9kRWhsWVdSbGNpa2dlMXh5WEc0Z0lDQWdJQ0FrS0NkdFlXbHVKeWt1WTNOektDZHdZV1JrYVc1bkp5d2dKQ2duYUdWaFpHVnlKeWt1YUdWcFoyaDBLQ2tnS3lBbmNIZ25LVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlLVHRjY2x4dUlDQm5iMVJ2UTNWeWNtVnVZM2tvSnk1d2NtbGpaU2NwTzF4eVhHNGdJR2R2Vkc5RGRYSnlaVzVqZVNnbkxuQnlhV05sWDI1bGR5Y3BPMXh5WEc0Z0lHZHZWRzlEZFhKeVpXNWplU2duTG5CeWFXTmxYMjlzWkNjcE8xeHlYRzRnSUNRb0p5NWtaWE5qYTNSdmNDMW1hV3gwWlhJdFkyOXVkR0ZwYm1WeUlDNW1hV3gwWlhJdGFHVmhaR1Z5SnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ2FXWWdLQ0VrS0hSb2FYTXBMbWhoYzBOc1lYTnpLQ2RoWTNScGRtVW5LU2tnZTF4eVhHNGdJQ0FnSUNBa0tDY3VaR1Z6WTJ0MGIzQXRabWxzZEdWeUxXTnZiblJoYVc1bGNpQXVabWxzZEdWeUxXaGxZV1JsY2ljcExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSkNnbkxtUmxjMk5yZEc5d0xXWnBiSFJsY2kxamIyNTBZV2x1WlhJZ0xtWnBiSFJsY2kxb1pXRmtaWEluS1M1dVpYaDBLQ2t1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLQ2N1Ykc5amF5MXdiMmx1ZEdWeUp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQWdJR2xtSUNna0tIUm9hWE1wTG1oaGMwTnNZWE56S0NkdWJ5MWhZM1JwZG1VbktTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1SUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbUZrWkVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSUNBa0tIUm9hWE1wTG01bGVIUW9LUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSUNBZ0pDaGNJanhrYVhZZ1kyeGhjM005SjJ4dlkyc3RjRzlwYm5SbGNpYytQQzlrYVhZK1hDSXBMbUZ3Y0dWdVpGUnZLRndpWW05a2VWd2lLVHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSkNnbkxteHZZMnN0Y0c5cGJuUmxjaWNwTG5KbGJXOTJaU2dwTzF4eVhHNGdJQ0FnSUNBa0tIUm9hWE1wTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXVaWGgwS0NrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMHBPMXh5WEc0Z0lDUW9aRzlqZFcxbGJuUXBMbU5zYVdOcktHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0JwWmlBb1pTNTBZWEpuWlhRdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZHdiM0IxY0Y5ZmQzSmhjSEJsY2ljcEtTQjdYSEpjYmlBZ0lDQWdJR05zYjNObFVHOXdWWEFvSnk1d2IzQjFjQzVoWTNScGRtVW5LVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlLVHRjY2x4dUlDQWtLR1J2WTNWdFpXNTBLUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9aU2tnZTF4eVhHNGdJQ0FnYVdZZ0tHVXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25iRzlqYXkxd2IybHVkR1Z5SnlrcElIdGNjbHh1SUNBZ0lDQWdKQ2duTG1acGJIUmxjaTFvWldGa1pYSW5LUzV5WlcxdmRtVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0lDUW9KeTVtYVd4MFpYSXRhR1ZoWkdWeUp5a3VibVY0ZENncExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSkNnbkxteHZZMnN0Y0c5cGJuUmxjaWNwTG5KbGJXOTJaU2dwTzF4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNobExuUmhjbWRsZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyOTJaWEpzWVhrbktTa2dlMXh5WEc0Z0lDQWdJQ0FrS0Nkb1pXRmtaWElnTG5ObFlYSmphQzFvWldGa1pYSXRiR2x1WlNjcExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSkNnbkxtWmxZWFIxY21WelgybDBaVzF6SnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FrS0NkaWIyUjVKeWt1Y21WdGIzWmxRMnhoYzNNb0oyMXZaR0ZzSnlrN1hISmNiaUFnSUNBZ0lDUW9KeTV2ZG1WeWJHRjVKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG0xdmNtVXRiR1Z6Y3kxbWFXeDBaWEluS1M1amJHbGpheWhtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBa0tIUm9hWE1wTG5SdloyZHNaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDUW9kR2hwY3lrdVkyaHBiR1J5Wlc0b0tTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0JwWmlBb0pDaDBhR2x6S1M1b1lYTkRiR0Z6Y3lnbllXTjBhWFpsSnlrcElIdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5Rb0tTNWhaR1JEYkdGemN5Z25iM0JsYmljcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblFvS1M1eVpXMXZkbVZEYkdGemN5Z25iM0JsYmljcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgwcE8xeHlYRzRnSUdsdWFYUlNZVzVuWlZOc2FXUmxjaWdwTzF4eVhHNGdJR05vWldOclFtOTRSVzVuYVc1bEtDY3VZbTk0TFdOb1pXTnJMbk5wZW1VbktUdGNjbHh1SUNCamFHVmphMEp2ZUVWdVoybHVaU2duTG1KdmVDMWphR1ZqYXk1amIyeHZjaWNwTzF4eVhHNGdJR05vWldOclFtOTRSVzVuYVc1bEtDY3VZbTk0TFdOb1pXTnJMbU5oZEY5bUp5azdYSEpjYmlBZ1kyaGxZMnRDYjNoRmJtZHBibVVvSnk1aWIzZ3RZMmhsWTJzdVluSmhibVFuS1R0Y2NseHVJQ0JqYUdWamEwSnZlRVZ1WjJsdVpTZ25MbUp2ZUMxamFHVmpheTV0WVhSbGNtbGhiQ2NwTzF4eVhHNGdJR05vWldOclFtOTRSVzVuYVc1bEtDY3VZbTk0TFdOb1pXTnJMbWduS1R0Y2NseHVJQ0J5WlhObGRGTmxiR1ZqZENnbkxtTnZiblJsYm5RdFptbHNkR1Z5TG5OcGVtVWdMbkpsYzJWeUxYTmxiR1ZqZENjc0lDY3VZbTk0TFdOb1pXTnJMbk5wZW1VbktUdGNjbHh1SUNCeVpYTmxkRk5sYkdWamRDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUxtTnZiRzl5SUM1eVpYTmxjaTF6Wld4bFkzUW5MQ0FuTG1KdmVDMWphR1ZqYXk1amIyeHZjaWNwTzF4eVhHNGdJSEpsYzJWMFUyVnNaV04wS0NjdVkyOXVkR1Z1ZEMxbWFXeDBaWEl1WTJGMFgyWWdMbkpsYzJWeUxYTmxiR1ZqZENjc0lDY3VZbTk0TFdOb1pXTnJMbU5oZEY5bUp5azdYSEpjYmlBZ2NtVnpaWFJUWld4bFkzUW9KeTVqYjI1MFpXNTBMV1pwYkhSbGNpNWljbUZ1WkNBdWNtVnpaWEl0YzJWc1pXTjBKeXdnSnk1aWIzZ3RZMmhsWTJzdVluSmhibVFuS1R0Y2NseHVJQ0J5WlhObGRGTmxiR1ZqZENnbkxtTnZiblJsYm5RdFptbHNkR1Z5TG0xaGRHVnlhV0ZzSUM1eVpYTmxjaTF6Wld4bFkzUW5MQ0FuTG1KdmVDMWphR1ZqYXk1dFlYUmxjbWxoYkNjcE8xeHlYRzRnSUhKbGMyVjBVMlZzWldOMEtDY3VZMjl1ZEdWdWRDMW1hV3gwWlhJdWFDQXVjbVZ6WlhJdGMyVnNaV04wSnl3Z0p5NWliM2d0WTJobFkyc3VhQ2NwTzF4eVhHNGdJQ1FvSnk1dGIySnBiR1V0Wm1sc2RHVnlMV052Ym5SaGFXNWxjaUF1Wm1sc2RHVnlMV2hsWVdSbGNpY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJRzl3Wlc1UWIzQlZjQ2drS0hSb2FYTXBMbTVsZUhRb0tTazdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbTF2WkdGc0xXWnBkR1Z5SUM1MGFYUnNaUzFtYVd4MFpYSWdjM1puSnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ1kyeHZjMlZRYjNCVmNDZ25MbTF2WkdGc0xXWnBkR1Z5SnlrN1hISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxtMXZZaTFtYVd4MFpYSXRhR1ZoWkdWeUp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdKQ2gwYUdsektTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FrS0hSb2FYTXBMbkJoY21WdWRDZ3BMblJ2WjJkc1pVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0JjY2x4dUlDQnNaWFFnWTI5MWJuUWdQU0F3TzF4eVhHNGdJQ0FrS0NjdWJXOWlMV05vWldOckxXbDBaVzF6SUM1aWIzZ3RZMmhsWTJzbktTNWphR0Z1WjJVb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0JwWmlBb0pDaDBhR2x6S1M1d2NtOXdLQ2RqYUdWamEyVmtKeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQmpiM1Z1ZENzck8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJR052ZFc1MExTMDdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FrS0NjdWJXOWtZV3d0Y21WelpYUWdjM0JoYmljcExtaDBiV3dvSnlnbklDc2dZMjkxYm5RZ0t5QW5LU2NwWEhKY2JpQWdJQ0FnYVdZZ0tHTnZkVzUwSUQ0Z01Da2dlMXh5WEc0Z0lDQWdJQ0FnSkNnbkxtMXZaR0ZzTFhKbGMyVjBKeWt1Y21WdGIzWmxRMnhoYzNNb0oyNXZMV0ZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FnSkNnbkxtMXZaR0ZzTFhOMVltMXBkQ2NwTG5KbGJXOTJaVU5zWVhOektDZHVieTFoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSkNnbkxtMXZaR0ZzTFhKbGMyVjBKeWt1WVdSa1EyeGhjM01vSjI1dkxXRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWdKQ2duTG0xdlpHRnNMWE4xWW0xcGRDY3BMbUZrWkVOc1lYTnpLQ2R1YnkxaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNCOVhISmNiaUFnSUgwcE8xeHlYRzRnSUNRb0p5NXRiMkl0WTJobFkyc3RhWFJsYlhNZ0xtSnZlQzFqYUdWamF6cHViM1FvTG1OdmJHOXlLU2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUdsbUlDZ2tLSFJvYVhNcExuQnliM0FvSjJOb1pXTnJaV1FuS1NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUnpLQ2N1Ylc5aUxXWnBiSFJsY2kxcGRHVnRjeWNwTG1Ob2FXeGtjbVZ1S0NjdWJXOWlMV1pwYkhSbGNpMW9aV0ZrWlhJbktTNWhjSEJsYm1Rb0p6eHpjR0Z1SUdSaGRHRXRibUZ0WlQwbkt5QWtLSFJvYVhNcExtNWxlSFFvS1M1b2RHMXNLQ2tySno0b0p5QXJJQ1FvZEdocGN5a3VibVY0ZENncExtaDBiV3dvS1NBcklDY3BQQzl6Y0dGdVBpY3BPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FrS0hSb2FYTXBMbkJoY21WdWRITW9KeTV0YjJJdFptbHNkR1Z5TFdsMFpXMXpKeWt1WTJocGJHUnlaVzRvSnk1dGIySXRabWxzZEdWeUxXaGxZV1JsY2ljcExtWnBibVFvSjNOd1lXNWJaR0YwWVMxdVlXMWxQU2NySkNoMGFHbHpLUzV1WlhoMEtDa3VhSFJ0YkNncEt5ZGRKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0FnSUgxY2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdWJXOWtZV3d0Y21WelpYUW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FrS0NjdWJXOWlMV05vWldOckxXbDBaVzF6SUM1aWIzZ3RZMmhsWTJzbktTNXdjbTl3S0NkamFHVmphMlZrSnl3Z1ptRnNjMlVwTzF4eVhHNGdJQ0FnSkNnbkxtMXZZaTFtYVd4MFpYSXRhR1ZoWkdWeUp5a3VabWx1WkNnbmMzQmhiaWNwTG5KbGJXOTJaU2dwTzF4eVhHNGdJQ0FnWTI5MWJuUWdQU0F3TzF4eVhHNGdJQ0FnSkNnbkxtMXZaR0ZzTFhKbGMyVjBJSE53WVc0bktTNW9kRzFzS0Njb0p5QXJJR052ZFc1MElDc2dKeWtuS1R0Y2NseHVJQ0FnSUNRb0p5NXRiMlJoYkMxeVpYTmxkQ2NwTG1Ga1pFTnNZWE56S0NkdWJ5MWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDUW9KeTV0YjJSaGJDMXpkV0p0YVhRbktTNWhaR1JEYkdGemN5Z25ibTh0WVdOMGFYWmxKeWs3WEhKY2JseHlYRzRnSUgwcE8xeHlYRzRnSUdsbUlDZ2tLQ2NqWW5SdUxYZGhkR05vSnlrdWJHVnVaM1JvSUQ0Z01Da2dlMXh5WEc0Z0lDQWdJQ1FvWkc5amRXMWxiblFwTG5OamNtOXNiQ2htZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lHbG1JQ2hqYjIxbEtDY2pZblJ1TFhkaGRHTm9KeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdKQ2duTG5CeVpYWnBaWGN0YUdWaFpHVnlMV2R2YjJSekp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWtLQ2N1Y0hKbGRtbGxkeTFvWldGa1pYSXRaMjl2WkhNbktTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5bGNjbHh1SUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0I5S1R0Y2NseHVJQ0I5TzF4eVhHNGdJRnh5WEc0Z0lHeGxkQ0J0YjJKSFlXeHNVMnhwWkdWeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtZGhiR3d0ZDNKaGNIQXRiV0ZwYmljcExGeHlYRzRnSUNBZ1kyeHZjMlZIWVd4c1pYSjVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbWRoYkd3dFkyeHZjMlV0WW5SdUp5azdYSEpjYmlBZ2FXWWdLRzF2WWtkaGJHeFRiR2xrWlhJcElIdGNjbHh1SUNBZ0lDQWdaRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9aU2tnZTF4eVhHNGdJQ0FnSUNBZ2FXWWdLR1V1ZEdGeVoyVjBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWjJGc2JDMTNjbUZ3Y0MxdFlXbHVKeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJRzF2WWtkaGJHeFRiR2xrWlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmIzQmxiaWNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUXVZbTlrZVM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkdGIyUmhiQ2NwWEhKY2JpQWdJQ0FnSUNCOUlHVnNjMlVnZXlCeVpYUjFjbTRnZlR0Y2NseHVJQ0FnSUgwcE8xeHlYRzRnSUNBZ1kyeHZjMlZIWVd4c1pYSjVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNCdGIySkhZV3hzVTJ4cFpHVnlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMjl3Wlc0bktUdGNjbHh1SUNBZ0lDQWdaRzlqZFcxbGJuUXVZbTlrZVM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkdGIyUmhiQ2NwTzF4eVhHNGdJQ0FnZlNrN1hISmNiaUFnSUNCY2NseHVJQ0FnSUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU56Ykdsa1pTMHhKeWt1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaUFvWlNrZ2UxeHlYRzRnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ0lDQWdJRzF2WWtkaGJHeFRiR2xrWlhJdVkyeGhjM05NYVhOMExtRmtaQ2duYjNCbGJpY3BPMXh5WEc0Z0lDQWdJQ0JrYjJOMWJXVnVkQzVpYjJSNUxtTnNZWE56VEdsemRDNWhaR1FvSjIxdlpHRnNKeWs3WEhKY2JpQWdJQ0FnSUhOM2FYQmxja2R2YjJSekxuTnNhV1JsVkc4b01Td2dNQ2s3WEhKY2JpQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTNOc2FXUmxMVEluS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQWdJQ0FnYlc5aVIyRnNiRk5zYVdSbGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkdmNHVnVKeWs3WEhKY2JpQWdJQ0FnSUdSdlkzVnRaVzUwTG1KdlpIa3VZMnhoYzNOTWFYTjBMbUZrWkNnbmJXOWtZV3duS1R0Y2NseHVJQ0FnSUNBZ2MzZHBjR1Z5UjI5dlpITXVjMnhwWkdWVWJ5Z3lMQ0F3S1R0Y2NseHVJQ0FnSUgwcE8xeHlYRzRnSUNBZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTNOc2FXUmxMVE1uS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQWdJQ0FnYlc5aVIyRnNiRk5zYVdSbGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkdmNHVnVKeWs3WEhKY2JpQWdJQ0FnSUdSdlkzVnRaVzUwTG1KdlpIa3VZMnhoYzNOTWFYTjBMbUZrWkNnbmJXOWtZV3duS1R0Y2NseHVJQ0FnSUNBZ2MzZHBjR1Z5UjI5dlpITXVjMnhwWkdWVWJ5Z3pMQ0F3S1R0Y2NseHVJQ0FnSUgwcE8xeHlYRzRnSUNBZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTNOc2FXUmxMVFFuS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQWdJQ0FnYlc5aVIyRnNiRk5zYVdSbGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkdmNHVnVKeWs3WEhKY2JpQWdJQ0FnSUdSdlkzVnRaVzUwTG1KdlpIa3VZMnhoYzNOTWFYTjBMbUZrWkNnbmJXOWtZV3duS1R0Y2NseHVJQ0FnSUNBZ2MzZHBjR1Z5UjI5dlpITXVjMnhwWkdWVWJ5ZzBMQ0F3S1R0Y2NseHVJQ0FnSUgwcE8xeHlYRzRnSUNBZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTNOc2FXUmxMVFVuS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQWdJQ0FnYlc5aVIyRnNiRk5zYVdSbGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkdmNHVnVKeWs3WEhKY2JpQWdJQ0FnSUdSdlkzVnRaVzUwTG1KdlpIa3VZMnhoYzNOTWFYTjBMbUZrWkNnbmJXOWtZV3duS1R0Y2NseHVJQ0FnSUNBZ2MzZHBjR1Z5UjI5dlpITXVjMnhwWkdWVWJ5ZzFMQ0F3S1R0Y2NseHVJQ0FnSUgwcE95QWdYSEpjYmlBZ2ZTQmxiSE5sSUhzZ2NtVjBkWEp1SUgwN1hISmNibjA3WEhKY2JseHlYRzVjY2x4dUlDSmRMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlmUT09XHJcbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
