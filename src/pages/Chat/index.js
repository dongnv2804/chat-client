import React, { useEffect } from "react";
import { GiftedChat } from "react-gifted-chat";
import socket from "../../socket";
import "./index.css";

const ChatPage = () => {
  const [listMess, setListMess] = useState([]);
  useEffect(() => {
    socket.on("join", (res) => {
      console.log(res);
    });
  }, []);

  const sendMessage = ({ message, user }) => {
    console.log(message, user);
  };
  return (
    <>
      <div>Hello chat page</div>
      <GiftedChat messages={listMess} onSend={sendMessage} />
    </>
  );
};

export default ChatPage;
