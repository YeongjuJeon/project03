$(function(){
    $('.museum-baro').on('click',function(){
        $('.museum-baro').addClass('on');
        $('.museum-baro-show').slideDown();
    }, function(){
        $('.museum-baro').removeClass('on');
        $('.museum-baro-show').slideUp()
    });
})