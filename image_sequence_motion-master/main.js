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
var txt = document.querySelector('p');

for(var i=0; i<200; i++) {
  var imgNode = document.createElement('img');
  imgNode.setAttribute('src','img/pic' + i + '.jpg');
  main.append(imgNode);
}

// 이미지 로딩 처리
imageLoaded();

// 화면에 마우스무브 이벤트 연결
window.addEventListener('mousemove', function (e) {
  var x = e.pageX; //마우스 가로 위치
  var y = e.pageY; //마우스 세로 위치
  var cx = x/10;
  var cy = y/10;
  var wid = window.innerWidth; // 화면 너비
  var percent = parseInt((x/wid)*200); // 현재 마우스 위치를 백분율로 환산
  var imgs = document.querySelectorAll('main img');
  //순간적으로 모든 이미지를 안보이게 초기화
  for(var img of imgs) img.style.display = 'none';
  // percent 위치에 해당하는 이미지만 보이게 처리
  imgs[percent].style.display = 'block';

  txt.style.transform = 'translate('+cx+"px, "+cy+"px)";
});

// 모든 이미지 태그의 소스 이미지 로딩 완료시에 로딩화면 처리하는 함수 정의
function imageLoaded() {
  var imgs = main.querySelectorAll('img');
  var len = imgs.length;
  var count = 0;
  var percent = 0;
  
  // 모든 이미지의 개수를 구해서 초기값 count를 로딩이 될 때마다 1씩 증가시키고
  // 전체갯수 len과 같아지면 모두 로딩 완료된 것이므로
  // 로딩 화면은 사라지고 이미지를 화면에 보이게 처리
  imgs.forEach(function (img) {
    img.onload = function() {
      count++;
      percent = parseInt((count / len) * 100);
      // console.log(percent)
      loading.innerText = count + '/' + len + '(' + percent + '%)';
  
      if (count === len)  {
        main.classList.add('on');
        loading.classList.add('off');
        //시간지연함수 - 2.5초 후에 함수 실행
        setTimeout(function () {
          loading.remove();
        }, convertSpeed(loading));
      }
    }
  });
}


// loading의 transition-duration 값 가져와서 setTimeout에 적용

function convertSpeed (el) {
  var speed = getComputedStyle(el).transitionDuration;
  speed = parseFloat(speed) * 1000;
  return speed;
}