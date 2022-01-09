/*
이벤트: 사용자 또는 시스템이 웹상에서 하는 모든 행동
DOM요소에 이벤트가 발생되면 연결되는 이벤트 함수에 이벤트 객체가 자동으로 전달

e.target : 이벤트가 발생한 대상 
e.currentTarget : 이벤트가 연결된 대상
e.pageX : 브라우저 상에서 마우스 포인터의 가로축 위치
e.pageY : 브라우저 상에서 마우스 포인터의 세로축 위치
*/
var wrap = document.querySelector('#wrap');
wrap.onclick = function (e) {
  console.log(e.currentTarget);
}

wrap.onmousemove = function (e) {
  console.log(e.pageX);
}