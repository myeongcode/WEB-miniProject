
$(window).scroll(function() {
   if($(window).scrollTop() > 100) {
        $('.navbar-item-main').addClass('nav-small');
        $('.show-line').css('border-right','1px solid rgba(255, 255, 255, 0.3)');
        $('.navbar-item-main span').css('line-height','30px');
        $('.navbar-item-main span').css('font-size','16px');
   } else {
        $('.navbar-item-main').removeClass('nav-small');
        $('.show-line').css('border-right','1px solid rgba(255, 255, 255, 0)');
        $('.navbar-item-main span').css('line-height','70px');
        $('.navbar-item-main span').css('font-size','30px');
   }

   if($(window).scrollTop() > 300) {
       $('.icon-item i').css('transform','translateY(0px)');
    } else {
        $('.icon-item i').css('transform','translateY(500px)');
    }
});
