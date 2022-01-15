/*
동적으로 DOM생성

부모요소.innerHTML = '집어넣을 태그 문자열';
--> 부모요소 안쪽의 기존 자식요소를 비우고 새로 삽입

부모요소.append(DOM node)
- 인수로 생성할 

새로운 DOM노드 생성방법
document.createElement("DOM이름");
*/

var main = document.querySelector('main');
/*
var tags = '';

for(var i=0; i<200; i++) {
  tags += "<img src='img/pic"+ i +".jpg'>";
}

main.innerHTML = tags;
*/

for(var i=0; i<200; i++) {
  var imgNode = document.createElement('img');
  imgNode.setAttribute('src','img/pic' + i + '.jpg');
  main.append(imgNode);
}