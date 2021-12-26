/*
연산자 : 특정 값을 도출하기 위한 연산을 처리하는 식별자

산술연산자: 수학적인 연산(+, -, /, *, %, ++, --, **)
대입연산자: 특정 값을 대입하기 위한 연산(=, +=, -=, *=)
비교연산자: 복수개 이상의 값을 서로 비교하기 위한 연산(boolean 값 반환, true, false)

후위연산자 : 변수 초기값을 먼저 활용하고 그 뒤에 값 연산처리
전위연산자 : 변수초기값에서 연산을 먼저 진행하고 그뒤에 연산된 값을 활용
*/

// num1++
/*
var num1 = 0;
console.log(num1);
num1 = num1 + 1;
*/

// num1++
/*
var num1 = 0;
console.log(num1++); //
*/

// ++num1
/*
var num1 = 0;
console.log(++num1); //1
*/

var num2 = 0;
// num2 = num2 + 2;
num2 += 2; //자기자신에 2를 더한 값을 다시 자신에게 덮어쓰기

// == 값만 비교
// === 값과 자료형까지 같이 비교
var result = (2 == '2');
console.log(result);

var result2 = (2 === '2');
console.log(result2);