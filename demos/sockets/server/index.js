const express = require('express');
const uniqid = require('uniqid');
const app = express();
const socketIO = require('socket.io');

const server = app.listen(3001);

const io = socketIO(server, {
  cors: { origin:['http://localhost:3000','http://localhost:3002'] }
});

const messages = [
    { id: uniqid(), author: 'server', text: 'welcome to WildChat' },
   ];

io.on('connect', (socket) => {
    console.log('user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.emit('messageFromServer', messages);

    socket.on('messageFromClient', (messageTextAndAuthor) => {
        const newMessage = {id: uniqid(), ...messageTextAndAuthor}
        console.log('new message from a client: ', newMessage)
        // TODO: add the message to the collection
        messages.push(newMessage);
        io.emit('messageFromServer', messages);
      })
      
  });
  
