$(document).ready(function () {

    var toggleMenu = function () {
        $('header').toggleClass('toggle');
        $('.main').toggleClass('push');
        $('.overlay').toggleClass('block');
        $('#social, .logo').toggleClass('reveal');
    };

    //Nav
    $('.navBtn').click(function () {
        toggleMenu();
    });

    Mousetrap.bind('esc', function () {
        toggleMenu();
    });

});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();