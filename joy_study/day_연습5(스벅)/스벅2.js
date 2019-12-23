$(function(){
    function ticker(height){
    $('.black-item').eq(0)
    .animate({'margin-top':height},500,
        //animate에서 설정한 애니메이션을 다 실행한 후 실행되는 함수
        function(){
            /*
            $(붙일 곳).append(붙일 애)
            $(붙일 애)appendTo(붙일 곳)
            */
        $('.black-item').eq(0).detach()
        .appendTo('.black-item').removeAttr('style');
    });
});