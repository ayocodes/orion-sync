import Recording from "@/components/Recording";
import StartMeeting from "@/components/StartMeeting";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-8 items-start">
      <StartMeeting />
      <p className=" text-[#303030] font-medium text-4xl">Recordings</p>
      <div className=" grid grid-cols-4 gap-8">
        <Recording />
        <Recording />
      </div>
    </div>
  );
};

export default page;
