import React from "react";
// import { ContactData } from "../../data/data";
import { useParams } from "react-router-dom";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import "./rightInfo.css";

function RightInfo({ isGroup, data, setContactData }) {
  const { id } = useParams();
  const { name, profilImg } = data[id];

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
      <SendMessage data={data} id={id} setContactData={setContactData} />
    </div>
  );
}

export default RightInfo;
