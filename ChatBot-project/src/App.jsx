import React from "react";
import { useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

export function App() {
  const today = new Date();
  const dynamicDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

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
      message: `Today is ${dynamicDate}`,
      sender: "robot",
      id: "4",
    },
  ]);

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
