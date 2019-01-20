window.onload = function () {
  setTimeout(function () { overflowText('#home .text-y', 120); }, 0);
  setTimeout(function () { overflowText('.yeslee.home .letter', 100); }, 0);
  $('#home .down-arrow img').css('animation', 'arrowDown 2s ease 2.2s infinite normal none running')
}

$(document).ready(function () {
  //project
  $('.back').click(function () {
    parent.history.back();
    return false;
  });

  ProjectAnimation('.back');
  ProjectAnimation('.p-t');

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


//색션 스크롤
$('.workMenu').on('click', function () {
  var workTop = $("#work").position().top;
  $("html, body").animate({ scrollTop: workTop }, 1000);
});

$('.down-arrow').on('click', function () {
  var workTop = $("#work").position().top;
  $("html, body").animate({ scrollTop: workTop }, 1000);
});


function scrollHandler() {
  if ($(window).scrollTop() >= $('#home').position().top) {
    setTimeout(function () { overflowText('#home .text-y', 120); }, 400);
    setTimeout(function () { overflowText('.yeslee.home .letter', 100); }, 400);
  }
  if ($(window).scrollTop() >= $('#work').position().top - 600) {
    setTimeout(function () { overflowText('#work .text-y', 120); }, 100);
  }
  if ($(window).scrollTop() >= $('#more').position().top - 600) {
    setTimeout(function () { overflowText('#more .text-y', 120); }, 100);
  }
  if ($(window).scrollTop() >= $('.m_one').position().top + 300) {
    $('.img-cover.one').css('transform', 'translateY(-100%)').css('transition', '0.8s 0.6s');
    setTimeout(function () { overflowText('.mobileText.one', 120); });
  }
  if ($(window).scrollTop() >= $('.m_two').position().top + 300) {
    $('.img-cover.two').css('transform', 'translateY(-100%)').css('transition', '0.8s 0.6s');
    setTimeout(function () { overflowText('.mobileText.two', 120); });
  }
  if ($(window).scrollTop() >= $('.m_three').position().top + 300) {
    $('.img-cover.three').css('transform', 'translateY(-100%)').css('transition', '0.8s 0.6s');
    setTimeout(function () { overflowText('.mobileText.three', 120); });
  }
  if ($(window).scrollTop() >= $('.m_four').position().top + 300) {
    $('.img-cover.four').css('transform', 'translateY(-100%)').css('transition', '0.8s 0.6s');
    setTimeout(function () { overflowText('.mobileText.four', 120); });
  }
  if ($(window).scrollTop() >= $('.m_five').position().top + 300) {
    $('.img-cover.five').css('transform', 'translateY(-100%)').css('transition', '0.8s 0.6s');
    setTimeout(function () { overflowText('.mobileText.five', 120); });
  }
  if ($(window).scrollTop() >= $('.m_six').position().top + 300) {
    $('.img-cover.six').css('transform', 'translateY(-100%)').css('transition', '0.8s 0.6s');
    setTimeout(function () { overflowText('.mobileText.six', 120); });
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
  $('#work').css('transition', '1.4s ease-out')
  $('sectionTitle').css('transition', '1s ease-out')
  $('#work h2 ul li a').css('opacity', '0.1');
  $('#work .sectionTitle').css('opacity', '0.2')
  $('.' + targetClass).css('opacity', '1');

  setTimeout(function () { textAnimationUp('.' + targetClass + ' .letter', -2); });
  setTimeout(function () { textAnimationDown('.' + targetClass + ' .letter'); }, 200);


  if (targetClass == "one") {
    $('#work').css('background-color', 'coral');
    // $('.photo.project01.one').css('opacity', '1').css('transform', 'translateX(-10%)');
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
  $('#work').css('background-color', '#f5f5f5');
  $('#work .sectionTitle').css('opacity', '0.4');
  $('#work h2 ul li a').css('color', '#212121').css('opacity', '1');
  $('#work h2 ul li a .letter').css('transition', '0s')
  $('#work h2 ul li .text-y').css('transition', '0s')
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
textSplit('.grid_right ul li a');

function textAnimationUp(e, n) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(' + n + '%)',
        'transition': '0.8s cubic-bezier(0.4,1.32,.8,1.01)',
      }, 450);
    }, 10 + (i * 40));
  });
}
function textAnimationDown(e, n) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(0%)',
        'transition': '1s cubic-bezier(0.4,1.32,.8,1.01)',
      }, 450);
    }, 10 + (i * 60));
  });
}



//-------------------About-animate-------------------//
$('.grid_right .one').click(function (e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function (url) { window.location = url; }, 0, linkUrl);
  // $('.transition-wipe').css('animation', 'swipe 2.2s cubic-bezier(0.4, 0.4, 0.6, 0.7) 0.2s');
  // $('.bgTitle.main').css('animation', 'bgTitleAnimation 0.7s cubic-bezier(0.2, 0.6, 0.6, 1) 0.4s forwards');
});

// Menu
// aboutHoverMenu('#h-nav-primary ul li a');
// aboutLeaveMenu('#h-nav-primary ul li a');

// aboutHoverMenu('#about-title ul li a');
// aboutLeaveMenu('#about-title ul li a');

// function aboutHoverMenu(e) {
//   $(e).mouseover(function () {
//     var targetClass = event.currentTarget.className;
//     // $(e).css('opacity', '1')
//     // $('.' + targetClass).css('color', '#ca7228');
//     $('.' + targetClass).css('opacity', '0.6');
//   });
// }
// function aboutLeaveMenu(e) {
//   $(e).mouseleave(function () {
//     $(e).css('color', '#212121')
//     $(e).css('opacity', '1')
//   });
// }

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



