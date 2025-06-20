import React from "react";
import DataArea from "./DataArea.jsx";
import ChatArea from "./ChatArea.jsx";
const MsgArea = ({ roomKey, setDisplay }) => {
  return (
    <div className="grid grid-cols-3 h-screen w-[90vw] gap-[1rem] items-center justify-center mt-[1rem] mx-auto max-sc:flex flex-col max-sc:gap-2 scroll-smooth max-sp:items-center">
      <DataArea setDisplay={setDisplay} roomKey={roomKey} />
      <ChatArea roomKey={roomKey} />
    </div>
  );
};

export default MsgArea;
