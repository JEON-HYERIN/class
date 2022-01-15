/*
jQuery 선택자, 이벤트 연결, css, attr변경

선택자: $(요소명)
이벤트 연결: 선택자.on('이벤트명', function() {...})
.css('속성명', '속성값'): 해당 속성을 속성값으로 변경
.css('속성명'): 해당 속성값을 반환
.attr('속성명', '속성값'): 해당 속성을 속성값으로 변경
.attr('속성명'): 해당 속성값 반환
*/

var h1 = $('h1');

// 이벤트 연결 - 복수개의 이벤트를 동시에 연결할 수 있음
$('.btns li').on('click mouseenter', function (e) {
  e.preventDefault();
  console.log(this);
});

// 하나의 선택자에 서로 다른 이벤트와 함수를 연결 가능 
$('.box').on({
  'mouseenter' : function() {
    $(this).css({
      backgroundColor: 'aqua',
      width: 600
    })
  },
  'mouseleave' : function() {
    $(this).css({
      backgroundColor: 'gray',
      width: 300
    })
  }
});

// 인수로 속성명만 집어넣으면 해당 css속성값 반환
var ht = $('.box').css('height');
console.log(ht);

// 속성 Attribute 변경
var href = $('.btns li').eq(0).children('a').attr('href');
console.log(href);

var title = $('.btns li').eq(0).children('a').attr('title');
console.log(title);

$('.btns li').eq(1).children('a').attr({
  href: 'https://nate.com',
  title: '버튼2'
});