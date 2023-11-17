$(document).ready(function(){
    nav();
    btnTop();
    toggleBtn();
});

$(window).scroll(function(){
    const scrollTop = $(window).scrollTop() + $(window).height() / 2;
    
    for(let i=1; i<=$(".show_item").length; i++){
        if(scrollTop > $(".sec" + i).offset().top){
            $(".sec" + i).addClass("show");
        }else{
            $(".sec" + i).removeClass("show");
        }
    }
});

function nav(){
    if(window.matchMedia("(min-width: 1280px)").matches){
        $("header .wrap nav .gnb > li").mouseover(function(){
            $("header,.subMenu").addClass("active");
        });
        $("header").mouseleave(function(){
            $("header,.subMenu").removeClass("active");
        });
    }else{
        $(".mui").click(function(){
            $(".mui").toggleClass("active");
            $("header,.subMenu").toggleClass("active");
        });
    };
};


function btnTop(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".btn_top").addClass("show");
        } else{
            $(".btn_top").removeClass("show");
        }
    });

    $(".btn_top").click(function(){
        $("html").animate({
            scrollTop : 0
        }, 400);
        return false;
    });
}

function toggleBtn(){
    $("footer .wrap .footer_menu .box h2").click(function(){
        $(this).toggleClass("active");
    });
}

