$(document).ready(function() {
    $('a[href$=philosophy').click(function(e) { 
        e.preventDefault(); 
        $('html, body').animate({
            scrollTop: $('section.philosophy').offset().top
        }, 800); 
    });
});
