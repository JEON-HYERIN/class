//es6 
/*
const btns = document.querySelectorAll(".btns li");

for(let i=0; i<btns.length; i++){
   btns[i].addEventListener("click", function(e){
      e.preventDefault();

      btns.forEach( function(btn){
         btn.querySelector("a").classList.remove("on");
      });

      btns[i].querySelector("a").classList.add("on");
   })
}
*/

//jQuery
$(".btns li a").on("click", function(e){
   e.preventDefault();

   $(".btns li a").removeClass("on");
   $(this).addClass("on");
})

