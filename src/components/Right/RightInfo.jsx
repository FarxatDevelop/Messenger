import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Messages from "./Messages";
import { BiSend } from "react-icons/bi";
import "./sendMessage.css";
import "./rightInfo.css";

function RightInfo({ isGroup, data, setContactData, ContactData }) {
  const { id } = useParams();
  const { name, profilImg } = data[id];
  const [message, setMessage] = useState("");

  const sendMessages = (isTrue) => {
    if (message.trim()) {
      ContactData[id].messages.push({
        message: message,
        id: 1,
        isMessage: isTrue,
      });
    }
    console.log(ContactData[id].messages);

    setMessage("");
    setContactData([...ContactData]);
  };
  const MessageInput = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="right-info">
      <header>
        <div className="profil-img">
          <img src={profilImg} alt="" width={40} height={40} />
        </div>
        <div className="profil-name">
          <h3>{name}</h3>
          <p> {isGroup ? "255 248 members" : "Online"} </p>
        </div>
      </header>
      <Messages id={id} data={data} />
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
    </div>
  );
}

export default RightInfo;
