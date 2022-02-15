const Message = require('./message');

let message = new Message().MessageBuilder()
            .withStatus('status1')
            .withSubject('subject2')
            .withBody('body3')
            .withMsgTime('msgTime4')
            .withReaction('reaction5')
            .withToUser('toUser6')
            .withFromUser('fromUser7')
            .build();

console.log(JSON.stringify(message));