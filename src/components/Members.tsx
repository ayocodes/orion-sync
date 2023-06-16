import React from "react";
import MemberCard from "./MeetingMember";

const Members = () => {
  return (
    <div
      className=" w-[353px] gap-5 flex flex-col overflow-y-scroll h-[550px]"
    >
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  );
};

export default Members;
