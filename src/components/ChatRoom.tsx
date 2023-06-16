import React from "react";
import Chat from "./Chat";

const ChatRoom = () => {
  return (
    <div className=" max-w-[400px] w-full rounded-[20px] bg-white p-[30px] flex flex-col justify-between items-center overflow-hidden h-[calc(100vh-160px)]">
      <div className=" flex flex-col gap-[30px] w-full">
        <p className=" font-medium text-4xl text-[#303030]">Chat</p>
        <Chat />
      </div>

      <div className=" w-full">
        <input
          type="text"
          className=" bg-[#E9E9E9] p-[20px] w-full outline-none rounded-full"
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
};

export default ChatRoom;
