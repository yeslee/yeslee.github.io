// window.onload = function () {

$(document).ready(function () {
  setTimeout(function () { overflowText('#home .text-y', 120); }, 0);
  setTimeout(function () { overflowText('.yeslee.home .letter', 100); }, 0);
  setTimeout(function () { overflowText('.big-title .text-y .letter', 50); }, 1000);
  $('#home img').css('animation', 'arrowDown 2s ease 3s infinite normal none running')
  $('#menuToggle').css('opacity', '1')

  //project
  if ($('body').is('.project')) {

    ProjectAnimation('.back');
    ProjectAnimation('.sub');

    setTimeout(function () { $('#p-image-main').addClass('active'); }, 1400);
    setTimeout(function () { overflowText('.text-y', 200); }, 1000);

    //가로스크롤 - 마우스 누르고  
    $('.scroll-item').mousedown(function (event) {
      $(this)
        .data('down', true)
        .data('x', event.clientX)
        .data('scrollLeft', this.scrollLeft)
        .addClass("dragging");

      return false;
    }).mouseup(function (event) {
      $(this)
        .data('down', false)
        .removeClass("dragging");
    }).mousemove(function (event) {
      if ($(this).data('down') == true) {
        this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
      }
    }).mousewheel(function (event, delta) {
      this.scrollLeft -= (delta * 30);
    }).css({
      'overflow': 'hidden',
      'cursor': '-moz-grab'
    });
    $(window).mouseout(function (event) {
      if ($('.team-form-data').data('down')) {
        try {
          if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
            $('.team-form-data').data('down', false);
          }
        } catch (e) { }
      }
    });
  }
});


// Overflow - text  
function overflowText(e, s) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(0%)'
      }, 300);
    }, (i * s));
  });
}

//menu
$('input:checkbox').change(function () {
  if ($(this).is(":checked")) {
    $('#menu').css('transform', 'translate(0%, 0)');
    $('.menu-social-list').css('opacity', '1');
    $('.blackBG').css('height', '100%').css('opacity', '0.4').css('visibility', 'visible').css('transform', 'translateX(0%)').css('cursor', 'pointer');
    menuListFlow('.menu-list.overview  li', 100);
  } else {
    menuClose();
  }
});
$('.menuClose').on('click', function () {
  menuClose();
});
$('.blackBG').on('click', function () {
  menuClose();
});
$('.menuWork').on('click', function () {
  setTimeout(function () { $('.menu-back').css('display', 'block') }, 500);
  $('.menu-list.overview').css('transform', 'translateX(-200%)').css('opacity', '0');
  $('.menu-list.work-menu').css('z-index', '999');
  menuListFlow('.menu-list.work-menu li', 100);
  setTimeout(function () { $('.menu-list.overview').css('transform', 'translateX(0%)').css('opacity', '1'); }, 400);
  setTimeout(function () { $('.menu-list.overview li').css('transform', 'translateX(-200%)').css('opacity', '0').css('color', 'var(--effect-color)') }, 400);
});
$('.menu-back').on('click', function () {
  menuListFlow('.menu-list.overview  li', 100);
  $('.menu-list.work-menu').css('z-index', '0');
  $('.menu-list.work-menu').css('transform', 'translateX(-200%)').css('opacity', '0');
  setTimeout(function () { $('.menu-back').css('display', 'none') }, 400);
  setTimeout(function () { $('.menu-list.work-menu').css('transform', 'translateX(0%)').css('opacity', '1') }, 400);
  setTimeout(function () { $('.menu-list.work-menu li').css('transform', 'translateX(-200%)').css('opacity', '0').css('color', 'var(--effect-color)') }, 400);
});

function menuClose() {
  $('#menu').css('transform', 'translate(-100%, 0)');
  $('.blackBG').css('opacity', '0').css('cursor', 'default');
  $('#menuToggle input').prop('checked', false);
  $('.menu-list.overview').css('transform', 'translateX(0%)').css('opacity', '1');
  $('.menu-list.work-menu').css('transform', 'translateX(0%)').css('opacity', '1');
  $('.menu-social-list').css('opacity', '0');
  setTimeout(function () { $('.blackBG').css('visibility', 'hidden').css('transform', 'translateX(-100%)') }, 800);
  setTimeout(function () { $('.menu-back').css('display', 'none') }, 400);
  setTimeout(function () { $('.menu-list li').css('transform', 'translateX(-200%)').css('opacity', '0').css('color', 'var(--effect-color)') }, 400);
};

//menu Animation
function menuListFlow(e, s) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({ 'transform': 'translateX(0%)', 'opacity': '1', 'color': 'var(--dark-gray)' }, 0);
    }, (i * s));
  });
}

//색션 스크롤
$('.workMenu').on('click', function () {
  var workTop = $("#work").position().top + 20;
  $("html, body").animate({ scrollTop: workTop }, 1000);
});

$('.down-arrow').on('click', function () {
  var workTop = $("#work").position().top;
  $("html, body").animate({ scrollTop: workTop }, 1000);
});

function scrollHandler() {
  if ($('body').is('.mainPage')) {
    if ($(window).scrollTop() >= $('#home').position().top) {
      setTimeout(function () { overflowText('#home .text-y', 120); }, 400);
      setTimeout(function () { overflowText('.yeslee.home .letter', 100); }, 400);
    }
    if ($(window).scrollTop() >= $('#work').position().top - 600) {
      setTimeout(function () { overflowText('#work .text-y', 120); }, 100);
    }
    if ($(window).scrollTop() >= $('#more').position().top - 500) {
      setTimeout(function () { overflowText('#more .text-y', 120); }, 100);
    }
    if ($(window).scrollTop() >= $('.m_one').position().top + 300) {
      $('.img-cover.one').css('transform', 'translateY(-100%)');
      setTimeout(function () { overflowText('.mobileText.one', 120); });
    }
    if ($(window).scrollTop() >= $('.m_two').position().top + 300) {
      $('.img-cover.two').css('transform', 'translateY(-100%)');
      setTimeout(function () { overflowText('.mobileText.two', 120); });
    }
    if ($(window).scrollTop() >= $('.m_three').position().top + 300) {
      $('.img-cover.three').css('transform', 'translateY(-100%)');
      setTimeout(function () { overflowText('.mobileText.three', 120); });
    }
    if ($(window).scrollTop() >= $('.m_four').position().top + 300) {
      $('.img-cover.four').css('transform', 'translateY(-100%)');
      setTimeout(function () { overflowText('.mobileText.four', 120); });
    }
    if ($(window).scrollTop() >= $('.m_five').position().top + 300) {
      $('.img-cover.five').css('transform', 'translateY(-100%)');
      setTimeout(function () { overflowText('.mobileText.five', 120); });
    }
    if ($(window).scrollTop() >= $('.m_six').position().top + 300) {
      $('.img-cover.six').css('transform', 'translateY(-100%)');
      setTimeout(function () { overflowText('.mobileText.six', 120); });
    }
  }
  if ($('body').is('.project')) {
    if ($(window).scrollTop() >= $('.sTV_slide').position().top - 400) {
      $('.slideImage.one').css('transform', 'translateX(-40%)').css('transition-delay', '0s');
      $('.slideImage.two').css('transform', 'translateX(-20%)').css('transition-delay', '0.2s');
      $('.slideImage.three').css('transform', 'translateX(0%)').css('transition-delay', '0.4s');

    }
    if ($(window).scrollTop() >= $('.grid-container').position().top - 800) {
      $('.scroll-item .items').css('left', '60px');
    }
  }
}

$(window).on('scroll', scrollHandler);



// Work - mouseover
$('#work h2 ul li a').on('mouseover', selectMenu);
$('#work h2 ul li a').on('mouseleave', leaveMenu);

function selectMenu(event) {
  var targetClass = event.currentTarget.className;
  // console.log(targetClass);

  $('#work_img').css('display', 'block');
  // $('#work').css('transition', '1.4s ease-out')
  $('sectionTitle').css('transition', '1s ease-out')
  $('#work h2 ul li a').css('opacity', '0.1');
  $('#work .sectionTitle').css('opacity', '0.2')
  $('.' + targetClass).css('opacity', '1');

  setTimeout(function () { textAnimationUp('.' + targetClass + ' .letter', -2); });
  setTimeout(function () { textAnimationDown('.' + targetClass + ' .letter'); }, 200);


  if (targetClass == "one") {
    $('#work').css('background-color', 'pink');
    $('.photo.project01').css('opacity', '1');
    $('#work ul li .sub.list01').css('display', 'block');
  } else if (targetClass == "two") {
    $('#work').css('background-color', 'rgb(178, 135, 144)');
    $('.photo.project02').css('opacity', '1');
    $('#work ul li .sub.list02').css('display', 'block');
  } else if (targetClass == "three") {
    $('#work').css('background-color', 'rgb(58, 135, 144)');
    $('.photo.project03').css('opacity', '1');
  } else if (targetClass == "four") {
    $('#work').css('background-color', 'rgb(20, 150, 144)');
    $('.photo.project04').css('opacity', '1');
  } else if (targetClass == "five") {
    $('#work').css('background-color', 'rgb(138, 135, 144)');
    $('.photo.project05').css('opacity', '1');
  } else if (targetClass == "six") {
    $('#work').css('background-color', 'rgb(100, 135, 144)');
    $('.photo.project06').css('opacity', '1');
  }
}


function leaveMenu() {
  var targetClass = event.currentTarget.className;
  $('#work_img').css('display', 'none');
  $('#work').css('background-color', 'var(--back-sub-color)');
  $('#work .sectionTitle').css('opacity', '1');
  $('#work h2 ul li a').css('color', 'var(--dark-gray)').css('opacity', '1');
  $('#work h2 ul li a .letter').css('transition', 'translateY 0s ease 0s')
  $('#work h2 ul li .text-y').css('transition', 'translateY 0s ease 0s')
  $('.photo').css('opacity', '0');
  $('#work ul li .sub').css('display', 'none');
}

function textSplit(e) {
  $(e).each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
};
textSplit('#work h2 ul li a');
textSplit('.yeslee.home');
textSplit('.big-title .text-y');
textSplit('.grid_right ul li a');

function textAnimationUp(e, n) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(' + n + '%)',
        'transition': '0.8s cubic-bezier(0.2, 1, 0.4, 1)',
      }, 450);
    }, 10 + (i * 40));
  });
}
function textAnimationDown(e, n) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(0%)',
        'transition': '1s cubic-bezier(0.2, 1, 0.4, 1)',
      }, 450);
    }, 10 + (i * 60));
  });
}



//-------------------About-animate-------------------//

//Work
$('.goWork').on('click', function () {
  var experienceTop = $("#index-content-list").position().top - 100;
  $("html, body").animate({ scrollTop: experienceTop }, 1200);
});



//-------------------project-animate-------------------//
function ProjectAnimation(e) {
  $(e).addClass('animate')
  $(e).css('opacity', '1').css('transform', 'translateY(0%)');;
}







