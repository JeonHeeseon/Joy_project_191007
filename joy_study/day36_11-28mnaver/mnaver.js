$(function(){
$('.search-input>input').click(function(){
    $('.logo-icon').toggleClass('display-none')
    $('.back-icon').toggleClass('display-none')
    $('.search-btn-group1').toggleClass('display-none')
    $('.search-btn-group2').toggleClass('display-none')
    $('.search-input').toggleClass('search-input-focus')
    })
$('.card-item').click(function(){
    $(this).toggleClass('card-item-select')
    $(this).find('.card-subs')
           .toggleClass('card-subs-select')
           
    // 선택된 언론사 갯수
    var count = $('.card-subs-select').length;
    if(count == 0){
        $('.subs-count-box').addClass('display-none');
    
    }else{
        var str = count + '개 언론사 구독';
        $('.subs-count-box').text(str);
        $('.subs-count-box').removeClass('display-none');
        }
    })
    $('.menu-item').click(function(){
        if($(this).hasClass('sel-pink')){
            $('.menu-list').addClass('menu-list2');
            $('.menu-plus').addClass('display-none');
        }else{
            $('.menu-list').removeClass('menu-list2');
            $('.menu-plus').removeClass('display-none');
        }
    })
    var tabMenu = new Swiper('.menu-list-container', { //.tabMenu 스와이퍼를 만들 건데 어떤 기준으로 할 건지 정하는 것 탭메뉴 클래스를 가진 선택자를 스와이퍼로 만들겠다
        // 중괄호 안에 있는 것들은 스와이퍼에 대한 옵션을 말함
       spaceBetween: 30,  //스페이스 간격을 30만큼 잡겠다.
       centeredSlides: true,
    //    centeredSlidesBounds:true, //클릭하면 그자리로 이동시켜주는 함수
       slidesPerView: 'auto',
       touchRatio: 0.2, 
       slideToClickedSlide: true,
       hashNavigation: true,
   });
        var tabContents = new Swiper('.tabContents', {
        spaceBetween: 10,
        hashNavigation: true,
        });
        // 메뉴와 컨텐츠를 연결해주는 함수 ↙
        tabContents.controller.control = tabMenu;
        tabMenu.controller.control = tabContents;
        // 슬라이드 처음 시작 메뉴를 뉴스로 설정하도록 위함 ↙
        tabMenu.slideTo(7,0);
        tabContents.slideTo(7,0);
        // 엔터 메뉴 왔다갔다 하게 ↙
        $('.enter-menu-item').click(function(){
        $(this).addClass('select').siblings().removeClass('select');
    })
})