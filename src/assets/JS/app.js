$(function () {
  "use strickt";

  $('.title_box').click(function () {
    $(this).toggleClass('open');
    $(this).next('.list_link').toggleClass('open');
  });
});