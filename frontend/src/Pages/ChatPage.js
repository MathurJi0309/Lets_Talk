import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get("/api/chat");
      console.log(data);
      setChats(data);
    };
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat, index) => (
        <>
          <div key={index}>{chat.chatName}</div>
        </>
      ))}
    </div>
  );
};

export default ChatPage;
