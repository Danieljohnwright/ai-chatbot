import React from "react";
import { useEffect, useState, useRef } from "react";
import { Chatbot } from "supersimpledev";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";
import "./App.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div ref={chatMessagesRef} className="chat-messages-container">
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    //chatbots response using external JS library
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to ChatBot."
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          className="chat-message-profile"
          src={RobotProfileImage}
          alt="robot"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img
          className="chat-message-profile"
          src={UserProfileImage}
          alt="user"
        />
      )}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatBot",
      sender: "user",
      id: "1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "2",
    },
    {
      message: "Can you get me todays date??",
      sender: "user",
      id: "3",
    },
    {
      message: "Today is November 2nd",
      sender: "robot",
      id: "4",
    },
  ]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
