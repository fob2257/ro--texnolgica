$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
    // Cierra navbar al hacer click/touch
});

var setNavbar = function () {
    if (window.pageYOffset > 110) {
        $('#navbar-tex').addClass('smallnav');
        $('#navbar-tex').css('margin-top', '0');
        $('#navbar-tex').removeClass('bignav');
        $('#navbar-tex .navbar-brand img').removeClass('logo-invisible');
        $('#navbar-tex .navbar-brand img').addClass('logo-visible');
    }
}

$(document).ready(function () {
    setNavbar();
    /** Scroll del navbar */
    var target = 110,
        timeout = null;
    $(window).scroll(function (e) {
        if (!timeout) {
            timeout = setTimeout(function () {
                clearTimeout(timeout);
                timeout = null;
                if ($(window).scrollTop() >= target) {
                        $('#navbar-tex').addClass('smallnav');
                        $('#navbar-tex').css('margin-top', '0');
                        $('#navbar-tex').removeClass('bignav');
                        $('#navbar-tex .navbar-brand img').removeClass('logo-invisible');
                        $('#navbar-tex .navbar-brand img').addClass('logo-visible');
                } else {
                    $('#navbar-tex').addClass('bignav');
                    $('#navbar-tex').removeClass('smallnav');
                    $('#navbar-tex').css('margin-top', '2%');
                    $('#navbar-tex .navbar-brand img').addClass('logo-invisible');
                    $('#navbar-tex .navbar-brand img').removeClass('logo-visible');
                }
                // navbar links
                document.getElementsByTagName("body").onscroll = function () { console.log(e) };
            }, 500);
        }
    }); /** ./Scroll del navbar */
});