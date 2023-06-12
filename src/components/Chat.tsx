import React from "react";

const Chat = () => {
  return (
    <div className=" flex bg-red-200 h-full flex-col relative">
      <div className=" flex flex-grow bg-blue-300 w-full"></div>
      <div className="absolute inset-x-0 flex justify-center bottom-0">
        <div className=" bg-white px-5 flex justify-between py-2.5 gap-6">
          <div className=" border border-[#B6B6B6] w-full rounded-full px-2 py-1 flex items-center gap-2  pl-4">
            <img src="/paperclip.svg" alt="" />
            <input
              type="text"
              className=" w-full focus:outline-none"
              placeholder="Message..."
            />
          </div>
          <img src="/send.svg" alt="" className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
