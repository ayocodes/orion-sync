import ChatRoom from "@/components/ChatRoom";
import Consensus from "@/components/Consensus";
import Controls from "@/components/Controls";
import GroupMembers from "@/components/GroupMembers";
import InactiveMembers from "@/components/InactiveMembers";
import MeetingMember from "@/components/MeetingMember";
import React from "react";

const page = () => {
  return (
    <div className=" flex justify-center gap-[30px] items-start ">
      <div className=" flex justify-center p-[30px] bg-white rounded-[30px] gap-[30px] w-full h-[calc(100vh-160px)] relative">
        {/* <GroupMembers /> */}
        <Consensus />
        <InactiveMembers />
        <Controls />
      </div>
      {/* <ChatRoom /> */}
    </div>
  );
};

export default page;
