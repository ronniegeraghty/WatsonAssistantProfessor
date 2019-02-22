$(document).ready(function () {

    var toggleChatBox = function () {
        $('.chatBoxHidden').toggleClass('chatBox');
    };

    //Nav
    $('.chatBtn').click(function () {
        toggleChatBox();
    });

    var sendMessage = function () {
        console.log("IN SEND MESSAGE FUNCTION--------------");
        var newMessage = document.createElement('div');
        newMessage.textContent = document.getElementById('inputMessage').value;
        document.getElementById('inputMessage').value='';
        newMessage.className = 'message fromUser';
        document.getElementsByClassName('chatMessages')[0].appendChild(newMessage);
        $('.chatMessages').animate({
            scrollTop: $('.chatMessages').get(0).scrollHeight
        }, 100);
    }

    $('#submitBtn').click(function () {
        sendMessage();
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