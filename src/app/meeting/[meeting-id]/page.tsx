import ChatRoom from "@/components/ChatRoom";
import GroupMembers from "@/components/GroupMembers";
import InactiveMembers from "@/components/InactiveMembers";
import MeetingMember from "@/components/MeetingMember";
import React from "react";

const page = () => {
  return (
    <div className=" flex justify-center gap-[30px] items-start">
      <div className=" flex justify-center p-[30px] bg-white rounded-[30px] gap-[30px] w-full h-[670px]">
        <GroupMembers />
        <InactiveMembers />
      </div>
      {/* <ChatRoom /> */}
    </div>
  );
};

export default page;
