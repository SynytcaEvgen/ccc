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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAvKlNsaWRlciBzd2lwZXIgaGVhZGVyIGJhbm5lciBzdGFydCovXG4gIGxldCBzd2lwZXJCYW5uZXIgPSBuZXcgU3dpcGVyKCcuc2xpZGVyX2NvbnRhaW5lci5zd2lwZXItY29udGFpbmVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG4gIC8qU2xpZGVyIHN3aXBlciBoZWFkZXIgYmFubmVyIGVuZCovXG5cbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIHN0YXJ0Ki9cbiAgbGV0IHN3aXBlclByb2QgPSBuZXcgU3dpcGVyKCcucHJvZC1zbGlkZXItY29udGFpbmVyLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIC8vIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAwOiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogNCxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIH0sXG4gICAgICAzMDA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjA4LFxuICAgICAgfSxcbiAgICAgIDM3NToge1xuICAgICAgICBzcGFjZUJldHdlZW46IDQsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMDgsXG4gICAgICB9LFxuICAgICAgNDgwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0LFxuICAgICAgfSxcbiAgICAgIDYwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjgsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNCxcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIH0sXG4gICAgICAxMDI0OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICB9LFxuICAgICAgMTM2Njoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgLypTbGlkZXIgc3dpcGVyIHByb2Qtc2xpZGVyIGVuZCovXG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIHN0YXJ0Ki9cbiAgbGV0IHN3aXBlckdvb2RzID0gbmV3IFN3aXBlcignLmdhbGxlcnktbW9iLWNvbnRhaW5lci5zd2lwZXItY29udGFpbmVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuZ29vZHMtcGFnaW5hdGlvbicsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG4gIC8qU2xpZGVyIHN3aXBlciBnb29kcy1jYXJkIGVuZCovXG4gIGZ1bmN0aW9uIHdpdGhTY3JvbGxCYXIoKSB7XG4gICAgbGV0IHBvcFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbGV0IHdTY3JvbGwgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHBvcFdyYXAub2Zmc2V0V2lkdGg7XG4gICAgcmV0dXJuIHdTY3JvbGw7XG4gIH1cbiAgZnVuY3Rpb24gbWVudUFjY29yZGlvbk1vdmVyKCkge1xuICAgIGxldCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1idG5cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0ICYmIHBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uJykpIHtcbiAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gYWNjRW5naW5lKHBpY2spIHtcbiAgICBsZXQgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwaWNrKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xuICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgbGV0IHBhbmVsID0gdGhpcy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gYWRkUmVtb3ZlQ2xhc3MoZWxlbSwgYWRkKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9ICg5MDAgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBhZGRSZW1vdmVDbGFzc183NjcoZWxlbSwgYWRkKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49ICg3NjcgLSB3aXRoU2Nyb2xsQmFyKCkpKSB7XG4gICAgICAkKGVsZW0pLmFkZENsYXNzKGFkZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZWxlbSkucmVtb3ZlQ2xhc3MoYWRkKTtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIG9wZW5Qb3BVcChlbGVtKSB7XG4gICAgbGV0IHdTY3JvbE8gPSB3aXRoU2Nyb2xsQmFyKCk7XG4gICAgJChlbGVtKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbCcpO1xuICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCB3U2Nyb2xPKTtcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCB3U2Nyb2xPKTtcbiAgICAkKCdoZWFkZXIgLnByb21vX2xpbmUnKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCB3U2Nyb2xPKTtcbiAgICAkKCdoZWFkZXIgLnByb21vX2xpbmUnKS5jc3MoJ21hcmdpbi1yaWdodCcsIC13U2Nyb2xPKTtcbiAgfTtcbiAgZnVuY3Rpb24gY2xvc2VQb3BVcChlbGVtKSB7XG4gICAgJChlbGVtKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xuICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcbiAgICAkKCdoZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcbiAgICAkKCdoZWFkZXIgLnByb21vX2xpbmUnKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAwKTtcbiAgICAkKCdoZWFkZXIgLnByb21vX2xpbmUnKS5jc3MoJ21hcmdpbi1yaWdodCcsIDApO1xuICB9O1xuICBqUXVlcnkuZXh0ZW5kKGpRdWVyeS52YWxpZGF0b3IubWVzc2FnZXMsIHtcbiAgICByZXF1aXJlZDogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxuICAgIHJlbW90ZTogXCLQn9C+0LvQtSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvFwiLFxuICAgIGVtYWlsOiBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiLFxuICB9KTtcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiRU1BSUxcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS1dK1xcLlthLXpBLVouXXsyLDV9JC9pLnRlc3QodmFsdWUpO1xuICB9LCBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INGN0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgVwiKTtcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiUEhPTkVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL14oXFxzKik/KFxcKyk/KFstIF8oKTo9K10/XFxkWy0gXygpOj0rXT8pezEwLDE0fShcXHMqKT8kLy50ZXN0KHZhbHVlKTtcbiAgfSwgXCLQktCy0LXQtNC40YLQtSDQutC+0YDQtdC60YLQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIpO1xuICBmdW5jdGlvbiB2YWxpZGF0b3JGb3JtKGVsZW0pIHtcbiAgICAkKGVsZW0pLnZhbGlkYXRlKHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgIHBzd29yZDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIG1pbmxlbmd0aDogNixcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2l0eToge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzdHJlZXQ6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3ViamVjdDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1aWxkaW5nOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGFwYXJ0YW1lbnQ6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICB6aXA6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBtaW5sZW5ndGg6IDYsXG4gICAgICAgICAgbWF4bGVuZ3RoOiA2LFxuICAgICAgICAgIGRpZ2l0czogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdF9uYW1lOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBzd29yZF9jb25maXJtOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgbWlubGVuZ3RoOiA2LFxuICAgICAgICAgIGVxdWFsVG86IFwiI3BlcnNvbi1wYXNzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsX246IFwicmVxdWlyZWQgRU1BSUxcIixcbiAgICAgICAgZW1haWxfcHI6IFwiRU1BSUxcIixcbiAgICAgICAgcGhvbmVfcnU6IFwiUEhPTkVcIixcbiAgICAgICAgcGhvbmVfcnVfcmVxOiBcInJlcXVpcmVkIFBIT05FXCIsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgcHN3b3JkOiB7XG4gICAgICAgICAgbWlubGVuZ3RoOiAn0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyA2INGB0LjQvNCy0L7Qu9C+0LInXG4gICAgICAgIH0sXG4gICAgICAgIHBzd29yZF9jb25maXJtOiB7XG4gICAgICAgICAgZXF1YWxUbzogXCLQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YJcIixcbiAgICAgICAgICBtaW5sZW5ndGg6ICfQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPIDYg0YHQuNC80LLQvtC70L7QsidcbiAgICAgICAgfSxcbiAgICAgICAgemlwOiB7XG4gICAgICAgICAgbWlubGVuZ3RoOiAn0J/QvtGH0YLQvtCy0YvQuSDQuNC90LTQtdC60YEg0YHQvtGB0YLQvtC40YIg0LjQtyA2INGG0LjRhNGAJyxcbiAgICAgICAgICBtYXhsZW5ndGg6ICfQn9C+0YfRgtC+0LLRi9C5INC40L3QtNC10LrRgSDRgdC+0YHRgtC+0LjRgiDQuNC3IDYg0YbQuNGE0YAnLFxuICAgICAgICAgIGRpZ2l0czogJ9Cf0L7Rh9GC0L7QstGL0Lkg0LjQvdC00LXQutGBINGB0L7RgdGC0L7QuNGCINC40LcgNiDRhtC40YTRgCcsXG5cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgZnVuY3Rpb24gYWRkSG92ZXIoZWxlbSkge1xuICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2luLWhvdmVyJyk7XG4gIH07XG4gIGZ1bmN0aW9uIHJlbW92ZUhvdmVyKGVsZW0pIHtcbiAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCdpbi1ob3ZlcicpO1xuICB9O1xuICBmdW5jdGlvbiBnb1RvQ3VycmVuY3koZWxlbSkge1xuICAgIGxldCBudW1iZXJUb0Zvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJUb0Zvcm1hdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRvTnVtYiA9ICtudW1iZXJUb0Zvcm1hdFtpXS5pbm5lckhUTUw7XG4gICAgICBsZXQgZm9ybWF0TnVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScpLmZvcm1hdCh0b051bWIpO1xuICAgICAgbnVtYmVyVG9Gb3JtYXRbaV0uaW5uZXJIVE1MID0gZm9ybWF0TnVtO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gY2hlY2tCb3hFbmdpbmUoZWxlbSkge1xuICAgICQoZWxlbSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBzZWxlY3RDaGVjayA9ICQodGhpcykucGFyZW50cygnLmNvbnRlbnQtZmlsdGVyJykuZmluZCgnLm51bWItc2VsZWN0IHNwYW4nKSxcbiAgICAgICAgbnVtU2VsZWN0ZWQgPSArc2VsZWN0Q2hlY2suaHRtbCgpO1xuICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgIG51bVNlbGVjdGVkKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobnVtU2VsZWN0ZWQgPiAwKSB7XG4gICAgICAgICAgbnVtU2VsZWN0ZWQtLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1TZWxlY3RlZCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoZWNoQnRuKHRoaXMsIG51bVNlbGVjdGVkKTtcbiAgICAgIHNlbGVjdENoZWNrLmh0bWwobnVtU2VsZWN0ZWQpO1xuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBjaGVjaEJ0bihlbGVtLCBhKSB7XG4gICAgbGV0IHBhckJ0biA9ICQoZWxlbSkucGFyZW50c1VudGlsKCcuY29udGVudC1maWx0ZXInKS5uZXh0KCcuYnRuLXdyYXBwZXInKS5jaGlsZHJlbignLmZpbHRlci1idG4nKSxcbiAgICAgIGZJdGVtID0gJChlbGVtKS5wYXJlbnQoJy5maWx0ZXItaXRlbXMnKS5wYXJlbnRzVW50aWwoJy5maWx0ZXItaXRlbXMnKS5wcmV2KCk7XG4gICAgaWYgKGEgPiAwKSB7XG4gICAgICBwYXJCdG4ucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgICAgZkl0ZW0uYWRkQ2xhc3MoJ3NlbGVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJCdG4uYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgICAgZkl0ZW0ucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZXNldFNlbGVjdChlbGVtKSB7XG4gICAgJChlbGVtKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGJveEluID0gJCh0aGlzKS5wYXJlbnRzKCcuY29udGVudC1maWx0ZXInKS5maW5kKCcuYm94LWNoZWNrJyksXG4gICAgICAgIG51bVNlbGVjdCA9ICQodGhpcykubmV4dCgnLm51bWItc2VsZWN0JykuY2hpbGRyZW4oJ3NwYW4nKSxcbiAgICAgICAgY291bnRTZWwgPSArbnVtU2VsZWN0Lmh0bWwoKTtcbiAgICAgICQoYm94SW4pLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICBhdHJidCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpLmZpbmQoJ2RpdltkYXRhLW5hbWU9JyArIGF0cmJ0ICsgJ10nKS5yZW1vdmUoKTtcbiAgICAgICAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xuICAgICAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICBjb3VudFNlbC0tO1xuICAgICAgICAgIG51bVNlbGVjdC5odG1sKGNvdW50U2VsKTtcbiAgICAgICAgICBjaGVjaEJ0bigkKHRoaXMpLCBjb3VudFNlbCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9O1xuICBsZXQgdGV4dGFyZWFMaW5lSGVpZ2h0ID0gcGFyc2VJbnQoJChcIi50ZXh0YXJlYS13cmFwcGVyIHRleHRhcmVhXCIpLmNzcyhcImxpbmUtaGVpZ2h0XCIpKTtcbiAgZnVuY3Rpb24gck51bWJlcihlbGVtKSB7XG4gICAgcmV0dXJuIFN0cmluZyhlbGVtKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiBcIik7XG4gIH07XG4gIChmdW5jdGlvbiAoJCkge1xuICAgICQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgJChcIi5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5jb250ZW50LWZpbHRlciAuZmlsdGVyLWl0ZW1cIikubUN1c3RvbVNjcm9sbGJhcih7XG4gICAgICAgIHRoZW1lOiBcIm15LXRoZW1lXCJcbiAgICAgIH0pO1xuICAgICAgJChcIi5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciAuY29udGVudC1maWx0ZXIgLm1vYi1jaGVjay1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xuICAgICAgICB0aGVtZTogXCJteS10aGVtZVwiXG4gICAgICB9KTtcbiAgICAgICQoXCIuYWxsLWxhbmctaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgICAgICAgdGhlbWU6IFwibXktdGhlbWVcIlxuICAgICAgfSk7XG4gICAgICAkKFwiLnBvaW50cy1saXN0X19vdXR0ZXJcIikubUN1c3RvbVNjcm9sbGJhcih7XG4gICAgICAgIHRoZW1lOiBcIm15LXRoZW1lXCJcbiAgICAgIH0pO1xuICAgICAgJChcIi5hY2NvdW50LW9yZGVyc19fbmF2X192YXIsLnNpemUtdGFibGVcIikubUN1c3RvbVNjcm9sbGJhcih7XG4gICAgICAgIHRoZW1lOiBcIm15LXRoZW1lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiXG4gICAgICB9KTtcbiAgICAgICQoXCIubmljZS1zZWxlY3Qud2lkZSAubGlzdFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgICAgICAgdGhlbWU6XCJteS10aGVtZVwiXG4gICAgICB9KTtcbiAgICAgICQoXCIuYmFza2V0LXByZXZpZXctY29udGFpbmVyIC5nb29kcy1pdGVtXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xuICAgICAgICB0aGVtZTpcIm15LXRoZW1lXCJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KShqUXVlcnkpO1xuICBmdW5jdGlvbiBjb21lKGVsZW0pIHtcbiAgICB2YXIgZG9jVmlld1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgZWxlbVRvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wLFxuICAgICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyAkKGVsZW0pLmhlaWdodCgpO1xuXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBkb2NWaWV3VG9wKSk7XG4gIH07XG4gIGZ1bmN0aW9uIHNsaWNlU2VudGVuY2UoZWxlbSwgYWRkQ2xhc3MpIHtcbiAgICAkKGVsZW0pLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgaWYgKCQodGhpcykub3V0ZXJIZWlnaHQoKSA+ICQodGhpcykucGFyZW50KCkuaGVpZ2h0KCkpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhhZGRDbGFzcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKGFkZENsYXNzKSkge1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoYWRkQ2xhc3MpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgLy8gZnVuY3Rpb24gcmVzUHJpY2UoKSB7XG4gIC8vICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgLy8gICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gKDkwMCAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcbiAgLy8gICAgICQoJy5qcy1pbnB1dC1mcm9tJykudmFsKCcwJyk7XG4gIC8vICAgICAkKCcuanMtaW5wdXQtdG8nKS52YWwoJzEwMCAwMDAnKTtcbiAgLy8gICAgICQoJy5maWx0ZXItaGVhZGVyLnJhbmdlJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAkKCcubW9iLWlucHV0LWZyb20nKS52YWwoJzAnKTtcbiAgLy8gICAgICQoJy5tb2ItaW5wdXQtdG8nKS52YWwoJzEwMCAwMDAnKTtcbiAgLy8gICAgICQoJy5maWx0ZXItaGVhZGVyLnJhbmdlJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xuICAvLyAgIH1cblxuICAvLyB9O1xuICBmdW5jdGlvbiBhZGRGaWx0ZXIoZWxlbSwgX2lkLCBjb250ZW50LCBwYXN0KSB7XG4gICAgaWYgKCQoZWxlbSkucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICBwYXN0LmFwcGVuZChcbiAgICAgICAgJzxkaXYgZGF0YS1uYW1lPScgKyBfaWQgKyAnIGNsYXNzPVwiYWN0aXZlLWl0ZW1cIj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwibmFtZS1maWx0ZXJcIj4nICsgY29udGVudCArICc8L3NwYW4+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiY2xvc2UtZmlsdGVyLXdyYXBwZXJcIj4nICtcbiAgICAgICAgJzxzdmcgY2xhc3M9XCJjbG9zZS1maWx0ZXJcIj4nICtcbiAgICAgICAgJzx1c2UgaHJlZj1cIi9sb2NhbC90ZW1wbGF0ZXMvbWFpbi9hc3NldHMvc3ByaXRlL3Nwcml0ZS5zdmcjY2xvc2VcIj48L3VzZT4nICtcbiAgICAgICAgJzwvc3ZnPicgK1xuICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzdC5maW5kKCdkaXZbZGF0YS1uYW1lPScgKyBfaWQgKyAnXScpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gaGF2ZUFDaGlsZChlbGVtKSB7XG4gICAgbGV0IHBhckVsZW0gPSAkKGVsZW0pO1xuICAgIGlmIChwYXJFbGVtLmNoaWxkcmVuKCkubGVuZ3RoID49IDIpIHtcbiAgICAgIHBhckVsZW0uY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJFbGVtLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiB3YXRjaGVySW4oZWxlbSkge1xuICAgIGlmIChlbGVtLmNoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xuICAgICAgZWxlbS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBtb2JGaWx0ZXJDaGVjayhwaWNrLCBwdWxsKSB7XG4gICAgbGV0IG1vYklkQ2hlY2sgPSAkKHBpY2spLnByb3AoJ2lkJyksXG4gICAgICBwYXN0UG9zID0gJChwaWNrKS5wYXJlbnRzKCcubW9iLWZpbHRlci1pdGVtcycpLmNoaWxkcmVuKCcubW9iLWZpbHRlci1oZWFkZXInKS5jaGlsZHJlbignLm1vYi1jaGVjay1ob2xkZXInKSxcbiAgICAgIGxhc3RDaGlsZDtcbiAgICBpZiAoJChwaWNrKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgIGlmICh3YXRjaGVySW4ocGFzdFBvcykpIHtcbiAgICAgICAgcGFzdFBvcy5wcmVwZW5kKCc8c3BhbiBkYXRhLW5hbWU9JyArIG1vYklkQ2hlY2sgKyAnPicgKyBwdWxsICsgJyw8L3NwYW4+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXN0UG9zLnByZXBlbmQoJzxzcGFuIGRhdGEtbmFtZT0nICsgbW9iSWRDaGVjayArICc+JyArIHB1bGwgKyAnPC9zcGFuPicpO1xuICAgICAgfVxuICAgICAgd2F0Y2hlckluKHBhc3RQb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXN0UG9zLmZpbmQoJ3NwYW5bZGF0YS1uYW1lPScgKyBtb2JJZENoZWNrICsgJ10nKS5yZW1vdmUoKTtcbiAgICAgIHdhdGNoZXJJbihwYXN0UG9zKTtcbiAgICB9XG4gICAgbGFzdENoaWxkID0gcGFzdFBvcy5jaGlsZHJlbigpLmxhc3QoKS5odG1sKCk7XG4gICAgaWYgKHR5cGVvZiBsYXN0Q2hpbGQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENoaWxkID0gbGFzdENoaWxkLnJlcGxhY2UoL1tcXHMuLCVdL2csICcnKTtcbiAgICAgIHBhc3RQb3MuY2hpbGRyZW4oKS5sYXN0KCkuaHRtbChsYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gYWRkU2hhZG93KGVsZW0pIHtcbiAgICAkKGVsZW0pLmFkZENsYXNzKCdtb2Itc2l6ZS1pbml0Jyk7XG4gIH07XG4gIGZ1bmN0aW9uIHJlbW92ZVNoYWRvdyhlbGVtKSB7XG4gICAgJChlbGVtKS5yZW1vdmVDbGFzcygnbW9iLXNpemUtaW5pdCcpO1xuICB9O1xuICBmdW5jdGlvbiBpZlNoYWRvdyhlbGVtKSB7XG4gICAgaWYgKCQoZWxlbSkuZmluZCgndGFibGUnKS53aWR0aCgpID4gJChlbGVtKS5wYXJlbnRzKCcucG9wdXBfX2NvbnRlbnQnKS5vdXRlcldpZHRoKCkpIHtcbiAgICAgIGFkZFNoYWRvdyhlbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlU2hhZG93KGVsZW0pO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbihpblB1dCwgZm9ybSwgYnRuKSB7XG4gICAgJChpblB1dCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnKSAmJiAkKHRoaXMpLmNoaWxkcmVuKCdpbnB1dCcpLmhhc0NsYXNzKCdhY2NlcHRfY2hlY2snKSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoZm9ybSkuZmluZChidG4pLnJlbW92ZUNsYXNzKCduby1hY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykucGFyZW50cyhmb3JtKS5maW5kKGJ0bikuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBvbmx5TGV0dGVySW5wdXQoaW50ZXh0KSB7XG4gICAgbGV0IGppbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW50ZXh0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGppbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gICBqaW5baV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xuICAgICAgLy8gaWYgKCFlLmtleS5tYXRjaCgvW0EtetCQLdGP0IHRkSBdLykpIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyAgfSk7XG4gICAgICBqaW5baV0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9cXGQvZywgXCJcIik7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1suKl9+YCs74oK0JOKCvSdcIjolI0AhKj9eJC09PD7ihJZ7fSgpfFtcXF1cXFxcXS9nLCBcIlwiKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG4gICQoJy5mZWF0dXJlc19pdGVtcyAuc2VhcmNoJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAoOTAwIC0gd2l0aFNjcm9sbEJhcigpKSkge1xuICAgICAgJCgnaGVhZGVyIC5zZWFyY2gtaGVhZGVyLWxpbmUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9kYWwnKTtcbiAgICAgIGlmICgkKCdib2R5PmRpdicpLmhhc0NsYXNzKCdvdmVybGF5JykpIHtcbiAgICAgICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJzxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+JykucHJlcGVuZFRvKCdib2R5Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tZW51X21vYmlsZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwnKTtcbiAgICAgICQoJy5zZWFyY2gtd3JhcHBlciAuZm9ybSA+IGlucHV0JykuZm9jdXMoKTtcbiAgICB9O1xuICAgIHJldHVybiBmYWxzZVxuICB9KTtcbiAgJCgnLnNlYXJjaC1oZWFkZXItbGluZSBzdmcuY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnaGVhZGVyIC5zZWFyY2gtaGVhZGVyLWxpbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwnKTtcbiAgICAkKCcub3ZlcmxheScpLnJlbW92ZSgpO1xuICB9KTtcbiAgJCgnLmJ1cmdlci1tZW51JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5tZW51X21vYmlsZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsJyk7XG4gIH0pO1xuICAkKCcubWVudV9tb2JpbGUgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIC5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubWVudV9tb2JpbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xuICB9KTtcbiAgJCgnLm5hdl93cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5uYXZfd3JhcHBlciAubWVudSAubWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG4gICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5tb2JpbGUtbWVudS13cmFwcGVyIC5tZW51IC5tZW51X2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbiAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgJCgnLm1vYl9zdWJfbWVudV9pdGVtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZTtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9O1xuXG4gIH0pO1xuICAkKCcucHJvbW9fbGluZSBzdmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsICcwJyk7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH0pO1xuICBhZGRSZW1vdmVDbGFzcygnLmluZm8tZnJhbWUgLmluZm8tY29udGVudC13cmFwcGVyPi50aXRsZScsICdhY2NvcmRpb24tYnRuJyk7XG4gIGFkZFJlbW92ZUNsYXNzKCdzZWN0aW9uLmluZm8gLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xuICBhZGRSZW1vdmVDbGFzc183NjcoJy5nYWxsLXdyYXBwLW1haW4nLCAnbG9hZCcpO1xuXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgIGFkZFJlbW92ZUNsYXNzKCcuaW5mby1mcmFtZSAuaW5mby1jb250ZW50LXdyYXBwZXI+LnRpdGxlJywgJ2FjY29yZGlvbi1idG4nKTtcbiAgICBhZGRSZW1vdmVDbGFzcygnc2VjdGlvbi5pbmZvIC5jb250YWluZXIgLmluZm8tZnJhbWUgLmluZm8tbWVudS13cmFwcGVyJywgJ2FjY29yZGlvbicpO1xuICAgIGFkZFJlbW92ZUNsYXNzXzc2NygnLmdhbGwtd3JhcHAtbWFpbicsICdsb2FkJyk7XG4gICAgaWZTaGFkb3coJy5wb3B1cC5hY3RpdmUgLnNpemUtdGFibGUnKTtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gKDc2NyAtIHdpdGhTY3JvbGxCYXIoKSkpIHtcbiAgICAgIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzOm5vdCguY2F0YWxvZy1rKSBwJywgJ2N1dC13b3JkJyk7XG4gICAgICBzbGljZVNlbnRlbmNlKCcuZGlzY3JwdGlvbi1nb29kcy5jYXRhbG9nLWsgcCcsICdjYXRhbG9nLWsnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzOm5vdCguY2F0YWxvZy1rKSBwJywgJ2N1dC13b3JkJyk7XG4gIHNsaWNlU2VudGVuY2UoJy5kaXNjcnB0aW9uLWdvb2RzLmNhdGFsb2ctayBwJywgJ2NhdGFsb2ctaycpO1xuICBtZW51QWNjb3JkaW9uTW92ZXIoKTtcbiAgYWNjRW5naW5lKCcucGF5bWVudC1pdGVtcycpO1xuICB2YWxpZGF0b3JGb3JtKFwiI3NpZ24taW5cIik7XG4gIHZhbGlkYXRvckZvcm0oXCIjcmVzZXQtcGFzc1wiKTtcbiAgdmFsaWRhdG9yRm9ybShcIiNyZWdpc3RyYXRpb24tZm9ybVwiKTtcbiAgdmFsaWRhdG9yRm9ybShcIiNhY2NvdW50LXByZXJzb25hbC1kYXRhXCIpO1xuICB2YWxpZGF0b3JGb3JtKFwiI2ZhcUZvcm1cIik7XG4gIHZhbGlkYXRvckZvcm0oXCIjY2hlY2tvdXRGb3JtXCIpO1xuICB2YWxpZGF0b3JGb3JtKFwiI2NvbnRhY3RzX2Zvcm1cIik7XG4gICQoJy5jbG9zZS1wb3B1cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZVBvcFVwKCcucG9wdXAuYWN0aXZlJyk7XG4gIH0pO1xuICAkKCcuZmVhdHVyZXNfaXRlbXMgLmF1dG9yaXphdGlvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC1zaWduLWluJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgJCgnI3BvcHVwLXNpZ24taW4gLmxpbmtfd3JhcHBlciBhJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLXJlc2V0LXBhc3MnKTtcbiAgfSk7XG4gICQoJy5jaG9zZS1wb2ludCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9wZW5Qb3BVcCgnI3BvcHVwLWRlbGl2ZXJ5LXBvaW50Jyk7XG4gIH0pO1xuICAkKCcubGluay10b19fdGFibGUtc2l6ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBvcGVuUG9wVXAoJyNwb3B1cC10YWJsZS1zaXplJyk7XG4gICAgaWZTaGFkb3coJy5wb3B1cC5hY3RpdmUgLnNpemUtdGFibGUnKTtcbiAgfSk7XG5cbiAgJCgnLmxhbmctd3JhcHBlciAuc2VsZWN0LWxhbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5jaGlsZHJlbigpLmxhc3QoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuICAkKCcubWVudV9tb2JpbGUgLnNlYXJjaC1saW5lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdlbnRlcicpO1xuICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5hZGRDbGFzcygnZW50ZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCQoJy5tZW51X21vYmlsZSAuc2VhcmNoJykuaGFzQ2xhc3MoJ2VudGVyJykpIHtcbiAgICAgICAgJCgnLm1lbnVfbW9iaWxlIC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZW50ZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gICQoXCIuc3ViX21lbnVfaXRlbXMgPiBhXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRIb3Zlcih0aGlzLnBhcmVudEVsZW1lbnQpO1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcbiAgfSk7XG4gICQoXCIubWVudV9pdGVtcyA+IGFcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgIGFkZEhvdmVyKHRoaXMpO1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlSG92ZXIodGhpcyk7XG4gIH0pO1xuICAkKFwiLmZlYXR1cmVzX2l0ZW1zID4gYVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgYWRkSG92ZXIodGhpcy5wYXJlbnRFbGVtZW50KTtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUhvdmVyKHRoaXMucGFyZW50RWxlbWVudCk7XG4gIH0pO1xuICBsZXQgaGVpZ2h0SGVhZGVyID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XG4gICQod2luZG93KS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQoJ2hlYWRlcicpLmhlaWdodCgpIDwgaGVpZ2h0SGVhZGVyKSB7XG4gICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nJywgJCgnaGVhZGVyJykuaGVpZ2h0KCkgKyAncHgnKTtcbiAgICB9XG4gIH0pO1xuICBnb1RvQ3VycmVuY3koJy5wcmljZScpO1xuICBnb1RvQ3VycmVuY3koJy5wcmljZV9uZXcnKTtcbiAgZ29Ub0N1cnJlbmN5KCcucHJpY2Vfb2xkJyk7XG4gICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ25vLWFjdGl2ZScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoXCI8ZGl2IGNsYXNzPSdsb2NrLXBvaW50ZXInPjwvZGl2PlwiKS5hcHBlbmRUbyhcImJvZHlcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5sb2NrLXBvaW50ZXInKS5yZW1vdmUoKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX3dyYXBwZXInKSkge1xuICAgICAgY2xvc2VQb3BVcCgnLnBvcHVwLmFjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbG9jay1wb2ludGVyJykpIHtcbiAgICAgICQoJy5maWx0ZXItaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZpbHRlci1oZWFkZXInKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmxvY2stcG9pbnRlcicpLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5JykpIHtcbiAgICAgICQoJ2hlYWRlciAuc2VhcmNoLWhlYWRlci1saW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZlYXR1cmVzX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbCcpO1xuICAgICAgJCgnLm92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuICAkKCcubW9yZS1sZXNzLWZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgfVxuICB9KTtcbiAgY2hlY2tCb3hFbmdpbmUoJy5ib3gtY2hlY2snKTtcbiAgcmVzZXRTZWxlY3QoJy5yZXNldC1zZWxlY3QnKTtcbiAgJCgnLm1vYmlsZS1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIG9wZW5Qb3BVcCgkKHRoaXMpLm5leHQoKSk7XG4gIH0pO1xuICAkKCcubW9kYWwtZml0ZXIgLnRpdGxlLWZpbHRlciBzdmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VQb3BVcCgnLm1vZGFsLWZpdGVyJyk7XG4gIH0pO1xuICAkKCcubW9iLWZpbHRlci1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoJy5tb2ItZmlsdGVyLWl0ZW1zJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgJCgnLm1vYi1jaGVjay1pdGVtcyAuYm94LWNoZWNrJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50LS07XG4gICAgfVxuICAgICQoJy5tb2RhbC1yZXNldCBzcGFuJykuaHRtbCgnKCcgKyBjb3VudCArICcpJylcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAkKCcubW9kYWwtcmVzZXQnKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgICAkKCcubW9kYWwtc3VibWl0JykucmVtb3ZlQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgICAkKCcubW9kYWwtc3VibWl0JykuYWRkQ2xhc3MoJ25vLWFjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5tb2ItY2hlY2staXRlbXMgLmJveC1jaGVjaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9iQ2hlY2sgPSAkKHRoaXMpLm5leHQoKS5odG1sKCksXG4gICAgICBtb2JDaGVja0NvbG9yID0gJCh0aGlzKS5uZXh0KCkuY2hpbGRyZW4oJy5jb2xvci1uYW1lJykuaHRtbCgpO1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdjb2xvcicpKSB7XG4gICAgICBtb2JGaWx0ZXJDaGVjayh0aGlzLCBtb2JDaGVja0NvbG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9iRmlsdGVyQ2hlY2sodGhpcywgbW9iQ2hlY2spO1xuICAgIH1cbiAgfSk7XG4gICQoJy5tb2RhbC1yZXNldCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubW9iLWNoZWNrLWl0ZW1zIC5ib3gtY2hlY2snKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICQoJy5tb2ItZmlsdGVyLWhlYWRlcicpLmZpbmQoJy5tb2ItY2hlY2staG9sZGVyJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICBjb3VudCA9IDA7XG4gICAgJCgnLm1vZGFsLXJlc2V0IHNwYW4nKS5odG1sKCcoJyArIGNvdW50ICsgJyknKTtcbiAgICAkKCcubW9kYWwtcmVzZXQnKS5hZGRDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgJCgnLm1vZGFsLXN1Ym1pdCcpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcbiAgICAvLyByZXNQcmljZSgpO1xuICAgIHdhdGNoZXJJbigkKCcubW9iLWNoZWNrLWhvbGRlcicpKVxuICB9KTtcbiAgaWYgKCQoJyNidG4td2F0Y2gnKS5sZW5ndGggPiAwKSB7XG4gICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjb21lKCcjYnRuLXdhdGNoJykpIHtcbiAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnByZXZpZXctaGVhZGVyLWdvb2RzJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgbGV0IG1vYkdhbGxTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbC13cmFwcC1tYWluJyksXG4gICAgY2xvc2VHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGwtY2xvc2UtYnRuJyk7XG4gIGlmIChtb2JHYWxsU2xpZGVyKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbC13cmFwcC1tYWluJykpIHtcbiAgICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwnKVxuICAgICAgfSBlbHNlIHsgcmV0dXJuIH07XG4gICAgfSk7XG4gICAgY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsJyk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2xpY2tUb1NsaWRlKGVsZW0pIHtcbiAgICAgIGxldCBlbGVtTnVtYiA9IGVsZW0uc2xpY2UoLTEpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbW9iR2FsbFNsaWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgICAgc3dpcGVyR29vZHMuc2xpZGVUbyhlbGVtTnVtYiwgMCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNsaWNrVG9TbGlkZSgnI3NsaWRlLTEnKTtcbiAgICAkKCdbaWQqPVwic2xpZGUtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VyclNsaWRlID0gJyMnICsgJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgY2xpY2tUb1NsaWRlKGN1cnJTbGlkZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7IH07XG4gIC8vIGxldCBmYXZJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXQnKTtcbiAgLy8gbGV0IGNvdW50X2ZhdjEgPSAwO1xuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGZhdkljb24ubGVuZ3RoOyBpKyspIHtcbiAgLy8gICBmYXZJY29uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAvLyAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QnKTtcbiAgLy8gICAgIGxldCBycnR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXQuc2VsZWN0Jyk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhycnR0Lmxlbmd0aClcbiAgLy8gICAgIGlmIChycnR0Lmxlbmd0aCA9PSAwKSB7XG5cbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfTtcbiAgJCgnLnNpemUtaG9sZGVyIC5zaXplLWl0ZW1zJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5zaXplLWhvbGRlciAuc2l6ZS1pdGVtcycpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY3VycmVudCcpO1xuICB9KTtcbiAgLy8gJCgnLmFkZC10by1mYXZvcml0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAvLyAgICQoJy5hZGQtdG8tZmF2b3JpdCcpLnRvZ2dsZUNsYXNzKCdzZWxlY3QnKTtcbiAgLy8gfSk7XG4gICQoJy5hZGRfdG9fZmF2b3JpdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGJ1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgIGxldCBwcm9kX2lkID0gYnV0dG9uLmRhdGEoJ3Byb2R1Y3RfaWQnKVxuICAgIGxldCBuZWVkX2RlbGV0ZSA9IChidXR0b24uaGFzQ2xhc3MoJ3NlbGVjdCcpKSA/IDEgOiAwO1xuICAgIGxldCBmYXZfaWNvbiA9ICQoJy5mZWF0dXJlc19pdGVtcyAuZmF2b3JpdCAuaWNvbl9xdWFudGl0eScpO1xuICAgIGxldCBwYXJzZVRvSW4gPSBwYXJzZUludChmYXZfaWNvbi5odG1sKCkpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9sb2NhbC9hamF4L2Zhdm9yaXRlcy5waHAnLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZhdm9yaXRlOiBwcm9kX2lkLFxuICAgICAgICBkZWxldGU6IG5lZWRfZGVsZXRlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgaWYgKG5lZWRfZGVsZXRlKSB7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgcGFyc2VUb0luLS07XG4gICAgICAgICAgICBpZiAocGFyc2VUb0luID09IDAgfHwgcGFyc2VUb0luIDwgMCkge1xuICAgICAgICAgICAgICBmYXZfaWNvbi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIHBhcnNlVG9JbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmYXZfaWNvbi5odG1sKHBhcnNlVG9Jbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRDbGFzcygnc2VsZWN0Jyk7XG4gICAgICAgICAgICBwYXJzZVRvSW4rKztcbiAgICAgICAgICAgIGZhdl9pY29uLmh0bWwocGFyc2VUb0luKTtcbiAgICAgICAgICAgIGlmICghcGFyc2VUb0luID09IDApIHtcbiAgICAgICAgICAgICAgZmF2X2ljb24uYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAkKCcuZGVjcmVhc2UnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIHZhciBvbGQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbCgpO1xuICAgIGlmIChvbGQgPiAxKSB7XG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChwYXJzZUludChvbGQpIC0gMSk7XG4gICAgfVxuICB9KVxuICAkKCcuaW5jcmVhc2UnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIHZhciBvbGQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbCgpO1xuICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKHBhcnNlSW50KG9sZCkgKyAxKTtcbiAgfSlcbiAgJCgnLnBvaW50cy1uYXYgYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5wb2ludHMtbmF2IGEuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgJCgnLnBvaW50cy12aWV3IC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLicgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KVxuICAkKCcucG9pbnRzLWxpc3QgLnBvaW50JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAkKCcucG9pbnRzLWxpc3QgLnBvaW50LnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKVxuICB9KTtcbiAgJCgnc2VsZWN0JykubmljZVNlbGVjdCgpO1xuICAkKCcuZmlsdGVyLWl0ZW1zID4gLmJveC1jaGVjazpub3QoLmNvbG9yKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29udENoZWNrID0gJCh0aGlzKS5uZXh0KCkuaHRtbCgpLFxuICAgICAgcGljSWQgPSAkKHRoaXMpLnByb3AoJ2lkJyk7XG4gICAgcHV0VGhpcyA9ICQodGhpcykucGFyZW50cygnLmZpbHRlci1jb250aW5lcicpLmNoaWxkcmVuKCcuZmlsdGVyLWFjdGl2ZS13cmFwcGVyJykuY2hpbGRyZW4oJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XG4gICAgYWRkRmlsdGVyKHRoaXMsIHBpY0lkLCBjb250Q2hlY2ssIHB1dFRoaXMpO1xuICAgIGhhdmVBQ2hpbGQoJy5maWx0ZXItYWN0aXZlLWl0ZW1zJyk7XG4gIH0pO1xuICAkKCcuZmlsdGVyLWl0ZW1zID4gLmJveC1jaGVjay5jb2xvcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29udENvbG9yID0gJCh0aGlzKS5uZXh0KCkuY2hpbGRyZW4oJy5jb2xvci1uYW1lJykuaHRtbCgpLFxuICAgICAgY29sb3JJZCA9ICQodGhpcykucHJvcCgnaWQnKTtcbiAgICBwdXRUaGlzQ29sID0gJCh0aGlzKS5wYXJlbnRzKCcuZmlsdGVyLWNvbnRpbmVyJykuY2hpbGRyZW4oJy5maWx0ZXItYWN0aXZlLXdyYXBwZXInKS5jaGlsZHJlbignLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcbiAgICBhZGRGaWx0ZXIodGhpcywgY29sb3JJZCwgY29udENvbG9yLCBwdXRUaGlzQ29sKTtcbiAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xuICB9KTtcbiAgJCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKS5vbignY2xpY2snLCAnLmNsb3NlLWZpbHRlci13cmFwcGVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgY1BhciA9ICQodGhpcykucGFyZW50cygnLmFjdGl2ZS1pdGVtJyksXG4gICAgICB3YXlDaGVjayA9IGNQYXIuYXR0cignZGF0YS1uYW1lJyksXG4gICAgICBmaWx0ZXJXcmFwID0gJCgnLmZpbHRlci1jb250aW5lcicpLFxuICAgICAgY2xpY2tJbiA9IGZpbHRlcldyYXAuZmluZCgnaW5wdXRbaWQ9JyArIHdheUNoZWNrICsgJ10nKTtcbiAgICBjbGlja0luLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgY1Bhci5yZW1vdmUoKTtcbiAgICBoYXZlQUNoaWxkKCcuZmlsdGVyLWFjdGl2ZS1pdGVtcycpO1xuICB9KTtcbiAgJCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKS5vbignY2xpY2snLCAnLmZpbHRlci1hY3RpdmUtcmVzZXQtYnRuJywgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgaXRlbVJlbSA9ICQoJy5hY3RpdmUtaXRlbScpLFxuICAgICAgZmlsdGVyQ29udCA9ICQoJy5maWx0ZXItY29udGluZXInKTtcbiAgICBmaWx0ZXJDb250LmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICBpdGVtUmVtLnJlbW92ZSgpO1xuICAgIC8vIHJlc1ByaWNlKCk7XG4gICAgaGF2ZUFDaGlsZCgnLmZpbHRlci1hY3RpdmUtaXRlbXMnKTtcbiAgfSk7XG4gICQoXCIud3JhcC1jYWxlbmRhclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGhhc0ZvY3VzID0gJCh0aGlzKS5wcmV2KCkuaXMoJzpmb2N1cycpO1xuICAgIGNvbnNvbGUubG9nKGhhc0ZvY3VzKTtcbiAgICBpZiAoaGFzRm9jdXMpIHtcbiAgICAgICQodGhpcykucHJldigpLmJsdXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5wcmV2KCkuZm9jdXMoKTtcbiAgICB9XG4gIH0pO1xuICAkKCcubmV3LXBhc3MnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IDApIHtcbiAgICAgICQodGhpcykuYXR0cignbmFtZScsICdwc3dvcmQnKTtcbiAgICAgICQodGhpcykuYXR0cignaWQnLCAncGVyc29uLXBhc3MnKTtcbiAgICAgICQoJy5jaGVjay1wYXNzJykuYXR0cignbmFtZScsICdwc3dvcmRfY29uZmlybScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ25hbWUnKTtcbiAgICAgICQoJy5jaGVjay1wYXNzJykucmVtb3ZlQXR0cignbmFtZScpO1xuICAgIH1cbiAgfSk7XG4gICQoJy52YWxpZC10ZWwnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IDApIHtcbiAgICAgICQodGhpcykuYXR0cignbmFtZScsICdwaG9uZV9ydScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ25hbWUnKTtcbiAgICB9XG4gIH0pO1xuICAkKCcuY291bnRyaWVzIC5zaG93LWFsbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuY291bnRyaWVzIC5zaG93LWFsbCcpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnJvdycpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcbiAgfSk7XG4gIGRpc2FibGVCdXR0b24oXCIuY2hlY2tib3gtbGFiZWxcIiwgXCIuZm9ybVwiLCBcImlucHV0LmFjY2VwdF9idG5cIik7XG4gIGRpc2FibGVCdXR0b24oXCIuY2hlY2tib3gtbGFiZWxcIiwgXCIjcmVnaXN0cmF0aW9uLWZvcm1cIiwgXCIuZm9ybS1hY3Rpb25zIC5zdWJtaXQtYnRuXCIpO1xuICAkKCcucGhvbmVfbWFzaycpLm1hc2soJyswICgwMDApIDAwMC0wMC0wMCcpO1xuICAkKCcuemlwX21hc2snKS5tYXNrKCcwMDAwMDAnKTtcbiAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICQoJ2J1dHRvbicpLmFkZENsYXNzKCdtb2JfY2VudGVyJylcbiAgfSBlbHNlIHtcbiAgICBpZiAoJCgnYnV0dG9uJykuaGFzQ2xhc3MoJ21vYl9jZW50ZXInKSkge1xuICAgICAgJCgnYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ21vYl9jZW50ZXInKVxuICAgIH07XG4gIH07XG4gICQoJyNpbnB1dF9kYXRlJykuZGF0ZXBpY2tlcih7XG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxuICB9KTtcbiAgb25seUxldHRlcklucHV0KCcub25seV9sZXR0ZXInKTtcbiAgZnVuY3Rpb24gZGVsRigpIHtcbiAgICAkKCcuZGVsaXZlcnlfd3JhcHAnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgICQoJy5kZWxpdmVyeV93cmFwcCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRlbEluID0gJCh0aGlzKTtcbiAgICAgICQoJy5kZWxpdmVyeS1yYWRpbyAucmFkaW8td3JhcCBpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLW5hbWUnKSA9PSBkZWxJbi5hdHRyKCdkYXRhLW5hbWUnKSAmJiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICQoZGVsSW4pLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbiAgZGVsRigpO1xuICAkKCcuZGVsaXZlcnktcmFkaW8gLnJhZGlvLXdyYXAgaW5wdXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgZGVsRigpO1xuICB9KTtcbiAgaWYgKCQoJy5ncmlkLXJvdy10d28nKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAxKSB7XG4gICAgJCgnLmdyaWQtcm93LXR3bycpLmFkZENsYXNzKCdtb2RlX29uZScpO1xuICB9IGlmICgkKCcuZ3JpZC1yb3ctdHdvJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMykge1xuICAgICQoJy5ncmlkLXJvdy10d28nKS5hZGRDbGFzcygnbW9kZV90aHJlZScpO1xuICB9O1xuICAkKCcuYWNjZXB0YW5jZSBpbnB1dFtuYW1lPVwiYWNjZXB0XCJdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoISQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAkKCcuY2hlY2tvdXQtdG90YWwgLmJ0bicpLmFkZENsYXNzKCduby1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmNoZWNrb3V0LXRvdGFsIC5idG4nKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgZnVuY3Rpb24gZmlsdGVyQ29udHJvbCgpIHtcbiAgICBsZXQgZGVzY2tGaWx0ZXIgPSAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lcicpLFxuICAgICAgbW9yZUxlc3MgPSAkKCcuZGVzY2t0b3AtZmlsdGVyLWNvbnRhaW5lciAubW9yZS1sZXNzLWZpbHRlcicpLFxuICAgICAgd3JwRmlsdGVyID0gJCgnLmRlc2NrdG9wLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1pdGVtJyksXG4gICAgICBzdHlsZUhpZGUgPSB7XG4gICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiXG4gICAgICB9LFxuICAgICAgc3R5bGVWaXMgPSB7XG4gICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIlxuICAgICAgfVxuICAgICAgaXRlbUZpbHRlciA9ICQoJy5kZXNja3RvcC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaXRlbXMnKTtcblxuICAgIGlmICh3cnBGaWx0ZXIub3V0ZXJIZWlnaHQoKSA9PSBpdGVtRmlsdGVyLm91dGVySGVpZ2h0KHRydWUpKSB7XG4gICAgICBkZXNja0ZpbHRlci5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgbW9yZUxlc3MuY3NzKHN0eWxlSGlkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2NrRmlsdGVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICBtb3JlTGVzcy5jc3Moc3R5bGVWaXMpO1xuICAgIH1cbiAgfTtcbiAgZmlsdGVyQ29udHJvbCgpO1xufTtcblxuXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNXFjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhjSWtSUFRVTnZiblJsYm5STWIyRmtaV1JjSWl3Z2FXNXBkQ2s3WEhKY2JtWjFibU4wYVc5dUlHbHVhWFFvS1NCN1hISmNiaUFnSUNBdktsTnNhV1JsY2lCemQybHdaWElnYUdWaFpHVnlJR0poYm01bGNpQnpkR0Z5ZENvdlhISmNiaUFnSUNCc1pYUWdjM2RwY0dWeVFtRnVibVZ5SUQwZ2JtVjNJRk4zYVhCbGNpZ25Mbk5zYVdSbGNsOWpiMjUwWVdsdVpYSXVjM2RwY0dWeUxXTnZiblJoYVc1bGNpY3NJSHRjY2x4dUlDQWdJQ0FnYzNCaFkyVkNaWFIzWldWdU9pQXpNQ3hjY2x4dUlDQWdJQ0FnYkc5dmNEb2dkSEoxWlN4Y2NseHVJQ0FnSUNBZ1lYVjBiM0JzWVhrNklIdGNjbHh1SUNBZ0lDQWdJQ0JrWld4aGVUb2dNelV3TUN4Y2NseHVJQ0FnSUNBZ0lDQmthWE5oWW14bFQyNUpiblJsY21GamRHbHZiam9nWm1Gc2MyVXNYSEpjYmlBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUhCaFoybHVZWFJwYjI0NklIdGNjbHh1SUNBZ0lDQWdJQ0JsYkRvZ0p5NXpkMmx3WlhJdGNHRm5hVzVoZEdsdmJpY3NYSEpjYmlBZ0lDQWdJQ0FnSUNCamJHbGphMkZpYkdVNklIUnlkV1VzSUZ4eVhHNGdJQ0FnSUNCOUxGeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ0lDQXZLbE5zYVdSbGNpQnpkMmx3WlhJZ2FHVmhaR1Z5SUdKaGJtNWxjaUJsYm1RcUwxeHlYRzVjY2x4dUlDQWdJQzhxVTJ4cFpHVnlJSE4zYVhCbGNpQndjbTlrTFhOc2FXUmxjaUJ6ZEdGeWRDb3ZYSEpjYmlBZ0lDQnNaWFFnYzNkcGNHVnlVSEp2WkNBOUlHNWxkeUJUZDJsd1pYSW9KeTV3Y205a0xYTnNhV1JsY2kxamIyNTBZV2x1WlhJdWMzZHBjR1Z5TFdOdmJuUmhhVzVsY2ljc0lIdGNjbHh1SUNBZ0lDQWdjM0JoWTJWQ1pYUjNaV1Z1T2lBeE5peGNjbHh1SUNBZ0lDQWdjMnhwWkdWelVHVnlWbWxsZHpvZ05TeGNjbHh1SUNBZ0lDQWdjMnhwWkdWelVHVnlSM0p2ZFhBNklERXNYSEpjYmlBZ0lDQWdJQzh2SUdkeVlXSkRkWEp6YjNJNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUc1aGRtbG5ZWFJwYjI0NklIdGNjbHh1SUNBZ0lDQWdJQ0J1WlhoMFJXdzZJQ2N1YzNkcGNHVnlMV0oxZEhSdmJpMXVaWGgwSnl4Y2NseHVJQ0FnSUNBZ0lDQndjbVYyUld3NklDY3VjM2RwY0dWeUxXSjFkSFJ2Ymkxd2NtVjJKeXhjY2x4dUlDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ1luSmxZV3R3YjJsdWRITTZJSHRjY2x4dUlDQWdJQ0FnSUNBd09pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2MzQmhZMlZDWlhSM1pXVnVPaUEwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJSE5zYVdSbGMxQmxjbFpwWlhjNklERXNYSEpjYmlBZ0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdNekF3T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzNCaFkyVkNaWFIzWldWdU9pQTBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lITnNhV1JsYzFCbGNsWnBaWGM2SURJdU1EZ3NYSEpjYmlBZ0lDQWdJQ0FnSUgwc1hISmNibHgwWEhSY2RDQWdJRE0zTlRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOd1lXTmxRbVYwZDJWbGJqb2dOQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQnpiR2xrWlhOUVpYSldhV1YzT2lBeUxqQTRMRnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdJRFE0TURvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUhOc2FXUmxjMUJsY2xacFpYYzZJREl1Tml4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0J6Y0dGalpVSmxkSGRsWlc0NklEUXNYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQWdOakF3T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzJ4cFpHVnpVR1Z5Vm1sbGR6b2dNaTQ0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJSE53WVdObFFtVjBkMlZsYmpvZ05DeGNjbHh1SUNBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQWdOelk0T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnYzJ4cFpHVnpVR1Z5Vm1sbGR6b2dOQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQnpjR0ZqWlVKbGRIZGxaVzQ2SURFd0xGeHlYRzRnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lERXdNalE2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJSE5zYVdSbGMxQmxjbFpwWlhjNklEVXNYSEpjYmx4MFhIUmNkQ0FnSUgwc1hISmNibHgwWEhSY2RDQWdJREV6TmpZNklIdGNjbHh1WEhSY2RGeDBJQ0FnWEhSemJHbGtaWE5RWlhKV2FXVjNPaUExTEZ4eVhHNWNkRngwWEhRZ0lDQjlMRnh5WEc1Y2RGeDBJQ0I5TEZ4eVhHNGdJQ0FnZlNrN1hISmNiaUFnTHlwVGJHbGtaWElnYzNkcGNHVnlJSEJ5YjJRdGMyeHBaR1Z5SUdWdVpDb3ZYSEpjYmlBZ0x5cFRiR2xrWlhJZ2MzZHBjR1Z5SUdkdmIyUnpMV05oY21RZ2MzUmhjblFxTDF4eVhHNGdJR3hsZENCemQybHdaWEpIYjI5a2N5QTlJRzVsZHlCVGQybHdaWElvSnk1bllXeHNaWEo1TFcxdllpMWpiMjUwWVdsdVpYSXVjM2RwY0dWeUxXTnZiblJoYVc1bGNpY3NJSHRjY2x4dUlDQWdJSE53WVdObFFtVjBkMlZsYmpvZ016QXNYSEpjYmlBZ0lDQnNiMjl3T2lCMGNuVmxMRnh5WEc0Z0lDQWdZMlZ1ZEdWeVpXUlRiR2xrWlhNNklIUnlkV1VzWEhKY2JpQWdJQ0JoZFhSdmNHeGhlVG9nZTF4eVhHNGdJQ0FnSUNCa1pXeGhlVG9nTXpVd01DeGNjbHh1SUNBZ0lDQWdaR2x6WVdKc1pVOXVTVzUwWlhKaFkzUnBiMjQ2SUdaaGJITmxMRnh5WEc0Z0lDQWdmU3hjY2x4dUlDQWdJRzVoZG1sbllYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQnVaWGgwUld3NklDY3VjM2RwY0dWeUxXSjFkSFJ2YmkxdVpYaDBKeXhjY2x4dUlDQWdJQ0FnSUNCd2NtVjJSV3c2SUNjdWMzZHBjR1Z5TFdKMWRIUnZiaTF3Y21WMkp5eGNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQndZV2RwYm1GMGFXOXVPaUI3WEhKY2JpQWdJQ0FnSUdWc09pQW5MbWR2YjJSekxYQmhaMmx1WVhScGIyNG5MRnh5WEc0Z0lDQWdJQ0FnSUdOc2FXTnJZV0pzWlRvZ2RISjFaU3dnWEhKY2JpQWdJQ0I5TEZ4eVhHNGdJSDBwTzF4eVhHNGdJQzhxVTJ4cFpHVnlJSE4zYVhCbGNpQm5iMjlrY3kxallYSmtJR1Z1WkNvdlhISmNiaUFnWm5WdVkzUnBiMjRnYldWdWRVRmpZMjl5WkdsdmJrMXZkbVZ5S0NrZ2UxeHlYRzRnSUNBZ2JHVjBJR0ZqWXlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1hDSXVZV05qYjNKa2FXOXVMV0owYmx3aUtUdGNjbHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV05qTG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJR0ZqWTF0cFhTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lZMnhwWTJ0Y0lpd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2hjSW1GamRHbDJaVndpS1R0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnY0dGdVpXd2dQU0IwYUdsekxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp6dGNjbHh1SUNBZ0lDQWdJQ0FnYVdZZ0tIQmhibVZzTG5OMGVXeGxMbTFoZUVobGFXZG9kQ1ltY0dGdVpXd3VZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2RoWTJOdmNtUnBiMjRuS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUhCaGJtVnNMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJRzUxYkd3N1hISmNiaUFnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2NHRnVaV3d1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnY0dGdVpXd3VjMk55YjJ4c1NHVnBaMmgwSUNzZ1hDSndlRndpTzF4eVhHNGdJQ0FnSUNBZ0lDQjlJRnh5WEc0Z0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOU95QmNjbHh1SUNCOU8xeHlYRzRnSUdaMWJtTjBhVzl1SUdGalkwVnVaMmx1WlNod2FXTnJLU0I3WEhKY2JpQWdJQ0JzWlhRZ1lXTmpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2h3YVdOcktUdGNjbHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV05qTG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJR0ZqWTF0cFhTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lZMnhwWTJ0Y0lpd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2hjSW1GamRHbDJaVndpS1R0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnY0dGdVpXd2dQU0IwYUdsekxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp6dGNjbHh1SUNBZ0lDQWdJQ0FnYVdZZ0tIQmhibVZzTG5OMGVXeGxMbTFoZUVobGFXZG9kQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJSEJoYm1Wc0xuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnY0dGdVpXd3VjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdjR0Z1Wld3dWMyTnliMnhzU0dWcFoyaDBJQ3NnWENKd2VGd2lPMXh5WEc0Z0lDQWdJQ0FnSUNCOUlGeHlYRzRnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5T3lCY2NseHVJQ0I5TzF4eVhHNGdJR1oxYm1OMGFXOXVJR0ZrWkZKbGJXOTJaVU5zWVhOektHVnNaVzBzSUdGa1pDa2dlMXh5WEc0Z0lDQWdhV1lnS0NRb2QybHVaRzkzS1M1M2FXUjBhQ2dwSUR3OUlEa3dNQ2tnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG1Ga1pFTnNZWE56S0dGa1pDazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuSmxiVzkyWlVOc1lYTnpLR0ZrWkNrN1hISmNiaUFnSUNCOU8xeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnWVdSa1VtVnRiM1psUTJ4aGMzTmZOelkzS0dWc1pXMHNJR0ZrWkNrZ2UxeHlYRzRnSUNBZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRDQ5SURjMk55a2dlMXh5WEc0Z0lDQWdJQ0FrS0dWc1pXMHBMbUZrWkVOc1lYTnpLR0ZrWkNrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5KbGJXOTJaVU5zWVhOektHRmtaQ2s3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJSDA3WEhKY2JpQWdYSEpjYmlBZ1puVnVZM1JwYjI0Z2IzQmxibEJ2Y0ZWd0tHVnNaVzBwSUh0Y2NseHVJQ0FnSUNRb1pXeGxiU2t1WVdSa1EyeGhjM01vSjJGamRHbDJaU2NwT3lBZ1hISmNiaUFnSUNBa0tDZGliMlI1SnlrdVlXUmtRMnhoYzNNb0oyMXZaR0ZzSnlrN1hISmNiaUFnZlR0Y2NseHVJQ0JtZFc1amRHbHZiaUJqYkc5elpWQnZjRlZ3S0dWc1pXMHBJSHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwT3lBZ1hISmNiaUFnSUNBa0tDZGliMlI1SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjF2WkdGc0p5azdYSEpjYmlBZ2ZUdGNjbHh1SUNCcVVYVmxjbmt1WlhoMFpXNWtLR3BSZFdWeWVTNTJZV3hwWkdGMGIzSXViV1Z6YzJGblpYTXNJSHRjY2x4dUlDQWdJSEpsY1hWcGNtVmtPaUJjSXRDZjBMN1F1OUMxSU5HUDBMTFF1OUdQMExYUmd0R0IwWThnMEw3UXNkR1AwTGZRc05HQzBMWFF1OUdNMEwzUmk5QzhYQ0lzWEhKY2JpQWdJQ0J5WlcxdmRHVTZJRndpMEovUXZ0QzcwTFVnMFkvUXN0QzcwWS9RdGRHQzBZSFJqeURRdnRDeDBZL1F0OUN3MFlMUXRkQzcwWXpRdmRHTDBMeGNJaXhjY2x4dUlDQWdJR1Z0WVdsc09pQmNJdENTMExMUXRkQzAwTGpSZ3RDMUlOQzYwTDdSZ05HQTBMWFF1dEdDMEwzUmk5QzVJTkdOMEx2UXRkQzYwWUxSZ05DKzBMM1F2ZEdMMExrZzBMRFF0TkdBMExYUmdWd2lMRnh5WEc0Z0lIMHBPMXh5WEc0Z0lDUXVkbUZzYVdSaGRHOXlMbUZrWkUxbGRHaHZaQ2hjSWtWTlFVbE1YQ0lzSUdaMWJtTjBhVzl1S0haaGJIVmxMQ0JsYkdWdFpXNTBLU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXdkR2x2Ym1Gc0tHVnNaVzFsYm5RcElIeDhJQzllVzJFdGVrRXRXakF0T1M1ZkxWMHJRRnRoTFhwQkxWb3dMVGt0WFN0Y1hDNWJZUzE2UVMxYUxsMTdNaXcxZlNRdmFTNTBaWE4wS0haaGJIVmxLVHRjY2x4dUlDQjlMQ0JjSXRDUzBMTFF0ZEMwMExqUmd0QzFJTkM2MEw3UmdOR0EwTFhRdXRHQzBMM1JpOUM1SU5HTjBMdlF0ZEM2MFlMUmdOQyswTDNRdmRHTDBMa2cwTERRdE5HQTBMWFJnVndpS1R0Y2NseHVJQ0JtZFc1amRHbHZiaUIyWVd4cFpHRjBiM0pHYjNKdEtHVnNaVzBwSUh0Y2NseHVJQ0FnSUNRb1pXeGxiU2t1ZG1Gc2FXUmhkR1VvZTF4eVhHNGdJQ0FnSUNCeWRXeGxjem9nZTF4eVhHNGdJQ0FnSUNBZ0lIQnpkMjl5WkRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnY21WeGRXbHlaV1E2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNCdGFXNXNaVzVuZEdnNklEWXNYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQmxiV0ZwYkY5dU9sd2ljbVZ4ZFdseVpXUWdSVTFCU1V4Y0lpeGNjbHh1SUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnYldWemMyRm5aWE02SUh0Y2NseHVJQ0FnSUNBZ0lDQndjM2R2Y21RNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUcxcGJteGxibWQwYURvZ0o5Q2MwTGpRdmRDNDBMelFzTkM3MFl6UXZkQ3cwWThnMExUUXU5QzQwTDNRc0NEUXY5Q3cwWURRdnRDNzBZOGdOaURSZ2RDNDBMelFzdEMrMEx2UXZ0Q3lKMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lIMDdYSEpjYmlBZ1puVnVZM1JwYjI0Z1lXUmtTRzkyWlhJb1pXeGxiU2tnZXlCY2NseHVJQ0FnSUNRb1pXeGxiU2t1WVdSa1EyeGhjM01vSjJsdUxXaHZkbVZ5SnlrN0lGeHlYRzRnSUgwN1hISmNiaUFnWm5WdVkzUnBiMjRnY21WdGIzWmxTRzkyWlhJb1pXeGxiU2tnZXlCY2NseHVJQ0FnSUNRb1pXeGxiU2t1Y21WdGIzWmxRMnhoYzNNb0oybHVMV2h2ZG1WeUp5azdJRnh5WEc0Z0lIMDdYSEpjYmlBZ1puVnVZM1JwYjI0Z1oyOVViME4xY25KbGJtTjVLR1ZzWlcwcElIdGNjbHh1SUNBZ0lHeGxkQ0J1ZFcxaVpYSlViMFp2Y20xaGRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29aV3hsYlNrN1hISmNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiV0psY2xSdlJtOXliV0YwTG14bGJtZDBhRHNnYVNzcklDa2dlMXh5WEc0Z0lDQWdJQ0FnYkdWMElIUnZUblZ0WWlBOUlDdHVkVzFpWlhKVWIwWnZjbTFoZEZ0cFhTNXBibTVsY2toVVRVdzdYSEpjYmlBZ0lDQWdJQ0JzWlhRZ1ptOXliV0YwVG5WdElEMGdibVYzSUVsdWRHd3VUblZ0WW1WeVJtOXliV0YwS0NkeWRTMVNWU2NzSUhzZ2MzUjViR1U2SUNkamRYSnlaVzVqZVNjc0lHTjFjbkpsYm1ONU9pQW5VbFZDSnl3Z2JXbHVhVzExYlVaeVlXTjBhVzl1UkdsbmFYUnpPaUF3SUgwcExtWnZjbTFoZENoMGIwNTFiV0lwTzF4eVhHNGdJQ0FnSUNBZ2JuVnRZbVZ5Vkc5R2IzSnRZWFJiYVYwdWFXNXVaWEpJVkUxTUlEMGdabTl5YldGMFRuVnRPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMDdYSEpjYmlBZ1hISmNiaUFnWm5WdVkzUnBiMjRnWTJobFkydENiM2hGYm1kcGJtVW9aV3hsYlNrZ2UxeHlYRzRnSUNBZ2JHVjBJR052ZFc1MElEMGdNRHRjY2x4dUlDQWdJQ1FvWld4bGJTa3VZMmhoYm1kbEtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnYVdZZ0tDUW9kR2hwY3lrdWNISnZjQ2duWTJobFkydGxaQ2NwS1NCN1hISmNiaUFnSUNBZ0lDQWdZMjkxYm5Rckt6dGNjbHh1SUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JqYjNWdWRDMHRPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUdOb1pXTm9RblJ1S0hSb2FYTXNJR052ZFc1MEtUdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5SelZXNTBhV3dvSnk1amIyNTBaVzUwTFdacGJIUmxjaWNwTG01bGVIUW9KeTVpZEc0dGQzSmhjSEJsY2ljcExtTm9hV3hrY21WdUtDY3VjM1JoZEdVdGMyVnNaV04wSnlrdVkyaHBiR1J5Wlc0b0p5NXVkVzFpTFhObGJHVmpkQ2NwTG1Ob2FXeGtjbVZ1S0NkemNHRnVKeWt1YUhSdGJDaGpiM1Z1ZENrN1hISmNiaUFnSUNCOUtUdGNjbHh1SUNCOU8xeHlYRzRnSUZ4eVhHNGdJR1oxYm1OMGFXOXVJR05vWldOb1FuUnVLR1ZzWlcwc0lHRXBJSHRjY2x4dUlDQWdJR2xtSUNoaElENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkSE5WYm5ScGJDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUp5a3VibVY0ZENnbkxtSjBiaTEzY21Gd2NHVnlKeWt1WTJocGJHUnlaVzRvSnk1bWFXeDBaWEl0WW5SdUp5a3VjbVZ0YjNabFEyeGhjM01vSjI1dkxXRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLR1ZzWlcwcExuQmhjbVZ1ZENnbkxtWnBiSFJsY2kxcGRHVnRjeWNwTG5CaGNtVnVkSE5WYm5ScGJDZ25MbVpwYkhSbGNpMXBkR1Z0Y3ljcExuQnlaWFlvS1M1aFpHUkRiR0Z6Y3lnbmMyVnNaV04wSnlrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkSE5WYm5ScGJDZ25MbU52Ym5SbGJuUXRabWxzZEdWeUp5a3VibVY0ZENnbkxtSjBiaTEzY21Gd2NHVnlKeWt1WTJocGJHUnlaVzRvSnk1bWFXeDBaWEl0WW5SdUp5a3VZV1JrUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG5CaGNtVnVkQ2duTG1acGJIUmxjaTFwZEdWdGN5Y3BMbkJoY21WdWRITlZiblJwYkNnbkxtWnBiSFJsY2kxcGRHVnRjeWNwTG5CeVpYWW9LUzV5WlcxdmRtVkRiR0Z6Y3lnbmMyVnNaV04wSnlrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNGdJR1oxYm1OMGFXOXVJSEpsYzJWMFUyVnNaV04wS0dWc1pXMHNJR0p2ZUNrZ2UxeHlYRzRnSUNBZ0pDaGxiR1Z0S1M1amJHbGpheWhtZFc1amRHbHZiaUFvWlNrZ2UxeHlYRzRnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ0lDQWdJQ1FvWW05NEtTNXdjbTl3S0NkamFHVmphMlZrSnl3Z1ptRnNjMlVwTzF4eVhHNGdJQ0FnSUNBa0tHVnNaVzBwTG01bGVIUW9KeTV1ZFcxaUxYTmxiR1ZqZENjcExtTm9hV3hrY21WdUtDZHpjR0Z1SnlrdWFIUnRiQ2d3S1R0Y2NseHVJQ0FnSUNBZ1kyOTFiblFnUFNBd08xeHlYRzRnSUNBZ0lDQmphR1ZqYUVKMGJpaGliM2dwTzF4eVhHNGdJQ0FnZlNrN1hISmNiaUFnZlR0Y2NseHVJQ0JtZFc1amRHbHZiaUJwYm1sMFVtRnVaMlZUYkdsa1pYSW9LU0I3SUZ4eVhHNGdJQ0FnZG1GeUlDUnlZVzVuWlNBOUlDUW9YQ0l1YW5NdGNtRnVaMlV0YzJ4cFpHVnlYQ0lwTEZ4eVhHNGdJQ0FnSkdsdWNIVjBSbkp2YlNBOUlDUW9YQ0l1YW5NdGFXNXdkWFF0Wm5KdmJWd2lLU3hjY2x4dUlDQWdJQ1JwYm5CMWRGUnZJRDBnSkNoY0lpNXFjeTFwYm5CMWRDMTBiMXdpS1N4Y2NseHVJQ0FnSUdsdWMzUmhibU5sTEZ4eVhHNGdJQ0FnYldsdUlEMGdNQ3hjY2x4dUlDQWdJRzFoZUNBOUlERXdNREF3TUN4Y2NseHVJQ0FnSUdaeWIyMGdQU0F3TEZ4eVhHNGdJQ0FnZEc4Z1BTQXdPMXh5WEc0Z0lDQWdKSEpoYm1kbExtbHZibEpoYm1kbFUyeHBaR1Z5S0h0Y2NseHVJQ0FnSUZ4MElDQnphMmx1T2lCY0luSnZkVzVrWENJc1hISmNiaUFnSUNBZ0lDQWdkSGx3WlRvZ1hDSmtiM1ZpYkdWY0lpeGNjbHh1SUNBZ0lDQWdJQ0J0YVc0NklHMXBiaXhjY2x4dUlDQWdJQ0FnSUNCdFlYZzZJRzFoZUN4Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0T2lBd0xGeHlYRzRnSUNBZ0lDQWdJSFJ2T2lBeE1EQXdNREFzWEhKY2JpQWdJQ0FnSUNBZ2IyNVRkR0Z5ZERvZ2RYQmtZWFJsU1c1d2RYUnpMRnh5WEc0Z0lDQWdJQ0FnSUc5dVEyaGhibWRsT2lCMWNHUmhkR1ZKYm5CMWRITmNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdhVzV6ZEdGdVkyVWdQU0FrY21GdVoyVXVaR0YwWVNoY0ltbHZibEpoYm1kbFUyeHBaR1Z5WENJcE8xeHlYRzRnSUNBZ1puVnVZM1JwYjI0Z2RYQmtZWFJsU1c1d2RYUnpJQ2hrWVhSaEtTQjdYSEpjYmlBZ0lDQmNkR1p5YjIwZ1BTQmtZWFJoTG1aeWIyMDdYSEpjYmlBZ0lDQWdJQ0FnZEc4Z1BTQmtZWFJoTG5Sdk8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNScGJuQjFkRVp5YjIwdWNISnZjQ2hjSW5aaGJIVmxYQ0lzSUdaeWIyMHBPMXh5WEc0Z0lDQWdJQ0FnSUNScGJuQjFkRlJ2TG5CeWIzQW9YQ0oyWVd4MVpWd2lMQ0IwYnlrN1hIUmNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lDUnBibkIxZEVaeWIyMHViMjRvWENKcGJuQjFkRndpTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmhiQ0E5SUNRb2RHaHBjeWt1Y0hKdmNDaGNJblpoYkhWbFhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSFpoYkdsa1lYUmxYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiQ0E4SUcxcGJpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3dnUFNCdGFXNDdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMllXd2dQaUIwYnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXd2dQU0IwYnp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ2FXNXpkR0Z1WTJVdWRYQmtZWFJsS0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KdmJUb2dkbUZzWEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlLVHRjY2x4dUlDQWdJRnh5WEc0Z0lDQWdKR2x1Y0hWMFZHOHViMjRvWENKcGJuQjFkRndpTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmhiQ0E5SUNRb2RHaHBjeWt1Y0hKdmNDaGNJblpoYkhWbFhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSFpoYkdsa1lYUmxYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiQ0E4SUdaeWIyMHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzSUQwZ1puSnZiVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiQ0ErSUcxaGVDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3dnUFNCdFlYZzdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJR2x1YzNSaGJtTmxMblZ3WkdGMFpTaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnZPaUIyWVd4Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJSDA3WEhKY2JpQWdLR1oxYm1OMGFXOXVLQ1FwZTF4eVhHNGdJQ0FnSUNBZ0lDUW9kMmx1Wkc5M0tTNXZiaWhjSW14dllXUmNJaXhtZFc1amRHbHZiaWdwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdKQ2hjSWk1a1pYTmphM1J2Y0MxbWFXeDBaWEl0WTI5dWRHRnBibVZ5SUM1amIyNTBaVzUwTFdacGJIUmxjaUF1Wm1sc2RHVnlMV2wwWlcxY0lpa3ViVU4xYzNSdmJWTmpjbTlzYkdKaGNpaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQjBhR1Z0WlRwY0ltMTVMWFJvWlcxbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSkNoY0lpNXRiMkpwYkdVdFptbHNkR1Z5TFdOdmJuUmhhVzVsY2lBdVkyOXVkR1Z1ZEMxbWFXeDBaWElnTG0xdllpMWphR1ZqYXkxcGRHVnRYQ0lwTG0xRGRYTjBiMjFUWTNKdmJHeGlZWElvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnZEdobGJXVTZYQ0p0ZVMxMGFHVnRaVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDUW9YQ0l1WVd4c0xXeGhibWN0YVhSbGJWd2lLUzV0UTNWemRHOXRVMk55YjJ4c1ltRnlLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJSFJvWlcxbE9sd2liWGt0ZEdobGJXVmNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQjlLU2hxVVhWbGNua3BPMXh5WEc0Z0lHWjFibU4wYVc5dUlHTnZiV1VvWld4bGJTa2dlMXh5WEc0Z0lDQWdkbUZ5SUdSdlkxWnBaWGRVYjNBZ1BTQWtLSGRwYm1SdmR5a3VjMk55YjJ4c1ZHOXdLQ2tzWEhKY2JpQWdJQ0FnSUdSdlkxWnBaWGRDYjNSMGIyMGdQU0JrYjJOV2FXVjNWRzl3SUNzZ0pDaDNhVzVrYjNjcExtaGxhV2RvZENncExGeHlYRzRnSUNBZ0lDQmxiR1Z0Vkc5d0lEMGdKQ2hsYkdWdEtTNXZabVp6WlhRb0tTNTBiM0FzWEhKY2JpQWdJQ0FnSUdWc1pXMUNiM1IwYjIwZ1BTQmxiR1Z0Vkc5d0lDc2dKQ2hsYkdWdEtTNW9aV2xuYUhRb0tUdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdLQ2hsYkdWdFFtOTBkRzl0SUR3OUlHUnZZMVpwWlhkQ2IzUjBiMjBwSUNZbUlDaGxiR1Z0Vkc5d0lENDlJR1J2WTFacFpYZFViM0FwS1R0Y2NseHVJQ0I5WEhKY2JpQWdJQ1FvSnk1bVpXRjBkWEpsYzE5cGRHVnRjeUF1YzJWaGNtTm9KeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncElENDlJRGt3TUNrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2RvWldGa1pYSWdMbk5sWVhKamFDMW9aV0ZrWlhJdGJHbHVaU2NwTG5SdloyZHNaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5Rb0tTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSUNRb0oySnZaSGtuS1M1MGIyZG5iR1ZEYkdGemN5Z25iVzlrWVd3bktUdGNjbHh1SUNBZ0lDQWdhV1lnS0NRb0oySnZaSGsrWkdsMkp5a3VhR0Z6UTJ4aGMzTW9KMjkyWlhKc1lYa25LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDUW9KeTV2ZG1WeWJHRjVKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25QR1JwZGlCamJHRnpjejFjSW05MlpYSnNZWGxjSWo0OEwyUnBkajRuS1M1d2NtVndaVzVrVkc4b0oySnZaSGtuS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0pDZ25MbTFsYm5WZmJXOWlhV3hsSnlrdVlXUmtRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLQ2RpYjJSNUp5a3VZV1JrUTJ4aGMzTW9KMjF2WkdGc0p5azdYSEpjYmlBZ0lDQWdJQ1FvSnk1elpXRnlZMmd0ZDNKaGNIQmxjaUF1Wm05eWJTQStJR2x1Y0hWMEp5a3VabTlqZFhNb0tUdGNjbHh1SUNBZ0lDQjlPMXh5WEc0Z0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4eVhHNGdJQ0I5S1R0Y2NseHVJQ0FrS0NjdWMyVmhjbU5vTFdobFlXUmxjaTFzYVc1bElITjJaeTVqYkc5elpTY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ1FvSjJobFlXUmxjaUF1YzJWaGNtTm9MV2hsWVdSbGNpMXNhVzVsSnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdKQ2duTG1abFlYUjFjbVZ6WDJsMFpXMXpKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0pDZ25ZbTlrZVNjcExuSmxiVzkyWlVOc1lYTnpLQ2R0YjJSaGJDY3BPMXh5WEc0Z0lDQWdKQ2duTG05MlpYSnNZWGtuS1M1eVpXMXZkbVVvS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdVluVnlaMlZ5TFcxbGJuVW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FrS0NjdWJXVnVkVjl0YjJKcGJHVW5LUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWs3SUNCY2NseHVJQ0FnSUNRb0oySnZaSGtuS1M1aFpHUkRiR0Z6Y3lnbmJXOWtZV3duS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdWJXVnVkVjl0YjJKcGJHVWdMbTF2WW1sc1pTMW9aV0ZrWlhJdFkyOXVkR0ZwYm1WeUlDNWpiRzl6WlNjcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDUW9KeTV0Wlc1MVgyMXZZbWxzWlNjcExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ1FvSjJKdlpIa25LUzV5WlcxdmRtVkRiR0Z6Y3lnbmJXOWtZV3duS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdWJtRjJYM2R5WVhCd1pYSWdMbTFsYm5VZ0xtMWxiblZmYVhSbGJYTW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FrS0NjdWJtRjJYM2R5WVhCd1pYSWdMbTFsYm5VZ0xtMWxiblZmYVhSbGJYTW5LUzV5WlcxdmRtVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBa0tIUm9hWE1wTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0I5S1R0Y2NseHVJQ0FrS0NjdWJXOWlhV3hsTFcxbGJuVXRkM0poY0hCbGNpQXViV1Z1ZFNBdWJXVnVkVjlwZEdWdGN5Y3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ1FvSnk1dGIySnBiR1V0YldWdWRTMTNjbUZ3Y0dWeUlDNXRaVzUxSUM1dFpXNTFYMmwwWlcxekp5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSkNoMGFHbHpLUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG0xdllsOXpkV0pmYldWdWRWOXBkR1Z0Y3ljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2drS0NjdWJXOWlYM04xWWw5dFpXNTFYMmwwWlcxekp5a3VhR0Z6UTJ4aGMzTW9KMkZqZEdsMlpTY3BLU0I3WEhKY2JpQWdJQ0FnSUNRb0p5NXRiMkpmYzNWaVgyMWxiblZmYVhSbGJYTW5LUzV5WlcxdmRtVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0lDUW9kR2hwY3lrdVlXUmtRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sTzF4eVhHNGdJQ0FnYVdZZ0tDUW9kR2hwY3lrdWFHRnpRMnhoYzNNb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmlBZ0lDQWdJQ1FvZEdocGN5a3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzVoWkdSRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJQ0FnWEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG5CeWIyMXZYMnhwYm1VZ2MzWm5KeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUW9LUzVqYzNNb0oyaGxhV2RvZENjc0lDY3dKeWs3WEhKY2JpQWdJQ0FrS0hSb2FYTXBMbkJoY21WdWRDZ3BMbU56Y3lnbmRtbHphV0pwYkdsMGVTY3NJQ2RvYVdSa1pXNG5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQmhaR1JTWlcxdmRtVkRiR0Z6Y3lnbkxtbHVabTh0Wm5KaGJXVWdMbWx1Wm04dFkyOXVkR1Z1ZEMxM2NtRndjR1Z5UGk1MGFYUnNaU2NzSjJGalkyOXlaR2x2YmkxaWRHNG5LVHRjY2x4dUlDQmhaR1JTWlcxdmRtVkRiR0Z6Y3lnbmMyVmpkR2x2Ymk1cGJtWnZJQzVwYm1adkxXMWxiblV0ZDNKaGNIQmxjaWNzSUNkaFkyTnZjbVJwYjI0bktUdGNjbHh1SUNCaFpHUlNaVzF2ZG1WRGJHRnpjMTgzTmpjb0p5NW5ZV3hzTFhkeVlYQndMVzFoYVc0bkxDQW5iRzloWkNjcE8xeHlYRzRnSUNRb2QybHVaRzkzS1M1eVpYTnBlbVVvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ1lXUmtVbVZ0YjNabFEyeGhjM01vSnk1cGJtWnZMV1p5WVcxbElDNXBibVp2TFdOdmJuUmxiblF0ZDNKaGNIQmxjajR1ZEdsMGJHVW5MQ2RoWTJOdmNtUnBiMjR0WW5SdUp5azdYSEpjYmlBZ0lDQmhaR1JTWlcxdmRtVkRiR0Z6Y3lnbmMyVmpkR2x2Ymk1cGJtWnZJQzVqYjI1MFlXbHVaWElnTG1sdVptOHRabkpoYldVZ0xtbHVabTh0YldWdWRTMTNjbUZ3Y0dWeUp5d2dKMkZqWTI5eVpHbHZiaWNwTzF4eVhHNGdJQ0FnYldWdWRVRmpZMjl5WkdsdmJrMXZkbVZ5S0NrN1hISmNiaUFnSUNCaFpHUlNaVzF2ZG1WRGJHRnpjMTgzTmpjb0p5NW5ZV3hzTFhkeVlYQndMVzFoYVc0bkxDQW5iRzloWkNjcE8xeHlYRzRnSUgwcE8xeHlYRzRnSUcxbGJuVkJZMk52Y21ScGIyNU5iM1psY2lncE8xeHlYRzRnSUdGalkwVnVaMmx1WlNnbkxtRmpZeTF2Y0dWdUp5azdYSEpjYmlBZ1puVnVZM1JwYjI0Z2MyeHBZMlZUWlc1MFpXNWpaU2h4TENCelpXNTBaVzVqWlNrZ2UxeHlYRzRnSUNBZ2JHVjBJSE5wZW1VZ1BTQnhMRnh5WEc0Z0lDQWdJQ0J1WlhkelEyOXVkR1Z1ZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b2MyVnVkR1Z1WTJVcE8xeHlYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVaWGR6UTI5dWRHVnVkQzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ0lDQnBaaUFvYm1WM2MwTnZiblJsYm5SYmFWMHVhVzV1WlhKSVZFMU1MbXhsYm1kMGFDQStJSE5wZW1VcElIdGNjbHh1SUNBZ0lDQWdJQ0FnWEhSdVpYZHpRMjl1ZEdWdWRGdHBYUzVwYm01bGNraFVUVXdnUFNCdVpYZHpRMjl1ZEdWdWRGdHBYUzVwYm01bGNraFVUVXd1YzJ4cFkyVW9NQ3dnYzJsNlpTa2dLeUFuSUM0dUxpYzdYSEpjYmlBZ0lDQWdJSDA3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJSDA3SUNBZ0lGeHlYRzRnSUNBZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRHc5SURNMU55a2dlMXh5WEc0Z0lDQWdJQ0J6YkdsalpWTmxiblJsYm1ObEtETTBMQ0FuTG1ScGMyTnljSFJwYjI0dFoyOXZaSE10Y3lBK0lIQW5LVHRjY2x4dUlDQWdJQ0FnYzJ4cFkyVlRaVzUwWlc1alpTZ3pNeXdnSnk1a2FYTmpjbkIwYVc5dUxXZHZiMlJ6SUQ0Z2NDY3BPeUJjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR1ZzYzJVZ2FXWWdLQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BJRHc5SURRNE1DQW1KaUFrS0hkcGJtUnZkeWt1ZDJsa2RHZ29LU0ErUFNBek5UY3BJSHRjY2x4dUlDQWdJQ0FnSUNCemJHbGpaVk5sYm5SbGJtTmxLRE00TENBbkxtUnBjMk55Y0hScGIyNHRaMjl2WkhNdGN5QStJSEFuS1R0Y2NseHVJQ0FnSUNBZ0lDQnpiR2xqWlZObGJuUmxibU5sS0RNekxDQW5MbVJwYzJOeWNIUnBiMjR0WjI5dlpITWdQaUJ3SnlrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ2MyeHBZMlZUWlc1MFpXNWpaU2d5Tnl3Z0p5NWthWE5qY25CMGFXOXVMV2R2YjJSekxYTWdQaUJ3SnlrN1hISmNiaUFnSUNBZ0lDQnpiR2xqWlZObGJuUmxibU5sS0RNekxDQW5MbVJwYzJOeWNIUnBiMjR0WjI5dlpITWdQaUJ3SnlrN0lGeHlYRzRnSUNBZ2ZUdGNjbHh1SUNCY2NseHVJQ0IyWVd4cFpHRjBiM0pHYjNKdEtGd2lJM05wWjI0dGFXNWNJaWs3WEhKY2JpQWdkbUZzYVdSaGRHOXlSbTl5YlNoY0lpTnlaWE5sZEMxd1lYTnpYQ0lwTzF4eVhHNGdJQ1FvSnk1amJHOXpaUzF3YjNCMWNDY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR05zYjNObFVHOXdWWEFvSnk1d2IzQjFjQzVoWTNScGRtVW5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Wm1WaGRIVnlaWE5mYVhSbGJYTWdMbUYxZEc5eWFYcGhkR2x2YmljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncGUxeHlYRzRnSUNBZ2IzQmxibEJ2Y0ZWd0tDY2pjRzl3ZFhBdGMybG5iaTFwYmljcE8xeHlYRzRnSUgwcE8xeHlYRzRnSUNRb0p5TndiM0IxY0MxemFXZHVMV2x1SUM1c2FXNXJYM2R5WVhCd1pYSWdZU2NwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNCamJHOXpaVkJ2Y0ZWd0tDY3VjRzl3ZFhBdVlXTjBhWFpsSnlrN1hISmNiaUFnSUNCdmNHVnVVRzl3VlhBb0p5TndiM0IxY0MxeVpYTmxkQzF3WVhOekp5azdYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbXhoYm1jdGQzSmhjSEJsY2lBdWMyVnNaV04wTFd4aGJtY25LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSkNoMGFHbHpLUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0pDaDBhR2x6S1M1amFHbHNaSEpsYmlncExteGhjM1FvS1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ2ZTbGNjbHh1SUNBa0tDY3ViV1Z1ZFY5dGIySnBiR1VnTG5ObFlYSmphQzFzYVc1bEp5a3VZMmhoYm1kbEtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR2xtSUNna0tIUm9hWE1wTG5aaGJDZ3BMbXhsYm1kMGFDQStJREFwSUh0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1aFpHUkRiR0Z6Y3lnblpXNTBaWEluS1R0Y2NseHVJQ0FnSUNBZ0pDZ25MbTFsYm5WZmJXOWlhV3hsSUM1elpXRnlZMmduS1M1aFpHUkRiR0Z6Y3lnblpXNTBaWEluS1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUdsbUlDZ2tLQ2N1YldWdWRWOXRiMkpwYkdVZ0xuTmxZWEpqYUNjcExtaGhjME5zWVhOektDZGxiblJsY2ljcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSkNnbkxtMWxiblZmYlc5aWFXeGxJQzV6WldGeVkyZ25LUzV5WlcxdmRtVkRiR0Z6Y3lnblpXNTBaWEluS1R0Y2NseHVJQ0FnSUNBZ0lDQWtLSFJvYVhNcExuSmxiVzkyWlVOc1lYTnpLQ2RsYm5SbGNpY3BPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlibHh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2hjSWk1emRXSmZiV1Z1ZFY5cGRHVnRjeUErSUdGY0lpa3VhRzkyWlhJb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdZV1JrU0c5MlpYSW9kR2hwY3k1d1lYSmxiblJGYkdWdFpXNTBLVHRjY2x4dUlDQjlMQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNCeVpXMXZkbVZJYjNabGNpaDBhR2x6TG5CaGNtVnVkRVZzWlcxbGJuUXBPMXh5WEc0Z0lIMHBPMXh5WEc0Z0lDUW9YQ0l1YldWdWRWOXBkR1Z0Y3lBK0lHRmNJaWt1YUc5MlpYSW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnWVdSa1NHOTJaWElvZEdocGN5azdYSEpjYmlBZ2ZTd2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnY21WdGIzWmxTRzkyWlhJb2RHaHBjeWs3WEhKY2JpQWdJSDBwTzF4eVhHNGdJQ1FvWENJdVptVmhkSFZ5WlhOZmFYUmxiWE1nUGlCaFhDSXBMbWh2ZG1WeUtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR0ZrWkVodmRtVnlLSFJvYVhNdWNHRnlaVzUwUld4bGJXVnVkQ2s3WEhKY2JpQWdmU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ2NtVnRiM1psU0c5MlpYSW9kR2hwY3k1d1lYSmxiblJGYkdWdFpXNTBLVHRjY2x4dUlDQjlLVHRjY2x4dUlDQnNaWFFnYUdWcFoyaDBTR1ZoWkdWeUlEMGdKQ2duYUdWaFpHVnlKeWt1YUdWcFoyaDBLQ2s3WEhKY2JpQWdKQ2gzYVc1a2IzY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR2xtSUNna0tDZG9aV0ZrWlhJbktTNW9aV2xuYUhRb0tTQThJR2hsYVdkb2RFaGxZV1JsY2lrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2R0WVdsdUp5a3VZM056S0Nkd1lXUmthVzVuSnl3Z0pDZ25hR1ZoWkdWeUp5a3VhR1ZwWjJoMEtDa2dLeUFuY0hnbktUdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1SUNCbmIxUnZRM1Z5Y21WdVkza29KeTV3Y21salpTY3BPMXh5WEc0Z0lHZHZWRzlEZFhKeVpXNWplU2duTG5CeWFXTmxYMjVsZHljcE8xeHlYRzRnSUdkdlZHOURkWEp5Wlc1amVTZ25MbkJ5YVdObFgyOXNaQ2NwTzF4eVhHNGdJQ1FvSnk1a1pYTmphM1J2Y0MxbWFXeDBaWEl0WTI5dWRHRnBibVZ5SUM1bWFXeDBaWEl0YUdWaFpHVnlKeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDRWtLSFJvYVhNcExtaGhjME5zWVhOektDZGhZM1JwZG1VbktTa2dlMXh5WEc0Z0lDQWdJQ0FrS0NjdVpHVnpZMnQwYjNBdFptbHNkR1Z5TFdOdmJuUmhhVzVsY2lBdVptbHNkR1Z5TFdobFlXUmxjaWNwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2duTG1SbGMyTnJkRzl3TFdacGJIUmxjaTFqYjI1MFlXbHVaWElnTG1acGJIUmxjaTFvWldGa1pYSW5LUzV1WlhoMEtDa3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBa0tDY3ViRzlqYXkxd2IybHVkR1Z5SnlrdWNtVnRiM1psS0NrN1hISmNiaUFnSUNBZ0lHbG1JQ2drS0hSb2FYTXBMbWhoYzBOc1lYTnpLQ2R1YnkxaFkzUnBkbVVuS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWtLSFJvYVhNcExtRmtaRU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbTVsZUhRb0tTNWhaR1JEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ0FnSkNoY0lqeGthWFlnWTJ4aGMzTTlKMnh2WTJzdGNHOXBiblJsY2ljK1BDOWthWFkrWENJcExtRndjR1Z1WkZSdktGd2lZbTlrZVZ3aUtUdGNjbHh1SUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdKQ2duTG14dlkyc3RjRzlwYm5SbGNpY3BMbkpsYlc5MlpTZ3BPMXh5WEc0Z0lDQWdJQ0FrS0hSb2FYTXBMbkpsYlc5MlpVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1dVpYaDBLQ2t1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgwcE8xeHlYRzRnSUNRb1pHOWpkVzFsYm5RcExtTnNhV05yS0daMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0lDQnBaaUFvWlM1MFlYSm5aWFF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0Nkd2IzQjFjRjlmZDNKaGNIQmxjaWNwS1NCN1hISmNiaUFnSUNBZ0lHTnNiM05sVUc5d1ZYQW9KeTV3YjNCMWNDNWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1SUNBa0tHUnZZM1Z0Wlc1MEtTNWpiR2xqYXlobWRXNWpkR2x2YmlBb1pTa2dlMXh5WEc0Z0lDQWdhV1lnS0dVdWRHRnlaMlYwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmJHOWpheTF3YjJsdWRHVnlKeWtwSUh0Y2NseHVJQ0FnSUNBZ0pDZ25MbVpwYkhSbGNpMW9aV0ZrWlhJbktTNXlaVzF2ZG1WRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JpQWdJQ0FnSUNRb0p5NW1hV3gwWlhJdGFHVmhaR1Z5SnlrdWJtVjRkQ2dwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2duTG14dlkyc3RjRzlwYm5SbGNpY3BMbkpsYlc5MlpTZ3BPMXh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hsTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjI5MlpYSnNZWGtuS1NrZ2UxeHlYRzRnSUNBZ0lDQWtLQ2RvWldGa1pYSWdMbk5sWVhKamFDMW9aV0ZrWlhJdGJHbHVaU2NwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdKQ2duTG1abFlYUjFjbVZ6WDJsMFpXMXpKeWt1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWtLQ2RpYjJSNUp5a3VjbVZ0YjNabFEyeGhjM01vSjIxdlpHRnNKeWs3WEhKY2JpQWdJQ0FnSUNRb0p5NXZkbVZ5YkdGNUp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZTazdYSEpjYmlBZ0pDZ25MbTF2Y21VdGJHVnpjeTFtYVd4MFpYSW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FrS0hSb2FYTXBMblJ2WjJkc1pVTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNRb2RHaHBjeWt1WTJocGJHUnlaVzRvS1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQnBaaUFvSkNoMGFHbHpLUzVvWVhORGJHRnpjeWduWVdOMGFYWmxKeWtwSUh0Y2NseHVJQ0FnSUNBZ0pDaDBhR2x6S1M1d1lYSmxiblFvS1M1aFpHUkRiR0Z6Y3lnbmIzQmxiaWNwTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSkNoMGFHbHpLUzV3WVhKbGJuUW9LUzV5WlcxdmRtVkRiR0Z6Y3lnbmIzQmxiaWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDBwTzF4eVhHNGdJR2x1YVhSU1lXNW5aVk5zYVdSbGNpZ3BPMXh5WEc0Z0lHTm9aV05yUW05NFJXNW5hVzVsS0NjdVltOTRMV05vWldOckxuTnBlbVVuS1R0Y2NseHVJQ0JqYUdWamEwSnZlRVZ1WjJsdVpTZ25MbUp2ZUMxamFHVmpheTVqYjJ4dmNpY3BPMXh5WEc0Z0lHTm9aV05yUW05NFJXNW5hVzVsS0NjdVltOTRMV05vWldOckxtTmhkRjltSnlrN1hISmNiaUFnWTJobFkydENiM2hGYm1kcGJtVW9KeTVpYjNndFkyaGxZMnN1WW5KaGJtUW5LVHRjY2x4dUlDQmphR1ZqYTBKdmVFVnVaMmx1WlNnbkxtSnZlQzFqYUdWamF5NXRZWFJsY21saGJDY3BPMXh5WEc0Z0lHTm9aV05yUW05NFJXNW5hVzVsS0NjdVltOTRMV05vWldOckxtZ25LVHRjY2x4dUlDQnlaWE5sZEZObGJHVmpkQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlMbk5wZW1VZ0xuSmxjMlZ5TFhObGJHVmpkQ2NzSUNjdVltOTRMV05vWldOckxuTnBlbVVuS1R0Y2NseHVJQ0J5WlhObGRGTmxiR1ZqZENnbkxtTnZiblJsYm5RdFptbHNkR1Z5TG1OdmJHOXlJQzV5WlhObGNpMXpaV3hsWTNRbkxDQW5MbUp2ZUMxamFHVmpheTVqYjJ4dmNpY3BPMXh5WEc0Z0lISmxjMlYwVTJWc1pXTjBLQ2N1WTI5dWRHVnVkQzFtYVd4MFpYSXVZMkYwWDJZZ0xuSmxjMlZ5TFhObGJHVmpkQ2NzSUNjdVltOTRMV05vWldOckxtTmhkRjltSnlrN1hISmNiaUFnY21WelpYUlRaV3hsWTNRb0p5NWpiMjUwWlc1MExXWnBiSFJsY2k1aWNtRnVaQ0F1Y21WelpYSXRjMlZzWldOMEp5d2dKeTVpYjNndFkyaGxZMnN1WW5KaGJtUW5LVHRjY2x4dUlDQnlaWE5sZEZObGJHVmpkQ2duTG1OdmJuUmxiblF0Wm1sc2RHVnlMbTFoZEdWeWFXRnNJQzV5WlhObGNpMXpaV3hsWTNRbkxDQW5MbUp2ZUMxamFHVmpheTV0WVhSbGNtbGhiQ2NwTzF4eVhHNGdJSEpsYzJWMFUyVnNaV04wS0NjdVkyOXVkR1Z1ZEMxbWFXeDBaWEl1YUNBdWNtVnpaWEl0YzJWc1pXTjBKeXdnSnk1aWIzZ3RZMmhsWTJzdWFDY3BPMXh5WEc0Z0lDUW9KeTV0YjJKcGJHVXRabWxzZEdWeUxXTnZiblJoYVc1bGNpQXVabWxzZEdWeUxXaGxZV1JsY2ljcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHOXdaVzVRYjNCVmNDZ2tLSFJvYVhNcExtNWxlSFFvS1NrN1hISmNiaUFnZlNrN1hISmNiaUFnSkNnbkxtMXZaR0ZzTFdacGRHVnlJQzUwYVhSc1pTMW1hV3gwWlhJZ2MzWm5KeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnWTJ4dmMyVlFiM0JWY0NnbkxtMXZaR0ZzTFdacGRHVnlKeWs3WEhKY2JpQWdmU2s3WEhKY2JpQWdKQ2duTG0xdllpMW1hV3gwWlhJdGFHVmhaR1Z5SnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0pDaDBhR2x6S1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWtLSFJvYVhNcExuQmhjbVZ1ZENncExuUnZaMmRzWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQjlLVHRjY2x4dUlDQmNjbHh1SUNCc1pYUWdZMjkxYm5RZ1BTQXdPMXh5WEc0Z0lDQWtLQ2N1Ylc5aUxXTm9aV05yTFdsMFpXMXpJQzVpYjNndFkyaGxZMnNuS1M1amFHRnVaMlVvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQnBaaUFvSkNoMGFHbHpLUzV3Y205d0tDZGphR1ZqYTJWa0p5a3BJSHRjY2x4dUlDQWdJQ0FnSUNCamIzVnVkQ3NyTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZkVzUwTFMwN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNBZ0lDQWtLQ2N1Ylc5a1lXd3RjbVZ6WlhRZ2MzQmhiaWNwTG1oMGJXd29KeWduSUNzZ1kyOTFiblFnS3lBbktTY3BYSEpjYmlBZ0lDQWdhV1lnS0dOdmRXNTBJRDRnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdKQ2duTG0xdlpHRnNMWEpsYzJWMEp5a3VjbVZ0YjNabFEyeGhjM01vSjI1dkxXRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWdKQ2duTG0xdlpHRnNMWE4xWW0xcGRDY3BMbkpsYlc5MlpVTnNZWE56S0NkdWJ5MWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdKQ2duTG0xdlpHRnNMWEpsYzJWMEp5a3VZV1JrUTJ4aGMzTW9KMjV2TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBZ0pDZ25MbTF2WkdGc0xYTjFZbTFwZENjcExtRmtaRU5zWVhOektDZHVieTFoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0I5WEhKY2JpQWdJSDBwTzF4eVhHNGdJQ1FvSnk1dGIySXRZMmhsWTJzdGFYUmxiWE1nTG1KdmVDMWphR1ZqYXpwdWIzUW9MbU52Ykc5eUtTY3BMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJR2xtSUNna0tIUm9hWE1wTG5CeWIzQW9KMk5vWldOclpXUW5LU2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdKQ2gwYUdsektTNXdZWEpsYm5SektDY3ViVzlpTFdacGJIUmxjaTFwZEdWdGN5Y3BMbU5vYVd4a2NtVnVLQ2N1Ylc5aUxXWnBiSFJsY2kxb1pXRmtaWEluS1M1aGNIQmxibVFvSnp4emNHRnVJR1JoZEdFdGJtRnRaVDBuS3lBa0tIUm9hWE1wTG01bGVIUW9LUzVvZEcxc0tDa3JKejRvSnlBcklDUW9kR2hwY3lrdWJtVjRkQ2dwTG1oMGJXd29LU0FySUNjcFBDOXpjR0Z1UGljcE8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWtLSFJvYVhNcExuQmhjbVZ1ZEhNb0p5NXRiMkl0Wm1sc2RHVnlMV2wwWlcxekp5a3VZMmhwYkdSeVpXNG9KeTV0YjJJdFptbHNkR1Z5TFdobFlXUmxjaWNwTG1acGJtUW9KM053WVc1YlpHRjBZUzF1WVcxbFBTY3JKQ2gwYUdsektTNXVaWGgwS0NrdWFIUnRiQ2dwS3lkZEp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQjlLVHRjY2x4dUlDQWtLQ2N1Ylc5a1lXd3RjbVZ6WlhRbktTNWpiR2xqYXlobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1Ylc5aUxXTm9aV05yTFdsMFpXMXpJQzVpYjNndFkyaGxZMnNuS1M1d2NtOXdLQ2RqYUdWamEyVmtKeXdnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdKQ2duTG0xdllpMW1hV3gwWlhJdGFHVmhaR1Z5SnlrdVptbHVaQ2duYzNCaGJpY3BMbkpsYlc5MlpTZ3BPMXh5WEc0Z0lDQWdZMjkxYm5RZ1BTQXdPMXh5WEc0Z0lDQWdKQ2duTG0xdlpHRnNMWEpsYzJWMElITndZVzRuS1M1b2RHMXNLQ2NvSnlBcklHTnZkVzUwSUNzZ0p5a25LVHRjY2x4dUlDQWdJQ1FvSnk1dGIyUmhiQzF5WlhObGRDY3BMbUZrWkVOc1lYTnpLQ2R1YnkxaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNRb0p5NXRiMlJoYkMxemRXSnRhWFFuS1M1aFpHUkRiR0Z6Y3lnbmJtOHRZV04wYVhabEp5azdYSEpjYmx4eVhHNGdJSDBwTzF4eVhHNGdJR2xtSUNna0tDY2pZblJ1TFhkaGRHTm9KeWt1YkdWdVozUm9JRDRnTUNrZ2UxeHlYRzRnSUNBZ0lDUW9aRzlqZFcxbGJuUXBMbk5qY205c2JDaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUdsbUlDaGpiMjFsS0NjalluUnVMWGRoZEdOb0p5a3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0pDZ25MbkJ5WlhacFpYY3RhR1ZoWkdWeUxXZHZiMlJ6SnlrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBa0tDY3VjSEpsZG1sbGR5MW9aV0ZrWlhJdFoyOXZaSE1uS1M1aFpHUkRiR0Z6Y3lnbllXTjBhWFpsSnlsY2NseHVJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQjlLVHRjY2x4dUlDQjlPMXh5WEc0Z0lGeHlYRzRnSUd4bGRDQnRiMkpIWVd4c1UyeHBaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1kaGJHd3RkM0poY0hBdGJXRnBiaWNwTEZ4eVhHNGdJQ0FnWTJ4dmMyVkhZV3hzWlhKNUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtZGhiR3d0WTJ4dmMyVXRZblJ1SnlrN1hISmNiaUFnYVdZZ0tHMXZZa2RoYkd4VGJHbGtaWElwSUh0Y2NseHVJQ0FnSUNBZ1pHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlBb1pTa2dlMXh5WEc0Z0lDQWdJQ0FnYVdZZ0tHVXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25aMkZzYkMxM2NtRndjQzF0WVdsdUp5a3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lHMXZZa2RoYkd4VGJHbGtaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYjNCbGJpY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVltOWtlUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2R0YjJSaGJDY3BYSEpjYmlBZ0lDQWdJQ0I5SUdWc2MyVWdleUJ5WlhSMWNtNGdmVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWTJ4dmMyVkhZV3hzWlhKNUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0J0YjJKSFlXeHNVMnhwWkdWeUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyOXdaVzRuS1R0Y2NseHVJQ0FnSUNBZ1pHOWpkVzFsYm5RdVltOWtlUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2R0YjJSaGJDY3BPMXh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdJQ0JjY2x4dUlDQWdJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnpiR2xrWlMweEp5a3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9aU2tnZTF4eVhHNGdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNBZ0lHMXZZa2RoYkd4VGJHbGtaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25iM0JsYmljcE8xeHlYRzRnSUNBZ0lDQmtiMk4xYldWdWRDNWliMlI1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMjF2WkdGc0p5azdYSEpjYmlBZ0lDQWdJSE4zYVhCbGNrZHZiMlJ6TG5Oc2FXUmxWRzhvTVN3Z01DazdYSEpjYmlBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUSW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlneUxDQXdLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUTW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlnekxDQXdLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUUW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlnMExDQXdLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JM05zYVdSbExUVW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hISmNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdiVzlpUjJGc2JGTnNhV1JsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R2Y0dWdUp5azdYSEpjYmlBZ0lDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExtRmtaQ2duYlc5a1lXd25LVHRjY2x4dUlDQWdJQ0FnYzNkcGNHVnlSMjl2WkhNdWMyeHBaR1ZVYnlnMUxDQXdLVHRjY2x4dUlDQWdJSDBwT3lBZ1hISmNiaUFnZlNCbGJITmxJSHNnY21WMGRYSnVJSDA3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1SUNKZExDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaWZRPT1cbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
