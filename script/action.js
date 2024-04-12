$(document).ready(function(){

    $('header').load('include/header.html', function(){
        $('.lang').click(function(){
            $('.language').toggle();
        });
    
        $('html').click(function(e) {   
            if(!$(e.target).hasClass("language")) {
                $('language')
            }
        });    
    
        $('.language li').click(function(){
            let langChoice = $(this).text();
           
            $('.choice').text(langChoice);
        })
    
    })


    // notice 롤링
    // let kkk = setInterval(함수,반복시간)
    // clearInterval(kkk)

    // let mmm = setTimeout(함수,예약시간)
    // clearTimeout (mmm)

    
    let notiRoll = setInterval(noticeRolling, 2000)

    function noticeRolling(){    
        $('.notice ul').animate({top:'-100%'}, function(){
        $('.notice ul li').eq(0).appendTo($('.notice ul'))
        $('notice ul').css({top:0})
        })

    }

    $('.notice').mouseenter(function(){
        clearInterval(notiRoll)
    });
    $('.notice').mouseleave(function(){
       notiRoll = setInterval(noticeRolling, 2000)
    })


    $(window).scroll(function(){
        let scrT = $(window).scrollTop();
        console.log(scrT)

        $('#visual').css({backgroundSize:100+scrT/10+'%'});

        
        $('#visual .model').css({top:100-scrT/5+'px'})

        if(scrT >= 120){
            $('header nav').addClass('on')
        }  else { 
            $('header nav').removeClass('on')
        }


    }); 


   if($('.snb').length >= 1){


        function snbAction(){
            let snbOnW = $('.snb li.on span').width()
            let snbOnL = $('.snb li.on span').position().left
            console.log(snbOnL)
   
            $('.snb_box .line').css({left:snbOnL, width:snbOnW})
        
        }
        
        
        $(window).resize(function(){
            snbAction(); 
        })    


        
        $('.snb li').mouseenter(function(){
            let snbLiW = $(this).find('span').width();
            let snbLiL = $(this).find('span').position().left
        
            $('.snb_box .line').css({left:snbLiL, width:snbLiW})
        })

            $('.snb').mouseleave(function(){
                snbAction()
        
        })

    
   }
 


   $('.eye_box').click(function(){
    let $eyeInput = $(this).prev('input');
    $eyeInput.toggleClass('active');

    if($eyeInput.hasClass('active')){ 
        $('.eye_off').show()
        $('.eye_on').hide()
        $('.login_box input[name=pw]').attr('type', 'text')

    } else {
        $('.eye_on').show()
        $('.eye_off').hide()
        $('.login_box input[name=pw]').attr('type', 'password')
    }
})


    //   ** 로그인페이지 현재페이지 표시 **

    let url = window.location.href

    $('.member a').each(function(){
       let memHref = $(this).attr('href');

        if(url.indexOf(memHref) > -1){
            $(this).css({color:'#27a9d0'}).parent('li').addClass('on')
            let memH2 = $(this).text()
            console.log(memH2)
            $('#content_box h2').text(memH2)

        }
        
});


    // **회원가입페이지 구분** //

    if(url.indexOf('join_people') > -1){
        $('.join_people').show()
    }
    if(url.indexOf('join_company') > -1){
        $('.join_company').show()
    }


    // 게시판
    $('.board_page .title').click(function(){
        $('.title_list').slideToggle(200)
        $('.selectbox').toggleClass('on')
    })
    
    
   // 파일첨부하는 법 
  
   $('#file_select').change(function() {
    var fileName = $(this).val().split('\\').pop(); 
    $('.filezone').text(fileName || '파일을 선택해주세요'); 
});



    // 로고이미지 src 값 글자변경 

    // $('header h1').mouseover(function(){
    //     $('header h1 img').attr('src','images/logogo2.png')
    // })
    //     $('header h1').mouseout(function(){
    //     $('header h1 img').attr('src','images/logogo.png')
    // })

    // console.log($('header nav').offset().top)


})
