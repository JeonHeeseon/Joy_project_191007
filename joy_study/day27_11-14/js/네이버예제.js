
$(function(){
$('.keyboard').click(function(){
   $('.keyboard-icon').toggleClass('active')
   })
$('.auto').click(function(){
$('.auto-icon').toggleClass('active')
   $('.auto-box').toggle()
   })
$('.more').click(function(){
   $(this).toggleClass('fold')
   $('.more-box').toggle()
})
})
