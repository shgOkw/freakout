$(function () {
  $('[data-fancybox="my-gallery"]').fancybox({
    caption: function (instance, current) {
      return $(this).next('figcaption').html();
    },
  });
});
