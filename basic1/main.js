/*
DOM(Document Object Model)
  DOM SCRIPT 구성시 외부 자스파일 연결방법
  ECMA script (자바스크립트 표준안)
  ES5, ES6 (2015)
  브라우저는 코드를 위에서 부터 아래로 읽어줌
  예전 자바스크립트 연결 방식
  -- 물리적으로 외부스크립트 호출 구문을 body 아래쪽에 배치해서 모든 DOM이 렌더링된 이후 호출

  요즘 자바스크립트 연결 방식
  -- 외부 자바스크립트 호출시 앞쪽에 defer 키워드 연결
  -- 자바스크립트와 DOM 출력을 비동기적으로 실행 (병렬식 실행)
  -- 외부 스크립트와 body 해석을 동시에 시작하고 body 안쪽의 모든 DOM 요소가 렌더링 완료되면 그때 비로소 SCRIPT 파일 호출
*/
  console.log('main');

var h1El = document.querySelector('h1');
console.log(h1El)