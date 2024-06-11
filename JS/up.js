window.addEventListener('DOMContentLoaded', () => {
    let bigTablet = window.matchMedia("(min-width: 768px)");
    if ( bigTablet.matches == true ) {
        $('.pageup').fadeOut();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1200) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });
    }
    $("a[href^='#']").click(function(){
        if (!$(this).hasClass("FastLink")) {
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        }
    }); 
});