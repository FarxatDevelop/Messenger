import React from "react";
import { Routes, Route } from "react-router-dom";
import RightInfo from "./RightInfo";
import "./right.css";

function Right({ ContactData, setContactData, GroupData, ChannelData }) {
  return (
    <div className="right">
      <Routes>
        <Route
          path={"/"}
          element={<h4>Select a chat to start messaging </h4>}
        />
        <Route
          path={"/contact"}
          element={<h4>Select a chat to start messaging </h4>}
        />
        <Route
          path={"/contact/:id"}
          element={
            <RightInfo
              isGroup={false}
              data={ContactData}
              setContactData={setContactData}
            />
          }
        />

        <Route
          path={"/group"}
          element={<h4>Select a chat to start messaging </h4>}
        />
        <Route
          path={"/group/:id"}
          element={
            <RightInfo
              data={GroupData}
              isGroup={true}
              setContactData={setContactData}
            />
          }
        />

        <Route
          path={"/channel"}
          element={<h4>Select a chat to start messaging </h4>}
        />
        <Route
          path={"/channel/:id"}
          element={
            <RightInfo
              data={ChannelData}
              isGroup={true}
              setContactData={setContactData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Right;
