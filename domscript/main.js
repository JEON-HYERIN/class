/*
속성 : Attribute

속성값을 구할 때 
getAttribute('속성명')

속성값을 바꿀 때
setAttribute('변경할 속성명', '변경할 속성값')

텍스트 변경
요소.innerText = '변경할 텍스트'
*/

var a = document.querySelector('a');
var result = a.getAttribute('title');
console.log(result);

a.setAttribute('href', 'https://nate.com');
a.setAttribute('title', '네이트로 이동');

console.log(a.innerText);
a.innerText = 'NATE';