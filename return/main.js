/*
함수의 반환값 (return)
- 함수의 내부에서 만들어진 값을 함수 외부로 반환
- 함수 안에서 내보내고 싶은 값 앞에 return 키워드를 붙여줌
- 리턴값을 쓰는 이유는 해당 함수의 결과값을 다시 다른 함수에서 재활용해야 할 때

- 함수 내부에서 구문 실행 도중에 return문을 만나면 강제로 함수가 종료됨
*/

function plus (num1, num2) {
  let result = num1 + num2;
  console.log(result);
  return result;
}

let abc = plus(2,3);
console.log(abc);

function minus (num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    return;
  } else {
    let result = num1 - num2;
    console.log(result);
  }
}
minus(10, 5);