(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#27cce4", cursorwidth: '5', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});
 $("#scroll1").niceScroll({cursorcolor:"#03ADFC", cursorwidth: '10'});
 $("#scroll2").niceScroll({cursorcolor:"#03ADFC", cursorwidth: '10'});
 $("#scroll3").niceScroll({cursorcolor:"#03ADFC", cursorwidth: '10'});

    $(".left-side").niceScroll({styler:"fb",cursorcolor:"#27cce4", cursorwidth: '3', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0'});


    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").getNiceScroll().hide();
    }

$(window).scroll(function() {
var height = $(window).scrollTop();
if(height  >293) {
$(".col-profile").addClass("profileFxd");
}
if(height  >1650) {
$(".col-profile").removeClass("profileFxd");
$(".col-profile").addClass("profileFxd-bootom1");
}
if(height  < 293) {
$(".col-profile").removeClass("profileFxd");
$(".col-profile").removeClass("profileFxd-bootom1");
}
});

})(jQuery);

	
