/*
동적으로 DOM생성

부모요소.innerHTML = '집어넣을 태그 문자열';
--> 부모요소 안쪽의 기존 자식요소를 비우고 새로 삽입

부모요소.append(DOM node)
- 인수로 생성할 

새로운 DOM노드 생성방법
document.createElement("DOM이름");
*/

/*
HTML DOM이 모두 화면상에 렌더링 완료됐다고 하더라도 해당 태그에 수반되는 소스 이미지와 영상이 로딩완료와는 별개

시스템이 발생시키는 이벤트
onload load
DOM에 수반되는 소스자료까지 모두 완료되어야 실행되는 이벤트

parseInt() : 정수형의 숫자로 바꿔줌
parseFloat() : 실수형의 숫자로 바꿔줌
*/

var main = document.querySelector('main');
var loading = document.querySelector('aside');

for(var i=0; i<200; i++) {
  var imgNode = document.createElement('img');
  imgNode.setAttribute('src','img/pic' + i + '.jpg');
  main.append(imgNode);
}

var imgs = main.querySelectorAll('img');
var len = imgs.length;
var count = 0;
var percent = 0;

imgs.forEach(function (img) {
  img.onload = function() {
    count++;
    percent = parseInt((count / len) * 100);
    console.log(percent)
    loading.innerText = count + '/' + len + '(' + percent + '%)';

    if (count === len)  {
      main.classList.add('on');
      loading.classList.add('off');
      //시간지연함수 - 2.5초 후에 함수 실행
      setTimeout(function () {
        loading.remove();
      }, 2500);
    }
  }
});