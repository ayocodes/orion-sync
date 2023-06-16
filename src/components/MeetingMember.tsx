import React from "react";

const MeetingMember = () => {
  return (
    <div className=" relative min-w-[520px] w-full max-w-[580px]">
      <div className="w-full bg-blue-300 h-[280px] rounded-[20px]" />
      <img
        src="/mute.svg"
        alt=""
        className=" absolute top-4 right-4 w-[42px]"
      />
      <div className=" absolute bottom-0 left-5 text-white p-2 rounded-full text-xl bg-[rgba(0,0,0,0.3)]">
      Jenelia
      </div>
    </div>
  );
};

export default MeetingMember;
