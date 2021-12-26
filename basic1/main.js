/*
자료형 (Data Type)
원시형자료 (primitve type) : 특정 값이 메모리에 바로 저장(값만 저장)
1. 문자열 (string)
2. 숫자 (number)
3. 불린형 (boolean): true, false
4. undefined : 변수를 만들고 값을 할당하지 않으면 undefined 대신 저장 (에러 상황)

참조형자료 (reference type) : 값의 참조 주소값만 메모리에 저장(관련 내장함수까지 같이 참조)
5. null (object) 명시적으로(일부로) 값을 비워둔 경우
6. 배열 (array) : 여러개의 값들을 그룹으로 묶어서 저장된 형태 (각 값들은 순서 값으로 탐색 가능)
7. 객체 (object) : 여러개의 값들을 그룹으로 묶어서 저장된 형태 (각 값마다 고유의 key 값을 넣어서 저장하고 탐색 가능)
*/

var num1 = '2'; //문자
var num2 = 2; //숫자
var isOk = true; //boolean
var error; //undefined
var isBlank = null; //object
// 같은 성격의 일련의 데이터들을 그룹형태로 저장할 때
var colors = ['red', 'green', 'blue']; //array
console.log(colors[0]); //red

// 성격이 다른 데이터들을 property에 담아서 구조적으로 저장할 때
var student1 = {
  name: 'David',
  age : 20,
  address: 'seoul',
  isFemale: false
};
console.log(student1.name);//David