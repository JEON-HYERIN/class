var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');

/*
특정 DOM의 스타일 값 변경
DOM.style.속성명 = '대입할 값';

특정 DOM의 스타일 값 가져올 때
getComputedStyle(DOM).속성명
*/

box1.addEventListener('click', function (e) {
  e.currentTarget.style.backgroundColor = 'lightgreen';
});

console.log(getComputedStyle(box2).backgroundColor);
console.log(getComputedStyle(box2)['backgroundColor']);