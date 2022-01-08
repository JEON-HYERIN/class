// 현재 시간을 불러와서 변수에 저장
let now = new Date();
now = new Date().getHours(); // 시간만 다시 now 변수에 저장
console.log(now);

// main 요소를 선택하여 변수에 저장
const main = document.querySelector('main');

if (now >= 0 && now < 9) {
  main.style.backgroundColor = 'lightblue';
}

if(now >= 9 && now < 17) {
  main.style.backgroundColor = 'pink';
}

if(now >= 17 && now < 25) {
  main.style.backgroundColor = 'violet';
} 