var prompt = require('prompt-sync')();
var watson = require('watson-developer-cloud');
var assistantId = '97c6fb28-8500-4211-ba63-1d229cd7dccc';
var sessionId;
var endConversation = false;
var started = false;


console.log('START OF THE PROGRAM-------------------');


var service = new watson.AssistantV2({
    iam_apikey: 'QA3ZvAARFGLnTE8zr2oBEECOirMdfNnRdt0XbO9_Bece',
    version: '2018-11-08',
    url: 'https://gateway.watsonplatform.net/assistant/api'
});





service.createSession({
    assistant_id: assistantId,
}, function (err, response) {
    console.log('IN CREATE SESSION-------------');
    if (err) {
        console.error(err);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
    sessionId = response.session_id;
    console.log('The Session ID is ' + sessionId);
    startConversation();
});
started = true;




function startConversation() {
    console.log('IN START CONVERSATION--------------');
    sendMessage(prompt('>> '));

}

function sendMessage(message){
    console.log('MESSAGE TO SEND: '+message);
    service.message({
        assistant_id: assistantId,
        session_id: sessionId,
        input: {
            'message_type': 'text',
            'text': message
        }
    }, function (err, response) {
        if (err) {
            console.log('error:', err);
        }else {
            console.log(JSON.stringify(response, null, 2));
            console.log('CHATBOT OUTPUT: '+JSON.stringify(response.output.generic[0].text, null, 2));
        }
    });
}



/* service.message({
    assistant_id: assistantId,
    session_id: sessionId,
    input: {
        'message_type': 'text',
        'text': 'Hello'
    }
}, processMessage);

function processMessage(err, response) {
    console.log('IN PROCESS MESSAGE------------------');
    if (err) {
        console.log('error', err);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
}

service.deleteSession({
    assistant_id: assistantId,
    session_id: sessionId,
}, function (err, response) {
    console.log('DELETE SESSION -------------------');
    if (err) {
        console.error(err);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
});
 */