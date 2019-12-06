$(function(){
    $('.search-icon-container').click(function(){
        $(this).toggleClass('search-icon-click-container')
        $('.search-icon-click-input').toggle()
    });
    var swiper = new Swiper('.banner', {
        navigation: {
          nextEl: '.banner-r-btn',
          prevEl: '.banner-l-btn',
        },
    });
      
    $.datepicker.setDefaults($.datepicker.regional['ko']); //datepicker 한국어로 사용하기 위한 언어설정
    $('#date').datepicker();

    var swiper2 = new Swiper('.special-offers-img-container',{
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true
    });
   $('.special-offers-box').click(function(){
       $(this).toggleClass('special-offers-click-box')
       $(this).removeClass('special-offers-box')
       $(this).addClass('special-offers-click-box')
       $(this).toggleClass('special-offers-box')
   });
   $('.holyday-type-icon-box').click(function(){
    $('.holyday-type-icon').removeClass('display-none')
    $('.c-holyday-type-icon').addClass('display-none')
    $(this).find('.holyday-type-icon').toggleClass('display-none')
    $(this).find('.c-holyday-type-icon').toggleClass('display-none')
    
   })
   $('.happy-clients-text-container').click(function(){
    $('.happy-clients-bur-box').removeClass('display-none')
    $('.c-happy-clients-bur-box').addClass('display-none')
    $(this).find('.happy-clients-bur-box').toggleClass('display-none')
    $(this).find('.c-happy-clients-bur-box').toggleClass('display-none')
    })
    var swiper3 = new Swiper('.happy-clients-text-box1',{
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
    });
});