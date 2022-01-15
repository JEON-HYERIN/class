/*
jQuery탐색구문

선택자.children('요소명'): 직계자식중 해당 요소명의 자식요소 탐색
선택자.find('요소명'): 자손을 모두 탐색

선택자.parent(): 직계부모요소 탐색
선택자.closet('요소명'): 해당요소에 맞는 조상을 모두 탐색

선택자.siblings(요소명): 해당요소명의 형제 요소 탐색
선택자.prev(): 형제요소 중에 바로 이전 요소 탐색
선택자.next(): 형제요소 중에 바로 다음 요소 탐색

선택자.first(): 형제 요소 중 첫번째 요소 탐색
선택자.last(): 형제 요소 중 마지막 요소 탐색
선택자.eq(순번): 형제 요소중 순번에 맞는 요소 탐색
*/

var result = $('.wrap').find('a');
console.log(result)

$('.btns li a').closest('.wrap').find('.box1').css({
  border: '1px solid blue'
});

$('.btns li a').parent().parent().siblings('.box2').css({
  border: '1px solid green'
});