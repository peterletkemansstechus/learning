const Message = require('./message');
const Client = require('./client');
const User = require('./user');

const MESSAGE_TIME = new Date().toUTCString();

describe("Client", () => {
    test('client -> add to array', () => {
        const client = new Client();
        const message = new Message().MessageBuilder()
        .withStatus('status1')
        .withSubject('subject2')
        .withBody('body3')
        .withMsgTime(MESSAGE_TIME)
        .withReaction('reaction5')
        .withToUser('toUser6')
        .withFromUser('fromUser7')
        .build();  
      const setClientSpy = jest.spyOn(client,'addMessage');
      client.addMessage(message);
      expect(setClientSpy).toBeCalled();
      let secondCount = client.messageCount();
      expect(secondCount).toBe(1);
    });
    
    test('cleint -> set all to sent', () => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'sendMessages');

        client.sendMessages();
        for (i = 0;i < client.messages.length;i++){
            expect(true).toBe(client.messages[i].isSent());
        }
        expect(setClientSpy).toBeCalled();
        
      });

    test('client -> can find message by id',() => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageByID');
        const msg = client.findMessageByID(5);
        expect(setClientSpy).toBeCalled();
        expect(msg.getSubject()).toBe('subject5');
        expect(msg.getBody()).toBe('body5');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('reaction5');
        expect(msg.toUser.firstName).toBe('to frist5');
        expect(msg.toUser.lastName).toBe('to last5');
        expect(msg.toUser.email).toBe('to email5');
        expect(msg.toUser.password).toBe('to pass5');
        expect(msg.fromUser.firstName).toBe('from first5');
        expect(msg.fromUser.lastName).toBe('from last5');
        expect(msg.fromUser.email).toBe('from email5');
        expect(msg.fromUser.password).toBe('from pass5');
        expect(msg.isSent()).toBe(true);
        expect(msg.getStatus()).toBe('read');
    })

    test('client -> negative index message find by id', () =>{
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageByID');
        const msg = client.findMessageByID(-5);
        expect(setClientSpy).toBeCalled();
        expect(msg.getSubject()).toBe('subject0');
        expect(msg.getBody()).toBe('body0');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('reaction0');
        expect(msg.toUser.firstName).toBe('to frist0');
        expect(msg.toUser.lastName).toBe('to last0');
        expect(msg.toUser.email).toBe('to email0');
        expect(msg.toUser.password).toBe('to pass0');
        expect(msg.fromUser.firstName).toBe('from first0');
        expect(msg.fromUser.lastName).toBe('from last0');
        expect(msg.fromUser.email).toBe('from email0');
        expect(msg.fromUser.password).toBe('from pass0');
        expect(msg.isSent()).toBe(false);
        expect(msg.getStatus()).toBe('unread');
    })

    test('client -> index > message size find by id', () =>{
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageByID');
        const msg = client.findMessageByID(90);
        expect(setClientSpy).toBeCalled();
        expect(msg.getSubject()).toBe('subject9');
        expect(msg.getBody()).toBe('body9');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('reaction9');
        expect(msg.toUser.firstName).toBe('to frist9');
        expect(msg.toUser.lastName).toBe('to last9');
        expect(msg.toUser.email).toBe('to email9');
        expect(msg.toUser.password).toBe('to pass9');
        expect(msg.fromUser.firstName).toBe('from first9');
        expect(msg.fromUser.lastName).toBe('from last9');
        expect(msg.fromUser.email).toBe('from email9');
        expect(msg.fromUser.password).toBe('from pass9');
        expect(msg.isSent()).toBe(true);
        expect(msg.getStatus()).toBe('read');
    })

    test('client -> message find by time',() => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageByTime');
        const msg =  client.findMessageByTime(MESSAGE_TIME);
        expect(setClientSpy).toBeCalled();
        expect(msg.getSubject()).toBe('subject0');
        expect(msg.getBody()).toBe('body0');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('reaction0');
        expect(msg.toUser.firstName).toBe('to frist0');
        expect(msg.toUser.lastName).toBe('to last0');
        expect(msg.toUser.email).toBe('to email0');
        expect(msg.toUser.password).toBe('to pass0');
        expect(msg.fromUser.firstName).toBe('from first0');
        expect(msg.fromUser.lastName).toBe('from last0');
        expect(msg.fromUser.email).toBe('from email0');
        expect(msg.fromUser.password).toBe('from pass0');
        expect(msg.isSent()).toBe(false);
        expect(msg.getStatus()).toBe('unread');
    })

    test('client -> cannot find by time',() => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageByTime');
        expect(() => client.findMessageByTime('bad time')).toThrow(TypeError);
        expect(setClientSpy).toBeCalled();
    })

    test('client -> find by body', () => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageByBody');
        const msg = client.findMessageByBody('body6');
        expect(setClientSpy).toBeCalled();

        expect(msg.getSubject()).toBe('subject6');
        expect(msg.getBody()).toBe('body6');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('reaction6');
        expect(msg.toUser.firstName).toBe('to frist6');
        expect(msg.toUser.lastName).toBe('to last6');
        expect(msg.toUser.email).toBe('to email6');
        expect(msg.toUser.password).toBe('to pass6');
        expect(msg.fromUser.firstName).toBe('from first6');
        expect(msg.fromUser.lastName).toBe('from last6');
        expect(msg.fromUser.email).toBe('from email6');
        expect(msg.fromUser.password).toBe('from pass6');
        expect(msg.isSent()).toBe(false);
        expect(msg.getStatus()).toBe('unread');
    })
    
    test('client -> cannot find by body',() => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageByBody');
        expect(() => client.findMessageByBody('bad boidy')).toThrow(TypeError);
        expect(setClientSpy).toBeCalled();
    })

    test('client -> find by subject', () => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageBySubject');
        const msg = client.findMessageBySubject('subject8');
        expect(setClientSpy).toBeCalled();

        expect(msg.getSubject()).toBe('subject8');
        expect(msg.getBody()).toBe('body8');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('reaction8');
        expect(msg.toUser.firstName).toBe('to frist8');
        expect(msg.toUser.lastName).toBe('to last8');
        expect(msg.toUser.email).toBe('to email8');
        expect(msg.toUser.password).toBe('to pass8');
        expect(msg.fromUser.firstName).toBe('from first8');
        expect(msg.fromUser.lastName).toBe('from last8');
        expect(msg.fromUser.email).toBe('from email8');
        expect(msg.fromUser.password).toBe('from pass8');
        expect(msg.isSent()).toBe(false);
        expect(msg.getStatus()).toBe('unread');
    })
    
    test('client -> cannot find by subject',() => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'findMessageBySubject');
        expect(() => client.findMessageBySubject('bad subject')).toThrow(TypeError);
        expect(setClientSpy).toBeCalled();
    })

    test('client -> change message status', () => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'changeMessageStatus');
        const msg = client.findMessageByID(2);
        client.changeMessageStatus(msg,'read','thumbs up',true);
        expect(setClientSpy).toBeCalled();

        expect(msg.getSubject()).toBe('subject2');
        expect(msg.getBody()).toBe('body2');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('thumbs up');
        expect(msg.toUser.firstName).toBe('to frist2');
        expect(msg.toUser.lastName).toBe('to last2');
        expect(msg.toUser.email).toBe('to email2');
        expect(msg.toUser.password).toBe('to pass2');
        expect(msg.fromUser.firstName).toBe('from first2');
        expect(msg.fromUser.lastName).toBe('from last2');
        expect(msg.fromUser.email).toBe('from email2');
        expect(msg.fromUser.password).toBe('from pass2');
        expect(msg.isSent()).toBe(true);
        expect(msg.getStatus()).toBe('read');
    })

    test('client -> invalid change message status', () => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'changeMessageStatus');
        const msg = client.findMessageByID(2);
        client.changeMessageStatus(msg,'funny','thumbs up','work');
        expect(setClientSpy).toBeCalled();

        expect(msg.getSubject()).toBe('subject2');
        expect(msg.getBody()).toBe('body2');
        expect(msg.getMsgTime()).toBe(MESSAGE_TIME);
        expect(msg.getReaction()).toBe('thumbs up');
        expect(msg.toUser.firstName).toBe('to frist2');
        expect(msg.toUser.lastName).toBe('to last2');
        expect(msg.toUser.email).toBe('to email2');
        expect(msg.toUser.password).toBe('to pass2');
        expect(msg.fromUser.firstName).toBe('from first2');
        expect(msg.fromUser.lastName).toBe('from last2');
        expect(msg.fromUser.email).toBe('from email2');
        expect(msg.fromUser.password).toBe('from pass2');
        expect(msg.isSent()).toBe(false);
        expect(msg.getStatus()).toBe('unread');
    })
    test('client -> view message',() => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'viewMessage');
        const msg = client.findMessageByID(2);
        const displayMsg = client.viewMessage(msg);
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

        expect(setClientSpy).toBeCalled();
        expect(displayMsg).toBe(formatedMsg);
        
    })
    
    test('client -> cannot view message',() => {
        const client = initalizeClient();
        const setClientSpy = jest.spyOn(client,'viewMessage');
        const msg = null;

        expect(() => client.viewMessage(msg)).toThrow(TypeError);
        expect(setClientSpy).toBeCalled();
        
    })
})

function initalizeClient (){
    const client = new Client();
    /* begin add some message objects */
    let status = '';
    let sent = false;
    for (i = 0;i<10;i++){
        if (i % 2 == 0){
            status = 'unread';
            sent = false;
        } else {
            status = 'read';
            sent = true;
        }
        toUser = new User();
        fromUser = new User();
        toUser.email = 'to email' + i;
        toUser.firstName = 'to frist' + i;
        toUser.lastName = 'to last' + i;
        toUser.password = 'to pass' + i;
        fromUser.email = 'from email' + i;
        fromUser.firstName = 'from first' + i;
        fromUser.lastName = 'from last' + i;
        fromUser.password = 'from pass' + i;
        client.addMessage(new Message().MessageBuilder()
        .withStatus(status)
        .withSubject('subject' + i)
        .withBody('body' + i)
        .withMsgTime(MESSAGE_TIME)
        .withReaction('reaction' + i)
        .withToUser(toUser)
        .withFromUser(fromUser)
        .withSent(sent)
        .build());
    }
    /* end add some message object */
    return client;
}