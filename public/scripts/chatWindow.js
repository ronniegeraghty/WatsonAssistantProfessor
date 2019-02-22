$(document).ready(function () {

    var toggleChatBox = function () {
        $('.chatBoxHidden').toggleClass('chatBox');
    };

    //Nav
    $('.chatBtn').click(function () {
        toggleChatBox();
    });

    var autoScroll = function () {
        $('.chatMessages').animate({
            scrollTop: $('.chatMessages').get(0).scrollHeight
        }, 100);
    }

    var sendMessage = function () {
        console.log("IN SEND MESSAGE FUNCTION--------------");
        var newMessage = document.createElement('div');
        var userMessage = document.createElement('div');
        userMessage.textContent = document.getElementById('inputMessage').value;
        document.getElementById('inputMessage').value='';
        newMessage.className = 'message';
        userMessage.className = 'fromUser';
        newMessage.appendChild(userMessage);
        document.getElementsByClassName('chatMessages')[0].appendChild(newMessage);
        autoScroll();
    }

    $('#submitBtn').click(function () {
        sendMessage();
    });
    $('#inputMessage').on('keypress', function(e) {
        if(e.keyCode == 13) {
            sendMessage();
        }
    });


    var displayWatsonMessage = function(message) {
        console.log("DISPLAYING WATSON MESSAGE---------------");
        var newMessage = document.createElement('div');
        var watsonMessage = document.createElement('div');
        watsonMessage.textContent = message;
        newMessage.className = 'message';
        watsonMessage.className = 'fromWatson';
        newMessage.appendChild(watsonMessage);
        document.getElementsByClassName('chatMessages')[0].appendChild(newMessage);
        autoScroll();
    }

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