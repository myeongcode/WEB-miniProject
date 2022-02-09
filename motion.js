
$(window).scroll(function() {
    var windows = $(window).scrollTop();
    
    if(windows > 100) {
        $('.navbar').addClass('nav-small-bg');
        $('.navbar-item-main').addClass('nav-small');
        $('.navbar-item-main').removeClass('flex-grow-item');
        $('.show-line').css('border-right','1px solid rgba(255, 255, 255, 0.3)');
        $('.navbar-item-main span').css('line-height','30px');
        $('.navbar-item-main span').css('font-size','16px');
    } else {
        $('.navbar').removeClass('nav-small-bg');
        $('.navbar-item-main').removeClass('nav-small');
        $('.navbar-item-main').addClass('flex-grow-item');
        $('.show-line').css('border-right','1px solid rgba(255, 255, 255, 0)');
        $('.navbar-item-main span').css('line-height','70px');
        $('.navbar-item-main span').css('font-size','30px');
    }

    if(windows > 200) {
        $('.icon-item i').css('transform','translateY(0px)');
        $('.icon-item i').css('visibility','visible');
    } else {
        $('.icon-item i').css('transform','translateY(900px)');
        $('.icon-item i').css('visibility','hidden');
    }

    if(windows > 700) {
        $('.banner-tranform').css('transform','translateY(-200px)');
    } else {
        $('.banner-tranform').css('transform','translateY(0px)');
    }

    if(windows > 800) {
        $('.banner-img img').css('opacity','1');
        $('.banner-img img').css('visibility','visible');
    } else {
        $('.banner-img img').css('opacity','0');
        $('.banner-img img').css('visibility','hidden');
    }

    if(windows > 1000) {
        $('.banner-tranform').css('transform','translateY(-800px)');
        $('.banner-img img').addClass('banner-img-tranform');
    } else if (windows < 1000 && windows > 300){
        $('.banner-tranform').css('transform','translateY(-200px)');
        $('.banner-img img').removeClass('banner-img-tranform');
    }

    if(windows > 1200) {
        $('.banner-text-show div:nth-child(1) span').css('opacity','1');
        $('.banner-text-show div:nth-child(1) span').css('visibility','visible');
    } else {
        $('.banner-text-show div:nth-child(1) span').css('opacity','0');
        $('.banner-text-show div:nth-child(1) span').css('visibility','hidden');
    }

    
    if(windows > 1300) {
        $('.banner-text-show').css('transform','translateX(0px)');
    } else {
        $('.banner-text-show').css('transform','translateX(150px)');
    }


    if(windows > 1600) {
        $('.banner-text-show div:nth-child(2) span').eq(0).css('opacity','1');
        $('.banner-text-show div:nth-child(2) span').eq(0).css('visibility','visible');
    } else {
        $('.banner-text-show div:nth-child(2) span').eq(0).css('opacity','0');
        $('.banner-text-show div:nth-child(2) span').eq(0).css('visibility','hidden');
    }
    if (windows > 1700) {
        $('.banner-text-show div:nth-child(2) span').eq(1).css('opacity','1');
        $('.banner-text-show div:nth-child(2) span').eq(1).css('visibility','visible');
    } else {
        $('.banner-text-show div:nth-child(2) span').eq(1).css('opacity','0');
        $('.banner-text-show div:nth-child(2) span').eq(1).css('visibility','hidden');
    }
    if (windows > 1800) {
        $('.banner-text-show div:nth-child(2) span').eq(2).css('opacity','1');
        $('.banner-text-show div:nth-child(2) span').eq(2).css('visibility','visible');
    } else {
        $('.banner-text-show div:nth-child(2) span').eq(2).css('opacity','0');
        $('.banner-text-show div:nth-child(2) span').eq(2).css('visibility','hidden');
    }
    if (windows > 1900) {
        $('.banner-text-show div:nth-child(2) span').eq(3).css('opacity','1');
        $('.banner-text-show div:nth-child(2) span').eq(3).css('visibility','visible');
    } else {
        $('.banner-text-show div:nth-child(2) span').eq(3).css('opacity','0');
        $('.banner-text-show div:nth-child(2) span').eq(3).css('visibility','hidden');
    }

    if (windows > 2100) {
        $('.banner-text-show div:nth-child(1) span').css('opacity','0');
        $('.banner-text-show div:nth-child(1) span').css('visibility','hidden');
    }
    if (windows > 2400) {
        $('.banner-text-show div:nth-child(2) span').css('transition','all 0.5s');
        $('.banner-text-show div:nth-child(2) span').eq(0).css('transform','translateX(-120px) translateY(0px)');
        $('.banner-text-show div:nth-child(2) span').eq(1).css('transform','translateX(-60px) translateY(0px)');
        $('.banner-text-show div:nth-child(2) span').eq(2).css('transform','translateX(0px) translateY(0px)');
        $('.banner-text-show div:nth-child(2) span').eq(3).css('transform','translateX(60px) translateY(0px)');
    }
    
    if (windows > 2600) {
        $('.banner-text-show div:nth-child(2) span').css('position','absolute');
        $('.banner-text-show div:nth-child(2) span').css('transition','all 0.5s');
        $('.banner-text-show div:nth-child(2) span').eq(0).css('transform','translateX(-500px) translateY(-70px)');
        $('.banner-text-show div:nth-child(2) span').eq(1).css('transform','translateX(-500px) translateY(0px)');
        $('.banner-text-show div:nth-child(2) span').eq(2).css('transform','translateX(-500px) translateY(70px)');
        $('.banner-text-show div:nth-child(2) span').eq(3).css('transform','translateX(-500px) translateY(140px)');
    } else {
        $('.banner-text-show div:nth-child(2) span').css('position','relative');
        $('.banner-text-show div:nth-child(2) span').css('transition','all ease-out 0.5s');
    }

    if(windows > 3000) {
        $('.banner-final img:nth-child(1)').css('transform','translateX(-380px) translateY(100px) rotate(90deg)');
        $('.banner-final img:nth-child(2)').css('transform','translateX(0px) translateY(150px) rotate(90deg)');
        $('.banner-final img:nth-child(3)').css('transform','translateX(300px) translateY(-100px)');
        $('.banner-final img:nth-child(4)').css('transform','translateX(400px) translateY(-500px) rotate(90deg)');
        $('.banner-final img:nth-child(5)').css('transform','translateX(-25px) translateY(-300px)');
        $('.banner-final img:nth-child(6)').css('transform','translateX(-270px) translateY(-250px) rotate(90deg)');
        $('.banner-final img:nth-child(7)').css('transform','translateX(130px) translateY(-650px) rotate(-90deg)');
        $('.banner-final img:nth-child(8)').css('transform','translateX(400px) translateY(250px)');
        $('.banner-final img:nth-child(9)').css('transform','translateX(-350px) translateY(-600px)');
    } else {
        $('.banner-final img:nth-child(1)').css('transform','translateX(-380px) translateY(800px) rotate(90deg)');
        $('.banner-final img:nth-child(2)').css('transform','translateX(-2000px) translateY(150px) rotate(90deg)');
        $('.banner-final img:nth-child(3)').css('transform','translateX(2000px) translateY(-100px)');
        $('.banner-final img:nth-child(4)').css('transform','translateX(400px) translateY(2000px) rotate(90deg)');
        $('.banner-final img:nth-child(5)').css('transform','translateX(-25px) translateY(2000px)');
        $('.banner-final img:nth-child(6)').css('transform','translateX(-2000px) translateY(-250px) rotate(90deg)');
        $('.banner-final img:nth-child(7)').css('transform','translateX(2000px) translateY(-650px) rotate(-90deg)');
        $('.banner-final img:nth-child(8)').css('transform','translateX(400px) translateY(-2000px)');
        $('.banner-final img:nth-child(9)').css('transform','translateX(2000px) translateY(-600px)');
    }

    if(windows > 3200) {
        $('.banner-text-show div:nth-child(2) span').css('transform','translateX(-500px) translateY(-1000px)');
        $('.banner-final-content > div:nth-child(1) span').css('transform','translateX(-440px) translateY(-180px)');
    } else {
        $('.banner-final-content > div:nth-child(1) span').css('transform','translateX(-440px) translateY(1000px)');
    }

    if(windows > 3500) {
        $('.banner-final-content > div:nth-child(2) span').css('transform','translateX(-525px) translateY(-180px)');
        $('.banner-final-content > div:nth-child(2) span').css('opacity','1');
    } else {
        $('.banner-final-content > div:nth-child(2) span').css('transform','translateX(-425px) translateY(-230px)');
        $('.banner-final-content > div:nth-child(2) span').css('opacity','0');
    }

    if(windows > 3800) {
        $('.banner-final-content i').css('opacity','1');
        $('.banner-final-content i').css('transform','translateX(-700px) translateY(-100px)');
    } else {
        $('.banner-final-content i').css('opacity','0');
        $('.banner-final-content i').css('transform','translateX(-500px) translateY(-100px)');
    }

    if(windows > 4000){
        $('.money-bg').css('opacity','1');
        $('.money-bg').css('padding','100%');
        $('.money-bg').css('transform','translateX(0px) translateY(0px)');
    } else {
        $('.money-bg').css('opacity','0');
        $('.money-bg').css('padding','0');
        $('.money-bg').css('transform','translateX(583px) translateY(708px)');
    }

    if(windows > 4500) {
        $('.main-banner').removeClass('main-banner-fixed');
    } else {
        $('.main-banner').addClass('main-banner-fixed');
    }

});

