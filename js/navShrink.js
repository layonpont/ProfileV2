$(document).ready(function(){

  $(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('#my-navbar').addClass('shrink');
    } else {
        $('#my-navbar').removeClass('shrink');
    }
});

});
