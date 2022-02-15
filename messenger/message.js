const User = require('./user');

class Message {
    /* putting a # in front of a variable or method makes that element private */

    status; /* unread, read */
    subject;
    body;
    msgTime;
    reaction;
    toUser;
    fromUser;
    sent; /* true, false */



    constructor(newStatus = 'unread', subject, body, msgTime = new Date().toLocaleString(), reaction,toUser,fromUser,sent = false) {
        this.status = newStatus;
        this.subject = subject;
        this.body = body;
        this.msgTime = msgTime;
        this.reaction = reaction;
        this.toUser = toUser;
        this.fromUser = fromUser;
        this.sent = sent;
    }
    
    /* #region Setters */
    setStatus(newStatus){
        if (newStatus === 'read'){
            this.status = 'read';
        } else {
            this.status = 'unread';
        }
    }

    setSubject(newSubject){
        this.subject = newSubject;
    }

    setBody(newBody){
        this.body = newBody;
    }

    setMsgTime(newTime){
        this.msgTime = newTime;
    }

    setReaction(newReaction){
        this.reaction = newReaction;
    }

    setToUser(newUser){
        this.toUser = newUser;
    }

    setFromUser(newUser){
        this.fromUser = newUser;
    }
    
    setSent(isSent){
        if (isSent === true){
            this.sent = true;
        } else{
            this.sent = false;
        }
    }
    /* #endregion */

    /* #region Getters */
    getStatus(){
        return this.status;
    }

    getSubject(){
        return this.subject;
    }

    getBody(){
        return this.body;
    }

    getMsgTime(){
        return this.msgTime;
    }

    getReaction(){
        return this.reaction;
    }

    getToUser(){
        return this.toUser;
    }

    getFromUer(){
        return this.fromUser;
    }

    isSent(){
        return this.sent;
    }

    /* #endregion */

    /* #region MessageBuilder */


    MessageBuilder  = function () {
        return {
            withStatus: function (newStatus) {
                this.status = newStatus;
                return this;
            },
            withSubject: function (subject) {
                this.subject = subject;
                return this;
            },
            withBody: function (body) {
                this.body = body;
                return this;
            },
            withMsgTime: function (msgTime) {
                this.msgTime = msgTime;
                return this;
            },
            withReaction: function (rection) {
                this.reaction = rection;
                return this;
            },
            withToUser: function (toUser) {
                this.toUser = toUser;
                return this;
            },
            withFromUser: function (fromUser) {
                this.fromUser = fromUser;
                return this;
            },
            withSent: function (sent) {
                this.sent = sent;
                return this;
            },
            build: function () {
                return new Message(this.status, this.subject, this.body, this.msgTime, this.reaction, this.toUser, this.fromUser, this.sent);
            }
        };
    };
    /* #endregion */
}



module.exports = Message;