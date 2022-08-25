import React from "react";
import { useState } from "react";
import { ContactDatas, GroupsData, ChannelsData } from "../../data/data";
import Left from "../Left/Left";
import Right from "../Right/Right";
import "./pages.css";

function Pages() {
  // State
  const [ContactData, setContactData] = useState(ContactDatas);
  const [GroupData, setGroupData] = useState(GroupsData);
  const [ChannelData, setChannelData] = useState(ChannelsData);
  return (
    <div className="pages">
      <Left
        ContactData={ContactData}
        GroupData={GroupData}
        setContactData={setContactData}
        setGroupData={setGroupData}
        ChannelData={ChannelData}
        setChannelData={setChannelData}
      />
      <Right
        ContactData={ContactData}
        GroupData={GroupData}
        setContactData={setContactData}
        setGroupData={setGroupData}
        ChannelData={ChannelData}
        setChannelData={setChannelData}
      />
    </div>
  );
}

export default Pages;
