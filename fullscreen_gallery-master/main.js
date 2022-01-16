// 1. span태그에 li 전체 개수 구해서 출력하기
var len = $('.btns li').length;
$('.controls span').text(len);
// btns li 클릭했을 때
$('.btns li a').on('click', function (e) {
   e.preventDefault();
// 2. 모든 버튼을 비활성화하고 클릭한 버튼만 활성화
   $('.btns li a').removeClass('on');
   $(this).addClass('on');
// 3. strong태그에 현재 활성화 순번 출력
var i = $(this).parent().index();
$('.controls strong').text(i + 1);

// 4. h1에 현재 활성화 버튼의 텍스트 출력
var txt = $(this).text();
$('#gallery h1').text(txt);

// 클릭한 요소의 이미지로 showBox 배경 출력
var imgSrc = $(this).attr('href');
$('.showBox').css({
   backgroundImage: "url(" + imgSrc + ")"
})
});