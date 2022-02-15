const Message = require('./message');

class client {
    messages = [];

    constructor() {
        
    }

    addMessage(message){
        /* add message to message array */
    }

    sendMessages(){
        /* change message sent to true for all messages */
    }

    changeMessageStatus(message,newStatus,reaction,sent){
        /* set message.status = newStatus, message.reaction = reaction, message.sent */
    }

    viewMessage(message){
        /* display all properties of message including toUser and fromUser properties */
    }

    findMessageBySubject(subject){
        /* find all messages by the user supplied suject */
    }

    findMessageByBody(body){
        /* find all messages by the user supplied body */
    }

    findMessageByTime(msgTime){
        /* find all messages by the user supplied time */
    }
}
module.exports = client;
