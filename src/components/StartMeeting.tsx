import React from "react";

const StartMeeting = () => {
  return (
    <div className=" w-full p-8 bg-[#303030] rounded-[20px] flex flex-col gap-4 items-start">
      <p className=" text-[#fff] font-medium text-4xl">Start a meeting</p>
      <div className=" flex flex-col gap-4">
        <div className=" bg-[#606060] flex p-2 gap-2.5 items-center rounded-[10px]">
          <img src="/dotBox.svg" alt="" className=" w-10" />
          <input
            type="text"
            className=" w-[450px] bg-transparent outline-none text-white"
            placeholder="Enter a title..."
          />
        </div>
        <div className=" flex gap-4">
          <div className=" flex gap-2 items-center">
            <div className=" w-5 h-5 rounded-[5px] bg-[#606060]" />
            <p className=" font-medium text-lg text-white">Consensus Meeting</p>
          </div>
          <div className=" flex gap-2 items-center">
            <div className=" w-5 h-5 rounded-[5px] bg-[#606060]" />
            <p className=" font-medium text-lg text-white">Record Meeting</p>
          </div>
        </div>
      </div>
      <button className=" text-white bg-[#4F81FF] rounded-[10px] w-[232px]  py-4">Start</button>
    </div>
  );
};

export default StartMeeting;
