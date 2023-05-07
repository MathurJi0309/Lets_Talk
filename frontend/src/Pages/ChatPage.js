import React, { useEffect } from "react";
import axios from "axios";
const ChatPage = () => {
  useEffect(() => {
    const fetchChats = async() => {
      const data = await axios.get("/api/chat");
      console.log(data);
    };
    fetchChats();
  }, []);
  return <div>ChatPage</div>;
};

export default ChatPage;
