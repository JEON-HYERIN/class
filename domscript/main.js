/*
변수의 유효범위 (variable scope)

1. 전역변수(window)
- 코드블록 밖에서 선언된 변수
- 코드 전체에 걸쳐서 접근 가능
- 여러개의 다른 함수들이 같은 값을 공유해야 할 때
- 전역번수의 오염을 막기 위해 꼭 필요할 때만 생성
- window 객체에 저장

2. 지역변수
- 코드블록 안에서 선언된 변수
- 해당 코드블록 안에서만 접근 가능
- 특정 변수의 값이 해당 코드블록 안에서만 전용으로 쓰여야 할 때 

3. 호이스팅
- 블록안에서 선언된 지역변수가 코드블록 밖으로 끌어올라가지면서 강제로 전역변수화 되는 현상

즉시실행함수
- 자기자신을 정의하자마자 바로 호출하는 함수 형태
(함수정의)(함수호출);
- 안쪽의 코드를 캡슐화
- 안쪽 코드의 변수값을 초반에 한꺼번에 변경해야 될 때

반복문, 조건문 안에서 지역변수를 var로 선언하면 호이스팅이 발생해서 지역변수가 전역으로 등록
*/

var lis = document.querySelectorAll('li');
// 즉시실행함수로 지역변수 i값이 외부로 호이스팅 되는 걸 방지
// for (var i = 0; i < lis.length; i++) {
//   (function (index) {
//     lis[index].onclick = function () {
//       console.log(index);
//     }
//   })(i);
// }

// let (es6)
for (let i = 0; i < lis.length; i++) {
  (function (index) {
    lis[index].onclick = function () {
      console.log(index);
    }
  })(i);
}
// console.log(i)

// 자기자신에게 jQuery 객체를 인수로 전달해서 내부의 모든 $기호를 jQuery로 변경하는 즉시실행함수
// jQuery('.box)
// (function($) {
//   // jQuery('.box')
//   $('.box')
// })(jQuery)

// 자기자신에게 인수 2,3을 전달해서 자체적으로 해당값들을 더하는 즉시실행함수
(function plus (num1, num2) {
  console.log(num1 + num2);
})(2,3);