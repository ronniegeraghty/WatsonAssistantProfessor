const Talk = require('talkjs');

var sess = new Talk.Session ({
    id: "tFSK3c9y",
    name: "Ronald",
    email: "ronald.geraghty@ibm.com",
    photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
    welcomeMessage: "Hey, how can I help?"
});

var conversation = sess.getOrCreateConversation