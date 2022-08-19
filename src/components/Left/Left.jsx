import React from "react";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Contacts from "../Contact/Contact";
import "./left.css";
import Groups from "../Group/Group";
import Channel from "../Channel/Channel";
// import { ContactData } from "../../data/data";

function Left({ ContactData, GroupData, setContactData, ChannelData }) {
  let all = [...ContactData, GroupData];
  return (
    <div className="left">
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={<Contacts isAll={true} all={all} data={ContactData} />}
        />
        <Route
          path={"/contact"}
          element={
            <Contacts
              isAll={false}
              all={all}
              data={ContactData}
              setContactData={setContactData}
            />
          }
        />
        <Route
          path={"/contact/:id"}
          element={
            <Contacts
              isAll={false}
              all={all}
              data={ContactData}
              setContactData={setContactData}
            />
          }
        />
        <Route path={"/group"} element={<Groups data={GroupData} />} />
        <Route path={"/group/:id"} element={<Groups data={GroupData} />} />
        <Route
          path={"/channel"}
          element={
            <Channel
              isAll={false}
              all={all}
              data={ChannelData}
              setContactData={setContactData}
            />
          }
        />
        <Route
          path={"/channel/:id"}
          element={
            <Channel
              isAll={false}
              all={all}
              data={ChannelData}
              setContactData={setContactData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Left;
