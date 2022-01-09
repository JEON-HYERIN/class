var colors = ['red', 'blue', 'green'];

//es5
/*
forEach 
- 배열을 반복처리만 
- 유사배열을 반복처리 가능 (그룹형태의 DOM도 반복가능)
- 인수로 callback함수를 등록할 수 있다 (함수 호출시 인수로 함수가 들어가는 형태)
*/
colors.forEach(function (el, index) {
  console.log(el);
  console.log(index);
});

// es6
/*
map
- 순수 배열만 반복처리 가능(DOM반복 불가능)
- 반복을 할 때마다 새로운 배열을 생성

*/
colors.map(function (el, index) {
  console.log(el);
  console.log(index);
});

var num = [1, 2, 3];
var newNum = num.map(function (el) {
  return el * 2;
});
console.log(newNum);

/*
유사배열
- 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체

Array.from
- 유사배열 객체를 인수로 전달받아서 배열로 변환하여 반환해줌
*/

var btns = document.querySelectorAll('ul li');
console.log(btns)

var btns_arr = Array.from(btns);
console.log(btns_arr);

// 유사배열(DOM)을 반복 돌면서 이벤트 연결
btns.forEach(function (el, index) {
  el.onclick = function () {
    console.log(index);
  };
});

btns_arr.map(function (el, index) {
  console.log(el);
});

// es6 for of문
/*
for (let el of 반복그룹) {
  //실행코드
}
*/

var names = ['David', 'Andy', 'Tom'];
var num = 0;
for (var el of names) {
  console.log(el);
  console.log(num);
  num++;
}

var text = 'TYPOGRAPHY';
for(var a of text) {
  console.log(a);
}

var number = [1, 2, 3, 4, 5, 6];
var newNumber = number.filter(function (el) {
  return el < 4;
});
console.log(newNumber);

var list = ['a', 'bb', 'ccc', 'dddd', 'eeeee', 'ffffff'];
var newList = list.filter(function (el) {
  return el.length > 4;
});
console.log(newList);