import { Widget,addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import React,{ Component } from 'react';

export default class Chatbot extends Component
{
    componentDidMount() {
        addResponseMessage("Hey there, do you have a minute. May I know your name ?");
      }
    
      handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
        fetch('https://portchatbot.herokuapp.com/send-msg',{
          method:'POST',
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify({
            data:newMessage
          })
        })
        .then(response => {
          if (response.ok) 
          {
              return response;
          }
          else
          {
              var error=new Error("Error "+response.status+": "+response.statusText);
              error.response = response;
              throw(error);
          }
          },
          error =>{
              var errMess = new Error(error.message);
              throw errMess;
          })
          .then(response=>response.json())
          .then(response => addResponseMessage(response.Reply))
          .catch(error => {console.log('Error occurred. ',error.message)
        })
      }

    render()
    {
        return(
            <Widget handleNewUserMessage={this.handleNewUserMessage} subtitle="Always ready to help" autofocus={false} profileAvatar={require('./profilepic.jpg')} titleAvatar={require('./bot.png')}/>
        );
    }
}