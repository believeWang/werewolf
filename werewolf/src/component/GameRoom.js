import React from 'react';
import SockJsClient from 'react-stomp';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../css/MessageStyle.css';
import UserInfoComponent from './UserInfoComponent';

const GameRoom = () => {
  const [messages, setMessages] = React.useState([]);
  const [typedMessage, setTypedMessage] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [roomCode, setRoomCode] = React.useState(null);
  let myClient;

  let sendMessage = () => {
    myClient.sendMessage('/app/room/' + roomCode, JSON.stringify({
      name: name,
      message: typedMessage
    }));
  };

  let displayMessages = () => {
    return (
        <div>
          {messages.map((msg, index) => {
            return (
                <div key={index}>
                  {name === msg.name ?
                      <div>
                        <p className="title1">{msg.name} : </p><br/>
                        <p>{msg.message}</p>
                      </div> :
                      <div>
                        <p className="title2">{msg.name} : </p><br/>
                        <p>{msg.message}</p>
                      </div>
                  }
                </div>)
          })}
        </div>
    );
  };

  const wsSourceUrl = 'http://localhost:8080/handler'
  return (
      <div>
        <UserInfoComponent setName={setName} setRoomCode={setRoomCode}/>
        <div className="align-center">
          <h1>Welcome to Room : {roomCode}</h1>
          <br/><br/>
        </div>
        <div className="align-center">
          User : <p className="title1"> {name}</p>
        </div>
        <div className="align-center">
          <br/><br/>
          <table>
            <tr>
              <td>
                <TextField id="outlined-basic" label="Enter Message to Send"
                           variant="outlined"
                           onChange={(event) => {
                             setTypedMessage(event.target.value)
                           }
                           }/>
              </td>
              <td>
                <Button variant="contained" color="primary"
                        onClick={sendMessage}>Send</Button>
              </td>
            </tr>
          </table>
        </div>
        <br/><br/>
        <div className="align-center">
          {displayMessages()}
        </div>
        {!!roomCode ? <SockJsClient url={wsSourceUrl}
                                    topics={['/topic/user/' + roomCode]}
                                    onConnect={() => {
                                      console.log("connected");
                                    }}
                                    onDisconnect={() => {
                                      console.log("Disconnected");
                                    }}
                                    onMessage={(msg) => {
                                      messages.push(msg);
                                      setMessages([...messages]);
                                      console.log("onMessage", messages)
                                    }}
                                    ref={(client) => {
                                      myClient = client
                                    }}/> : ""}

      </div>
  )

}

export default GameRoom;
