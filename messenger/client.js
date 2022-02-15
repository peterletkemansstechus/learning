const Message = require('./message');

class client {
    messages = [];

    constructor() {
        
    }
    
    messageCount(){
        return this.messages.length;
    }
    addMessage(message){
        /* add message to message array */
        this.messages.push(message);
    }

    sendMessages(){
        /* change message sent to true for all messages */
        for (i = 0; i < this.messages.length;i++){
            this.messages[i].setSent(true);
        }
    }

    changeMessageStatus(message,newStatus,reaction,sent){
        /* set message.status = newStatus, message.reaction = reaction, message.sent */
        message.setStatus(newStatus);
        message.setReaction(reaction);
        message.setSent(sent);
    }

    viewMessage(msg){
        if ((msg == null) || (msg === undefined)) {
            throw new TypeError();    
        }
        /* display all properties of message including toUser and fromUser properties */
        let formatedMsg = 'Subject: ' + msg.getSubject() + '\n';
        formatedMsg += 'Body: ' + msg.getBody() + '\n';
        formatedMsg += 'Time: ' + msg.getMsgTime() + '\n';
        formatedMsg += 'Reaction: ' + msg.getReaction() + '\n';
        formatedMsg += '-- To User --';
        formatedMsg += 'Name : ' + msg.toUser.firstName + ' ' + msg.toUser.lastName + '\n';
        formatedMsg += 'Email: ' + msg.toUser.email + '\n';
        formatedMsg += '-- From User --';
        formatedMsg += 'Name : ' + msg.fromUser.firstName + ' ' + msg.fromUser.lastName + '\n';
        formatedMsg += 'Email: ' + msg.fromUser.email + '\n';
        formatedMsg += 'Status: ' + msg.getStatus()  + '\n';
        formatedMsg += 'Sent: ' + msg.isSent() + '\n';
        return formatedMsg;
    }

    findMessageBySubject(subject){
        /* find all messages by the user supplied suject */
        for (const key in this.messages) {
            if (this.messages[key].getSubject()  === subject){
                return this.messages[key];
            }
        }
        throw new TypeError();
    }

    findMessageByBody(body){
        /* find all messages by the user supplied body */
        for (const key in this.messages) {
            if (this.messages[key].getBody()  === body){
                return this.messages[key];
            }
        }
        throw new TypeError();
    }

    findMessageByTime(msgTime){
        /* find all messages by the user supplied time */
        for (const key in this.messages) {
            if (this.messages[key].getMsgTime() === msgTime){
                return this.messages[key];
            }
        }
        throw new TypeError();
    }

    /* new method */
    findMessageByID(id){
        /* find all messages by the user supplied id */
        if (id < 0){
            // index out of range
            id = 0;
        }
        if (id > this.messageCount()){
            // index out of range
            id = this.messageCount()-1; // zero based array
        }
        return this.messages[id];
    }
}
module.exports = client;