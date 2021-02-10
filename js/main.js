// loading
window.onload = () => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
};

$(function () {
  $('#menu a').on('click', (event) => {
    $('#navcheck').prop('checked', false);
  });

  $(window).scroll(() => {
    const distanceFromTop = $('#top').offset().top;
    const scrollCount = $(document).scrollTop() > 500;
    if (scrollCount > distanceFromTop) {
      $('#Globalnav').addClass('wrapping-paper');
    } else {
      $('#Globalnav').removeClass('wrapping-paper');
    }
  });
});

// fancybox
$(function () {
  $('[data-fancybox="my-gallery"]').fancybox({
    caption: function (instance, current) {
      return $(this).next('figcaption').html();
    },
  });
});

// スクロールに応じてクラスを付与
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    $('#to-top').addClass('fadein');
  } else {
    $('#to-top').removeClass('fadein');
  }
};
// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);
$('#to-top').on('click', (e) => {
  e.preventDefault();
  const contentsTop = $('.wrapper').offset().top;
  $('html, body').animate({ scrollTop: contentsTop }, 500);
});
// ページの途中でリロードされた場合でも、ボタンが表示されるようにする
updateButton();

// waypoint.js
// $(function () {
//   $('.name-area').waypoint(
//     function (direction) {
//       var activePoint = $(this.element);
//       if (direction === 'down') {
//         //scroll down
//         activePoint.addClass('active');
//       } else {
//         //scroll up
//         activePoint.removeClass('active');
//       }
//     },
//     { offset: '0%' }
//   );
// });

$(function () {
  $('.fx-fadeUp').waypoint(
    function (direction) {
      var activePoint = $(this.element);
      if (direction === 'down') {
        activePoint.addClass('active');
      }
    },
    { offset: '80%' }
  );
});

$(function () {
  $('.fx-fadeIn').waypoint(
    function (direction) {
      var activePoint = $(this.element);
      if (direction === 'down') {
        activePoint.addClass('active');
      }
    },
    { offset: '80%' }
  );
});

//pointer
/*
参考サイト
https://www.evoworx.co.jp/blog/mouse-stoker-gsap/
*/
// const cursor = $('.cursor');
// //カーソルの大きさ
// const cWidth = 12;
// //マウスのX座標
// let mouseX = 0;
// //マウスのY座標
// let mouseY = 0;
// $(document).on('mousemove', (e) => {
//   mouseX = e.pageX;
//   mouseY = e.pageY;
//   cursor.css({
//     left: mouseX - cWidth / 2,
//     top: mouseY - cWidth / 2,
//   });
// });
// $(function () {
//   $('a , button , label')
//     .mouseover(function (e) {
//       $('.cursor').addClass('on-mouse');
//     })
//     .mouseout(function (e) {
//       $('.cursor').removeClass('on-mouse');
//     });
// });
