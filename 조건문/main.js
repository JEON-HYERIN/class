/*
조건문
: 특정 조건마다 분기를 생성해서 코드흐름의 변화를 주는 것

if (조건식1) {
  조건식1이 참이면 이곳의 코드블록 실행
  조건식1이 거짓이면 이곳의 코드블록은 무시되고 다음 조건식으로 넘어감
} else if(조건식2) {
  조건식2가 참이면 이곳의 코드블록 실행
  조건식2가 거짓이면 이곳의 코드블록은 무시가되고 다음 조건식으로 넘어감 
} else {
  위의 조건식이 모두 거짓이면 이곳의 코드를 실행하고 종료
}

*/

function plus (num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

function minus (num1, num2) {
  var result = num1 - num2;
  console.log(result);
}

function multiply (num1, num2) {
  var result = num1 * num2;
  console.log(result);
}

function divide (num1, num2) {
  var result = num1 / num2;
  console.log(result);
};

plus(3,4);
minus(4,2);
multiply(5,2);
divide(6,2);


function calc (num1, num2, type) {
  // 각 인수의 자료형을 검사해서 변수에 저장
  let typeNum1 = typeof num1;
  let typeNum2 = typeof num2;
  let typeType = typeof type;

  if (num1 === undefined || num2 === undefined || type === undefined) {
    console.error('모든 인수를 넣어주세요');
  }

  // 세개의 자료형을 각각 비교해서 조건에 부합하면 경고구문을 콘솔에 출력
  if (typeNum1 !== "number" || typeNum2 !== "number" || typeType !== "string") {
    console.error('첫번째, 두번째 인수는 숫자로 입력하고, 세번째 인수는 사칙연산 기호를 입력하세요');

    // 세개의 인수값들이 모두 정상적으로 들어왔을 때 type에 따라 각각 사칙연산 함수를 호출
  } else {
    if (type === "+") plus(num1, num2);
    if (type === "-") minus(num1, num2);
    if (type === "*") multiply(num1, num2);
    if (type === "/") divide(num1, num2);
  }
}
calc(5,6,"+");
calc(5,3,"*");
calc(5,3,"*");
calc(3,5, '+');

