"use strickt";

(function () {
 let titleBox = document.querySelectorAll('.title_box');
 let listLink = document.querySelectorAll('.list_link');
 for (let i = 0; i < titleBox.length; i++) {
   titleBox[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    titleBox[i].classList.toggle('open');
    listLink[i].classList.toggle('show');
   });
 }
})();

$(function () {
  
  $('#slider_price').slider({
    max: 1000,
    min: 0,
    range: true,
    values: [190,728],
    slide: function( event, ui ) {
      $('input[name="minPrice"]').val( '$' +  ui.values[0] );
      $('input[name="maxPrice"]').val( '$' +  ui.values[1] );
    }
  });

  $('input[name="minPrice"]').val( '$' +
    $('#slider_price').slider('values',0) );
  
  $('input[name="maxPrice"]').val( '$' +
    $('#slider_price').slider('values',1) );
});

