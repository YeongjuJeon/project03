$(function(){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        keyboard: true,
        loop: true,
        
    });

    $(window).resize(function(){ 
        if (window.innerWidth < 600){
            // 헤더 햄버거 메뉴
            $('.header-menu').click(function(){
                $('.header-menu').toggleClass('on');
                
                // 반응형 핸드폰사이즈 메뉴
                if($(this).hasClass('on')){
                    $('.nav-p').show(); 
                    $('.nav-t').hide();
                }else{
                    $('.nav-p').hide();  
                    $('.nav-t').hide();

                }
            })
            // 메뉴2depth 슬라이드다운
            let a=true
            $('.P-depth1>li').click(function(e){
                e.preventDefault();
                const submenu = $(this).children('.P-depth2');
                if( a==true ){
                    submenu.stop().slideUp();
                    a=false;
                }else{
                    submenu.stop().slideDown();
                    a=true;
                }
            })
            // 메뉴3depth 슬라이드다운
            let b=true;
            $('.P-depth2>li').click(function(e){
                e.preventDefault();
                const submenu1 = $(this).children('.P-depth3');
                if( b==true){
                    submenu1.stop().slideUp();
                    b=false
                }else{
                    submenu1.stop().slideDown();
                    b=true
                }
            })

        //600px보다클때 
        }else{

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

            // 태블릿사이즈 메뉴2depth hover
            $(".Td-depth1>li").hover(function(){
                $(this).addClass("active").siblings().removeClass('active');
            });
                
            // 태블릿사이즈메뉴 3depth slideDown
            $('.Td-depth2>li').hover(function(){
                $(this).find('ul').stop().slideDown();
            },function(){
                $(this).find('ul').stop().slideUp();
            })
            
              // 소속 박물관 바로가기
            $('.museum-baro').on('click',function(){
                $('.museum-baro').addClass('on');
                $('.museum-baro-show').slideDown();
            }, function(){
                $('.museum-baro').removeClass('on');
                $('.museum-baro-show').slideUp();
            });
        }
    
    }).resize();


})