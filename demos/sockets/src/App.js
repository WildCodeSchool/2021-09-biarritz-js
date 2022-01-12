import React, {useEffect, useState} from 'react'
import socketIOClient from "socket.io-client";

function App() {
  const [messageList, setMessageList] = useState([])
  const [nickName, setNickName] = useState('')
  const [newMessageText, setNewMessageText] = useState('')
  const [socket, setSocket] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    // envoyer le message au server
    socket.emit('messageFromClient', {
      text: newMessageText, 
      author: nickName
    })
    
  }

  useEffect(()=> {
    const s = socketIOClient('http://localhost:3001');
    setSocket(s);
  },[]);

  if (socket){
    socket.on('messageFromServer', (messages) => {
      // TODO: set the message list in the state
      setMessageList(messages);
    });
  }
  

  return (
    <div className="App">
      <h2>Messages</h2>
      {messageList.map(message => {
        return (
          <div key={message.id}>
            {message.author} : {message.text}
          </div>
        )
      })}

      <form onSubmit={handleSubmit}>
        <h2>New Message</h2>
        <input 
          type="text"
          name="author"
          placeholder="nickname"
          value={nickName}
          required
          onChange={(e) => setNickName(e.target.value)}
        />
        <input 
          type="text"
          name="messageContent"
          placeholder="message"
          value={newMessageText}
          required
          onChange={(e) => setNewMessageText(e.target.value)}
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default App;
