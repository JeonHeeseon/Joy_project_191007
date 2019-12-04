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
    $('.special-offers-img-box').click(function(){
        $('.special-offers-img-box').addClass('display-none')
        $('.special-offers-click-box').removeClass('display-none')
    
    });
 
});
