$(function()
{
    var ticker = function()
    {
        setTimeout(function(){
            $('.black-item:first').animate( {marginTop: '-20px'}, 400, function()
            {
                $(this).detach().appendTo('.ticker').removeAttr('style');
            });
            ticker();
        }, 3000);
    };
    ticker();
});
