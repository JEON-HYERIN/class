/*
이벤트: 사용자 또는 시스템이 웹상에서 하는 모든 행동
DOM요소에 이벤트가 발생되면 연결되는 이벤트 함수에 이벤트 객체가 자동으로 전달

e.target : 이벤트가 발생한 대상 
e.currentTarget : 이벤트가 연결된 대상
e.pageX : 브라우저 상에서 마우스 포인터의 가로축 위치
e.pageY : 브라우저 상에서 마우스 포인터의 세로축 위치
*/
/*
var wrap = document.querySelector('#wrap');
wrap.onclick = function (e) {
  console.log(e.currentTarget);
}

wrap.onmousemove = function (e) {
  console.log(e.pageX);
}
*/

/*
DOM 탐색

자식 요소 탐색 : 부모요소.querySelector()
                부모요소.children
형제 요소 탐색 : 
- 형제요소.prevElementSibling : 이전 형제요소 탐색
- 형제요소.nextElementSibling : 다음 형제요소 탐색

부모요소 탐색
- 현재요소.parentElement
- 현재요소.closest('찾을 요소명')
*/

var wrap = document.querySelector('#wrap');
var box2 = wrap.querySelector('.box2');
console.log(box2);
console.log(wrap.children);

var prev = box2.previousElementSibling;
console.log(prev);
console.log(box2.nextElementSibling);

var a = box2.querySelector('a');
console.log(a.parentElement.nextElementSibling); //box3
console.log(a.closest('#wrap').querySelector('.box3')); //box3