import ChatRoom from "@/components/ChatRoom";
import Connect from "@/components/Connect";
import Controls from "@/components/Controls";
import MemberCard from "@/components/MemberCard";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-7 px-[60px] h-screen">
      <Navbar />
      <div className=" pt-5 flex gap-8 w-full h-full pb-8">
        {/* 1st screen */}
        {/* <div className=" w-full grid grid-cols-2 gap-4 px-[60px] h-[550px] overflow-y-scroll">
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div> */}
        {/*  */}
        {/* 2nd screen */}
        {/* <Connect />
        <Members /> */}
        {/*  */}
        {/* 3rd screen */}
        <div className=" w-full grid grid-cols-2 gap-4  h-[550px] overflow-y-scroll">
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
        <ChatRoom />
      </div>
      <Controls />
    </main>
  );
};

export default page;
