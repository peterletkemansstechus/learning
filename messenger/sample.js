<<<<<<< HEAD
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

=======
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

>>>>>>> 79092633434a3491f677bd0a21fe7e50e3446a66
console.log(JSON.stringify(message));