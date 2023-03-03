$(function(){
    // 소속 박물관 바로가기
    $('.museum-baro').click(function(){
        $(this).toggleClass('on');
        $('.museum-baro a').next('ul').slideToggle(300);
    })
    // 언어 바로가기
    $('.language-baro').click(function(){
        $(this).toggleClass('on');
        $('.language-baro a').next('ul').slideToggle(300);
    })

    // section1 swiper
    var swiper = new Swiper(".main-slide .mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        keyboard: true,
        loop: true,
        autoplay: true,
        clickable: true,

    });
    // section2 swiper
    var swiper2 = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        clickable: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 600px
            600: {
            slidesPerView: 2,
            spaceBetween: 40
            },
            // when window width is >= 1000px
            1000: {
            slidesPerView: 3,
            spaceBetween: 50
            },
            // when window width is >= 1440px
            1440: {
            slidesPerView: 4,
            spaceBetween: 60
            }
        },
    });
    // 서브슬라이드 컨트롤러
    const controller = $('.swiper-controller');
    // const subslide = $('.sub-slide .mySwiper');
    controller.click(function(){
        if(controller.hasClass('pause')){
            controller.removeClass('pause');
            swiper2.autoplay.pause();
        }else{
            controller.addClass('pause');
            swiper2.autoplay.resume();
        }
    })
    // SECTION3 TAB
    $(function(){
        $('.s3-tab-content > div').hide();
        $('.s3-tab-nav a').click(function () {
          $('.s3-tab-content > div').hide().filter(this.hash).fadeIn();
          $('.s3-tab-nav a').removeClass('active');
          $(this).addClass('active');
          return false;
        }).filter(':eq(0)').click();
    });
    // SECTION3 mini swiper
    const swiper3 = new Swiper('.s3-right .swiper', {
        // Optional parameters
        loop: true,
        autoplay: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    });

    // SECTION4 swiper1
    const swiper4 = new Swiper('.s4-mid .swiper', {
        loop: true,
        autoplay: true,
        clickable: true,
      
        pagination: {
          el: '.s4-top .swiper-pagination',
          type: "fraction",
        },
      
        navigation: {
          nextEl: '.s4-top .swiper-button-next',
          prevEl: '.s4-top .swiper-button-prev',
        },
      });

    // SECTION4 swiper2
    const swiper5 = new Swiper('.s4-right .swiper', {
        loop: true,
        autoplay: true,
        clickable: true,
      
        pagination: {
          el: '.s4-top2 .swiper-pagination',
          type: "fraction",
        },
      
        navigation: {
          nextEl: '.s4-top2 .swiper-button-next',
          prevEl: '.s4-top2 .swiper-button-prev',
        },
      });
    
    // FOOTER fb-box2
    $('.fb-box2>ul>li>a').click(function(){
        $(this).parent($('li')).toggleClass('on');
        $(this).next($('ul')).slideToggle(300);
    })


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
            
        }
    
    }).resize();


})