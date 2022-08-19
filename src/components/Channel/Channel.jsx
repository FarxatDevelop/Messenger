import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./channel.css";

function Channel({ data }) {
  return (
    <div className="Channel">
      {data.map((item) => {
        return (
          <NavLink to={`/channel/${item.id}`} key={item.id}>
            <div className="contact">
              <div className="contact-img">
                <img
                  src={item.profilImg}
                  alt={item.name}
                  width={40}
                  height={40}
                />
              </div>
              <div className="contact-name">
                <h4>{item.name}</h4>
                <p>{item.messages[item.messages.length - 1].message}</p>
                <div className="isRead">
                  {item.messages[item.messages.length - 1].isMessage ? (
                    ""
                  ) : (
                    <BsCheck2All />
                  )}
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Channel;
