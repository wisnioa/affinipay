

$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('shadowNav');
    } else {
        $('.navbar').removeClass('shadowNav');
    }
});


