import React from "react";
import Chat from "./Chat";

const ChatRoom = () => {
  return (
    <div className=" min-w-[420px] rounded-lg bg-[#F2F2F2] py-5 px-4 flex flex-col">
      <div className=" w-full py-2.5 px-8 bg-white flex justify-between rounded-lg">
        <button className=" rounded-lg px-8 py-2.5 bg-[white] text-xl">
          Participants
        </button>
        <button className=" rounded-lg px-8 py-2.5 bg-[#F2F2F2] text-xl">
          Chats
        </button>
      </div>
      {/* for chats */}
      <Chat />
    </div>
  );
};

export default ChatRoom;
