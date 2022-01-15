const btns = document.querySelectorAll('.btns li');

// for(let i=0; i<btns.length; i++) {
//   btns[i].addEventListener('click', function (e) {
//     for(let el of btns) {
//       el.querySelector('a').classList.remove('on');
//     }
//     btns[i].querySelector('a').classList.add('on');
//   });
// }

$('.btns li a').on('click', function (e) {
  $('.btns li a').removeClass('on');
  $(this).addClass('on');
});