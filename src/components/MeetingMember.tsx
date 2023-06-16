import React from "react";

const MeetingMember = () => {
  return (
    <div className=" relative min-w-[520px] w-full max-w-[580px] h-[280px]">
      <div className="w-full bg-blue-300  rounded-[20px] h-full" />
      <img
        src="/mute.svg"
        alt=""
        className=" absolute top-4 right-4 w-[42px]"
      />
      <div className=" absolute bottom-8 left-5 text-white p-2 rounded-full text-xl bg-[rgba(0,0,0,0.3)]">
      Jenelia
      </div>
    </div>
  );
};

export default MeetingMember;
