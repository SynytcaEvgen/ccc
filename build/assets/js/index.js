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
        if (panel.style.maxHeight && panel.classList.contains('accordion')) {
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
  $.validator.addMethod("EMAIL", function (value, element) {
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
          equalTo: "#person-pass",
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
          minlength: 'Почтовый индекс состоит из 6 цифр',
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
    for (let i = 0; i < numberToFormat.length; i++) {
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
  let textareaLineHeight = parseInt($(".textarea-wrapper textarea").css("line-height"));
  function rNumber(elem) {
    return String(elem).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  (function ($) {
    $(window).on("load", function () {
      $(".descktop-filter-container .content-filter .filter-item").mCustomScrollbar({
        theme: "my-theme"
      });
      $(".mobile-filter-container .content-filter .mob-check-item").mCustomScrollbar({
        theme: "my-theme"
      });
      $(".all-lang-item").mCustomScrollbar({
        theme: "my-theme"
      });
      $(".points-list__outter").mCustomScrollbar({
        theme: "my-theme"
      });
      $(".account-orders__nav__var,.size-table").mCustomScrollbar({
        theme: "my-theme",
        axis: "x"
      });
      $(".nice-select.wide .list").mCustomScrollbar({
           theme:"my-theme"
      });
      $(".basket-preview-container .goods-item").mCustomScrollbar({
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
  // function resPrice() {
  //   instance.reset();
  //   if ($(window).width() >= (900 - withScrollBar())) {
  //     $('.js-input-from').val('0');
  //     $('.js-input-to').val('100 000');
  //     $('.filter-header.range').removeClass('select');
  //   } else {
  //     $('.mob-input-from').val('0');
  //     $('.mob-input-to').val('100 000');
  //     $('.filter-header.range').removeClass('select');
  //   }

  // };
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
        pastPos.prepend('<span data-name=' + mobIdCheck + '>' + pull + ',</span>');
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
      if ($(this).children('input').prop('checked') && $(this).children('input').hasClass('accept_check')) {
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
      jin[i].addEventListener('input', function (e) {
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
  addRemoveClass('.info-frame .info-content-wrapper>.title', 'accordion-btn');
  addRemoveClass('section.info .info-menu-wrapper', 'accordion');
  addRemoveClass_767('.gall-wrapp-main', 'load');

  $(window).resize(function () {
    addRemoveClass('.info-frame .info-content-wrapper>.title', 'accordion-btn');
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
  $('.features_items .autorization').click(function () {
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
    // resPrice();
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
    function clickToSlide(elem) {
      let elemNumb = elem.slice(-1);
      document.querySelector(elem).addEventListener('click', function (e) {
        e.preventDefault();
        mobGallSlider.classList.add('open');
        document.body.classList.add('modal');
        swiperGoods.slideTo(elemNumb, 0);
      });
    };
    clickToSlide('#slide-1');
    $('[id*="slide-"]').each(function () {
      let currSlide = '#' + $(this).attr('id');
      clickToSlide(currSlide);
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
  $('.add_to_favorit').click(function (e) {
    let button = $(e.currentTarget)
    let prod_id = button.data('product_id')
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
      success: function (response) {
        response = JSON.parse(response);

        if (!response.success) {
          if (need_delete) {
            button.removeClass('select');
            parseToIn--;
            if (parseToIn == 0 || parseToIn < 0) {
              fav_icon.removeClass('active');
              parseToIn = 0;
            }
            fav_icon.html(parseToIn);
          } else {
            button.addClass('select');
            parseToIn++;
            fav_icon.html(parseToIn);
            if (!parseToIn == 0) {
              fav_icon.addClass('active')
            }
          }
        }
      }
    });
  });
  $('.decrease').click(function (e) {
    var old = $(this).siblings('input').val();
    if (old > 1) {
      $(this).siblings('input').val(parseInt(old) - 1);
    }
  })
  $('.increase').click(function (e) {
    var old = $(this).siblings('input').val();
    $(this).siblings('input').val(parseInt(old) + 1);
  })
  $('.points-nav a').click(function (e) {
    e.preventDefault();
    $('.points-nav a.active').removeClass('active');
    $(this).addClass('active')
    $('.points-view .active').removeClass('active');
    $('.' + $(this).attr('data-id')).addClass('active');
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
  $('.filter-active-items').on('click', '.close-filter-wrapper', function (e) {
    let cPar = $(this).parents('.active-item'),
      wayCheck = cPar.attr('data-name'),
      filterWrap = $('.filter-continer'),
      clickIn = filterWrap.find('input[id=' + wayCheck + ']');
    clickIn.prop('checked', false).trigger('change');
    cPar.remove();
    haveAChild('.filter-active-items');
  });
  $('.filter-active-items').on('click', '.filter-active-reset-btn', function (e) {
    let itemRem = $('.active-item'),
      filterCont = $('.filter-continer');
    filterCont.find('input').prop('checked', false).trigger('change');
    itemRem.remove();
    // resPrice();
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
  function delF() {
    $('.delivery_wrapp').css("display", "none")
    $('.delivery_wrapp').each(function () {
      let delIn = $(this);
      $('.delivery-radio .radio-wrap input').each(function () {
        if ($(this).attr('data-name') == delIn.attr('data-name') && $(this).prop('checked')) {
          $(delIn).css("display", "block");
        };
      })
    });
  }
  delF();
  $('.delivery-radio .radio-wrap input').click(function () {
    delF();
  });
  if ($('.grid-row-two').children().length == 1) {
    $('.grid-row-two').addClass('mode_one');
  } if ($('.grid-row-two').children().length == 3) {
    $('.grid-row-two').addClass('mode_three');
  };
  $('.acceptance input[name="accept"]').change(function () {
    if (!$(this).prop('checked')) {
      $('.checkout-total .btn').addClass('no-active');
    } else {
      $('.checkout-total .btn').removeClass('no-active');
    }
  });
  function filterControl() {
    let desckFilter = $('.descktop-filter-container'),
      moreLess = $('.descktop-filter-container .more-less-filter'),
      wrpFilter = $('.descktop-filter-container .filter-item'),
      styleHide = {
        opacity: "0",
        visibility: "hidden"
      },
      styleVis = {
        opacity: "1",
        visibility: "visible"
      }
      itemFilter = $('.descktop-filter-container .filter-items');

    if (wrpFilter.outerHeight() == itemFilter.outerHeight(true)) {
      desckFilter.addClass('open');
      moreLess.css(styleHide);
    } else {
      desckFilter.removeClass('open');
      moreLess.css(styleVis);
    }
  };
  filterControl();
};



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMzUwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBlbmQqL1xyXG5cclxuICAgIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgICBsZXQgc3dpcGVyUHJvZCA9IG5ldyBTd2lwZXIoJy5wcm9kLXNsaWRlci1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgICAgIH0sXHJcblx0XHRcdCAgIDM3NToge1xyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi44LFxyXG4gICAgICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdCAgIH0sXHJcblx0XHRcdCAgIDEzNjY6IHtcclxuXHRcdFx0ICAgXHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHQgICB9LFxyXG5cdFx0ICB9LFxyXG4gICAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmdvb2RzLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXHJcbiAgZnVuY3Rpb24gbWVudUFjY29yZGlvbk1vdmVyKCkge1xyXG4gICAgbGV0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJ0blwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCYmcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFjY0VuZ2luZShwaWNrKSB7XHJcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwaWNrKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgfSk7XHJcbiAgICB9OyBcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFJlbW92ZUNsYXNzKGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDkwMCkge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3NfNzY3KGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDc2Nykge1xyXG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKGFkZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb3BlblBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjbG9zZVBvcFVwKGVsZW0pIHtcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAgXHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfTtcclxuICBqUXVlcnkuZXh0ZW5kKGpRdWVyeS52YWxpZGF0b3IubWVzc2FnZXMsIHtcclxuICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1INGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C8XCIsXHJcbiAgICByZW1vdGU6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIGVtYWlsOiBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiLFxyXG4gIH0pO1xyXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIkVNQUlMXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aLl17Miw1fSQvaS50ZXN0KHZhbHVlKTtcclxuICB9LCBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0b3JGb3JtKGVsZW0pIHtcclxuICAgICQoZWxlbSkudmFsaWRhdGUoe1xyXG4gICAgICBydWxlczoge1xyXG4gICAgICAgIHBzd29yZDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbF9uOlwicmVxdWlyZWQgRU1BSUxcIixcclxuICAgICAgfSxcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwc3dvcmQ6IHtcclxuICAgICAgICAgIG1pbmxlbmd0aDogJ9Cc0LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8gNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWRkSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gcmVtb3ZlSG92ZXIoZWxlbSkgeyBcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ2luLWhvdmVyJyk7IFxyXG4gIH07XHJcbiAgZnVuY3Rpb24gZ29Ub0N1cnJlbmN5KGVsZW0pIHtcclxuICAgIGxldCBudW1iZXJUb0Zvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclRvRm9ybWF0Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgbGV0IHRvTnVtYiA9ICtudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUw7XHJcbiAgICAgICBsZXQgZm9ybWF0TnVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnUlVCJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pLmZvcm1hdCh0b051bWIpO1xyXG4gICAgICAgbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MID0gZm9ybWF0TnVtO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2hlY2tCb3hFbmdpbmUoZWxlbSkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICB9XHJcbiAgICAgIGNoZWNoQnRuKHRoaXMsIGNvdW50KTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzVW50aWwoJy5jb250ZW50LWZpbHRlcicpLm5leHQoJy5idG4td3JhcHBlcicpLmNoaWxkcmVuKCcuc3RhdGUtc2VsZWN0JykuY2hpbGRyZW4oJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbChjb3VudCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNoZWNoQnRuKGVsZW0sIGEpIHtcclxuICAgIGlmIChhID4gMCkge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5hZGRDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGVsZW0pLnBhcmVudHNVbnRpbCgnLmNvbnRlbnQtZmlsdGVyJykubmV4dCgnLmJ0bi13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYnRuJykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAkKGVsZW0pLnBhcmVudCgnLmZpbHRlci1pdGVtcycpLnBhcmVudHNVbnRpbCgnLmZpbHRlci1pdGVtcycpLnByZXYoKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0KGVsZW0sIGJveCkge1xyXG4gICAgJChlbGVtKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoYm94KS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAkKGVsZW0pLm5leHQoJy5udW1iLXNlbGVjdCcpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgwKTtcclxuICAgICAgY291bnQgPSAwO1xyXG4gICAgICBjaGVjaEJ0bihib3gpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBpbml0UmFuZ2VTbGlkZXIoKSB7IFxyXG4gICAgdmFyICRyYW5nZSA9ICQoXCIuanMtcmFuZ2Utc2xpZGVyXCIpLFxyXG4gICAgJGlucHV0RnJvbSA9ICQoXCIuanMtaW5wdXQtZnJvbVwiKSxcclxuICAgICRpbnB1dFRvID0gJChcIi5qcy1pbnB1dC10b1wiKSxcclxuICAgIGluc3RhbmNlLFxyXG4gICAgbWluID0gMCxcclxuICAgIG1heCA9IDEwMDAwMCxcclxuICAgIGZyb20gPSAwLFxyXG4gICAgdG8gPSAwO1xyXG4gICAgJHJhbmdlLmlvblJhbmdlU2xpZGVyKHtcclxuICAgIFx0ICBza2luOiBcInJvdW5kXCIsXHJcbiAgICAgICAgdHlwZTogXCJkb3VibGVcIixcclxuICAgICAgICBtaW46IG1pbixcclxuICAgICAgICBtYXg6IG1heCxcclxuICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgIHRvOiAxMDAwMDAsXHJcbiAgICAgICAgb25TdGFydDogdXBkYXRlSW5wdXRzLFxyXG4gICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVJbnB1dHNcclxuICAgIH0pO1xyXG4gICAgaW5zdGFuY2UgPSAkcmFuZ2UuZGF0YShcImlvblJhbmdlU2xpZGVyXCIpO1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRzIChkYXRhKSB7XHJcbiAgICBcdGZyb20gPSBkYXRhLmZyb207XHJcbiAgICAgICAgdG8gPSBkYXRhLnRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRpbnB1dEZyb20ucHJvcChcInZhbHVlXCIsIGZyb20pO1xyXG4gICAgICAgICRpbnB1dFRvLnByb3AoXCJ2YWx1ZVwiLCB0byk7XHRcclxuICAgIH1cclxuICAgICRpbnB1dEZyb20ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IG1pbikge1xyXG4gICAgICAgICAgICB2YWwgPSBtaW47XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiB0bykge1xyXG4gICAgICAgICAgICB2YWwgPSB0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogdmFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJGlucHV0VG8ub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykucHJvcChcInZhbHVlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhbGlkYXRlXHJcbiAgICAgICAgaWYgKHZhbCA8IGZyb20pIHtcclxuICAgICAgICAgICAgdmFsID0gZnJvbTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG1heCkge1xyXG4gICAgICAgICAgICB2YWwgPSBtYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHRvOiB2YWxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgKGZ1bmN0aW9uKCQpe1xyXG4gICAgICAgICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAuZmlsdGVyLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLm1vYi1jaGVjay1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuYWxsLWxhbmctaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgIHRoZW1lOlwibXktdGhlbWVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICB9KShqUXVlcnkpO1xyXG4gIGZ1bmN0aW9uIGNvbWUoZWxlbSkge1xyXG4gICAgdmFyIGRvY1ZpZXdUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxyXG4gICAgICBlbGVtVG9wID0gJChlbGVtKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgIGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgJChlbGVtKS5oZWlnaHQoKTtcclxuXHJcbiAgICByZXR1cm4gKChlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20pICYmIChlbGVtVG9wID49IGRvY1ZpZXdUb3ApKTtcclxuICB9XHJcbiAgICQoJy5mZWF0dXJlc19pdGVtcyAuc2VhcmNoJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDkwMCkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9kYWwnKTtcclxuICAgICAgaWYgKCQoJ2JvZHk+ZGl2JykuaGFzQ2xhc3MoJ292ZXJsYXknKSkge1xyXG4gICAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5zZWFyY2gtd3JhcHBlciAuZm9ybSA+IGlucHV0JykuZm9jdXMoKTtcclxuICAgICB9O1xyXG4gICAgIHJldHVybiBmYWxzZVxyXG4gICB9KTtcclxuICAkKCcuc2VhcmNoLWhlYWRlci1saW5lIHN2Zy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICB9KTtcclxuICAkKCcuYnVyZ2VyLW1lbnUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7ICBcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubWVudV9tb2JpbGUgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIC5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tZW51X21vYmlsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICB9KTtcclxuICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubmF2X3dyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubW9iaWxlLW1lbnUtd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfSk7XHJcbiAgJCgnLnByb21vX2xpbmUgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsICcwJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICB9KTtcclxuICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsJ2FjY29yZGlvbi1idG4nKTtcclxuICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5pbmZvLW1lbnUtd3JhcHBlcicsICdhY2NvcmRpb24nKTtcclxuICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3MoJy5pbmZvLWZyYW1lIC5pbmZvLWNvbnRlbnQtd3JhcHBlcj4udGl0bGUnLCdhY2NvcmRpb24tYnRuJyk7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gICAgbWVudUFjY29yZGlvbk1vdmVyKCk7XHJcbiAgICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xyXG4gIH0pO1xyXG4gIG1lbnVBY2NvcmRpb25Nb3ZlcigpO1xyXG4gIGFjY0VuZ2luZSgnLmFjYy1vcGVuJyk7XHJcbiAgZnVuY3Rpb24gc2xpY2VTZW50ZW5jZShxLCBzZW50ZW5jZSkge1xyXG4gICAgbGV0IHNpemUgPSBxLFxyXG4gICAgICBuZXdzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VudGVuY2UpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobmV3c0NvbnRlbnRbaV0uaW5uZXJIVE1MLmxlbmd0aCA+IHNpemUpIHtcclxuICAgICAgICAgXHRuZXdzQ29udGVudFtpXS5pbm5lckhUTUwgPSBuZXdzQ29udGVudFtpXS5pbm5lckhUTUwuc2xpY2UoMCwgc2l6ZSkgKyAnIC4uLic7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07ICAgIFxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDM1Nykge1xyXG4gICAgICBzbGljZVNlbnRlbmNlKDM0LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgzMywgJy5kaXNjcnB0aW9uLWdvb2RzID4gcCcpOyBcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCAmJiAkKHdpbmRvdykud2lkdGgoKSA+PSAzNTcpIHtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDM4LCAnLmRpc2NycHRpb24tZ29vZHMtcyA+IHAnKTtcclxuICAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgc2xpY2VTZW50ZW5jZSgyNywgJy5kaXNjcnB0aW9uLWdvb2RzLXMgPiBwJyk7XHJcbiAgICAgICBzbGljZVNlbnRlbmNlKDMzLCAnLmRpc2NycHRpb24tZ29vZHMgPiBwJyk7IFxyXG4gICAgfTtcclxuICBcclxuICB2YWxpZGF0b3JGb3JtKFwiI3NpZ24taW5cIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNyZXNldC1wYXNzXCIpO1xyXG4gICQoJy5jbG9zZS1wb3B1cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcuZmVhdHVyZXNfaXRlbXMgLmF1dG9yaXphdGlvbicpLmNsaWNrKGZ1bmN0aW9uICgpe1xyXG4gICAgb3BlblBvcFVwKCcjcG9wdXAtc2lnbi1pbicpO1xyXG4gIH0pO1xyXG4gICQoJyNwb3B1cC1zaWduLWluIC5saW5rX3dyYXBwZXIgYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1yZXNldC1wYXNzJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmxhbmctd3JhcHBlciAuc2VsZWN0LWxhbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmxhc3QoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSlcclxuICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaC1saW5lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmhhc0NsYXNzKCdlbnRlcicpKSB7XHJcbiAgICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIi5zdWJfbWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIubWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcyk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcyk7XHJcbiAgIH0pO1xyXG4gICQoXCIuZmVhdHVyZXNfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgIGFkZEhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9KTtcclxuICBsZXQgaGVpZ2h0SGVhZGVyID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgJCh3aW5kb3cpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCdoZWFkZXInKS5oZWlnaHQoKSA8IGhlaWdodEhlYWRlcikge1xyXG4gICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nJywgJCgnaGVhZGVyJykuaGVpZ2h0KCkgKyAncHgnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBnb1RvQ3VycmVuY3koJy5wcmljZScpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX25ldycpO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlX29sZCcpO1xyXG4gICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCduby1hY3RpdmUnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIjxkaXYgY2xhc3M9J2xvY2stcG9pbnRlcic+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fd3JhcHBlcicpKSB7XHJcbiAgICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbG9jay1wb2ludGVyJykpIHtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vcmUtbGVzcy1maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGluaXRSYW5nZVNsaWRlcigpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLnNpemUnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICBjaGVja0JveEVuZ2luZSgnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIGNoZWNrQm94RW5naW5lKCcuYm94LWNoZWNrLmgnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLnNpemUgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLnNpemUnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLmNvbG9yIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5jb2xvcicpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuY2F0X2YgLnJlc2VyLXNlbGVjdCcsICcuYm94LWNoZWNrLmNhdF9mJyk7XHJcbiAgcmVzZXRTZWxlY3QoJy5jb250ZW50LWZpbHRlci5icmFuZCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suYnJhbmQnKTtcclxuICByZXNldFNlbGVjdCgnLmNvbnRlbnQtZmlsdGVyLm1hdGVyaWFsIC5yZXNlci1zZWxlY3QnLCAnLmJveC1jaGVjay5tYXRlcmlhbCcpO1xyXG4gIHJlc2V0U2VsZWN0KCcuY29udGVudC1maWx0ZXIuaCAucmVzZXItc2VsZWN0JywgJy5ib3gtY2hlY2suaCcpO1xyXG4gICQoJy5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5Qb3BVcCgkKHRoaXMpLm5leHQoKSk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vZGFsLWZpdGVyIC50aXRsZS1maWx0ZXIgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY2xvc2VQb3BVcCgnLm1vZGFsLWZpdGVyJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBcclxuICBsZXQgY291bnQgPSAwO1xyXG4gICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgIH1cclxuICAgICAkKCcubW9kYWwtcmVzZXQgc3BhbicpLmh0bWwoJygnICsgY291bnQgKyAnKScpXHJcbiAgICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgJCgnLm1vZGFsLXJlc2V0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICB9XHJcbiAgIH0pO1xyXG4gICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjazpub3QoLmNvbG9yKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5hcHBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nKyAkKHRoaXMpLm5leHQoKS5odG1sKCkrJz4oJyArICQodGhpcykubmV4dCgpLmh0bWwoKSArICcpPC9zcGFuPicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5tb2ItZmlsdGVyLWl0ZW1zJykuY2hpbGRyZW4oJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJ3NwYW5bZGF0YS1uYW1lPScrJCh0aGlzKS5uZXh0KCkuaHRtbCgpKyddJykucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAkKCcubW9kYWwtcmVzZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuZmluZCgnc3BhbicpLnJlbW92ZSgpO1xyXG4gICAgY291bnQgPSAwO1xyXG4gICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKTtcclxuICAgICQoJy5tb2RhbC1yZXNldCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcclxuICAgICQoJy5tb2RhbC1zdWJtaXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG4gIGlmICgkKCcjYnRuLXdhdGNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChjb21lKCcjYnRuLXdhdGNoJykpIHtcclxuICAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgIH1cclxuICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBtb2JHYWxsU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtd3JhcHAtbWFpbicpLFxyXG4gICAgY2xvc2VHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtY2xvc2UtYnRuJyk7XHJcbiAgaWYgKG1vYkdhbGxTbGlkZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbC13cmFwcC1tYWluJykpIHtcclxuICAgICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpXHJcbiAgICAgICB9IGVsc2UgeyByZXR1cm4gfTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICAgIHN3aXBlckdvb2RzLnNsaWRlVG8oMSwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygyLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbygzLCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg0LCAwKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLTUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyg1LCAwKTtcclxuICAgIH0pOyAgXHJcbiAgfSBlbHNlIHsgcmV0dXJuIH07XHJcbn07XHJcblxyXG5cclxuICJdLCJmaWxlIjoiaW5kZXguanMifQ==

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgLypTbGlkZXIgc3dpcGVyIGhlYWRlciBiYW5uZXIgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJCYW5uZXIgPSBuZXcgU3dpcGVyKCcuc2xpZGVyX2NvbnRhaW5lci5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8qU2xpZGVyIHN3aXBlciBoZWFkZXIgYmFubmVyIGVuZCovXHJcblxyXG4gIC8qU2xpZGVyIHN3aXBlciBwcm9kLXNsaWRlciBzdGFydCovXHJcbiAgbGV0IHN3aXBlclByb2QgPSBuZXcgU3dpcGVyKCcucHJvZC1zbGlkZXItY29udGFpbmVyLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgLy8gZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDA6IHtcclxuICAgICAgICBzcGFjZUJldHdlZW46IDQsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgfSxcclxuICAgICAgMzAwOiB7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXHJcbiAgICAgIH0sXHJcbiAgICAgIDM3NToge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNCxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxyXG4gICAgICB9LFxyXG4gICAgICA0ODA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjYsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICA2MDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjgsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMjQ6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICB9LFxyXG4gICAgICAxMzY2OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgc3RhcnQqL1xyXG4gIGxldCBzd2lwZXJHb29kcyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LW1vYi1jb250YWluZXIuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzUwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuZ29vZHMtcGFnaW5hdGlvbicsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLypTbGlkZXIgc3dpcGVyIGdvb2RzLWNhcmQgZW5kKi9cclxuICBmdW5jdGlvbiB3aXRoU2Nyb2xsQmFyKCkge1xyXG4gICAgbGV0IHBvcFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICBsZXQgd1Njcm9sbCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcG9wV3JhcC5vZmZzZXRXaWR0aDtcclxuICAgIHJldHVybiB3U2Nyb2xsO1xyXG4gIH1cclxuICBmdW5jdGlvbiBtZW51QWNjb3JkaW9uTW92ZXIoKSB7XHJcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tYnRuXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQgJiYgcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gYWNjRW5naW5lKHBpY2spIHtcclxuICAgIGxldCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBpY2spO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZFJlbW92ZUNsYXNzKGVsZW0sIGFkZCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XHJcbiAgICAgICQoZWxlbSkuYWRkQ2xhc3MoYWRkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBmdW5jdGlvbiBhZGRSZW1vdmVDbGFzc183NjcoZWxlbSwgYWRkKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gKDc2NyAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgICAgJChlbGVtKS5hZGRDbGFzcyhhZGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChlbGVtKS5yZW1vdmVDbGFzcyhhZGQpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBvcGVuUG9wVXAoZWxlbSkge1xyXG4gICAgbGV0IHdTY3JvbE8gPSB3aXRoU2Nyb2xsQmFyKCk7XHJcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcclxuICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCB3U2Nyb2xPKTtcclxuICAgICQoJ2hlYWRlcicpLmNzcygncGFkZGluZy1yaWdodCcsIHdTY3JvbE8pO1xyXG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdwYWRkaW5nLXJpZ2h0Jywgd1Njcm9sTyk7XHJcbiAgICAkKCdoZWFkZXIgLnByb21vX2xpbmUnKS5jc3MoJ21hcmdpbi1yaWdodCcsIC13U2Nyb2xPKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGNsb3NlUG9wVXAoZWxlbSkge1xyXG4gICAgJChlbGVtKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgMCk7XHJcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcclxuICAgICQoJ2hlYWRlciAucHJvbW9fbGluZScpLmNzcygncGFkZGluZy1yaWdodCcsIDApO1xyXG4gICAgJCgnaGVhZGVyIC5wcm9tb19saW5lJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAwKTtcclxuICB9O1xyXG4gIGpRdWVyeS5leHRlbmQoalF1ZXJ5LnZhbGlkYXRvci5tZXNzYWdlcywge1xyXG4gICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LxcIixcclxuICAgIHJlbW90ZTogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxyXG4gICAgZW1haWw6IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBXCIsXHJcbiAgfSk7XHJcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiRU1BSUxcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05LV0rXFwuW2EtekEtWi5dezIsNX0kL2kudGVzdCh2YWx1ZSk7XHJcbiAgfSwgXCLQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDRjdC70LXQutGC0YDQvtC90L3Ri9C5INCw0LTRgNC10YFcIik7XHJcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiUEhPTkVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXihcXHMqKT8oXFwrKT8oWy0gXygpOj0rXT9cXGRbLSBfKCk6PStdPyl7MTAsMTR9KFxccyopPyQvLnRlc3QodmFsdWUpO1xyXG4gIH0sIFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0LXQutGC0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0b3JGb3JtKGVsZW0pIHtcclxuICAgICQoZWxlbSkudmFsaWRhdGUoe1xyXG4gICAgICBydWxlczoge1xyXG4gICAgICAgIHBzd29yZDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3RfbmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXR5OiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0cmVldDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJqZWN0OiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnVpbGRpbmc6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBhcnRhbWVudDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgemlwOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG1pbmxlbmd0aDogNixcclxuICAgICAgICAgIG1heGxlbmd0aDogNixcclxuICAgICAgICAgIGRpZ2l0czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3RfbmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwc3dvcmRfY29uZmlybToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgICBlcXVhbFRvOiBcIiNwZXJzb24tcGFzc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWxfbjogXCJyZXF1aXJlZCBFTUFJTFwiLFxyXG4gICAgICAgIGVtYWlsX3ByOiBcIkVNQUlMXCIsXHJcbiAgICAgICAgcGhvbmVfcnU6IFwiUEhPTkVcIixcclxuICAgICAgICBwaG9uZV9ydV9yZXE6IFwicmVxdWlyZWQgUEhPTkVcIixcclxuICAgICAgfSxcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwc3dvcmQ6IHtcclxuICAgICAgICAgIG1pbmxlbmd0aDogJ9Cc0LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8gNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHN3b3JkX2NvbmZpcm06IHtcclxuICAgICAgICAgIGVxdWFsVG86IFwi0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCXCIsXHJcbiAgICAgICAgICBtaW5sZW5ndGg6ICfQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPIDYg0YHQuNC80LLQvtC70L7QsidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHppcDoge1xyXG4gICAgICAgICAgbWlubGVuZ3RoOiAn0J/QvtGH0YLQvtCy0YvQuSDQuNC90LTQtdC60YEg0YHQvtGB0YLQvtC40YIg0LjQtyA2INGG0LjRhNGAJyxcclxuICAgICAgICAgIG1heGxlbmd0aDogJ9Cf0L7Rh9GC0L7QstGL0Lkg0LjQvdC00LXQutGBINGB0L7RgdGC0L7QuNGCINC40LcgNiDRhtC40YTRgCcsXHJcbiAgICAgICAgICBkaWdpdHM6ICfQn9C+0YfRgtC+0LLRi9C5INC40L3QtNC10LrRgSDRgdC+0YHRgtC+0LjRgiDQuNC3IDYg0YbQuNGE0YAnLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGFkZEhvdmVyKGVsZW0pIHtcclxuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2luLWhvdmVyJyk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiByZW1vdmVIb3ZlcihlbGVtKSB7XHJcbiAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCdpbi1ob3ZlcicpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gZ29Ub0N1cnJlbmN5KGVsZW0pIHtcclxuICAgIGxldCBudW1iZXJUb0Zvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclRvRm9ybWF0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0b051bWIgPSArbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MO1xyXG4gICAgICBsZXQgZm9ybWF0TnVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScpLmZvcm1hdCh0b051bWIpO1xyXG4gICAgICBudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUwgPSBmb3JtYXROdW07XHJcbiAgICB9XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjaGVja0JveEVuZ2luZShlbGVtKSB7XHJcbiAgICAkKGVsZW0pLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBzZWxlY3RDaGVjayA9ICQodGhpcykucGFyZW50cygnLmNvbnRlbnQtZmlsdGVyJykuZmluZCgnLm51bWItc2VsZWN0IHNwYW4nKSxcclxuICAgICAgICBudW1TZWxlY3RlZCA9ICtzZWxlY3RDaGVjay5odG1sKCk7XHJcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICAgIG51bVNlbGVjdGVkKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG51bVNlbGVjdGVkID4gMCkge1xyXG4gICAgICAgICAgbnVtU2VsZWN0ZWQtLTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbnVtU2VsZWN0ZWQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjaGVjaEJ0bih0aGlzLCBudW1TZWxlY3RlZCk7XHJcbiAgICAgIHNlbGVjdENoZWNrLmh0bWwobnVtU2VsZWN0ZWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBjaGVjaEJ0bihlbGVtLCBhKSB7XHJcbiAgICBsZXQgcGFyQnRuID0gJChlbGVtKS5wYXJlbnRzVW50aWwoJy5jb250ZW50LWZpbHRlcicpLm5leHQoJy5idG4td3JhcHBlcicpLmNoaWxkcmVuKCcuZmlsdGVyLWJ0bicpLFxyXG4gICAgICBmSXRlbSA9ICQoZWxlbSkucGFyZW50KCcuZmlsdGVyLWl0ZW1zJykucGFyZW50c1VudGlsKCcuZmlsdGVyLWl0ZW1zJykucHJldigpO1xyXG4gICAgaWYgKGEgPiAwKSB7XHJcbiAgICAgIHBhckJ0bi5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgIGZJdGVtLmFkZENsYXNzKCdzZWxlY3QnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhckJ0bi5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgIGZJdGVtLnJlbW92ZUNsYXNzKCdzZWxlY3QnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcmVzZXRTZWxlY3QoZWxlbSkge1xyXG4gICAgJChlbGVtKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBib3hJbiA9ICQodGhpcykucGFyZW50cygnLmNvbnRlbnQtZmlsdGVyJykuZmluZCgnLmJveC1jaGVjaycpLFxyXG4gICAgICAgIG51bVNlbGVjdCA9ICQodGhpcykubmV4dCgnLm51bWItc2VsZWN0JykuY2hpbGRyZW4oJ3NwYW4nKSxcclxuICAgICAgICBjb3VudFNlbCA9ICtudW1TZWxlY3QuaHRtbCgpO1xyXG4gICAgICAkKGJveEluKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAgIGF0cmJ0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgJCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKS5maW5kKCdkaXZbZGF0YS1uYW1lPScgKyBhdHJidCArICddJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gICAgICAgICAgJCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgY291bnRTZWwtLTtcclxuICAgICAgICAgIG51bVNlbGVjdC5odG1sKGNvdW50U2VsKTtcclxuICAgICAgICAgIGNoZWNoQnRuKCQodGhpcyksIGNvdW50U2VsKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGxldCB0ZXh0YXJlYUxpbmVIZWlnaHQgPSBwYXJzZUludCgkKFwiLnRleHRhcmVhLXdyYXBwZXIgdGV4dGFyZWFcIikuY3NzKFwibGluZS1oZWlnaHRcIikpO1xyXG4gIGZ1bmN0aW9uIHJOdW1iZXIoZWxlbSkge1xyXG4gICAgcmV0dXJuIFN0cmluZyhlbGVtKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiBcIik7XHJcbiAgfTtcclxuICAoZnVuY3Rpb24gKCQpIHtcclxuICAgICQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmNvbnRlbnQtZmlsdGVyIC5maWx0ZXItaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICB0aGVtZTogXCJteS10aGVtZVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiLm1vYmlsZS1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAubW9iLWNoZWNrLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgdGhlbWU6IFwibXktdGhlbWVcIlxyXG4gICAgICB9KTtcclxuICAgICAgJChcIi5hbGwtbGFuZy1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgIHRoZW1lOiBcIm15LXRoZW1lXCJcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIucG9pbnRzLWxpc3RfX291dHRlclwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICB0aGVtZTogXCJteS10aGVtZVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiLmFjY291bnQtb3JkZXJzX19uYXZfX3Zhciwuc2l6ZS10YWJsZVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICB0aGVtZTogXCJteS10aGVtZVwiLFxyXG4gICAgICAgIGF4aXM6IFwieFwiXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiLm5pY2Utc2VsZWN0LndpZGUgLmxpc3RcIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiLmJhc2tldC1wcmV2aWV3LWNvbnRhaW5lciAuZ29vZHMtaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KShqUXVlcnkpO1xyXG4gIGZ1bmN0aW9uIGNvbWUoZWxlbSkge1xyXG4gICAgdmFyIGRvY1ZpZXdUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxyXG4gICAgICBlbGVtVG9wID0gJChlbGVtKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgIGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgJChlbGVtKS5oZWlnaHQoKTtcclxuXHJcbiAgICByZXR1cm4gKChlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20pICYmIChlbGVtVG9wID49IGRvY1ZpZXdUb3ApKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIHNsaWNlU2VudGVuY2UoZWxlbSwgYWRkQ2xhc3MpIHtcclxuICAgICQoZWxlbSkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLm91dGVySGVpZ2h0KCkgPiAkKHRoaXMpLnBhcmVudCgpLmhlaWdodCgpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhhZGRDbGFzcylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhhZGRDbGFzcykpIHtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoYWRkQ2xhc3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIC8vIGZ1bmN0aW9uIHJlc1ByaWNlKCkge1xyXG4gIC8vICAgaW5zdGFuY2UucmVzZXQoKTtcclxuICAvLyAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAoOTAwIC0gd2l0aFNjcm9sbEJhcigpKSkge1xyXG4gIC8vICAgICAkKCcuanMtaW5wdXQtZnJvbScpLnZhbCgnMCcpO1xyXG4gIC8vICAgICAkKCcuanMtaW5wdXQtdG8nKS52YWwoJzEwMCAwMDAnKTtcclxuICAvLyAgICAgJCgnLmZpbHRlci1oZWFkZXIucmFuZ2UnKS5yZW1vdmVDbGFzcygnc2VsZWN0Jyk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAkKCcubW9iLWlucHV0LWZyb20nKS52YWwoJzAnKTtcclxuICAvLyAgICAgJCgnLm1vYi1pbnB1dC10bycpLnZhbCgnMTAwIDAwMCcpO1xyXG4gIC8vICAgICAkKCcuZmlsdGVyLWhlYWRlci5yYW5nZScpLnJlbW92ZUNsYXNzKCdzZWxlY3QnKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gfTtcclxuICBmdW5jdGlvbiBhZGRGaWx0ZXIoZWxlbSwgX2lkLCBjb250ZW50LCBwYXN0KSB7XHJcbiAgICBpZiAoJChlbGVtKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgcGFzdC5hcHBlbmQoXHJcbiAgICAgICAgJzxkaXYgZGF0YS1uYW1lPScgKyBfaWQgKyAnIGNsYXNzPVwiYWN0aXZlLWl0ZW1cIj4nICtcclxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJuYW1lLWZpbHRlclwiPicgKyBjb250ZW50ICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImNsb3NlLWZpbHRlci13cmFwcGVyXCI+JyArXHJcbiAgICAgICAgJzxzdmcgY2xhc3M9XCJjbG9zZS1maWx0ZXJcIj4nICtcclxuICAgICAgICAnPHVzZSBocmVmPVwiL2xvY2FsL3RlbXBsYXRlcy9tYWluL2Fzc2V0cy9zcHJpdGUvc3ByaXRlLnN2ZyNjbG9zZVwiPjwvdXNlPicgK1xyXG4gICAgICAgICc8L3N2Zz4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvZGl2PicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzdC5maW5kKCdkaXZbZGF0YS1uYW1lPScgKyBfaWQgKyAnXScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZnVuY3Rpb24gaGF2ZUFDaGlsZChlbGVtKSB7XHJcbiAgICBsZXQgcGFyRWxlbSA9ICQoZWxlbSk7XHJcbiAgICBpZiAocGFyRWxlbS5jaGlsZHJlbigpLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIHBhckVsZW0uY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyRWxlbS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZnVuY3Rpb24gd2F0Y2hlckluKGVsZW0pIHtcclxuICAgIGlmIChlbGVtLmNoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICBlbGVtLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH07XHJcbiAgZnVuY3Rpb24gbW9iRmlsdGVyQ2hlY2socGljaywgcHVsbCkge1xyXG4gICAgbGV0IG1vYklkQ2hlY2sgPSAkKHBpY2spLnByb3AoJ2lkJyksXHJcbiAgICAgIHBhc3RQb3MgPSAkKHBpY2spLnBhcmVudHMoJy5tb2ItZmlsdGVyLWl0ZW1zJykuY2hpbGRyZW4oJy5tb2ItZmlsdGVyLWhlYWRlcicpLmNoaWxkcmVuKCcubW9iLWNoZWNrLWhvbGRlcicpLFxyXG4gICAgICBsYXN0Q2hpbGQ7XHJcbiAgICBpZiAoJChwaWNrKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgaWYgKHdhdGNoZXJJbihwYXN0UG9zKSkge1xyXG4gICAgICAgIHBhc3RQb3MucHJlcGVuZCgnPHNwYW4gZGF0YS1uYW1lPScgKyBtb2JJZENoZWNrICsgJz4nICsgcHVsbCArICcsPC9zcGFuPicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhc3RQb3MucHJlcGVuZCgnPHNwYW4gZGF0YS1uYW1lPScgKyBtb2JJZENoZWNrICsgJz4nICsgcHVsbCArICc8L3NwYW4+Jyk7XHJcbiAgICAgIH1cclxuICAgICAgd2F0Y2hlckluKHBhc3RQb3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzdFBvcy5maW5kKCdzcGFuW2RhdGEtbmFtZT0nICsgbW9iSWRDaGVjayArICddJykucmVtb3ZlKCk7XHJcbiAgICAgIHdhdGNoZXJJbihwYXN0UG9zKTtcclxuICAgIH1cclxuICAgIGxhc3RDaGlsZCA9IHBhc3RQb3MuY2hpbGRyZW4oKS5sYXN0KCkuaHRtbCgpO1xyXG4gICAgaWYgKHR5cGVvZiBsYXN0Q2hpbGQgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdENoaWxkID0gbGFzdENoaWxkLnJlcGxhY2UoL1tcXHMuLCVdL2csICcnKTtcclxuICAgICAgcGFzdFBvcy5jaGlsZHJlbigpLmxhc3QoKS5odG1sKGxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBmdW5jdGlvbiBhZGRTaGFkb3coZWxlbSkge1xyXG4gICAgJChlbGVtKS5hZGRDbGFzcygnbW9iLXNpemUtaW5pdCcpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gcmVtb3ZlU2hhZG93KGVsZW0pIHtcclxuICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoJ21vYi1zaXplLWluaXQnKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGlmU2hhZG93KGVsZW0pIHtcclxuICAgIGlmICgkKGVsZW0pLmZpbmQoJ3RhYmxlJykud2lkdGgoKSA+ICQoZWxlbSkucGFyZW50cygnLnBvcHVwX19jb250ZW50Jykub3V0ZXJXaWR0aCgpKSB7XHJcbiAgICAgIGFkZFNoYWRvdyhlbGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbW92ZVNoYWRvdyhlbGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b24oaW5QdXQsIGZvcm0sIGJ0bikge1xyXG4gICAgJChpblB1dCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykuY2hpbGRyZW4oJ2lucHV0JykucHJvcCgnY2hlY2tlZCcpICYmICQodGhpcykuY2hpbGRyZW4oJ2lucHV0JykuaGFzQ2xhc3MoJ2FjY2VwdF9jaGVjaycpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKGZvcm0pLmZpbmQoYnRuKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKGZvcm0pLmZpbmQoYnRuKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gb25seUxldHRlcklucHV0KGludGV4dCkge1xyXG4gICAgbGV0IGppbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW50ZXh0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgamluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgamluW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcclxuICAgICAgLy8gaWYgKCFlLmtleS5tYXRjaCgvW0EtetCQLdGP0IHRkSBdLykpIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vICB9KTtcclxuICAgICAgamluW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9cXGQvZywgXCJcIik7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvWy4qX35gKzvigrQk4oK9J1wiOiUjQCEqP14kLT08PuKElnt9KCl8W1xcXVxcXFxdL2csIFwiXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuICAkKCcuZmVhdHVyZXNfaXRlbXMgLnNlYXJjaCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAoOTAwIC0gd2l0aFNjcm9sbEJhcigpKSkge1xyXG4gICAgICAkKCdoZWFkZXIgLnNlYXJjaC1oZWFkZXItbGluZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9kYWwnKTtcclxuICAgICAgaWYgKCQoJ2JvZHk+ZGl2JykuaGFzQ2xhc3MoJ292ZXJsYXknKSkge1xyXG4gICAgICAgICQoJy5vdmVybGF5JykucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgICAgICQoJy5zZWFyY2gtd3JhcHBlciAuZm9ybSA+IGlucHV0JykuZm9jdXMoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9KTtcclxuICAkKCcuc2VhcmNoLWhlYWRlci1saW5lIHN2Zy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xyXG4gICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICB9KTtcclxuICAkKCcuYnVyZ2VyLW1lbnUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubWVudV9tb2JpbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1lbnVfbW9iaWxlIC5tb2JpbGUtaGVhZGVyLWNvbnRhaW5lciAuY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubWVudV9tb2JpbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm5hdl93cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm5hdl93cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYmlsZS1tZW51LXdyYXBwZXIgLm1lbnUgLm1lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubW9iaWxlLW1lbnUtd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gICQoJy5tb2Jfc3ViX21lbnVfaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcubW9iX3N1Yl9tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZTtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgfSk7XHJcbiAgJCgnLnByb21vX2xpbmUgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsICcwJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICB9KTtcclxuICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsICdhY2NvcmRpb24tYnRuJyk7XHJcbiAgYWRkUmVtb3ZlQ2xhc3MoJ3NlY3Rpb24uaW5mbyAuaW5mby1tZW51LXdyYXBwZXInLCAnYWNjb3JkaW9uJyk7XHJcbiAgYWRkUmVtb3ZlQ2xhc3NfNzY3KCcuZ2FsbC13cmFwcC1tYWluJywgJ2xvYWQnKTtcclxuXHJcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsICdhY2NvcmRpb24tYnRuJyk7XHJcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xyXG4gICAgYWRkUmVtb3ZlQ2xhc3NfNzY3KCcuZ2FsbC13cmFwcC1tYWluJywgJ2xvYWQnKTtcclxuICAgIGlmU2hhZG93KCcucG9wdXAuYWN0aXZlIC5zaXplLXRhYmxlJyk7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gKDc2NyAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgnLmRpc2NycHRpb24tZ29vZHM6bm90KC5jYXRhbG9nLWspIHAnLCAnY3V0LXdvcmQnKTtcclxuICAgICAgc2xpY2VTZW50ZW5jZSgnLmRpc2NycHRpb24tZ29vZHMuY2F0YWxvZy1rIHAnLCAnY2F0YWxvZy1rJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzOm5vdCguY2F0YWxvZy1rKSBwJywgJ2N1dC13b3JkJyk7XHJcbiAgc2xpY2VTZW50ZW5jZSgnLmRpc2NycHRpb24tZ29vZHMuY2F0YWxvZy1rIHAnLCAnY2F0YWxvZy1rJyk7XHJcbiAgbWVudUFjY29yZGlvbk1vdmVyKCk7XHJcbiAgYWNjRW5naW5lKCcucGF5bWVudC1pdGVtcycpO1xyXG4gIHZhbGlkYXRvckZvcm0oXCIjc2lnbi1pblwiKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI3Jlc2V0LXBhc3NcIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNyZWdpc3RyYXRpb24tZm9ybVwiKTtcclxuICB2YWxpZGF0b3JGb3JtKFwiI2FjY291bnQtcHJlcnNvbmFsLWRhdGFcIik7XHJcbiAgdmFsaWRhdG9yRm9ybShcIiNmYXFGb3JtXCIpO1xyXG4gIHZhbGlkYXRvckZvcm0oXCIjY2hlY2tvdXRGb3JtXCIpO1xyXG4gIHZhbGlkYXRvckZvcm0oXCIjY29udGFjdHNfZm9ybVwiKTtcclxuICAkKCcuY2xvc2UtcG9wdXAnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmZlYXR1cmVzX2l0ZW1zIC5hdXRvcml6YXRpb24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1zaWduLWluJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbiAgJCgnI3BvcHVwLXNpZ24taW4gLmxpbmtfd3JhcHBlciBhJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsb3NlUG9wVXAoJy5wb3B1cC5hY3RpdmUnKTtcclxuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXJlc2V0LXBhc3MnKTtcclxuICB9KTtcclxuICAkKCcuY2hvc2UtcG9pbnQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb3BlblBvcFVwKCcjcG9wdXAtZGVsaXZlcnktcG9pbnQnKTtcclxuICB9KTtcclxuICAkKCcubGluay10b19fdGFibGUtc2l6ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXRhYmxlLXNpemUnKTtcclxuICAgIGlmU2hhZG93KCcucG9wdXAuYWN0aXZlIC5zaXplLXRhYmxlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5sYW5nLXdyYXBwZXIgLnNlbGVjdC1sYW5nJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkubGFzdCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaC1saW5lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5hZGRDbGFzcygnZW50ZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkKCcubWVudV9tb2JpbGUgLnNlYXJjaCcpLmhhc0NsYXNzKCdlbnRlcicpKSB7XHJcbiAgICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlbnRlcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIi5zdWJfbWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIubWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcyk7XHJcbiAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVtb3ZlSG92ZXIodGhpcyk7XHJcbiAgfSk7XHJcbiAgJChcIi5mZWF0dXJlc19pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZW1vdmVIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIGxldCBoZWlnaHRIZWFkZXIgPSAkKCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAkKHdpbmRvdykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoJ2hlYWRlcicpLmhlaWdodCgpIDwgaGVpZ2h0SGVhZGVyKSB7XHJcbiAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmcnLCAkKCdoZWFkZXInKS5oZWlnaHQoKSArICdweCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGdvVG9DdXJyZW5jeSgnLnByaWNlJyk7XHJcbiAgZ29Ub0N1cnJlbmN5KCcucHJpY2VfbmV3Jyk7XHJcbiAgZ29Ub0N1cnJlbmN5KCcucHJpY2Vfb2xkJyk7XHJcbiAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5sb2NrLXBvaW50ZXInKS5yZW1vdmUoKTtcclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ25vLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKFwiPGRpdiBjbGFzcz0nbG9jay1wb2ludGVyJz48L2Rpdj5cIikuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX193cmFwcGVyJykpIHtcclxuICAgICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrLXBvaW50ZXInKSkge1xyXG4gICAgICAkKCcuZmlsdGVyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9jay1wb2ludGVyJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKSB7XHJcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuZmVhdHVyZXNfaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcclxuICAgICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcubW9yZS1sZXNzLWZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbigpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2snKTtcclxuICByZXNldFNlbGVjdCgnLnJlc2V0LXNlbGVjdCcpO1xyXG4gICQoJy5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5Qb3BVcCgkKHRoaXMpLm5leHQoKSk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vZGFsLWZpdGVyIC50aXRsZS1maWx0ZXIgc3ZnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY2xvc2VQb3BVcCgnLm1vZGFsLWZpdGVyJyk7XHJcbiAgfSk7XHJcbiAgJCgnLm1vYi1maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoJy5tb2ItZmlsdGVyLWl0ZW1zJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb3VudC0tO1xyXG4gICAgfVxyXG4gICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKVxyXG4gICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAkKCcubW9kYWwtcmVzZXQnKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICQoJy5tb2RhbC1zdWJtaXQnKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAgICQoJy5tb2RhbC1zdWJtaXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG1vYkNoZWNrID0gJCh0aGlzKS5uZXh0KCkuaHRtbCgpLFxyXG4gICAgICBtb2JDaGVja0NvbG9yID0gJCh0aGlzKS5uZXh0KCkuY2hpbGRyZW4oJy5jb2xvci1uYW1lJykuaHRtbCgpO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2NvbG9yJykpIHtcclxuICAgICAgbW9iRmlsdGVyQ2hlY2sodGhpcywgbW9iQ2hlY2tDb2xvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb2JGaWx0ZXJDaGVjayh0aGlzLCBtb2JDaGVjayk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLm1vZGFsLXJlc2V0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICQoJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJy5tb2ItY2hlY2staG9sZGVyJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcclxuICAgIGNvdW50ID0gMDtcclxuICAgICQoJy5tb2RhbC1yZXNldCBzcGFuJykuaHRtbCgnKCcgKyBjb3VudCArICcpJyk7XHJcbiAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICAkKCcubW9kYWwtc3VibWl0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgLy8gcmVzUHJpY2UoKTtcclxuICAgIHdhdGNoZXJJbigkKCcubW9iLWNoZWNrLWhvbGRlcicpKVxyXG4gIH0pO1xyXG4gIGlmICgkKCcjYnRuLXdhdGNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGNvbWUoJyNidG4td2F0Y2gnKSkge1xyXG4gICAgICAgICQoJy5wcmV2aWV3LWhlYWRlci1nb29kcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcucHJldmlldy1oZWFkZXItZ29vZHMnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IG1vYkdhbGxTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbC13cmFwcC1tYWluJyksXHJcbiAgICBjbG9zZUdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbC1jbG9zZS1idG4nKTtcclxuICBpZiAobW9iR2FsbFNsaWRlcikge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWxsLXdyYXBwLW1haW4nKSkge1xyXG4gICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwnKVxyXG4gICAgICB9IGVsc2UgeyByZXR1cm4gfTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtb2JHYWxsU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBjbGlja1RvU2xpZGUoZWxlbSkge1xyXG4gICAgICBsZXQgZWxlbU51bWIgPSBlbGVtLnNsaWNlKC0xKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1vYkdhbGxTbGlkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgICAgICBzd2lwZXJHb29kcy5zbGlkZVRvKGVsZW1OdW1iLCAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2xpY2tUb1NsaWRlKCcjc2xpZGUtMScpO1xyXG4gICAgJCgnW2lkKj1cInNsaWRlLVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgY3VyclNsaWRlID0gJyMnICsgJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICBjbGlja1RvU2xpZGUoY3VyclNsaWRlKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7IH07XHJcbiAgLy8gbGV0IGZhdkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdCcpO1xyXG4gIC8vIGxldCBjb3VudF9mYXYxID0gMDtcclxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGZhdkljb24ubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgIGZhdkljb25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0Jyk7XHJcbiAgLy8gICAgIGxldCBycnR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXQuc2VsZWN0Jyk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJydHQubGVuZ3RoKVxyXG4gIC8vICAgICBpZiAocnJ0dC5sZW5ndGggPT0gMCkge1xyXG5cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuICAkKCcuc2l6ZS1ob2xkZXIgLnNpemUtaXRlbXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc2l6ZS1ob2xkZXIgLnNpemUtaXRlbXMnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY3VycmVudCcpO1xyXG4gIH0pO1xyXG4gIC8vICQoJy5hZGQtdG8tZmF2b3JpdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICQoJy5hZGQtdG8tZmF2b3JpdCcpLnRvZ2dsZUNsYXNzKCdzZWxlY3QnKTtcclxuICAvLyB9KTtcclxuICAkKCcuYWRkX3RvX2Zhdm9yaXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGJ1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgbGV0IHByb2RfaWQgPSBidXR0b24uZGF0YSgncHJvZHVjdF9pZCcpXHJcbiAgICBsZXQgbmVlZF9kZWxldGUgPSAoYnV0dG9uLmhhc0NsYXNzKCdzZWxlY3QnKSkgPyAxIDogMDtcclxuICAgIGxldCBmYXZfaWNvbiA9ICQoJy5mZWF0dXJlc19pdGVtcyAuZmF2b3JpdCAuaWNvbl9xdWFudGl0eScpO1xyXG4gICAgbGV0IHBhcnNlVG9JbiA9IHBhcnNlSW50KGZhdl9pY29uLmh0bWwoKSk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL2xvY2FsL2FqYXgvZmF2b3JpdGVzLnBocCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmF2b3JpdGU6IHByb2RfaWQsXHJcbiAgICAgICAgZGVsZXRlOiBuZWVkX2RlbGV0ZVxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGlmIChuZWVkX2RlbGV0ZSkge1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICBwYXJzZVRvSW4tLTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlVG9JbiA9PSAwIHx8IHBhcnNlVG9JbiA8IDApIHtcclxuICAgICAgICAgICAgICBmYXZfaWNvbi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgcGFyc2VUb0luID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmYXZfaWNvbi5odG1sKHBhcnNlVG9Jbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkQ2xhc3MoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICBwYXJzZVRvSW4rKztcclxuICAgICAgICAgICAgZmF2X2ljb24uaHRtbChwYXJzZVRvSW4pO1xyXG4gICAgICAgICAgICBpZiAoIXBhcnNlVG9JbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZmF2X2ljb24uYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gICQoJy5kZWNyZWFzZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgb2xkID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKTtcclxuICAgIGlmIChvbGQgPiAxKSB7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKHBhcnNlSW50KG9sZCkgLSAxKTtcclxuICAgIH1cclxuICB9KVxyXG4gICQoJy5pbmNyZWFzZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgb2xkID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKTtcclxuICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKHBhcnNlSW50KG9sZCkgKyAxKTtcclxuICB9KVxyXG4gICQoJy5wb2ludHMtbmF2IGEnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLnBvaW50cy1uYXYgYS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgJCgnLnBvaW50cy12aWV3IC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcuJyArICQodGhpcykuYXR0cignZGF0YS1pZCcpKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSlcclxuICAkKCcucG9pbnRzLWxpc3QgLnBvaW50JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJy5wb2ludHMtbGlzdCAucG9pbnQuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuICB9KTtcclxuICAkKCdzZWxlY3QnKS5uaWNlU2VsZWN0KCk7XHJcbiAgJCgnLmZpbHRlci1pdGVtcyA+IC5ib3gtY2hlY2s6bm90KC5jb2xvciknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY29udENoZWNrID0gJCh0aGlzKS5uZXh0KCkuaHRtbCgpLFxyXG4gICAgICBwaWNJZCA9ICQodGhpcykucHJvcCgnaWQnKTtcclxuICAgIHB1dFRoaXMgPSAkKHRoaXMpLnBhcmVudHMoJy5maWx0ZXItY29udGluZXInKS5jaGlsZHJlbignLmZpbHRlci1hY3RpdmUtd3JhcHBlcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gICAgYWRkRmlsdGVyKHRoaXMsIHBpY0lkLCBjb250Q2hlY2ssIHB1dFRoaXMpO1xyXG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICB9KTtcclxuICAkKCcuZmlsdGVyLWl0ZW1zID4gLmJveC1jaGVjay5jb2xvcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBjb250Q29sb3IgPSAkKHRoaXMpLm5leHQoKS5jaGlsZHJlbignLmNvbG9yLW5hbWUnKS5odG1sKCksXHJcbiAgICAgIGNvbG9ySWQgPSAkKHRoaXMpLnByb3AoJ2lkJyk7XHJcbiAgICBwdXRUaGlzQ29sID0gJCh0aGlzKS5wYXJlbnRzKCcuZmlsdGVyLWNvbnRpbmVyJykuY2hpbGRyZW4oJy5maWx0ZXItYWN0aXZlLXdyYXBwZXInKS5jaGlsZHJlbignLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICAgIGFkZEZpbHRlcih0aGlzLCBjb2xvcklkLCBjb250Q29sb3IsIHB1dFRoaXNDb2wpO1xyXG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICB9KTtcclxuICAkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpLm9uKCdjbGljaycsICcuY2xvc2UtZmlsdGVyLXdyYXBwZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGNQYXIgPSAkKHRoaXMpLnBhcmVudHMoJy5hY3RpdmUtaXRlbScpLFxyXG4gICAgICB3YXlDaGVjayA9IGNQYXIuYXR0cignZGF0YS1uYW1lJyksXHJcbiAgICAgIGZpbHRlcldyYXAgPSAkKCcuZmlsdGVyLWNvbnRpbmVyJyksXHJcbiAgICAgIGNsaWNrSW4gPSBmaWx0ZXJXcmFwLmZpbmQoJ2lucHV0W2lkPScgKyB3YXlDaGVjayArICddJyk7XHJcbiAgICBjbGlja0luLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICBjUGFyLnJlbW92ZSgpO1xyXG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcclxuICB9KTtcclxuICAkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpLm9uKCdjbGljaycsICcuZmlsdGVyLWFjdGl2ZS1yZXNldC1idG4nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGl0ZW1SZW0gPSAkKCcuYWN0aXZlLWl0ZW0nKSxcclxuICAgICAgZmlsdGVyQ29udCA9ICQoJy5maWx0ZXItY29udGluZXInKTtcclxuICAgIGZpbHRlckNvbnQuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgaXRlbVJlbS5yZW1vdmUoKTtcclxuICAgIC8vIHJlc1ByaWNlKCk7XHJcbiAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xyXG4gIH0pO1xyXG4gICQoXCIud3JhcC1jYWxlbmRhclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaGFzRm9jdXMgPSAkKHRoaXMpLnByZXYoKS5pcygnOmZvY3VzJyk7XHJcbiAgICBjb25zb2xlLmxvZyhoYXNGb2N1cyk7XHJcbiAgICBpZiAoaGFzRm9jdXMpIHtcclxuICAgICAgJCh0aGlzKS5wcmV2KCkuYmx1cigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wcmV2KCkuZm9jdXMoKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcubmV3LXBhc3MnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkgIT0gMCkge1xyXG4gICAgICAkKHRoaXMpLmF0dHIoJ25hbWUnLCAncHN3b3JkJyk7XHJcbiAgICAgICQodGhpcykuYXR0cignaWQnLCAncGVyc29uLXBhc3MnKTtcclxuICAgICAgJCgnLmNoZWNrLXBhc3MnKS5hdHRyKCduYW1lJywgJ3Bzd29yZF9jb25maXJtJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ25hbWUnKTtcclxuICAgICAgJCgnLmNoZWNrLXBhc3MnKS5yZW1vdmVBdHRyKCduYW1lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLnZhbGlkLXRlbCcpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAwKSB7XHJcbiAgICAgICQodGhpcykuYXR0cignbmFtZScsICdwaG9uZV9ydScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCduYW1lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLmNvdW50cmllcyAuc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuY291bnRyaWVzIC5zaG93LWFsbCcpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucm93JykudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xyXG4gIH0pO1xyXG4gIGRpc2FibGVCdXR0b24oXCIuY2hlY2tib3gtbGFiZWxcIiwgXCIuZm9ybVwiLCBcImlucHV0LmFjY2VwdF9idG5cIik7XHJcbiAgZGlzYWJsZUJ1dHRvbihcIi5jaGVja2JveC1sYWJlbFwiLCBcIiNyZWdpc3RyYXRpb24tZm9ybVwiLCBcIi5mb3JtLWFjdGlvbnMgLnN1Ym1pdC1idG5cIik7XHJcbiAgJCgnLnBob25lX21hc2snKS5tYXNrKCcrMCAoMDAwKSAwMDAtMDAtMDAnKTtcclxuICAkKCcuemlwX21hc2snKS5tYXNrKCcwMDAwMDAnKTtcclxuICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAkKCdidXR0b24nKS5hZGRDbGFzcygnbW9iX2NlbnRlcicpXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICgkKCdidXR0b24nKS5oYXNDbGFzcygnbW9iX2NlbnRlcicpKSB7XHJcbiAgICAgICQoJ2J1dHRvbicpLnJlbW92ZUNsYXNzKCdtb2JfY2VudGVyJylcclxuICAgIH07XHJcbiAgfTtcclxuICAkKCcjaW5wdXRfZGF0ZScpLmRhdGVwaWNrZXIoe1xyXG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gIH0pO1xyXG4gIG9ubHlMZXR0ZXJJbnB1dCgnLm9ubHlfbGV0dGVyJyk7XHJcbiAgZnVuY3Rpb24gZGVsRigpIHtcclxuICAgICQoJy5kZWxpdmVyeV93cmFwcCcpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpXHJcbiAgICAkKCcuZGVsaXZlcnlfd3JhcHAnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGRlbEluID0gJCh0aGlzKTtcclxuICAgICAgJCgnLmRlbGl2ZXJ5LXJhZGlvIC5yYWRpby13cmFwIGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cignZGF0YS1uYW1lJykgPT0gZGVsSW4uYXR0cignZGF0YS1uYW1lJykgJiYgJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICQoZGVsSW4pLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlbEYoKTtcclxuICAkKCcuZGVsaXZlcnktcmFkaW8gLnJhZGlvLXdyYXAgaW5wdXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBkZWxGKCk7XHJcbiAgfSk7XHJcbiAgaWYgKCQoJy5ncmlkLXJvdy10d28nKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAkKCcuZ3JpZC1yb3ctdHdvJykuYWRkQ2xhc3MoJ21vZGVfb25lJyk7XHJcbiAgfSBpZiAoJCgnLmdyaWQtcm93LXR3bycpLmNoaWxkcmVuKCkubGVuZ3RoID09IDMpIHtcclxuICAgICQoJy5ncmlkLXJvdy10d28nKS5hZGRDbGFzcygnbW9kZV90aHJlZScpO1xyXG4gIH07XHJcbiAgJCgnLmFjY2VwdGFuY2UgaW5wdXRbbmFtZT1cImFjY2VwdFwiXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoISQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICQoJy5jaGVja291dC10b3RhbCAuYnRuJykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmNoZWNrb3V0LXRvdGFsIC5idG4nKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gZmlsdGVyQ29udHJvbCgpIHtcclxuICAgIGxldCBkZXNja0ZpbHRlciA9ICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyJyksXHJcbiAgICAgIG1vcmVMZXNzID0gJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLm1vcmUtbGVzcy1maWx0ZXInKSxcclxuICAgICAgd3JwRmlsdGVyID0gJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1pdGVtJyksXHJcbiAgICAgIHN0eWxlSGlkZSA9IHtcclxuICAgICAgICBvcGFjaXR5OiBcIjBcIixcclxuICAgICAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0eWxlVmlzID0ge1xyXG4gICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiXHJcbiAgICAgIH1cclxuICAgICAgaXRlbUZpbHRlciA9ICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaXRlbXMnKTtcclxuXHJcbiAgICBpZiAod3JwRmlsdGVyLm91dGVySGVpZ2h0KCkgPT0gaXRlbUZpbHRlci5vdXRlckhlaWdodCh0cnVlKSkge1xyXG4gICAgICBkZXNja0ZpbHRlci5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICBtb3JlTGVzcy5jc3Moc3R5bGVIaWRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc2NrRmlsdGVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgIG1vcmVMZXNzLmNzcyhzdHlsZVZpcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBmaWx0ZXJDb250cm9sKCk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNXFjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhjSWtSUFRVTnZiblJsYm5STWIyRmtaV1JjSWl3Z2FXNXBkQ2s3WEhKY2JtWjFibU4wYVc5dUlHbHVhWFFvS1NCN1hISmNiaUFnSUNBdktsTnNhV1JsY2lCemQybHdaWElnYUdWaFpHVnlJR0poYm01bGNpQnpkR0Z5ZENvdlhISmNiaUFnSUNCc1pYUWdjM2RwY0dWeVFtRnVibVZ5SUQwZ2JtVjNJRk4zYVhCbGNpZ25Mbk5zYVdSbGNsOWpiMjUwWVdsdVpYSXVjM2RwY0dWeUxXTnZiblJoYVc1bGNpY3NJSHRjY2x4dUlDQWdJQ0FnYzNCaFkyVkNaWFIzWldWdU9pQXpNQ3hjY2x4dUlDQWdJQ0FnYkc5dmNEb2dkSEoxWlN4Y2NseHVJQ0FnSUNBZ1lYVjBiM0JzWVhrNklIdGNjbHh1SUNBZ0lDQWdJQ0JrWld4aGVUb2dNelV3TUN4Y2NseHVJQ0FnSUNBZ0lDQmthWE5oWW14bFQyNUpiblJsY21GamRHbHZiam9nWm1Gc2MyVXNYSEpjYmlBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUhCaFoybHVZWFJwYjI0NklIdGNjbHh1SUNBZ0lDQWdJQ0JsYkRvZ0p5NXpkMmx3WlhJdGNHRm5hVzVoZEdsdmJpY3NYSEpjYmlBZ0lDQWdJQ0FnSUNCamJHbGphMkZpYkdVNklIUnlkV1VzSUZ4eVhHNGdJQ0FnSUNCOUxGeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ0lDQXZLbE5zYVdSbGNpQnpkMmx3WlhJZ2FHVmhaR1Z5SUdKaGJtNWxjaUJsYm1RcUwxeHlYRzVjY2x4dUlDQWdJQzhxVTJ4cFpHVnlJSE4zYVhCbGNpQndjbTlrTFhOc2FXUmxjaUJ6ZEdGeWRDb3ZYSEpjYmlBZ0lDQnNaWFFnYzNkcGNHVnlVSEp2WkNBOUlHNWxkeUJUZDJsd1pYSW9KeTV3Y205a0xYTnNhV1JsY2kxamIyNTBZV2x1WlhJdWMzZHBjR1Z5TFdOdmJuUmhhVzVsY2ljc0lIdGNjbHh1SUNBZ0lDQWdjM0JoWTJWQ1pYUjNaV1Z1T2lBeE5peGNjbHh1SUNBZ0lDQWdjMnhwWkdWelVHVnlWbWxsZHpvZ05TeGNjbHh1SUNBZ0lDQWdjMnhwWkdWelVHVnlSM0p2ZFhBNklERXNYSEpjYmlBZ0lDQWdJQzh2SUdkeVlXSkRkWEp6YjNJNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUc1aGRtbG5ZWFJwYjI0NklIdGNjbHh1SUNBZ0lDQWdJQ0J1WlhoMFJXdzZJQ2N1YzNkcGNHVnlMV0oxZEhSdmJpMXVaWGgwSnl4Y2NseHVJQ0FnSUNBZ0lDQndjbVYyUld3NklDY3VjM2RwY0dWeUxXSjFkSFJ2Ymkxd2NtVjJKeXhjY2x4dUlDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ1luSmxZV3R3YjJsdWRITTZJSHRjY2x4dUlDQWdJQ0FnSUNBd09pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2MzQmhZMlZDWlhSM1pXVnVPaUEwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJSE5zYVdSbGMxQmxjbFpwWlhjNklERXNYSEpjYmlBZ0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdNekF3T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzNCaFkyVkNaWFIzWldWdU9pQTBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lITnNhV1JsYzFCbGNsWnBaWGM2SURJdU1EZ3NYSEpjYmlBZ0lDQWdJQ0FnSUgwc1hISmNibHgwWEhSY2RDQWdJRE0zTlRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOd1lXTmxRbVYwZDJWbGJqb2dOQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQnpiR2xrWlhOUVpYSldhV1YzT2lBeUxqQTRMRnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdJRFE0TURvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOc2FXUmxjMUJsY2xacFpYYzZJREl1Tml4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0J6Y0dGalpVSmxkSGRsWlc0NklEUXNYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQWdOakF3T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzJ4cFpHVnpVR1Z5Vm1sbGR6b2dNaTQ0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJSE53WVdObFFtVjBkMlZsYmpvZ05DeGNjbHh1SUNBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQWdOelk0T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzJ4cFpHVnpVR1Z5Vm1sbGR6b2dOQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQnpjR0ZqWlVKbGRIZGxaVzQ2SURFd0xGeHlYRzRnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lERXdNalE2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJSE5zYVdSbGMxQmxjbFpwWlhjNklEVXNYSEpjYmx4MFhIUmNkQ0FnSUgwc1hISmNibHgwWEhSY2RDQWdJREV6TmpZNklIdGNjbHh1WEhSY2RGeDBJQ0FnWEhSemJHbGtaWE5RWlhKV2FXVjNPaUExTEZ4eVhHNWNkRngwWEhRZ0lDQjlMRnh5WEc1Y2RGeDBJQ0I5TEZ4eVhHNGdJQ0FnZlNrN1hISmNiaUFnTHlwVGJHbGtaWElnYzNkcGNHVnlJSEJ5YjJRdGMyeHBaR1Z5SUdWdVpDb3ZYSEpjYmlBZ0x5cFRiR2xrWlhJZ2MzZHBjR1Z5SUdkdmIyUnpMV05oY21RZ2MzUmhjblFxTDF4eVhHNGdJR3hsZENCemQybHdaWEpIYjI5a2N5QTlJRzVsZHlCVGQybHdaWElvSnk1bllXeHNaWEo1TFcxdllpMWpiMjUwWVdsdVpYSXVjM2RwY0dWeUxXTnZiblJoYVc1bGNpY3NJSHRjY2x4dUlDQWdJSE53WVdObFFtVjBkMlZsYmpvZ016QXNYSEpjYmlBZ0lDQnNiMjl3T2lCMGNuVmxMRnh5WEc0Z0lDQWdZMlZ1ZEdWeVpXUlRiR2xrWlhNNklIUnlkV1VzWEhKY2JpQWdJQ0JoZFhSdmNHeGhlVG9nZTF4eVhHNGdJQ0FnSUNCa1pXeGhlVG9nTXpVd01DeGNjbHh1SUNBZ0lDQWdaR2x6WVdKc1pVOXVTVzUwWlhKaFkzUnBiMjQ2SUdaaGJITmxMRnh5WEc0Z0lDQWdmU3hjY2x4dUlDQWdJRzVoZG1sbllYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQnVaWGgwUld3NklDY3VjM2RwY0dWeUxXSjFkSFJ2YmkxdVpYaDBKeXhjY2x4dUlDQWdJQ0FnSUNCd2NtVjJSV3c2SUNjdWMzZHBjR1Z5TFdKMWRIUnZiaTF3Y21WMkp5eGNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQndZV2RwYm1GMGFXOXVPaUI3WEhKY2JpQWdJQ0FnSUdWc09pQW5MbWR2YjJSekxYQmhaMmx1WVhScGIyNG5MRnh5WEc0Z0lDQWdJQ0FnSUdOc2FXTnJZV0pzWlRvZ2RISjFaU3dnWEhKY2JpQWdJQ0I5TEZ4eVhHNGdJSDBwTzF4eVhHNGdJQzhxVTJ4cFpHVnlJSE4zYVhCbGNpQm5iMjlrY3kxallYSmtJR1Z1WkNvdlhISmNiaUFnWm5WdVkzUnBiMjRnYldWdWRVRmpZMjl5WkdsdmJrMXZkbVZ5S0NrZ2UxeHlYRzRnSUNBZ2JHVjBJR0ZqWXlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1hDSXVZV05qYjNKa2FXOXVMV0owYmx3aUtUdGNjbHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV05qTG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJR0ZqWTF0cFhTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lZMnhwWTJ0Y0lpd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2hjSW1GamRHbDJaVndpS1R0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnY0dGdVpXd2dQU0IwYUdsekxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp6dGNjbHh1SUNBZ0lDQWdJQ0FnYVdZZ0tIQmhibVZzTG5OMGVXeGxMbTFoZUVobGFXZG9kQ1ltY0dGdVpXd3VZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2RoWTJOdmNtUnBiMjRuS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUhCaGJtVnNMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJRzUxYkd3N1hISmNiaUFnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2NHRnVaV3d1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnY0dGdVpXd3VjMk55YjJ4c1NHVnBaMmgwSUNzZ1hDSndlRndpTzF4eVhHNGdJQ0FnSUNBZ0lDQjlJRnh5WEc0Z0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOU95QmNjbHh1SUNCOU8xeHlYRzRnSUdaMWJtTjBhVzl1SUdGalkwVnVaMmx1WlNod2FXTnJLU0I3WEhKY2JpQWdJQ0JzWlhRZ1lXTmpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2h3YVdOcktUdGNjbHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV05qTG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJR0ZqWTF0cFhTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lZMnhwWTJ0Y0lpd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2hjSW1GamRHbDJaVndpS1R0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnY0dGdVpXd2dQU0IwYUdsekxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp6dGNjbHh1SUNBZ0lDQWdJQ0FnYVdZZ0tIQmhibVZzTG5OMGVXeGxMbTFoZUVobGFXZG9kQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSEJoYm1Wc0xuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnY0dGdVpXd3VjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdjR0Z1Wld3dWMyTnliMnhzU0dWcFoyaDBJQ3NnWENKd2VGd2lPMXh5WEc0Z0lDQWdJQ0FnSUNCOUlGeHlYRzRnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5T3lCY2NseHVJQ0I5TzF4eVhHNGdJR1oxYm1OMGFXOXVJR0ZrWkZKbGJXOTJaVU5zWVhOektHVnNaVzBzSUdGa1pDa2dlMXh5WEc0Z0lDQWdhV1lnS0NRb2QybHVaRzkzS1M1M2FXUjBhQ2dwSUR3OUlEa3dNQ2tnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG1Ga1pFTnNZWE56S0dGa1pDazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuSmxiVzkyWlVOc1lYTnpLR0ZrWkNrN1hISmNiaUFnSUNCOU8xeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnWVdSa1VtVnRiM1psUTJ4aGMzTmZOelkzS0dWc1pXMHNJR0ZrWkNrZ2UxeHlYRzRnSUNBZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRDQ5SURjMk55a2dlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbUZrWkVOc1lYTnpLR0ZrWkNrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5KbGJXOTJaVU5zWVhOektHRmtaQ2s3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJSDA3WEhKY2JpQWdYSEpjYmlBZ1puVnVZM1JwYjI0Z2IzQmxibEJ2Y0ZWd0tHVnNaVzBwSUh0Y2NseHVJQ0FnSUNRb1pXeGxiU2t1WVdSa1EyeGhjM01vSjJGamRHbDJaU2NwT3lBZ1hISmNiaUFnSUNBa0tDZGliMlI1SnlrdVlXUmtRMnhoYzNNb0oyMXZaR0ZzSnlrN1hISmNiaUFnZlR0Y2NseHVJQ0JtZFc1amRHbHZiaUJqYkc5elpWQnZjRlZ3S0dWc1pXMHBJSHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwT3lBZ1hISmNiaUFnSUNBa0tDZGliMlI1SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjF2WkdGc0p5azdYSEpjYmlBZ2ZUdGNjbHh1SUNCcVVYVmxjbmt1WlhoMFpXNWtLR3BSZFdWeWVTNTJZV3hwWkdGMGIzSXViV1Z6YzJGblpYTXNJSHRjY2x4dUlDQWdJSEpsY1hWcGNtVmtPaUJjSXRDZjBMN1F1OUMxSU5HUDBMTFF1OUdQMExYUmd0R0IwWThnMEw3UXNkR1AwTGZRc05HQzBMWFF1OUdNMEwzUmk5QzhYQ0lzWEhKY2JpQWdJQ0J5WlcxdmRHVTZJRndpMEovUXZ0QzcwTFVnMFkvUXN0QzcwWS9RdGRHQzBZSFJqeURRdnRDeDBZL1F0OUN3MFlMUXRkQzcwWXpRdmRHTDBMeGNJaXhjY2x4dUlDQWdJR1Z0WVdsc09pQmNJdENTMExMUXRkQzAwTGpSZ3RDMUlOQzYwTDdSZ05HQTBMWFF1dEdDMEwzUmk5QzVJTkdOMEx2UXRkQzYwWUxSZ05DKzBMM1F2ZEdMMExrZzBMRFF0TkdBMExYUmdWd2lMRnh5WEc0Z0lIMHBPMXh5WEc0Z0lDUXVkbUZzYVdSaGRHOXlMbUZrWkUxbGRHaHZaQ2hjSWtWTlFVbE1YQ0lzSUdaMWJtTjBhVzl1S0haaGJIVmxMQ0JsYkdWdFpXNTBLU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXdkR2x2Ym1Gc0tHVnNaVzFsYm5RcElIeDhJQzllVzJFdGVrRXRXakF0T1M1ZkxWMHJRRnRoTFhwQkxWb3dMVGt0WFN0Y1hDNWJZUzE2UVMxYUxsMTdNaXcxZlNRdmFTNTBaWE4wS0haaGJIVmxLVHRjY2x4dUlDQjlMQ0JjSXRDUzBMTFF0ZEMwMExqUmd0QzFJTkM2MEw3UmdOR0EwTFhRdXRHQzBMM1JpOUM1SU5HTjBMdlF0ZEM2MFlMUmdOQyswTDNRdmRHTDBMa2cwTERRdE5HQTBMWFJnVndpS1R0Y2NseHVJQ0JtZFc1amRHbHZiaUIyWVd4cFpHRjBiM0pHYjNKdEtHVnNaVzBwSUh0Y2NseHVJQ0FnSUNRb1pXeGxiU2t1ZG1Gc2FXUmhkR1VvZTF4eVhHNGdJQ0FnSUNCeWRXeGxjem9nZTF4eVhHNGdJQ0FnSUNBZ0lIQnpkMjl5WkRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnY21WeGRXbHlaV1E2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNCdGFXNXNaVzVuZEdnNklEWXNYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQmxiV0ZwYkY5dU9sd2ljbVZ4ZFdseVpXUWdSVTFCU1V4Y0lpeGNjbHh1SUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnYldWemMyRm5aWE02SUh0Y2NseHVJQ0FnSUNBZ0lDQndjM2R2Y21RNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUcxcGJteGxibWQwYURvZ0o5Q2MwTGpRdmRDNDBMelFzTkM3MFl6UXZkQ3cwWThnMExUUXU5QzQwTDNRc0NEUXY5Q3cwWURRdnRDNzBZOGdOaURSZ2RDNDBMelFzdEMrMEx2UXZ0Q3lKMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lIMDdYSEpjYmlBZ1puVnVZM1JwYjI0Z1lXUmtTRzkyWlhJb1pXeGxiU2tnZXlCY2NseHVJQ0FnSUNRb1pXeGxiU2t1WVdSa1EyeGhjM01vSjJsdUxXaHZkbVZ5SnlrN0lGeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnY21WdGIzWmxTRzkyWlhJb1pXeGxiU2tnZXlCY2NseHVJQ0FnSUNRb1pXeGxiU2t1Y21WdGIzWmxRMnhoYzNNb0oybHVMV2h2ZG1WeUp5azdJRnh5WEc0Z0lIMDdYSEpjYmlBZ1puVnVZM1JwYjI0Z1oyOVViME4xY25KbGJtTjVLR1ZzWlcwcElIdGNjbHh1SUNBZ0lHeGxkQ0J1ZFcxaVpYSlViMFp2Y20xaGRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29aV3hsYlNrN1hISmNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiV0psY2xSdlJtOXliV0YwTG14bGJtZDBhRHNnYVNzcklDa2dlMXh5WEc0Z0lDQWdJQ0FnYkdWMElIUnZUblZ0WWlBOUlDdHVkVzFpWlhKVWIwWnZjbTFoZEZ0cFhTNXBibTVsY2toVVRVdzdYSEpjYmlBZ0lDQWdJQ0JzWlhRZ1ptOXliV0YwVG5WdElEMGdibVYzSUVsdWRHd3VUblZ0WW1WeVJtOXliV0YwS0NkeWRTMVNWU2NzSUhzZ2MzUjViR1U2SUNkamRYSnlaVzVqZVNjc0lHTjFjbkpsYm1ONU9pQW5VbFZDSnl3Z2JXbHVhVzExYlVaeVlXTjBhVzl1UkdsbmFYUnpPaUF3SUgwcExtWnZjbTFoZENoMGIwNTFiV0lwTzF4eVhHNGdJQ0FnSUNBZ2JuVnRZbVZ5Vkc5R2IzSnRZWFJiYVYwdWFXNXVaWEpJVkUxTUlEMGdabTl5YldGMFRuVnRPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMDdYSEpjYmlBZ1hISmNiaUFnWm5WdVkzUnBiMjRnWTJobFkydENiM2hGYm1kcGJtVW9aV3hsYlNrZ2UxeHlYRzRnSUNBZ2JHVjBJR052ZFc1MElEMGdNRHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VZMmhoYm1kbEtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnYVdZZ0tDUW9kR2hwY3lrdWNISnZjQ2duWTJobFkydGxaQ2NwS1NCN1hISmNiaUFnSUNBZ0lDQWdZMjkxYm5Rckt6dGNjbHh1SUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JqYjNWdWRDMHRPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUdOb1pXTm9RblJ1S0hSb2FYTXNJR052ZFc1MEtUdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5SelZXNTBhV3dvSnk1amIyNTBaVzUwTFdacGJIUmxjaWNwTG01bGVIUW9KeTVpZEc0dGQzSmhjSEJsY2ljcExtTm9hV3hrY21WdUtDY3VjM1JoZEdVdGMyVnNaV04wSnlrdVkyaHBiR1J5Wlc0b0p5NXVkVzFpTFhObGJHVmpkQ2NwTG1Ob2FXeGtjbVZ1S0NkemNHRnVKeWt1YUhSdGJDaGpiM1Z1ZENrN1hISmNiaUFnSUNCOUtUdGNjbHh1SUNCOU8xeHlYRzRnSUZ4eVhHNGdJR1oxYm1OMGFXOXVJR05vWldOb1FuUnVLR1ZzWlcwc0lHRXBJSHRjY2x4dUlDQWdJR2xtSUNoaElENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkSE5WYm5ScGJDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUp5a3VibVY0ZENnbkxtSjBiaTEzY21Gd2NHVnlKeWt1WTJocGJHUnlaVzRvSnk1bWFXeDBaWEl0WW5SdUp5a3VjbVZ0YjNabFEyeGhjM01vSjI1dkxXRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuQmhjbVZ1ZENnbkxtWnBiSFJsY2kxcGRHVnRjeWNwTG5CaGNtVnVkSE5WYm5ScGJDZ25MbVpwYkhSbGNpMXBkR1Z0Y3ljcExuQnlaWFlvS1M1aFpHUkRiR0Z6Y3lnbmMyVnNaV04wSnlrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkSE5WYm5ScGJDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUp5a3VibVY0ZENnbkxtSjBiaTEzY21Gd2NHVnlKeWt1WTJocGJHUnlaVzRvSnk1bWFXeDBaWEl0WW5SdUp5a3VZV1JrUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkQ2duTG1acGJIUmxjaTFwZEdWdGN5Y3BMbkJoY21WdWRITlZiblJwYkNnbkxtWnBiSFJsY2kxcGRHVnRjeWNwTG5CeVpYWW9LUzV5WlcxdmRtVkRiR0Z6Y3lnbmMyVnNaV04wSnlrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNGdJR1oxYm1OMGFXOXVJSEpsYzJWMFUyVnNaV04wS0dWc1pXMHNJR0p2ZUNrZ2UxeHlYRzRnSUNBZ0pDaGxiR1Z0S1M1amJHbGpheWhtZFc1amRHbHZiaUFvWlNrZ2UxeHlYRzRnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ0lDQWdJQ1FvWW05NEtTNXdjbTl3S0NkamFHVmphMlZrSnl3Z1ptRnNjMlVwTzF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG01bGVIUW9KeTV1ZFcxaUxYTmxiR1ZqZENjcExtTm9hV3hrY21WdUtDZHpjR0Z1SnlrdWFIUnRiQ2d3S1R0Y2NseHVJQ0FnSUNBZ1kyOTFiblFnUFNBd08xeHlYRzRnSUNBZ0lDQmphR1ZqYUVKMGJpaGliM2dwTzF4eVhHNGdJQ0FnZlNrN1hISmNiaUFnZlR0Y2NseHVJQ0JtZFc1amRHbHZiaUJwYm1sMFVtRnVaMlZUYkdsa1pYSW9LU0I3SUZ4eVhHNGdJQ0FnZG1GeUlDUnlZVzVuWlNBOUlDUW9YQ0l1YW5NdGNtRnVaMlV0YzJ4cFpHVnlYQ0lwTEZ4eVhHNGdJQ0FnSkdsdWNIVjBSbkp2YlNBOUlDUW9YQ0l1YW5NdGFXNXdkWFF0Wm5KdmJWd2lLU3hjY2x4dUlDQWdJQ1JwYm5CMWRGUnZJRDBnSkNoY0lpNXFjeTFwYm5CMWRDMTBiMXdpS1N4Y2NseHVJQ0FnSUdsdWMzUmhibU5sTEZ4eVhHNGdJQ0FnYldsdUlEMGdNQ3hjY2x4dUlDQWdJRzFoZUNBOUlERXdNREF3TUN4Y2NseHVJQ0FnSUdaeWIyMGdQU0F3TEZ4eVhHNGdJQ0FnZEc4Z1BTQXdPMXh5WEc0Z0lDQWdKSEpoYm1kbExtbHZibEpoYm1kbFUyeHBaR1Z5S0h0Y2NseHVJQ0FnSUZ4MElDQnphMmx1T2lCY0luSnZkVzVrWENJc1hISmNiaUFnSUNBZ0lDQWdkSGx3WlRvZ1hDSmtiM1ZpYkdWY0lpeGNjbHh1SUNBZ0lDQWdJQ0J0YVc0NklHMXBiaXhjY2x4dUlDQWdJQ0FnSUNCdFlYZzZJRzFoZUN4Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0T2lBd0xGeHlYRzRnSUNBZ0lDQWdJSFJ2T2lBeE1EQXdNREFzWEhKY2JpQWdJQ0FnSUNBZ2IyNVRkR0Z5ZERvZ2RYQmtZWFJsU1c1d2RYUnpMRnh5WEc0Z0lDQWdJQ0FnSUc5dVEyaGhibWRsT2lCMWNHUmhkR1ZKYm5CMWRITmNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdhVzV6ZEdGdVkyVWdQU0FrY21GdVoyVXVaR0YwWVNoY0ltbHZibEpoYm1kbFUyeHBaR1Z5WENJcE8xeHlYRzRnSUNBZ1puVnVZM1JwYjI0Z2RYQmtZWFJsU1c1d2RYUnpJQ2hrWVhSaEtTQjdYSEpjYmlBZ0lDQmNkR1p5YjIwZ1BTQmtZWFJoTG1aeWIyMDdYSEpjYmlBZ0lDQWdJQ0FnZEc4Z1BTQmtZWFJoTG5Sdk8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNScGJuQjFkRVp5YjIwdWNISnZjQ2hjSW5aaGJIVmxYQ0lzSUdaeWIyMHBPMXh5WEc0Z0lDQWdJQ0FnSUNScGJuQjFkRlJ2TG5CeWIzQW9YQ0oyWVd4MVpWd2lMQ0IwYnlrN1hIUmNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lDUnBibkIxZEVaeWIyMHViMjRvWENKcGJuQjFkRndpTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmhiQ0E5SUNRb2RHaHBjeWt1Y0hKdmNDaGNJblpoYkhWbFhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSFpoYkdsa1lYUmxYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiQ0E4SUcxcGJpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3dnUFNCdGFXNDdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMllXd2dQaUIwYnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXd2dQU0IwYnp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ2FXNXpkR0Z1WTJVdWRYQmtZWFJsS0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KdmJUb2dkbUZzWEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlLVHRjY2x4dUlDQWdJRnh5WEc0Z0lDQWdKR2x1Y0hWMFZHOHViMjRvWENKcGJuQjFkRndpTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmhiQ0E5SUNRb2RHaHBjeWt1Y0hKdmNDaGNJblpoYkhWbFhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSFpoYkdsa1lYUmxYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiQ0E4SUdaeWIyMHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzSUQwZ1puSnZiVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiQ0ErSUcxaGVDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3dnUFNCdFlYZzdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJR2x1YzNSaGJtTmxMblZ3WkdGMFpTaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnZPaUIyWVd4Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJSDA3WEhKY2JpQWdLR1oxYm1OMGFXOXVLQ1FwZTF4eVhHNGdJQ0FnSUNBZ0lDUW9kMmx1Wkc5M0tTNXZiaWhjSW14dllXUmNJaXhtZFc1amRHbHZiaWdwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdKQ2hjSWk1a1pYTmphM1J2Y0MxbWFXeDBaWEl0WTI5dWRHRnBibVZ5SUM1amIyNTBaVzUwTFdacGJIUmxjaUF1Wm1sc2RHVnlMV2wwWlcxY0lpa3ViVU4xYzNSdmJWTmpjbTlzYkdKaGNpaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQjBhR1Z0WlRwY0ltMTVMWFJvWlcxbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSkNoY0lpNXRiMkpwYkdVdFptbHNkR1Z5TFdOdmJuUmhhVzVsY2lBdVkyOXVkR1Z1ZEMxbWFXeDBaWElnTG0xdllpMWphR1ZqYXkxcGRHVnRYQ0lwTG0xRGRYTjBiMjFUWTNKdmJHeGlZWElvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnZEdobGJXVTZYQ0p0ZVMxMGFHVnRaVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDUW9YQ0l1WVd4c0xXeGhibWN0YVhSbGJWd2lLUzV0UTNWemRHOXRVMk55YjJ4c1ltRnlLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJSFJvWlcxbE9sd2liWGt0ZEdobGJXVmNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQjlLU2hxVVhWbGNua3BPMXh5WEc0Z0lHWjFibU4wYVc5dUlHTnZiV1VvWld4bGJTa2dlMXh5WEc0Z0lDQWdkbUZ5SUdSdlkxWnBaWGRVYjNBZ1BTQWtLSGRwYm1SdmR5a3VjMk55YjJ4c1ZHOXdLQ2tzWEhKY2JpQWdJQ0FnSUdSdlkxWnBaWGRDYjNSMGIyMGdQU0JrYjJOV2FXVjNWRzl3SUNzZ0pDaDNhVzVrYjNjcExtaGxhV2RvZENncExGeHlYRzRnSUNBZ0lDQmxiR1Z0Vkc5d0lEMGdKQ2hsYkdWdEtTNXZabVp6WlhRb0tTNTBiM0FzWEhKY2JpQWdJQ0FnSUdWc1pXMUNiM1IwYjIwZ1BTQmxiR1Z0Vkc5d0lDc2dKQ2hsYkdWdEtTNW9aV2xuYUhRb0tUdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdLQ2hsYkdWdFFtOTBkRzl0SUR3OUlHUnZZMVpwWlhkQ2IzUjBiMjBwSUNZbUlDaGxiR1Z0Vkc5d0lENDlJR1J2WTFacFpYZFViM0FwS1R0Y2NseHVJQ0I5WEhKY2JpQWdJQ1FvSnk1bVpXRjBkWEpsYzE5cGRHVnRjeUF1YzJWaGNtTm9KeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElENDlJRGt3TUNrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2RvWldGa1pYSWdMbk5sWVhKamFDMW9aV0ZrWlhJdGJHbHVaU2NwTG5SdloyZHNaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5Rb0tTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSUNRb0oySnZaSGtuS1M1MGIyZG5iR1ZEYkdGemN5Z25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdhV1lnS0NRb0oySnZaSGsrWkdsMkp5a3VhR0Z6UTJ4aGMzTW9KMjkyWlhKc1lYa25LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDUW9KeTV2ZG1WeWJHRjVKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25QR1JwZGlCamJHRnpjejFjSW05MlpYSnNZWGxjSWo0OEwyUnBkajRuS1M1d2NtVndaVzVrVkc4b0oySnZaSGtuS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0pDZ25MbTFsYm5WZmJXOWlhV3hsSnlrdVlXUmtRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLQ2RpYjJSNUp5a3VZV1JrUTJ4aGMzTW9KMjF2WkdGc0p5azdYSEpjYmlBZ0lDQWdJQ1FvSnk1elpXRnlZMmd0ZDNKaGNIQmxjaUF1Wm05eWJTQStJR2x1Y0hWMEp5a3VabTlqZFhNb0tUdGNjbHh1SUNBZ0lDQjlPMXh5WEc0Z0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4eVhHNGdJQ0I5S1R0Y2NseHVJQ0FrS0NjdWMyVmhjbU5vTFdobFlXUmxjaTFzYVc1bElITjJaeTVqYkc5elpTY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ1FvSjJobFlXUmxjaUF1YzJWaGNtTm9MV2hsWVdSbGNpMXNhVzVsSnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdKQ2duTG1abFlYUjFjbVZ6WDJsMFpXMXpKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0pDZ25ZbTlrZVNjcExuSmxiVzkyWlVOc1lYTnpLQ2R0YjJSaGJDY3BPMXh5WEc0Z0lDQWdKQ2duTG05MlpYSnNZWGtuS1M1eVpXMXZkbVVvS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdVluVnlaMlZ5TFcxbGJuVW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FrS0NjdWJXVnVkVjl0YjJKcGJHVW5LUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWs3SUNCY2NseHVJQ0FnSUNRb0oySnZaSGtuS1M1aFpHUkRiR0Z6Y3lnbmJXOWtZV3duS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdWJXVnVkVjl0YjJKcGJHVWdMbTF2WW1sc1pTMW9aV0ZrWlhJdFkyOXVkR0ZwYm1WeUlDNWpiRzl6WlNjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDUW9KeTV0Wlc1MVgyMXZZbWxzWlNjcExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ1FvSjJKdlpIa25LUzV5WlcxdmRtVkRiR0Z6Y3lnbmJXOWtZV3duS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdWJtRjJYM2R5WVhCd1pYSWdMbTFsYm5VZ0xtMWxiblZmYVhSbGJYTW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FrS0NjdWJtRjJYM2R5WVhCd1pYSWdMbTFsYm5VZ0xtMWxiblZmYVhSbGJYTW5LUzV5WlcxdmRtVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBa0tIUm9hWE1wTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdWJXOWlhV3hsTFcxbGJuVXRkM0poY0hCbGNpQXViV1Z1ZFNBdWJXVnVkVjlwZEdWdGN5Y3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ1FvSnk1dGIySnBiR1V0YldWdWRTMTNjbUZ3Y0dWeUlDNXRaVzUxSUM1dFpXNTFYMmwwWlcxekp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSkNoMGFHbHpLUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG0xdllsOXpkV0pmYldWdWRWOXBkR1Z0Y3ljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0NjdWJXOWlYM04xWWw5dFpXNTFYMmwwWlcxekp5a3VhR0Z6UTJ4aGMzTW9KMkZqZEdsMlpTY3BLU0I3WEhKY2JpQWdJQ0FnSUNRb0p5NXRiMkpmYzNWaVgyMWxiblZmYVhSbGJYTW5LUzV5WlcxdmRtVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0lDUW9kR2hwY3lrdVlXUmtRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sTzF4eVhHNGdJQ0FnYVdZZ0tDUW9kR2hwY3lrdWFHRnpRMnhoYzNNb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmlBZ0lDQWdJQ1FvZEdocGN5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJQ0FnWEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG5CeWIyMXZYMnhwYm1VZ2MzWm5KeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUW9LUzVqYzNNb0oyaGxhV2RvZENjc0lDY3dKeWs3WEhKY2JpQWdJQ0FrS0hSb2FYTXBMbkJoY21WdWRDZ3BMbU56Y3lnbmRtbHphV0pwYkdsMGVTY3NJQ2RvYVdSa1pXNG5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQmhaR1JTWlcxdmRtVkRiR0Z6Y3lnbkxtbHVabTh0Wm5KaGJXVWdMbWx1Wm04dFkyOXVkR1Z1ZEMxM2NtRndjR1Z5UGk1MGFYUnNaU2NzSjJGalkyOXlaR2x2YmkxaWRHNG5LVHRjY2x4dUlDQmhaR1JTWlcxdmRtVkRiR0Z6Y3lnbmMyVmpkR2x2Ymk1cGJtWnZJQzVwYm1adkxXMWxiblV0ZDNKaGNIQmxjaWNzSUNkaFkyTnZjbVJwYjI0bktUdGNjbHh1SUNCaFpHUlNaVzF2ZG1WRGJHRnpjMTgzTmpjb0p5NW5ZV3hzTFhkeVlYQndMVzFoYVc0bkxDQW5iRzloWkNjcE8xeHlYRzRnSUNRb2QybHVaRzkzS1M1eVpYTnBlbVVvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ1lXUmtVbVZ0YjNabFEyeGhjM01vSnk1cGJtWnZMV1p5WVcxbElDNXBibVp2TFdOdmJuUmxiblF0ZDNKaGNIQmxjajR1ZEdsMGJHVW5MQ2RoWTJOdmNtUnBiMjR0WW5SdUp5azdYSEpjYmlBZ0lDQmhaR1JTWlcxdmRtVkRiR0Z6Y3lnbmMyVmpkR2x2Ymk1cGJtWnZJQzVqYjI1MFlXbHVaWElnTG1sdVptOHRabkpoYldVZ0xtbHVabTh0YldWdWRTMTNjbUZ3Y0dWeUp5d2dKMkZqWTI5eVpHbHZiaWNwTzF4eVhHNGdJQ0FnYldWdWRVRmpZMjl5WkdsdmJrMXZkbVZ5S0NrN1hISmNiaUFnSUNCaFpHUlNaVzF2ZG1WRGJHRnpjMTgzTmpjb0p5NW5ZV3hzTFhkeVlYQndMVzFoYVc0bkxDQW5iRzloWkNjcE8xeHlYRzRnSUgwcE8xeHlYRzRnSUcxbGJuVkJZMk52Y21ScGIyNU5iM1psY2lncE8xeHlYRzRnSUdGalkwVnVaMmx1WlNnbkxtRmpZeTF2Y0dWdUp5azdYSEpjYmlBZ1puVnVZM1JwYjI0Z2MyeHBZMlZUWlc1MFpXNWpaU2h4TENCelpXNTBaVzVqWlNrZ2UxeHlYRzRnSUNBZ2JHVjBJSE5wZW1VZ1BTQnhMRnh5WEc0Z0lDQWdJQ0J1WlhkelEyOXVkR1Z1ZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b2MyVnVkR1Z1WTJVcE8xeHlYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVaWGR6UTI5dWRHVnVkQzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ0lDQnBaaUFvYm1WM2MwTnZiblJsYm5SYmFWMHVhVzV1WlhKSVZFMU1MbXhsYm1kMGFDQStJSE5wZW1VcElIdGNjbHh1SUNBZ0lDQWdJQ0FnWEhSdVpYZHpRMjl1ZEdWdWRGdHBYUzVwYm01bGNraFVUVXdnUFNCdVpYZHpRMjl1ZEdWdWRGdHBYUzVwYm01bGNraFVUVXd1YzJ4cFkyVW9NQ3dnYzJsNlpTa2dLeUFuSUM0dUxpYzdYSEpjYmlBZ0lDQWdJSDA3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJSDA3SUNBZ0lGeHlYRzRnSUNBZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRHc5SURNMU55a2dlMXh5WEc0Z0lDQWdJQ0J6YkdsalpWTmxiblJsYm1ObEtETTBMQ0FuTG1ScGMyTnljSFJwYjI0dFoyOXZaSE10Y3lBK0lIQW5LVHRjY2x4dUlDQWdJQ0FnYzJ4cFkyVlRaVzUwWlc1alpTZ3pNeXdnSnk1a2FYTmpjbkIwYVc5dUxXZHZiMlJ6SUQ0Z2NDY3BPeUJjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR1ZzYzJVZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRHc5SURRNE1DQW1KaUFrS0hkcGJtUnZkeWt1ZDJsa2RHZ29LU0ErUFNBek5UY3BJSHRjY2x4dUlDQWdJQ0FnSUNCemJHbGpaVk5sYm5SbGJtTmxLRE00TENBbkxtUnBjMk55Y0hScGIyNHRaMjl2WkhNdGN5QStJSEFuS1R0Y2NseHVJQ0FnSUNBZ0lDQnpiR2xqWlZObGJuUmxibU5sS0RNekxDQW5MbVJwYzJOeWNIUnBiMjR0WjI5dlpITWdQaUJ3SnlrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ2MyeHBZMlZUWlc1MFpXNWpaU2d5Tnl3Z0p5NWthWE5qY25CMGFXOXVMV2R2YjJSekxYTWdQaUJ3SnlrN1hISmNiaUFnSUNBZ0lDQnpiR2xqWlZObGJuUmxibU5sS0RNekxDQW5MbVJwYzJOeWNIUnBiMjR0WjI5dlpITWdQaUJ3SnlrN0lGeHlYRzRnSUNBZ2ZUdGNjbHh1SUNCY2NseHVJQ0IyWVd4cFpHRjBiM0pHYjNKdEtGd2lJM05wWjI0dGFXNWNJaWs3WEhKY2JpQWdkbUZzYVdSaGRHOXlSbTl5YlNoY0lpTnlaWE5sZEMxd1lYTnpYQ0lwTzF4eVhHNGdJQ1FvSnk1amJHOXpaUzF3YjNCMWNDY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR05zYjNObFVHOXdWWEFvSnk1d2IzQjFjQzVoWTNScGRtVW5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Wm1WaGRIVnlaWE5mYVhSbGJYTWdMbUYxZEc5eWFYcGhkR2x2YmljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncGUxeHlYRzRnSUNBZ2IzQmxibEJ2Y0ZWd0tDY2pjRzl3ZFhBdGMybG5iaTFwYmljcE8xeHlYRzRnSUgwcE8xeHlYRzRnSUNRb0p5TndiM0IxY0MxemFXZHVMV2x1SUM1c2FXNXJYM2R5WVhCd1pYSWdZU2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNCamJHOXpaVkJ2Y0ZWd0tDY3VjRzl3ZFhBdVlXTjBhWFpsSnlrN1hISmNiaUFnSUNCdmNHVnVVRzl3VlhBb0p5TndiM0IxY0MxeVpYTmxkQzF3WVhOekp5azdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbXhoYm1jdGQzSmhjSEJsY2lBdWMyVnNaV04wTFd4aGJtY25LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSkNoMGFHbHpLUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0pDaDBhR2x6S1M1amFHbHNaSEpsYmlncExteGhjM1FvS1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ2ZTbGNjbHh1SUNBa0tDY3ViV1Z1ZFY5dGIySnBiR1VnTG5ObFlYSmphQzFzYVc1bEp5a3VZMmhoYm1kbEtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR2xtSUNna0tIUm9hWE1wTG5aaGJDZ3BMbXhsYm1kMGFDQStJREFwSUh0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1aFpHUkRiR0Z6Y3lnblpXNTBaWEluS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbTFsYm5WZmJXOWlhV3hsSUM1elpXRnlZMmduS1M1aFpHUkRiR0Z6Y3lnblpXNTBaWEluS1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUdsbUlDZ2tLQ2N1YldWdWRWOXRiMkpwYkdVZ0xuTmxZWEpqYUNjcExtaGhjME5zWVhOektDZGxiblJsY2ljcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSkNnbkxtMWxiblZmYlc5aWFXeGxJQzV6WldGeVkyZ25LUzV5WlcxdmRtVkRiR0Z6Y3lnblpXNTBaWEluS1R0Y2NseHVJQ0FnSUNBZ0lDQWtLSFJvYVhNcExuSmxiVzkyWlVOc1lYTnpLQ2RsYm5SbGNpY3BPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlibHh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2hjSWk1emRXSmZiV1Z1ZFY5cGRHVnRjeUErSUdGY0lpa3VhRzkyWlhJb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdZV1JrU0c5MlpYSW9kR2hwY3k1d1lYSmxiblJGYkdWdFpXNTBLVHRjY2x4dUlDQjlMQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNCeVpXMXZkbVZJYjNabGNpaDBhR2x6TG5CaGNtVnVkRVZzWlcxbGJuUXBPMXh5WEc0Z0lIMHBPMXh5WEc0Z0lDUW9YQ0l1YldWdWRWOXBkR1Z0Y3lBK0lHRmNJaWt1YUc5MlpYSW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnWVdSa1NHOTJaWElvZEdocGN5azdYSEpjYmlBZ2ZTd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnY21WdGIzWmxTRzkyWlhJb2RHaHBjeWs3WEhKY2JpQWdJSDBwTzF4eVhHNGdJQ1FvWENJdVptVmhkSFZ5WlhOZmFYUmxiWE1nUGlCaFhDSXBMbWh2ZG1WeUtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR0ZrWkVodmRtVnlLSFJvYVhNdWNHRnlaVzUwUld4bGJXVnVkQ2s3WEhKY2JpQWdmU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ2NtVnRiM1psU0c5MlpYSW9kR2hwY3k1d1lYSmxiblJGYkdWdFpXNTBLVHRjY2x4dUlDQjlLVHRjY2x4dUlDQnNaWFFnYUdWcFoyaDBTR1ZoWkdWeUlEMGdKQ2duYUdWaFpHVnlKeWt1YUdWcFoyaDBLQ2s3WEhKY2JpQWdKQ2gzYVc1a2IzY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR2xtSUNna0tDZG9aV0ZrWlhJbktTNW9aV2xuYUhRb0tTQThJR2hsYVdkb2RFaGxZV1JsY2lrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2R0WVdsdUp5a3VZM056S0Nkd1lXUmthVzVuSnl3Z0pDZ25hR1ZoWkdWeUp5a3VhR1ZwWjJoMEtDa2dLeUFuY0hnbktUdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1SUNCbmIxUnZRM1Z5Y21WdVkza29KeTV3Y21salpTY3BPMXh5WEc0Z0lHZHZWRzlEZFhKeVpXNWplU2duTG5CeWFXTmxYMjVsZHljcE8xeHlYRzRnSUdkdlZHOURkWEp5Wlc1amVTZ25MbkJ5YVdObFgyOXNaQ2NwTzF4eVhHNGdJQ1FvSnk1a1pYTmphM1J2Y0MxbWFXeDBaWEl0WTI5dWRHRnBibVZ5SUM1bWFXeDBaWEl0YUdWaFpHVnlKeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDRWtLSFJvYVhNcExtaGhjME5zWVhOektDZGhZM1JwZG1VbktTa2dlMXh5WEc0Z0lDQWdJQ0FrS0NjdVpHVnpZMnQwYjNBdFptbHNkR1Z5TFdOdmJuUmhhVzVsY2lBdVptbHNkR1Z5TFdobFlXUmxjaWNwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2duTG1SbGMyTnJkRzl3TFdacGJIUmxjaTFqYjI1MFlXbHVaWElnTG1acGJIUmxjaTFvWldGa1pYSW5LUzV1WlhoMEtDa3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tDY3ViRzlqYXkxd2IybHVkR1Z5SnlrdWNtVnRiM1psS0NrN1hISmNiaUFnSUNBZ0lHbG1JQ2drS0hSb2FYTXBMbWhoYzBOc1lYTnpLQ2R1YnkxaFkzUnBkbVVuS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWtLSFJvYVhNcExtRmtaRU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbTVsZUhRb0tTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ0FnSkNoY0lqeGthWFlnWTJ4aGMzTTlKMnh2WTJzdGNHOXBiblJsY2ljK1BDOWthWFkrWENJcExtRndjR1Z1WkZSdktGd2lZbTlrZVZ3aUtUdGNjbHh1SUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdKQ2duTG14dlkyc3RjRzlwYm5SbGNpY3BMbkpsYlc5MlpTZ3BPMXh5WEc0Z0lDQWdJQ0FrS0hSb2FYTXBMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1dVpYaDBLQ2t1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgwcE8xeHlYRzRnSUNRb1pHOWpkVzFsYm5RcExtTnNhV05yS0daMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0lDQnBaaUFvWlM1MFlYSm5aWFF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0Nkd2IzQjFjRjlmZDNKaGNIQmxjaWNwS1NCN1hISmNiaUFnSUNBZ0lHTnNiM05sVUc5d1ZYQW9KeTV3YjNCMWNDNWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1SUNBa0tHUnZZM1Z0Wlc1MEtTNWpiR2xqYXlobWRXNWpkR2x2YmlBb1pTa2dlMXh5WEc0Z0lDQWdhV1lnS0dVdWRHRnlaMlYwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmJHOWpheTF3YjJsdWRHVnlKeWtwSUh0Y2NseHVJQ0FnSUNBZ0pDZ25MbVpwYkhSbGNpMW9aV0ZrWlhJbktTNXlaVzF2ZG1WRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSUNRb0p5NW1hV3gwWlhJdGFHVmhaR1Z5SnlrdWJtVjRkQ2dwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2duTG14dlkyc3RjRzlwYm5SbGNpY3BMbkpsYlc5MlpTZ3BPMXh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hsTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjI5MlpYSnNZWGtuS1NrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2RvWldGa1pYSWdMbk5sWVhKamFDMW9aV0ZrWlhJdGJHbHVaU2NwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2duTG1abFlYUjFjbVZ6WDJsMFpXMXpKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLQ2RpYjJSNUp5a3VjbVZ0YjNabFEyeGhjM01vSjIxdlpHRnNKeWs3WEhKY2JpQWdJQ0FnSUNRb0p5NXZkbVZ5YkdGNUp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbTF2Y21VdGJHVnpjeTFtYVd4MFpYSW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FrS0hSb2FYTXBMblJ2WjJkc1pVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNRb2RHaHBjeWt1WTJocGJHUnlaVzRvS1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQnBaaUFvSkNoMGFHbHpLUzVvWVhORGJHRnpjeWduWVdOMGFYWmxKeWtwSUh0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblFvS1M1aFpHUkRiR0Z6Y3lnbmIzQmxiaWNwTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUW9LUzV5WlcxdmRtVkRiR0Z6Y3lnbmIzQmxiaWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDBwTzF4eVhHNGdJR2x1YVhSU1lXNW5aVk5zYVdSbGNpZ3BPMXh5WEc0Z0lHTm9aV05yUW05NFJXNW5hVzVsS0NjdVltOTRMV05vWldOckxuTnBlbVVuS1R0Y2NseHVJQ0JqYUdWamEwSnZlRVZ1WjJsdVpTZ25MbUp2ZUMxamFHVmpheTVqYjJ4dmNpY3BPMXh5WEc0Z0lHTm9aV05yUW05NFJXNW5hVzVsS0NjdVltOTRMV05vWldOckxtTmhkRjltSnlrN1hISmNiaUFnWTJobFkydENiM2hGYm1kcGJtVW9KeTVpYjNndFkyaGxZMnN1WW5KaGJtUW5LVHRjY2x4dUlDQmphR1ZqYTBKdmVFVnVaMmx1WlNnbkxtSnZlQzFqYUdWamF5NXRZWFJsY21saGJDY3BPMXh5WEc0Z0lHTm9aV05yUW05NFJXNW5hVzVsS0NjdVltOTRMV05vWldOckxtZ25LVHRjY2x4dUlDQnlaWE5sZEZObGJHVmpkQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlMbk5wZW1VZ0xuSmxjMlZ5TFhObGJHVmpkQ2NzSUNjdVltOTRMV05vWldOckxuTnBlbVVuS1R0Y2NseHVJQ0J5WlhObGRGTmxiR1ZqZENnbkxtTnZiblJsYm5RdFptbHNkR1Z5TG1OdmJHOXlJQzV5WlhObGNpMXpaV3hsWTNRbkxDQW5MbUp2ZUMxamFHVmpheTVqYjJ4dmNpY3BPMXh5WEc0Z0lISmxjMlYwVTJWc1pXTjBLQ2N1WTI5dWRHVnVkQzFtYVd4MFpYSXVZMkYwWDJZZ0xuSmxjMlZ5TFhObGJHVmpkQ2NzSUNjdVltOTRMV05vWldOckxtTmhkRjltSnlrN1hISmNiaUFnY21WelpYUlRaV3hsWTNRb0p5NWpiMjUwWlc1MExXWnBiSFJsY2k1aWNtRnVaQ0F1Y21WelpYSXRjMlZzWldOMEp5d2dKeTVpYjNndFkyaGxZMnN1WW5KaGJtUW5LVHRjY2x4dUlDQnlaWE5sZEZObGJHVmpkQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlMbTFoZEdWeWFXRnNJQzV5WlhObGNpMXpaV3hsWTNRbkxDQW5MbUp2ZUMxamFHVmpheTV0WVhSbGNtbGhiQ2NwTzF4eVhHNGdJSEpsYzJWMFUyVnNaV04wS0NjdVkyOXVkR1Z1ZEMxbWFXeDBaWEl1YUNBdWNtVnpaWEl0YzJWc1pXTjBKeXdnSnk1aWIzZ3RZMmhsWTJzdWFDY3BPMXh5WEc0Z0lDUW9KeTV0YjJKcGJHVXRabWxzZEdWeUxXTnZiblJoYVc1bGNpQXVabWxzZEdWeUxXaGxZV1JsY2ljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHOXdaVzVRYjNCVmNDZ2tLSFJvYVhNcExtNWxlSFFvS1NrN1hISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxtMXZaR0ZzTFdacGRHVnlJQzUwYVhSc1pTMW1hV3gwWlhJZ2MzWm5KeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnWTJ4dmMyVlFiM0JWY0NnbkxtMXZaR0ZzTFdacGRHVnlKeWs3WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG0xdllpMW1hV3gwWlhJdGFHVmhaR1Z5SnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0pDaDBhR2x6S1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWtLSFJvYVhNcExuQmhjbVZ1ZENncExuUnZaMmRzWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQmNjbHh1SUNCc1pYUWdZMjkxYm5RZ1BTQXdPMXh5WEc0Z0lDQWtLQ2N1Ylc5aUxXTm9aV05yTFdsMFpXMXpJQzVpYjNndFkyaGxZMnNuS1M1amFHRnVaMlVvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQnBaaUFvSkNoMGFHbHpLUzV3Y205d0tDZGphR1ZqYTJWa0p5a3BJSHRjY2x4dUlDQWdJQ0FnSUNCamIzVnVkQ3NyTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZkVzUwTFMwN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNBZ0lDQWtLQ2N1Ylc5a1lXd3RjbVZ6WlhRZ2MzQmhiaWNwTG1oMGJXd29KeWduSUNzZ1kyOTFiblFnS3lBbktTY3BYSEpjYmlBZ0lDQWdhV1lnS0dOdmRXNTBJRDRnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdKQ2duTG0xdlpHRnNMWEpsYzJWMEp5a3VjbVZ0YjNabFEyeGhjM01vSjI1dkxXRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWdKQ2duTG0xdlpHRnNMWE4xWW0xcGRDY3BMbkpsYlc5MlpVTnNZWE56S0NkdWJ5MWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdKQ2duTG0xdlpHRnNMWEpsYzJWMEp5a3VZV1JrUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYTjFZbTFwZENjcExtRmtaRU5zWVhOektDZHVieTFoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0I5WEhKY2JpQWdJSDBwTzF4eVhHNGdJQ1FvSnk1dGIySXRZMmhsWTJzdGFYUmxiWE1nTG1KdmVDMWphR1ZqYXpwdWIzUW9MbU52Ykc5eUtTY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR2xtSUNna0tIUm9hWE1wTG5CeWIzQW9KMk5vWldOclpXUW5LU2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5SektDY3ViVzlpTFdacGJIUmxjaTFwZEdWdGN5Y3BMbU5vYVd4a2NtVnVLQ2N1Ylc5aUxXWnBiSFJsY2kxb1pXRmtaWEluS1M1aGNIQmxibVFvSnp4emNHRnVJR1JoZEdFdGJtRnRaVDBuS3lBa0tIUm9hWE1wTG01bGVIUW9LUzVvZEcxc0tDa3JKejRvSnlBcklDUW9kR2hwY3lrdWJtVjRkQ2dwTG1oMGJXd29LU0FySUNjcFBDOXpjR0Z1UGljcE8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWtLSFJvYVhNcExuQmhjbVZ1ZEhNb0p5NXRiMkl0Wm1sc2RHVnlMV2wwWlcxekp5a3VZMmhwYkdSeVpXNG9KeTV0YjJJdFptbHNkR1Z5TFdobFlXUmxjaWNwTG1acGJtUW9KM053WVc1YlpHRjBZUzF1WVcxbFBTY3JKQ2gwYUdsektTNXVaWGgwS0NrdWFIUnRiQ2dwS3lkZEp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Ylc5a1lXd3RjbVZ6WlhRbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1Ylc5aUxXTm9aV05yTFdsMFpXMXpJQzVpYjNndFkyaGxZMnNuS1M1d2NtOXdLQ2RqYUdWamEyVmtKeXdnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdKQ2duTG0xdllpMW1hV3gwWlhJdGFHVmhaR1Z5SnlrdVptbHVaQ2duYzNCaGJpY3BMbkpsYlc5MlpTZ3BPMXh5WEc0Z0lDQWdZMjkxYm5RZ1BTQXdPMXh5WEc0Z0lDQWdKQ2duTG0xdlpHRnNMWEpsYzJWMElITndZVzRuS1M1b2RHMXNLQ2NvSnlBcklHTnZkVzUwSUNzZ0p5a25LVHRjY2x4dUlDQWdJQ1FvSnk1dGIyUmhiQzF5WlhObGRDY3BMbUZrWkVOc1lYTnpLQ2R1YnkxaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNRb0p5NXRiMlJoYkMxemRXSnRhWFFuS1M1aFpHUkRiR0Z6Y3lnbmJtOHRZV04wYVhabEp5azdYSEpjYmx4eVhHNGdJSDBwTzF4eVhHNGdJR2xtSUNna0tDY2pZblJ1TFhkaGRHTm9KeWt1YkdWdVozUm9JRDRnTUNrZ2UxeHlYRzRnSUNBZ0lDUW9aRzlqZFcxbGJuUXBMbk5qY205c2JDaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUdsbUlDaGpiMjFsS0NjalluUnVMWGRoZEdOb0p5a3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0pDZ25MbkJ5WlhacFpYY3RhR1ZoWkdWeUxXZHZiMlJ6SnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBa0tDY3VjSEpsZG1sbGR5MW9aV0ZrWlhJdFoyOXZaSE1uS1M1aFpHUkRiR0Z6Y3lnbllXTjBhWFpsSnlsY2NseHVJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQjlLVHRjY2x4dUlDQjlPMXh5WEc0Z0lGeHlYRzRnSUd4bGRDQnRiMkpIWVd4c1UyeHBaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1kaGJHd3RkM0poY0hBdGJXRnBiaWNwTEZ4eVhHNGdJQ0FnWTJ4dmMyVkhZV3hzWlhKNUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtZGhiR3d0WTJ4dmMyVXRZblJ1SnlrN1hISmNiaUFnYVdZZ0tHMXZZa2RoYkd4VGJHbGtaWElwSUh0Y2NseHVJQ0FnSUNBZ1pHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlBb1pTa2dlMXh5WEc0Z0lDQWdJQ0FnYVdZZ0tHVXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25aMkZzYkMxM2NtRndjQzF0WVdsdUp5a3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lHMXZZa2RoYkd4VGJHbGtaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYjNCbGJpY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVltOWtlUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2R0YjJSaGJDY3BYSEpjYmlBZ0lDQWdJQ0I5SUdWc2MyVWdleUJ5WlhSMWNtNGdmVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWTJ4dmMyVkhZV3hzWlhKNUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0J0YjJKSFlXeHNVMnhwWkdWeUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyOXdaVzRuS1R0Y2NseHVJQ0FnSUNBZ1pHOWpkVzFsYm5RdVltOWtlUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2R0YjJSaGJDY3BPMXh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdJQ0JjY2x4dUlDQWdJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnpiR2xrWlMweEp5a3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9aU2tnZTF4eVhHNGdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNBZ0lHMXZZa2RoYkd4VGJHbGtaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iM0JsYmljcE8xeHlYRzRnSUNBZ0lDQmtiMk4xYldWdWRDNWliMlI1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMjF2WkdGc0p5azdYSEpjYmlBZ0lDQWdJSE4zYVhCbGNrZHZiMlJ6TG5Oc2FXUmxWRzhvTVN3Z01DazdYSEpjYmlBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUSW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlneUxDQXdLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUTW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlnekxDQXdLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUUW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlnMExDQXdLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUVW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlnMUxDQXdLVHRjY2x4dUlDQWdJSDBwT3lBZ1hISmNiaUFnZlNCbGJITmxJSHNnY21WMGRYSnVJSDA3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1SUNKZExDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaWZRPT1cclxuIl0sImZpbGUiOiJpbmRleC5qcyJ9
