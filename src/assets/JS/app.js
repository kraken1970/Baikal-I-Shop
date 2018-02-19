"use strickt";
// вложенные подменю category
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
  // двухпозиционный бегунок с инпутами
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

// поле корзины
  $('#cart, .title_cart').click(function () {
    $('#cart_box').toggleClass('open');
  });
// форма входа
  $('#sign').click(function () {
    $('#black_fill, #modal').toggleClass('open');
  });
  $('#close_mod, #black_fill').click(function () {
    $('#black_fill, #modal').toggleClass('open');
  });

  // поле search
  $('#search_button').click(function () {
    $('#search_panel').toggleClass('open');
  });

  // дозагрузка товаров
  $('#load_more').click(function (event) {
    event.preventDefault();
    $('.list_product').append('<a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><img src="../assets/images/product/04.png" alt=""></div><h2>Our Legacy Splash Mid Sleeve Tee</h2><p>Black Grey Plants</p><p class="price">$90</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><img src="../assets/images/product/04.png" alt=""></div><h2>Our Legacy Splash Mid Sleeve Tee</h2><p>Black Grey Plants</p><p class="price">$90</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><img src="../assets/images/product/04.png" alt=""></div><h2>Our Legacy Splash Mid Sleeve Tee</h2><p>Black Grey Plants</p><p class="price">$90</p></a>')
  }); 
});

