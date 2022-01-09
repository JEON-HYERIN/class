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