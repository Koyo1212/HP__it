"use script"

$(window).on('scroll', function () {
  if (1 < $(this).scrollTop()) {
    $('.header').addClass('change-color');
  } else {
    $('.header').removeClass('change-color');
  }
});



$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});

$(function () {
  $('.company-info').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.more-list').addClass('active');
      $('.more-arrow1').addClass('active');
    } else {
      $('.more-arrow1').removeClass('active');
      $('.more-list').removeClass('active');
    }
  });
});

$(function () {
  $('.company-info1').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.more-list1').addClass('active');
      $('.more-arrow2').addClass('active');
    } else {
      $('.more-arrow2').removeClass('active');
      $('.more-list1').removeClass('active');
    }
  });
});
function copy() {
  var moji = "https://www.google.com/maps/place/%E7%A8%9A%E5%86%85%E5%B8%82+%E5%9F%BA%E5%B9%B9%E7%9B%B8%E8%AB%87%E6%94%AF%E6%8F%B4%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@45.411862,141.676299,20z/data=!4m5!3m4!1s0x0:0xd97f8f90e67c21ee!8m2!3d45.4118592!4d141.6764277?hl=ja";
  var element = document.createElement("textarea");
  element.setAttribute("id", "target");
  element.setAttribute("type", "hidden");
  element.textContent = moji;
  document.body.appendChild(element);

  element.select();
  document.execCommand('copy');
}



var bar = new ProgressBar.Line(splash_text, {
  easing: 'easeInOut',
  duration: 3000,
  strokeWidth: 0.2,
  color: 'red',
  trailWidth: 0.2,
  trailColor: '#fff',
  text: {    
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',
      transform:'translate(-50%,-50%)',
      'font-size':'2rem',
      color: '#fff',
    },
    autoStyleContainer: false 
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


bar.animate(1.0, function () {
  $("#splash_text").fadeOut(50);
  $(".loader_cover-up").addClass("coveranime");
  $(".loader_cover-down").addClass("coveranime");
  $("#splash").fadeOut();
});