"use strickt";

// $(function () {
  
//   $('.title_box').click(function () {
//     $(this).toggleClass('open');
//     $(this).next('.list_link').toggleClass('show');
//   });
// });

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

