import React from "react";
import MeetingMember from "./MeetingMember";

const GroupMembers = () => {
  return (
    <div className=" flex flex-wrap gap-[30px] w-full justify-center h-[calc(100vh-220px)] overflow-y-scroll ">
      <MeetingMember />
      <MeetingMember />
      <MeetingMember />
      <MeetingMember />
    </div>
  );
};

export default GroupMembers;
