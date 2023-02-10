$(function(){
    // 소속 박물관 바로가기
    $('.museum-baro').on('click',function(){
        $('.museum-baro').addClass('on');
        $('.museum-baro-show').slideDown();
    }, function(){
        $('.museum-baro').removeClass('on');
        $('.museum-baro-show').slideUp();
    });

    // 헤더 햄버거 메뉴
    $('.header-menu').click(function(){
        $('.header-menu').toggleClass('on');
        
        // 반응형 태블릿사이즈 메뉴
        if($(this).hasClass('on')){
            // $(this).parents('.header-r').next('.nav-t').show();
            $('.nav-t').show(); 
            
        }else{
            // $(this).parents('.header-r').next('.nav-t').hide();
            $('.nav-t').hide();  
        }
    })

    
})