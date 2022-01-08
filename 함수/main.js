/*
함수
자주 쓰는 실행 코드들을 블록 단위로 묶어서 패키징한 상태
- 자주 쓰는 코드들을 기능단위로 묶어서 재사용하기 위함 

함수 정의 : function 키워드로 자주쓰는 코드를 묶어서 정의하는 행위
함수 호출 : 정의 되어 있는 함수를 호출해야 비로소 기능이 실행

선언적 함수
- 함수에 미리 이름을 붙여서 정의해 놓은 형태
- 자바스크립트가 파일을 읽을 때 선언적 함수를 우선적으로 읽어줌 
- 선언적 함수는 호출 위치가 자유롭다.

익명함수
- 함수에 이름이 없이 정의하는 형태
- 익명 함수 자체만으로는 호출이 불가능
- 변수에 익명함수를 대입하거나 이벤트 객체에 대입하는 식으로 호출 가능

대입형 함수
- 변수에 익명함수를 대입한 형태

즉시실행함수
- 함수가 자기자신을 정의하자마자 바로 자신을 호출
- 단 한번만 호출되고, 다시 호출할 수 없음
- (함수정의) (함수호출);

매개변수
- 함수 외부에서 함수 내부로 특정 값을 전달하기 위한 통로 이름 

인수
- 함수 호출 시 매개변수로 전달되는 값
*/

// var num1 = 2;
// var num2 = 3;
// var result1 = num1 + num2;
// console.log(result1);

// 함수 호출
add();
// 선언적 함수 정의
function add () {
  var num1 = 2;
  var num2 = 3;
  var result = num1 + num2;
  console.log(result); 
}

// 대입형 함수
var abc = function () {
  var num1 = 3;
  var num2 = 5;
  console.log(num1 + num2);
}
abc();

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log('you clicked');
});

// 즉시실행함수
(function () {
  var num1 = 3;
  var num2 = 4;
  console.log(num1 * num2);
}());

(function divide () {
  var num1 = 10;
  var num2 = 2;
  console.log(num1 / num2);
})();
//divide();

// 매개변수
function add (num1, num2) {
  let result = num1 + num2;
  console.log(result);
};

add(4, 7);
console.log(num1);