
$(function () {
    
    /** Boton welcome */
    $('#welcome-button').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#conocenos').offset().top
        }, 1000);
    });/** ./Boton welcome */
    $('#nosotros-circle').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#nosotros').offset().top
        }, 1000);
    });
    $('#servicios-circle').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#servicios').offset().top
        }, 1000);
    });
    // $('#').on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $('#clientes').offset().top
    //     }, 1000);
    // });
});

$(document).ready(function(){
    new WOW().init();

    $('#carouselFade').carousel({
        interval: 5000
    });

    $('#welcome-button').hover(
    function(){
        $(this).addClass('animated bounce');
    },
    function(){
        $(this).removeClass('animated bounce');
    });

    $('#nosotros-flip, #servicios-flip, #clientes-flip, #medico-flip, #sustentable-flip, #tecnologico-flip').flip({
        "trigger" : "hover",
        // "autoSize": false
    })
});