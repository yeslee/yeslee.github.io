$(document).ready(function () {
  setTimeout(function () { overflowText('.yeslee .letter', 100); }, 400);

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


// Overflow -text  
function overflowText(e, s) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(0%)'
      }, 300);
    }, (i * s));
  });
}
setTimeout(function () { overflowText('.text-y', 120); }, 400);


// Work - mouseover
$('#work h2 ul li a').on('mouseover', selectMenu);
$('#work h2 ul li a').on('mouseleave', leaveMenu);

function selectMenu(event) {
  var targetClass = event.currentTarget.className;
  // console.log(targetClass);
  console.log(targetClass);

  $('#photo').css('display', 'block').attr('src', 'https://i-h1.pinimg.com/564x/2e/c0/c5/2ec0c5af10ae7101932c48edc924dd93.jpg');
  $('#work h2 ul li a').css('opacity', '0.1').css('transition', '0.2s ');
  $('#work .sectionTitle').css('opacity', '0.2')
  $('.' + targetClass).css('opacity', '1');
  // $('.' + targetClass).css('opacity', '1').css('color', 'white');

  // setTimeout(function () { textAnimationUp('.' + targetClass); });
  setTimeout(function () { textAnimationUp('.' + targetClass + ' .letter'); });
  setTimeout(function () { textAnimationDown('.' + targetClass + ' .letter'); }, 200);
  // setTimeout(function () { textAnimationDown('.' + targetClass); }, 200);

  if (targetClass == "one") {
    $('#work').css('background-color', 'coral');
  } else if (targetClass == "two") {
    $('#work').css('background-color', 'rgb(178, 135, 144)');
  } else if (targetClass == "three") {
    $('#work').css('background-color', 'rgb(58, 135, 144)');
  } else if (targetClass == "four") {
    $('#work').css('background-color', 'rgb(20, 150, 144)');
  } else if (targetClass == "five") {
    $('#work').css('background-color', 'rgb(138, 135, 144)');
  } else if (targetClass == "six") {
    $('#work').css('background-color', 'rgb(100, 135, 144)');
  }
}


function leaveMenu() {
  $('#photo').css('display', 'none');
  $('#work').css('background-color', '#f5f5f5');
  $('#work .sectionTitle').css('opacity', '1')
  $('#work h2 ul li a').css('color', '#212121').css('opacity', '1').css('transition', '2s');
}

function textSplit(e) {
  $(e).each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
};
textSplit('#work h2 ul li a');
textSplit('.yeslee');

function textAnimationUp(e) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(-2%)',
        'transition': '0.8s cubic-bezier(0.4,1.32,.8,1.01)',
      }, 450);
    }, 10 + (i * 40));
  });
}
function textAnimationDown(e) {
  $.each($(e), function (i, el) {
    setTimeout(function () {
      $(el).css({
        'transform': 'translateY(0%)',
        'transition': '1s cubic-bezier(0.4,1.32,.8,1.01)',
      }, 450);
    }, 10 + (i * 60));
  });
}







//-------------------project-animate-------------------//



function ProjectAnimation(e) {
  $(e).addClass('animate')
  $(e).css('opacity', '1').css('transform', 'translateY(0%)');;
}



