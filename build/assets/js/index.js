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
  function validatorForm(elem) {
    $(elem).validate({
      rules: {
        psword: {
          required: true,
          minlength: 6,
        },
        psword_confirm: {
          required: true,
          minlength: 6,
          equalTo : "psword",
        },
        email_n:"required EMAIL",
      },
      messages: {
        psword: {
          minlength: 'Минимальная длина пароля 6 символов'
        },
        psword_confirm: {
          equalTo: "Пароли не совпадают",
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
  function sliceSentence(elem) {
    $(elem).each(function (index, value) {
      if ($(this).outerHeight() > $(this).parent().height()) {
        $(this).parent().addClass('cut-word')
      } else {
        if ($(this).parent().hasClass('cut-word')) {
          $(this).parent().removeClass('cut-word');
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
    if ($(window).width() <= (767 - withScrollBar())) {
      sliceSentence('.discrption-goods:not(.catalog-k) p');
    }
    if ($(window).width() <= (900 - withScrollBar())) {
      initRangeSlider('.mob-range-slider', '.mob-input-from', '.mob-input-to');
    } else {
      initRangeSlider('.js-range-slider', '.js-input-from', '.js-input-to');
    }
  });
  
  sliceSentence('.discrption-goods:not(.catalog-k) p');
  menuAccordionMover();
  accEngine('.payment-items');
  validatorForm("#sign-in");
  validatorForm("#reset-pass");
  validatorForm("#registration-form");
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
  $('.chose-point').click(function (e){
    e.preventDefault();
    openPopUp('#popup-delivery-point');
  })
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

};


 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMzUwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xyXG5cclxuICAgIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgICAgIH0sXHJcblx0XHRcdCAgIDM3NToge1xyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdCAgIH0sXHJcblx0XHRcdCAgIDEzNjY6IHtcclxuXHRcdFx0ICAgXHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHQgICB9LFxyXG5cdFx0ICB9LFxyXG4gICAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXHJcbiAgZnVuY3Rpb24gbWVudUFjY29yZGlvbk1vdmVyKCkge1xyXG4gICAgbGV0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJ0blwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCYmcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFjY0VuZ2luZShwaWNrKSB7XHJcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwaWNrKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFJlbW92ZUNsYXNzKGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDkwMCkge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3NfNzY3KGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDc2Nykge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb3BlblBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjbG9zZVBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBqUXVlcnkuZXh0ZW5kKGpRdWVyeS52YWxpZGF0b3IubWVzc2FnZXMsIHtcclxuICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1INGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C8XCIsXHJcbiAgICByZW1vdGU6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIGVtYWlsOiBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiLFxyXG4gIH0pO1xyXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIkVNQUlMXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aLl17Miw1fSQvaS50ZXN0KHZhbHVlKTtcclxuICB9LCBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0b3JGb3JtKGVsZW0pIHtcclxuICAgICQoZWxlbSkudmFsaWRhdGUoe1xyXG4gICAgICBydWxlczoge1xyXG4gICAgICAgIHBzd29yZDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbF9uOlwicmVxdWlyZWQgRU1BSUxcIixcclxuICAgICAgfSxcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwc3dvcmQ6IHtcclxuICAgICAgICAgIG1pbmxlbmd0aDogJ9Cc0LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8gNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gcmVtb3ZlSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gZ29Ub0N1cnJlbmN5KGVsZW0pIHtcclxuICAgIGxldCBudW1iZXJUb0Zvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclRvRm9ybWF0Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgbGV0IHRvTnVtYiA9ICtudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUw7XHJcbiAgICAgICBsZXQgZm9ybWF0TnVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnUlVCJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pLmZvcm1hdCh0b051bWIpO1xyXG4gICAgICAgbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MID0gZm9ybWF0TnVtO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2hlY2tCb3hFbmdpbmUoZWxlbSkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICB9XHJcbiAgICAgIGNoZWNoQnRuKHRoaXMsIGNvdW50KTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzVW50aWwoJy5jb250ZW50LWZpbHRlcicpLm5leHQoJy5idG4td3JhcHBlcicpLmNoaWxkcmVuKCcuc3RhdGUtc2VsZWN0JykuY2hpbGRyZW4oJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbChjb3VudCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNoZWNoQnRuKGVsZW0sIGEpIHtcclxuICAgIGlmIChhID4gMCkge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5hZGRDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0KGVsZW0sIGJveCkge1xyXG4gICAgJChlbGVtKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoYm94KS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAkKGVsZW0pLm5leHQoJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgwKTtcclxuICAgICAgY291bnQgPSAwO1xyXG4gICAgICBjaGVjaEJ0bihib3gpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBpbml0UmFuZ2VTbGlkZXIoKSB7IFxyXG4gICAgdmFyICRyYW5nZSA9ICQoXCIuanMtcmFuZ2Utc2xpZGVyXCIpLFxyXG4gICAgJGlucHV0RnJvbSA9ICQoXCIuanMtaW5wdXQtZnJvbVwiKSxcclxuICAgICRpbnB1dFRvID0gJChcIi5qcy1pbnB1dC10b1wiKSxcclxuICAgIGluc3RhbmNlLFxyXG4gICAgbWluID0gMCxcclxuICAgIG1heCA9IDEwMDAwMCxcclxuICAgIGZyb20gPSAwLFxyXG4gICAgdG8gPSAwO1xyXG4gICAgJHJhbmdlLmlvblJhbmdlU2xpZGVyKHtcclxuICAgIFx0ICBza2luOiBcInJvdW5kXCIsXHJcbiAgICAgICAgdHlwZTogXCJkb3VibGVcIixcclxuICAgICAgICBtaW46IG1pbixcclxuICAgICAgICBtYXg6IG1heCxcclxuICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgIHRvOiAxMDAwMDAsXHJcbiAgICAgICAgb25TdGFydDogdXBkYXRlSW5wdXRzLFxyXG4gICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVJbnB1dHNcclxuICAgIH0pO1xyXG4gICAgaW5zdGFuY2UgPSAkcmFuZ2UuZGF0YShcImlvblJhbmdlU2xpZGVyXCIpO1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRzIChkYXRhKSB7XHJcbiAgICBcdGZyb20gPSBkYXRhLmZyb207XHJcbiAgICAgICAgdG8gPSBkYXRhLnRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRpbnB1dEZyb20ucHJvcChcInZhbHVlXCIsIGZyb20pO1xyXG4gICAgICAgICRpbnB1dFRvLnByb3AoXCJ2YWx1ZVwiLCB0byk7XHRcclxuICAgIH1cclxuICAgICRpbnB1dEZyb20ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IG1pbikge1xyXG4gICAgICAgICAgICB2YWwgPSBtaW47XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiB0bykge1xyXG4gICAgICAgICAgICB2YWwgPSB0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogdmFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJGlucHV0VG8ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IGZyb20pIHtcclxuICAgICAgICAgICAgdmFsID0gZnJvbTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG1heCkge1xyXG4gICAgICAgICAgICB2YWwgPSBtYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHRvOiB2YWxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgKGZ1bmN0aW9uKCQpe1xyXG4gICAgICAgICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAuZmlsdGVyLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLm1vYi1jaGVjay1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuYWxsLWxhbmctaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICB9KShqUXVlcnkpO1xyXG4gIGZ1bmN0aW9uIGNvbWUoZWxlbSkge1xyXG4gICAgdmFyIGRvY1ZpZXdUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxyXG4gICAgICBlbGVtVG9wID0gJChlbGVtKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgIGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgJChlbGVtKS5oZWlnaHQoKTtcclxuXHJcbiAgICByZXR1cm4gKChlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20pICYmIChlbGVtVG9wID49IGRvY1ZpZXdUb3ApKTtcclxuICB9XHJcbiAgICQoJy5mZWF0dXJlc19pdGVtcyAuc2VhcmNoJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDkwMCkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9kYWwnKTtcclxuICAgICAgaWYgKCQoJ2JvZHk+ZGl2JykuaGFzQ2xhc3MoJ292ZXJsYXknKSkge1xyXG4gICAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5zZWFyY2gtd3JhcHBlciAuZm9ybSA+IGlucHV0JykuZm9jdXMoKTtcclxuICAgICB9O1xyXG4gICAgIHJldHVybiBmYWxzZVxyXG4gICB9KTtcclxuICAkKCcuc2VhcmNoLWhlYWRlci1saW5lIHN2Zy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICB9KTtcclxuICAkKCcuYnVyZ2VyLW1lbnUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7ICBcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubWVudV9tb2JpbGUgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIC5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tZW51X21vYmlsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubW9iaWxlLW1lbnUtd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfSk7XHJcbiAgJCgnLnByb21vX2xpbmUgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsICcwJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICB9KTtcclxuICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsJ2FjY29yZGlvbi1idG4nKTtcclxuICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5pbmZvLW1lbnUtd3JhcHBlcicsICdhY2NvcmRpb24nKTtcclxuICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gICAgbWVudUFjY29yZGlvbk1vdmVyKCk7XHJcbiAgICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gIH0pO1xyXG4gIG1lbnVBY2NvcmRpb25Nb3ZlcigpO1xyXG4gIGFjY0VuZ2luZSgnLmFjYy1vcGVuJyk7XHJcbiAgZnVuY3Rpb24gc2xpY2VTZW50ZW5jZShxLCBzZW50ZW5jZSkge1xyXG4gICAgbGV0IHNpemUgPSBxLFxyXG4gICAgICBuZXdzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VudGVuY2UpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobmV3c0NvbnRlbnRbaV0uaW5uZXJIVE1MLmxlbmd0aCA+IHNpemUpIHtcclxuICAgICAgICAgXHRuZXdzQ29udGVudFtpXS5pbm5lckhUTUwgPSBuZXdzQ29udGVudFtpXS5pbm5lckhUTUwuc2xpY2UoMCwgc2l6ZSkgKyAnIC4uLic7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07ICAgIFxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDM1Nykge1xyXG4gICAgICBzbGljZVNlbnRlbmNlKDM0LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgzMywgJy5kaXNjcnB0aW9uLWdvb2RzID4gcCcpOyBcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCAmJiAkKHdpbmRvdykud2lkdGgoKSA+PSAzNTcpIHtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDM4LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgc2xpY2VTZW50ZW5jZSgyNywgJy5kaXNjcnB0aW9uLWdvb2RzLXMgPiBwJyk7XHJcbiAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7IFxyXG4gICAgfTtcclxuICBcclxuICB2YWxpZGF0b3JGb3JtKFwiI3NpZ24taW5cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNyZXNldC1wYXNzXCIpO1xyXG4gICQoJy5jbG9zZS1wb3B1cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcuZmVhdHVyZXNfaXRlbXMgLmF1dG9yaXphdGlvbicpLmNsaWNrKGZ1bmN0aW9uICgpe1xyXG4gICAgb3BlblBvcFVwKCcjcG9wdXAtc2lnbi1pbicpO1xyXG4gIH0pO1xyXG4gICQoJyNwb3B1cC1zaWduLWluIC5saW5rX3dyYXBwZXIgYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1yZXNldC1wYXNzJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmxhbmctd3JhcHBlciAuc2VsZWN0LWxhbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmxhc3QoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSlcclxuICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaC1saW5lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmhhc0NsYXNzKCdlbnRlcicpKSB7XHJcbiAgICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIi5zdWJfbWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIubWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcyk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcyk7XHJcbiAgIH0pO1xyXG4gICQoXCIuZmVhdHVyZXNfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZEhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9KTtcclxuICBsZXQgaGVpZ2h0SGVhZGVyID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgJCh3aW5kb3cpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCdoZWFkZXInKS5oZWlnaHQoKSA8IGhlaWdodEhlYWRlcikge1xyXG4gICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nJywgJCgnaGVhZGVyJykuaGVpZ2h0KCkgKyAncHgnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBnb1RvQ3VycmVuY3koJy5wcmljZScpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX25ldycpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX29sZCcpO1xyXG4gICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCduby1hY3RpdmUnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIjxkaXYgY2xhc3M9J2xvY2stcG9pbnRlcic+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fd3JhcHBlcicpKSB7XHJcbiAgICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbG9jay1wb2ludGVyJykpIHtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vcmUtbGVzcy1maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGluaXRSYW5nZVNsaWRlcigpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLnNpemUnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmgnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLnNpemUgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLnNpemUnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLmNvbG9yIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuY2F0X2YgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5icmFuZCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLm1hdGVyaWFsIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuaCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suaCcpO1xyXG4gICQoJy5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5Qb3BVcCgkKHRoaXMpLm5leHQoKSk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vZGFsLWZpdGVyIC50aXRsZS1maWx0ZXIgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY2xvc2VQb3BVcCgnLm1vZGFsLWZpdGVyJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBcclxuICBsZXQgY291bnQgPSAwO1xyXG4gICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgIH1cclxuICAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpXHJcbiAgICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9XHJcbiAgIH0pO1xyXG4gICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjazpub3QoLmNvbG9yKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5hcHBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nKyAkKHRoaXMpLm5leHQoKS5odG1sKCkrJz4oJyArICQodGhpcykubmV4dCgpLmh0bWwoKSArICcpPC9zcGFuPicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5tb2ItZmlsdGVyLWl0ZW1zJykuY2hpbGRyZW4oJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJ3NwYW5bZGF0YS1uYW1lPScrJCh0aGlzKS5uZXh0KCkuaHRtbCgpKyddJykucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAkKCcubW9kYWwtcmVzZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuZmluZCgnc3BhbicpLnJlbW92ZSgpO1xyXG4gICAgY291bnQgPSAwO1xyXG4gICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKTtcclxuICAgICQoJy5tb2RhbC1yZXNldCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICQoJy5tb2RhbC1zdWJtaXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG4gIGlmICgkKCcjYnRuLXdhdGNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChjb21lKCcjYnRuLXdhdGNoJykpIHtcclxuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgIH1cclxuICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBtb2JHYWxsU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtd3JhcHAtbWFpbicpLFxyXG4gICAgY2xvc2VHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtY2xvc2UtYnRuJyk7XHJcbiAgaWYgKG1vYkdhbGxTbGlkZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbC13cmFwcC1tYWluJykpIHtcclxuICAgICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpXHJcbiAgICAgICB9IGVsc2UgeyByZXR1cm4gfTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMSwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygyLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygzLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg0LCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg1LCAwKTtcclxuICAgIH0pOyAgXHJcbiAgfSBlbHNlIHsgcmV0dXJuIH07XHJcbn07XHJcblxyXG5cclxuICJdLCJmaWxlIjoiaW5kZXguanMifQ==

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8qU2xpZGVyIHN3aXBlciBoZWFkZXIgYmFubmVyIHN0YXJ0Ki9cbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xuXG4gICAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIHN0YXJ0Ki9cbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAvLyBncmFiQ3Vyc29yOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICB9LFxuICAgICAgICAzMDA6IHtcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxuICAgICAgICAgfSxcblx0XHRcdCAgIDM3NToge1xuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXG4gICAgICAgIH0sXG4gICAgICAgICA0ODA6IHtcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi42LFxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgIH0sXG4gICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgICB9LFxuICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICB9LFxuICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcblx0XHRcdCAgIH0sXG5cdFx0XHQgICAxMzY2OiB7XG5cdFx0XHQgICBcdHNsaWRlc1BlclZpZXc6IDUsXG5cdFx0XHQgICB9LFxuXHRcdCAgfSxcbiAgICB9KTtcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIHN0YXJ0Ki9cbiAgbGV0IHN3aXBlckdvb2RzID0gbmV3IFN3aXBlcignLmdhbGxlcnktbW9iLWNvbnRhaW5lci5zd2lwZXItY29udGFpbmVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsIFxuICAgIH0sXG4gIH0pO1xuICAvKlNsaWRlciBzd2lwZXIgZ29vZHMtY2FyZCBlbmQqL1xuICBmdW5jdGlvbiB3aXRoU2Nyb2xsQmFyKCkge1xuICAgIGxldCBwb3BXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICBsZXQgd1Njcm9sbCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcG9wV3JhcC5vZmZzZXRXaWR0aDtcbiAgICAgcmV0dXJuIHdTY3JvbGw7XG4gIH1cbiAgZnVuY3Rpb24gbWVudUFjY29yZGlvbk1vdmVyKCkge1xuICAgIGxldCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1idG5cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCYmcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb24nKSkge1xuICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgfSBcbiAgICAgICB9KTtcbiAgICB9OyBcbiAgfTtcbiAgZnVuY3Rpb24gYWNjRW5naW5lKHBpY2spIHtcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwaWNrKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykgeyAgICBcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgfSBcbiAgICAgICB9KTtcbiAgICB9OyBcbiAgfTtcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3MoZWxlbSwgYWRkKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBhZGRSZW1vdmVDbGFzc183NjcoZWxlbSwgYWRkKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49ICg3NjcgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcbiAgICB9O1xuICB9O1xuICBcbiAgZnVuY3Rpb24gb3BlblBvcFVwKGVsZW0pIHtcbiAgICBsZXQgd1Njcm9sTyA9IHdpdGhTY3JvbGxCYXIoKTtcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdhY3RpdmUnKTsgIFxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcbiAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXJpZ2h0Jywgd1Njcm9sTyk7XG4gICAgJCgnaGVhZGVyJykuY3NzKCdwYWRkaW5nLXJpZ2h0Jywgd1Njcm9sTyk7XG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdwYWRkaW5nLXJpZ2h0Jywgd1Njcm9sTyk7XG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAtd1Njcm9sTyk7XG4gIH07XG4gIGZ1bmN0aW9uIGNsb3NlUG9wVXAoZWxlbSkge1xuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAgXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xuICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcbiAgICAkKCdoZWFkZXIgLnByb21vX2xpbmUnKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcbiAgICAkKCdoZWFkZXIgLnByb21vX2xpbmUnKS5jc3MoJ21hcmdpbi1yaWdodCcsIDApO1xuICB9O1xuICBqUXVlcnkuZXh0ZW5kKGpRdWVyeS52YWxpZGF0b3IubWVzc2FnZXMsIHtcbiAgICByZXF1aXJlZDogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxuICAgIHJlbW90ZTogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxuICAgIGVtYWlsOiBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiLFxuICB9KTtcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiRU1BSUxcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aLl17Miw1fSQvaS50ZXN0KHZhbHVlKTtcbiAgfSwgXCLQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDRjdC70LXQutGC0YDQvtC90L3Ri9C5INCw0LTRgNC10YFcIik7XG4gIGZ1bmN0aW9uIHZhbGlkYXRvckZvcm0oZWxlbSkge1xuICAgICQoZWxlbSkudmFsaWRhdGUoe1xuICAgICAgcnVsZXM6IHtcbiAgICAgICAgcHN3b3JkOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgbWlubGVuZ3RoOiA2LFxuICAgICAgICB9LFxuICAgICAgICBwc3dvcmRfY29uZmlybToge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIG1pbmxlbmd0aDogNixcbiAgICAgICAgICBlcXVhbFRvIDogXCJwc3dvcmRcIixcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxfbjpcInJlcXVpcmVkIEVNQUlMXCIsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgcHN3b3JkOiB7XG4gICAgICAgICAgbWlubGVuZ3RoOiAn0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyA2INGB0LjQvNCy0L7Qu9C+0LInXG4gICAgICAgIH0sXG4gICAgICAgIHBzd29yZF9jb25maXJtOiB7XG4gICAgICAgICAgZXF1YWxUbzogXCLQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YJcIixcbiAgICAgICAgICBtaW5sZW5ndGg6ICfQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPIDYg0YHQuNC80LLQvtC70L7QsidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgZnVuY3Rpb24gYWRkSG92ZXIoZWxlbSkgeyBcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdpbi1ob3ZlcicpOyBcbiAgfTtcbiAgZnVuY3Rpb24gcmVtb3ZlSG92ZXIoZWxlbSkgeyBcbiAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCdpbi1ob3ZlcicpOyBcbiAgfTtcbiAgZnVuY3Rpb24gZ29Ub0N1cnJlbmN5KGVsZW0pIHtcbiAgICBsZXQgbnVtYmVyVG9Gb3JtYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyVG9Gb3JtYXQubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgbGV0IHRvTnVtYiA9ICtudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUw7XG4gICAgICAgbGV0IGZvcm1hdE51bSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnLCB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1JVQicsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KS5mb3JtYXQodG9OdW1iKTtcbiAgICAgICBudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUwgPSBmb3JtYXROdW07XG4gICAgfVxuICB9O1xuICBcbiAgZnVuY3Rpb24gY2hlY2tCb3hFbmdpbmUoZWxlbSkge1xuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBzZWxlY3RDaGVjayA9ICQodGhpcykucGFyZW50cygnLmNvbnRlbnQtZmlsdGVyJykuZmluZCgnLm51bWItc2VsZWN0IHNwYW4nKSxcbiAgICAgICAgbnVtU2VsZWN0ZWQgPSArc2VsZWN0Q2hlY2suaHRtbCgpO1xuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgIG51bVNlbGVjdGVkKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobnVtU2VsZWN0ZWQgPiAwKSB7XG4gICAgICAgICAgbnVtU2VsZWN0ZWQtLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1TZWxlY3RlZCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoZWNoQnRuKHRoaXMsIG51bVNlbGVjdGVkKTtcbiAgICAgIHNlbGVjdENoZWNrLmh0bWwobnVtU2VsZWN0ZWQpO1xuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBjaGVjaEJ0bihlbGVtLCBhKSB7XG4gICAgbGV0IHBhckJ0biA9ICQoZWxlbSkucGFyZW50c1VudGlsKCcuY29udGVudC1maWx0ZXInKS5uZXh0KCcuYnRuLXdyYXBwZXInKS5jaGlsZHJlbignLmZpbHRlci1idG4nKSxcbiAgICAgICAgZkl0ZW0gPSAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKTtcbiAgICBpZiAoYSA+IDApIHtcbiAgICAgIHBhckJ0bi5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgICBmSXRlbS5hZGRDbGFzcygnc2VsZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhckJ0bi5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgICBmSXRlbS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0KGVsZW0pIHtcbiAgICAkKGVsZW0pLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgYm94SW4gPSAkKHRoaXMpLnBhcmVudHMoJy5jb250ZW50LWZpbHRlcicpLmZpbmQoJy5ib3gtY2hlY2snKSxcbiAgICAgICAgbnVtU2VsZWN0ID0gJCh0aGlzKS5uZXh0KCcubnVtYi1zZWxlY3QnKS5jaGlsZHJlbignc3BhbicpLFxuICAgICAgICBjb3VudFNlbCA9ICtudW1TZWxlY3QuaHRtbCgpO1xuICAgICAgJChib3hJbikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIGF0cmJ0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJykuZmluZCgnZGl2W2RhdGEtbmFtZT0nICsgYXRyYnQgKyAnXScpLnJlbW92ZSgpO1xuICAgICAgICAgIGhhdmVBQ2hpbGQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XG4gICAgICAgICAgJCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgIGNvdW50U2VsLS07XG4gICAgICAgICAgbnVtU2VsZWN0Lmh0bWwoY291bnRTZWwpO1xuICAgICAgICAgIGNoZWNoQnRuKCQodGhpcyksIGNvdW50U2VsKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH07XG4gIGxldCBpbnN0YW5jZTtcbiAgZnVuY3Rpb24gaW5pdFJhbmdlU2xpZGVyKHNsaWQsIGlucHV0MSwgaW5wdXQyKSB7IFxuICAgIHZhciAkcmFuZ2UgPSAkKHNsaWQpLFxuICAgICAgJGlucHV0RnJvbSA9ICQoaW5wdXQxKSxcbiAgICAgICRpbnB1dFRvID0gJChpbnB1dDIpLFxuICAgICAgXG4gICAgICBtaW4gPSAwLFxuICAgICAgbWF4ID0gMTAwMDAwLFxuICAgICAgZnJvbSA9IDAsXG4gICAgICB0byA9IDA7XG4gICAgJHJhbmdlLmlvblJhbmdlU2xpZGVyKHtcbiAgICBcdCAgc2tpbjogXCJyb3VuZFwiLFxuICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICBtaW46IG1pbixcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgIGZyb206IDAsXG4gICAgICAgIHRvOiAxMDAwMDAsXG4gICAgICAgIG9uU3RhcnQ6IHVwZGF0ZUlucHV0cyxcbiAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUlucHV0cyxcbiAgICAgICAgb25GaW5pc2g6IHVwZGF0ZUlucHV0c1xuICAgICAgICBcbiAgICB9KTtcbiAgICBpbnN0YW5jZSA9ICRyYW5nZS5kYXRhKFwiaW9uUmFuZ2VTbGlkZXJcIik7XG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRzKGRhdGEpIHtcbiAgICAgIGZyb20gPSBkYXRhLmZyb207XG4gICAgICB0byA9IGRhdGEudG87XG4gICAgICBpZiAoZnJvbSAhPT0gbWluIHx8IHRvICE9PSBtYXgpIHtcbiAgICAgICAgJCgnLmZpbHRlci1oZWFkZXIucmFuZ2UnKS5hZGRDbGFzcygnc2VsZWN0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5maWx0ZXItaGVhZGVyLnJhbmdlJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xuICAgICAgfVxuICAgICAgICAkaW5wdXRGcm9tLnByb3AoXCJ2YWx1ZVwiLCByTnVtYmVyKGZyb20pKTtcbiAgICAgICAgJGlucHV0VG8ucHJvcChcInZhbHVlXCIsIHJOdW1iZXIodG8pKTtcbiAgICB9XG4gICAgJGlucHV0RnJvbS5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnByb3AoXCJ2YWx1ZVwiKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgaWYgKCt2YWwgPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuICRpbnB1dEZyb20ucHJvcChcInZhbHVlXCIsIHJOdW1iZXIobWF4KSk7XG4gICAgICB9XG4gICAgICAgJGlucHV0RnJvbS5wcm9wKFwidmFsdWVcIiwgdmFsLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiIFwiKSk7XG4gICAgICAgXG4gICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgIGlmICh2YWwgPCBtaW4pIHtcbiAgICAgICAgICAgIHZhbCA9IG1pbjtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiB0bykge1xuICAgICAgICAgICAgdmFsID0gdG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBpbnN0YW5jZS51cGRhdGUoe1xuICAgICAgICBmcm9tOiB2YWxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICAgICRpbnB1dFRvLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICBpZiAoK3ZhbCA+IG1heCkge1xuICAgICAgICByZXR1cm4gJGlucHV0VG8ucHJvcChcInZhbHVlXCIsIHJOdW1iZXIobWF4KSk7XG4gICAgICB9XG4gICAgICAkaW5wdXRUby5wcm9wKFwidmFsdWVcIiwgdmFsLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiIFwiKSk7XG4gICAgICAgIFxuICAgICAgICAvLyB2YWxpZGF0ZVxuICAgICAgICBpZiAodmFsIDwgZnJvbSkge1xuICAgICAgICAgICAgdmFsID0gZnJvbTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbCA9IG1heDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcbiAgICAgICAgICAgIHRvOiB2YWxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIHJOdW1iZXIoZWxlbSl7XG4gICAgcmV0dXJuIFN0cmluZyhlbGVtKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiBcIik7XG4gIH07XG4gIChmdW5jdGlvbigkKXtcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChcIi5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAuZmlsdGVyLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJChcIi5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLm1vYi1jaGVjay1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoXCIuYWxsLWxhbmctaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKFwiLnBvaW50cy1saXN0X19vdXR0ZXJcIikubUN1c3RvbVNjcm9sbGJhcih7XG4gICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKFwiLmFjY291bnQtb3JkZXJzX19uYXZfX3Zhciwuc2l6ZS10YWJsZVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIixcbiAgICAgICAgICAgIGF4aXM6IFwieFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgIH0pO1xuICB9KShqUXVlcnkpO1xuICBmdW5jdGlvbiBjb21lKGVsZW0pIHtcbiAgICB2YXIgZG9jVmlld1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgZWxlbVRvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wLFxuICAgICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyAkKGVsZW0pLmhlaWdodCgpO1xuXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBkb2NWaWV3VG9wKSk7XG4gIH07XG4gIGZ1bmN0aW9uIHNsaWNlU2VudGVuY2UoZWxlbSkge1xuICAgICQoZWxlbSkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICBpZiAoJCh0aGlzKS5vdXRlckhlaWdodCgpID4gJCh0aGlzKS5wYXJlbnQoKS5oZWlnaHQoKSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdjdXQtd29yZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnY3V0LXdvcmQnKSkge1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2N1dC13b3JkJyk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiByZXNQcmljZSgpIHtcbiAgICBpbnN0YW5jZS5yZXNldCgpO1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAoOTAwIC0gd2l0aFNjcm9sbEJhcigpKSkge1xuICAgICAgJCgnLmpzLWlucHV0LWZyb20nKS52YWwoJzAnKTtcbiAgICAgICQoJy5qcy1pbnB1dC10bycpLnZhbCgnMTAwIDAwMCcpO1xuICAgICAgJCgnLmZpbHRlci1oZWFkZXIucmFuZ2UnKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tb2ItaW5wdXQtZnJvbScpLnZhbCgnMCcpO1xuICAgICAgJCgnLm1vYi1pbnB1dC10bycpLnZhbCgnMTAwIDAwMCcpO1xuICAgICAgJCgnLmZpbHRlci1oZWFkZXIucmFuZ2UnKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XG4gICAgfVxuICAgIFxuICB9O1xuICBmdW5jdGlvbiBhZGRGaWx0ZXIoZWxlbSwgX2lkLCBjb250ZW50LCBwYXN0KSB7XG4gICAgaWYgKCQoZWxlbSkucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgIHBhc3QuYXBwZW5kKFxuICAgICAgICAnPGRpdiBkYXRhLW5hbWU9JyArIF9pZCArICcgY2xhc3M9XCJhY3RpdmUtaXRlbVwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJuYW1lLWZpbHRlclwiPicgKyBjb250ZW50ICsgJzwvc3Bhbj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjbG9zZS1maWx0ZXItd3JhcHBlclwiPicgK1xuICAgICAgICAgICc8c3ZnIGNsYXNzPVwiY2xvc2UtZmlsdGVyXCI+JyArXG4gICAgICAgICAgICAnPHVzZSBocmVmPVwiYXNzZXRzL3Nwcml0ZS9zcHJpdGUuc3ZnI2Nsb3NlXCI+PC91c2U+JyArXG4gICAgICAgICAgJzwvc3ZnPicgK1xuICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICBwYXN0LmZpbmQoJ2RpdltkYXRhLW5hbWU9JyArIF9pZCArICddJykucmVtb3ZlKCk7XG4gICAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGhhdmVBQ2hpbGQoZWxlbSkge1xuICAgIGxldCBwYXJFbGVtID0gJChlbGVtKTtcbiAgICBpZiAocGFyRWxlbS5jaGlsZHJlbigpLmxlbmd0aCA+PSAyKSB7XG4gICAgICBwYXJFbGVtLmNzcygnZGlzcGxheScsICdmbGV4JylcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyRWxlbS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gd2F0Y2hlckluKGVsZW0pIHtcbiAgICBpZiAoZWxlbS5jaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcbiAgICAgIGVsZW0uY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gbW9iRmlsdGVyQ2hlY2socGljaywgcHVsbCkge1xuICAgIGxldCBtb2JJZENoZWNrID0gJChwaWNrKS5wcm9wKCdpZCcpLFxuICAgICAgcGFzdFBvcyA9ICQocGljaykucGFyZW50cygnLm1vYi1maWx0ZXItaXRlbXMnKS5jaGlsZHJlbignLm1vYi1maWx0ZXItaGVhZGVyJykuY2hpbGRyZW4oJy5tb2ItY2hlY2staG9sZGVyJyksXG4gICAgICBsYXN0Q2hpbGQ7XG4gICAgaWYgKCQocGljaykucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICBpZiAod2F0Y2hlckluKHBhc3RQb3MpKSB7XG4gICAgICAgIHBhc3RQb3MucHJlcGVuZCgnPHNwYW4gZGF0YS1uYW1lPScgKyBtb2JJZENoZWNrICsnPicgKyBwdWxsICsgJyw8L3NwYW4+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXN0UG9zLnByZXBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nICsgbW9iSWRDaGVjayArICc+JyArIHB1bGwgKyAnPC9zcGFuPicpO1xuICAgICAgfVxuICAgICAgd2F0Y2hlckluKHBhc3RQb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXN0UG9zLmZpbmQoJ3NwYW5bZGF0YS1uYW1lPScgKyBtb2JJZENoZWNrICsgJ10nKS5yZW1vdmUoKTtcbiAgICAgIHdhdGNoZXJJbihwYXN0UG9zKTtcbiAgICB9XG4gICAgbGFzdENoaWxkID0gcGFzdFBvcy5jaGlsZHJlbigpLmxhc3QoKS5odG1sKCk7XG4gICAgaWYgKHR5cGVvZiBsYXN0Q2hpbGQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgIGxhc3RDaGlsZCA9IGxhc3RDaGlsZC5yZXBsYWNlKC9bXFxzLiwlXS9nLCAnJyk7XG4gICAgICAgcGFzdFBvcy5jaGlsZHJlbigpLmxhc3QoKS5odG1sKGxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuICAkKCcuZmVhdHVyZXNfaXRlbXMgLnNlYXJjaCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gKDkwMCAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vZGFsJyk7XG4gICAgICBpZiAoJCgnYm9keT5kaXYnKS5oYXNDbGFzcygnb3ZlcmxheScpKSB7XG4gICAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PicpLnByZXBlbmRUbygnYm9keScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XG4gICAgICAkKCcuc2VhcmNoLXdyYXBwZXIgLmZvcm0gPiBpbnB1dCcpLmZvY3VzKCk7XG4gICAgIH07XG4gICAgIHJldHVybiBmYWxzZVxuICAgfSk7XG4gICQoJy5zZWFyY2gtaGVhZGVyLWxpbmUgc3ZnLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5mZWF0dXJlc19pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XG4gICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcbiAgfSk7XG4gICQoJy5idXJnZXItbWVudScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7ICBcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XG4gIH0pO1xuICAkKCcubWVudV9tb2JpbGUgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIC5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubWVudV9tb2JpbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xuICB9KTtcbiAgJCgnLm5hdl93cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5uYXZfd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG4gICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbiAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZTtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9O1xuICAgIFxuICB9KTtcbiAgJCgnLnByb21vX2xpbmUgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykucGFyZW50KCkuY3NzKCdoZWlnaHQnLCAnMCcpO1xuICAgICQodGhpcykucGFyZW50KCkuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICB9KTtcbiAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XG4gIGFkZFJlbW92ZUNsYXNzKCdzZWN0aW9uLmluZm8gLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xuICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gKDkwMCAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcbiAgICBpbml0UmFuZ2VTbGlkZXIoJy5tb2ItcmFuZ2Utc2xpZGVyJywgJy5tb2ItaW5wdXQtZnJvbScsICcubW9iLWlucHV0LXRvJyk7XG4gIH0gZWxzZSB7XG4gICAgaW5pdFJhbmdlU2xpZGVyKCcuanMtcmFuZ2Utc2xpZGVyJywgJy5qcy1pbnB1dC1mcm9tJywgJy5qcy1pbnB1dC10bycpO1xuICB9XG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgIGFkZFJlbW92ZUNsYXNzKCcuaW5mby1mcmFtZSAuaW5mby1jb250ZW50LXdyYXBwZXI+LnRpdGxlJywnYWNjb3JkaW9uLWJ0bicpO1xuICAgIGFkZFJlbW92ZUNsYXNzKCdzZWN0aW9uLmluZm8gLmNvbnRhaW5lciAuaW5mby1mcmFtZSAuaW5mby1tZW51LXdyYXBwZXInLCAnYWNjb3JkaW9uJyk7XG4gICAgYWRkUmVtb3ZlQ2xhc3NfNzY3KCcuZ2FsbC13cmFwcC1tYWluJywgJ2xvYWQnKTtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gKDc2NyAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcbiAgICAgIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzOm5vdCguY2F0YWxvZy1rKSBwJyk7XG4gICAgfVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAoOTAwIC0gd2l0aFNjcm9sbEJhcigpKSkge1xuICAgICAgaW5pdFJhbmdlU2xpZGVyKCcubW9iLXJhbmdlLXNsaWRlcicsICcubW9iLWlucHV0LWZyb20nLCAnLm1vYi1pbnB1dC10bycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0UmFuZ2VTbGlkZXIoJy5qcy1yYW5nZS1zbGlkZXInLCAnLmpzLWlucHV0LWZyb20nLCAnLmpzLWlucHV0LXRvJyk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzOm5vdCguY2F0YWxvZy1rKSBwJyk7XG4gIG1lbnVBY2NvcmRpb25Nb3ZlcigpO1xuICBhY2NFbmdpbmUoJy5wYXltZW50LWl0ZW1zJyk7XG4gIHZhbGlkYXRvckZvcm0oXCIjc2lnbi1pblwiKTtcbiAgdmFsaWRhdG9yRm9ybShcIiNyZXNldC1wYXNzXCIpO1xuICB2YWxpZGF0b3JGb3JtKFwiI3JlZ2lzdHJhdGlvbi1mb3JtXCIpO1xuICAkKCcuY2xvc2UtcG9wdXAnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xuICB9KTtcbiAgJCgnLmZlYXR1cmVzX2l0ZW1zIC5hdXRvcml6YXRpb24nKS5jbGljayhmdW5jdGlvbiAoKXtcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1zaWduLWluJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgJCgnI3BvcHVwLXNpZ24taW4gLmxpbmtfd3JhcHBlciBhJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXJlc2V0LXBhc3MnKTtcbiAgfSk7XG4gICQoJy5jaG9zZS1wb2ludCcpLmNsaWNrKGZ1bmN0aW9uIChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgb3BlblBvcFVwKCcjcG9wdXAtZGVsaXZlcnktcG9pbnQnKTtcbiAgfSlcbiAgJCgnLmxhbmctd3JhcHBlciAuc2VsZWN0LWxhbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAkKHRoaXMpLmNoaWxkcmVuKCkubGFzdCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgfSlcbiAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gtbGluZScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID4gMCkge1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZW50ZXInKTtcbiAgICAgICQoJy5tZW51X21vYmlsZSAuc2VhcmNoJykuYWRkQ2xhc3MoJ2VudGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmhhc0NsYXNzKCdlbnRlcicpKSB7XG4gICAgICAgICQoJy5tZW51X21vYmlsZSAuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2VudGVyJyk7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2VudGVyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAkKFwiLnN1Yl9tZW51X2l0ZW1zID4gYVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XG4gIH0pO1xuICAkKFwiLm1lbnVfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRIb3Zlcih0aGlzKTtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUhvdmVyKHRoaXMpO1xuICAgfSk7XG4gICQoXCIuZmVhdHVyZXNfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcbiAgfSk7XG4gIGxldCBoZWlnaHRIZWFkZXIgPSAkKCdoZWFkZXInKS5oZWlnaHQoKTtcbiAgJCh3aW5kb3cpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnaGVhZGVyJykuaGVpZ2h0KCkgPCBoZWlnaHRIZWFkZXIpIHtcbiAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmcnLCAkKCdoZWFkZXInKS5oZWlnaHQoKSArICdweCcpO1xuICAgIH1cbiAgfSk7XG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlJyk7XG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX25ldycpO1xuICBnb1RvQ3VycmVuY3koJy5wcmljZV9vbGQnKTtcbiAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbm8tYWN0aXZlJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJChcIjxkaXYgY2xhc3M9J2xvY2stcG9pbnRlcic+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fd3JhcHBlcicpKSB7XG4gICAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrLXBvaW50ZXInKSkge1xuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuZmlsdGVyLWhlYWRlcicpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSkge1xuICAgICAgJCgnaGVhZGVyIC5zZWFyY2gtaGVhZGVyLWxpbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuZmVhdHVyZXNfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XG4gICAgICAkKCcub3ZlcmxheScpLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5tb3JlLWxlc3MtZmlsdGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuY2hpbGRyZW4oKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICB9XG4gIH0pO1xuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjaycpO1xuICByZXNldFNlbGVjdCgnLnJlc2V0LXNlbGVjdCcpO1xuICAkKCcubW9iaWxlLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgb3BlblBvcFVwKCQodGhpcykubmV4dCgpKTtcbiAgfSk7XG4gICQoJy5tb2RhbC1maXRlciAudGl0bGUtZmlsdGVyIHN2ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZVBvcFVwKCcubW9kYWwtZml0ZXInKTtcbiAgfSk7XG4gICQoJy5tb2ItZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgnLm1vYi1maWx0ZXItaXRlbXMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuICBsZXQgY291bnQgPSAwO1xuICAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQtLTtcbiAgICAgIH1cbiAgICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKVxuICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgICAgICQoJy5tb2RhbC1zdWJtaXQnKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgICAgICQoJy5tb2RhbC1zdWJtaXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgIH1cbiAgIH0pO1xuICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vYkNoZWNrID0gJCh0aGlzKS5uZXh0KCkuaHRtbCgpLFxuICAgICAgbW9iQ2hlY2tDb2xvciA9ICQodGhpcykubmV4dCgpLmNoaWxkcmVuKCcuY29sb3ItbmFtZScpLmh0bWwoKTtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnY29sb3InKSkge1xuICAgICAgbW9iRmlsdGVyQ2hlY2sodGhpcywgbW9iQ2hlY2tDb2xvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vYkZpbHRlckNoZWNrKHRoaXMsIG1vYkNoZWNrKTtcbiAgICB9XG4gIH0pO1xuICAkKCcubW9kYWwtcmVzZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAkKCcubW9iLWZpbHRlci1oZWFkZXInKS5maW5kKCcubW9iLWNoZWNrLWhvbGRlcicpLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgY291bnQgPSAwO1xuICAgICQoJy5tb2RhbC1yZXNldCBzcGFuJykuaHRtbCgnKCcgKyBjb3VudCArICcpJyk7XG4gICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgICQoJy5tb2RhbC1zdWJtaXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgcmVzUHJpY2UoKTtcbiAgICB3YXRjaGVySW4oJCgnLm1vYi1jaGVjay1ob2xkZXInKSlcbiAgfSk7XG4gIGlmICgkKCcjYnRuLXdhdGNoJykubGVuZ3RoID4gMCkge1xuICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNvbWUoJyNidG4td2F0Y2gnKSkge1xuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICQoJy5wcmV2aWV3LWhlYWRlci1nb29kcycpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgIH1cbiAgICAgfSk7XG4gIH07XG4gIFxuICBsZXQgbW9iR2FsbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsLXdyYXBwLW1haW4nKSxcbiAgICBjbG9zZUdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbC1jbG9zZS1idG4nKTtcbiAgaWYgKG1vYkdhbGxTbGlkZXIpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWxsLXdyYXBwLW1haW4nKSkge1xuICAgICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwnKVxuICAgICAgIH0gZWxzZSB7IHJldHVybiB9O1xuICAgIH0pO1xuICAgIGNsb3NlR2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xuICAgIH0pO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgICBzd2lwZXJHb29kcy5zbGlkZVRvKDEsIDApO1xuICAgICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMiwgMCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMywgMCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oNCwgMCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oNSwgMCk7XG4gICAgfSk7ICBcbiAgfSBlbHNlIHsgfTtcbiAgbGV0IGZhdkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZhdkljb24ubGVuZ3RoOyBpKyspIHtcbiAgICBmYXZJY29uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QnKTtcbiAgICB9KTtcbiAgfTtcbiAgJCgnLnNpemUtaG9sZGVyIC5zaXplLWl0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5zaXplLWhvbGRlciAuc2l6ZS1pdGVtcycpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY3VycmVudCcpO1xuICB9KTtcbiAgJCgnLmFkZC10by1mYXZvcml0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5hZGQtdG8tZmF2b3JpdCcpLnRvZ2dsZUNsYXNzKCdzZWxlY3QnKTtcbiAgfSk7XG4gICQoJy5hZGRfdG9fZmF2b3JpdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICBsZXQgYnV0dG9uICAgICAgPSAkKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgbGV0IHByb2RfaWQgICAgID0gYnV0dG9uLmRhdGEoJ3Byb2R1Y3RfaWQnKVxuICAgICAgICBsZXQgbmVlZF9kZWxldGUgPSAoYnV0dG9uLmhhc0NsYXNzKCdzZWxlY3QnKSkgPyAxIDogMDtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2xvY2FsL2FqYXgvZmF2b3JpdGVzLnBocCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBmYXZvcml0ZTogcHJvZF9pZCxcbiAgICAgICAgICAgICAgICBkZWxldGU6IG5lZWRfZGVsZXRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5lZWRfZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkQ2xhc3MoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfSk7XG5cbiAgJCgnLmRlY3JlYXNlJykuY2xpY2soZnVuY3Rpb24gKGUpe1xuICAgIHZhciBvbGQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbCgpO1xuICAgIGlmIChvbGQgPiAxKXtcbiAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKHBhcnNlSW50KG9sZCkgLSAxKTtcbiAgICB9XG4gIH0pXG4gICQoJy5pbmNyZWFzZScpLmNsaWNrKGZ1bmN0aW9uIChlKXtcbiAgICB2YXIgb2xkID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKTtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChwYXJzZUludChvbGQpICsgMSk7XG4gIH0pXG4gICQoJy5wb2ludHMtbmF2IGEnKS5jbGljayhmdW5jdGlvbiAoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5wb2ludHMtbmF2IGEuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgJCgnLnBvaW50cy12aWV3IC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLicrJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSlcbiAgJCgnLnBvaW50cy1saXN0IC5wb2ludCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgJCgnLnBvaW50cy1saXN0IC5wb2ludC5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcbiAgfSk7XG4gICQoJ3NlbGVjdCcpLm5pY2VTZWxlY3QoKTtcbiAgJCgnLmZpbHRlci1pdGVtcyA+IC5ib3gtY2hlY2s6bm90KC5jb2xvciknKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbnRDaGVjayA9ICQodGhpcykubmV4dCgpLmh0bWwoKSxcbiAgICAgICAgcGljSWQgPSAkKHRoaXMpLnByb3AoJ2lkJyk7XG4gICAgcHV0VGhpcyA9ICQodGhpcykucGFyZW50cygnLmZpbHRlci1jb250aW5lcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XG4gICAgYWRkRmlsdGVyKHRoaXMsIHBpY0lkLCBjb250Q2hlY2ssIHB1dFRoaXMpO1xuICAgIGhhdmVBQ2hpbGQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XG4gIH0pO1xuICAkKCcuZmlsdGVyLWl0ZW1zID4gLmJveC1jaGVjay5jb2xvcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29udENvbG9yID0gJCh0aGlzKS5uZXh0KCkuY2hpbGRyZW4oJy5jb2xvci1uYW1lJykuaHRtbCgpLFxuICAgICAgICBjb2xvcklkID0gJCh0aGlzKS5wcm9wKCdpZCcpO1xuICAgIHB1dFRoaXNDb2wgPSAkKHRoaXMpLnBhcmVudHMoJy5maWx0ZXItY29udGluZXInKS5jaGlsZHJlbignLmZpbHRlci1hY3RpdmUtd3JhcHBlcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xuICAgIGFkZEZpbHRlcih0aGlzLCBjb2xvcklkLCBjb250Q29sb3IsIHB1dFRoaXNDb2wpO1xuICAgIGhhdmVBQ2hpbGQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XG4gIH0pO1xuICAkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpLm9uKCdjbGljaycsICcuY2xvc2UtZmlsdGVyLXdyYXBwZXInLCBmdW5jdGlvbihlKXtcbiAgICBsZXQgY1BhciA9ICQodGhpcykucGFyZW50cygnLmFjdGl2ZS1pdGVtJyksXG4gICAgICB3YXlDaGVjayA9IGNQYXIuYXR0cignZGF0YS1uYW1lJyksXG4gICAgICBmaWx0ZXJXcmFwID0gJCgnLmZpbHRlci1jb250aW5lcicpLFxuICAgICAgY2xpY2tJbiA9IGZpbHRlcldyYXAuZmluZCgnaW5wdXRbaWQ9JyArIHdheUNoZWNrICsgJ10nKTtcbiAgICBjbGlja0luLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgY1Bhci5yZW1vdmUoKTtcbiAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xuICB9KTtcbiAgJCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKS5vbignY2xpY2snLCAnLmZpbHRlci1hY3RpdmUtcmVzZXQtYnRuJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IGl0ZW1SZW0gPSAkKCcuYWN0aXZlLWl0ZW0nKSxcbiAgICAgICAgZmlsdGVyQ29udCA9ICQoJy5maWx0ZXItY29udGluZXInKTtcbiAgICBcbiAgICBmaWx0ZXJDb250LmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICBpdGVtUmVtLnJlbW92ZSgpO1xuICAgIHJlc1ByaWNlKCk7XG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcbiAgfSk7XG5cbn07XG5cblxuIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1cWN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUozYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGNJa1JQVFVOdmJuUmxiblJNYjJGa1pXUmNJaXdnYVc1cGRDazdYSEpjYm1aMWJtTjBhVzl1SUdsdWFYUW9LU0I3WEhKY2JpQWdJQ0F2S2xOc2FXUmxjaUJ6ZDJsd1pYSWdhR1ZoWkdWeUlHSmhibTVsY2lCemRHRnlkQ292WEhKY2JpQWdJQ0JzWlhRZ2MzZHBjR1Z5UW1GdWJtVnlJRDBnYm1WM0lGTjNhWEJsY2lnbkxuTnNhV1JsY2w5amIyNTBZV2x1WlhJdWMzZHBjR1Z5TFdOdmJuUmhhVzVsY2ljc0lIdGNjbHh1SUNBZ0lDQWdjM0JoWTJWQ1pYUjNaV1Z1T2lBek1DeGNjbHh1SUNBZ0lDQWdiRzl2Y0RvZ2RISjFaU3hjY2x4dUlDQWdJQ0FnWVhWMGIzQnNZWGs2SUh0Y2NseHVJQ0FnSUNBZ0lDQmtaV3hoZVRvZ016VXdNQ3hjY2x4dUlDQWdJQ0FnSUNCa2FYTmhZbXhsVDI1SmJuUmxjbUZqZEdsdmJqb2dabUZzYzJVc1hISmNiaUFnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJSEJoWjJsdVlYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQmxiRG9nSnk1emQybHdaWEl0Y0dGbmFXNWhkR2x2Ymljc1hISmNiaUFnSUNBZ0lDQWdJQ0JqYkdsamEyRmliR1U2SUhSeWRXVXNJRnh5WEc0Z0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnZlNrN1hISmNiaUFnSUNBdktsTnNhV1JsY2lCemQybHdaWElnYUdWaFpHVnlJR0poYm01bGNpQmxibVFxTDF4eVhHNWNjbHh1SUNBZ0lDOHFVMnhwWkdWeUlITjNhWEJsY2lCd2NtOWtMWE5zYVdSbGNpQnpkR0Z5ZENvdlhISmNiaUFnSUNCc1pYUWdjM2RwY0dWeVVISnZaQ0E5SUc1bGR5QlRkMmx3WlhJb0p5NXdjbTlrTFhOc2FXUmxjaTFqYjI1MFlXbHVaWEl1YzNkcGNHVnlMV052Ym5SaGFXNWxjaWNzSUh0Y2NseHVJQ0FnSUNBZ2MzQmhZMlZDWlhSM1pXVnVPaUF4Tml4Y2NseHVJQ0FnSUNBZ2MyeHBaR1Z6VUdWeVZtbGxkem9nTlN4Y2NseHVJQ0FnSUNBZ2MyeHBaR1Z6VUdWeVIzSnZkWEE2SURFc1hISmNiaUFnSUNBZ0lDOHZJR2R5WVdKRGRYSnpiM0k2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJRzVoZG1sbllYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQnVaWGgwUld3NklDY3VjM2RwY0dWeUxXSjFkSFJ2YmkxdVpYaDBKeXhjY2x4dUlDQWdJQ0FnSUNCd2NtVjJSV3c2SUNjdWMzZHBjR1Z5TFdKMWRIUnZiaTF3Y21WMkp5eGNjbHh1SUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnWW5KbFlXdHdiMmx1ZEhNNklIdGNjbHh1SUNBZ0lDQWdJQ0F3T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzNCaFkyVkNaWFIzWldWdU9pQTBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lITnNhV1JsYzFCbGNsWnBaWGM2SURFc1hISmNiaUFnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ016QXdPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjM0JoWTJWQ1pYUjNaV1Z1T2lBMExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOc2FXUmxjMUJsY2xacFpYYzZJREl1TURnc1hISmNiaUFnSUNBZ0lDQWdJSDBzWEhKY2JseDBYSFJjZENBZ0lETTNOVG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSE53WVdObFFtVjBkMlZsYmpvZ05DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNCemJHbGtaWE5RWlhKV2FXVjNPaUF5TGpBNExGeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lEUTRNRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSE5zYVdSbGMxQmxjbFpwWlhjNklESXVOaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQnpjR0ZqWlVKbGRIZGxaVzQ2SURRc1hISmNiaUFnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ05qQXdPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjMnhwWkdWelVHVnlWbWxsZHpvZ01pNDRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lITndZV05sUW1WMGQyVmxiam9nTkN4Y2NseHVJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ056WTRPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjMnhwWkdWelVHVnlWbWxsZHpvZ05DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNCemNHRmpaVUpsZEhkbFpXNDZJREV3TEZ4eVhHNGdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSURFd01qUTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lITnNhV1JsYzFCbGNsWnBaWGM2SURVc1hISmNibHgwWEhSY2RDQWdJSDBzWEhKY2JseDBYSFJjZENBZ0lERXpOalk2SUh0Y2NseHVYSFJjZEZ4MElDQWdYSFJ6Ykdsa1pYTlFaWEpXYVdWM09pQTFMRnh5WEc1Y2RGeDBYSFFnSUNCOUxGeHlYRzVjZEZ4MElDQjlMRnh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdMeXBUYkdsa1pYSWdjM2RwY0dWeUlIQnliMlF0YzJ4cFpHVnlJR1Z1WkNvdlhISmNiaUFnTHlwVGJHbGtaWElnYzNkcGNHVnlJR2R2YjJSekxXTmhjbVFnYzNSaGNuUXFMMXh5WEc0Z0lHeGxkQ0J6ZDJsd1pYSkhiMjlrY3lBOUlHNWxkeUJUZDJsd1pYSW9KeTVuWVd4c1pYSjVMVzF2WWkxamIyNTBZV2x1WlhJdWMzZHBjR1Z5TFdOdmJuUmhhVzVsY2ljc0lIdGNjbHh1SUNBZ0lITndZV05sUW1WMGQyVmxiam9nTXpBc1hISmNiaUFnSUNCc2IyOXdPaUIwY25WbExGeHlYRzRnSUNBZ1kyVnVkR1Z5WldSVGJHbGtaWE02SUhSeWRXVXNYSEpjYmlBZ0lDQmhkWFJ2Y0d4aGVUb2dlMXh5WEc0Z0lDQWdJQ0JrWld4aGVUb2dNelV3TUN4Y2NseHVJQ0FnSUNBZ1pHbHpZV0pzWlU5dVNXNTBaWEpoWTNScGIyNDZJR1poYkhObExGeHlYRzRnSUNBZ2ZTeGNjbHh1SUNBZ0lHNWhkbWxuWVhScGIyNDZJSHRjY2x4dUlDQWdJQ0FnSUNCdVpYaDBSV3c2SUNjdWMzZHBjR1Z5TFdKMWRIUnZiaTF1WlhoMEp5eGNjbHh1SUNBZ0lDQWdJQ0J3Y21WMlJXdzZJQ2N1YzNkcGNHVnlMV0oxZEhSdmJpMXdjbVYySnl4Y2NseHVJQ0FnSUgwc1hISmNiaUFnSUNCd1lXZHBibUYwYVc5dU9pQjdYSEpjYmlBZ0lDQWdJR1ZzT2lBbkxtZHZiMlJ6TFhCaFoybHVZWFJwYjI0bkxGeHlYRzRnSUNBZ0lDQWdJR05zYVdOcllXSnNaVG9nZEhKMVpTd2dYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lIMHBPMXh5WEc0Z0lDOHFVMnhwWkdWeUlITjNhWEJsY2lCbmIyOWtjeTFqWVhKa0lHVnVaQ292WEhKY2JpQWdablZ1WTNScGIyNGdiV1Z1ZFVGalkyOXlaR2x2YmsxdmRtVnlLQ2tnZTF4eVhHNGdJQ0FnYkdWMElHRmpZeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWENJdVlXTmpiM0prYVc5dUxXSjBibHdpS1R0Y2NseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTmpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lHRmpZMXRwWFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTaGNJbUZqZEdsMlpWd2lLVHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdjR0Z1Wld3Z1BTQjBhR2x6TG5CaGNtVnVkRVZzWlcxbGJuUXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVJQ0FnSUNBZ0lDQWdhV1lnS0hCaGJtVnNMbk4wZVd4bExtMWhlRWhsYVdkb2RDWW1jR0Z1Wld3dVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGhZMk52Y21ScGIyNG5LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSEJoYm1Wc0xuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnY0dGdVpXd3VjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdjR0Z1Wld3dWMyTnliMnhzU0dWcFoyaDBJQ3NnWENKd2VGd2lPMXh5WEc0Z0lDQWdJQ0FnSUNCOUlGeHlYRzRnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5T3lCY2NseHVJQ0I5TzF4eVhHNGdJR1oxYm1OMGFXOXVJR0ZqWTBWdVoybHVaU2h3YVdOcktTQjdYSEpjYmlBZ0lDQnNaWFFnWVdOaklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaHdhV05yS1R0Y2NseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTmpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lHRmpZMXRwWFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTaGNJbUZqZEdsMlpWd2lLVHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdjR0Z1Wld3Z1BTQjBhR2x6TG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVJQ0FnSUNBZ0lDQWdhV1lnS0hCaGJtVnNMbk4wZVd4bExtMWhlRWhsYVdkb2RDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lIQmhibVZzTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUc1MWJHdzdYSEpjYmlBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjR0Z1Wld3dWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ2NHRnVaV3d1YzJOeWIyeHNTR1ZwWjJoMElDc2dYQ0p3ZUZ3aU8xeHlYRzRnSUNBZ0lDQWdJQ0I5SUZ4eVhHNGdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlPeUJjY2x4dUlDQjlPMXh5WEc0Z0lHWjFibU4wYVc5dUlHRmtaRkpsYlc5MlpVTnNZWE56S0dWc1pXMHNJR0ZrWkNrZ2UxeHlYRzRnSUNBZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRHc5SURrd01Da2dlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbUZrWkVOc1lYTnpLR0ZrWkNrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5KbGJXOTJaVU5zWVhOektHRmtaQ2s3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJSDA3WEhKY2JpQWdablZ1WTNScGIyNGdZV1JrVW1WdGIzWmxRMnhoYzNOZk56WTNLR1ZzWlcwc0lHRmtaQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElENDlJRGMyTnlrZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExtRmtaRU5zWVhOektHRmtaQ2s3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkpsYlc5MlpVTnNZWE56S0dGa1pDazdYSEpjYmlBZ0lDQjlPMXh5WEc0Z0lIMDdYSEpjYmlBZ1hISmNiaUFnWm5WdVkzUnBiMjRnYjNCbGJsQnZjRlZ3S0dWc1pXMHBJSHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VZV1JrUTJ4aGMzTW9KMkZqZEdsMlpTY3BPeUFnWEhKY2JpQWdJQ0FrS0NkaWIyUjVKeWt1WVdSa1EyeGhjM01vSjIxdlpHRnNKeWs3WEhKY2JpQWdmVHRjY2x4dUlDQm1kVzVqZEdsdmJpQmpiRzl6WlZCdmNGVndLR1ZzWlcwcElIdGNjbHh1SUNBZ0lDUW9aV3hsYlNrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPeUFnWEhKY2JpQWdJQ0FrS0NkaWIyUjVKeWt1Y21WdGIzWmxRMnhoYzNNb0oyMXZaR0ZzSnlrN1hISmNiaUFnZlR0Y2NseHVJQ0JxVVhWbGNua3VaWGgwWlc1a0tHcFJkV1Z5ZVM1MllXeHBaR0YwYjNJdWJXVnpjMkZuWlhNc0lIdGNjbHh1SUNBZ0lISmxjWFZwY21Wa09pQmNJdENmMEw3UXU5QzFJTkdQMExMUXU5R1AwTFhSZ3RHQjBZOGcwTDdRc2RHUDBMZlFzTkdDMExYUXU5R00wTDNSaTlDOFhDSXNYSEpjYmlBZ0lDQnlaVzF2ZEdVNklGd2kwSi9RdnRDNzBMVWcwWS9Rc3RDNzBZL1F0ZEdDMFlIUmp5RFF2dEN4MFkvUXQ5Q3cwWUxRdGRDNzBZelF2ZEdMMEx4Y0lpeGNjbHh1SUNBZ0lHVnRZV2xzT2lCY0l0Q1MwTExRdGRDMDBMalJndEMxSU5DNjBMN1JnTkdBMExYUXV0R0MwTDNSaTlDNUlOR04wTHZRdGRDNjBZTFJnTkMrMEwzUXZkR0wwTGtnMExEUXROR0EwTFhSZ1Z3aUxGeHlYRzRnSUgwcE8xeHlYRzRnSUNRdWRtRnNhV1JoZEc5eUxtRmtaRTFsZEdodlpDaGNJa1ZOUVVsTVhDSXNJR1oxYm1OMGFXOXVLSFpoYkhWbExDQmxiR1Z0Wlc1MEtTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG05d2RHbHZibUZzS0dWc1pXMWxiblFwSUh4OElDOWVXMkV0ZWtFdFdqQXRPUzVmTFYwclFGdGhMWHBCTFZvd0xUa3RYU3RjWEM1YllTMTZRUzFhTGwxN01pdzFmU1F2YVM1MFpYTjBLSFpoYkhWbEtUdGNjbHh1SUNCOUxDQmNJdENTMExMUXRkQzAwTGpSZ3RDMUlOQzYwTDdSZ05HQTBMWFF1dEdDMEwzUmk5QzVJTkdOMEx2UXRkQzYwWUxSZ05DKzBMM1F2ZEdMMExrZzBMRFF0TkdBMExYUmdWd2lLVHRjY2x4dUlDQm1kVzVqZEdsdmJpQjJZV3hwWkdGMGIzSkdiM0p0S0dWc1pXMHBJSHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VkbUZzYVdSaGRHVW9lMXh5WEc0Z0lDQWdJQ0J5ZFd4bGN6b2dlMXh5WEc0Z0lDQWdJQ0FnSUhCemQyOXlaRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdjbVZ4ZFdseVpXUTZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lDQWdJQ0J0YVc1c1pXNW5kR2c2SURZc1hISmNiaUFnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNCbGJXRnBiRjl1T2x3aWNtVnhkV2x5WldRZ1JVMUJTVXhjSWl4Y2NseHVJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdiV1Z6YzJGblpYTTZJSHRjY2x4dUlDQWdJQ0FnSUNCd2MzZHZjbVE2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJRzFwYm14bGJtZDBhRG9nSjlDYzBMalF2ZEM0MEx6UXNOQzcwWXpRdmRDdzBZOGcwTFRRdTlDNDBMM1FzQ0RRdjlDdzBZRFF2dEM3MFk4Z05pRFJnZEM0MEx6UXN0QyswTHZRdnRDeUoxeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnZlN4Y2NseHVJQ0FnSUgwcE8xeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnWVdSa1NHOTJaWElvWld4bGJTa2dleUJjY2x4dUlDQWdJQ1FvWld4bGJTa3VZV1JrUTJ4aGMzTW9KMmx1TFdodmRtVnlKeWs3SUZ4eVhHNGdJSDA3WEhKY2JpQWdablZ1WTNScGIyNGdjbVZ0YjNabFNHOTJaWElvWld4bGJTa2dleUJjY2x4dUlDQWdJQ1FvWld4bGJTa3VjbVZ0YjNabFEyeGhjM01vSjJsdUxXaHZkbVZ5SnlrN0lGeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnWjI5VWIwTjFjbkpsYm1ONUtHVnNaVzBwSUh0Y2NseHVJQ0FnSUd4bGRDQnVkVzFpWlhKVWIwWnZjbTFoZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1pXeGxiU2s3WEhKY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJXSmxjbFJ2Um05eWJXRjBMbXhsYm1kMGFEc2dhU3NySUNrZ2UxeHlYRzRnSUNBZ0lDQWdiR1YwSUhSdlRuVnRZaUE5SUN0dWRXMWlaWEpVYjBadmNtMWhkRnRwWFM1cGJtNWxja2hVVFV3N1hISmNiaUFnSUNBZ0lDQnNaWFFnWm05eWJXRjBUblZ0SUQwZ2JtVjNJRWx1ZEd3dVRuVnRZbVZ5Um05eWJXRjBLQ2R5ZFMxU1ZTY3NJSHNnYzNSNWJHVTZJQ2RqZFhKeVpXNWplU2NzSUdOMWNuSmxibU41T2lBblVsVkNKeXdnYldsdWFXMTFiVVp5WVdOMGFXOXVSR2xuYVhSek9pQXdJSDBwTG1admNtMWhkQ2gwYjA1MWJXSXBPMXh5WEc0Z0lDQWdJQ0FnYm5WdFltVnlWRzlHYjNKdFlYUmJhVjB1YVc1dVpYSklWRTFNSUQwZ1ptOXliV0YwVG5WdE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgwN1hISmNiaUFnWEhKY2JpQWdablZ1WTNScGIyNGdZMmhsWTJ0Q2IzaEZibWRwYm1Vb1pXeGxiU2tnZTF4eVhHNGdJQ0FnYkdWMElHTnZkVzUwSUQwZ01EdGNjbHh1SUNBZ0lDUW9aV3hsYlNrdVkyaGhibWRsS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdhV1lnS0NRb2RHaHBjeWt1Y0hKdmNDZ25ZMmhsWTJ0bFpDY3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyOTFiblFyS3p0Y2NseHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQmpiM1Z1ZEMwdE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJR05vWldOb1FuUnVLSFJvYVhNc0lHTnZkVzUwS1R0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblJ6Vlc1MGFXd29KeTVqYjI1MFpXNTBMV1pwYkhSbGNpY3BMbTVsZUhRb0p5NWlkRzR0ZDNKaGNIQmxjaWNwTG1Ob2FXeGtjbVZ1S0NjdWMzUmhkR1V0YzJWc1pXTjBKeWt1WTJocGJHUnlaVzRvSnk1dWRXMWlMWE5sYkdWamRDY3BMbU5vYVd4a2NtVnVLQ2R6Y0dGdUp5a3VhSFJ0YkNoamIzVnVkQ2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVJQ0I5TzF4eVhHNGdJRnh5WEc0Z0lHWjFibU4wYVc5dUlHTm9aV05vUW5SdUtHVnNaVzBzSUdFcElIdGNjbHh1SUNBZ0lHbG1JQ2hoSUQ0Z01Da2dlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkJoY21WdWRITlZiblJwYkNnbkxtTnZiblJsYm5RdFptbHNkR1Z5SnlrdWJtVjRkQ2duTG1KMGJpMTNjbUZ3Y0dWeUp5a3VZMmhwYkdSeVpXNG9KeTVtYVd4MFpYSXRZblJ1SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkQ2duTG1acGJIUmxjaTFwZEdWdGN5Y3BMbkJoY21WdWRITlZiblJwYkNnbkxtWnBiSFJsY2kxcGRHVnRjeWNwTG5CeVpYWW9LUzVoWkdSRGJHRnpjeWduYzJWc1pXTjBKeWs3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkJoY21WdWRITlZiblJwYkNnbkxtTnZiblJsYm5RdFptbHNkR1Z5SnlrdWJtVjRkQ2duTG1KMGJpMTNjbUZ3Y0dWeUp5a3VZMmhwYkdSeVpXNG9KeTVtYVd4MFpYSXRZblJ1SnlrdVlXUmtRMnhoYzNNb0oyNXZMV0ZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkJoY21WdWRDZ25MbVpwYkhSbGNpMXBkR1Z0Y3ljcExuQmhjbVZ1ZEhOVmJuUnBiQ2duTG1acGJIUmxjaTFwZEdWdGN5Y3BMbkJ5WlhZb0tTNXlaVzF2ZG1WRGJHRnpjeWduYzJWc1pXTjBKeWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc0Z0lHWjFibU4wYVc5dUlISmxjMlYwVTJWc1pXTjBLR1ZzWlcwc0lHSnZlQ2tnZTF4eVhHNGdJQ0FnSkNobGJHVnRLUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9aU2tnZTF4eVhHNGdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNBZ0lDUW9ZbTk0S1M1d2NtOXdLQ2RqYUdWamEyVmtKeXdnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbTVsZUhRb0p5NXVkVzFpTFhObGJHVmpkQ2NwTG1Ob2FXeGtjbVZ1S0NkemNHRnVKeWt1YUhSdGJDZ3dLVHRjY2x4dUlDQWdJQ0FnWTI5MWJuUWdQU0F3TzF4eVhHNGdJQ0FnSUNCamFHVmphRUowYmloaWIzZ3BPMXh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdmVHRjY2x4dUlDQm1kVzVqZEdsdmJpQnBibWwwVW1GdVoyVlRiR2xrWlhJb0tTQjdJRnh5WEc0Z0lDQWdkbUZ5SUNSeVlXNW5aU0E5SUNRb1hDSXVhbk10Y21GdVoyVXRjMnhwWkdWeVhDSXBMRnh5WEc0Z0lDQWdKR2x1Y0hWMFJuSnZiU0E5SUNRb1hDSXVhbk10YVc1d2RYUXRabkp2YlZ3aUtTeGNjbHh1SUNBZ0lDUnBibkIxZEZSdklEMGdKQ2hjSWk1cWN5MXBibkIxZEMxMGIxd2lLU3hjY2x4dUlDQWdJR2x1YzNSaGJtTmxMRnh5WEc0Z0lDQWdiV2x1SUQwZ01DeGNjbHh1SUNBZ0lHMWhlQ0E5SURFd01EQXdNQ3hjY2x4dUlDQWdJR1p5YjIwZ1BTQXdMRnh5WEc0Z0lDQWdkRzhnUFNBd08xeHlYRzRnSUNBZ0pISmhibWRsTG1sdmJsSmhibWRsVTJ4cFpHVnlLSHRjY2x4dUlDQWdJRngwSUNCemEybHVPaUJjSW5KdmRXNWtYQ0lzWEhKY2JpQWdJQ0FnSUNBZ2RIbHdaVG9nWENKa2IzVmliR1ZjSWl4Y2NseHVJQ0FnSUNBZ0lDQnRhVzQ2SUcxcGJpeGNjbHh1SUNBZ0lDQWdJQ0J0WVhnNklHMWhlQ3hjY2x4dUlDQWdJQ0FnSUNCbWNtOXRPaUF3TEZ4eVhHNGdJQ0FnSUNBZ0lIUnZPaUF4TURBd01EQXNYSEpjYmlBZ0lDQWdJQ0FnYjI1VGRHRnlkRG9nZFhCa1lYUmxTVzV3ZFhSekxGeHlYRzRnSUNBZ0lDQWdJRzl1UTJoaGJtZGxPaUIxY0dSaGRHVkpibkIxZEhOY2NseHVJQ0FnSUgwcE8xeHlYRzRnSUNBZ2FXNXpkR0Z1WTJVZ1BTQWtjbUZ1WjJVdVpHRjBZU2hjSW1sdmJsSmhibWRsVTJ4cFpHVnlYQ0lwTzF4eVhHNGdJQ0FnWm5WdVkzUnBiMjRnZFhCa1lYUmxTVzV3ZFhSeklDaGtZWFJoS1NCN1hISmNiaUFnSUNCY2RHWnliMjBnUFNCa1lYUmhMbVp5YjIwN1hISmNiaUFnSUNBZ0lDQWdkRzhnUFNCa1lYUmhMblJ2TzF4eVhHNGdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQ1JwYm5CMWRFWnliMjB1Y0hKdmNDaGNJblpoYkhWbFhDSXNJR1p5YjIwcE8xeHlYRzRnSUNBZ0lDQWdJQ1JwYm5CMWRGUnZMbkJ5YjNBb1hDSjJZV3gxWlZ3aUxDQjBieWs3WEhSY2NseHVJQ0FnSUgxY2NseHVJQ0FnSUNScGJuQjFkRVp5YjIwdWIyNG9YQ0pwYm5CMWRGd2lMQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUhaaGJDQTlJQ1FvZEdocGN5a3VjSEp2Y0NoY0luWmhiSFZsWENJcE8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUM4dklIWmhiR2xrWVhSbFhISmNiaUFnSUNBZ0lDQWdhV1lnS0haaGJDQThJRzFwYmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXd2dQU0J0YVc0N1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gyWVd3Z1BpQjBieWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd3Z1BTQjBienRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1ZFhCa1lYUmxLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabkp2YlRvZ2RtRnNYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOUtUdGNjbHh1SUNBZ0lGeHlYRzRnSUNBZ0pHbHVjSFYwVkc4dWIyNG9YQ0pwYm5CMWRGd2lMQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUhaaGJDQTlJQ1FvZEdocGN5a3VjSEp2Y0NoY0luWmhiSFZsWENJcE8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUM4dklIWmhiR2xrWVhSbFhISmNiaUFnSUNBZ0lDQWdhV1lnS0haaGJDQThJR1p5YjIwcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNJRDBnWm5KdmJUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0haaGJDQStJRzFoZUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXd2dQU0J0WVhnN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExuVndaR0YwWlNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSdk9pQjJZV3hjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lIMDdYSEpjYmlBZ0tHWjFibU4wYVc5dUtDUXBlMXh5WEc0Z0lDQWdJQ0FnSUNRb2QybHVaRzkzS1M1dmJpaGNJbXh2WVdSY0lpeG1kVzVqZEdsdmJpZ3BlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0pDaGNJaTVrWlhOamEzUnZjQzFtYVd4MFpYSXRZMjl1ZEdGcGJtVnlJQzVqYjI1MFpXNTBMV1pwYkhSbGNpQXVabWxzZEdWeUxXbDBaVzFjSWlrdWJVTjFjM1J2YlZOamNtOXNiR0poY2loN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNCMGFHVnRaVHBjSW0xNUxYUm9aVzFsWENKY2NseHVJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdKQ2hjSWk1dGIySnBiR1V0Wm1sc2RHVnlMV052Ym5SaGFXNWxjaUF1WTI5dWRHVnVkQzFtYVd4MFpYSWdMbTF2WWkxamFHVmpheTFwZEdWdFhDSXBMbTFEZFhOMGIyMVRZM0p2Ykd4aVlYSW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdkR2hsYldVNlhDSnRlUzEwYUdWdFpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNRb1hDSXVZV3hzTFd4aGJtY3RhWFJsYlZ3aUtTNXRRM1Z6ZEc5dFUyTnliMnhzWW1GeUtIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lIUm9aVzFsT2x3aWJYa3RkR2hsYldWY0lseHlYRzRnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNCOUtTaHFVWFZsY25rcE8xeHlYRzRnSUdaMWJtTjBhVzl1SUdOdmJXVW9aV3hsYlNrZ2UxeHlYRzRnSUNBZ2RtRnlJR1J2WTFacFpYZFViM0FnUFNBa0tIZHBibVJ2ZHlrdWMyTnliMnhzVkc5d0tDa3NYSEpjYmlBZ0lDQWdJR1J2WTFacFpYZENiM1IwYjIwZ1BTQmtiMk5XYVdWM1ZHOXdJQ3NnSkNoM2FXNWtiM2NwTG1obGFXZG9kQ2dwTEZ4eVhHNGdJQ0FnSUNCbGJHVnRWRzl3SUQwZ0pDaGxiR1Z0S1M1dlptWnpaWFFvS1M1MGIzQXNYSEpjYmlBZ0lDQWdJR1ZzWlcxQ2IzUjBiMjBnUFNCbGJHVnRWRzl3SUNzZ0pDaGxiR1Z0S1M1b1pXbG5hSFFvS1R0Y2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z0tDaGxiR1Z0UW05MGRHOXRJRHc5SUdSdlkxWnBaWGRDYjNSMGIyMHBJQ1ltSUNobGJHVnRWRzl3SUQ0OUlHUnZZMVpwWlhkVWIzQXBLVHRjY2x4dUlDQjlYSEpjYmlBZ0lDUW9KeTVtWldGMGRYSmxjMTlwZEdWdGN5QXVjMlZoY21Ob0p5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdhV1lnS0NRb2QybHVaRzkzS1M1M2FXUjBhQ2dwSUQ0OUlEa3dNQ2tnZTF4eVhHNGdJQ0FnSUNBa0tDZG9aV0ZrWlhJZ0xuTmxZWEpqYUMxb1pXRmtaWEl0YkdsdVpTY3BMblJ2WjJkc1pVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblFvS1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ1FvSjJKdlpIa25LUzUwYjJkbmJHVkRiR0Z6Y3lnbmJXOWtZV3duS1R0Y2NseHVJQ0FnSUNBZ2FXWWdLQ1FvSjJKdlpIaytaR2wySnlrdWFHRnpRMnhoYzNNb0oyOTJaWEpzWVhrbktTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNRb0p5NXZkbVZ5YkdGNUp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSkNnblBHUnBkaUJqYkdGemN6MWNJbTkyWlhKc1lYbGNJajQ4TDJScGRqNG5LUzV3Y21Wd1pXNWtWRzhvSjJKdlpIa25LVHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSkNnbkxtMWxiblZmYlc5aWFXeGxKeWt1WVdSa1EyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tDZGliMlI1SnlrdVlXUmtRMnhoYzNNb0oyMXZaR0ZzSnlrN1hISmNiaUFnSUNBZ0lDUW9KeTV6WldGeVkyZ3RkM0poY0hCbGNpQXVabTl5YlNBK0lHbHVjSFYwSnlrdVptOWpkWE1vS1R0Y2NseHVJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh5WEc0Z0lDQjlLVHRjY2x4dUlDQWtLQ2N1YzJWaGNtTm9MV2hsWVdSbGNpMXNhVzVsSUhOMlp5NWpiRzl6WlNjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDUW9KMmhsWVdSbGNpQXVjMlZoY21Ob0xXaGxZV1JsY2kxc2FXNWxKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0pDZ25MbVpsWVhSMWNtVnpYMmwwWlcxekp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSkNnblltOWtlU2NwTG5KbGJXOTJaVU5zWVhOektDZHRiMlJoYkNjcE8xeHlYRzRnSUNBZ0pDZ25MbTkyWlhKc1lYa25LUzV5WlcxdmRtVW9LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1WW5WeVoyVnlMVzFsYm5VbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1YldWdWRWOXRiMkpwYkdVbktTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdJQ0JjY2x4dUlDQWdJQ1FvSjJKdlpIa25LUzVoWkdSRGJHRnpjeWduYlc5a1lXd25LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1YldWdWRWOXRiMkpwYkdVZ0xtMXZZbWxzWlMxb1pXRmtaWEl0WTI5dWRHRnBibVZ5SUM1amJHOXpaU2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNRb0p5NXRaVzUxWDIxdlltbHNaU2NwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDUW9KMkp2WkhrbktTNXlaVzF2ZG1WRGJHRnpjeWduYlc5a1lXd25LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Ym1GMlgzZHlZWEJ3WlhJZ0xtMWxiblVnTG0xbGJuVmZhWFJsYlhNbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1Ym1GMlgzZHlZWEJ3WlhJZ0xtMWxiblVnTG0xbGJuVmZhWFJsYlhNbktTNXlaVzF2ZG1WRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FrS0hSb2FYTXBMbUZrWkVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Ylc5aWFXeGxMVzFsYm5VdGQzSmhjSEJsY2lBdWJXVnVkU0F1YldWdWRWOXBkR1Z0Y3ljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDUW9KeTV0YjJKcGJHVXRiV1Z1ZFMxM2NtRndjR1Z5SUM1dFpXNTFJQzV0Wlc1MVgybDBaVzF6SnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdKQ2gwYUdsektTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbTF2WWw5emRXSmZiV1Z1ZFY5cGRHVnRjeWNwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUdsbUlDZ2tLQ2N1Ylc5aVgzTjFZbDl0Wlc1MVgybDBaVzF6SnlrdWFHRnpRMnhoYzNNb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmlBZ0lDQWdJQ1FvSnk1dGIySmZjM1ZpWDIxbGJuVmZhWFJsYlhNbktTNXlaVzF2ZG1WRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSUNRb2RHaHBjeWt1WVdSa1EyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnZlNCbGJITmxPMXh5WEc0Z0lDQWdhV1lnS0NRb2RHaHBjeWt1YUdGelEyeGhjM01vSjJGamRHbDJaU2NwS1NCN1hISmNiaUFnSUNBZ0lDUW9kR2hwY3lrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQjlPMXh5WEc0Z0lDQWdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbkJ5YjIxdlgyeHBibVVnYzNabkp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdKQ2gwYUdsektTNXdZWEpsYm5Rb0tTNWpjM01vSjJobGFXZG9kQ2NzSUNjd0p5azdYSEpjYmlBZ0lDQWtLSFJvYVhNcExuQmhjbVZ1ZENncExtTnpjeWduZG1semFXSnBiR2wwZVNjc0lDZG9hV1JrWlc0bktUdGNjbHh1SUNCOUtUdGNjbHh1SUNCaFpHUlNaVzF2ZG1WRGJHRnpjeWduTG1sdVptOHRabkpoYldVZ0xtbHVabTh0WTI5dWRHVnVkQzEzY21Gd2NHVnlQaTUwYVhSc1pTY3NKMkZqWTI5eVpHbHZiaTFpZEc0bktUdGNjbHh1SUNCaFpHUlNaVzF2ZG1WRGJHRnpjeWduYzJWamRHbHZiaTVwYm1adklDNXBibVp2TFcxbGJuVXRkM0poY0hCbGNpY3NJQ2RoWTJOdmNtUnBiMjRuS1R0Y2NseHVJQ0JoWkdSU1pXMXZkbVZEYkdGemMxODNOamNvSnk1bllXeHNMWGR5WVhCd0xXMWhhVzRuTENBbmJHOWhaQ2NwTzF4eVhHNGdJQ1FvZDJsdVpHOTNLUzV5WlhOcGVtVW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnWVdSa1VtVnRiM1psUTJ4aGMzTW9KeTVwYm1adkxXWnlZVzFsSUM1cGJtWnZMV052Ym5SbGJuUXRkM0poY0hCbGNqNHVkR2wwYkdVbkxDZGhZMk52Y21ScGIyNHRZblJ1SnlrN1hISmNiaUFnSUNCaFpHUlNaVzF2ZG1WRGJHRnpjeWduYzJWamRHbHZiaTVwYm1adklDNWpiMjUwWVdsdVpYSWdMbWx1Wm04dFpuSmhiV1VnTG1sdVptOHRiV1Z1ZFMxM2NtRndjR1Z5Snl3Z0oyRmpZMjl5WkdsdmJpY3BPMXh5WEc0Z0lDQWdiV1Z1ZFVGalkyOXlaR2x2YmsxdmRtVnlLQ2s3WEhKY2JpQWdJQ0JoWkdSU1pXMXZkbVZEYkdGemMxODNOamNvSnk1bllXeHNMWGR5WVhCd0xXMWhhVzRuTENBbmJHOWhaQ2NwTzF4eVhHNGdJSDBwTzF4eVhHNGdJRzFsYm5WQlkyTnZjbVJwYjI1TmIzWmxjaWdwTzF4eVhHNGdJR0ZqWTBWdVoybHVaU2duTG1Gall5MXZjR1Z1SnlrN1hISmNiaUFnWm5WdVkzUnBiMjRnYzJ4cFkyVlRaVzUwWlc1alpTaHhMQ0J6Wlc1MFpXNWpaU2tnZTF4eVhHNGdJQ0FnYkdWMElITnBlbVVnUFNCeExGeHlYRzRnSUNBZ0lDQnVaWGR6UTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvYzJWdWRHVnVZMlVwTzF4eVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdVpYZHpRMjl1ZEdWdWRDNXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnSUNCcFppQW9ibVYzYzBOdmJuUmxiblJiYVYwdWFXNXVaWEpJVkUxTUxteGxibWQwYUNBK0lITnBlbVVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdYSFJ1WlhkelEyOXVkR1Z1ZEZ0cFhTNXBibTVsY2toVVRVd2dQU0J1WlhkelEyOXVkR1Z1ZEZ0cFhTNXBibTVsY2toVVRVd3VjMnhwWTJVb01Dd2djMmw2WlNrZ0t5QW5JQzR1TGljN1hISmNiaUFnSUNBZ0lIMDdYSEpjYmlBZ0lDQjlPMXh5WEc0Z0lIMDdJQ0FnSUZ4eVhHNGdJQ0FnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElEdzlJRE0xTnlrZ2UxeHlYRzRnSUNBZ0lDQnpiR2xqWlZObGJuUmxibU5sS0RNMExDQW5MbVJwYzJOeWNIUnBiMjR0WjI5dlpITXRjeUErSUhBbktUdGNjbHh1SUNBZ0lDQWdjMnhwWTJWVFpXNTBaVzVqWlNnek15d2dKeTVrYVhOamNuQjBhVzl1TFdkdmIyUnpJRDRnY0NjcE95QmNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHVnNjMlVnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElEdzlJRFE0TUNBbUppQWtLSGRwYm1SdmR5a3VkMmxrZEdnb0tTQStQU0F6TlRjcElIdGNjbHh1SUNBZ0lDQWdJQ0J6YkdsalpWTmxiblJsYm1ObEtETTRMQ0FuTG1ScGMyTnljSFJwYjI0dFoyOXZaSE10Y3lBK0lIQW5LVHRjY2x4dUlDQWdJQ0FnSUNCemJHbGpaVk5sYm5SbGJtTmxLRE16TENBbkxtUnBjMk55Y0hScGIyNHRaMjl2WkhNZ1BpQndKeWs3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnYzJ4cFkyVlRaVzUwWlc1alpTZ3lOeXdnSnk1a2FYTmpjbkIwYVc5dUxXZHZiMlJ6TFhNZ1BpQndKeWs3WEhKY2JpQWdJQ0FnSUNCemJHbGpaVk5sYm5SbGJtTmxLRE16TENBbkxtUnBjMk55Y0hScGIyNHRaMjl2WkhNZ1BpQndKeWs3SUZ4eVhHNGdJQ0FnZlR0Y2NseHVJQ0JjY2x4dUlDQjJZV3hwWkdGMGIzSkdiM0p0S0Z3aUkzTnBaMjR0YVc1Y0lpazdYSEpjYmlBZ2RtRnNhV1JoZEc5eVJtOXliU2hjSWlOeVpYTmxkQzF3WVhOelhDSXBPMXh5WEc0Z0lDUW9KeTVqYkc5elpTMXdiM0IxY0NjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHTnNiM05sVUc5d1ZYQW9KeTV3YjNCMWNDNWhZM1JwZG1VbktUdGNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3VabVZoZEhWeVpYTmZhWFJsYlhNZ0xtRjFkRzl5YVhwaGRHbHZiaWNwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwZTF4eVhHNGdJQ0FnYjNCbGJsQnZjRlZ3S0NjamNHOXdkWEF0YzJsbmJpMXBiaWNwTzF4eVhHNGdJSDBwTzF4eVhHNGdJQ1FvSnlOd2IzQjFjQzF6YVdkdUxXbHVJQzVzYVc1clgzZHlZWEJ3WlhJZ1lTY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JpQWdJQ0JqYkc5elpWQnZjRlZ3S0NjdWNHOXdkWEF1WVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0J2Y0dWdVVHOXdWWEFvSnlOd2IzQjFjQzF5WlhObGRDMXdZWE56SnlrN1hISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxteGhibWN0ZDNKaGNIQmxjaUF1YzJWc1pXTjBMV3hoYm1jbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdKQ2gwYUdsektTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSkNoMGFHbHpLUzVqYUdsc1pISmxiaWdwTG14aGMzUW9LUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnZlNsY2NseHVJQ0FrS0NjdWJXVnVkVjl0YjJKcGJHVWdMbk5sWVhKamFDMXNhVzVsSnlrdVkyaGhibWRsS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0hSb2FYTXBMblpoYkNncExteGxibWQwYUNBK0lEQXBJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzVoWkdSRGJHRnpjeWduWlc1MFpYSW5LVHRjY2x4dUlDQWdJQ0FnSkNnbkxtMWxiblZmYlc5aWFXeGxJQzV6WldGeVkyZ25LUzVoWkdSRGJHRnpjeWduWlc1MFpYSW5LVHRjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJR2xtSUNna0tDY3ViV1Z1ZFY5dGIySnBiR1VnTG5ObFlYSmphQ2NwTG1oaGMwTnNZWE56S0NkbGJuUmxjaWNwS1NCN1hISmNiaUFnSUNBZ0lDQWdKQ2duTG0xbGJuVmZiVzlpYVd4bElDNXpaV0Z5WTJnbktTNXlaVzF2ZG1WRGJHRnpjeWduWlc1MFpYSW5LVHRjY2x4dUlDQWdJQ0FnSUNBa0tIUm9hWE1wTG5KbGJXOTJaVU5zWVhOektDZGxiblJsY2ljcE8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDaGNJaTV6ZFdKZmJXVnVkVjlwZEdWdGN5QStJR0ZjSWlrdWFHOTJaWElvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ1lXUmtTRzkyWlhJb2RHaHBjeTV3WVhKbGJuUkZiR1Z0Wlc1MEtUdGNjbHh1SUNCOUxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0J5WlcxdmRtVkliM1psY2loMGFHbHpMbkJoY21WdWRFVnNaVzFsYm5RcE8xeHlYRzRnSUgwcE8xeHlYRzRnSUNRb1hDSXViV1Z1ZFY5cGRHVnRjeUErSUdGY0lpa3VhRzkyWlhJb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdZV1JrU0c5MlpYSW9kR2hwY3lrN1hISmNiaUFnZlN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdjbVZ0YjNabFNHOTJaWElvZEdocGN5azdYSEpjYmlBZ0lIMHBPMXh5WEc0Z0lDUW9YQ0l1Wm1WaGRIVnlaWE5mYVhSbGJYTWdQaUJoWENJcExtaHZkbVZ5S0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHRmtaRWh2ZG1WeUtIUm9hWE11Y0dGeVpXNTBSV3hsYldWdWRDazdYSEpjYmlBZ2ZTd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnY21WdGIzWmxTRzkyWlhJb2RHaHBjeTV3WVhKbGJuUkZiR1Z0Wlc1MEtUdGNjbHh1SUNCOUtUdGNjbHh1SUNCc1pYUWdhR1ZwWjJoMFNHVmhaR1Z5SUQwZ0pDZ25hR1ZoWkdWeUp5a3VhR1ZwWjJoMEtDazdYSEpjYmlBZ0pDaDNhVzVrYjNjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0Nkb1pXRmtaWEluS1M1b1pXbG5hSFFvS1NBOElHaGxhV2RvZEVobFlXUmxjaWtnZTF4eVhHNGdJQ0FnSUNBa0tDZHRZV2x1SnlrdVkzTnpLQ2R3WVdSa2FXNW5KeXdnSkNnbmFHVmhaR1Z5SnlrdWFHVnBaMmgwS0NrZ0t5QW5jSGduS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5S1R0Y2NseHVJQ0JuYjFSdlEzVnljbVZ1WTNrb0p5NXdjbWxqWlNjcE8xeHlYRzRnSUdkdlZHOURkWEp5Wlc1amVTZ25MbkJ5YVdObFgyNWxkeWNwTzF4eVhHNGdJR2R2Vkc5RGRYSnlaVzVqZVNnbkxuQnlhV05sWDI5c1pDY3BPMXh5WEc0Z0lDUW9KeTVrWlhOamEzUnZjQzFtYVd4MFpYSXRZMjl1ZEdGcGJtVnlJQzVtYVd4MFpYSXRhR1ZoWkdWeUp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdhV1lnS0NFa0tIUm9hWE1wTG1oaGMwTnNZWE56S0NkaFkzUnBkbVVuS1NrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2N1WkdWelkydDBiM0F0Wm1sc2RHVnlMV052Ym5SaGFXNWxjaUF1Wm1sc2RHVnlMV2hsWVdSbGNpY3BMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbVJsYzJOcmRHOXdMV1pwYkhSbGNpMWpiMjUwWVdsdVpYSWdMbVpwYkhSbGNpMW9aV0ZrWlhJbktTNXVaWGgwS0NrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FrS0NjdWJHOWpheTF3YjJsdWRHVnlKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0FnSUdsbUlDZ2tLSFJvYVhNcExtaGhjME5zWVhOektDZHVieTFoWTNScGRtVW5LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dUlDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBa0tIUm9hWE1wTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0lDQWtLSFJvYVhNcExtNWxlSFFvS1M1aFpHUkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0lDQWdKQ2hjSWp4a2FYWWdZMnhoYzNNOUoyeHZZMnN0Y0c5cGJuUmxjaWMrUEM5a2FYWStYQ0lwTG1Gd2NHVnVaRlJ2S0Z3aVltOWtlVndpS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0pDZ25MbXh2WTJzdGNHOXBiblJsY2ljcExuSmxiVzkyWlNncE8xeHlYRzRnSUNBZ0lDQWtLSFJvYVhNcExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV1WlhoMEtDa3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDBwTzF4eVhHNGdJQ1FvWkc5amRXMWxiblFwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNCcFppQW9aUzUwWVhKblpYUXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2R3YjNCMWNGOWZkM0poY0hCbGNpY3BLU0I3WEhKY2JpQWdJQ0FnSUdOc2IzTmxVRzl3VlhBb0p5NXdiM0IxY0M1aFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0dSdlkzVnRaVzUwS1M1amJHbGpheWhtZFc1amRHbHZiaUFvWlNrZ2UxeHlYRzRnSUNBZ2FXWWdLR1V1ZEdGeVoyVjBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYkc5amF5MXdiMmx1ZEdWeUp5a3BJSHRjY2x4dUlDQWdJQ0FnSkNnbkxtWnBiSFJsY2kxb1pXRmtaWEluS1M1eVpXMXZkbVZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ1FvSnk1bWFXeDBaWEl0YUdWaFpHVnlKeWt1Ym1WNGRDZ3BMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbXh2WTJzdGNHOXBiblJsY2ljcExuSmxiVzkyWlNncE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxMblJoY21kbGRDNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMjkyWlhKc1lYa25LU2tnZTF4eVhHNGdJQ0FnSUNBa0tDZG9aV0ZrWlhJZ0xuTmxZWEpqYUMxb1pXRmtaWEl0YkdsdVpTY3BMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbVpsWVhSMWNtVnpYMmwwWlcxekp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tDZGliMlI1SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjF2WkdGc0p5azdYSEpjYmlBZ0lDQWdJQ1FvSnk1dmRtVnliR0Y1SnlrdWNtVnRiM1psS0NrN1hISmNiaUFnSUNCOVhISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxtMXZjbVV0YkdWemN5MW1hV3gwWlhJbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLSFJvYVhNcExuUnZaMmRzWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ1FvZEdocGN5a3VZMmhwYkdSeVpXNG9LUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNCcFppQW9KQ2gwYUdsektTNW9ZWE5EYkdGemN5Z25ZV04wYVhabEp5a3BJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUW9LUzVoWkdSRGJHRnpjeWduYjNCbGJpY3BPMXh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5Rb0tTNXlaVzF2ZG1WRGJHRnpjeWduYjNCbGJpY3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMHBPMXh5WEc0Z0lHbHVhWFJTWVc1blpWTnNhV1JsY2lncE8xeHlYRzRnSUdOb1pXTnJRbTk0Ulc1bmFXNWxLQ2N1WW05NExXTm9aV05yTG5OcGVtVW5LVHRjY2x4dUlDQmphR1ZqYTBKdmVFVnVaMmx1WlNnbkxtSnZlQzFqYUdWamF5NWpiMnh2Y2ljcE8xeHlYRzRnSUdOb1pXTnJRbTk0Ulc1bmFXNWxLQ2N1WW05NExXTm9aV05yTG1OaGRGOW1KeWs3WEhKY2JpQWdZMmhsWTJ0Q2IzaEZibWRwYm1Vb0p5NWliM2d0WTJobFkyc3VZbkpoYm1RbktUdGNjbHh1SUNCamFHVmphMEp2ZUVWdVoybHVaU2duTG1KdmVDMWphR1ZqYXk1dFlYUmxjbWxoYkNjcE8xeHlYRzRnSUdOb1pXTnJRbTk0Ulc1bmFXNWxLQ2N1WW05NExXTm9aV05yTG1nbktUdGNjbHh1SUNCeVpYTmxkRk5sYkdWamRDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUxuTnBlbVVnTG5KbGMyVnlMWE5sYkdWamRDY3NJQ2N1WW05NExXTm9aV05yTG5OcGVtVW5LVHRjY2x4dUlDQnlaWE5sZEZObGJHVmpkQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlMbU52Ykc5eUlDNXlaWE5sY2kxelpXeGxZM1FuTENBbkxtSnZlQzFqYUdWamF5NWpiMnh2Y2ljcE8xeHlYRzRnSUhKbGMyVjBVMlZzWldOMEtDY3VZMjl1ZEdWdWRDMW1hV3gwWlhJdVkyRjBYMllnTG5KbGMyVnlMWE5sYkdWamRDY3NJQ2N1WW05NExXTm9aV05yTG1OaGRGOW1KeWs3WEhKY2JpQWdjbVZ6WlhSVFpXeGxZM1FvSnk1amIyNTBaVzUwTFdacGJIUmxjaTVpY21GdVpDQXVjbVZ6WlhJdGMyVnNaV04wSnl3Z0p5NWliM2d0WTJobFkyc3VZbkpoYm1RbktUdGNjbHh1SUNCeVpYTmxkRk5sYkdWamRDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUxtMWhkR1Z5YVdGc0lDNXlaWE5sY2kxelpXeGxZM1FuTENBbkxtSnZlQzFqYUdWamF5NXRZWFJsY21saGJDY3BPMXh5WEc0Z0lISmxjMlYwVTJWc1pXTjBLQ2N1WTI5dWRHVnVkQzFtYVd4MFpYSXVhQ0F1Y21WelpYSXRjMlZzWldOMEp5d2dKeTVpYjNndFkyaGxZMnN1YUNjcE8xeHlYRzRnSUNRb0p5NXRiMkpwYkdVdFptbHNkR1Z5TFdOdmJuUmhhVzVsY2lBdVptbHNkR1Z5TFdobFlXUmxjaWNwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUc5d1pXNVFiM0JWY0Nna0tIUm9hWE1wTG01bGVIUW9LU2s3WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG0xdlpHRnNMV1pwZEdWeUlDNTBhWFJzWlMxbWFXeDBaWElnYzNabkp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdZMnh2YzJWUWIzQlZjQ2duTG0xdlpHRnNMV1pwZEdWeUp5azdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbTF2WWkxbWFXeDBaWEl0YUdWaFpHVnlKeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSkNoMGFHbHpLUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBa0tIUm9hWE1wTG5CaGNtVnVkQ2dwTG5SdloyZHNaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNCOUtUdGNjbHh1SUNCY2NseHVJQ0JzWlhRZ1kyOTFiblFnUFNBd08xeHlYRzRnSUNBa0tDY3ViVzlpTFdOb1pXTnJMV2wwWlcxeklDNWliM2d0WTJobFkyc25LUzVqYUdGdVoyVW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNCcFppQW9KQ2gwYUdsektTNXdjbTl3S0NkamFHVmphMlZrSnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0JqYjNWdWRDc3JPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUdOdmRXNTBMUzA3WEhKY2JpQWdJQ0FnSUgxY2NseHVJQ0FnSUNBa0tDY3ViVzlrWVd3dGNtVnpaWFFnYzNCaGJpY3BMbWgwYld3b0p5Z25JQ3NnWTI5MWJuUWdLeUFuS1NjcFhISmNiaUFnSUNBZ2FXWWdLR052ZFc1MElENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYSmxjMlYwSnlrdWNtVnRiM1psUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYTjFZbTFwZENjcExuSmxiVzkyWlVOc1lYTnpLQ2R1YnkxaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYSmxjMlYwSnlrdVlXUmtRMnhoYzNNb0oyNXZMV0ZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FnSkNnbkxtMXZaR0ZzTFhOMVltMXBkQ2NwTG1Ga1pFTnNZWE56S0NkdWJ5MWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQjlYSEpjYmlBZ0lIMHBPMXh5WEc0Z0lDUW9KeTV0YjJJdFkyaGxZMnN0YVhSbGJYTWdMbUp2ZUMxamFHVmphenB1YjNRb0xtTnZiRzl5S1NjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0hSb2FYTXBMbkJ5YjNBb0oyTm9aV05yWldRbktTa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblJ6S0NjdWJXOWlMV1pwYkhSbGNpMXBkR1Z0Y3ljcExtTm9hV3hrY21WdUtDY3ViVzlpTFdacGJIUmxjaTFvWldGa1pYSW5LUzVoY0hCbGJtUW9Kenh6Y0dGdUlHUmhkR0V0Ym1GdFpUMG5LeUFrS0hSb2FYTXBMbTVsZUhRb0tTNW9kRzFzS0Nrckp6NG9KeUFySUNRb2RHaHBjeWt1Ym1WNGRDZ3BMbWgwYld3b0tTQXJJQ2NwUEM5emNHRnVQaWNwTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tIUm9hWE1wTG5CaGNtVnVkSE1vSnk1dGIySXRabWxzZEdWeUxXbDBaVzF6SnlrdVkyaHBiR1J5Wlc0b0p5NXRiMkl0Wm1sc2RHVnlMV2hsWVdSbGNpY3BMbVpwYm1Rb0ozTndZVzViWkdGMFlTMXVZVzFsUFNjckpDaDBhR2x6S1M1dVpYaDBLQ2t1YUhSdGJDZ3BLeWRkSnlrdWNtVnRiM1psS0NrN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3ViVzlrWVd3dGNtVnpaWFFuS1M1amJHbGpheWhtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBa0tDY3ViVzlpTFdOb1pXTnJMV2wwWlcxeklDNWliM2d0WTJobFkyc25LUzV3Y205d0tDZGphR1ZqYTJWa0p5d2dabUZzYzJVcE8xeHlYRzRnSUNBZ0pDZ25MbTF2WWkxbWFXeDBaWEl0YUdWaFpHVnlKeWt1Wm1sdVpDZ25jM0JoYmljcExuSmxiVzkyWlNncE8xeHlYRzRnSUNBZ1kyOTFiblFnUFNBd08xeHlYRzRnSUNBZ0pDZ25MbTF2WkdGc0xYSmxjMlYwSUhOd1lXNG5LUzVvZEcxc0tDY29KeUFySUdOdmRXNTBJQ3NnSnlrbktUdGNjbHh1SUNBZ0lDUW9KeTV0YjJSaGJDMXlaWE5sZENjcExtRmtaRU5zWVhOektDZHVieTFoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ1FvSnk1dGIyUmhiQzF6ZFdKdGFYUW5LUzVoWkdSRGJHRnpjeWduYm04dFlXTjBhWFpsSnlrN1hISmNibHh5WEc0Z0lIMHBPMXh5WEc0Z0lHbG1JQ2drS0NjalluUnVMWGRoZEdOb0p5a3ViR1Z1WjNSb0lENGdNQ2tnZTF4eVhHNGdJQ0FnSUNRb1pHOWpkVzFsYm5RcExuTmpjbTlzYkNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJR2xtSUNoamIyMWxLQ2NqWW5SdUxYZGhkR05vSnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSkNnbkxuQnlaWFpwWlhjdGFHVmhaR1Z5TFdkdmIyUnpKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FrS0NjdWNISmxkbWxsZHkxb1pXRmtaWEl0WjI5dlpITW5LUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWxjY2x4dUlDQWdJQ0FnSUgxY2NseHVJQ0FnSUNCOUtUdGNjbHh1SUNCOU8xeHlYRzRnSUZ4eVhHNGdJR3hsZENCdGIySkhZV3hzVTJ4cFpHVnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbWRoYkd3dGQzSmhjSEF0YldGcGJpY3BMRnh5WEc0Z0lDQWdZMnh2YzJWSFlXeHNaWEo1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1kaGJHd3RZMnh2YzJVdFluUnVKeWs3WEhKY2JpQWdhV1lnS0cxdllrZGhiR3hUYkdsa1pYSXBJSHRjY2x4dUlDQWdJQ0FnWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaUFvWlNrZ2UxeHlYRzRnSUNBZ0lDQWdhV1lnS0dVdWRHRnlaMlYwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbloyRnNiQzEzY21Gd2NDMXRZV2x1SnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUcxdllrZGhiR3hUYkdsa1pYSXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25iM0JsYmljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnWkc5amRXMWxiblF1WW05a2VTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHRiMlJoYkNjcFhISmNiaUFnSUNBZ0lDQjlJR1ZzYzJVZ2V5QnlaWFIxY200Z2ZUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdZMnh2YzJWSFlXeHNaWEo1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQnRiMkpIWVd4c1UyeHBaR1Z5TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjI5d1pXNG5LVHRjY2x4dUlDQWdJQ0FnWkc5amRXMWxiblF1WW05a2VTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHRiMlJoYkNjcE8xeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOemJHbGtaUzB4SnlrdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlBb1pTa2dlMXh5WEc0Z0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JpQWdJQ0FnSUcxdllrZGhiR3hUYkdsa1pYSXVZMnhoYzNOTWFYTjBMbUZrWkNnbmIzQmxiaWNwTzF4eVhHNGdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbU5zWVhOelRHbHpkQzVoWkdRb0oyMXZaR0ZzSnlrN1hISmNiaUFnSUNBZ0lITjNhWEJsY2tkdmIyUnpMbk5zYVdSbFZHOG9NU3dnTUNrN1hISmNiaUFnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRJbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWd5TENBd0tUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRNbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWd6TENBd0tUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRRbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWcwTENBd0tUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRVbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWcxTENBd0tUdGNjbHh1SUNBZ0lIMHBPeUFnWEhKY2JpQWdmU0JsYkhObElIc2djbVYwZFhKdUlIMDdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVJQ0pkTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pZlE9PVxuIl0sImZpbGUiOiJpbmRleC5qcyJ9
