import React from "react";
import "./messages.css";

function Messages({ data, id }) {
  return (
    <main
      onScroll={(e) =>
        (e.currentTarget.offsetHeight = e.currentTarget.scrollTop)
      }
    >
      {data[id].messages.map((item, index) => {
        return (
          <div key={index} className={item.isMessage ? "ME" : "TO"}>
            <h4 className={item.isMessage ? "me" : "to"} key={item.id}>
              {item.message}
            </h4>
          </div>
        );
      })}
    </main>
  );
}

export default Messages;
