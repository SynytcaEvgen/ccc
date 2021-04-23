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
       let formatNum = new Intl.NumberFormat('ru-RU').format(toNumb);
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
  let textareaLineHeight=parseInt($(".textarea-wrapper textarea").css("line-height"));
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
            '<use href="/local/templates/main/assets/sprite/sprite.svg#close"></use>' +
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
    //   jin[i].addEventListener('keydown', function(e){
        // if (!e.key.match(/[A-zА-яЁё ]/)) return e.preventDefault();
    //  }); 
      jin[i].addEventListener('input', function(e){
       this.value = this.value.replace(/\d/g, "");
       this.value = this.value.replace(/[.*_~`+;₴$₽'":%#@!*?^$-=<>№{}()|[\]\\]/g, "");
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

  $(window).resize(function () {
    addRemoveClass('.info-frame .info-content-wrapper>.title','accordion-btn');
    addRemoveClass('section.info .container .info-frame .info-menu-wrapper', 'accordion');
    addRemoveClass_767('.gall-wrapp-main', 'load');
    ifShadow('.popup.active .size-table');
    if ($(window).width() <= (767 - withScrollBar())) {
      sliceSentence('.discrption-goods:not(.catalog-k) p', 'cut-word');
      sliceSentence('.discrption-goods.catalog-k p', 'catalog-k');
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
  // let favIcon = document.querySelectorAll('.favorit');
  // let count_fav1 = 0;
  // for (let i = 0; i < favIcon.length; i++) {
  //   favIcon[i].addEventListener('click', function () {
  //     this.classList.toggle('select');
  //     let rrtt = document.querySelectorAll('.favorit.select');
  //     console.log(rrtt.length)
  //     if (rrtt.length == 0) {
        
  //     }
  //   });
  // };
  $('.size-holder .size-items').click(function () {
    $('.size-holder .size-items').removeClass('current');
    $(this).toggleClass('current');
  });
  // $('.add-to-favorit').click(function () {
  //   $('.add-to-favorit').toggleClass('select');
  // });
  $('.add_to_favorit').click(function(e){
        let button      = $(e.currentTarget)
        let prod_id     = button.data('product_id')
        let need_delete = (button.hasClass('select')) ? 1 : 0;
        let fav_icon = $('.features_items .favorit .icon_quantity');
        let parseToIn = parseInt(fav_icon.html());

        $.ajax({
            url: '/local/ajax/favorites.php',
            method: 'post',
            data: {
                favorite: prod_id,
                delete: need_delete
            },
            success: function(response){
                response = JSON.parse(response);

                if(!response.success) {
                    if(need_delete) {
                      button.removeClass('select');
                      parseToIn--;
                      if (parseToIn == 0 || parseToIn < 0) {
                        fav_icon.removeClass('active');
                        parseToIn = 0;
                      }
                      fav_icon.html(parseToIn);
                    }else {
                      button.addClass('select');
                      parseToIn++;
                      fav_icon.html(parseToIn);
                      if (!parseToIn == 0  ) {
                        fav_icon.addClass('active')
                      }
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
  
  onlyLetterInput('.only_letter');
  // $("textarea").overlayScrollbars({
  //   textarea : {
  //       dynWidth       : false,
  //       // dynHeight      : true,
  //       inheritedAttrs : ["style", "class"]
  //   },
    
  // }); 
};


 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMzUwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xyXG5cclxuICAgIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgICAgIH0sXHJcblx0XHRcdCAgIDM3NToge1xyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdCAgIH0sXHJcblx0XHRcdCAgIDEzNjY6IHtcclxuXHRcdFx0ICAgXHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHQgICB9LFxyXG5cdFx0ICB9LFxyXG4gICAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXHJcbiAgZnVuY3Rpb24gbWVudUFjY29yZGlvbk1vdmVyKCkge1xyXG4gICAgbGV0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJ0blwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCYmcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFjY0VuZ2luZShwaWNrKSB7XHJcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwaWNrKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFJlbW92ZUNsYXNzKGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDkwMCkge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3NfNzY3KGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDc2Nykge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb3BlblBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjbG9zZVBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBqUXVlcnkuZXh0ZW5kKGpRdWVyeS52YWxpZGF0b3IubWVzc2FnZXMsIHtcclxuICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1INGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C8XCIsXHJcbiAgICByZW1vdGU6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIGVtYWlsOiBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiLFxyXG4gIH0pO1xyXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIkVNQUlMXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aLl17Miw1fSQvaS50ZXN0KHZhbHVlKTtcclxuICB9LCBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0b3JGb3JtKGVsZW0pIHtcclxuICAgICQoZWxlbSkudmFsaWRhdGUoe1xyXG4gICAgICBydWxlczoge1xyXG4gICAgICAgIHBzd29yZDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbF9uOlwicmVxdWlyZWQgRU1BSUxcIixcclxuICAgICAgfSxcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwc3dvcmQ6IHtcclxuICAgICAgICAgIG1pbmxlbmd0aDogJ9Cc0LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8gNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gcmVtb3ZlSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gZ29Ub0N1cnJlbmN5KGVsZW0pIHtcclxuICAgIGxldCBudW1iZXJUb0Zvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclRvRm9ybWF0Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgbGV0IHRvTnVtYiA9ICtudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUw7XHJcbiAgICAgICBsZXQgZm9ybWF0TnVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnUlVCJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pLmZvcm1hdCh0b051bWIpO1xyXG4gICAgICAgbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MID0gZm9ybWF0TnVtO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2hlY2tCb3hFbmdpbmUoZWxlbSkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICB9XHJcbiAgICAgIGNoZWNoQnRuKHRoaXMsIGNvdW50KTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzVW50aWwoJy5jb250ZW50LWZpbHRlcicpLm5leHQoJy5idG4td3JhcHBlcicpLmNoaWxkcmVuKCcuc3RhdGUtc2VsZWN0JykuY2hpbGRyZW4oJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbChjb3VudCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNoZWNoQnRuKGVsZW0sIGEpIHtcclxuICAgIGlmIChhID4gMCkge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5hZGRDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0KGVsZW0sIGJveCkge1xyXG4gICAgJChlbGVtKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoYm94KS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAkKGVsZW0pLm5leHQoJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgwKTtcclxuICAgICAgY291bnQgPSAwO1xyXG4gICAgICBjaGVjaEJ0bihib3gpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBpbml0UmFuZ2VTbGlkZXIoKSB7IFxyXG4gICAgdmFyICRyYW5nZSA9ICQoXCIuanMtcmFuZ2Utc2xpZGVyXCIpLFxyXG4gICAgJGlucHV0RnJvbSA9ICQoXCIuanMtaW5wdXQtZnJvbVwiKSxcclxuICAgICRpbnB1dFRvID0gJChcIi5qcy1pbnB1dC10b1wiKSxcclxuICAgIGluc3RhbmNlLFxyXG4gICAgbWluID0gMCxcclxuICAgIG1heCA9IDEwMDAwMCxcclxuICAgIGZyb20gPSAwLFxyXG4gICAgdG8gPSAwO1xyXG4gICAgJHJhbmdlLmlvblJhbmdlU2xpZGVyKHtcclxuICAgIFx0ICBza2luOiBcInJvdW5kXCIsXHJcbiAgICAgICAgdHlwZTogXCJkb3VibGVcIixcclxuICAgICAgICBtaW46IG1pbixcclxuICAgICAgICBtYXg6IG1heCxcclxuICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgIHRvOiAxMDAwMDAsXHJcbiAgICAgICAgb25TdGFydDogdXBkYXRlSW5wdXRzLFxyXG4gICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVJbnB1dHNcclxuICAgIH0pO1xyXG4gICAgaW5zdGFuY2UgPSAkcmFuZ2UuZGF0YShcImlvblJhbmdlU2xpZGVyXCIpO1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRzIChkYXRhKSB7XHJcbiAgICBcdGZyb20gPSBkYXRhLmZyb207XHJcbiAgICAgICAgdG8gPSBkYXRhLnRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRpbnB1dEZyb20ucHJvcChcInZhbHVlXCIsIGZyb20pO1xyXG4gICAgICAgICRpbnB1dFRvLnByb3AoXCJ2YWx1ZVwiLCB0byk7XHRcclxuICAgIH1cclxuICAgICRpbnB1dEZyb20ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IG1pbikge1xyXG4gICAgICAgICAgICB2YWwgPSBtaW47XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiB0bykge1xyXG4gICAgICAgICAgICB2YWwgPSB0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogdmFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJGlucHV0VG8ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IGZyb20pIHtcclxuICAgICAgICAgICAgdmFsID0gZnJvbTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG1heCkge1xyXG4gICAgICAgICAgICB2YWwgPSBtYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHRvOiB2YWxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgKGZ1bmN0aW9uKCQpe1xyXG4gICAgICAgICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAuZmlsdGVyLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLm1vYi1jaGVjay1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuYWxsLWxhbmctaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICB9KShqUXVlcnkpO1xyXG4gIGZ1bmN0aW9uIGNvbWUoZWxlbSkge1xyXG4gICAgdmFyIGRvY1ZpZXdUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxyXG4gICAgICBlbGVtVG9wID0gJChlbGVtKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgIGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgJChlbGVtKS5oZWlnaHQoKTtcclxuXHJcbiAgICByZXR1cm4gKChlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20pICYmIChlbGVtVG9wID49IGRvY1ZpZXdUb3ApKTtcclxuICB9XHJcbiAgICQoJy5mZWF0dXJlc19pdGVtcyAuc2VhcmNoJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDkwMCkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9kYWwnKTtcclxuICAgICAgaWYgKCQoJ2JvZHk+ZGl2JykuaGFzQ2xhc3MoJ292ZXJsYXknKSkge1xyXG4gICAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5zZWFyY2gtd3JhcHBlciAuZm9ybSA+IGlucHV0JykuZm9jdXMoKTtcclxuICAgICB9O1xyXG4gICAgIHJldHVybiBmYWxzZVxyXG4gICB9KTtcclxuICAkKCcuc2VhcmNoLWhlYWRlci1saW5lIHN2Zy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICB9KTtcclxuICAkKCcuYnVyZ2VyLW1lbnUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7ICBcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubWVudV9tb2JpbGUgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIC5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tZW51X21vYmlsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubW9iaWxlLW1lbnUtd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfSk7XHJcbiAgJCgnLnByb21vX2xpbmUgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsICcwJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICB9KTtcclxuICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsJ2FjY29yZGlvbi1idG4nKTtcclxuICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5pbmZvLW1lbnUtd3JhcHBlcicsICdhY2NvcmRpb24nKTtcclxuICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gICAgbWVudUFjY29yZGlvbk1vdmVyKCk7XHJcbiAgICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gIH0pO1xyXG4gIG1lbnVBY2NvcmRpb25Nb3ZlcigpO1xyXG4gIGFjY0VuZ2luZSgnLmFjYy1vcGVuJyk7XHJcbiAgZnVuY3Rpb24gc2xpY2VTZW50ZW5jZShxLCBzZW50ZW5jZSkge1xyXG4gICAgbGV0IHNpemUgPSBxLFxyXG4gICAgICBuZXdzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VudGVuY2UpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobmV3c0NvbnRlbnRbaV0uaW5uZXJIVE1MLmxlbmd0aCA+IHNpemUpIHtcclxuICAgICAgICAgXHRuZXdzQ29udGVudFtpXS5pbm5lckhUTUwgPSBuZXdzQ29udGVudFtpXS5pbm5lckhUTUwuc2xpY2UoMCwgc2l6ZSkgKyAnIC4uLic7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07ICAgIFxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDM1Nykge1xyXG4gICAgICBzbGljZVNlbnRlbmNlKDM0LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgzMywgJy5kaXNjcnB0aW9uLWdvb2RzID4gcCcpOyBcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCAmJiAkKHdpbmRvdykud2lkdGgoKSA+PSAzNTcpIHtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDM4LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgc2xpY2VTZW50ZW5jZSgyNywgJy5kaXNjcnB0aW9uLWdvb2RzLXMgPiBwJyk7XHJcbiAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7IFxyXG4gICAgfTtcclxuICBcclxuICB2YWxpZGF0b3JGb3JtKFwiI3NpZ24taW5cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNyZXNldC1wYXNzXCIpO1xyXG4gICQoJy5jbG9zZS1wb3B1cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcuZmVhdHVyZXNfaXRlbXMgLmF1dG9yaXphdGlvbicpLmNsaWNrKGZ1bmN0aW9uICgpe1xyXG4gICAgb3BlblBvcFVwKCcjcG9wdXAtc2lnbi1pbicpO1xyXG4gIH0pO1xyXG4gICQoJyNwb3B1cC1zaWduLWluIC5saW5rX3dyYXBwZXIgYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1yZXNldC1wYXNzJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmxhbmctd3JhcHBlciAuc2VsZWN0LWxhbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmxhc3QoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSlcclxuICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaC1saW5lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmhhc0NsYXNzKCdlbnRlcicpKSB7XHJcbiAgICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIi5zdWJfbWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIubWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcyk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcyk7XHJcbiAgIH0pO1xyXG4gICQoXCIuZmVhdHVyZXNfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZEhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9KTtcclxuICBsZXQgaGVpZ2h0SGVhZGVyID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgJCh3aW5kb3cpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCdoZWFkZXInKS5oZWlnaHQoKSA8IGhlaWdodEhlYWRlcikge1xyXG4gICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nJywgJCgnaGVhZGVyJykuaGVpZ2h0KCkgKyAncHgnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBnb1RvQ3VycmVuY3koJy5wcmljZScpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX25ldycpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX29sZCcpO1xyXG4gICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCduby1hY3RpdmUnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIjxkaXYgY2xhc3M9J2xvY2stcG9pbnRlcic+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fd3JhcHBlcicpKSB7XHJcbiAgICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbG9jay1wb2ludGVyJykpIHtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vcmUtbGVzcy1maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGluaXRSYW5nZVNsaWRlcigpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLnNpemUnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmgnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLnNpemUgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLnNpemUnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLmNvbG9yIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuY2F0X2YgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5icmFuZCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLm1hdGVyaWFsIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuaCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suaCcpO1xyXG4gICQoJy5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5Qb3BVcCgkKHRoaXMpLm5leHQoKSk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vZGFsLWZpdGVyIC50aXRsZS1maWx0ZXIgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY2xvc2VQb3BVcCgnLm1vZGFsLWZpdGVyJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBcclxuICBsZXQgY291bnQgPSAwO1xyXG4gICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgIH1cclxuICAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpXHJcbiAgICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9XHJcbiAgIH0pO1xyXG4gICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjazpub3QoLmNvbG9yKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5hcHBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nKyAkKHRoaXMpLm5leHQoKS5odG1sKCkrJz4oJyArICQodGhpcykubmV4dCgpLmh0bWwoKSArICcpPC9zcGFuPicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5tb2ItZmlsdGVyLWl0ZW1zJykuY2hpbGRyZW4oJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJ3NwYW5bZGF0YS1uYW1lPScrJCh0aGlzKS5uZXh0KCkuaHRtbCgpKyddJykucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAkKCcubW9kYWwtcmVzZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuZmluZCgnc3BhbicpLnJlbW92ZSgpO1xyXG4gICAgY291bnQgPSAwO1xyXG4gICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKTtcclxuICAgICQoJy5tb2RhbC1yZXNldCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICQoJy5tb2RhbC1zdWJtaXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG4gIGlmICgkKCcjYnRuLXdhdGNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChjb21lKCcjYnRuLXdhdGNoJykpIHtcclxuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgIH1cclxuICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBtb2JHYWxsU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtd3JhcHAtbWFpbicpLFxyXG4gICAgY2xvc2VHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtY2xvc2UtYnRuJyk7XHJcbiAgaWYgKG1vYkdhbGxTbGlkZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbC13cmFwcC1tYWluJykpIHtcclxuICAgICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpXHJcbiAgICAgICB9IGVsc2UgeyByZXR1cm4gfTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMSwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygyLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygzLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg0LCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg1LCAwKTtcclxuICAgIH0pOyAgXHJcbiAgfSBlbHNlIHsgcmV0dXJuIH07XHJcbn07XHJcblxyXG5cclxuICJdLCJmaWxlIjoiaW5kZXguanMifQ==

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMzUwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xyXG5cclxuICAgIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgICAgIH0sXHJcblx0XHRcdCAgIDM3NToge1xyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdCAgIH0sXHJcblx0XHRcdCAgIDEzNjY6IHtcclxuXHRcdFx0ICAgXHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHQgICB9LFxyXG5cdFx0ICB9LFxyXG4gICAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXHJcbiAgZnVuY3Rpb24gd2l0aFNjcm9sbEJhcigpIHtcclxuICAgIGxldCBwb3BXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgIGxldCB3U2Nyb2xsID0gd2luZG93LmlubmVyV2lkdGggLSBwb3BXcmFwLm9mZnNldFdpZHRoO1xyXG4gICAgIHJldHVybiB3U2Nyb2xsO1xyXG4gIH1cclxuICBmdW5jdGlvbiBtZW51QWNjb3JkaW9uTW92ZXIoKSB7XHJcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tYnRuXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0JiZwYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbicpKSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICB9KTtcclxuICAgIH07IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWNjRW5naW5lKHBpY2spIHtcclxuICAgIGxldCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBpY2spO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHsgICAgXHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFJlbW92ZUNsYXNzKGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XHJcbiAgICAgICQoZWxlbSkuYWRkQ2xhc3MoYWRkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBmdW5jdGlvbiBhZGRSZW1vdmVDbGFzc183NjcoZWxlbSwgYWRkKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gKDc2NyAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgICAgJChlbGVtKS5hZGRDbGFzcyhhZGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChlbGVtKS5yZW1vdmVDbGFzcyhhZGQpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIG9wZW5Qb3BVcChlbGVtKSB7XHJcbiAgICBsZXQgd1Njcm9sTyA9IHdpdGhTY3JvbGxCYXIoKTtcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXJpZ2h0Jywgd1Njcm9sTyk7XHJcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCB3U2Nyb2xPKTtcclxuICAgICQoJ2hlYWRlciAucHJvbW9fbGluZScpLmNzcygncGFkZGluZy1yaWdodCcsIHdTY3JvbE8pO1xyXG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAtd1Njcm9sTyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjbG9zZVBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgMCk7XHJcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcclxuICAgICQoJ2hlYWRlciAucHJvbW9fbGluZScpLmNzcygncGFkZGluZy1yaWdodCcsIDApO1xyXG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAwKTtcclxuICB9O1xyXG4gIGpRdWVyeS5leHRlbmQoalF1ZXJ5LnZhbGlkYXRvci5tZXNzYWdlcywge1xyXG4gICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIHJlbW90ZTogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxyXG4gICAgZW1haWw6IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIsXHJcbiAgfSk7XHJcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiRU1BSUxcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS1dK1xcLlthLXpBLVouXXsyLDV9JC9pLnRlc3QodmFsdWUpO1xyXG4gIH0sIFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIpO1xyXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIlBIT05FXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL14oXFxzKik/KFxcKyk/KFstIF8oKTo9K10/XFxkWy0gXygpOj0rXT8pezEwLDE0fShcXHMqKT8kLy50ZXN0KHZhbHVlKTtcclxuICB9LCBcItCS0LLQtdC00LjRgtC1INC60L7RgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIik7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdG9yRm9ybShlbGVtKSB7XHJcbiAgICAkKGVsZW0pLnZhbGlkYXRlKHtcclxuICAgICAgcnVsZXM6IHtcclxuICAgICAgICBwc3dvcmQ6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWlubGVuZ3RoOiA2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXN0X25hbWU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2l0eToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJlZXQ6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ViamVjdDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1aWxkaW5nOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwYXJ0YW1lbnQ6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICB6aXA6IHtcclxuICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgICAgbWF4bGVuZ3RoOiA2LFxyXG4gICAgICAgICAgIGRpZ2l0czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3RfbmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwc3dvcmRfY29uZmlybToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgICBlcXVhbFRvIDogXCIjcGVyc29uLXBhc3NcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsX246IFwicmVxdWlyZWQgRU1BSUxcIixcclxuICAgICAgICBlbWFpbF9wcjogXCJFTUFJTFwiLFxyXG4gICAgICAgIHBob25lX3J1OiBcIlBIT05FXCIsXHJcbiAgICAgICAgcGhvbmVfcnVfcmVxOiBcInJlcXVpcmVkIFBIT05FXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgcHN3b3JkOiB7XHJcbiAgICAgICAgICBtaW5sZW5ndGg6ICfQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPIDYg0YHQuNC80LLQvtC70L7QsidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBzd29yZF9jb25maXJtOiB7XHJcbiAgICAgICAgICBlcXVhbFRvOiBcItCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RglwiLFxyXG4gICAgICAgICAgbWlubGVuZ3RoOiAn0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6aXA6IHtcclxuICAgICAgICAgIG1pbmxlbmd0aDon0J/QvtGH0YLQvtCy0YvQuSDQuNC90LTQtdC60YEg0YHQvtGB0YLQvtC40YIg0LjQtyA2INGG0LjRhNGAJyxcclxuICAgICAgICAgIG1heGxlbmd0aDogJ9Cf0L7Rh9GC0L7QstGL0Lkg0LjQvdC00LXQutGBINGB0L7RgdGC0L7QuNGCINC40LcgNiDRhtC40YTRgCcsXHJcbiAgICAgICAgICBkaWdpdHM6ICfQn9C+0YfRgtC+0LLRi9C5INC40L3QtNC10LrRgSDRgdC+0YHRgtC+0LjRgiDQuNC3IDYg0YbQuNGE0YAnLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZEhvdmVyKGVsZW0pIHsgXHJcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdpbi1ob3ZlcicpOyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIHJlbW92ZUhvdmVyKGVsZW0pIHsgXHJcbiAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCdpbi1ob3ZlcicpOyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGdvVG9DdXJyZW5jeShlbGVtKSB7XHJcbiAgICBsZXQgbnVtYmVyVG9Gb3JtYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJUb0Zvcm1hdC5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgIGxldCB0b051bWIgPSArbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MO1xyXG4gICAgICAgbGV0IGZvcm1hdE51bSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQodG9OdW1iKTtcclxuICAgICAgIG51bWJlclRvRm9ybWF0W2ldLmlubmVySFRNTCA9IGZvcm1hdE51bTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGNoZWNrQm94RW5naW5lKGVsZW0pIHtcclxuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHNlbGVjdENoZWNrID0gJCh0aGlzKS5wYXJlbnRzKCcuY29udGVudC1maWx0ZXInKS5maW5kKCcubnVtYi1zZWxlY3Qgc3BhbicpLFxyXG4gICAgICAgIG51bVNlbGVjdGVkID0gK3NlbGVjdENoZWNrLmh0bWwoKTtcclxuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgbnVtU2VsZWN0ZWQrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAobnVtU2VsZWN0ZWQgPiAwKSB7XHJcbiAgICAgICAgICBudW1TZWxlY3RlZC0tO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBudW1TZWxlY3RlZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNoZWNoQnRuKHRoaXMsIG51bVNlbGVjdGVkKTtcclxuICAgICAgc2VsZWN0Q2hlY2suaHRtbChudW1TZWxlY3RlZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGNoZWNoQnRuKGVsZW0sIGEpIHtcclxuICAgIGxldCBwYXJCdG4gPSAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJyksXHJcbiAgICAgICAgZkl0ZW0gPSAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKTtcclxuICAgIGlmIChhID4gMCkge1xyXG4gICAgICBwYXJCdG4ucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICBmSXRlbS5hZGRDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJCdG4uYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICBmSXRlbS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0KGVsZW0pIHtcclxuICAgICQoZWxlbSkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgYm94SW4gPSAkKHRoaXMpLnBhcmVudHMoJy5jb250ZW50LWZpbHRlcicpLmZpbmQoJy5ib3gtY2hlY2snKSxcclxuICAgICAgICBudW1TZWxlY3QgPSAkKHRoaXMpLm5leHQoJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJyksXHJcbiAgICAgICAgY291bnRTZWwgPSArbnVtU2VsZWN0Lmh0bWwoKTtcclxuICAgICAgJChib3hJbikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICBhdHJidCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJykuZmluZCgnZGl2W2RhdGEtbmFtZT0nICsgYXRyYnQgKyAnXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICAgICAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgIGNvdW50U2VsLS07XHJcbiAgICAgICAgICBudW1TZWxlY3QuaHRtbChjb3VudFNlbCk7XHJcbiAgICAgICAgICBjaGVjaEJ0bigkKHRoaXMpLCBjb3VudFNlbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBsZXQgdGV4dGFyZWFMaW5lSGVpZ2h0PXBhcnNlSW50KCQoXCIudGV4dGFyZWEtd3JhcHBlciB0ZXh0YXJlYVwiKS5jc3MoXCJsaW5lLWhlaWdodFwiKSk7XHJcbiAgZnVuY3Rpb24gck51bWJlcihlbGVtKXtcclxuICAgIHJldHVybiBTdHJpbmcoZWxlbSkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIgXCIpO1xyXG4gIH07XHJcbiAgKGZ1bmN0aW9uKCQpe1xyXG4gICAgICAgICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAuZmlsdGVyLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLm1vYi1jaGVjay1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuYWxsLWxhbmctaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLnBvaW50cy1saXN0X19vdXR0ZXJcIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLmFjY291bnQtb3JkZXJzX19uYXZfX3Zhciwuc2l6ZS10YWJsZVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiLFxyXG4gICAgICAgICAgICBheGlzOiBcInhcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgfSkoalF1ZXJ5KTtcclxuICBmdW5jdGlvbiBjb21lKGVsZW0pIHtcclxuICAgIHZhciBkb2NWaWV3VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICBkb2NWaWV3Qm90dG9tID0gZG9jVmlld1RvcCArICQod2luZG93KS5oZWlnaHQoKSxcclxuICAgICAgZWxlbVRvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wLFxyXG4gICAgICBlbGVtQm90dG9tID0gZWxlbVRvcCArICQoZWxlbSkuaGVpZ2h0KCk7XHJcblxyXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBkb2NWaWV3VG9wKSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBzbGljZVNlbnRlbmNlKGVsZW0sIGFkZENsYXNzKSB7XHJcbiAgICAkKGVsZW0pLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5vdXRlckhlaWdodCgpID4gJCh0aGlzKS5wYXJlbnQoKS5oZWlnaHQoKSkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoYWRkQ2xhc3MpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoYWRkQ2xhc3MpKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKGFkZENsYXNzKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiByZXNQcmljZSgpIHtcclxuICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gKDkwMCAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgICAgJCgnLmpzLWlucHV0LWZyb20nKS52YWwoJzAnKTtcclxuICAgICAgJCgnLmpzLWlucHV0LXRvJykudmFsKCcxMDAgMDAwJyk7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyLnJhbmdlJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm1vYi1pbnB1dC1mcm9tJykudmFsKCcwJyk7XHJcbiAgICAgICQoJy5tb2ItaW5wdXQtdG8nKS52YWwoJzEwMCAwMDAnKTtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXIucmFuZ2UnKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZEZpbHRlcihlbGVtLCBfaWQsIGNvbnRlbnQsIHBhc3QpIHtcclxuICAgIGlmICgkKGVsZW0pLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICAgIHBhc3QuYXBwZW5kKFxyXG4gICAgICAgICc8ZGl2IGRhdGEtbmFtZT0nICsgX2lkICsgJyBjbGFzcz1cImFjdGl2ZS1pdGVtXCI+JyArXHJcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwibmFtZS1maWx0ZXJcIj4nICsgY29udGVudCArICc8L3NwYW4+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjbG9zZS1maWx0ZXItd3JhcHBlclwiPicgK1xyXG4gICAgICAgICAgJzxzdmcgY2xhc3M9XCJjbG9zZS1maWx0ZXJcIj4nICtcclxuICAgICAgICAgICAgJzx1c2UgaHJlZj1cIi9sb2NhbC90ZW1wbGF0ZXMvbWFpbi9hc3NldHMvc3ByaXRlL3Nwcml0ZS5zdmcjY2xvc2VcIj48L3VzZT4nICtcclxuICAgICAgICAgICc8L3N2Zz4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvZGl2PicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICBwYXN0LmZpbmQoJ2RpdltkYXRhLW5hbWU9JyArIF9pZCArICddJykucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGhhdmVBQ2hpbGQoZWxlbSkge1xyXG4gICAgbGV0IHBhckVsZW0gPSAkKGVsZW0pO1xyXG4gICAgaWYgKHBhckVsZW0uY2hpbGRyZW4oKS5sZW5ndGggPj0gMikge1xyXG4gICAgICBwYXJFbGVtLmNzcygnZGlzcGxheScsICdmbGV4JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhckVsZW0uY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIHdhdGNoZXJJbihlbGVtKSB7XHJcbiAgICBpZiAoZWxlbS5jaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcclxuICAgICAgZWxlbS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIG1vYkZpbHRlckNoZWNrKHBpY2ssIHB1bGwpIHtcclxuICAgIGxldCBtb2JJZENoZWNrID0gJChwaWNrKS5wcm9wKCdpZCcpLFxyXG4gICAgICBwYXN0UG9zID0gJChwaWNrKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5jaGlsZHJlbignLm1vYi1jaGVjay1ob2xkZXInKSxcclxuICAgICAgbGFzdENoaWxkO1xyXG4gICAgaWYgKCQocGljaykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgIGlmICh3YXRjaGVySW4ocGFzdFBvcykpIHtcclxuICAgICAgICBwYXN0UG9zLnByZXBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nICsgbW9iSWRDaGVjayArJz4nICsgcHVsbCArICcsPC9zcGFuPicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhc3RQb3MucHJlcGVuZCgnPHNwYW4gZGF0YS1uYW1lPScgKyBtb2JJZENoZWNrICsgJz4nICsgcHVsbCArICc8L3NwYW4+Jyk7XHJcbiAgICAgIH1cclxuICAgICAgd2F0Y2hlckluKHBhc3RQb3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzdFBvcy5maW5kKCdzcGFuW2RhdGEtbmFtZT0nICsgbW9iSWRDaGVjayArICddJykucmVtb3ZlKCk7XHJcbiAgICAgIHdhdGNoZXJJbihwYXN0UG9zKTtcclxuICAgIH1cclxuICAgIGxhc3RDaGlsZCA9IHBhc3RQb3MuY2hpbGRyZW4oKS5sYXN0KCkuaHRtbCgpO1xyXG4gICAgaWYgKHR5cGVvZiBsYXN0Q2hpbGQgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIGxhc3RDaGlsZCA9IGxhc3RDaGlsZC5yZXBsYWNlKC9bXFxzLiwlXS9nLCAnJyk7XHJcbiAgICAgICBwYXN0UG9zLmNoaWxkcmVuKCkubGFzdCgpLmh0bWwobGFzdENoaWxkKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFNoYWRvdyhlbGVtKSB7XHJcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdtb2Itc2l6ZS1pbml0Jyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiByZW1vdmVTaGFkb3coZWxlbSkge1xyXG4gICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ21vYi1zaXplLWluaXQnKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGlmU2hhZG93KGVsZW0pIHtcclxuICAgIGlmICgkKGVsZW0pLmZpbmQoJ3RhYmxlJykud2lkdGgoKSA+ICQoZWxlbSkucGFyZW50cygnLnBvcHVwX19jb250ZW50Jykub3V0ZXJXaWR0aCgpKSB7XHJcbiAgICAgIGFkZFNoYWRvdyhlbGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbW92ZVNoYWRvdyhlbGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b24oaW5QdXQsIGZvcm0sIGJ0bikge1xyXG4gICAgJChpblB1dCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCcuYWNjZXB0X2NoZWNrJykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICQodGhpcykucGFyZW50cyhmb3JtKS5maW5kKGJ0bikucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKGZvcm0pLmZpbmQoYnRuKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIG9ubHlMZXR0ZXJJbnB1dChpbnRleHQpIHtcclxuICAgIGxldCBqaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGludGV4dCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGppbi5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICBqaW5baV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vIGlmICghZS5rZXkubWF0Y2goL1tBLXrQkC3Rj9CB0ZEgXS8pKSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gIH0pOyBcclxuICAgICAgamluW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9cXGQvZywgXCJcIik7XHJcbiAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bLipffmArO+KCtCTigr0nXCI6JSNAISo/XiQtPTw+4oSWe30oKXxbXFxdXFxcXF0vZywgXCJcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9O1xyXG4gICQoJy5mZWF0dXJlc19pdGVtcyAuc2VhcmNoJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XHJcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgICBpZiAoJCgnYm9keT5kaXYnKS5oYXNDbGFzcygnb3ZlcmxheScpKSB7XHJcbiAgICAgICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PicpLnByZXBlbmRUbygnYm9keScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICAgICAgJCgnLnNlYXJjaC13cmFwcGVyIC5mb3JtID4gaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgIH07XHJcbiAgICAgcmV0dXJuIGZhbHNlXHJcbiAgIH0pO1xyXG4gICQoJy5zZWFyY2gtaGVhZGVyLWxpbmUgc3ZnLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnaGVhZGVyIC5zZWFyY2gtaGVhZGVyLWxpbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcuZmVhdHVyZXNfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAkKCcub3ZlcmxheScpLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gICQoJy5idXJnZXItbWVudScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tZW51X21vYmlsZScpLmFkZENsYXNzKCdhY3RpdmUnKTsgIFxyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbCcpO1xyXG4gIH0pO1xyXG4gICQoJy5tZW51X21vYmlsZSAubW9iaWxlLWhlYWRlci1jb250YWluZXIgLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1lbnVfbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gIH0pO1xyXG4gICQoJy5uYXZfd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5uYXZfd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1vYmlsZS1tZW51LXdyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2U7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH07XHJcbiAgICBcclxuICB9KTtcclxuICAkKCcucHJvbW9fbGluZSBzdmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnaGVpZ2h0JywgJzAnKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gIH0pO1xyXG4gIGFkZFJlbW92ZUNsYXNzKCcuaW5mby1mcmFtZSAuaW5mby1jb250ZW50LXdyYXBwZXI+LnRpdGxlJywnYWNjb3JkaW9uLWJ0bicpO1xyXG4gIGFkZFJlbW92ZUNsYXNzKCdzZWN0aW9uLmluZm8gLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gIGFkZFJlbW92ZUNsYXNzXzc2NygnLmdhbGwtd3JhcHAtbWFpbicsICdsb2FkJyk7XHJcblxyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3NfNzY3KCcuZ2FsbC13cmFwcC1tYWluJywgJ2xvYWQnKTtcclxuICAgIGlmU2hhZG93KCcucG9wdXAuYWN0aXZlIC5zaXplLXRhYmxlJyk7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gKDc2NyAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgnLmRpc2NycHRpb24tZ29vZHM6bm90KC5jYXRhbG9nLWspIHAnLCAnY3V0LXdvcmQnKTtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgnLmRpc2NycHRpb24tZ29vZHMuY2F0YWxvZy1rIHAnLCAnY2F0YWxvZy1rJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgc2xpY2VTZW50ZW5jZSgnLmRpc2NycHRpb24tZ29vZHM6bm90KC5jYXRhbG9nLWspIHAnLCAnY3V0LXdvcmQnKTtcclxuICBzbGljZVNlbnRlbmNlKCcuZGlzY3JwdGlvbi1nb29kcy5jYXRhbG9nLWsgcCcsICdjYXRhbG9nLWsnKTtcclxuICBtZW51QWNjb3JkaW9uTW92ZXIoKTtcclxuICBhY2NFbmdpbmUoJy5wYXltZW50LWl0ZW1zJyk7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNzaWduLWluXCIpO1xyXG4gIHZhbGlkYXRvckZvcm0oXCIjcmVzZXQtcGFzc1wiKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI3JlZ2lzdHJhdGlvbi1mb3JtXCIpO1xyXG4gIHZhbGlkYXRvckZvcm0oXCIjYWNjb3VudC1wcmVyc29uYWwtZGF0YVwiKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI2ZhcUZvcm1cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNjaGVja291dEZvcm1cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNjb250YWN0c19mb3JtXCIpO1xyXG4gICQoJy5jbG9zZS1wb3B1cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcuZmVhdHVyZXNfaXRlbXMgLmF1dG9yaXphdGlvbicpLmNsaWNrKGZ1bmN0aW9uICgpe1xyXG4gICAgb3BlblBvcFVwKCcjcG9wdXAtc2lnbi1pbicpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gICQoJyNwb3B1cC1zaWduLWluIC5saW5rX3dyYXBwZXIgYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1yZXNldC1wYXNzJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmNob3NlLXBvaW50JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLWRlbGl2ZXJ5LXBvaW50Jyk7XHJcbiAgfSk7XHJcbiAgJCgnLmxpbmstdG9fX3RhYmxlLXNpemUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC10YWJsZS1zaXplJyk7XHJcbiAgICBpZlNoYWRvdygnLnBvcHVwLmFjdGl2ZSAuc2l6ZS10YWJsZScpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubGFuZy13cmFwcGVyIC5zZWxlY3QtbGFuZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbigpLmxhc3QoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gtbGluZScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2VudGVyJyk7XHJcbiAgICAgICQoJy5tZW51X21vYmlsZSAuc2VhcmNoJykuYWRkQ2xhc3MoJ2VudGVyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5oYXNDbGFzcygnZW50ZXInKSkge1xyXG4gICAgICAgICQoJy5tZW51X21vYmlsZSAuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2VudGVyJyk7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIuc3ViX21lbnVfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZEhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9KTtcclxuICAkKFwiLm1lbnVfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZEhvdmVyKHRoaXMpO1xyXG4gIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlbW92ZUhvdmVyKHRoaXMpO1xyXG4gICB9KTtcclxuICAkKFwiLmZlYXR1cmVzX2l0ZW1zID4gYVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICBhZGRIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlbW92ZUhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSk7XHJcbiAgbGV0IGhlaWdodEhlYWRlciA9ICQoJ2hlYWRlcicpLmhlaWdodCgpO1xyXG4gICQod2luZG93KS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnaGVhZGVyJykuaGVpZ2h0KCkgPCBoZWlnaHRIZWFkZXIpIHtcclxuICAgICAgJCgnbWFpbicpLmNzcygncGFkZGluZycsICQoJ2hlYWRlcicpLmhlaWdodCgpICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZ29Ub0N1cnJlbmN5KCcucHJpY2UnKTtcclxuICBnb1RvQ3VycmVuY3koJy5wcmljZV9uZXcnKTtcclxuICBnb1RvQ3VycmVuY3koJy5wcmljZV9vbGQnKTtcclxuICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbm8tYWN0aXZlJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCI8ZGl2IGNsYXNzPSdsb2NrLXBvaW50ZXInPjwvZGl2PlwiKS5hcHBlbmRUbyhcImJvZHlcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5sb2NrLXBvaW50ZXInKS5yZW1vdmUoKTtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX3dyYXBwZXInKSkge1xyXG4gICAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2stcG9pbnRlcicpKSB7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuZmlsdGVyLWhlYWRlcicpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5sb2NrLXBvaW50ZXInKS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5JykpIHtcclxuICAgICAgJCgnaGVhZGVyIC5zZWFyY2gtaGVhZGVyLWxpbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5mZWF0dXJlc19pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgICAkKCcub3ZlcmxheScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5tb3JlLWxlc3MtZmlsdGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjaycpO1xyXG4gIHJlc2V0U2VsZWN0KCcucmVzZXQtc2VsZWN0Jyk7XHJcbiAgJCgnLm1vYmlsZS1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgb3BlblBvcFVwKCQodGhpcykubmV4dCgpKTtcclxuICB9KTtcclxuICAkKCcubW9kYWwtZml0ZXIgLnRpdGxlLWZpbHRlciBzdmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBjbG9zZVBvcFVwKCcubW9kYWwtZml0ZXInKTtcclxuICB9KTtcclxuICAkKCcubW9iLWZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgnLm1vYi1maWx0ZXItaXRlbXMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBsZXQgY291bnQgPSAwO1xyXG4gICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgIH1cclxuICAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpXHJcbiAgICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9XHJcbiAgIH0pO1xyXG4gICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBtb2JDaGVjayA9ICQodGhpcykubmV4dCgpLmh0bWwoKSxcclxuICAgICAgbW9iQ2hlY2tDb2xvciA9ICQodGhpcykubmV4dCgpLmNoaWxkcmVuKCcuY29sb3ItbmFtZScpLmh0bWwoKTtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdjb2xvcicpKSB7XHJcbiAgICAgIG1vYkZpbHRlckNoZWNrKHRoaXMsIG1vYkNoZWNrQ29sb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW9iRmlsdGVyQ2hlY2sodGhpcywgbW9iQ2hlY2spO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5tb2RhbC1yZXNldCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjaycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAkKCcubW9iLWZpbHRlci1oZWFkZXInKS5maW5kKCcubW9iLWNoZWNrLWhvbGRlcicpLmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcbiAgICBjb3VudCA9IDA7XHJcbiAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpO1xyXG4gICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgIHJlc1ByaWNlKCk7XHJcbiAgICB3YXRjaGVySW4oJCgnLm1vYi1jaGVjay1ob2xkZXInKSlcclxuICB9KTtcclxuICBpZiAoJCgnI2J0bi13YXRjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoY29tZSgnI2J0bi13YXRjaCcpKSB7XHJcbiAgICAgICAgICQoJy5wcmV2aWV3LWhlYWRlci1nb29kcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICB9XHJcbiAgICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBsZXQgbW9iR2FsbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsLXdyYXBwLW1haW4nKSxcclxuICAgIGNsb3NlR2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsLWNsb3NlLWJ0bicpO1xyXG4gIGlmIChtb2JHYWxsU2xpZGVyKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbGwtd3JhcHAtbWFpbicpKSB7XHJcbiAgICAgICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwnKVxyXG4gICAgICAgfSBlbHNlIHsgcmV0dXJuIH07XHJcbiAgICB9KTtcclxuICAgIGNsb3NlR2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtMScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG4gICAgICBzd2lwZXJHb29kcy5zbGlkZVRvKDEsIDApO1xyXG4gICAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0yJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMiwgMCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMywgMCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS00JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oNCwgMCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS01JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oNSwgMCk7XHJcbiAgICB9KTsgIFxyXG4gIH0gZWxzZSB7IH07XHJcbiAgLy8gbGV0IGZhdkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdCcpO1xyXG4gIC8vIGxldCBjb3VudF9mYXYxID0gMDtcclxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGZhdkljb24ubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgIGZhdkljb25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0Jyk7XHJcbiAgLy8gICAgIGxldCBycnR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXQuc2VsZWN0Jyk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJydHQubGVuZ3RoKVxyXG4gIC8vICAgICBpZiAocnJ0dC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG4gICQoJy5zaXplLWhvbGRlciAuc2l6ZS1pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5zaXplLWhvbGRlciAuc2l6ZS1pdGVtcycpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjdXJyZW50Jyk7XHJcbiAgfSk7XHJcbiAgLy8gJCgnLmFkZC10by1mYXZvcml0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgJCgnLmFkZC10by1mYXZvcml0JykudG9nZ2xlQ2xhc3MoJ3NlbGVjdCcpO1xyXG4gIC8vIH0pO1xyXG4gICQoJy5hZGRfdG9fZmF2b3JpdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGxldCBidXR0b24gICAgICA9ICQoZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgICAgIGxldCBwcm9kX2lkICAgICA9IGJ1dHRvbi5kYXRhKCdwcm9kdWN0X2lkJylcclxuICAgICAgICBsZXQgbmVlZF9kZWxldGUgPSAoYnV0dG9uLmhhc0NsYXNzKCdzZWxlY3QnKSkgPyAxIDogMDtcclxuICAgICAgICBsZXQgZmF2X2ljb24gPSAkKCcuZmVhdHVyZXNfaXRlbXMgLmZhdm9yaXQgLmljb25fcXVhbnRpdHknKTtcclxuICAgICAgICBsZXQgcGFyc2VUb0luID0gcGFyc2VJbnQoZmF2X2ljb24uaHRtbCgpKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2xvY2FsL2FqYXgvZmF2b3JpdGVzLnBocCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZTogcHJvZF9pZCxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZTogbmVlZF9kZWxldGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighcmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5lZWRfZGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyc2VUb0luLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VUb0luID09IDAgfHwgcGFyc2VUb0luIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZfaWNvbi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlVG9JbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBmYXZfaWNvbi5odG1sKHBhcnNlVG9Jbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcnNlVG9JbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmF2X2ljb24uaHRtbChwYXJzZVRvSW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJzZVRvSW4gPT0gMCAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdl9pY29uLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gIH0pO1xyXG4gICQoJy5kZWNyZWFzZScpLmNsaWNrKGZ1bmN0aW9uIChlKXtcclxuICAgIHZhciBvbGQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgaWYgKG9sZCA+IDEpe1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChwYXJzZUludChvbGQpIC0gMSk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAkKCcuaW5jcmVhc2UnKS5jbGljayhmdW5jdGlvbiAoZSl7XHJcbiAgICB2YXIgb2xkID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKTtcclxuICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKHBhcnNlSW50KG9sZCkgKyAxKTtcclxuICB9KVxyXG4gICQoJy5wb2ludHMtbmF2IGEnKS5jbGljayhmdW5jdGlvbiAoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcucG9pbnRzLW5hdiBhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAkKCcucG9pbnRzLXZpZXcgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy4nKyQodGhpcykuYXR0cignZGF0YS1pZCcpKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSlcclxuICAkKCcucG9pbnRzLWxpc3QgLnBvaW50JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJy5wb2ludHMtbGlzdCAucG9pbnQuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuICB9KTtcclxuICAkKCdzZWxlY3QnKS5uaWNlU2VsZWN0KCk7XHJcbiAgJCgnLmZpbHRlci1pdGVtcyA+IC5ib3gtY2hlY2s6bm90KC5jb2xvciknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY29udENoZWNrID0gJCh0aGlzKS5uZXh0KCkuaHRtbCgpLFxyXG4gICAgICAgIHBpY0lkID0gJCh0aGlzKS5wcm9wKCdpZCcpO1xyXG4gICAgcHV0VGhpcyA9ICQodGhpcykucGFyZW50cygnLmZpbHRlci1jb250aW5lcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XHJcbiAgICBhZGRGaWx0ZXIodGhpcywgcGljSWQsIGNvbnRDaGVjaywgcHV0VGhpcyk7XHJcbiAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gIH0pO1xyXG4gICQoJy5maWx0ZXItaXRlbXMgPiAuYm94LWNoZWNrLmNvbG9yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGNvbnRDb2xvciA9ICQodGhpcykubmV4dCgpLmNoaWxkcmVuKCcuY29sb3ItbmFtZScpLmh0bWwoKSxcclxuICAgICAgICBjb2xvcklkID0gJCh0aGlzKS5wcm9wKCdpZCcpO1xyXG4gICAgcHV0VGhpc0NvbCA9ICQodGhpcykucGFyZW50cygnLmZpbHRlci1jb250aW5lcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XHJcbiAgICBhZGRGaWx0ZXIodGhpcywgY29sb3JJZCwgY29udENvbG9yLCBwdXRUaGlzQ29sKTtcclxuICAgIGhhdmVBQ2hpbGQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKS5vbignY2xpY2snLCAnLmNsb3NlLWZpbHRlci13cmFwcGVyJywgZnVuY3Rpb24oZSl7XHJcbiAgICBsZXQgY1BhciA9ICQodGhpcykucGFyZW50cygnLmFjdGl2ZS1pdGVtJyksXHJcbiAgICAgIHdheUNoZWNrID0gY1Bhci5hdHRyKCdkYXRhLW5hbWUnKSxcclxuICAgICAgZmlsdGVyV3JhcCA9ICQoJy5maWx0ZXItY29udGluZXInKSxcclxuICAgICAgY2xpY2tJbiA9IGZpbHRlcldyYXAuZmluZCgnaW5wdXRbaWQ9JyArIHdheUNoZWNrICsgJ10nKTtcclxuICAgIGNsaWNrSW4ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIGNQYXIucmVtb3ZlKCk7XHJcbiAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gIH0pO1xyXG4gICQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJykub24oJ2NsaWNrJywgJy5maWx0ZXItYWN0aXZlLXJlc2V0LWJ0bicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgbGV0IGl0ZW1SZW0gPSAkKCcuYWN0aXZlLWl0ZW0nKSxcclxuICAgICAgICBmaWx0ZXJDb250ID0gJCgnLmZpbHRlci1jb250aW5lcicpO1xyXG4gICAgXHJcbiAgICBmaWx0ZXJDb250LmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIGl0ZW1SZW0ucmVtb3ZlKCk7XHJcbiAgICByZXNQcmljZSgpO1xyXG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICB9KTtcclxuICAkKFwiLndyYXAtY2FsZW5kYXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGhhc0ZvY3VzID0gJCh0aGlzKS5wcmV2KCkuaXMoJzpmb2N1cycpO1xyXG4gICAgY29uc29sZS5sb2coaGFzRm9jdXMpO1xyXG4gICAgaWYgKGhhc0ZvY3VzKSB7XHJcbiAgICAgICQodGhpcykucHJldigpLmJsdXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucHJldigpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm5ldy1wYXNzJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IDApIHtcclxuICAgICQodGhpcykuYXR0cignbmFtZScsICdwc3dvcmQnKTtcclxuICAgICQodGhpcykuYXR0cignaWQnLCAncGVyc29uLXBhc3MnKTtcclxuICAgICQoJy5jaGVjay1wYXNzJykuYXR0cignbmFtZScsICdwc3dvcmRfY29uZmlybScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCduYW1lJyk7XHJcbiAgICAgICQoJy5jaGVjay1wYXNzJykucmVtb3ZlQXR0cignbmFtZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy52YWxpZC10ZWwnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkgIT0gMCkge1xyXG4gICAgICAkKHRoaXMpLmF0dHIoJ25hbWUnLCAncGhvbmVfcnUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ25hbWUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcuY291bnRyaWVzIC5zaG93LWFsbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5jb3VudHJpZXMgLnNob3ctYWxsJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5yb3cnKS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XHJcbiAgfSk7XHJcbiAgZGlzYWJsZUJ1dHRvbihcIi5jaGVja2JveC1sYWJlbFwiLCBcIi5mb3JtXCIsIFwiaW5wdXQuYWNjZXB0X2J0blwiKTtcclxuICBkaXNhYmxlQnV0dG9uKFwiLmNoZWNrYm94LWxhYmVsXCIsIFwiI3JlZ2lzdHJhdGlvbi1mb3JtXCIsIFwiLmZvcm0tYWN0aW9ucyAuc3VibWl0LWJ0blwiKTtcclxuICAkKCcucGhvbmVfbWFzaycpLm1hc2soJyswICgwMDApIDAwMC0wMC0wMCcpO1xyXG4gICQoJy56aXBfbWFzaycpLm1hc2soJzAwMDAwMCcpO1xyXG4gIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgICQoJ2J1dHRvbicpLmFkZENsYXNzKCdtb2JfY2VudGVyJylcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCQoJ2J1dHRvbicpLmhhc0NsYXNzKCdtb2JfY2VudGVyJykpIHtcclxuICAgICAgJCgnYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ21vYl9jZW50ZXInKVxyXG4gICAgfTtcclxuICB9O1xyXG4gICQoJyNpbnB1dF9kYXRlJykuZGF0ZXBpY2tlcih7XHJcbiAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgfSk7XHJcbiAgXHJcbiAgb25seUxldHRlcklucHV0KCcub25seV9sZXR0ZXInKTtcclxuICAvLyAkKFwidGV4dGFyZWFcIikub3ZlcmxheVNjcm9sbGJhcnMoe1xyXG4gIC8vICAgdGV4dGFyZWEgOiB7XHJcbiAgLy8gICAgICAgZHluV2lkdGggICAgICAgOiBmYWxzZSxcclxuICAvLyAgICAgICAvLyBkeW5IZWlnaHQgICAgICA6IHRydWUsXHJcbiAgLy8gICAgICAgaW5oZXJpdGVkQXR0cnMgOiBbXCJzdHlsZVwiLCBcImNsYXNzXCJdXHJcbiAgLy8gICB9LFxyXG4gICAgXHJcbiAgLy8gfSk7IFxyXG59O1xyXG5cclxuXHJcbiBcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1cWN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUozYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGNJa1JQVFVOdmJuUmxiblJNYjJGa1pXUmNJaXdnYVc1cGRDazdYSEpjYm1aMWJtTjBhVzl1SUdsdWFYUW9LU0I3WEhKY2JpQWdJQ0F2S2xOc2FXUmxjaUJ6ZDJsd1pYSWdhR1ZoWkdWeUlHSmhibTVsY2lCemRHRnlkQ292WEhKY2JpQWdJQ0JzWlhRZ2MzZHBjR1Z5UW1GdWJtVnlJRDBnYm1WM0lGTjNhWEJsY2lnbkxuTnNhV1JsY2w5amIyNTBZV2x1WlhJdWMzZHBjR1Z5TFdOdmJuUmhhVzVsY2ljc0lIdGNjbHh1SUNBZ0lDQWdjM0JoWTJWQ1pYUjNaV1Z1T2lBek1DeGNjbHh1SUNBZ0lDQWdiRzl2Y0RvZ2RISjFaU3hjY2x4dUlDQWdJQ0FnWVhWMGIzQnNZWGs2SUh0Y2NseHVJQ0FnSUNBZ0lDQmtaV3hoZVRvZ016VXdNQ3hjY2x4dUlDQWdJQ0FnSUNCa2FYTmhZbXhsVDI1SmJuUmxjbUZqZEdsdmJqb2dabUZzYzJVc1hISmNiaUFnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJSEJoWjJsdVlYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQmxiRG9nSnk1emQybHdaWEl0Y0dGbmFXNWhkR2x2Ymljc1hISmNiaUFnSUNBZ0lDQWdJQ0JqYkdsamEyRmliR1U2SUhSeWRXVXNJRnh5WEc0Z0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnZlNrN1hISmNiaUFnSUNBdktsTnNhV1JsY2lCemQybHdaWElnYUdWaFpHVnlJR0poYm01bGNpQmxibVFxTDF4eVhHNWNjbHh1SUNBZ0lDOHFVMnhwWkdWeUlITjNhWEJsY2lCd2NtOWtMWE5zYVdSbGNpQnpkR0Z5ZENvdlhISmNiaUFnSUNCc1pYUWdjM2RwY0dWeVVISnZaQ0E5SUc1bGR5QlRkMmx3WlhJb0p5NXdjbTlrTFhOc2FXUmxjaTFqYjI1MFlXbHVaWEl1YzNkcGNHVnlMV052Ym5SaGFXNWxjaWNzSUh0Y2NseHVJQ0FnSUNBZ2MzQmhZMlZDWlhSM1pXVnVPaUF4Tml4Y2NseHVJQ0FnSUNBZ2MyeHBaR1Z6VUdWeVZtbGxkem9nTlN4Y2NseHVJQ0FnSUNBZ2MyeHBaR1Z6VUdWeVIzSnZkWEE2SURFc1hISmNiaUFnSUNBZ0lDOHZJR2R5WVdKRGRYSnpiM0k2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJRzVoZG1sbllYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQnVaWGgwUld3NklDY3VjM2RwY0dWeUxXSjFkSFJ2YmkxdVpYaDBKeXhjY2x4dUlDQWdJQ0FnSUNCd2NtVjJSV3c2SUNjdWMzZHBjR1Z5TFdKMWRIUnZiaTF3Y21WMkp5eGNjbHh1SUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnWW5KbFlXdHdiMmx1ZEhNNklIdGNjbHh1SUNBZ0lDQWdJQ0F3T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzNCaFkyVkNaWFIzWldWdU9pQTBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lITnNhV1JsYzFCbGNsWnBaWGM2SURFc1hISmNiaUFnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ016QXdPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjM0JoWTJWQ1pYUjNaV1Z1T2lBMExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOc2FXUmxjMUJsY2xacFpYYzZJREl1TURnc1hISmNiaUFnSUNBZ0lDQWdJSDBzWEhKY2JseDBYSFJjZENBZ0lETTNOVG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSE53WVdObFFtVjBkMlZsYmpvZ05DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNCemJHbGtaWE5RWlhKV2FXVjNPaUF5TGpBNExGeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lEUTRNRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSE5zYVdSbGMxQmxjbFpwWlhjNklESXVOaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQnpjR0ZqWlVKbGRIZGxaVzQ2SURRc1hISmNiaUFnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ05qQXdPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjMnhwWkdWelVHVnlWbWxsZHpvZ01pNDRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lITndZV05sUW1WMGQyVmxiam9nTkN4Y2NseHVJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ056WTRPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjMnhwWkdWelVHVnlWbWxsZHpvZ05DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNCemNHRmpaVUpsZEhkbFpXNDZJREV3TEZ4eVhHNGdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSURFd01qUTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lITnNhV1JsYzFCbGNsWnBaWGM2SURVc1hISmNibHgwWEhSY2RDQWdJSDBzWEhKY2JseDBYSFJjZENBZ0lERXpOalk2SUh0Y2NseHVYSFJjZEZ4MElDQWdYSFJ6Ykdsa1pYTlFaWEpXYVdWM09pQTFMRnh5WEc1Y2RGeDBYSFFnSUNCOUxGeHlYRzVjZEZ4MElDQjlMRnh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdMeXBUYkdsa1pYSWdjM2RwY0dWeUlIQnliMlF0YzJ4cFpHVnlJR1Z1WkNvdlhISmNiaUFnTHlwVGJHbGtaWElnYzNkcGNHVnlJR2R2YjJSekxXTmhjbVFnYzNSaGNuUXFMMXh5WEc0Z0lHeGxkQ0J6ZDJsd1pYSkhiMjlrY3lBOUlHNWxkeUJUZDJsd1pYSW9KeTVuWVd4c1pYSjVMVzF2WWkxamIyNTBZV2x1WlhJdWMzZHBjR1Z5TFdOdmJuUmhhVzVsY2ljc0lIdGNjbHh1SUNBZ0lITndZV05sUW1WMGQyVmxiam9nTXpBc1hISmNiaUFnSUNCc2IyOXdPaUIwY25WbExGeHlYRzRnSUNBZ1kyVnVkR1Z5WldSVGJHbGtaWE02SUhSeWRXVXNYSEpjYmlBZ0lDQmhkWFJ2Y0d4aGVUb2dlMXh5WEc0Z0lDQWdJQ0JrWld4aGVUb2dNelV3TUN4Y2NseHVJQ0FnSUNBZ1pHbHpZV0pzWlU5dVNXNTBaWEpoWTNScGIyNDZJR1poYkhObExGeHlYRzRnSUNBZ2ZTeGNjbHh1SUNBZ0lHNWhkbWxuWVhScGIyNDZJSHRjY2x4dUlDQWdJQ0FnSUNCdVpYaDBSV3c2SUNjdWMzZHBjR1Z5TFdKMWRIUnZiaTF1WlhoMEp5eGNjbHh1SUNBZ0lDQWdJQ0J3Y21WMlJXdzZJQ2N1YzNkcGNHVnlMV0oxZEhSdmJpMXdjbVYySnl4Y2NseHVJQ0FnSUgwc1hISmNiaUFnSUNCd1lXZHBibUYwYVc5dU9pQjdYSEpjYmlBZ0lDQWdJR1ZzT2lBbkxtZHZiMlJ6TFhCaFoybHVZWFJwYjI0bkxGeHlYRzRnSUNBZ0lDQWdJR05zYVdOcllXSnNaVG9nZEhKMVpTd2dYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lIMHBPMXh5WEc0Z0lDOHFVMnhwWkdWeUlITjNhWEJsY2lCbmIyOWtjeTFqWVhKa0lHVnVaQ292WEhKY2JpQWdablZ1WTNScGIyNGdiV1Z1ZFVGalkyOXlaR2x2YmsxdmRtVnlLQ2tnZTF4eVhHNGdJQ0FnYkdWMElHRmpZeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWENJdVlXTmpiM0prYVc5dUxXSjBibHdpS1R0Y2NseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTmpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lHRmpZMXRwWFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTaGNJbUZqZEdsMlpWd2lLVHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdjR0Z1Wld3Z1BTQjBhR2x6TG5CaGNtVnVkRVZzWlcxbGJuUXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVJQ0FnSUNBZ0lDQWdhV1lnS0hCaGJtVnNMbk4wZVd4bExtMWhlRWhsYVdkb2RDWW1jR0Z1Wld3dVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGhZMk52Y21ScGIyNG5LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSEJoYm1Wc0xuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnY0dGdVpXd3VjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdjR0Z1Wld3dWMyTnliMnhzU0dWcFoyaDBJQ3NnWENKd2VGd2lPMXh5WEc0Z0lDQWdJQ0FnSUNCOUlGeHlYRzRnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5T3lCY2NseHVJQ0I5TzF4eVhHNGdJR1oxYm1OMGFXOXVJR0ZqWTBWdVoybHVaU2h3YVdOcktTQjdYSEpjYmlBZ0lDQnNaWFFnWVdOaklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaHdhV05yS1R0Y2NseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTmpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lHRmpZMXRwWFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTaGNJbUZqZEdsMlpWd2lLVHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdjR0Z1Wld3Z1BTQjBhR2x6TG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVJQ0FnSUNBZ0lDQWdhV1lnS0hCaGJtVnNMbk4wZVd4bExtMWhlRWhsYVdkb2RDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lIQmhibVZzTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUc1MWJHdzdYSEpjYmlBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdjR0Z1Wld3dWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ2NHRnVaV3d1YzJOeWIyeHNTR1ZwWjJoMElDc2dYQ0p3ZUZ3aU8xeHlYRzRnSUNBZ0lDQWdJQ0I5SUZ4eVhHNGdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlPeUJjY2x4dUlDQjlPMXh5WEc0Z0lHWjFibU4wYVc5dUlHRmtaRkpsYlc5MlpVTnNZWE56S0dWc1pXMHNJR0ZrWkNrZ2UxeHlYRzRnSUNBZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRHc5SURrd01Da2dlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbUZrWkVOc1lYTnpLR0ZrWkNrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5KbGJXOTJaVU5zWVhOektHRmtaQ2s3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJSDA3WEhKY2JpQWdablZ1WTNScGIyNGdZV1JrVW1WdGIzWmxRMnhoYzNOZk56WTNLR1ZzWlcwc0lHRmtaQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElENDlJRGMyTnlrZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExtRmtaRU5zWVhOektHRmtaQ2s3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkpsYlc5MlpVTnNZWE56S0dGa1pDazdYSEpjYmlBZ0lDQjlPMXh5WEc0Z0lIMDdYSEpjYmlBZ1hISmNiaUFnWm5WdVkzUnBiMjRnYjNCbGJsQnZjRlZ3S0dWc1pXMHBJSHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VZV1JrUTJ4aGMzTW9KMkZqZEdsMlpTY3BPeUFnWEhKY2JpQWdJQ0FrS0NkaWIyUjVKeWt1WVdSa1EyeGhjM01vSjIxdlpHRnNKeWs3WEhKY2JpQWdmVHRjY2x4dUlDQm1kVzVqZEdsdmJpQmpiRzl6WlZCdmNGVndLR1ZzWlcwcElIdGNjbHh1SUNBZ0lDUW9aV3hsYlNrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPeUFnWEhKY2JpQWdJQ0FrS0NkaWIyUjVKeWt1Y21WdGIzWmxRMnhoYzNNb0oyMXZaR0ZzSnlrN1hISmNiaUFnZlR0Y2NseHVJQ0JxVVhWbGNua3VaWGgwWlc1a0tHcFJkV1Z5ZVM1MllXeHBaR0YwYjNJdWJXVnpjMkZuWlhNc0lIdGNjbHh1SUNBZ0lISmxjWFZwY21Wa09pQmNJdENmMEw3UXU5QzFJTkdQMExMUXU5R1AwTFhSZ3RHQjBZOGcwTDdRc2RHUDBMZlFzTkdDMExYUXU5R00wTDNSaTlDOFhDSXNYSEpjYmlBZ0lDQnlaVzF2ZEdVNklGd2kwSi9RdnRDNzBMVWcwWS9Rc3RDNzBZL1F0ZEdDMFlIUmp5RFF2dEN4MFkvUXQ5Q3cwWUxRdGRDNzBZelF2ZEdMMEx4Y0lpeGNjbHh1SUNBZ0lHVnRZV2xzT2lCY0l0Q1MwTExRdGRDMDBMalJndEMxSU5DNjBMN1JnTkdBMExYUXV0R0MwTDNSaTlDNUlOR04wTHZRdGRDNjBZTFJnTkMrMEwzUXZkR0wwTGtnMExEUXROR0EwTFhSZ1Z3aUxGeHlYRzRnSUgwcE8xeHlYRzRnSUNRdWRtRnNhV1JoZEc5eUxtRmtaRTFsZEdodlpDaGNJa1ZOUVVsTVhDSXNJR1oxYm1OMGFXOXVLSFpoYkhWbExDQmxiR1Z0Wlc1MEtTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG05d2RHbHZibUZzS0dWc1pXMWxiblFwSUh4OElDOWVXMkV0ZWtFdFdqQXRPUzVmTFYwclFGdGhMWHBCTFZvd0xUa3RYU3RjWEM1YllTMTZRUzFhTGwxN01pdzFmU1F2YVM1MFpYTjBLSFpoYkhWbEtUdGNjbHh1SUNCOUxDQmNJdENTMExMUXRkQzAwTGpSZ3RDMUlOQzYwTDdSZ05HQTBMWFF1dEdDMEwzUmk5QzVJTkdOMEx2UXRkQzYwWUxSZ05DKzBMM1F2ZEdMMExrZzBMRFF0TkdBMExYUmdWd2lLVHRjY2x4dUlDQm1kVzVqZEdsdmJpQjJZV3hwWkdGMGIzSkdiM0p0S0dWc1pXMHBJSHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VkbUZzYVdSaGRHVW9lMXh5WEc0Z0lDQWdJQ0J5ZFd4bGN6b2dlMXh5WEc0Z0lDQWdJQ0FnSUhCemQyOXlaRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdjbVZ4ZFdseVpXUTZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lDQWdJQ0J0YVc1c1pXNW5kR2c2SURZc1hISmNiaUFnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNCbGJXRnBiRjl1T2x3aWNtVnhkV2x5WldRZ1JVMUJTVXhjSWl4Y2NseHVJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdiV1Z6YzJGblpYTTZJSHRjY2x4dUlDQWdJQ0FnSUNCd2MzZHZjbVE2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJRzFwYm14bGJtZDBhRG9nSjlDYzBMalF2ZEM0MEx6UXNOQzcwWXpRdmRDdzBZOGcwTFRRdTlDNDBMM1FzQ0RRdjlDdzBZRFF2dEM3MFk4Z05pRFJnZEM0MEx6UXN0QyswTHZRdnRDeUoxeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnZlN4Y2NseHVJQ0FnSUgwcE8xeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnWVdSa1NHOTJaWElvWld4bGJTa2dleUJjY2x4dUlDQWdJQ1FvWld4bGJTa3VZV1JrUTJ4aGMzTW9KMmx1TFdodmRtVnlKeWs3SUZ4eVhHNGdJSDA3WEhKY2JpQWdablZ1WTNScGIyNGdjbVZ0YjNabFNHOTJaWElvWld4bGJTa2dleUJjY2x4dUlDQWdJQ1FvWld4bGJTa3VjbVZ0YjNabFEyeGhjM01vSjJsdUxXaHZkbVZ5SnlrN0lGeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnWjI5VWIwTjFjbkpsYm1ONUtHVnNaVzBwSUh0Y2NseHVJQ0FnSUd4bGRDQnVkVzFpWlhKVWIwWnZjbTFoZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1pXeGxiU2s3WEhKY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJXSmxjbFJ2Um05eWJXRjBMbXhsYm1kMGFEc2dhU3NySUNrZ2UxeHlYRzRnSUNBZ0lDQWdiR1YwSUhSdlRuVnRZaUE5SUN0dWRXMWlaWEpVYjBadmNtMWhkRnRwWFM1cGJtNWxja2hVVFV3N1hISmNiaUFnSUNBZ0lDQnNaWFFnWm05eWJXRjBUblZ0SUQwZ2JtVjNJRWx1ZEd3dVRuVnRZbVZ5Um05eWJXRjBLQ2R5ZFMxU1ZTY3NJSHNnYzNSNWJHVTZJQ2RqZFhKeVpXNWplU2NzSUdOMWNuSmxibU41T2lBblVsVkNKeXdnYldsdWFXMTFiVVp5WVdOMGFXOXVSR2xuYVhSek9pQXdJSDBwTG1admNtMWhkQ2gwYjA1MWJXSXBPMXh5WEc0Z0lDQWdJQ0FnYm5WdFltVnlWRzlHYjNKdFlYUmJhVjB1YVc1dVpYSklWRTFNSUQwZ1ptOXliV0YwVG5WdE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgwN1hISmNiaUFnWEhKY2JpQWdablZ1WTNScGIyNGdZMmhsWTJ0Q2IzaEZibWRwYm1Vb1pXeGxiU2tnZTF4eVhHNGdJQ0FnYkdWMElHTnZkVzUwSUQwZ01EdGNjbHh1SUNBZ0lDUW9aV3hsYlNrdVkyaGhibWRsS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdhV1lnS0NRb2RHaHBjeWt1Y0hKdmNDZ25ZMmhsWTJ0bFpDY3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyOTFiblFyS3p0Y2NseHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQmpiM1Z1ZEMwdE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJR05vWldOb1FuUnVLSFJvYVhNc0lHTnZkVzUwS1R0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblJ6Vlc1MGFXd29KeTVqYjI1MFpXNTBMV1pwYkhSbGNpY3BMbTVsZUhRb0p5NWlkRzR0ZDNKaGNIQmxjaWNwTG1Ob2FXeGtjbVZ1S0NjdWMzUmhkR1V0YzJWc1pXTjBKeWt1WTJocGJHUnlaVzRvSnk1dWRXMWlMWE5sYkdWamRDY3BMbU5vYVd4a2NtVnVLQ2R6Y0dGdUp5a3VhSFJ0YkNoamIzVnVkQ2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVJQ0I5TzF4eVhHNGdJRnh5WEc0Z0lHWjFibU4wYVc5dUlHTm9aV05vUW5SdUtHVnNaVzBzSUdFcElIdGNjbHh1SUNBZ0lHbG1JQ2hoSUQ0Z01Da2dlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkJoY21WdWRITlZiblJwYkNnbkxtTnZiblJsYm5RdFptbHNkR1Z5SnlrdWJtVjRkQ2duTG1KMGJpMTNjbUZ3Y0dWeUp5a3VZMmhwYkdSeVpXNG9KeTVtYVd4MFpYSXRZblJ1SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkQ2duTG1acGJIUmxjaTFwZEdWdGN5Y3BMbkJoY21WdWRITlZiblJwYkNnbkxtWnBiSFJsY2kxcGRHVnRjeWNwTG5CeVpYWW9LUzVoWkdSRGJHRnpjeWduYzJWc1pXTjBKeWs3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkJoY21WdWRITlZiblJwYkNnbkxtTnZiblJsYm5RdFptbHNkR1Z5SnlrdWJtVjRkQ2duTG1KMGJpMTNjbUZ3Y0dWeUp5a3VZMmhwYkdSeVpXNG9KeTVtYVd4MFpYSXRZblJ1SnlrdVlXUmtRMnhoYzNNb0oyNXZMV0ZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbkJoY21WdWRDZ25MbVpwYkhSbGNpMXBkR1Z0Y3ljcExuQmhjbVZ1ZEhOVmJuUnBiQ2duTG1acGJIUmxjaTFwZEdWdGN5Y3BMbkJ5WlhZb0tTNXlaVzF2ZG1WRGJHRnpjeWduYzJWc1pXTjBKeWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc0Z0lHWjFibU4wYVc5dUlISmxjMlYwVTJWc1pXTjBLR1ZzWlcwc0lHSnZlQ2tnZTF4eVhHNGdJQ0FnSkNobGJHVnRLUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9aU2tnZTF4eVhHNGdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNBZ0lDUW9ZbTk0S1M1d2NtOXdLQ2RqYUdWamEyVmtKeXdnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbTVsZUhRb0p5NXVkVzFpTFhObGJHVmpkQ2NwTG1Ob2FXeGtjbVZ1S0NkemNHRnVKeWt1YUhSdGJDZ3dLVHRjY2x4dUlDQWdJQ0FnWTI5MWJuUWdQU0F3TzF4eVhHNGdJQ0FnSUNCamFHVmphRUowYmloaWIzZ3BPMXh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdmVHRjY2x4dUlDQm1kVzVqZEdsdmJpQnBibWwwVW1GdVoyVlRiR2xrWlhJb0tTQjdJRnh5WEc0Z0lDQWdkbUZ5SUNSeVlXNW5aU0E5SUNRb1hDSXVhbk10Y21GdVoyVXRjMnhwWkdWeVhDSXBMRnh5WEc0Z0lDQWdKR2x1Y0hWMFJuSnZiU0E5SUNRb1hDSXVhbk10YVc1d2RYUXRabkp2YlZ3aUtTeGNjbHh1SUNBZ0lDUnBibkIxZEZSdklEMGdKQ2hjSWk1cWN5MXBibkIxZEMxMGIxd2lLU3hjY2x4dUlDQWdJR2x1YzNSaGJtTmxMRnh5WEc0Z0lDQWdiV2x1SUQwZ01DeGNjbHh1SUNBZ0lHMWhlQ0E5SURFd01EQXdNQ3hjY2x4dUlDQWdJR1p5YjIwZ1BTQXdMRnh5WEc0Z0lDQWdkRzhnUFNBd08xeHlYRzRnSUNBZ0pISmhibWRsTG1sdmJsSmhibWRsVTJ4cFpHVnlLSHRjY2x4dUlDQWdJRngwSUNCemEybHVPaUJjSW5KdmRXNWtYQ0lzWEhKY2JpQWdJQ0FnSUNBZ2RIbHdaVG9nWENKa2IzVmliR1ZjSWl4Y2NseHVJQ0FnSUNBZ0lDQnRhVzQ2SUcxcGJpeGNjbHh1SUNBZ0lDQWdJQ0J0WVhnNklHMWhlQ3hjY2x4dUlDQWdJQ0FnSUNCbWNtOXRPaUF3TEZ4eVhHNGdJQ0FnSUNBZ0lIUnZPaUF4TURBd01EQXNYSEpjYmlBZ0lDQWdJQ0FnYjI1VGRHRnlkRG9nZFhCa1lYUmxTVzV3ZFhSekxGeHlYRzRnSUNBZ0lDQWdJRzl1UTJoaGJtZGxPaUIxY0dSaGRHVkpibkIxZEhOY2NseHVJQ0FnSUgwcE8xeHlYRzRnSUNBZ2FXNXpkR0Z1WTJVZ1BTQWtjbUZ1WjJVdVpHRjBZU2hjSW1sdmJsSmhibWRsVTJ4cFpHVnlYQ0lwTzF4eVhHNGdJQ0FnWm5WdVkzUnBiMjRnZFhCa1lYUmxTVzV3ZFhSeklDaGtZWFJoS1NCN1hISmNiaUFnSUNCY2RHWnliMjBnUFNCa1lYUmhMbVp5YjIwN1hISmNiaUFnSUNBZ0lDQWdkRzhnUFNCa1lYUmhMblJ2TzF4eVhHNGdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQ1JwYm5CMWRFWnliMjB1Y0hKdmNDaGNJblpoYkhWbFhDSXNJR1p5YjIwcE8xeHlYRzRnSUNBZ0lDQWdJQ1JwYm5CMWRGUnZMbkJ5YjNBb1hDSjJZV3gxWlZ3aUxDQjBieWs3WEhSY2NseHVJQ0FnSUgxY2NseHVJQ0FnSUNScGJuQjFkRVp5YjIwdWIyNG9YQ0pwYm5CMWRGd2lMQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUhaaGJDQTlJQ1FvZEdocGN5a3VjSEp2Y0NoY0luWmhiSFZsWENJcE8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUM4dklIWmhiR2xrWVhSbFhISmNiaUFnSUNBZ0lDQWdhV1lnS0haaGJDQThJRzFwYmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXd2dQU0J0YVc0N1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gyWVd3Z1BpQjBieWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd3Z1BTQjBienRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1ZFhCa1lYUmxLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabkp2YlRvZ2RtRnNYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOUtUdGNjbHh1SUNBZ0lGeHlYRzRnSUNBZ0pHbHVjSFYwVkc4dWIyNG9YQ0pwYm5CMWRGd2lMQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUhaaGJDQTlJQ1FvZEdocGN5a3VjSEp2Y0NoY0luWmhiSFZsWENJcE8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUM4dklIWmhiR2xrWVhSbFhISmNiaUFnSUNBZ0lDQWdhV1lnS0haaGJDQThJR1p5YjIwcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNJRDBnWm5KdmJUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0haaGJDQStJRzFoZUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXd2dQU0J0WVhnN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExuVndaR0YwWlNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSdk9pQjJZV3hjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lIMDdYSEpjYmlBZ0tHWjFibU4wYVc5dUtDUXBlMXh5WEc0Z0lDQWdJQ0FnSUNRb2QybHVaRzkzS1M1dmJpaGNJbXh2WVdSY0lpeG1kVzVqZEdsdmJpZ3BlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0pDaGNJaTVrWlhOamEzUnZjQzFtYVd4MFpYSXRZMjl1ZEdGcGJtVnlJQzVqYjI1MFpXNTBMV1pwYkhSbGNpQXVabWxzZEdWeUxXbDBaVzFjSWlrdWJVTjFjM1J2YlZOamNtOXNiR0poY2loN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNCMGFHVnRaVHBjSW0xNUxYUm9aVzFsWENKY2NseHVJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdKQ2hjSWk1dGIySnBiR1V0Wm1sc2RHVnlMV052Ym5SaGFXNWxjaUF1WTI5dWRHVnVkQzFtYVd4MFpYSWdMbTF2WWkxamFHVmpheTFwZEdWdFhDSXBMbTFEZFhOMGIyMVRZM0p2Ykd4aVlYSW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdkR2hsYldVNlhDSnRlUzEwYUdWdFpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNRb1hDSXVZV3hzTFd4aGJtY3RhWFJsYlZ3aUtTNXRRM1Z6ZEc5dFUyTnliMnhzWW1GeUtIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lIUm9aVzFsT2x3aWJYa3RkR2hsYldWY0lseHlYRzRnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNCOUtTaHFVWFZsY25rcE8xeHlYRzRnSUdaMWJtTjBhVzl1SUdOdmJXVW9aV3hsYlNrZ2UxeHlYRzRnSUNBZ2RtRnlJR1J2WTFacFpYZFViM0FnUFNBa0tIZHBibVJ2ZHlrdWMyTnliMnhzVkc5d0tDa3NYSEpjYmlBZ0lDQWdJR1J2WTFacFpYZENiM1IwYjIwZ1BTQmtiMk5XYVdWM1ZHOXdJQ3NnSkNoM2FXNWtiM2NwTG1obGFXZG9kQ2dwTEZ4eVhHNGdJQ0FnSUNCbGJHVnRWRzl3SUQwZ0pDaGxiR1Z0S1M1dlptWnpaWFFvS1M1MGIzQXNYSEpjYmlBZ0lDQWdJR1ZzWlcxQ2IzUjBiMjBnUFNCbGJHVnRWRzl3SUNzZ0pDaGxiR1Z0S1M1b1pXbG5hSFFvS1R0Y2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z0tDaGxiR1Z0UW05MGRHOXRJRHc5SUdSdlkxWnBaWGRDYjNSMGIyMHBJQ1ltSUNobGJHVnRWRzl3SUQ0OUlHUnZZMVpwWlhkVWIzQXBLVHRjY2x4dUlDQjlYSEpjYmlBZ0lDUW9KeTVtWldGMGRYSmxjMTlwZEdWdGN5QXVjMlZoY21Ob0p5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdhV1lnS0NRb2QybHVaRzkzS1M1M2FXUjBhQ2dwSUQ0OUlEa3dNQ2tnZTF4eVhHNGdJQ0FnSUNBa0tDZG9aV0ZrWlhJZ0xuTmxZWEpqYUMxb1pXRmtaWEl0YkdsdVpTY3BMblJ2WjJkc1pVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblFvS1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ1FvSjJKdlpIa25LUzUwYjJkbmJHVkRiR0Z6Y3lnbmJXOWtZV3duS1R0Y2NseHVJQ0FnSUNBZ2FXWWdLQ1FvSjJKdlpIaytaR2wySnlrdWFHRnpRMnhoYzNNb0oyOTJaWEpzWVhrbktTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNRb0p5NXZkbVZ5YkdGNUp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSkNnblBHUnBkaUJqYkdGemN6MWNJbTkyWlhKc1lYbGNJajQ4TDJScGRqNG5LUzV3Y21Wd1pXNWtWRzhvSjJKdlpIa25LVHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSkNnbkxtMWxiblZmYlc5aWFXeGxKeWt1WVdSa1EyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tDZGliMlI1SnlrdVlXUmtRMnhoYzNNb0oyMXZaR0ZzSnlrN1hISmNiaUFnSUNBZ0lDUW9KeTV6WldGeVkyZ3RkM0poY0hCbGNpQXVabTl5YlNBK0lHbHVjSFYwSnlrdVptOWpkWE1vS1R0Y2NseHVJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh5WEc0Z0lDQjlLVHRjY2x4dUlDQWtLQ2N1YzJWaGNtTm9MV2hsWVdSbGNpMXNhVzVsSUhOMlp5NWpiRzl6WlNjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDUW9KMmhsWVdSbGNpQXVjMlZoY21Ob0xXaGxZV1JsY2kxc2FXNWxKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0pDZ25MbVpsWVhSMWNtVnpYMmwwWlcxekp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSkNnblltOWtlU2NwTG5KbGJXOTJaVU5zWVhOektDZHRiMlJoYkNjcE8xeHlYRzRnSUNBZ0pDZ25MbTkyWlhKc1lYa25LUzV5WlcxdmRtVW9LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1WW5WeVoyVnlMVzFsYm5VbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1YldWdWRWOXRiMkpwYkdVbktTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdJQ0JjY2x4dUlDQWdJQ1FvSjJKdlpIa25LUzVoWkdSRGJHRnpjeWduYlc5a1lXd25LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1YldWdWRWOXRiMkpwYkdVZ0xtMXZZbWxzWlMxb1pXRmtaWEl0WTI5dWRHRnBibVZ5SUM1amJHOXpaU2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNRb0p5NXRaVzUxWDIxdlltbHNaU2NwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDUW9KMkp2WkhrbktTNXlaVzF2ZG1WRGJHRnpjeWduYlc5a1lXd25LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Ym1GMlgzZHlZWEJ3WlhJZ0xtMWxiblVnTG0xbGJuVmZhWFJsYlhNbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1Ym1GMlgzZHlZWEJ3WlhJZ0xtMWxiblVnTG0xbGJuVmZhWFJsYlhNbktTNXlaVzF2ZG1WRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FrS0hSb2FYTXBMbUZrWkVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Ylc5aWFXeGxMVzFsYm5VdGQzSmhjSEJsY2lBdWJXVnVkU0F1YldWdWRWOXBkR1Z0Y3ljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDUW9KeTV0YjJKcGJHVXRiV1Z1ZFMxM2NtRndjR1Z5SUM1dFpXNTFJQzV0Wlc1MVgybDBaVzF6SnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdKQ2gwYUdsektTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbTF2WWw5emRXSmZiV1Z1ZFY5cGRHVnRjeWNwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUdsbUlDZ2tLQ2N1Ylc5aVgzTjFZbDl0Wlc1MVgybDBaVzF6SnlrdWFHRnpRMnhoYzNNb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmlBZ0lDQWdJQ1FvSnk1dGIySmZjM1ZpWDIxbGJuVmZhWFJsYlhNbktTNXlaVzF2ZG1WRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSUNRb2RHaHBjeWt1WVdSa1EyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnZlNCbGJITmxPMXh5WEc0Z0lDQWdhV1lnS0NRb2RHaHBjeWt1YUdGelEyeGhjM01vSjJGamRHbDJaU2NwS1NCN1hISmNiaUFnSUNBZ0lDUW9kR2hwY3lrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQjlPMXh5WEc0Z0lDQWdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbkJ5YjIxdlgyeHBibVVnYzNabkp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdKQ2gwYUdsektTNXdZWEpsYm5Rb0tTNWpjM01vSjJobGFXZG9kQ2NzSUNjd0p5azdYSEpjYmlBZ0lDQWtLSFJvYVhNcExuQmhjbVZ1ZENncExtTnpjeWduZG1semFXSnBiR2wwZVNjc0lDZG9hV1JrWlc0bktUdGNjbHh1SUNCOUtUdGNjbHh1SUNCaFpHUlNaVzF2ZG1WRGJHRnpjeWduTG1sdVptOHRabkpoYldVZ0xtbHVabTh0WTI5dWRHVnVkQzEzY21Gd2NHVnlQaTUwYVhSc1pTY3NKMkZqWTI5eVpHbHZiaTFpZEc0bktUdGNjbHh1SUNCaFpHUlNaVzF2ZG1WRGJHRnpjeWduYzJWamRHbHZiaTVwYm1adklDNXBibVp2TFcxbGJuVXRkM0poY0hCbGNpY3NJQ2RoWTJOdmNtUnBiMjRuS1R0Y2NseHVJQ0JoWkdSU1pXMXZkbVZEYkdGemMxODNOamNvSnk1bllXeHNMWGR5WVhCd0xXMWhhVzRuTENBbmJHOWhaQ2NwTzF4eVhHNGdJQ1FvZDJsdVpHOTNLUzV5WlhOcGVtVW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnWVdSa1VtVnRiM1psUTJ4aGMzTW9KeTVwYm1adkxXWnlZVzFsSUM1cGJtWnZMV052Ym5SbGJuUXRkM0poY0hCbGNqNHVkR2wwYkdVbkxDZGhZMk52Y21ScGIyNHRZblJ1SnlrN1hISmNiaUFnSUNCaFpHUlNaVzF2ZG1WRGJHRnpjeWduYzJWamRHbHZiaTVwYm1adklDNWpiMjUwWVdsdVpYSWdMbWx1Wm04dFpuSmhiV1VnTG1sdVptOHRiV1Z1ZFMxM2NtRndjR1Z5Snl3Z0oyRmpZMjl5WkdsdmJpY3BPMXh5WEc0Z0lDQWdiV1Z1ZFVGalkyOXlaR2x2YmsxdmRtVnlLQ2s3WEhKY2JpQWdJQ0JoWkdSU1pXMXZkbVZEYkdGemMxODNOamNvSnk1bllXeHNMWGR5WVhCd0xXMWhhVzRuTENBbmJHOWhaQ2NwTzF4eVhHNGdJSDBwTzF4eVhHNGdJRzFsYm5WQlkyTnZjbVJwYjI1TmIzWmxjaWdwTzF4eVhHNGdJR0ZqWTBWdVoybHVaU2duTG1Gall5MXZjR1Z1SnlrN1hISmNiaUFnWm5WdVkzUnBiMjRnYzJ4cFkyVlRaVzUwWlc1alpTaHhMQ0J6Wlc1MFpXNWpaU2tnZTF4eVhHNGdJQ0FnYkdWMElITnBlbVVnUFNCeExGeHlYRzRnSUNBZ0lDQnVaWGR6UTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvYzJWdWRHVnVZMlVwTzF4eVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdVpYZHpRMjl1ZEdWdWRDNXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnSUNCcFppQW9ibVYzYzBOdmJuUmxiblJiYVYwdWFXNXVaWEpJVkUxTUxteGxibWQwYUNBK0lITnBlbVVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdYSFJ1WlhkelEyOXVkR1Z1ZEZ0cFhTNXBibTVsY2toVVRVd2dQU0J1WlhkelEyOXVkR1Z1ZEZ0cFhTNXBibTVsY2toVVRVd3VjMnhwWTJVb01Dd2djMmw2WlNrZ0t5QW5JQzR1TGljN1hISmNiaUFnSUNBZ0lIMDdYSEpjYmlBZ0lDQjlPMXh5WEc0Z0lIMDdJQ0FnSUZ4eVhHNGdJQ0FnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElEdzlJRE0xTnlrZ2UxeHlYRzRnSUNBZ0lDQnpiR2xqWlZObGJuUmxibU5sS0RNMExDQW5MbVJwYzJOeWNIUnBiMjR0WjI5dlpITXRjeUErSUhBbktUdGNjbHh1SUNBZ0lDQWdjMnhwWTJWVFpXNTBaVzVqWlNnek15d2dKeTVrYVhOamNuQjBhVzl1TFdkdmIyUnpJRDRnY0NjcE95QmNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHVnNjMlVnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElEdzlJRFE0TUNBbUppQWtLSGRwYm1SdmR5a3VkMmxrZEdnb0tTQStQU0F6TlRjcElIdGNjbHh1SUNBZ0lDQWdJQ0J6YkdsalpWTmxiblJsYm1ObEtETTRMQ0FuTG1ScGMyTnljSFJwYjI0dFoyOXZaSE10Y3lBK0lIQW5LVHRjY2x4dUlDQWdJQ0FnSUNCemJHbGpaVk5sYm5SbGJtTmxLRE16TENBbkxtUnBjMk55Y0hScGIyNHRaMjl2WkhNZ1BpQndKeWs3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnYzJ4cFkyVlRaVzUwWlc1alpTZ3lOeXdnSnk1a2FYTmpjbkIwYVc5dUxXZHZiMlJ6TFhNZ1BpQndKeWs3WEhKY2JpQWdJQ0FnSUNCemJHbGpaVk5sYm5SbGJtTmxLRE16TENBbkxtUnBjMk55Y0hScGIyNHRaMjl2WkhNZ1BpQndKeWs3SUZ4eVhHNGdJQ0FnZlR0Y2NseHVJQ0JjY2x4dUlDQjJZV3hwWkdGMGIzSkdiM0p0S0Z3aUkzTnBaMjR0YVc1Y0lpazdYSEpjYmlBZ2RtRnNhV1JoZEc5eVJtOXliU2hjSWlOeVpYTmxkQzF3WVhOelhDSXBPMXh5WEc0Z0lDUW9KeTVqYkc5elpTMXdiM0IxY0NjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHTnNiM05sVUc5d1ZYQW9KeTV3YjNCMWNDNWhZM1JwZG1VbktUdGNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3VabVZoZEhWeVpYTmZhWFJsYlhNZ0xtRjFkRzl5YVhwaGRHbHZiaWNwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwZTF4eVhHNGdJQ0FnYjNCbGJsQnZjRlZ3S0NjamNHOXdkWEF0YzJsbmJpMXBiaWNwTzF4eVhHNGdJSDBwTzF4eVhHNGdJQ1FvSnlOd2IzQjFjQzF6YVdkdUxXbHVJQzVzYVc1clgzZHlZWEJ3WlhJZ1lTY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JpQWdJQ0JqYkc5elpWQnZjRlZ3S0NjdWNHOXdkWEF1WVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0J2Y0dWdVVHOXdWWEFvSnlOd2IzQjFjQzF5WlhObGRDMXdZWE56SnlrN1hISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxteGhibWN0ZDNKaGNIQmxjaUF1YzJWc1pXTjBMV3hoYm1jbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdKQ2gwYUdsektTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSkNoMGFHbHpLUzVqYUdsc1pISmxiaWdwTG14aGMzUW9LUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnZlNsY2NseHVJQ0FrS0NjdWJXVnVkVjl0YjJKcGJHVWdMbk5sWVhKamFDMXNhVzVsSnlrdVkyaGhibWRsS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0hSb2FYTXBMblpoYkNncExteGxibWQwYUNBK0lEQXBJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzVoWkdSRGJHRnpjeWduWlc1MFpYSW5LVHRjY2x4dUlDQWdJQ0FnSkNnbkxtMWxiblZmYlc5aWFXeGxJQzV6WldGeVkyZ25LUzVoWkdSRGJHRnpjeWduWlc1MFpYSW5LVHRjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJR2xtSUNna0tDY3ViV1Z1ZFY5dGIySnBiR1VnTG5ObFlYSmphQ2NwTG1oaGMwTnNZWE56S0NkbGJuUmxjaWNwS1NCN1hISmNiaUFnSUNBZ0lDQWdKQ2duTG0xbGJuVmZiVzlpYVd4bElDNXpaV0Z5WTJnbktTNXlaVzF2ZG1WRGJHRnpjeWduWlc1MFpYSW5LVHRjY2x4dUlDQWdJQ0FnSUNBa0tIUm9hWE1wTG5KbGJXOTJaVU5zWVhOektDZGxiblJsY2ljcE8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDaGNJaTV6ZFdKZmJXVnVkVjlwZEdWdGN5QStJR0ZjSWlrdWFHOTJaWElvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ1lXUmtTRzkyWlhJb2RHaHBjeTV3WVhKbGJuUkZiR1Z0Wlc1MEtUdGNjbHh1SUNCOUxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0J5WlcxdmRtVkliM1psY2loMGFHbHpMbkJoY21WdWRFVnNaVzFsYm5RcE8xeHlYRzRnSUgwcE8xeHlYRzRnSUNRb1hDSXViV1Z1ZFY5cGRHVnRjeUErSUdGY0lpa3VhRzkyWlhJb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdZV1JrU0c5MlpYSW9kR2hwY3lrN1hISmNiaUFnZlN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdjbVZ0YjNabFNHOTJaWElvZEdocGN5azdYSEpjYmlBZ0lIMHBPMXh5WEc0Z0lDUW9YQ0l1Wm1WaGRIVnlaWE5mYVhSbGJYTWdQaUJoWENJcExtaHZkbVZ5S0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHRmtaRWh2ZG1WeUtIUm9hWE11Y0dGeVpXNTBSV3hsYldWdWRDazdYSEpjYmlBZ2ZTd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnY21WdGIzWmxTRzkyWlhJb2RHaHBjeTV3WVhKbGJuUkZiR1Z0Wlc1MEtUdGNjbHh1SUNCOUtUdGNjbHh1SUNCc1pYUWdhR1ZwWjJoMFNHVmhaR1Z5SUQwZ0pDZ25hR1ZoWkdWeUp5a3VhR1ZwWjJoMEtDazdYSEpjYmlBZ0pDaDNhVzVrYjNjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0Nkb1pXRmtaWEluS1M1b1pXbG5hSFFvS1NBOElHaGxhV2RvZEVobFlXUmxjaWtnZTF4eVhHNGdJQ0FnSUNBa0tDZHRZV2x1SnlrdVkzTnpLQ2R3WVdSa2FXNW5KeXdnSkNnbmFHVmhaR1Z5SnlrdWFHVnBaMmgwS0NrZ0t5QW5jSGduS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5S1R0Y2NseHVJQ0JuYjFSdlEzVnljbVZ1WTNrb0p5NXdjbWxqWlNjcE8xeHlYRzRnSUdkdlZHOURkWEp5Wlc1amVTZ25MbkJ5YVdObFgyNWxkeWNwTzF4eVhHNGdJR2R2Vkc5RGRYSnlaVzVqZVNnbkxuQnlhV05sWDI5c1pDY3BPMXh5WEc0Z0lDUW9KeTVrWlhOamEzUnZjQzFtYVd4MFpYSXRZMjl1ZEdGcGJtVnlJQzVtYVd4MFpYSXRhR1ZoWkdWeUp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdhV1lnS0NFa0tIUm9hWE1wTG1oaGMwTnNZWE56S0NkaFkzUnBkbVVuS1NrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2N1WkdWelkydDBiM0F0Wm1sc2RHVnlMV052Ym5SaGFXNWxjaUF1Wm1sc2RHVnlMV2hsWVdSbGNpY3BMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbVJsYzJOcmRHOXdMV1pwYkhSbGNpMWpiMjUwWVdsdVpYSWdMbVpwYkhSbGNpMW9aV0ZrWlhJbktTNXVaWGgwS0NrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FrS0NjdWJHOWpheTF3YjJsdWRHVnlKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0FnSUdsbUlDZ2tLSFJvYVhNcExtaGhjME5zWVhOektDZHVieTFoWTNScGRtVW5LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dUlDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBa0tIUm9hWE1wTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0lDQWtLSFJvYVhNcExtNWxlSFFvS1M1aFpHUkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0lDQWdKQ2hjSWp4a2FYWWdZMnhoYzNNOUoyeHZZMnN0Y0c5cGJuUmxjaWMrUEM5a2FYWStYQ0lwTG1Gd2NHVnVaRlJ2S0Z3aVltOWtlVndpS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0pDZ25MbXh2WTJzdGNHOXBiblJsY2ljcExuSmxiVzkyWlNncE8xeHlYRzRnSUNBZ0lDQWtLSFJvYVhNcExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV1WlhoMEtDa3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDBwTzF4eVhHNGdJQ1FvWkc5amRXMWxiblFwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNCcFppQW9aUzUwWVhKblpYUXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2R3YjNCMWNGOWZkM0poY0hCbGNpY3BLU0I3WEhKY2JpQWdJQ0FnSUdOc2IzTmxVRzl3VlhBb0p5NXdiM0IxY0M1aFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0dSdlkzVnRaVzUwS1M1amJHbGpheWhtZFc1amRHbHZiaUFvWlNrZ2UxeHlYRzRnSUNBZ2FXWWdLR1V1ZEdGeVoyVjBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYkc5amF5MXdiMmx1ZEdWeUp5a3BJSHRjY2x4dUlDQWdJQ0FnSkNnbkxtWnBiSFJsY2kxb1pXRmtaWEluS1M1eVpXMXZkbVZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ1FvSnk1bWFXeDBaWEl0YUdWaFpHVnlKeWt1Ym1WNGRDZ3BMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbXh2WTJzdGNHOXBiblJsY2ljcExuSmxiVzkyWlNncE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxMblJoY21kbGRDNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMjkyWlhKc1lYa25LU2tnZTF4eVhHNGdJQ0FnSUNBa0tDZG9aV0ZrWlhJZ0xuTmxZWEpqYUMxb1pXRmtaWEl0YkdsdVpTY3BMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbVpsWVhSMWNtVnpYMmwwWlcxekp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tDZGliMlI1SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjF2WkdGc0p5azdYSEpjYmlBZ0lDQWdJQ1FvSnk1dmRtVnliR0Y1SnlrdWNtVnRiM1psS0NrN1hISmNiaUFnSUNCOVhISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxtMXZjbVV0YkdWemN5MW1hV3gwWlhJbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLSFJvYVhNcExuUnZaMmRzWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ1FvZEdocGN5a3VZMmhwYkdSeVpXNG9LUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNCcFppQW9KQ2gwYUdsektTNW9ZWE5EYkdGemN5Z25ZV04wYVhabEp5a3BJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUW9LUzVoWkdSRGJHRnpjeWduYjNCbGJpY3BPMXh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5Rb0tTNXlaVzF2ZG1WRGJHRnpjeWduYjNCbGJpY3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMHBPMXh5WEc0Z0lHbHVhWFJTWVc1blpWTnNhV1JsY2lncE8xeHlYRzRnSUdOb1pXTnJRbTk0Ulc1bmFXNWxLQ2N1WW05NExXTm9aV05yTG5OcGVtVW5LVHRjY2x4dUlDQmphR1ZqYTBKdmVFVnVaMmx1WlNnbkxtSnZlQzFqYUdWamF5NWpiMnh2Y2ljcE8xeHlYRzRnSUdOb1pXTnJRbTk0Ulc1bmFXNWxLQ2N1WW05NExXTm9aV05yTG1OaGRGOW1KeWs3WEhKY2JpQWdZMmhsWTJ0Q2IzaEZibWRwYm1Vb0p5NWliM2d0WTJobFkyc3VZbkpoYm1RbktUdGNjbHh1SUNCamFHVmphMEp2ZUVWdVoybHVaU2duTG1KdmVDMWphR1ZqYXk1dFlYUmxjbWxoYkNjcE8xeHlYRzRnSUdOb1pXTnJRbTk0Ulc1bmFXNWxLQ2N1WW05NExXTm9aV05yTG1nbktUdGNjbHh1SUNCeVpYTmxkRk5sYkdWamRDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUxuTnBlbVVnTG5KbGMyVnlMWE5sYkdWamRDY3NJQ2N1WW05NExXTm9aV05yTG5OcGVtVW5LVHRjY2x4dUlDQnlaWE5sZEZObGJHVmpkQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlMbU52Ykc5eUlDNXlaWE5sY2kxelpXeGxZM1FuTENBbkxtSnZlQzFqYUdWamF5NWpiMnh2Y2ljcE8xeHlYRzRnSUhKbGMyVjBVMlZzWldOMEtDY3VZMjl1ZEdWdWRDMW1hV3gwWlhJdVkyRjBYMllnTG5KbGMyVnlMWE5sYkdWamRDY3NJQ2N1WW05NExXTm9aV05yTG1OaGRGOW1KeWs3WEhKY2JpQWdjbVZ6WlhSVFpXeGxZM1FvSnk1amIyNTBaVzUwTFdacGJIUmxjaTVpY21GdVpDQXVjbVZ6WlhJdGMyVnNaV04wSnl3Z0p5NWliM2d0WTJobFkyc3VZbkpoYm1RbktUdGNjbHh1SUNCeVpYTmxkRk5sYkdWamRDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUxtMWhkR1Z5YVdGc0lDNXlaWE5sY2kxelpXeGxZM1FuTENBbkxtSnZlQzFqYUdWamF5NXRZWFJsY21saGJDY3BPMXh5WEc0Z0lISmxjMlYwVTJWc1pXTjBLQ2N1WTI5dWRHVnVkQzFtYVd4MFpYSXVhQ0F1Y21WelpYSXRjMlZzWldOMEp5d2dKeTVpYjNndFkyaGxZMnN1YUNjcE8xeHlYRzRnSUNRb0p5NXRiMkpwYkdVdFptbHNkR1Z5TFdOdmJuUmhhVzVsY2lBdVptbHNkR1Z5TFdobFlXUmxjaWNwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUc5d1pXNVFiM0JWY0Nna0tIUm9hWE1wTG01bGVIUW9LU2s3WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG0xdlpHRnNMV1pwZEdWeUlDNTBhWFJzWlMxbWFXeDBaWElnYzNabkp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdZMnh2YzJWUWIzQlZjQ2duTG0xdlpHRnNMV1pwZEdWeUp5azdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbTF2WWkxbWFXeDBaWEl0YUdWaFpHVnlKeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSkNoMGFHbHpLUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBa0tIUm9hWE1wTG5CaGNtVnVkQ2dwTG5SdloyZHNaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNCOUtUdGNjbHh1SUNCY2NseHVJQ0JzWlhRZ1kyOTFiblFnUFNBd08xeHlYRzRnSUNBa0tDY3ViVzlpTFdOb1pXTnJMV2wwWlcxeklDNWliM2d0WTJobFkyc25LUzVqYUdGdVoyVW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNCcFppQW9KQ2gwYUdsektTNXdjbTl3S0NkamFHVmphMlZrSnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0JqYjNWdWRDc3JPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUdOdmRXNTBMUzA3WEhKY2JpQWdJQ0FnSUgxY2NseHVJQ0FnSUNBa0tDY3ViVzlrWVd3dGNtVnpaWFFnYzNCaGJpY3BMbWgwYld3b0p5Z25JQ3NnWTI5MWJuUWdLeUFuS1NjcFhISmNiaUFnSUNBZ2FXWWdLR052ZFc1MElENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYSmxjMlYwSnlrdWNtVnRiM1psUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYTjFZbTFwZENjcExuSmxiVzkyWlVOc1lYTnpLQ2R1YnkxaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYSmxjMlYwSnlrdVlXUmtRMnhoYzNNb0oyNXZMV0ZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0FnSkNnbkxtMXZaR0ZzTFhOMVltMXBkQ2NwTG1Ga1pFTnNZWE56S0NkdWJ5MWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQjlYSEpjYmlBZ0lIMHBPMXh5WEc0Z0lDUW9KeTV0YjJJdFkyaGxZMnN0YVhSbGJYTWdMbUp2ZUMxamFHVmphenB1YjNRb0xtTnZiRzl5S1NjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0hSb2FYTXBMbkJ5YjNBb0oyTm9aV05yWldRbktTa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblJ6S0NjdWJXOWlMV1pwYkhSbGNpMXBkR1Z0Y3ljcExtTm9hV3hrY21WdUtDY3ViVzlpTFdacGJIUmxjaTFvWldGa1pYSW5LUzVoY0hCbGJtUW9Kenh6Y0dGdUlHUmhkR0V0Ym1GdFpUMG5LeUFrS0hSb2FYTXBMbTVsZUhRb0tTNW9kRzFzS0Nrckp6NG9KeUFySUNRb2RHaHBjeWt1Ym1WNGRDZ3BMbWgwYld3b0tTQXJJQ2NwUEM5emNHRnVQaWNwTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tIUm9hWE1wTG5CaGNtVnVkSE1vSnk1dGIySXRabWxzZEdWeUxXbDBaVzF6SnlrdVkyaHBiR1J5Wlc0b0p5NXRiMkl0Wm1sc2RHVnlMV2hsWVdSbGNpY3BMbVpwYm1Rb0ozTndZVzViWkdGMFlTMXVZVzFsUFNjckpDaDBhR2x6S1M1dVpYaDBLQ2t1YUhSdGJDZ3BLeWRkSnlrdWNtVnRiM1psS0NrN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1SUNBa0tDY3ViVzlrWVd3dGNtVnpaWFFuS1M1amJHbGpheWhtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBa0tDY3ViVzlpTFdOb1pXTnJMV2wwWlcxeklDNWliM2d0WTJobFkyc25LUzV3Y205d0tDZGphR1ZqYTJWa0p5d2dabUZzYzJVcE8xeHlYRzRnSUNBZ0pDZ25MbTF2WWkxbWFXeDBaWEl0YUdWaFpHVnlKeWt1Wm1sdVpDZ25jM0JoYmljcExuSmxiVzkyWlNncE8xeHlYRzRnSUNBZ1kyOTFiblFnUFNBd08xeHlYRzRnSUNBZ0pDZ25MbTF2WkdGc0xYSmxjMlYwSUhOd1lXNG5LUzVvZEcxc0tDY29KeUFySUdOdmRXNTBJQ3NnSnlrbktUdGNjbHh1SUNBZ0lDUW9KeTV0YjJSaGJDMXlaWE5sZENjcExtRmtaRU5zWVhOektDZHVieTFoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ1FvSnk1dGIyUmhiQzF6ZFdKdGFYUW5LUzVoWkdSRGJHRnpjeWduYm04dFlXTjBhWFpsSnlrN1hISmNibHh5WEc0Z0lIMHBPMXh5WEc0Z0lHbG1JQ2drS0NjalluUnVMWGRoZEdOb0p5a3ViR1Z1WjNSb0lENGdNQ2tnZTF4eVhHNGdJQ0FnSUNRb1pHOWpkVzFsYm5RcExuTmpjbTlzYkNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJR2xtSUNoamIyMWxLQ2NqWW5SdUxYZGhkR05vSnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSkNnbkxuQnlaWFpwWlhjdGFHVmhaR1Z5TFdkdmIyUnpKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FrS0NjdWNISmxkbWxsZHkxb1pXRmtaWEl0WjI5dlpITW5LUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWxjY2x4dUlDQWdJQ0FnSUgxY2NseHVJQ0FnSUNCOUtUdGNjbHh1SUNCOU8xeHlYRzRnSUZ4eVhHNGdJR3hsZENCdGIySkhZV3hzVTJ4cFpHVnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbWRoYkd3dGQzSmhjSEF0YldGcGJpY3BMRnh5WEc0Z0lDQWdZMnh2YzJWSFlXeHNaWEo1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1kaGJHd3RZMnh2YzJVdFluUnVKeWs3WEhKY2JpQWdhV1lnS0cxdllrZGhiR3hUYkdsa1pYSXBJSHRjY2x4dUlDQWdJQ0FnWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaUFvWlNrZ2UxeHlYRzRnSUNBZ0lDQWdhV1lnS0dVdWRHRnlaMlYwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbloyRnNiQzEzY21Gd2NDMXRZV2x1SnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUcxdllrZGhiR3hUYkdsa1pYSXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25iM0JsYmljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnWkc5amRXMWxiblF1WW05a2VTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHRiMlJoYkNjcFhISmNiaUFnSUNBZ0lDQjlJR1ZzYzJVZ2V5QnlaWFIxY200Z2ZUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdZMnh2YzJWSFlXeHNaWEo1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQnRiMkpIWVd4c1UyeHBaR1Z5TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjI5d1pXNG5LVHRjY2x4dUlDQWdJQ0FnWkc5amRXMWxiblF1WW05a2VTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHRiMlJoYkNjcE8xeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOemJHbGtaUzB4SnlrdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlBb1pTa2dlMXh5WEc0Z0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JpQWdJQ0FnSUcxdllrZGhiR3hUYkdsa1pYSXVZMnhoYzNOTWFYTjBMbUZrWkNnbmIzQmxiaWNwTzF4eVhHNGdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbU5zWVhOelRHbHpkQzVoWkdRb0oyMXZaR0ZzSnlrN1hISmNiaUFnSUNBZ0lITjNhWEJsY2tkdmIyUnpMbk5zYVdSbFZHOG9NU3dnTUNrN1hISmNiaUFnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRJbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWd5TENBd0tUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRNbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWd6TENBd0tUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRRbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWcwTENBd0tUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzTnNhV1JsTFRVbktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ2JXOWlSMkZzYkZOc2FXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdjM2RwY0dWeVIyOXZaSE11YzJ4cFpHVlVieWcxTENBd0tUdGNjbHh1SUNBZ0lIMHBPeUFnWEhKY2JpQWdmU0JsYkhObElIc2djbVYwZFhKdUlIMDdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVJQ0pkTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pZlE9PVxyXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
