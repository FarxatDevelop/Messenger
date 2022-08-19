import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import "./sendMessage.css";
// import { ContactData, GroupsData } from "../../data/data";

function SendMessage({ id, setContactData, data }) {
  const [message, setMessage] = useState("");
  const [sendMessage] = useState(data);

  const sendMessages = (isTrue) => {
    sendMessage[id].messages.push({
      message: message,
      id: sendMessage[id].messages.length,
      isMessage: isTrue,
    });

    setContactData(sendMessage);
    setMessage("");
  };
  const MessageInput = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="send-message">
      <div className="send-message-left">
        <div className="send-file">
          <i className="fas fa-paperclip"></i>
        </div>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={MessageInput}
        />
      </div>
      <button
        id="ozim"
        className="send-btn"
        type="button"
        onClick={() => sendMessages(true)}
      >
        <BiSend />
      </button>
      <button
        className="send-btn"
        type="button"
        onClick={() => sendMessages(false)}
      >
        <BiSend />
      </button>
    </div>
  );
}

export default SendMessage;
